/**
 * Advanced WYSIWYG Canvas Editor Engine for Luxury Invitations
 * Handles drag/drop, resize, typography, gold foil, QR codes, photo masks, undo/redo
 */

import { ASSET_LIBRARY } from './data/assets.js';
import { LUXURY_FONTS } from './data/fonts.js';

export class CardEditor {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.options = options;
    this.currentTemplate = null;
    this.activeSide = 'front'; // 'front' | 'back'
    this.selectedElementId = null;
    this.selectedElementIds = [];
    this.showBleed = true;
    this.zoom = 1;
    
    // History stacks for Undo / Redo
    this.undoStack = [];
    this.redoStack = [];
    this.isDragging = false;
    this.dragStart = { x: 0, y: 0 };
    this.elementStart = { x: 0, y: 0 };
    this.isInlineEditing = false;
    this.saveStateTimeout = null;

    this.init();
  }

  init() {
    this.bindEvents();
  }

  loadTemplate(template) {
    // Deep clone template to avoid mutating original source
    this.currentTemplate = JSON.parse(JSON.stringify(template));
    ['front', 'back'].forEach(side => {
      if (Array.isArray(this.currentTemplate[side])) {
        // Stable sort by initial zIndex if specified, then assign normalized layer numbers 1..N
        this.currentTemplate[side].sort((a, b) => (a.zIndex || 1) - (b.zIndex || 1));
        this.currentTemplate[side].forEach((el, idx) => {
          el.zIndex = idx + 1;
        });
      }
    });
    this.activeSide = 'front';
    this.selectedElementId = null;
    this.selectedElementIds = [];
    this.undoStack = [];
    this.redoStack = [];
    this.render();
    if (this.options.onTemplateChange) {
      this.options.onTemplateChange(this.currentTemplate);
    }
    if (this.options.onElementSelect) {
      this.options.onElementSelect(null);
    }
    this.updateFloatingToolbar();
  }

  saveState() {
    if (!this.currentTemplate) return;
    this.undoStack.push(JSON.stringify(this.currentTemplate));
    if (this.undoStack.length > 30) this.undoStack.shift();
    this.redoStack = []; // clear redo on new action
  }

  debouncedSaveState(ms = 400) {
    clearTimeout(this.saveStateTimeout);
    this.saveStateTimeout = setTimeout(() => {
      this.saveState();
    }, ms);
  }

  undo() {
    if (this.undoStack.length === 0) return;
    this.redoStack.push(JSON.stringify(this.currentTemplate));
    const previousState = this.undoStack.pop();
    this.currentTemplate = JSON.parse(previousState);
    this.render();
    if (this.options.onElementSelect) {
      this.options.onElementSelect(this.getSelectedElement());
    }
  }

  redo() {
    if (this.redoStack.length === 0) return;
    this.undoStack.push(JSON.stringify(this.currentTemplate));
    const nextState = this.redoStack.pop();
    this.currentTemplate = JSON.parse(nextState);
    this.render();
    if (this.options.onElementSelect) {
      this.options.onElementSelect(this.getSelectedElement());
    }
  }

  switchSide(side) {
    if (this.activeSide === side) return;
    this.activeSide = side;
    this.selectedElementId = null;
    this.selectedElementIds = [];
    this.render();
    if (this.options.onSideChange) {
      this.options.onSideChange(this.activeSide);
    }
    if (this.options.onElementSelect) {
      this.options.onElementSelect(null);
    }
  }

  getActiveElements() {
    if (!this.currentTemplate) return [];
    return this.activeSide === 'front' 
      ? this.currentTemplate.front 
      : this.currentTemplate.back;
  }

  getSelectedElement() {
    if (!this.selectedElementId) return null;
    return this.getActiveElements().find(el => el.id === this.selectedElementId) || null;
  }

  getSelectedElements() {
    const active = this.getActiveElements();
    return (this.selectedElementIds || [])
      .map(id => active.find(el => el.id === id))
      .filter(Boolean);
  }

  clearSelectionVisuals() {
    (this.selectedElementIds || []).forEach(sid => {
      const node = this.getCanvasElementNode(sid);
      if (!node) return;
      node.classList.remove('element-selected', 'element-multi-selected', 'element-live-flash');
      node.querySelectorAll('.resize-handle').forEach(h => h.remove());
      node.querySelectorAll('.photo-replace-hint').forEach(h => h.remove());
    });
  }

  applySelectionVisuals() {
    (this.selectedElementIds || []).forEach(sid => {
      const node = this.getCanvasElementNode(sid);
      if (!node) return;
      node.classList.add('element-selected');
      if (this.selectedElementIds.length > 1) node.classList.add('element-multi-selected');
      else node.classList.remove('element-multi-selected');

      if (sid === this.selectedElementId && !node.querySelector('.resize-handle')) {
        node.insertAdjacentHTML('beforeend', `
          <div class="resize-handle" style="top: -4px; left: -4px; cursor: nwse-resize;" data-handle="nw"></div>
          <div class="resize-handle" style="top: -4px; right: -4px; cursor: nesw-resize;" data-handle="ne"></div>
          <div class="resize-handle" style="bottom: -4px; left: -4px; cursor: nesw-resize;" data-handle="sw"></div>
          <div class="resize-handle" style="bottom: -4px; right: -4px; cursor: nwse-resize;" data-handle="se"></div>
        `);
      }

      const selectedEl = this.getActiveElements().find(e => e.id === sid);
      if (selectedEl?.type === 'image' && sid === this.selectedElementId && !node.querySelector('.photo-replace-hint')) {
        node.insertAdjacentHTML('beforeend', `
          <button type="button" class="photo-replace-hint" data-action="replace-photo">Replace Photo</button>
        `);
        node.querySelector('.photo-replace-hint')?.addEventListener('mousedown', (e) => {
          e.stopPropagation();
          e.preventDefault();
        });
        node.querySelector('.photo-replace-hint')?.addEventListener('click', (e) => {
          e.stopPropagation();
          this.openImageFilePicker((dataUrl) => this.updateElement(sid, { src: dataUrl }));
        });
      }
    });
  }

  /**
   * Selection with optional multi-select (Ctrl/Cmd/Shift + click).
   */
  selectElement(id, options = {}) {
    const forceRefresh = !!options.forceRefresh;
    const additive = !!options.additive;

    if (this.isInlineEditing && this.selectedElementId !== id) {
      this.finishInlineEdit();
    }

    if (!this.selectedElementIds) this.selectedElementIds = [];

    if (!id) {
      this.clearSelectionVisuals();
      this.selectedElementId = null;
      this.selectedElementIds = [];
      if (this.options.onElementSelect) this.options.onElementSelect(null);
      this.updateFloatingToolbar();
      return null;
    }

    // Same single selection re-click
    if (!additive && this.selectedElementIds.length === 1 && this.selectedElementId === id) {
      if (forceRefresh) {
        this.applySelectionVisuals();
        if (this.options.onElementSelect) this.options.onElementSelect(this.getSelectedElement());
        this.updateFloatingToolbar();
      }
      return this.getSelectedElement();
    }

    if (additive) {
      if (this.selectedElementIds.includes(id)) {
        const node = this.getCanvasElementNode(id);
        if (node) {
          node.classList.remove('element-selected', 'element-multi-selected');
          node.querySelectorAll('.resize-handle').forEach(h => h.remove());
          node.querySelectorAll('.photo-replace-hint').forEach(h => h.remove());
        }
        this.selectedElementIds = this.selectedElementIds.filter(x => x !== id);
        this.selectedElementId = this.selectedElementIds[this.selectedElementIds.length - 1] || null;
        this.applySelectionVisuals();
      } else {
        this.selectedElementIds = [...this.selectedElementIds, id];
        this.selectedElementId = id;
        this.applySelectionVisuals();
      }
    } else {
      this.clearSelectionVisuals();
      this.selectedElementIds = [id];
      this.selectedElementId = id;
      this.applySelectionVisuals();
    }

    const selected = this.getSelectedElement();
    if (this.options.onElementSelect) {
      this.options.onElementSelect(selected);
    }
    this.updateFloatingToolbar();
    return selected;
  }

  getCanvasElementNode(id) {
    if (!id) return null;
    const wrap = document.getElementById('card-elements-wrapper');
    if (!wrap) return null;
    try {
      return wrap.querySelector(`#${CSS.escape(id)}`);
    } catch (e) {
      return wrap.querySelector(`[id="${id}"]`);
    }
  }

  getCanvasQrBox(id) {
    const node = this.getCanvasElementNode(id);
    if (!node) return null;
    try {
      return node.querySelector(`#qr-box-${CSS.escape(id)}`);
    } catch (e) {
      return node.querySelector('[id^="qr-box-"]');
    }
  }

  escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  formatTextHtml(content, { allowBreaks = false } = {}) {
    const escaped = this.escapeHtml(content);
    if (!allowBreaks) return escaped;
    return escaped.replace(/\r\n|\r|\n/g, '<br>');
  }

  getTextFoilRun(textInner) {
    if (!textInner) return null;
    return textInner.querySelector('.text-foil-run');
  }

  setTextElementContent(textInner, content) {
    if (!textInner) return;
    const run = this.getTextFoilRun(textInner);
    if (run) run.textContent = content ?? '';
    else textInner.textContent = content ?? '';
  }

  syncTextFoilClass(textInner, element) {
    if (!textInner || !element) return;
    let run = this.getTextFoilRun(textInner);
    if (!run) {
      run = document.createElement('span');
      run.className = 'text-foil-run';
      run.textContent = element.content ?? textInner.innerText ?? '';
      textInner.textContent = '';
      textInner.appendChild(run);
    }
    run.classList.toggle('foil-gold', !!element.isFoil);
    if (!element.isFoil && element.color) {
      run.style.color = element.color;
      textInner.style.color = element.color;
    }
  }

  openImageFilePicker(onDataUrl) {
    const existing = document.getElementById('ins-photo-file-input') || document.getElementById('float-photo-input');
    if (existing) {
      const handler = (e) => {
        existing.removeEventListener('change', handler);
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => onDataUrl(ev.target.result);
        reader.readAsDataURL(file);
        existing.value = '';
      };
      existing.addEventListener('change', handler);
      existing.click();
      return;
    }

    const tempInput = document.createElement('input');
    tempInput.type = 'file';
    tempInput.accept = 'image/*';
    tempInput.onchange = (ev) => {
      const file = ev.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (loadEv) => onDataUrl(loadEv.target.result);
      reader.readAsDataURL(file);
    };
    tempInput.click();
  }

  /**
   * Smart partial in-place update for attributes and styles.
   * Prevents lost focus in input fields and eliminates latency.
   */
  updateElement(id, updates, options = {}) {
    const shouldSave = options.saveState !== false;
    const shouldRebuildInspector = options.updateInspector || false;

    const elements = this.getActiveElements();
    const element = elements.find(el => el.id === id);
    if (!element) return;

    Object.assign(element, updates);

    // Always target the LIVE canvas node (not sidebar/lobby previews with duplicate IDs)
    const elNode = this.getCanvasElementNode(id);
    if (elNode) {
      elNode.classList.remove('element-live-flash');
      // Force reflow so flash animation can replay
      void elNode.offsetWidth;
      elNode.classList.add('element-live-flash');

      if (updates.x !== undefined) {
        elNode.style.left = `${element.x}px`;
        const xInput = document.getElementById('pos-x-val');
        const xLbl = document.getElementById('pos-x-lbl');
        if (xInput && document.activeElement !== xInput) xInput.value = Math.round(element.x);
        if (xLbl) xLbl.textContent = Math.round(element.x);
        const dockX = document.getElementById('dock-pos-x');
        if (dockX) dockX.textContent = Math.round(element.x);
      }
      if (updates.y !== undefined) {
        elNode.style.top = `${element.y}px`;
        const yInput = document.getElementById('pos-y-val');
        const yLbl = document.getElementById('pos-y-lbl');
        if (yInput && document.activeElement !== yInput) yInput.value = Math.round(element.y);
        if (yLbl) yLbl.textContent = Math.round(element.y);
        const dockY = document.getElementById('dock-pos-y');
        if (dockY) dockY.textContent = Math.round(element.y);
      }
      if (updates.width !== undefined) elNode.style.width = `${element.width}px`;
      if (updates.height !== undefined) elNode.style.height = `${element.height}px`;
      if (updates.zIndex !== undefined) elNode.style.zIndex = element.zIndex;
      if (updates.rotation !== undefined) elNode.style.transform = `rotate(${element.rotation}deg)`;

      if (element.type === 'text') {
        const textInner = elNode.querySelector('.text-content-inner');
        if (textInner) {
          if (updates.content !== undefined && document.activeElement !== textInner && !textInner.contains(document.activeElement)) {
            this.setTextElementContent(textInner, element.content);
          }
          if (updates.fontFamily !== undefined) textInner.style.fontFamily = element.fontFamily;
          if (updates.fontSize !== undefined) textInner.style.fontSize = `${element.fontSize}px`;
          if (updates.fontWeight !== undefined) textInner.style.fontWeight = element.fontWeight;
          if (updates.fontStyle !== undefined) textInner.style.fontStyle = element.fontStyle;
          if (updates.letterSpacing !== undefined) {
            textInner.style.letterSpacing = element.letterSpacing !== undefined ? `${element.letterSpacing}px` : 'normal';
          }
          if (updates.lineHeight !== undefined) textInner.style.lineHeight = element.lineHeight || 1.3;
          if (updates.textAlign !== undefined) {
            textInner.style.textAlign = element.textAlign;
            textInner.classList.remove('justify-center', 'justify-start', 'justify-end');
            if (element.textAlign === 'left') textInner.classList.add('justify-start');
            else if (element.textAlign === 'right') textInner.classList.add('justify-end');
            else textInner.classList.add('justify-center');
          }
          
          // Live Color & Gold Foil Shimmer Toggle
          if (updates.color !== undefined) {
            element.color = updates.color;
            textInner.style.color = element.color;
            const run = this.getTextFoilRun(textInner);
            if (run && !element.isFoil) run.style.color = element.color;
            // Explicit color choice removes gold foil override so the picked color is 100% visible live!
            if (updates.isFoil === undefined && element.isFoil) {
              element.isFoil = false;
              this.syncTextFoilClass(textInner, element);
              const foilCheck = document.getElementById('ins-foil-check');
              if (foilCheck) foilCheck.checked = false;
            }
          }
          if (updates.isFoil !== undefined) {
            element.isFoil = !!updates.isFoil;
            this.syncTextFoilClass(textInner, element);
            if (!element.isFoil && element.color) {
              textInner.style.color = element.color;
            }
          }
        }
        // Keep floating dock textarea in sync
        const dockText = document.getElementById('dock-text-content');
        if (dockText && document.activeElement !== dockText && updates.content !== undefined) {
          dockText.value = element.content;
        }
        const dockFs = document.getElementById('dock-fs-val');
        if (dockFs && updates.fontSize !== undefined) dockFs.textContent = `${element.fontSize}px`;
      } else if (element.type === 'image') {
        const img = elNode.querySelector('img');
        if (img && updates.src) img.src = element.src;
        const maskBox = elNode.querySelector('.photo-mask-box') || elNode.firstElementChild;
        if (maskBox && updates.mask) {
          maskBox.className = `photo-mask-box w-full h-full overflow-hidden ${element.mask} shadow-md`;
        }
        const dockImg = document.getElementById('dock-photo-preview');
        if (dockImg && updates.src) dockImg.src = element.src;
      } else if (element.type === 'wax-seal' && updates.assetId !== undefined) {
        const asset = ASSET_LIBRARY.waxSeals.find(s => s.id === element.assetId) || ASSET_LIBRARY.waxSeals[0];
        const wrapper = elNode.firstElementChild;
        if (wrapper && asset) {
          wrapper.innerHTML = asset.html;
        }
      } else if (element.type === 'svg') {
        if (updates.color !== undefined || updates.opacity !== undefined) {
          const wrapper = elNode.firstElementChild;
          if (wrapper) {
            wrapper.style.color = element.color || '#333333';
            wrapper.style.opacity = element.opacity !== undefined ? element.opacity : 1;
          }
        }
      } else if (element.type === 'qr-code' && (updates.qrValue !== undefined || updates.width !== undefined || updates.height !== undefined)) {
        const qrBox = this.getCanvasQrBox(element.id);
        if (qrBox) {
          if (window.QRCode) {
            try {
              qrBox.innerHTML = '';
              new window.QRCode(qrBox, {
                text: element.qrValue || 'https://wedbuilder.example/rsvp',
                width: Math.max(30, element.width - 12),
                height: Math.max(30, element.height - 12),
                colorDark: "#111111",
                colorLight: "#ffffff"
              });
            } catch (e) {}
          } else {
            const qrImg = qrBox.querySelector('img');
            if (qrImg) {
              qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(element.qrValue || '')}&color=111111`;
            }
          }
        }
      }
    }

    if (shouldSave) {
      this.debouncedSaveState();
    }

    if (shouldRebuildInspector && this.options.onElementSelect) {
      this.options.onElementSelect(element);
    }
    const keys = Object.keys(updates);
    const contentOnly = keys.length === 1 && keys[0] === 'content';
    if (!contentOnly || shouldRebuildInspector) {
      this.updateFloatingToolbar();
    }
  }

  addElement(elementData) {
    this.saveState();
    const id = 'el-' + Date.now();
    const active = this.getActiveElements();
    const newElement = {
      id,
      x: 60,
      y: 180,
      width: 280,
      height: 40,
      ...elementData,
      zIndex: active.length + 1
    };
    active.push(newElement);
    this.render();
    this.selectElement(id);
  }

  deleteElement(id) {
    if (!id) return;
    this.saveState();
    const elements = this.getActiveElements();
    const index = elements.findIndex(el => el.id === id);
    if (index !== -1) {
      elements.splice(index, 1);
      elements.forEach((el, i) => { el.zIndex = i + 1; });
      this.selectedElementId = null;
      this.selectedElementIds = [];
      this.render();
      if (this.options.onElementSelect) {
        this.options.onElementSelect(null);
      }
      this.updateFloatingToolbar();
    }
  }

  duplicateElement(id) {
    const active = this.getActiveElements();
    const el = active.find(item => item.id === id);
    if (!el) return;
    this.saveState();
    const clone = JSON.parse(JSON.stringify(el));
    clone.id = 'el-' + Date.now();
    clone.x = Math.min(320, clone.x + 15);
    clone.y = Math.min(480, clone.y + 15);
    clone.zIndex = active.length + 1;
    active.push(clone);
    this.render();
    this.selectElement(clone.id);
  }

  bringForward(id) {
    const elements = this.getActiveElements();
    const idx = elements.findIndex(item => item.id === id);
    if (idx === -1 || idx >= elements.length - 1) return;

    this.saveState();

    // Swap element with the one directly above it in the stack
    const temp = elements[idx];
    elements[idx] = elements[idx + 1];
    elements[idx + 1] = temp;

    // Normalize z-indices to strictly reflect the new stack order
    elements.forEach((item, i) => {
      item.zIndex = i + 1;
    });

    this.render();
    this.selectElement(id, { forceRefresh: true });
  }

  sendBackward(id) {
    const elements = this.getActiveElements();
    const idx = elements.findIndex(item => item.id === id);
    if (idx === -1 || idx <= 0) return;

    this.saveState();

    // Swap element with the one directly below it in the stack
    const temp = elements[idx];
    elements[idx] = elements[idx - 1];
    elements[idx - 1] = temp;

    // Normalize z-indices to strictly reflect the new stack order
    elements.forEach((item, i) => {
      item.zIndex = i + 1;
    });

    this.render();
    this.selectElement(id, { forceRefresh: true });
  }

  bringToFront(id) {
    const elements = this.getActiveElements();
    const idx = elements.findIndex(item => item.id === id);
    if (idx === -1 || idx >= elements.length - 1) return;

    this.saveState();
    const [item] = elements.splice(idx, 1);
    elements.push(item);

    elements.forEach((el, i) => {
      el.zIndex = i + 1;
    });

    this.render();
    this.selectElement(id, { forceRefresh: true });
  }

  sendToBack(id) {
    const elements = this.getActiveElements();
    const idx = elements.findIndex(item => item.id === id);
    if (idx === -1 || idx <= 0) return;

    this.saveState();
    const [item] = elements.splice(idx, 1);
    elements.unshift(item);

    elements.forEach((el, i) => {
      el.zIndex = i + 1;
    });

    this.render();
    this.selectElement(id, { forceRefresh: true });
  }

  toggleBleed(show) {
    this.showBleed = show !== undefined ? show : !this.showBleed;
    const stage = document.getElementById('card-canvas-stage');
    if (stage) {
      stage.classList.toggle('bleed-guides', this.showBleed);
    }
  }

  changeBackgroundTexture(textureClass) {
    if (!this.currentTemplate) return;
    this.saveState();
    this.currentTemplate.bgTexture = textureClass;
    this.render();
  }

  changeBackgroundImage(imageUrl) {
    if (!this.currentTemplate) return;
    this.saveState();
    this.currentTemplate.bgImage = imageUrl;
    this.render();
  }

  changeBackgroundColor(color) {
    if (!this.currentTemplate) return;
    this.saveState();
    this.currentTemplate.bgColor = color;
    this.render();
  }

  getEffectiveBg(bgPath) {
    if (!bgPath) return '';
    if (typeof window !== 'undefined' && window.BACKGROUND_BASE64_DATA && window.BACKGROUND_BASE64_DATA[bgPath]) {
      return window.BACKGROUND_BASE64_DATA[bgPath];
    }
    return bgPath;
  }

  /**
   * Applies luxury palette presets with full visual transformation:
   * Clears background image, applies paper texture, sets background tone,
   * and harmonizes text and accent colors for high-end European stationery aesthetics.
   */
  applyPalettePreset(preset) {
    if (!this.currentTemplate) return;
    this.saveState();

    this.currentTemplate.bgColor = preset.bg;
    this.currentTemplate.bgTexture = preset.texture;
    this.currentTemplate.bgImage = null; // Clear background photo/arch so texture and color are visible!
    this.currentTemplate.accentColor = preset.accent;

    // Harmonize all text and graphic elements for optimal contrast and elegance
    const allElements = [...(this.currentTemplate.front || []), ...(this.currentTemplate.back || [])];
    allElements.forEach(el => {
      if (el.type === 'text') {
        el.color = preset.textColor;
        // Turn off gold foil unless it's explicitly the Emerald Velvet & Gold Foil preset
        if (preset.bg !== '#09231B') {
          el.isFoil = false;
        } else {
          // If emerald velvet gold, restore foil to prominent names/titles
          if (el.id.includes('name') || el.fontSize >= 32) {
            el.isFoil = true;
          }
        }
      } else if (el.type === 'svg') {
        if (el.color) {
          el.color = preset.accent;
        }
      }
    });

    this.render();
    if (this.options.onElementSelect) {
      this.options.onElementSelect(null);
    }
    this.updateFloatingToolbar();
  }

  /**
   * Accurately finds the primary name/host elements across all templates,
   * strictly filtering out ampersands ('&'), separators, subtitles, dates, and venues.
   */
  getNameElements() {
    if (!this.currentTemplate) return [];
    const allElements = [...(this.currentTemplate.front || []), ...(this.currentTemplate.back || [])];

    // 1. Elements with ID explicitly including 'name' (excluding ampersands / separators / subtext / titles)
    const explicitNameElements = allElements.filter(el => 
      el.type === 'text' && 
      el.id.toLowerCase().includes('name') && 
      !el.id.toLowerCase().includes('and') &&
      !el.id.toLowerCase().includes('amp') &&
      !el.id.toLowerCase().includes('sub') &&
      !el.id.toLowerCase().includes('title') &&
      (el.content || '').trim() !== '&' &&
      (el.content || '').trim().toLowerCase() !== 'and'
    );

    if (explicitNameElements.length > 0) {
      return explicitNameElements;
    }

    // 2. Elements that represent the main host / honoree / event title
    return allElements.filter(el => {
      if (el.type !== 'text') return false;
      const id = el.id.toLowerCase();
      const content = (el.content || '').trim();
      if (content === '&' || content.toLowerCase() === 'and' || content === '♡') return false;
      if (id.includes('and') || id.includes('sub') || id.includes('date') || id.includes('time') || id.includes('venue') || id.includes('loc') || id.includes('attire') || id.includes('rsvp') || id.includes('footer')) return false;
      return id.includes('title') || el.fontSize >= 22;
    });
  }

  /**
   * Intelligently updates all common invitation fields in one click!
   * (Etsy buyer favourite: names, date, venue, time, attire, QR code)
   */
  updateEventDetails(fields) {
    if (!this.currentTemplate) return;

    const nameElements = this.getNameElements();
    const allElements = [...(this.currentTemplate.front || []), ...(this.currentTemplate.back || [])];

    // 1. Couple or Host Names
    if (fields.name1 !== undefined && nameElements[0]) {
      this.updateElement(nameElements[0].id, { content: fields.name1 }, { saveState: false, updateInspector: false });
    }
    if (fields.name2 !== undefined && nameElements[1]) {
      this.updateElement(nameElements[1].id, { content: fields.name2 }, { saveState: false, updateInspector: false });
    }
    if (fields.combinedNames !== undefined) {
      if (nameElements.length >= 2) {
        const parts = fields.combinedNames.split(/\s*(?:&|and|\+|•|\n)\s*/i);
        if (parts.length >= 2) {
          this.updateElement(nameElements[0].id, { content: parts[0].trim() }, { saveState: false, updateInspector: false });
          this.updateElement(nameElements[1].id, { content: parts.slice(1).join(' & ').trim() }, { saveState: false, updateInspector: false });
        } else if (parts.length === 1 && parts[0].trim().length > 0) {
          this.updateElement(nameElements[0].id, { content: parts[0].trim() }, { saveState: false, updateInspector: false });
        }
      } else if (nameElements.length === 1) {
        this.updateElement(nameElements[0].id, { content: fields.combinedNames }, { saveState: false, updateInspector: false });
      }
    }

    // 2. Date
    if (fields.date !== undefined && fields.date !== null) {
      const dateEl = allElements.find(el => 
        el.type === 'text' && (el.id.includes('date') || el.content.includes('202') || el.content.includes('OCTOBER') || el.content.includes('DEC') || el.content.includes('JUNE') || el.content.includes('SEPTEMBER') || el.content.includes('SAT') || el.content.includes('SUN') || el.content.includes('FRI'))
      );
      if (dateEl) {
        this.updateElement(dateEl.id, { content: fields.date }, { saveState: false, updateInspector: false });
      }
    }

    // 3. Time
    if (fields.time !== undefined && fields.time !== null) {
      const timeEl = allElements.find(el => 
        el.type === 'text' && (el.id.includes('time') || el.content.includes("O'CLOCK") || el.content.includes('PM') || el.content.includes('AM') || el.content.includes('17H00') || el.content.includes('20H00') || el.content.includes('HALF PAST') || el.content.includes('NOON'))
      );
      if (timeEl) {
        this.updateElement(timeEl.id, { content: fields.time }, { saveState: false, updateInspector: false });
      }
    }

    // 4. Venue & Location
    if (fields.venue !== undefined && fields.venue !== null) {
      const venueEl = allElements.find(el => 
        el.type === 'text' && (el.id.includes('venue') || el.id.includes('loc') || el.id.includes('church') || el.content.includes('CHÂTEAU') || el.content.includes('HÔTEL') || el.content.includes('VILLA') || el.content.includes('PALAZZO') || el.content.includes('MANOR') || el.content.includes('ESTATE') || el.content.includes('PARIS') || el.content.includes('ITALY') || el.content.includes('GARDEN') || el.content.includes('LAKE') || el.content.includes('MOSQUE') || el.content.includes('HOTEL') || el.content.includes('HALL') || el.content.includes('CONSERVATORY'))
      );
      if (venueEl) {
        this.updateElement(venueEl.id, { content: fields.venue }, { saveState: false, updateInspector: false });
      }
    }

    // 5. Attire / Reception / RSVP
    if (fields.attire !== undefined && fields.attire !== null) {
      const attireEl = allElements.find(el => 
        el.type === 'text' && (el.id.includes('attire') || el.id.includes('footer') || el.id.includes('reception') || el.id.includes('rsvp') || el.id.includes('tea') || el.content.includes('BLACK TIE') || el.content.includes('RECEPTION') || el.content.includes('RSVP') || el.content.includes('TENUE'))
      );
      if (attireEl) {
        this.updateElement(attireEl.id, { content: fields.attire }, { saveState: false, updateInspector: false });
      }
    }

    // 6. QR Value
    if (fields.qrValue) {
      const qrEl = allElements.find(el => el.type === 'qr-code');
      if (qrEl) {
        this.updateElement(qrEl.id, { qrValue: fields.qrValue }, { saveState: false, updateInspector: false });
      }
    }

    this.debouncedSaveState();
  }

  /**
   * Centers all text elements horizontally on the current card side.
   * Intelligently respects off-center columns (e.g. botanical suites with clear side margins).
   */
  centerAllText() {
    this.saveState();
    const textEls = this.getActiveElements().filter(el => el.type === 'text');
    if (textEls.length === 0) return;

    // Check if elements are currently grouped in an off-center column (e.g., right-aligned botanical suite)
    const avgCenter = textEls.reduce((sum, el) => sum + (el.x + el.width / 2), 0) / textEls.length;
    const isOffCenterSuite = Math.abs(avgCenter - 200) > 35;
    const targetCenter = isOffCenterSuite ? avgCenter : 200;

    textEls.forEach(el => {
      el.x = Math.round(targetCenter - el.width / 2);
      const node = this.getCanvasElementNode(el.id);
      if (node) node.style.left = `${el.x}px`;
    });
    this.updateFloatingToolbar();
  }

  /**
   * Shifts all text elements vertically by a given offset in pixels.
   */
  nudgeAllText(offsetY) {
    this.saveState();
    const textEls = this.getActiveElements().filter(el => el.type === 'text');
    textEls.forEach(el => {
      el.y = Math.round(el.y + offsetY);
      const node = this.getCanvasElementNode(el.id);
      if (node) {
        node.style.top = `${el.y}px`;
        node.classList.add('element-live-flash');
      }
    });
    this.updateFloatingToolbar();
  }

  bindEvents() {
    // Keyboard shortcuts: Delete, Cmd+Z (undo), Cmd+Y (redo), Cmd+D (duplicate), Arrow keys (nudge)
    window.addEventListener('keydown', (e) => {
      if (this.isInlineEditing || ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        return;
      }

      if (e.key === 'Delete' || e.key === 'Backspace') {
        const ids = [...(this.selectedElementIds || [])];
        if (ids.length) {
          e.preventDefault();
          this.saveState();
          ids.forEach(id => {
            const elements = this.getActiveElements();
            const index = elements.findIndex(el => el.id === id);
            if (index !== -1) elements.splice(index, 1);
          });
          this.selectedElementId = null;
          this.selectedElementIds = [];
          this.render();
          if (this.options.onElementSelect) this.options.onElementSelect(null);
          this.updateFloatingToolbar();
        }
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          this.redo();
        } else {
          this.undo();
        }
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'y') {
        e.preventDefault();
        this.redo();
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'd') {
        if (this.selectedElementId) {
          e.preventDefault();
          this.duplicateElement(this.selectedElementId);
        }
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        const texts = this.getActiveElements().filter(el => el.type === 'text');
        if (!texts.length) return;
        this.clearSelectionVisuals();
        this.selectedElementIds = texts.map(t => t.id);
        this.selectedElementId = texts[texts.length - 1].id;
        this.applySelectionVisuals();
        if (this.options.onElementSelect) this.options.onElementSelect(this.getSelectedElement());
        this.updateFloatingToolbar();
      } else if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        const selected = this.getSelectedElements();
        if (selected.length) {
          e.preventDefault();
          const step = e.shiftKey ? 10 : 1;
          let dx = 0;
          let dy = 0;
          if (e.key === 'ArrowUp') dy = -step;
          if (e.key === 'ArrowDown') dy = step;
          if (e.key === 'ArrowLeft') dx = -step;
          if (e.key === 'ArrowRight') dx = step;
          selected.forEach(el => {
            el.x = Math.round(el.x + dx);
            el.y = Math.round(el.y + dy);
            const node = this.getCanvasElementNode(el.id);
            if (node) {
              node.style.left = `${el.x}px`;
              node.style.top = `${el.y}px`;
            }
          });
          this.updateElement(this.selectedElementId, { x: this.getSelectedElement().x, y: this.getSelectedElement().y }, { saveState: true });
        }
      }
    });
  }

  render() {
    if (!this.currentTemplate) {
      this.container.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full text-zinc-500 py-20">
          <svg class="w-12 h-12 mb-3 stroke-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p class="text-sm">Select a European template to begin customization</p>
        </div>
      `;
      return;
    }

    const t = this.currentTemplate;
    const elements = this.getActiveElements();
    const bgTexture = t.bgTexture || 'texture-deckle';
    const bgColor = t.bgColor || '#FAF7F2';

    // Canvas container (Standard 5x7 proportion: 400px wide x 560px tall)
    const stageW = 400;
    const stageH = 560;
    const shellW = Math.round(stageW * this.zoom);
    const shellH = Math.round(stageH * this.zoom);

    this.container.innerHTML = `
      <div class="relative flex flex-col items-center justify-center p-2 sm:p-4 md:p-8 canvas-stage-outer">
        <!-- SVG Definitions for Metallic Foil Shimmer -->
        <svg width="0" height="0" class="absolute">
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

        <!-- Scaled shell keeps layout size correct for mobile fit -->
        <div class="canvas-stage-shell" style="width: ${shellW}px; height: ${shellH}px;">
          <div id="card-canvas-stage" 
               class="relative select-none ${t.bgImage ? '' : bgTexture} ${this.showBleed ? 'bleed-guides' : ''} shadow-2xl rounded-sm"
               style="width: ${stageW}px; height: ${stageH}px; background-color: ${bgColor}; ${t.bgImage ? `background-image: url('${this.getEffectiveBg(t.bgImage)}'); background-size: cover; background-position: center;` : ''} overflow: hidden; transform: scale(${this.zoom}); transform-origin: top left;">
            
            <!-- Rendered Card Elements -->
            <div id="card-elements-wrapper" class="absolute inset-0 w-full h-full">
              ${elements.map(el => this.renderElementHTML(el)).join('')}
            </div>

          </div>
        </div>

        <!-- Canvas Card Side Label -->
        <div class="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 canvas-stage-meta">
          <span class="text-[10px] sm:text-xs font-serif tracking-widest text-zinc-400 uppercase text-center">
            ${t.title} • <span class="text-amber-400 font-semibold">${this.activeSide.toUpperCase()} SIDE</span>
          </span>
          <span class="text-[9px] sm:text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
            5" × 7" · 300 DPI Ready
          </span>
        </div>
      </div>
    `;

    // Attach interaction handlers to elements
    this.attachElementHandlers();
  }

  renderElementHTML(el, options = {}) {
    const isPreview = !!options.preview;
    const previewKey = options.previewKey || 'pv';
    const domId = isPreview ? `pv-${previewKey}-${el.id}` : el.id;
    const isSelected = !isPreview && (this.selectedElementIds || []).includes(el.id);
    const rotation = el.rotation ? `transform: rotate(${el.rotation}deg);` : '';

    let contentHTML = '';

    if (el.type === 'text') {
      const align = el.textAlign || 'center';
      const isSingleLine = !String(el.content ?? '').includes('\n');
      const shouldNoWrap = el.noWrap || (isSingleLine && (el.height <= (el.fontSize || 14) * 2.5));
      const foilClass = el.isFoil ? 'foil-gold' : '';
      let justifyClass = 'justify-center';
      if (align === 'left') justifyClass = 'justify-start';
      else if (align === 'right') justifyClass = 'justify-end';

      // Keep Guest-View / Studio fidelity: flex center + visible overflow so script
      // name glyphs (Great Vibes ascenders/descenders) are never clipped.
      const justifyContent = align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center';
      const layoutStyles = shouldNoWrap
        ? `
          display: flex;
          align-items: center;
          justify-content: ${justifyContent};
          width: 100%;
          height: 100%;
          white-space: nowrap;
          overflow: visible;
          line-height: ${el.lineHeight || 1.15};
        `
        : `
          display: flex;
          align-items: center;
          justify-content: ${justifyContent};
          width: 100%;
          height: 100%;
          white-space: pre-wrap;
          word-break: keep-all;
          overflow-wrap: normal;
          overflow: visible;
          line-height: ${el.lineHeight || 1.3};
        `;

      const styles = `
        font-family: ${el.fontFamily || "'Cormorant Garamond', serif"};
        font-size: ${el.fontSize || 14}px;
        font-weight: ${el.fontWeight || '400'};
        font-style: ${el.fontStyle || 'normal'};
        letter-spacing: ${el.letterSpacing !== undefined ? el.letterSpacing + 'px' : 'normal'};
        text-align: ${align};
        color: ${el.color || '#2C2825'};
        box-sizing: border-box;
        ${layoutStyles}
      `;

      const textHtml = this.formatTextHtml(el.content, { allowBreaks: !shouldNoWrap });

      contentHTML = `
        <div class="text-content-inner w-full h-full ${justifyClass}${shouldNoWrap ? ' is-text-nowrap' : ''}" style="${styles}">
          <span class="text-foil-run ${foilClass}">${textHtml}</span>
        </div>
      `;
    } else if (el.type === 'svg') {
      const asset = this.findAsset(el.assetId);
      const svgCode = asset ? asset.svg : `<svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="currentColor"/></svg>`;
      contentHTML = `
        <div class="w-full h-full flex items-center justify-center select-none" style="color: ${el.color || '#333333'}; opacity: ${el.opacity !== undefined ? el.opacity : 1};">
          <div class="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full pointer-events-none">
            ${svgCode}
          </div>
        </div>
      `;
    } else if (el.type === 'wax-seal') {
      const asset = ASSET_LIBRARY.waxSeals.find(s => s.id === el.assetId) || ASSET_LIBRARY.waxSeals[0];
      contentHTML = `
        <div class="w-full h-full flex items-center justify-center select-none">
          ${asset.html}
        </div>
      `;
    } else if (el.type === 'qr-code') {
      const qrUrl = encodeURIComponent(el.qrValue || 'https://wedbuilder.example/rsvp');
      const qrBoxId = isPreview ? `qr-box-pv-${previewKey}-${el.id}` : `qr-box-${el.id}`;
      contentHTML = `
        <div class="w-full h-full p-1.5 bg-white rounded shadow-sm border border-zinc-200/80 flex items-center justify-center overflow-hidden" id="${qrBoxId}">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${qrUrl}&color=111111" 
               alt="RSVP QR Code" 
               crossorigin="anonymous"
               class="w-full h-full object-contain pointer-events-none" />
        </div>
      `;
    } else if (el.type === 'image') {
      const maskClass = el.mask || 'mask-arch';
      contentHTML = `
        <div class="photo-mask-box w-full h-full overflow-hidden ${maskClass} shadow-md">
          <img src="${this.getEffectiveBg(el.src) || el.src || 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80'}" 
               alt="Card photo" 
               class="w-full h-full object-cover pointer-events-none" />
        </div>
        ${isSelected ? `<button type="button" class="photo-replace-hint" data-action="replace-photo">Replace Photo</button>` : ''}
      `;
    }

    const effectiveZ = el.zIndex !== undefined ? el.zIndex : 1;

    return `
      <div id="${domId}" 
           class="canvas-element absolute ${isPreview ? 'pointer-events-none' : 'cursor-move'} transition-shadow ${isSelected ? 'element-selected' : ''} ${isSelected && (this.selectedElementIds || []).length > 1 ? 'element-multi-selected' : ''}"
           data-el-type="${el.type || 'element'}"
           style="left: ${el.x}px; top: ${el.y}px; width: ${el.width}px; height: ${el.height}px; z-index: ${effectiveZ}; ${rotation}">
        ${contentHTML}
        ${isSelected ? `
          <div class="resize-handle" style="top: -4px; left: -4px; cursor: nwse-resize;" data-handle="nw"></div>
          <div class="resize-handle" style="top: -4px; right: -4px; cursor: nesw-resize;" data-handle="ne"></div>
          <div class="resize-handle" style="bottom: -4px; left: -4px; cursor: nesw-resize;" data-handle="sw"></div>
          <div class="resize-handle" style="bottom: -4px; right: -4px; cursor: nwse-resize;" data-handle="se"></div>
        ` : ''}
      </div>
    `;
  }

  findAsset(assetId) {
    for (const category in ASSET_LIBRARY) {
      const item = ASSET_LIBRARY[category].find(a => a.id === assetId);
      if (item) return item;
    }
    return null;
  }

  attachElementHandlers() {
    const stage = document.getElementById('card-canvas-stage');
    if (!stage) return;

    this.getActiveElements().forEach(el => {
      const elNode = this.getCanvasElementNode(el.id);
      if (!elNode) return;

      // Mount vector QR code if library is active
      if (window.QRCode && el.type === 'qr-code') {
        const qrBox = this.getCanvasQrBox(el.id);
        if (qrBox) {
          try {
            qrBox.innerHTML = '';
            new window.QRCode(qrBox, {
              text: el.qrValue || 'https://wedbuilder.example/rsvp',
              width: Math.max(30, el.width - 12),
              height: Math.max(30, el.height - 12),
              colorDark: "#111111",
              colorLight: "#ffffff"
            });
          } catch (e) {}
        }
      }

      // Drag and Selection Mousedown
      elNode.addEventListener('mousedown', (e) => {
        // If inline editing active on this element, let cursor click inside
        if (this.isInlineEditing && this.selectedElementId === el.id) {
          return;
        }

        // On-canvas Replace Photo button
        if (e.target.closest?.('.photo-replace-hint')) {
          e.stopPropagation();
          e.preventDefault();
          this.openImageFilePicker((dataUrl) => this.updateElement(el.id, { src: dataUrl }));
          return;
        }

        // If clicking a resize handle, let resize handler take over
        if (e.target.classList.contains('resize-handle')) {
          this.initResize(e, el, e.target.getAttribute('data-handle'));
          return;
        }

        e.stopPropagation();

        const additive = e.ctrlKey || e.metaKey || e.shiftKey;
        const alreadyInGroup = (this.selectedElementIds || []).includes(el.id);
        const wasAlreadySelected = this.selectedElementId === el.id && (this.selectedElementIds || []).length === 1;

        if (additive) {
          this.selectElement(el.id, { additive: true });
        } else if (!alreadyInGroup) {
          this.selectElement(el.id);
        } else {
          // Keep multi-selection; make this the primary
          this.selectedElementId = el.id;
          this.applySelectionVisuals();
        }

        let hasDragged = false;
        const startX = e.clientX;
        const startY = e.clientY;

        // Move all selected elements together when dragging any one of them
        const dragIds = (this.selectedElementIds || []).includes(el.id)
          ? [...this.selectedElementIds]
          : [el.id];
        const origPositions = dragIds.map(did => {
          const item = this.getActiveElements().find(x => x.id === did);
          return { id: did, x: item?.x || 0, y: item?.y || 0 };
        });

        const onMouseMove = (moveEvent) => {
          const dx = (moveEvent.clientX - startX) / this.zoom;
          const dy = (moveEvent.clientY - startY) / this.zoom;

          if (!hasDragged && (Math.abs(dx) > 3 || Math.abs(dy) > 3)) {
            hasDragged = true;
            this.isDragging = true;
          }

          if (hasDragged) {
            origPositions.forEach(pos => {
              const item = this.getActiveElements().find(x => x.id === pos.id);
              const node = this.getCanvasElementNode(pos.id);
              if (!item || !node) return;
              item.x = Math.round(pos.x + dx);
              item.y = Math.round(pos.y + dy);
              node.style.left = `${item.x}px`;
              node.style.top = `${item.y}px`;
            });

            const primary = this.getSelectedElement();
            if (primary) {
              const posXInput = document.getElementById('pos-x-val');
              const posYInput = document.getElementById('pos-y-val');
              const posXLbl = document.getElementById('pos-x-lbl');
              const posYLbl = document.getElementById('pos-y-lbl');
              if (posXInput && document.activeElement !== posXInput) posXInput.value = primary.x;
              if (posYInput && document.activeElement !== posYInput) posYInput.value = primary.y;
              if (posXLbl) posXLbl.textContent = primary.x;
              if (posYLbl) posYLbl.textContent = primary.y;
            }
          }
        };

        const onMouseUp = () => {
          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('mouseup', onMouseUp);
          if (hasDragged) {
            this.isDragging = false;
            this.saveState();
            this.updateFloatingToolbar();
            return;
          }

          // Easy edit: first click opens panel; second click (single select) edits on-canvas / replaces photo
          if (additive) return;

          if (el.type === 'text' && (this.selectedElementIds || []).length === 1) {
            if (wasAlreadySelected) {
              this.startInlineEdit(el, elNode);
            } else {
              requestAnimationFrame(() => {
                const ta = document.getElementById('dock-text-content') || document.getElementById('ins-text-content');
                if (ta) {
                  ta.focus();
                  ta.select();
                  document.getElementById('ins-edit-spotlight')?.classList.add('edit-panel-pulse');
                  document.getElementById('live-edit-dock')?.classList.add('edit-panel-pulse');
                }
              });
            }
          } else if (el.type === 'image' && (this.selectedElementIds || []).length === 1) {
            if (wasAlreadySelected) {
              this.openImageFilePicker((dataUrl) => this.updateElement(el.id, { src: dataUrl }));
            } else {
              requestAnimationFrame(() => {
                document.getElementById('ins-photo-replace-box')?.classList.add('edit-panel-pulse');
                document.getElementById('dock-photo-box')?.classList.add('edit-panel-pulse');
              });
            }
          } else if (el.type === 'qr-code') {
            requestAnimationFrame(() => {
              const qrInput = document.getElementById('dock-qr-url') || document.getElementById('ins-qr-url');
              if (qrInput) {
                qrInput.focus();
                qrInput.select();
              }
            });
          }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
      });

      // Direct On-Canvas Inline Double-Click Editing! (Canva / Figma style)
      if (el.type === 'text') {
        elNode.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          e.preventDefault();
          this.selectElement(el.id);
          this.startInlineEdit(el, elNode);
        });
      } else if (el.type === 'image') {
        elNode.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          e.preventDefault();
          this.openImageFilePicker((dataUrl) => this.updateElement(el.id, { src: dataUrl }));
        });
      }
    });

    // Deselect if clicking on empty canvas stage
    stage.addEventListener('mousedown', (e) => {
      if (e.target === stage || e.target.id === 'card-elements-wrapper') {
        if (this.isInlineEditing) {
          this.finishInlineEdit();
        }
        this.selectElement(null);
      }
    });

    const outerStage = document.getElementById('canvas-outer-stage');
    if (outerStage && !outerStage._hasDeselectAttached) {
      outerStage._hasDeselectAttached = true;
      outerStage.addEventListener('mousedown', (e) => {
        if (e.target === outerStage || e.target.id === 'canvas-wrapper') {
          if (this.isInlineEditing) {
            this.finishInlineEdit();
          }
          this.selectElement(null);
        }
      });
    }
  }

  startInlineEdit(el, elNode) {
    const textInner = elNode.querySelector('.text-content-inner');
    if (!textInner) return;
    const editTarget = this.getTextFoilRun(textInner) || textInner;

    this.isInlineEditing = true;
    editTarget.contentEditable = "true";
    textInner.classList.add('text-editing-active');
    editTarget.focus();

    // Select all text for easy replacement
    const range = document.createRange();
    range.selectNodeContents(editTarget);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    const onInput = () => {
      el.content = editTarget.innerText;
      // Sync dock + right sidebar textareas if open
      const textarea = document.getElementById('ins-text-content');
      if (textarea && textarea.value !== el.content) {
        textarea.value = el.content;
      }
      const dockTa = document.getElementById('dock-text-content');
      if (dockTa && dockTa.value !== el.content) {
        dockTa.value = el.content;
      }
    };

    const onKeyDown = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        editTarget.blur();
      } else if (e.key === 'Escape') {
        editTarget.blur();
      }
    };

    const onBlur = () => {
      editTarget.contentEditable = "false";
      textInner.classList.remove('text-editing-active');
      this.isInlineEditing = false;
      el.content = editTarget.innerText;
      this.syncTextFoilClass(textInner, el);
      this.saveState();
      editTarget.removeEventListener('input', onInput);
      editTarget.removeEventListener('keydown', onKeyDown);
      editTarget.removeEventListener('blur', onBlur);
      if (this.options.onElementSelect) {
        this.options.onElementSelect(el);
      }
    };

    editTarget.addEventListener('input', onInput);
    editTarget.addEventListener('keydown', onKeyDown);
    editTarget.addEventListener('blur', onBlur);
  }

  finishInlineEdit() {
    if (!this.selectedElementId) return;
    const elNode = this.getCanvasElementNode(this.selectedElementId);
    if (!elNode) return;
    const textInner = elNode.querySelector('.text-content-inner');
    const editTarget = textInner ? (this.getTextFoilRun(textInner) || textInner) : null;
    if (editTarget && editTarget.contentEditable === "true") {
      editTarget.blur();
    }
  }

  initResize(e, el, handle) {
    e.stopPropagation();
    e.preventDefault();

    const startX = e.clientX;
    const startY = e.clientY;
    const startW = el.width;
    const startH = el.height;
    const startPosX = el.x;
    const startPosY = el.y;
    const elNode = this.getCanvasElementNode(el.id);

    const onResizeMove = (moveEvent) => {
      const dx = (moveEvent.clientX - startX) / this.zoom;
      const dy = (moveEvent.clientY - startY) / this.zoom;

      if (handle === 'se') {
        el.width = Math.max(30, Math.round(startW + dx));
        el.height = Math.max(15, Math.round(startH + dy));
      } else if (handle === 'sw') {
        const newW = Math.max(30, Math.round(startW - dx));
        el.x = Math.round(startPosX + (startW - newW));
        el.width = newW;
        el.height = Math.max(15, Math.round(startH + dy));
      } else if (handle === 'ne') {
        el.width = Math.max(30, Math.round(startW + dx));
        const newH = Math.max(15, Math.round(startH - dy));
        el.y = Math.round(startPosY + (startH - newH));
        el.height = newH;
      } else if (handle === 'nw') {
        const newW = Math.max(30, Math.round(startW - dx));
        const newH = Math.max(15, Math.round(startH - dy));
        el.x = Math.round(startPosX + (startW - newW));
        el.y = Math.round(startPosY + (startH - newH));
        el.width = newW;
        el.height = newH;
      }

      if (elNode) {
        elNode.style.left = `${el.x}px`;
        elNode.style.top = `${el.y}px`;
        elNode.style.width = `${el.width}px`;
        elNode.style.height = `${el.height}px`;
      }
    };

    const onResizeUp = () => {
      this.saveState();
      window.removeEventListener('mousemove', onResizeMove);
      window.removeEventListener('mouseup', onResizeUp);
    };

    window.addEventListener('mousemove', onResizeMove);
    window.addEventListener('mouseup', onResizeUp);
  }

  /**
   * Floating quick-action canvas toolbar shown right above the card
   * for instant, effortless edits!
   */
  updateFloatingToolbar() {
    const toolbar = document.getElementById('canvas-quick-toolbar');
    if (!toolbar) return;

    const el = this.getSelectedElement();
    if (!el) {
      toolbar.innerHTML = `
        <div class="px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] text-zinc-300 flex items-center gap-2 shadow-lg backdrop-blur">
          <span class="text-amber-400 font-semibold">Quick Edit:</span>
          <span>Drag text to move · Ctrl/Cmd+click multi-select · Ctrl/Cmd+A select all text</span>
        </div>
      `;
      return;
    }

    const multiCount = (this.selectedElementIds || []).length;
    if (multiCount > 1) {
      toolbar.innerHTML = `
        <div class="floating-canvas-toolbar bg-zinc-900/95 backdrop-blur-md border border-amber-500/40 rounded-xl px-3 py-1.5 flex items-center gap-2.5 shadow-2xl z-30">
          <span class="text-xs font-serif text-amber-300 font-semibold">${multiCount} selected</span>
          <span class="text-[11px] text-zinc-400">Drag any one to move all together · Arrow keys nudge</span>
          <button id="float-btn-del" class="px-2 py-1 rounded bg-red-950/60 text-red-400 hover:bg-red-900 text-xs border border-red-800/60">Delete</button>
        </div>
      `;
      document.getElementById('float-btn-del')?.addEventListener('click', () => {
        const ids = [...this.selectedElementIds];
        this.saveState();
        ids.forEach(id => {
          const elements = this.getActiveElements();
          const index = elements.findIndex(item => item.id === id);
          if (index !== -1) elements.splice(index, 1);
        });
        this.selectedElementId = null;
        this.selectedElementIds = [];
        this.render();
        if (this.options.onElementSelect) this.options.onElementSelect(null);
        this.updateFloatingToolbar();
      });
      return;
    }

    // Single element editing is docked strictly on the LEFT sidebar (#live-edit-dock), keeping the canvas stage completely unobstructed
    toolbar.innerHTML = '';
  }
}

