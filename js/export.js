/**
 * Professional Multi-Format Export Engine
 * 100% Live-Preview & Guest-View Fidelity Capture Engine
 * Exports Front & Back together across WhatsApp, Email JPG, Print PDF, and PNG.
 */

export class CardExporter {
  constructor(editor) {
    this.editor = editor;
    this._busy = false;
    this._toastTimer = null;
  }

  getBaseFilename() {
    const title = this.editor.currentTemplate?.title || 'invitation';
    return String(title)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'invitation';
  }

  setBusy(busy, label = 'Preparing export…') {
    this._busy = busy;
    let overlay = document.getElementById('export-busy-overlay');
    if (busy) {
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'export-busy-overlay';
        overlay.className = 'export-busy-overlay';
        overlay.innerHTML = `
          <div class="export-busy-card" role="status" aria-live="polite">
            <div class="export-busy-spinner" aria-hidden="true"></div>
            <p class="export-busy-title">Exporting invitation</p>
            <p class="export-busy-label">${label}</p>
          </div>`;
        document.body.appendChild(overlay);
      } else {
        const labelEl = overlay.querySelector('.export-busy-label');
        if (labelEl) labelEl.textContent = label;
        overlay.classList.remove('is-hidden');
      }
      document.getElementById('export-menu')?.classList.add('hidden');
    } else if (overlay) {
      overlay.classList.add('is-hidden');
    }
  }

  showToast(message, tone = 'ok') {
    let toast = document.getElementById('export-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'export-toast';
      toast.className = 'export-toast';
      document.body.appendChild(toast);
    }
    toast.dataset.tone = tone;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 4200);
  }

  waitForPaint() {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTimeout(resolve, 80));
      });
    });
  }

  waitForImages(root) {
    if (!root) return Promise.resolve();
    const images = [...root.querySelectorAll('img')];
    if (!images.length) return Promise.resolve();
    return Promise.all(
      images.map((img) => {
        if (img.complete && img.naturalWidth > 0) return Promise.resolve();
        return new Promise((resolve) => {
          const done = () => resolve();
          img.addEventListener('load', done, { once: true });
          img.addEventListener('error', done, { once: true });
          setTimeout(done, 2500);
        });
      })
    );
  }

  dataUrlToBlob(dataUrl) {
    const [header, data] = dataUrl.split(',');
    const mime = (header.match(/:(.*?);/) || [])[1] || 'image/png';
    const binary = atob(data);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return new Blob([bytes], { type: mime });
  }

  triggerDownload(dataUrl, filename) {
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = filename;
    link.href = url;
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  /**
   * Spaced sequential downloads to avoid browser popup/download throttling.
   */
  async triggerSequentialDownloads(downloads) {
    for (let i = 0; i < downloads.length; i++) {
      const item = downloads[i];
      if (item.blob) {
        this.downloadBlob(item.blob, item.filename);
      } else if (item.dataUrl) {
        this.triggerDownload(item.dataUrl, item.filename);
      }
      if (i < downloads.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 380));
      }
    }
  }

  getStage() {
    return document.getElementById('card-canvas-stage');
  }

  /**
   * Rasterize text nodes to images so export matches Guest View
   * (avoids html2canvas clipping/mis-aligning script + foil fonts).
   */
  async rasterizeTextsForExport(stage) {
    const textNodes = [...stage.querySelectorAll('.canvas-element[data-el-type="text"]')];
    const dpr = 3;

    for (const elNode of textNodes) {
      const inner = elNode.querySelector('.text-content-inner');
      const run = elNode.querySelector('.text-foil-run') || inner;
      if (!inner || !run) continue;

      const raw = (run.innerText || run.textContent || '').replace(/\r\n/g, '\n');
      if (!raw.trim()) continue;

      const lines = raw.split('\n');
      const cs = window.getComputedStyle(run);
      const parentCs = window.getComputedStyle(inner);
      const boxW = Math.max(1, elNode.offsetWidth || parseFloat(elNode.style.width) || 100);
      const boxH = Math.max(1, elNode.offsetHeight || parseFloat(elNode.style.height) || 40);
      const fontSize = parseFloat(cs.fontSize) || 16;
      const font = `${cs.fontStyle || 'normal'} ${cs.fontWeight || '400'} ${fontSize}px ${cs.fontFamily || 'serif'}`;
      const align = (parentCs.textAlign || cs.textAlign || 'center').toLowerCase();
      const letterSpacing = cs.letterSpacing;
      const lineHeightRaw = parentCs.lineHeight;
      const lineHeight = (!lineHeightRaw || lineHeightRaw === 'normal')
        ? fontSize * 1.2
        : (parseFloat(lineHeightRaw) || fontSize * 1.2);
      const isFoilGold = run.classList.contains('foil-gold');
      const isFoilRose = run.classList.contains('foil-rose');
      const isFoilSilver = run.classList.contains('foil-silver');

      const measureCanvas = document.createElement('canvas');
      const measureCtx = measureCanvas.getContext('2d');
      measureCtx.font = font;
      if (letterSpacing && letterSpacing !== 'normal' && 'letterSpacing' in measureCtx) {
        measureCtx.letterSpacing = letterSpacing;
      }

      let maxLineW = 0;
      let totalAscent = 0;
      let totalDescent = 0;
      lines.forEach((line, idx) => {
        const m = measureCtx.measureText(line || ' ');
        maxLineW = Math.max(maxLineW, m.width || 0);
        const ascent = m.actualBoundingBoxAscent ?? fontSize * 0.85;
        const descent = m.actualBoundingBoxDescent ?? fontSize * 0.35;
        if (idx === 0) totalAscent = ascent;
        if (idx === lines.length - 1) totalDescent = descent;
      });

      const padX = Math.ceil(fontSize * 0.4);
      const padY = Math.ceil(fontSize * 0.65);
      const textBlockH = lines.length <= 1
        ? (totalAscent + totalDescent)
        : ((lines.length - 1) * lineHeight + totalAscent + totalDescent);

      // Keep authored box width (alignment), allow taller bitmap for script flourishes
      const canvasW = Math.max(boxW, Math.ceil(maxLineW + padX * 2));
      const canvasH = Math.max(boxH, Math.ceil(textBlockH + padY * 2));

      const canvas = document.createElement('canvas');
      canvas.width = Math.ceil(canvasW * dpr);
      canvas.height = Math.ceil(canvasH * dpr);
      const ctx = canvas.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, canvasW, canvasH);
      ctx.font = font;
      if (letterSpacing && letterSpacing !== 'normal' && 'letterSpacing' in ctx) {
        ctx.letterSpacing = letterSpacing;
      }
      ctx.textBaseline = 'alphabetic';

      if (isFoilGold) {
        const grad = ctx.createLinearGradient(0, 0, canvasW, canvasH);
        grad.addColorStop(0, '#BF953F');
        grad.addColorStop(0.25, '#FCF6BA');
        grad.addColorStop(0.5, '#D4AF37');
        grad.addColorStop(0.75, '#FBF5B7');
        grad.addColorStop(1, '#AA771C');
        ctx.fillStyle = grad;
      } else if (isFoilRose) {
        const grad = ctx.createLinearGradient(0, 0, canvasW, canvasH);
        grad.addColorStop(0, '#B76E79');
        grad.addColorStop(0.5, '#FFD1DC');
        grad.addColorStop(1, '#8B4513');
        ctx.fillStyle = grad;
      } else if (isFoilSilver) {
        const grad = ctx.createLinearGradient(0, 0, canvasW, canvasH);
        grad.addColorStop(0, '#BDC3C7');
        grad.addColorStop(0.5, '#FFFFFF');
        grad.addColorStop(1, '#7F8C8D');
        ctx.fillStyle = grad;
      } else {
        // Prefer authored color (same as Guest View non-foil text)
        ctx.fillStyle = cs.color || parentCs.color || '#D4AF37';
      }

      const blockTop = (canvasH - textBlockH) / 2;
      let x = canvasW / 2;
      ctx.textAlign = 'center';
      if (align === 'left' || align === 'start') {
        ctx.textAlign = 'left';
        x = padX;
      } else if (align === 'right' || align === 'end') {
        ctx.textAlign = 'right';
        x = canvasW - padX;
      }

      lines.forEach((line, idx) => {
        const m = ctx.measureText(line || ' ');
        const ascent = m.actualBoundingBoxAscent ?? fontSize * 0.85;
        const baselineY = blockTop + ascent + idx * lineHeight;
        ctx.fillText(line, x, baselineY);
      });

      const img = new Image();
      img.alt = raw;
      img.decoding = 'sync';
      img.src = canvas.toDataURL('image/png');

      // Center the (possibly taller) glyph bitmap on the authored text box
      elNode.style.overflow = 'visible';
      inner.className = 'text-content-inner w-full h-full';
      inner.style.cssText = `
        display: block !important;
        position: relative !important;
        width: 100% !important;
        height: 100% !important;
        overflow: visible !important;
        margin: 0 !important;
        padding: 0 !important;
      `;
      img.style.cssText = `
        position: absolute;
        left: 50%;
        top: 50%;
        width: ${canvasW}px;
        height: ${canvasH}px;
        max-width: none;
        transform: translate(-50%, -50%);
        pointer-events: none;
        user-select: none;
      `;
      inner.innerHTML = '';
      inner.appendChild(img);
    }

    await Promise.all(
      [...stage.querySelectorAll('img')].map((img) => {
        if (img.complete && img.naturalWidth > 0) return Promise.resolve();
        return new Promise((resolve) => {
          img.addEventListener('load', resolve, { once: true });
          img.addEventListener('error', resolve, { once: true });
          setTimeout(resolve, 2000);
        });
      })
    );
  }

  /**
   * Captures an exact card side with Guest-View fidelity.
   * Builds the same stage Guest View uses, then rasterizes text before html2canvas.
   */
  async captureSide(side = 'front', options = {}) {
    if (!window.html2canvas) {
      throw new Error('Export engine is still loading. Please try again in a moment.');
    }
    const t = this.editor.currentTemplate;
    if (!t) throw new Error('No invitation template loaded.');

    if (this.editor.isInlineEditing && typeof this.editor.finishInlineEdit === 'function') {
      try { this.editor.finishInlineEdit(); } catch (_) { /* ignore */ }
    }

    const {
      scale = 3,
      backgroundColor = null,
      type = 'image/png',
      quality = 0.96
    } = options;

    const elements = side === 'front' ? (t.front || []) : (t.back || []);
    const bgTexture = t.bgTexture || 'texture-deckle';
    const bgColor = t.bgColor || '#FAF7F2';
    const bgImage = t.bgImage ? this.editor.getEffectiveBg(t.bgImage) : '';
    const effectiveBg = (type === 'image/jpeg' || type === 'image/jpg')
      ? (backgroundColor || (bgImage ? '#ffffff' : bgColor))
      : (backgroundColor !== undefined ? backgroundColor : (bgImage ? null : bgColor));

    // Guest-View identical stage (400×560), mounted off-screen for capture
    const exportCard = document.createElement('div');
    exportCard.id = 'export-card-stage';
    exportCard.className = `guest-card-stage export-card-stage select-none ${bgImage ? '' : bgTexture}`;
    exportCard.style.cssText = `
      position: fixed !important;
      left: -10000px !important;
      top: 0 !important;
      width: 400px !important;
      height: 560px !important;
      min-width: 400px !important;
      max-width: 400px !important;
      min-height: 560px !important;
      max-height: 560px !important;
      box-sizing: border-box !important;
      margin: 0 !important;
      padding: 0 !important;
      border: none !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      transform: none !important;
      overflow: hidden !important;
      z-index: 100000 !important;
      pointer-events: none !important;
      background-color: ${bgColor} !important;
      ${bgImage ? `background-image: url('${bgImage}') !important; background-size: cover !important; background-position: center !important;` : ''}
    `;

    exportCard.innerHTML = `
      <svg width="0" height="0" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#BF953F" />
            <stop offset="25%" stop-color="#FCF6BA" />
            <stop offset="50%" stop-color="#B38728" />
            <stop offset="75%" stop-color="#FBF5B7" />
            <stop offset="100%" stop-color="#AA771C" />
          </linearGradient>
          <linearGradient id="roseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#B76E79" />
            <stop offset="50%" stop-color="#FFD1DC" />
            <stop offset="100%" stop-color="#8B4513" />
          </linearGradient>
        </defs>
      </svg>
      <div class="absolute inset-0 w-full h-full" style="position:absolute;inset:0;width:400px;height:560px;overflow:hidden;">
        ${elements.map(el => this.editor.renderElementHTML(el, { preview: true, previewKey: 'exp-' + side })).join('')}
      </div>
    `;

    if (window.QRCode) {
      elements.forEach((el) => {
        if (el.type !== 'qr-code') return;
        const qrBox = exportCard.querySelector(`#qr-box-pv-exp-${side}-${el.id}`);
        if (!qrBox) return;
        try {
          qrBox.innerHTML = '';
          new window.QRCode(qrBox, {
            text: el.qrValue || 'https://wedbuilder.example/rsvp',
            width: Math.max(30, el.width - 12),
            height: Math.max(30, el.height - 12),
            colorDark: '#111111',
            colorLight: '#ffffff',
            correctLevel: window.QRCode.CorrectLevel?.M || 0
          });
        } catch (qrErr) {
          console.warn('QR render fallback in export:', qrErr);
        }
      });
    }

    document.body.appendChild(exportCard);

    try {
      if (bgImage) {
        await new Promise((resolve) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = resolve;
          img.onerror = resolve;
          img.src = bgImage;
          if (img.complete) resolve();
        });
      }

      if (document.fonts?.ready) {
        try { await document.fonts.ready; } catch (_) { /* ignore */ }
      }

      try {
        const fontLoads = [];
        elements.forEach((el) => {
          if (el.type !== 'text' || !el.fontFamily) return;
          const family = String(el.fontFamily).replace(/['"]/g, '').split(',')[0].trim();
          if (!family) return;
          const size = Math.max(12, el.fontSize || 16);
          fontLoads.push(document.fonts.load(`${el.fontWeight || 400} ${size}px "${family}"`));
        });
        await Promise.all(fontLoads.map((p) => p.catch(() => null)));
      } catch (_) { /* ignore */ }

      await this.waitForImages(exportCard);
      await this.waitForPaint();
      await new Promise((r) => setTimeout(r, 80));

      // Guest-View exact text look via canvas glyphs (no html2canvas text bugs)
      await this.rasterizeTextsForExport(exportCard);
      await this.waitForPaint();

      const canvas = await window.html2canvas(exportCard, {
        scale,
        useCORS: true,
        allowTaint: false,
        backgroundColor: effectiveBg,
        logging: false,
        imageTimeout: 10000,
        width: 400,
        height: 560,
        windowWidth: 400,
        windowHeight: 560,
        x: 0,
        y: 0,
        scrollX: 0,
        scrollY: 0,
        onclone: (clonedDoc) => {
          const overlay = clonedDoc.getElementById('export-busy-overlay');
          if (overlay) overlay.style.display = 'none';
          clonedDoc.getElementById('guest-experience-modal')?.remove();

          const clonedCard = clonedDoc.getElementById('export-card-stage');
          if (clonedCard) {
            clonedCard.style.left = '0px';
            clonedCard.style.top = '0px';
            clonedCard.style.transform = 'none';
            clonedCard.style.position = 'fixed';
          }
        }
      });

      if (type === 'image/jpeg' || type === 'image/jpg') {
        return {
          canvas,
          dataUrl: canvas.toDataURL('image/jpeg', quality),
          mime: 'image/jpeg'
        };
      }

      return {
        canvas,
        dataUrl: canvas.toDataURL('image/png'),
        mime: 'image/png'
      };
    } finally {
      if (exportCard.parentNode) {
        exportCard.parentNode.removeChild(exportCard);
      }
    }
  }

  /**
   * Fallback for single-stage capture (delegates to captureSide)
   */
  async captureStage(options = {}) {
    return this.captureSide(this.editor.activeSide || 'front', options);
  }

  /**
   * Creates a luxury side-by-side presentation canvas displaying Front and Back cards together.
   */
  createCompositeCanvas(frontCanvas, backCanvas) {
    const t = this.editor.currentTemplate || {};
    const title = t.title || 'Invitation Card';

    const cardW = frontCanvas.width || 1200;
    const cardH = frontCanvas.height || 1680;
    const gap = Math.round(cardW * 0.1);
    const padX = Math.round(cardW * 0.12);
    const padTop = Math.round(cardH * 0.13);
    const padBottom = Math.round(cardH * 0.1);

    const compositeW = (padX * 2) + (cardW * 2) + gap;
    const compositeH = padTop + cardH + padBottom;

    const canvas = document.createElement('canvas');
    canvas.width = compositeW;
    canvas.height = compositeH;
    const ctx = canvas.getContext('2d');
    if (!ctx) return frontCanvas;

    // 1. Rich Obsidian Backdrop
    const bgGrad = ctx.createRadialGradient(
      compositeW / 2, compositeH / 2, 250,
      compositeW / 2, compositeH / 2, compositeW * 0.75
    );
    bgGrad.addColorStop(0, '#1c1a20');
    bgGrad.addColorStop(0.55, '#121115');
    bgGrad.addColorStop(1, '#080709');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, compositeW, compositeH);

    // 2. Subtle Gold Ambient Center Light
    const glowGrad = ctx.createRadialGradient(
      compositeW / 2, padTop + (cardH * 0.45), 100,
      compositeW / 2, padTop + (cardH * 0.45), compositeW * 0.55
    );
    glowGrad.addColorStop(0, 'rgba(212, 175, 55, 0.08)');
    glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glowGrad;
    ctx.fillRect(0, 0, compositeW, compositeH);

    // 3. Header Presentation Typography
    ctx.save();
    ctx.textAlign = 'center';

    // Suite Tagline
    ctx.font = '500 24px "Montserrat", sans-serif';
    ctx.fillStyle = '#C5A059';
    ctx.fillText('✦  EXCLUSIVE INVITATION SUITE  ✦', compositeW / 2, Math.round(padTop * 0.38));

    // Main Card Title
    ctx.font = '600 46px "Cinzel", "Cormorant Garamond", serif';
    ctx.fillStyle = '#F5EFE6';
    const displayTitle = String(title).toUpperCase();
    ctx.fillText(displayTitle, compositeW / 2, Math.round(padTop * 0.65));

    // Section Labels
    const frontX = padX;
    const backX = padX + cardW + gap;
    const cardY = padTop;

    ctx.font = '600 22px "Montserrat", sans-serif';
    ctx.fillStyle = '#E8D5A3';
    ctx.fillText('FRONT INVITATION', frontX + (cardW / 2), cardY - 24);
    ctx.fillText('EVENT DETAILS & RSVP', backX + (cardW / 2), cardY - 24);
    ctx.restore();

    // Helper: Draw card with clean shadow and border
    const drawCard = (srcCanvas, x, y) => {
      // 1. Soft realistic drop shadow
      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.65)';
      ctx.shadowBlur = 40;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 20;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(x, y, cardW, cardH);
      ctx.restore();

      // 2. Draw card canvas image
      ctx.drawImage(srcCanvas, x, y, cardW, cardH);

      // 3. Subtle gold border around card
      ctx.save();
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, cardW, cardH);
      ctx.restore();
    };

    drawCard(frontCanvas, frontX, cardY);
    drawCard(backCanvas, backX, cardY);

    // 4. Footer Details
    ctx.save();
    ctx.textAlign = 'center';
    ctx.font = '400 20px "Montserrat", sans-serif';
    ctx.fillStyle = '#8E8880';
    ctx.fillText('5" × 7" Standard Dimension  ·  300 DPI High-Definition Print & Digital Suite', compositeW / 2, compositeH - 50);
    ctx.restore();

    return canvas;
  }

  /**
   * Export as High-Resolution PNG (Front + Back + Complete Suite)
   */
  async exportPNG(filename) {
    if (this._busy) return;
    const base = this.getBaseFilename();
    this.setBusy(true, 'Rendering Front side (Lossless PNG)…');

    const initialState = {
      side: this.editor.activeSide,
      zoom: this.editor.zoom,
      selectedElementId: this.editor.selectedElementId,
      selectedElementIds: [...(this.editor.selectedElementIds || [])],
      showBleed: this.editor.showBleed
    };

    try {
      // 1. Capture Front Side
      const front = await this.captureSide('front', {
        scale: 3,
        type: 'image/png'
      });

      // 2. Capture Back Side
      this.setBusy(true, 'Rendering Back side (Lossless PNG)…');
      const back = await this.captureSide('back', {
        scale: 3,
        type: 'image/png'
      });

      // 3. Create Complete Side-by-Side Suite
      this.setBusy(true, 'Assembling complete suite presentation…');
      const compositeCanvas = this.createCompositeCanvas(front.canvas, back.canvas);
      const suiteDataUrl = compositeCanvas.toDataURL('image/png');

      // 4. Trigger sequential downloads
      await this.triggerSequentialDownloads([
        { dataUrl: front.dataUrl, filename: `${base}-front.png` },
        { dataUrl: back.dataUrl, filename: `${base}-back.png` },
        { dataUrl: suiteDataUrl, filename: `${base}-complete-suite.png` }
      ]);

      this.showToast('✓ Front, Back & Complete Suite PNGs exported.');
    } catch (err) {
      console.error('Export PNG failed:', err);
      this.showToast(err.message || 'PNG export failed. Please try again.', 'error');
    } finally {
      this.editor.activeSide = initialState.side;
      this.editor.zoom = initialState.zoom;
      this.editor.selectedElementId = initialState.selectedElementId;
      this.editor.selectedElementIds = initialState.selectedElementIds;
      this.editor.showBleed = initialState.showBleed;
      this.editor.render();
      this.setBusy(false);
    }
  }

  /**
   * Export as High-Resolution JPG (Front + Back + Complete Suite)
   */
  async exportJPG(filename) {
    if (this._busy) return;
    const base = this.getBaseFilename();
    this.setBusy(true, 'Rendering Front side (Email JPG)…');

    const initialState = {
      side: this.editor.activeSide,
      zoom: this.editor.zoom,
      selectedElementId: this.editor.selectedElementId,
      selectedElementIds: [...(this.editor.selectedElementIds || [])],
      showBleed: this.editor.showBleed
    };

    try {
      // 1. Capture Front Side
      const front = await this.captureSide('front', {
        scale: 3,
        type: 'image/jpeg',
        backgroundColor: '#ffffff',
        quality: 0.96
      });

      // 2. Capture Back Side
      this.setBusy(true, 'Rendering Back side (Email JPG)…');
      const back = await this.captureSide('back', {
        scale: 3,
        type: 'image/jpeg',
        backgroundColor: '#ffffff',
        quality: 0.96
      });

      // 3. Create Complete Suite
      this.setBusy(true, 'Assembling complete suite presentation…');
      const compositeCanvas = this.createCompositeCanvas(front.canvas, back.canvas);
      const suiteDataUrl = compositeCanvas.toDataURL('image/jpeg', 0.96);

      // 4. Trigger sequential downloads
      await this.triggerSequentialDownloads([
        { dataUrl: front.dataUrl, filename: `${base}-front.jpg` },
        { dataUrl: back.dataUrl, filename: `${base}-back.jpg` },
        { dataUrl: suiteDataUrl, filename: `${base}-complete-suite.jpg` }
      ]);

      this.showToast('✓ Front, Back & Complete Suite JPGs downloaded for email.');
    } catch (err) {
      console.error('Export JPG failed:', err);
      this.showToast(err.message || 'JPG export failed. Please try again.', 'error');
    } finally {
      this.editor.activeSide = initialState.side;
      this.editor.zoom = initialState.zoom;
      this.editor.selectedElementId = initialState.selectedElementId;
      this.editor.selectedElementIds = initialState.selectedElementIds;
      this.editor.showBleed = initialState.showBleed;
      this.editor.render();
      this.setBusy(false);
    }
  }

  /**
   * Export Print-Ready PDF (Standard 5" × 7" with Bleed and Crop Marks)
   * 2-Page Document: Page 1 = Front, Page 2 = Back
   */
  async exportPrintPDF(options = { includeBleed: true, cropMarks: true, bothSides: true }) {
    if (this._busy) return;

    if (!window.jspdf || !window.jspdf.jsPDF) {
      this.showToast('PDF library is still loading. Try again in a moment.', 'error');
      return;
    }

    const { jsPDF } = window.jspdf;
    this.setBusy(true, 'Rendering Front side for PDF (300 DPI)…');

    const initialState = {
      side: this.editor.activeSide,
      zoom: this.editor.zoom,
      selectedElementId: this.editor.selectedElementId,
      selectedElementIds: [...(this.editor.selectedElementIds || [])],
      showBleed: this.editor.showBleed
    };

    try {
      const cardW = 127;
      const cardH = 177.8;
      const bleed = options.includeBleed ? 3.175 : 0;
      const docW = cardW + (bleed * 2);
      const docH = cardH + (bleed * 2);

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [docW, docH],
        compress: true
      });

      // Front Page
      const front = await this.captureSide('front', {
        scale: 3.5,
        type: 'image/jpeg',
        backgroundColor: '#ffffff',
        quality: 0.98
      });
      pdf.addImage(front.dataUrl, 'JPEG', 0, 0, docW, docH, undefined, 'FAST');
      if (options.cropMarks && options.includeBleed) {
        this.drawCropMarks(pdf, bleed, cardW, cardH);
      }

      // Back Page
      if (options.bothSides) {
        this.setBusy(true, 'Rendering Back side for PDF (300 DPI)…');
        const back = await this.captureSide('back', {
          scale: 3.5,
          type: 'image/jpeg',
          backgroundColor: '#ffffff',
          quality: 0.98
        });
        pdf.addPage([docW, docH], 'portrait');
        pdf.addImage(back.dataUrl, 'JPEG', 0, 0, docW, docH, undefined, 'FAST');
        if (options.cropMarks && options.includeBleed) {
          this.drawCropMarks(pdf, bleed, cardW, cardH);
        }
      }

      pdf.save(`${this.getBaseFilename()}-print-ready-300dpi.pdf`);
      this.showToast('✓ Print-ready 2-page PDF downloaded (Front & Back — 300 DPI).');
    } catch (err) {
      console.error('Export PDF failed:', err);
      this.showToast(err.message || 'PDF export failed. Please try again.', 'error');
    } finally {
      this.editor.activeSide = initialState.side;
      this.editor.zoom = initialState.zoom;
      this.editor.selectedElementId = initialState.selectedElementId;
      this.editor.selectedElementIds = initialState.selectedElementIds;
      this.editor.showBleed = initialState.showBleed;
      this.editor.render();
      this.setBusy(false);
    }
  }

  drawCropMarks(pdf, bleed, w, h) {
    pdf.setDrawColor(120, 120, 120);
    pdf.setLineWidth(0.2);
    const markLength = 3;

    pdf.line(bleed, 0, bleed, markLength);
    pdf.line(0, bleed, markLength, bleed);

    pdf.line(bleed + w, 0, bleed + w, markLength);
    pdf.line(bleed + w + bleed - markLength, bleed, bleed + w + bleed, bleed);

    pdf.line(bleed, bleed + h + bleed - markLength, bleed, bleed + h + bleed);
    pdf.line(0, bleed + h, markLength, bleed + h);

    pdf.line(bleed + w, bleed + h + bleed - markLength, bleed + w, bleed + h + bleed);
    pdf.line(bleed + w + bleed - markLength, bleed + h, bleed + w + bleed, bleed + h);
  }

  buildWhatsAppCaption() {
    const t = this.editor.currentTemplate || {};
    const title = t.title || 'Wedding Invitation';

    const dateEl = (t.front || []).find(e => e.type === 'text' && (e.id.includes('date') || e.content.includes('202')));
    const venueEl = (t.front || []).find(e => e.type === 'text' && (e.id.includes('venue') || e.id.includes('loc')));
    const rsvpEl = (t.back || []).find(e => e.type === 'text' && (e.id.includes('rsvp') || e.content.includes('RSVP')));

    const lines = [
      `✨ *YOU'RE CORDIALLY INVITED* ✨`,
      ``,
      `*${String(title).toUpperCase()}*`,
      ``
    ];

    if (dateEl) {
      lines.push(`📅 *Date:* ${dateEl.content.replace(/\n/g, ' · ')}`);
    }
    if (venueEl) {
      lines.push(`📍 *Venue:* ${venueEl.content.replace(/\n/g, ' · ')}`);
    }
    if (rsvpEl) {
      lines.push(`✉️ *RSVP:* ${rsvpEl.content.replace(/\n/g, ' · ')}`);
    }

    lines.push(
      ``,
      `We would be deeply honored by your gracious presence.`,
      `*(Please find both Front & Back invitation cards attached)*`
    );

    return lines.join('\n');
  }

  /**
   * Share invitation images (Front + Back) directly to WhatsApp.
   * On mobile/supported platforms: shares both Front & Back images in 1 share sheet.
   * On desktop: downloads Front, Back & Complete Suite + copies caption + opens WhatsApp Web.
   */
  async shareToWhatsApp() {
    if (this._busy) return;
    this.setBusy(true, 'Preparing WhatsApp invite (Front & Back)…');

    const base = this.getBaseFilename();
    const caption = this.buildWhatsAppCaption();

    const initialState = {
      side: this.editor.activeSide,
      zoom: this.editor.zoom,
      selectedElementId: this.editor.selectedElementId,
      selectedElementIds: [...(this.editor.selectedElementIds || [])],
      showBleed: this.editor.showBleed
    };

    try {
      // 1. Capture Front Side
      const front = await this.captureSide('front', {
        scale: 3,
        type: 'image/jpeg',
        backgroundColor: '#ffffff',
        quality: 0.95
      });

      // 2. Capture Back Side
      this.setBusy(true, 'Rendering Back side for WhatsApp…');
      const back = await this.captureSide('back', {
        scale: 3,
        type: 'image/jpeg',
        backgroundColor: '#ffffff',
        quality: 0.95
      });

      // 3. Assemble Complete Suite
      this.setBusy(true, 'Assembling Complete Suite…');
      const compositeCanvas = this.createCompositeCanvas(front.canvas, back.canvas);
      const suiteDataUrl = compositeCanvas.toDataURL('image/jpeg', 0.95);

      const frontBlob = this.dataUrlToBlob(front.dataUrl);
      const backBlob = this.dataUrlToBlob(back.dataUrl);
      const suiteBlob = this.dataUrlToBlob(suiteDataUrl);

      const frontFile = new File([frontBlob], `${base}-front.jpg`, { type: 'image/jpeg' });
      const backFile = new File([backBlob], `${base}-back.jpg`, { type: 'image/jpeg' });
      const suiteFile = new File([suiteBlob], `${base}-complete-suite.jpg`, { type: 'image/jpeg' });

      // Native share sheet (Mobile & supported desktop)
      if (navigator.canShare && navigator.canShare({ files: [frontFile, backFile] })) {
        this.setBusy(false);
        try {
          await navigator.share({
            files: [frontFile, backFile],
            title: this.editor.currentTemplate?.title || 'Invitation',
            text: caption
          });
          this.showToast('✓ Shared — choose WhatsApp to send both Front & Back cards.');
          return;
        } catch (shareErr) {
          if (shareErr && (shareErr.name === 'AbortError' || shareErr.name === 'NotAllowedError')) {
            this.showToast('Share cancelled.');
            return;
          }
          console.warn('Native share failed, falling back to download:', shareErr);
        }
      }

      // Desktop fallback: download all 3 images, copy caption, open WhatsApp Web
      await this.triggerSequentialDownloads([
        { blob: frontBlob, filename: `${base}-front.jpg` },
        { blob: backBlob, filename: `${base}-back.jpg` },
        { blob: suiteBlob, filename: `${base}-complete-suite.jpg` }
      ]);

      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(caption);
        }
      } catch (_) { /* ignore clipboard errors */ }

      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(caption)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      this.showToast('✓ Front, Back & Suite saved to downloads! In WhatsApp, paste caption and attach your cards.');
    } catch (err) {
      if (err && (err.name === 'AbortError' || err.name === 'NotAllowedError')) {
        this.showToast('Share cancelled.');
      } else {
        console.error('WhatsApp share failed:', err);
        this.showToast(err.message || 'Could not prepare WhatsApp cards. Please try again.', 'error');
      }
    } finally {
      this.editor.activeSide = initialState.side;
      this.editor.zoom = initialState.zoom;
      this.editor.selectedElementId = initialState.selectedElementId;
      this.editor.selectedElementIds = initialState.selectedElementIds;
      this.editor.showBleed = initialState.showBleed;
      this.editor.render();
      this.setBusy(false);
    }
  }
}
