/**
 * Professional Export Engine
 * Print-ready PDF (5×7" + bleed), high-res PNG/JPG, and WhatsApp share.
 */

export class CardExporter {
  constructor(editor) {
    this.editor = editor;
    this._busy = false;
    this._captureState = null;
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

  async prepareCapture({ resetZoom = true } = {}) {
    this._captureState = {
      showBleed: this.editor.showBleed,
      selectedElementId: this.editor.selectedElementId,
      selectedElementIds: [...(this.editor.selectedElementIds || [])],
      zoom: this.editor.zoom,
      activeSide: this.editor.activeSide,
      isInlineEditing: this.editor.isInlineEditing
    };

    if (this.editor.isInlineEditing && typeof this.editor.finishInlineEdit === 'function') {
      try { this.editor.finishInlineEdit(); } catch (_) { /* ignore */ }
    }

    this.editor.selectedElementId = null;
    this.editor.selectedElementIds = [];
    this.editor.showBleed = false;
    if (resetZoom) this.editor.zoom = 1;
    this.editor.render();

    await this.waitForPaint();
    if (document.fonts?.ready) {
      try { await document.fonts.ready; } catch (_) { /* ignore */ }
    }
    await this.waitForImages(document.getElementById('card-canvas-stage'));
    await this.waitForPaint();
  }

  restoreCapture() {
    if (!this._captureState) return;
    const s = this._captureState;
    this.editor.showBleed = s.showBleed;
    this.editor.selectedElementId = s.selectedElementId;
    this.editor.selectedElementIds = s.selectedElementIds || [];
    this.editor.zoom = s.zoom;
    this.editor.activeSide = s.activeSide;
    this._captureState = null;
    this.editor.render();
  }

  waitForPaint() {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setTimeout(resolve, 60));
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

  getStage() {
    return document.getElementById('card-canvas-stage');
  }

  async captureStage(options = {}) {
    if (!window.html2canvas) {
      throw new Error('Export engine is still loading. Please try again in a moment.');
    }
    const stage = this.getStage();
    if (!stage) throw new Error('Invitation canvas not found.');

    const {
      scale = 3,
      backgroundColor = null,
      type = 'image/png',
      quality = 0.95
    } = options;

    const canvas = await window.html2canvas(stage, {
      scale,
      useCORS: true,
      allowTaint: false,
      backgroundColor,
      logging: false,
      imageTimeout: 8000,
      onclone: (clonedDoc) => {
        const clonedStage = clonedDoc.getElementById('card-canvas-stage');
        if (clonedStage) {
          clonedStage.style.transform = 'none';
          clonedStage.classList.remove('bleed-guides');
        }
        clonedDoc.querySelectorAll('.resize-handle, .photo-replace-hint, .element-multi-selected')
          .forEach((node) => node.remove());
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
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  /**
   * Export as High-Resolution PNG
   */
  async exportPNG(filename) {
    if (this._busy) return;
    const name = filename || `${this.getBaseFilename()}-digital.png`;
    this.setBusy(true, 'Creating crisp PNG…');

    try {
      await this.prepareCapture();
      const { dataUrl } = await this.captureStage({
        scale: 3,
        backgroundColor: null,
        type: 'image/png'
      });
      this.triggerDownload(dataUrl, name);
      this.showToast('PNG downloaded — ready for WhatsApp & Instagram.');
    } catch (err) {
      console.error('Export PNG failed:', err);
      this.showToast(err.message || 'PNG export failed. Please try again.', 'error');
    } finally {
      this.restoreCapture();
      this.setBusy(false);
    }
  }

  /**
   * Export as High-Resolution JPG
   */
  async exportJPG(filename) {
    if (this._busy) return;
    const name = filename || `${this.getBaseFilename()}-invite.jpg`;
    this.setBusy(true, 'Creating email-ready JPG…');

    try {
      await this.prepareCapture();
      const { dataUrl } = await this.captureStage({
        scale: 3,
        backgroundColor: '#ffffff',
        type: 'image/jpeg',
        quality: 0.95
      });
      this.triggerDownload(dataUrl, name);
      this.showToast('JPG downloaded — perfect for email invites.');
    } catch (err) {
      console.error('Export JPG failed:', err);
      this.showToast(err.message || 'JPG export failed. Please try again.', 'error');
    } finally {
      this.restoreCapture();
      this.setBusy(false);
    }
  }

  /**
   * Export Print-Ready PDF (Standard 5" × 7" with Bleed and Trim Marks)
   */
  async exportPrintPDF(options = { includeBleed: true, cropMarks: true, bothSides: true }) {
    if (this._busy) return;

    if (!window.jspdf || !window.jspdf.jsPDF) {
      this.showToast('PDF library is still loading. Try again in a moment.', 'error');
      return;
    }

    const { jsPDF } = window.jspdf;
    this.setBusy(true, 'Building print-ready PDF…');

    try {
      await this.prepareCapture();

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

      // Front
      this.editor.activeSide = 'front';
      this.editor.render();
      await this.waitForPaint();
      await this.waitForImages(this.getStage());

      const front = await this.captureStage({
        scale: 3.5,
        backgroundColor: '#ffffff',
        type: 'image/jpeg',
        quality: 0.98
      });
      pdf.addImage(front.dataUrl, 'JPEG', 0, 0, docW, docH, undefined, 'FAST');
      if (options.cropMarks && options.includeBleed) {
        this.drawCropMarks(pdf, bleed, cardW, cardH);
      }

      // Back
      const hasBack = Array.isArray(this.editor.currentTemplate?.back)
        && this.editor.currentTemplate.back.length > 0;

      if (options.bothSides && hasBack) {
        this.setBusy(true, 'Adding back side…');
        this.editor.activeSide = 'back';
        this.editor.render();
        await this.waitForPaint();
        await this.waitForImages(this.getStage());

        const back = await this.captureStage({
          scale: 3.5,
          backgroundColor: '#ffffff',
          type: 'image/jpeg',
          quality: 0.98
        });
        pdf.addPage([docW, docH], 'portrait');
        pdf.addImage(back.dataUrl, 'JPEG', 0, 0, docW, docH, undefined, 'FAST');
        if (options.cropMarks && options.includeBleed) {
          this.drawCropMarks(pdf, bleed, cardW, cardH);
        }
      }

      pdf.save(`${this.getBaseFilename()}-print-ready-300dpi.pdf`);
      this.showToast('Print-ready PDF downloaded (300 DPI).');
    } catch (err) {
      console.error('Export PDF failed:', err);
      this.showToast(err.message || 'PDF export failed. Please try again.', 'error');
    } finally {
      this.restoreCapture();
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
    const title = t.title || 'Invitation';
    return [
      `✨ You're invited`,
      ``,
      title,
      ``,
      `We would be honoured by your presence.`,
      `Please save this invitation card.`
    ].join('\n');
  }

  /**
   * Share invitation image directly to WhatsApp when the browser allows it.
   * Falls back to download + WhatsApp open with a ready caption.
   */
  async shareToWhatsApp() {
    if (this._busy) return;
    this.setBusy(true, 'Preparing WhatsApp invite…');

    const filename = `${this.getBaseFilename()}-whatsapp.jpg`;
    const caption = this.buildWhatsAppCaption();

    try {
      await this.prepareCapture();
      const { dataUrl } = await this.captureStage({
        scale: 2.5,
        backgroundColor: '#ffffff',
        type: 'image/jpeg',
        quality: 0.92
      });
      this.restoreCapture();

      const blob = this.dataUrlToBlob(dataUrl);
      const file = new File([blob], filename, { type: 'image/jpeg' });

      // Best path: native share sheet → user picks WhatsApp (mobile + some desktop)
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        this.setBusy(false);
        await navigator.share({
          files: [file],
          title: this.editor.currentTemplate?.title || 'Invitation',
          text: caption
        });
        this.showToast('Shared — choose WhatsApp to send your invite.');
        return;
      }

      // Desktop fallback: download image, copy caption, open WhatsApp
      this.downloadBlob(blob, filename);

      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(caption);
        }
      } catch (_) { /* ignore clipboard failures */ }

      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(caption)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      this.showToast('Invite saved. In WhatsApp, attach the downloaded image to send.');
    } catch (err) {
      // User cancel on share sheet
      if (err && (err.name === 'AbortError' || err.name === 'NotAllowedError')) {
        this.showToast('Share cancelled.');
      } else {
        console.error('WhatsApp share failed:', err);
        this.showToast(err.message || 'Could not share to WhatsApp. Try PNG export instead.', 'error');
      }
      this.restoreCapture();
    } finally {
      this.setBusy(false);
    }
  }
}
