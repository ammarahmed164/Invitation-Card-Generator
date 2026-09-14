/**
 * Main Application Controller for European Luxury Invitation Studio
 * Manages UI interactions, template gallery, left/right sidebars, and export modals.
 */

import { SECTIONS, TEMPLATES } from './data/templates.js';
import { LUXURY_FONTS, FONT_PAIRINGS } from './data/fonts.js';
import { ASSET_LIBRARY } from './data/assets.js';
import { CardEditor } from './editor.js';
import { CardExporter } from './export.js';
import { GuestExperienceModal } from './guestView.js';
import { EtsyGuideManager } from './etsyGuide.js';

class InvitationStudioApp {
  constructor() {
    this.editor = null;
    this.exporter = null;
    this.guestModal = null;
    this.etsyGuide = null;
    this.activeSection = 'all';
    this.lobbySectionId = null;
    this.inStudio = false;
    this.searchQuery = '';
    this.activeLeftTab = 'templates'; // 'templates' | 'text' | 'elements' | 'paper' | 'photos' | 'qr'
    
    this.init();
  }

  init() {
    // Initialize editor on the canvas container
    this.editor = new CardEditor('canvas-wrapper', {
      onTemplateChange: (t) => this.handleTemplateChanged(t),
      onSideChange: (side) => this.handleSideChanged(side),
      onElementSelect: (el) => {
        this.renderInspector(el);
        // Keep Photos / QR / Text sidebars in sync with current selection
        if (this.activeLeftTab === 'photos' || this.activeLeftTab === 'qr' || this.activeLeftTab === 'text') {
          this.renderLeftSidebar();
        }
      }
    });

    this.exporter = new CardExporter(this.editor);
    this.guestModal = new GuestExperienceModal(this.editor);
    this.etsyGuide = new EtsyGuideManager();

    // Prefetch first template so studio is ready; lobby is the landing view
    const initialTemplate = TEMPLATES[0];
    this.editor.loadTemplate(initialTemplate);

    this.bindLobbyEvents();
    this.renderLobbySections();
    this.showLobby();
    this.renderLeftSidebar();
    this.renderInspector(null);
    this.bindGlobalEvents();
    this.bindResponsiveChrome();
  }

  sectionTemplateCount(sectionId) {
    return TEMPLATES.filter(t => t.section === sectionId).length;
  }

  getSectionCover(sectionId) {
    const first = TEMPLATES.find(t => t.section === sectionId);
    if (!first) return { bgColor: '#161310', bgImage: '' };
    return {
      bgColor: first.bgColor || '#161310',
      bgImage: first.bgImage ? this.editor.getEffectiveBg(first.bgImage) : ''
    };
  }

  // =========================================================================
  // LOBBY: Section cards → section templates → studio
  // =========================================================================
  bindLobbyEvents() {
    document.getElementById('btn-lobby-back')?.addEventListener('click', () => {
      this.renderLobbySections();
    });

    document.getElementById('btn-open-lobby')?.addEventListener('click', () => {
      this.showLobby(this.lobbySectionId || null);
    });

    document.getElementById('btn-open-catalog')?.addEventListener('click', () => {
      this.showLobby(null);
    });
  }

  showLobby(sectionId = null) {
    this.inStudio = false;
    document.body.classList.add('mode-lobby');
    document.body.classList.remove('mode-studio');

    const lobby = document.getElementById('atelier-lobby');
    const header = document.getElementById('studio-header');
    const workspace = document.getElementById('studio-workspace');
    lobby?.classList.remove('is-hidden');
    header?.classList.add('is-hidden');
    workspace?.classList.add('is-hidden');

    const countEl = document.getElementById('lobby-suite-count');
    if (countEl) countEl.textContent = `${TEMPLATES.length} Curated Suites`;

    if (sectionId) {
      this.openLobbySection(sectionId);
    } else {
      this.renderLobbySections();
    }
  }

  enterStudio(template) {
    if (!template) return;
    this.editor.loadTemplate(template);
    this.activeSection = template.section;
    this.lobbySectionId = template.section;
    this.inStudio = true;

    document.body.classList.remove('mode-lobby');
    document.body.classList.add('mode-studio');

    document.getElementById('atelier-lobby')?.classList.add('is-hidden');
    document.getElementById('studio-header')?.classList.remove('is-hidden');
    document.getElementById('studio-workspace')?.classList.remove('is-hidden');

    this.switchLeftTab('templates');
    this.renderLeftSidebar();
    this.renderInspector(null);
    this.closeStudioDrawers();
    requestAnimationFrame(() => this.fitCanvasToViewport());
  }

  renderLobbySections() {
    this.lobbySectionId = null;
    const sectionsView = document.getElementById('lobby-view-sections');
    const templatesView = document.getElementById('lobby-view-templates');
    const grid = document.getElementById('lobby-sections-grid');
    if (!grid || !sectionsView || !templatesView) return;

    sectionsView.classList.remove('hidden');
    templatesView.classList.add('hidden');

    grid.innerHTML = SECTIONS.map((section, index) => {
      const count = this.sectionTemplateCount(section.id);
      const cover = this.getSectionCover(section.id);
      const mediaStyle = cover.bgImage
        ? `background-image: url('${cover.bgImage}'); background-color: ${cover.bgColor};`
        : `background-color: ${cover.bgColor};`;
      const n = String(index + 1).padStart(2, '0');

      return `
        <button type="button" class="lobby-section-card" data-section="${section.id}">
          <div class="lobby-section-media" style="${mediaStyle}"></div>
          <div class="lobby-section-veil"></div>
          <div class="lobby-section-body">
            <span class="lobby-section-index">Collection ${n}</span>
            <h2 class="lobby-section-name">${section.name}</h2>
            <p class="lobby-section-tag">${section.tagline}</p>
            <div class="lobby-section-footer">
              <span class="lobby-section-count">${count} design${count === 1 ? '' : 's'}</span>
              <span class="lobby-section-cta">View suites →</span>
            </div>
          </div>
        </button>
      `;
    }).join('');

    grid.querySelectorAll('.lobby-section-card').forEach(card => {
      card.addEventListener('click', () => {
        this.openLobbySection(card.getAttribute('data-section'));
      });
    });
  }

  openLobbySection(sectionId) {
    const section = SECTIONS.find(s => s.id === sectionId);
    if (!section) return;

    this.lobbySectionId = sectionId;
    this.activeSection = sectionId;

    const sectionsView = document.getElementById('lobby-view-sections');
    const templatesView = document.getElementById('lobby-view-templates');
    sectionsView?.classList.add('hidden');
    templatesView?.classList.remove('hidden');

    // Restart panel animation
    if (templatesView) {
      templatesView.classList.remove('lobby-panel');
      void templatesView.offsetWidth;
      templatesView.classList.add('lobby-panel');
    }

    const eyebrow = document.getElementById('lobby-section-eyebrow');
    const title = document.getElementById('lobby-section-title');
    const tagline = document.getElementById('lobby-section-tagline');
    if (eyebrow) eyebrow.textContent = 'Collection';
    if (title) title.textContent = section.name;
    if (tagline) tagline.textContent = section.tagline;

    this.renderLobbyTemplates(sectionId);
  }

  renderLobbyTemplates(sectionId) {
    const grid = document.getElementById('lobby-templates-grid');
    if (!grid) return;

    const list = TEMPLATES.filter(t => t.section === sectionId);
    grid.innerHTML = list.map((t, i) => {
      const bg = t.bgImage
        ? `background-image: url('${this.editor.getEffectiveBg(t.bgImage)}'); background-color: ${t.bgColor};`
        : `background-color: ${t.bgColor};`;

      return `
        <button type="button" class="lobby-template-card" data-tid="${t.id}" style="animation-delay: ${0.04 * i}s">
          <div class="lobby-template-preview">
            <span class="lobby-template-badge">${t.badge || 'Suite'}</span>
            <div class="lobby-template-preview-inner ${t.bgImage ? '' : (t.bgTexture || 'texture-deckle')}" style="${bg}">
              <div class="lobby-template-preview-scale">
                ${t.front.map(el => this.editor.renderElementHTML(el, { preview: true, previewKey: t.id })).join('')}
              </div>
            </div>
          </div>
          <div class="lobby-template-meta">
            <h3 class="lobby-template-title">${t.title}</h3>
            <p class="lobby-template-style">${t.style}</p>
            <span class="lobby-template-action">Open in studio →</span>
          </div>
        </button>
      `;
    }).join('');

    grid.querySelectorAll('.lobby-template-card').forEach(card => {
      card.addEventListener('click', () => {
        const template = TEMPLATES.find(t => t.id === card.getAttribute('data-tid'));
        if (template) this.enterStudio(template);
      });
    });
  }

  handleTemplateChanged(template) {
    // Update header info
    const titleEl = document.getElementById('header-template-title');
    const badgeEl = document.getElementById('header-template-badge');
    if (titleEl) titleEl.textContent = template.title;
    if (badgeEl) badgeEl.textContent = template.style;
    
    // Update active side indicator
    this.updateSideUI(this.editor.activeSide);
  }

  handleSideChanged(side) {
    this.updateSideUI(side);
    if (this.inStudio) this.fitCanvasToViewport();
  }

  updateSideUI(side) {
    const btnFront = document.getElementById('btn-side-front');
    const btnBack = document.getElementById('btn-side-back');
    if (!btnFront || !btnBack) return;

    btnFront.classList.toggle('is-active', side === 'front');
    btnBack.classList.toggle('is-active', side === 'back');
  }

  // =========================================================================
  // (Lobby replaces former top strip + catalog modal)
  // =========================================================================

  bindGlobalEvents() {
    // Front / Back toggle
    document.getElementById('btn-side-front')?.addEventListener('click', () => this.editor.switchSide('front'));
    document.getElementById('btn-side-back')?.addEventListener('click', () => this.editor.switchSide('back'));

    // Bleed toggle
    const bleedBtn = document.getElementById('btn-toggle-bleed');
    bleedBtn?.addEventListener('click', () => {
      this.editor.toggleBleed();
      bleedBtn.classList.toggle('is-on', this.editor.showBleed);
    });

    // Undo / Redo
    document.getElementById('btn-undo')?.addEventListener('click', () => this.editor.undo());
    document.getElementById('btn-redo')?.addEventListener('click', () => this.editor.redo());

    // Zoom
    // Zoom
    document.getElementById('btn-zoom-in')?.addEventListener('click', () => {
      this.editor.zoom = Math.min(1.5, this.editor.zoom + 0.1);
      this.editor.render();
      this.syncZoomDisplay();
    });
    document.getElementById('btn-zoom-out')?.addEventListener('click', () => {
      this.editor.zoom = Math.max(0.28, this.editor.zoom - 0.1);
      this.editor.render();
      this.syncZoomDisplay();
    });
    document.getElementById('btn-zoom-reset')?.addEventListener('click', () => {
      this.fitCanvasToViewport({ forceDesktop: window.innerWidth > 900 });
    });

    // Guest 3D Preview Modal
    document.getElementById('btn-guest-preview')?.addEventListener('click', () => {
      this.guestModal.show();
    });

    // Etsy Printing Guide
    document.getElementById('btn-etsy-guide')?.addEventListener('click', () => {
      this.etsyGuide.showPrintGuide();
    });

    // Etsy Seller Toolkit
    document.getElementById('btn-seller-toolkit')?.addEventListener('click', () => {
      this.etsyGuide.showSellerToolkit();
    });

    // Export Dropdown Trigger
    const exportBtn = document.getElementById('btn-export-dropdown');
    const exportMenu = document.getElementById('export-menu');
    exportBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      exportMenu?.classList.toggle('hidden');
    });
    exportMenu?.addEventListener('click', (e) => e.stopPropagation());
    window.addEventListener('click', () => exportMenu?.classList.add('hidden'));

    // Export Actions
    const shareWhatsApp = () => this.exporter.shareToWhatsApp();
    document.getElementById('btn-share-whatsapp')?.addEventListener('click', shareWhatsApp);
    document.getElementById('btn-export-whatsapp')?.addEventListener('click', () => {
      exportMenu?.classList.add('hidden');
      shareWhatsApp();
    });
    document.getElementById('btn-export-pdf')?.addEventListener('click', () => {
      exportMenu?.classList.add('hidden');
      this.exporter.exportPrintPDF({ includeBleed: true, cropMarks: true, bothSides: true });
    });
    document.getElementById('btn-export-png')?.addEventListener('click', () => {
      exportMenu?.classList.add('hidden');
      this.exporter.exportPNG();
    });
    document.getElementById('btn-export-jpg')?.addEventListener('click', () => {
      exportMenu?.classList.add('hidden');
      this.exporter.exportJPG();
    });

    // Left Navigation Tabs (Templates, Text, Elements, Paper, Photos, QR)
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        this.switchLeftTab(tab);
      });
    });
  }

  switchLeftTab(tab) {
    this.activeLeftTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => {
      const isActive = btn.getAttribute('data-tab') === tab;
      btn.classList.toggle('text-amber-400', isActive);
      btn.classList.toggle('bg-zinc-800/80', isActive);
      btn.classList.toggle('text-zinc-400', !isActive);
    });
    this.renderLeftSidebar();
    if (window.innerWidth <= 900) {
      this.openStudioDrawer('tools');
    }
  }

  syncZoomDisplay() {
    const el = document.getElementById('zoom-display');
    if (el) el.textContent = `${Math.round(this.editor.zoom * 100)}%`;
  }

  isMobileStudio() {
    return window.innerWidth <= 900;
  }

  fitCanvasToViewport({ forceDesktop = false } = {}) {
    if (!this.editor?.currentTemplate) return;

    if (forceDesktop || !this.isMobileStudio()) {
      this.editor.zoom = 1;
      this.editor.render();
      this.syncZoomDisplay();
      return;
    }

    const stage = document.getElementById('canvas-outer-stage');
    if (!stage) return;

    const padX = 24;
    const padY = 120; // toolbar + meta + mobile bar breathing room
    const availW = Math.max(180, stage.clientWidth - padX);
    const availH = Math.max(220, stage.clientHeight - padY);
    const fit = Math.min(availW / 400, availH / 560, 1);
    this.editor.zoom = Math.max(0.28, Math.min(1, Math.floor(fit * 100) / 100));
    this.editor.render();
    this.syncZoomDisplay();
  }

  openStudioDrawer(which) {
    document.body.classList.toggle('drawer-tools-open', which === 'tools');
    document.body.classList.toggle('drawer-inspector-open', which === 'inspector');
    document.body.classList.toggle('studio-drawer-open', which === 'tools' || which === 'inspector');
  }

  closeStudioDrawers() {
    document.body.classList.remove('drawer-tools-open', 'drawer-inspector-open', 'studio-drawer-open');
  }

  bindResponsiveChrome() {
    const backdrop = document.getElementById('studio-drawer-backdrop');
    // Keep backdrop at body level so it can't trap drawer hit-testing
    if (backdrop && backdrop.parentElement !== document.body) {
      document.body.appendChild(backdrop);
    }

    backdrop?.addEventListener('click', () => this.closeStudioDrawers());
    document.getElementById('btn-close-tools-drawer')?.addEventListener('click', () => this.closeStudioDrawers());

    const stopBubble = (e) => e.stopPropagation();
    document.getElementById('sidebar-left')?.addEventListener('click', stopBubble);
    document.getElementById('sidebar-right')?.addEventListener('click', stopBubble);
    document.getElementById('studio-mobile-bar')?.addEventListener('click', stopBubble);

    document.getElementById('btn-mobile-tools')?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (document.body.classList.contains('drawer-tools-open')) this.closeStudioDrawers();
      else this.openStudioDrawer('tools');
    });
    document.getElementById('btn-mobile-inspector')?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (document.body.classList.contains('drawer-inspector-open')) this.closeStudioDrawers();
      else this.openStudioDrawer('inspector');
    });
    document.getElementById('btn-mobile-guest')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.closeStudioDrawers();
      this.guestModal.show();
    });
    document.getElementById('btn-mobile-whatsapp')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.closeStudioDrawers();
      this.exporter.shareToWhatsApp();
    });

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!this.isMobileStudio()) this.closeStudioDrawers();
        if (this.inStudio) this.fitCanvasToViewport();
      }, 120);
    });
  }

  renderLeftSidebar() {
    const content = document.getElementById('sidebar-left-content');
    if (!content) return;

    if (this.activeLeftTab === 'templates') {
      this.renderTemplatesTab(content);
    } else if (this.activeLeftTab === 'text') {
      this.renderTextTab(content);
    } else if (this.activeLeftTab === 'elements') {
      this.renderElementsTab(content);
    } else if (this.activeLeftTab === 'paper') {
      this.renderPaperTab(content);
    } else if (this.activeLeftTab === 'photos') {
      this.renderPhotosTab(content);
    } else if (this.activeLeftTab === 'qr') {
      this.renderQRTab(content);
    }
  }

  // =========================================================================
  // TAB 1: TEMPLATES BROWSER
  // =========================================================================
  renderTemplatesTab(container) {
    // Filter templates based on active section & search query
    let filtered = TEMPLATES;
    if (this.activeSection !== 'all') {
      filtered = filtered.filter(t => t.section === this.activeSection);
    }
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(t => 
        t.title.toLowerCase().includes(q) || 
        t.style.toLowerCase().includes(q) || 
        t.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }

    container.innerHTML = `
      <div class="space-y-4">
        <!-- Search Bar -->
        <div class="relative">
          <input id="template-search-input" type="text" 
                 placeholder="Search European styles, fonts, themes..." 
                 value="${this.searchQuery}"
                 class="w-full bg-zinc-950/80 border border-zinc-700/80 rounded-lg px-3 py-2 pl-9 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500/50" />
          <svg class="w-4 h-4 text-zinc-500 absolute left-2.5 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <!-- Section Category Pills -->
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button class="section-pill px-2.5 py-1 rounded-full text-[11px] whitespace-nowrap font-serif transition ${this.activeSection === 'all' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'}" data-sec="all">
            All (${TEMPLATES.length})
          </button>
          ${SECTIONS.map(s => `
            <button class="section-pill px-2.5 py-1 rounded-full text-[11px] whitespace-nowrap font-serif transition ${this.activeSection === s.id ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'}" data-sec="${s.id}">
              ${s.name.split('&')[0].trim()} (${this.sectionTemplateCount(s.id)})
            </button>
          `).join('')}
        </div>

        <button type="button" id="btn-sidebar-open-lobby" class="w-full px-3 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-serif tracking-wide transition">
          ← Back to collection cards
        </button>

        <!-- Current Category Tagline -->
        ${this.activeSection !== 'all' ? `
          <div class="text-[11px] text-amber-400/80 font-serif italic px-1">
            ${SECTIONS.find(s => s.id === this.activeSection)?.tagline}
          </div>
        ` : ''}

        <!-- Templates Grid (2-Columns) -->
        <div class="grid grid-cols-2 gap-3 max-h-[calc(100vh-280px)] overflow-y-auto pr-1">
          ${filtered.map(t => `
            <div class="template-card group cursor-pointer rounded-lg bg-zinc-900/90 border ${this.editor.currentTemplate?.id === t.id ? 'border-amber-500 ring-1 ring-amber-500' : 'border-zinc-800 hover:border-zinc-700'} overflow-hidden transition-all duration-200 hover:shadow-lg" data-tid="${t.id}">
              <!-- Visual Card Preview Simulation -->
              <div class="relative w-full h-44 ${t.bgImage ? '' : (t.bgTexture || 'texture-deckle')} overflow-hidden flex flex-col items-center justify-center p-2.5 border-b border-zinc-800/40 select-none" 
                   style="background-color: ${t.bgColor}; ${t.bgImage ? `background-image: url('${this.editor.getEffectiveBg(t.bgImage)}'); background-size: cover; background-position: center;` : ''}">
                <div class="w-full h-full transform scale-[0.32] origin-top-left pointer-events-none">
                  ${t.front.map(el => this.editor.renderElementHTML(el, { preview: true, previewKey: `side-${t.id}` })).join('')}
                </div>
                <!-- Badge on Top-Right -->
                <span class="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[9px] font-serif text-amber-300 uppercase tracking-wider">
                  ${t.badge}
                </span>
              </div>
              
              <!-- Card Meta Details -->
              <div class="p-2.5">
                <h4 class="text-xs font-serif font-semibold text-zinc-200 group-hover:text-amber-400 transition truncate">
                  ${t.title}
                </h4>
                <div class="flex items-center justify-between mt-1 text-[10px] text-zinc-500">
                  <span>${t.style.split('/')[0]}</span>
                  <span class="text-amber-500/80 font-mono font-medium">5"×7"</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Bind template cards
    container.querySelectorAll('.template-card').forEach(card => {
      card.addEventListener('click', () => {
        const tid = card.getAttribute('data-tid');
        const selected = TEMPLATES.find(t => t.id === tid);
        if (selected) {
          this.editor.loadTemplate(selected);
          this.renderLeftSidebar();
        }
      });
    });

    // Bind section pills
    container.querySelectorAll('.section-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        this.activeSection = pill.getAttribute('data-sec');
        this.renderTemplatesTab(container);
      });
    });

    document.getElementById('btn-sidebar-open-lobby')?.addEventListener('click', () => {
      this.showLobby(null);
    });

    // Search input
    const searchInput = document.getElementById('template-search-input');
    searchInput?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.renderTemplatesTab(container);
    });
  }

  // =========================================================================
  // TAB 2: TEXT & TYPOGRAPHY
  // =========================================================================
  getTextStylePresets() {
    return [
      {
        id: 'heading',
        name: 'Grand Serif Heading',
        hint: 'Bodoni Moda · Names & titles',
        sample: 'CELEBRATION TITLE',
        previewStyle: "font-family: 'Bodoni Moda', serif; font-weight:800; font-size:15px;",
        props: {
          fontFamily: "'Bodoni Moda', serif",
          fontSize: 34,
          fontWeight: '800',
          fontStyle: 'normal',
          letterSpacing: 4,
          textAlign: 'center',
          color: '#111111',
          isFoil: false,
          noWrap: false
        }
      },
      {
        id: 'script',
        name: 'Romantic Calligraphy',
        hint: 'Great Vibes · Script names',
        sample: 'Forever & Always',
        previewStyle: "font-family: 'Great Vibes', cursive; font-size:20px; color:#C79B4B;",
        props: {
          fontFamily: "'Great Vibes', cursive",
          fontSize: 42,
          fontWeight: '400',
          fontStyle: 'normal',
          letterSpacing: 0,
          textAlign: 'center',
          color: '#C79B4B',
          isFoil: true,
          noWrap: false
        }
      },
      {
        id: 'subheading',
        name: 'Editorial Subhead',
        hint: 'Montserrat · Date & time lines',
        sample: 'SATURDAY • OCTOBER 24TH • 18:00',
        previewStyle: "font-family: 'Montserrat', sans-serif; font-size:10px; letter-spacing:2px; text-transform:uppercase;",
        props: {
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 9.5,
          fontWeight: '600',
          fontStyle: 'normal',
          letterSpacing: 3,
          textAlign: 'center',
          color: '#444444',
          isFoil: false,
          noWrap: true
        }
      },
      {
        id: 'body',
        name: 'Literary Body Note',
        hint: 'Cormorant · Details & notes',
        sample: 'Reception, live gypsy jazz & feast to follow',
        previewStyle: "font-family: 'Cormorant Garamond', serif; font-style:italic; font-size:13px;",
        props: {
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 14,
          fontWeight: '400',
          fontStyle: 'italic',
          letterSpacing: 0,
          textAlign: 'center',
          color: '#555555',
          isFoil: false,
          noWrap: false
        }
      }
    ];
  }

  applyTextStyleToSelection(style, { forceAdd = false } = {}) {
    const selectedTexts = this.editor.getSelectedElements().filter(el => el.type === 'text');

    if (!forceAdd && selectedTexts.length > 0) {
      this.editor.saveState();
      selectedTexts.forEach(el => {
        this.editor.updateElement(el.id, { ...style.props }, { saveState: false, updateInspector: false });
      });
      this.editor.updateFloatingToolbar();
      if (this.editor.selectedElementId) {
        this.editor.selectElement(this.editor.selectedElementId, { forceRefresh: true });
      }
      this.renderLeftSidebar();
      return;
    }

    this.editor.addElement({
      type: 'text',
      content: style.sample,
      ...style.props
    });
    this.renderLeftSidebar();
  }

  renderTextTab(container) {
    const selectedTexts = this.editor.getSelectedElements().filter(el => el.type === 'text');
    const hasSelection = selectedTexts.length > 0;
    const styles = this.getTextStylePresets();

    container.innerHTML = `
      <div class="space-y-5">
        <div class="p-3 rounded-xl border ${hasSelection ? 'bg-amber-500/15 border-amber-500/40' : 'bg-zinc-900/70 border-zinc-800'} text-[11px] leading-relaxed">
          ${hasSelection ? `
            <strong class="text-amber-300 font-serif block mb-1">${selectedTexts.length} text selected</strong>
            <span class="text-zinc-300">Click a style below to apply it to the selected text (content stays the same — only look changes).</span>
          ` : `
            <strong class="text-zinc-200 font-serif block mb-1">No text selected</strong>
            <span class="text-zinc-400">Click text on the card first, then choose a style to interchange. Or use “Add new” to place a fresh line.</span>
          `}
        </div>

        <div class="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-[10px] text-zinc-500 space-y-1">
          <p class="m-0"><span class="text-amber-400">Move:</span> drag text on the card</p>
          <p class="m-0"><span class="text-amber-400">Multi-move:</span> Ctrl/Cmd + click several texts, then drag</p>
          <p class="m-0"><span class="text-amber-400">Select all text:</span> Ctrl/Cmd + A</p>
        </div>

        <div>
          <h4 class="text-xs font-serif font-bold text-zinc-300 uppercase tracking-wider mb-3">
            ${hasSelection ? 'Apply Style to Selected Text' : 'Typography Styles'}
          </h4>
          <div class="space-y-2.5">
            ${styles.map(style => `
              <div class="rounded-lg bg-zinc-900 border border-zinc-800 overflow-hidden">
                <button type="button" class="text-style-apply-btn w-full p-3 text-left transition hover:bg-zinc-800/80 flex items-center justify-between gap-2 group" data-style="${style.id}">
                  <div class="min-w-0">
                    <span class="block text-white group-hover:text-amber-300 transition truncate" style="${style.previewStyle}">
                      ${style.name}
                    </span>
                    <span class="text-[10px] text-zinc-500">${style.hint}</span>
                  </div>
                  <span class="shrink-0 text-[10px] px-2 py-1 rounded ${hasSelection ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-zinc-800 text-zinc-400'} font-serif">
                    ${hasSelection ? 'Apply →' : 'Select text'}
                  </span>
                </button>
                <div class="px-3 pb-2.5 flex justify-end">
                  <button type="button" class="text-style-add-btn text-[10px] text-zinc-500 hover:text-amber-300 transition" data-style="${style.id}">
                    + Add new ${style.name.split(' ')[0].toLowerCase()} line
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <h4 class="text-xs font-serif font-bold text-zinc-300 uppercase tracking-wider mb-2">
            European Font Pairings
          </h4>
          <p class="text-[10px] text-zinc-500 mb-2">Applies fonts across all text on this card side.</p>
          <div class="space-y-2">
            ${FONT_PAIRINGS.map((p, idx) => `
              <button type="button" class="font-pairing-btn w-full text-left p-2.5 rounded bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/50 text-[11px] text-zinc-400 transition" data-idx="${idx}">
                <span class="font-serif font-semibold text-amber-300 block mb-0.5">${p.name}</span>
                <span>${p.heading} + ${p.subheading} + ${p.script}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('.text-style-apply-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const style = styles.find(s => s.id === btn.getAttribute('data-style'));
        if (!style) return;
        if (!hasSelection) {
          // Guide user: still allow apply-as-add if nothing selected? Prefer flash tip.
          btn.classList.add('edit-panel-pulse');
          return;
        }
        this.applyTextStyleToSelection(style);
      });
    });

    container.querySelectorAll('.text-style-add-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const style = styles.find(s => s.id === btn.getAttribute('data-style'));
        if (style) this.applyTextStyleToSelection(style, { forceAdd: true });
      });
    });

    container.querySelectorAll('.font-pairing-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pairing = FONT_PAIRINGS[parseInt(btn.getAttribute('data-idx'), 10)];
        if (pairing) this.applyFontPairing(pairing);
      });
    });
  }

  resolveFontFamily(fontName) {
    const found = LUXURY_FONTS.find(f => f.name === fontName || f.family.includes(fontName));
    if (found) return found.family;
    return `'${fontName}', serif`;
  }

  applyFontPairing(pairing) {
    const heading = this.resolveFontFamily(pairing.heading);
    const subheading = this.resolveFontFamily(pairing.subheading);
    const script = this.resolveFontFamily(pairing.script);
    const selectedTexts = this.editor.getSelectedElements().filter(el => el.type === 'text');
    const texts = selectedTexts.length ? selectedTexts : this.editor.getActiveElements().filter(el => el.type === 'text');
    if (!texts.length) return;

    this.editor.saveState();
    texts.forEach(el => {
      const fam = (el.fontFamily || '').toLowerCase();
      const isScript = /vibes|script|italianno|brush|pinyon|alex|monte|carlo/.test(fam);
      let nextFamily = subheading;
      if (isScript) nextFamily = script;
      else if ((el.fontSize || 0) >= 22) nextFamily = heading;
      this.editor.updateElement(el.id, { fontFamily: nextFamily }, { saveState: false, updateInspector: false });
    });
    this.editor.updateFloatingToolbar();
    if (this.editor.selectedElementId) {
      this.editor.selectElement(this.editor.selectedElementId, { forceRefresh: true });
    }
  }

  // =========================================================================
  // TAB 3: ARTWORK & ELEMENTS
  // =========================================================================
  renderElementsTab(container) {
    container.innerHTML = `
      <div class="space-y-5 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
        
        <!-- Wax Seals -->
        <div>
          <h4 class="text-xs font-serif font-bold text-zinc-300 uppercase tracking-wider mb-2.5">
            Luxury Wax Seals
          </h4>
          <div class="grid grid-cols-2 gap-2">
            ${ASSET_LIBRARY.waxSeals.map(seal => `
              <button class="add-seal-btn p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 flex flex-col items-center gap-1.5 transition" data-sid="${seal.id}">
                <div class="transform scale-75">${seal.html}</div>
                <span class="text-[10px] text-zinc-400 text-center truncate w-full">${seal.name.split(' ')[0]} ${seal.name.split(' ')[1]}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Botanicals & Flora -->
        <div>
          <h4 class="text-xs font-serif font-bold text-zinc-300 uppercase tracking-wider mb-2.5">
            European Botanicals
          </h4>
          <div class="grid grid-cols-2 gap-2">
            ${ASSET_LIBRARY.botanicals.map(bot => `
              <button class="add-svg-btn p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 flex flex-col items-center gap-2 transition group" data-aid="${bot.id}">
                <div class="w-12 h-12 text-zinc-300 group-hover:text-amber-400 transition flex items-center justify-center">
                  ${bot.svg}
                </div>
                <span class="text-[10px] text-zinc-400 text-center truncate w-full">${bot.name}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Borders & Architectural Frames -->
        <div>
          <h4 class="text-xs font-serif font-bold text-zinc-300 uppercase tracking-wider mb-2.5">
            Architectural Frames
          </h4>
          <div class="grid grid-cols-2 gap-2">
            ${ASSET_LIBRARY.frames.map(fr => `
              <button class="add-svg-btn p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 flex flex-col items-center gap-2 transition group" data-aid="${fr.id}">
                <div class="w-12 h-14 text-zinc-300 group-hover:text-amber-400 transition flex items-center justify-center">
                  ${fr.svg}
                </div>
                <span class="text-[10px] text-zinc-400 text-center truncate w-full">${fr.name}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Celebrations & Icons -->
        <div>
          <h4 class="text-xs font-serif font-bold text-zinc-300 uppercase tracking-wider mb-2.5">
            Icons & Motifs
          </h4>
          <div class="grid grid-cols-2 gap-2">
            ${ASSET_LIBRARY.celebrations.map(cel => `
              <button class="add-svg-btn p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 flex flex-col items-center gap-2 transition group" data-aid="${cel.id}">
                <div class="w-10 h-10 text-zinc-300 group-hover:text-amber-400 transition flex items-center justify-center">
                  ${cel.svg}
                </div>
                <span class="text-[10px] text-zinc-400 text-center truncate w-full">${cel.name}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Royal Monograms, Lanterns & Tassels -->
        <div>
          <h4 class="text-xs font-serif font-bold text-zinc-300 uppercase tracking-wider mb-2.5">
            Royal Crests, Lanterns & Tassels
          </h4>
          <div class="grid grid-cols-2 gap-2">
            ${(ASSET_LIBRARY.monograms || []).map(mg => `
              <button class="add-svg-btn p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 flex flex-col items-center gap-2 transition group" data-aid="${mg.id}">
                <div class="w-10 h-12 text-amber-300 group-hover:text-amber-400 transition flex items-center justify-center">
                  ${mg.svg}
                </div>
                <span class="text-[10px] text-zinc-400 text-center truncate w-full">${mg.name}</span>
              </button>
            `).join('')}
          </div>
        </div>

      </div>
    `;

    // Attach click events
    container.querySelectorAll('.add-seal-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sid = btn.getAttribute('data-sid');
        this.editor.addElement({
          type: 'wax-seal',
          assetId: sid,
          width: 54,
          height: 54,
          x: 173,
          y: 200
        });
      });
    });

    container.querySelectorAll('.add-svg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const aid = btn.getAttribute('data-aid');
        let width = 80;
        let height = 80;
        let color = '#333333';
        if (aid === 'event-icons-row') {
          width = 280;
          height = 50;
          color = '#D4AF37';
        } else if (aid === 'monogram-octagonal') {
          width = 70;
          height = 70;
          color = '#D4AF37';
        } else if (aid === 'lantern-gold') {
          width = 50;
          height = 100;
          color = '#D4AF37';
        } else if (aid === 'tassel-gold') {
          width = 35;
          height = 95;
          color = '#D4AF37';
        } else if (aid === 'hanging-gift-tag') {
          width = 75;
          height = 115;
        }

        this.editor.addElement({
          type: 'svg',
          assetId: aid,
          width,
          height,
          color,
          opacity: 0.95,
          x: aid === 'event-icons-row' ? 60 : 160,
          y: aid === 'event-icons-row' ? 410 : 180
        });
      });
    });
  }

  // =========================================================================
  // TAB 4: PAPER & BACKGROUND TEXTURES & LUXURY ARCH ARTWORK
  // =========================================================================
  renderPaperTab(container) {
    const luxuryBgs = [
      { id: 'assets/backgrounds/emerald_lantern_arch.jpg', name: 'Royal Emerald & Golden Lanterns', desc: 'Mughal filigree arch with lanterns & white peonies' },
      { id: 'assets/backgrounds/mughal_burgundy_arch.jpg', name: 'Mughal Scalloped & Crimson Leaves', desc: 'Warm ivory watercolor with gold leaf autumn foliage' },
      { id: 'assets/backgrounds/blush_bow_cameo.jpg', name: 'Victorian Blush Silk Bow & Roses', desc: 'Dusty rose ribbon bow & garden roses oval frame' },
      { id: 'assets/backgrounds/amalfi_lemon_arch.jpg', name: 'Tuscan Amalfi Lemon Pergola', desc: 'Limestone arch with fresh lemons & olive trees' },
      { id: 'assets/backgrounds/celestial_gold_arch.jpg', name: 'Celestial Midnight Moon & Stars', desc: 'Navy sapphire velvet with gold star charms' },
      { id: 'assets/backgrounds/french_toile_chateau.jpg', name: 'French Chateau Toile & Gilded Frame', desc: 'Pastoral blue Toile de Jouy & white hydrangeas' }
    ];

    const textures = [
      { id: 'texture-deckle', name: 'Cotton Deckle Rag', desc: 'Handmade European torn-edge texture', preview: '#faf7f2' },
      { id: 'texture-linen', name: 'Woven French Linen', desc: 'Crisp tactile weave, editorial favourite', preview: '#f7f5f0' },
      { id: 'texture-travertine', name: 'Travertine Limestone', desc: 'Warm Nordic organic architectural stone', preview: '#eee9e0' },
      { id: 'texture-parchment', name: 'Vintage Aged Parchment', desc: 'Old-world Tuscan & Roman tone', preview: '#fbf8ef' },
      { id: 'texture-velvet', name: 'Midnight Charcoal Velvet', desc: '1920s Gatsby speakeasy noir', preview: '#0c141f' },
      { id: 'texture-emerald', name: 'Royal Emerald Velvet', desc: 'Moody celestial starlight drama', preview: '#09231b' },
      { id: 'texture-burgundy', name: 'Parisian Wine Burgundy', desc: 'Sultry jazz club & tasting salon', preview: '#2b0b14' }
    ];

    container.innerHTML = `
      <div class="space-y-5 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
        
        <!-- Luxury Arch & Illustrated Artwork Backgrounds -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-xs font-serif font-bold text-amber-300 uppercase tracking-wider">
              Luxury Arch Artworks
            </h4>
            ${this.editor.currentTemplate?.bgImage ? `
              <button id="btn-remove-bg-art" class="text-[10px] text-red-400 hover:text-red-300 transition">
                Remove Art
              </button>
            ` : ''}
          </div>
          <p class="text-[11px] text-zinc-500 mb-3">
            Handcrafted 3D metallic arches, hanging lanterns, silk bows, and botanical backdrops.
          </p>
          <div class="grid grid-cols-2 gap-2">
            ${luxuryBgs.map(bg => `
              <button class="bg-art-select-btn p-1.5 rounded-lg bg-zinc-900 border ${this.editor.currentTemplate?.bgImage === bg.id ? 'border-amber-500 ring-1 ring-amber-500' : 'border-zinc-800 hover:border-zinc-700'} text-left transition flex flex-col items-center gap-1 group" data-bg="${bg.id}">
                <div class="w-full h-24 rounded overflow-hidden relative shadow-sm">
                  <img src="${this.editor.getEffectiveBg(bg.id)}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                </div>
                <span class="text-[10px] font-serif font-semibold text-zinc-200 group-hover:text-amber-400 truncate w-full text-center">${bg.name}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Paper Textures -->
        <div>
          <h4 class="text-xs font-serif font-bold text-zinc-300 uppercase tracking-wider mb-2">
            Paper Stock & Textures
          </h4>
          <p class="text-[11px] text-zinc-500 mb-3">
            Select tactile European stationery textures with realistic paper grain.
          </p>
          <div class="space-y-1.5">
            ${textures.map(tx => `
              <button class="texture-select-btn w-full p-2 rounded-lg bg-zinc-900 border ${!this.editor.currentTemplate?.bgImage && this.editor.currentTemplate?.bgTexture === tx.id ? 'border-amber-500' : 'border-zinc-800 hover:border-zinc-700'} flex items-center gap-3 text-left transition" data-tx="${tx.id}">
                <div class="w-8 h-8 rounded ${tx.id} border border-black/10 shrink-0" style="background-color: ${tx.preview};"></div>
                <div>
                  <span class="text-xs font-serif font-semibold text-zinc-200 block">${tx.name}</span>
                  <span class="text-[10px] text-zinc-500">${tx.desc}</span>
                </div>
              </button>
            `).join('')}
          </div>
        </div>

        <div>
          <h4 class="text-xs font-serif font-bold text-zinc-300 uppercase tracking-wider mb-2">
            Custom Paper Tone
          </h4>
          <div class="flex items-center gap-2">
            <input id="bg-color-picker" type="color" value="${this.editor.currentTemplate?.bgColor || '#FAF7F2'}" 
                   class="w-10 h-10 rounded cursor-pointer bg-transparent border border-zinc-700" />
            <span class="text-xs text-zinc-400 font-mono" id="bg-color-hex">${this.editor.currentTemplate?.bgColor || '#FAF7F2'}</span>
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('.bg-art-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const bg = btn.getAttribute('data-bg');
        this.editor.changeBackgroundImage(bg);
        this.renderPaperTab(container);
      });
    });

    document.getElementById('btn-remove-bg-art')?.addEventListener('click', () => {
      this.editor.changeBackgroundImage(null);
      this.renderPaperTab(container);
    });

    container.querySelectorAll('.texture-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tx = btn.getAttribute('data-tx');
        this.editor.changeBackgroundImage(null);
        this.editor.changeBackgroundTexture(tx);
        this.renderPaperTab(container);
      });
    });

    const colorPicker = document.getElementById('bg-color-picker');
    colorPicker?.addEventListener('input', (e) => {
      this.editor.changeBackgroundColor(e.target.value);
      document.getElementById('bg-color-hex').textContent = e.target.value;
    });
  }

  // =========================================================================
  // TAB 5: PHOTO UPLOADER WITH FRAME MASKS
  // =========================================================================
  renderPhotosTab(container) {
    const selected = this.editor.getSelectedElement();
    const replacing = selected?.type === 'image';

    container.innerHTML = `
      <div class="space-y-4">
        <div class="p-3 rounded-xl border ${replacing ? 'bg-amber-500/15 border-amber-500/40' : 'bg-zinc-900/70 border-zinc-800'} text-[11px] leading-relaxed">
          ${replacing ? `
            <strong class="text-amber-300 font-serif block mb-1">Replacing selected photo</strong>
            <span class="text-zinc-300">Upload or pick a sample below — it will replace the photo currently selected on the card.</span>
          ` : `
            <strong class="text-zinc-200 font-serif block mb-1">Add a new photo frame</strong>
            <span class="text-zinc-400">Tip: first click a photo on the card to replace it. Or upload here to add a new frame.</span>
          `}
        </div>
        <div>
          <h4 class="text-xs font-serif font-bold text-zinc-300 uppercase tracking-wider mb-2">
            ${replacing ? 'Replace Selected Photo' : 'Upload Portrait or Venue Photo'}
          </h4>
          
          <label class="block w-full p-4 border-2 border-dashed ${replacing ? 'border-amber-500/70 bg-amber-500/10' : 'border-zinc-700 bg-zinc-900/60'} hover:border-amber-500/60 rounded-lg text-center cursor-pointer transition">
            <svg class="w-8 h-8 mx-auto mb-2 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span class="text-xs text-amber-300 font-serif font-semibold block">${replacing ? 'Click to Replace Photo' : 'Click to Upload Image'}</span>
            <span class="text-[10px] text-zinc-500 block mt-0.5">Supports JPG, PNG, WEBP</span>
            <input id="photo-file-input" type="file" accept="image/*" class="hidden" />
          </label>
        </div>

        <div>
          <h4 class="text-xs font-serif font-bold text-zinc-300 uppercase tracking-wider mb-2">
            Preset Sample Photos
          </h4>
          <div class="grid grid-cols-2 gap-2">
            <button class="add-sample-photo p-1.5 rounded bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition flex flex-col items-center" 
                    data-url="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80">
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=200&q=60" 
                   class="w-full h-20 object-cover rounded mask-arch" />
              <span class="text-[10px] text-zinc-400 mt-1">Arch Couple</span>
            </button>
            
            <button class="add-sample-photo p-1.5 rounded bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition flex flex-col items-center" 
                    data-url="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80">
              <img src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=200&q=60" 
                   class="w-full h-20 object-cover rounded mask-oval" />
              <span class="text-[10px] text-zinc-400 mt-1">Oval Portrait</span>
            </button>
          </div>
        </div>
      </div>
    `;

    // File upload
    const fileInput = document.getElementById('photo-file-input');
    fileInput?.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const selectedId = this.editor.selectedElementId;
        const selectedEl = this.editor.getSelectedElement();
        if (selectedEl?.type === 'image') {
          this.editor.updateElement(selectedId, { src: event.target.result });
          this.renderPhotosTab(container);
          return;
        }
        this.editor.addElement({
          type: 'image',
          src: event.target.result,
          mask: 'mask-arch',
          width: 180,
          height: 240,
          x: 110,
          y: 120
        });
        this.renderPhotosTab(container);
      };
      reader.readAsDataURL(file);
    });

    container.querySelectorAll('.add-sample-photo').forEach(btn => {
      btn.addEventListener('click', () => {
        const url = btn.getAttribute('data-url');
        const selectedId = this.editor.selectedElementId;
        const selectedEl = this.editor.getSelectedElement();
        if (selectedEl?.type === 'image') {
          this.editor.updateElement(selectedId, { src: url });
          this.renderPhotosTab(container);
          return;
        }
        this.editor.addElement({
          type: 'image',
          src: url,
          mask: 'mask-arch',
          width: 180,
          height: 240,
          x: 110,
          y: 120
        });
        this.renderPhotosTab(container);
      });
    });
  }

  // =========================================================================
  // TAB 6: DYNAMIC RSVP QR CODE GENERATOR
  // =========================================================================
  renderQRPreview(box, url, size = 120) {
    if (!box) return;
    const value = (url || '').trim() || 'https://wedbuilder.example/rsvp';
    box.innerHTML = '';
    if (window.QRCode) {
      try {
        new window.QRCode(box, {
          text: value,
          width: size,
          height: size,
          colorDark: '#111111',
          colorLight: '#ffffff',
          correctLevel: window.QRCode.CorrectLevel?.M
        });
        return;
      } catch (e) {}
    }
    const img = document.createElement('img');
    img.alt = 'QR preview';
    img.className = 'w-full h-full object-contain';
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(value)}&color=111111`;
    box.appendChild(img);
  }

  renderQRTab(container) {
    const existingQr = this.editor.getActiveElements().find(el => el.type === 'qr-code');
    const selectedIsQr = this.editor.getSelectedElement()?.type === 'qr-code';
    const currentUrl = existingQr?.qrValue || 'https://withjoy.com/celebrate';
    const currentSize = existingQr ? Math.round(existingQr.width || 80) : 80;
    const sideLabel = this.editor.activeSide === 'front' ? 'Front' : 'Back';

    container.innerHTML = `
      <div class="space-y-4">
        <div class="p-3 rounded-xl ${existingQr ? 'bg-amber-500/10 border border-amber-500/30' : 'bg-zinc-900/70 border border-zinc-800'} text-[11px] text-zinc-300 leading-relaxed">
          ${existingQr
            ? `<strong class="text-amber-300 font-serif">QR on ${sideLabel} side.</strong> Edit the link below — the card updates live. No duplicates.`
            : `Add a scannable RSVP QR to the <strong>${sideLabel}</strong> side of the card.`}
          ${selectedIsQr ? '<div class="mt-1 text-amber-300">QR is selected on canvas — drag to reposition.</div>' : ''}
        </div>

        <div class="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col items-center gap-2">
          <span class="text-[10px] font-serif uppercase tracking-wider text-zinc-500">Live Preview</span>
          <div id="qr-sidebar-preview" class="w-[120px] h-[120px] bg-white rounded-lg p-2 flex items-center justify-center overflow-hidden"></div>
        </div>

        <div>
          <label class="block text-[11px] text-zinc-400 mb-1">Destination URL / Web Link</label>
          <input id="qr-input-url" type="url" 
                 placeholder="https://withjoy.com/your-celebration" 
                 value="${this.editor.escapeHtml(currentUrl)}"
                 class="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-amber-500" />
          <p id="qr-url-hint" class="text-[10px] text-zinc-500 mt-1">Paste website, Google Form, WithJoy, or WhatsApp link.</p>
        </div>

        <div>
          <div class="flex items-center justify-between mb-1">
            <label class="text-[11px] text-zinc-400">QR Size on Card</label>
            <span id="qr-size-label" class="text-[10px] font-mono text-amber-300">${currentSize}px</span>
          </div>
          <input id="qr-size-range" type="range" min="56" max="140" step="2" value="${currentSize}" class="w-full accent-amber-500" />
        </div>

        <button id="add-qr-btn" class="w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-zinc-950 font-serif font-bold text-xs uppercase tracking-wider transition shadow-md">
          ${existingQr ? 'Update QR on Card' : '+ Add QR Code to Card'}
        </button>

        <div class="grid grid-cols-2 gap-2">
          ${existingQr ? `
            <button id="select-qr-btn" class="py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-serif transition">
              Select on Card
            </button>
            <button id="delete-qr-btn" class="py-2 rounded-lg bg-red-950/50 border border-red-800/60 text-red-300 hover:text-red-200 text-xs font-serif transition">
              Delete QR
            </button>
          ` : `
            <button id="qr-goto-back" class="col-span-2 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-serif transition">
              Switch to Back Side
            </button>
          `}
        </div>

        ${existingQr && this.editor.activeSide === 'front' ? `
          <button id="qr-goto-back" class="w-full py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-serif transition">
            Prefer back side? Switch to Back
          </button>
        ` : ''}

        <div class="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-[11px] text-zinc-400 space-y-1.5">
          <strong class="text-white block font-serif">How to use</strong>
          <span>1. Paste your RSVP link · 2. Add/Update QR · 3. Drag QR on the card to place it · 4. Test with your phone camera</span>
        </div>
      </div>
    `;

    const urlInput = document.getElementById('qr-input-url');
    const previewBox = document.getElementById('qr-sidebar-preview');
    const sizeRange = document.getElementById('qr-size-range');
    const sizeLabel = document.getElementById('qr-size-label');

    const refreshPreview = () => {
      this.renderQRPreview(previewBox, urlInput?.value, 120);
    };
    refreshPreview();

    let liveTimer = null;
    urlInput?.addEventListener('input', () => {
      refreshPreview();
      const current = this.editor.getActiveElements().find(el => el.type === 'qr-code');
      if (!current) return;
      clearTimeout(liveTimer);
      liveTimer = setTimeout(() => {
        const val = urlInput.value.trim() || 'https://wedbuilder.example/rsvp';
        this.editor.updateElement(current.id, { qrValue: val }, { saveState: true, updateInspector: false });
        const dock = document.getElementById('dock-qr-url');
        if (dock && document.activeElement !== dock) dock.value = val;
        const ins = document.getElementById('ins-qr-url');
        if (ins && document.activeElement !== ins) ins.value = val;
      }, 180);
    });

    sizeRange?.addEventListener('input', () => {
      const size = parseInt(sizeRange.value, 10);
      if (sizeLabel) sizeLabel.textContent = `${size}px`;
      const current = this.editor.getActiveElements().find(el => el.type === 'qr-code');
      if (current) {
        this.editor.updateElement(current.id, { width: size, height: size }, { saveState: true, updateInspector: false });
        // Force QR redraw at new size
        this.editor.updateElement(current.id, { qrValue: current.qrValue }, { saveState: false, updateInspector: false });
      }
    });

    document.getElementById('add-qr-btn')?.addEventListener('click', () => {
      const val = urlInput?.value.trim();
      if (!val) {
        urlInput?.classList.add('edit-panel-pulse');
        urlInput?.focus();
        const hint = document.getElementById('qr-url-hint');
        if (hint) {
          hint.textContent = 'Please enter a valid link first.';
          hint.classList.add('text-amber-400');
        }
        return;
      }
      const size = parseInt(sizeRange?.value || '80', 10);
      const current = this.editor.getActiveElements().find(el => el.type === 'qr-code');
      if (current) {
        this.editor.updateElement(current.id, { qrValue: val, width: size, height: size }, { saveState: true, updateInspector: false });
        this.editor.selectElement(current.id, { forceRefresh: true });
        this.renderQRTab(container);
        return;
      }
      this.editor.addElement({
        type: 'qr-code',
        qrValue: val,
        width: size,
        height: size,
        x: Math.round(200 - size / 2),
        y: 300
      });
      this.renderQRTab(container);
    });

    document.getElementById('select-qr-btn')?.addEventListener('click', () => {
      const current = this.editor.getActiveElements().find(el => el.type === 'qr-code');
      if (current) this.editor.selectElement(current.id, { forceRefresh: true });
    });

    document.getElementById('delete-qr-btn')?.addEventListener('click', () => {
      const current = this.editor.getActiveElements().find(el => el.type === 'qr-code');
      if (current) {
        this.editor.deleteElement(current.id);
        this.renderQRTab(container);
      }
    });

    document.getElementById('qr-goto-back')?.addEventListener('click', () => {
      this.editor.switchSide('back');
      this.renderQRTab(container);
      this.renderInspector(null);
    });
  }

  // =========================================================================
  // RIGHT SIDEBAR: ELEMENT INSPECTOR & CONTROLS
  // =========================================================================
  hideLiveEditDock() {
    const dock = document.getElementById('live-edit-dock');
    if (dock) {
      dock.classList.add('is-hidden');
      dock.innerHTML = '';
    }
    document.getElementById('sidebar-right')?.classList.remove('inspector-spotlight');
  }

  showLiveEditDock(element) {
    const dock = document.getElementById('live-edit-dock');
    if (!dock || !element) {
      this.hideLiveEditDock();
      return;
    }

    dock.classList.remove('is-hidden');
    document.getElementById('sidebar-right')?.classList.add('inspector-spotlight');

    if (element.type === 'text') {
      dock.innerHTML = `
        <div class="live-edit-dock-header">
          <div>
            <p class="live-edit-dock-sub">Selected text · live preview</p>
            <h3 class="live-edit-dock-title">Edit this text</h3>
          </div>
          <button type="button" class="live-edit-dock-close" id="dock-close-btn" title="Close">×</button>
        </div>
        <textarea id="dock-text-content" rows="3" placeholder="Type your text…">${this.editor.escapeHtml(element.content || '')}</textarea>
        <div class="live-edit-dock-actions">
          <button type="button" class="live-edit-dock-btn" id="dock-fs-down">− Size</button>
          <button type="button" class="live-edit-dock-btn" id="dock-fs-val">${element.fontSize || 14}px</button>
          <button type="button" class="live-edit-dock-btn" id="dock-fs-up">+ Size</button>
          <button type="button" class="live-edit-dock-btn" id="dock-type-on-card">Type on card</button>
          <button type="button" class="live-edit-dock-btn live-edit-dock-btn--primary" id="dock-more-styles">More styles →</button>
        </div>
      `;

      const syncLive = (val) => {
        this.editor.updateElement(element.id, { content: val }, { saveState: true, updateInspector: false });
        const sideTa = document.getElementById('ins-text-content');
        if (sideTa && document.activeElement !== sideTa) sideTa.value = val;
      };

      document.getElementById('dock-text-content')?.addEventListener('input', (e) => syncLive(e.target.value));
      document.getElementById('dock-fs-down')?.addEventListener('click', () => {
        const next = Math.max(8, (element.fontSize || 14) - 1);
        this.editor.updateElement(element.id, { fontSize: next }, { saveState: true, updateInspector: false });
        const label = document.getElementById('dock-fs-val');
        if (label) label.textContent = `${next}px`;
        const slider = document.getElementById('ins-font-size');
        if (slider) slider.value = next;
        const fsVal = document.getElementById('ins-fs-val');
        if (fsVal) fsVal.textContent = `${next}px`;
      });
      document.getElementById('dock-fs-up')?.addEventListener('click', () => {
        const next = Math.min(80, (element.fontSize || 14) + 1);
        this.editor.updateElement(element.id, { fontSize: next }, { saveState: true, updateInspector: false });
        const label = document.getElementById('dock-fs-val');
        if (label) label.textContent = `${next}px`;
        const slider = document.getElementById('ins-font-size');
        if (slider) slider.value = next;
        const fsVal = document.getElementById('ins-fs-val');
        if (fsVal) fsVal.textContent = `${next}px`;
      });
      document.getElementById('dock-type-on-card')?.addEventListener('click', () => {
        const node = this.editor.getCanvasElementNode(element.id);
        if (node) this.editor.startInlineEdit(element, node);
      });
      document.getElementById('dock-more-styles')?.addEventListener('click', () => {
        document.getElementById('sidebar-right')?.scrollTo({ top: 0, behavior: 'smooth' });
        document.getElementById('ins-edit-spotlight')?.classList.add('edit-panel-pulse');
        document.getElementById('ins-text-content')?.focus();
      });
      document.getElementById('dock-close-btn')?.addEventListener('click', () => {
        this.editor.selectElement(null);
      });

      requestAnimationFrame(() => {
        const ta = document.getElementById('dock-text-content');
        if (ta) {
          ta.focus();
          ta.select();
        }
        dock.classList.add('edit-panel-pulse');
      });
    } else if (element.type === 'image') {
      const src = this.editor.getEffectiveBg(element.src) || element.src || '';
      dock.innerHTML = `
        <div class="live-edit-dock-header">
          <div>
            <p class="live-edit-dock-sub">Selected photo · live preview</p>
            <h3 class="live-edit-dock-title">Replace this photo</h3>
          </div>
          <button type="button" class="live-edit-dock-close" id="dock-close-btn" title="Close">×</button>
        </div>
        <div class="live-edit-dock-photo" id="dock-photo-box">
          <img id="dock-photo-preview" src="${src}" alt="Selected photo" />
          <div style="flex:1; display:flex; flex-direction:column; gap:0.55rem; justify-content:center;">
            <p style="margin:0; font-size:0.8rem; color:rgba(244,236,223,0.7); font-family:'Cormorant Garamond', serif;">
              Upload a new image — the card updates instantly.
            </p>
            <div class="live-edit-dock-actions" style="margin:0;">
              <label class="live-edit-dock-btn live-edit-dock-btn--primary" style="cursor:pointer;">
                Choose / Upload Photo
                <input id="dock-photo-file" type="file" accept="image/*" class="hidden" />
              </label>
              <button type="button" class="live-edit-dock-btn" data-mask="mask-arch">Arch</button>
              <button type="button" class="live-edit-dock-btn" data-mask="mask-oval">Oval</button>
              <button type="button" class="live-edit-dock-btn" data-mask="mask-rectangle">Rect</button>
            </div>
          </div>
        </div>
      `;

      document.getElementById('dock-photo-file')?.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          this.editor.updateElement(element.id, { src: ev.target.result }, { saveState: true, updateInspector: false });
          const preview = document.getElementById('dock-photo-preview');
          if (preview) preview.src = ev.target.result;
          const sidePreview = document.querySelector('#ins-photo-replace-box img');
          if (sidePreview) sidePreview.src = ev.target.result;
        };
        reader.readAsDataURL(file);
      });
      dock.querySelectorAll('[data-mask]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.editor.updateElement(element.id, { mask: btn.getAttribute('data-mask') }, { saveState: true, updateInspector: true });
        });
      });
      document.getElementById('dock-close-btn')?.addEventListener('click', () => {
        this.editor.selectElement(null);
      });

      requestAnimationFrame(() => dock.classList.add('edit-panel-pulse'));
    } else if (element.type === 'qr-code') {
      dock.innerHTML = `
        <div class="live-edit-dock-header">
          <div>
            <p class="live-edit-dock-sub">Selected QR · live preview</p>
            <h3 class="live-edit-dock-title">Edit QR link</h3>
          </div>
          <button type="button" class="live-edit-dock-close" id="dock-close-btn" title="Close">×</button>
        </div>
        <input id="dock-qr-url" type="url" value="${this.editor.escapeHtml(element.qrValue || '')}" placeholder="https://…" />
        <div class="live-edit-dock-actions">
          <button type="button" class="live-edit-dock-btn live-edit-dock-btn--primary" id="dock-more-styles">More options →</button>
        </div>
      `;
      document.getElementById('dock-qr-url')?.addEventListener('input', (e) => {
        this.editor.updateElement(element.id, { qrValue: e.target.value }, { saveState: true, updateInspector: false });
        const side = document.getElementById('ins-qr-url');
        if (side && document.activeElement !== side) side.value = e.target.value;
      });
      document.getElementById('dock-more-styles')?.addEventListener('click', () => {
        document.getElementById('sidebar-right')?.scrollTo({ top: 0, behavior: 'smooth' });
      });
      document.getElementById('dock-close-btn')?.addEventListener('click', () => this.editor.selectElement(null));
      requestAnimationFrame(() => {
        document.getElementById('dock-qr-url')?.focus();
        dock.classList.add('edit-panel-pulse');
      });
    } else {
      dock.innerHTML = `
        <div class="live-edit-dock-header">
          <div>
            <p class="live-edit-dock-sub">Selected ${element.type || 'element'} · live preview</p>
            <h3 class="live-edit-dock-title">Customize in the right panel</h3>
          </div>
          <button type="button" class="live-edit-dock-close" id="dock-close-btn" title="Close">×</button>
        </div>
        <div class="live-edit-dock-actions">
          <button type="button" class="live-edit-dock-btn live-edit-dock-btn--primary" id="dock-more-styles">Open style controls →</button>
        </div>
      `;
      document.getElementById('dock-more-styles')?.addEventListener('click', () => {
        document.getElementById('sidebar-right')?.scrollTo({ top: 0, behavior: 'smooth' });
      });
      document.getElementById('dock-close-btn')?.addEventListener('click', () => this.editor.selectElement(null));
    }

    dock.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  renderInspector(element) {
    const inspector = document.getElementById('sidebar-right-content');
    if (!inspector) return;

    if (!element) {
      this.hideLiveEditDock();
      // Default: 1-Click Event Customizer & All Text Layers
      const allText = this.editor.getActiveElements().filter(el => el.type === 'text');
      const allElements = [...(this.editor.currentTemplate?.front || []), ...(this.editor.currentTemplate?.back || [])];
      const nameElements = this.editor.getNameElements();

      const name1Val = nameElements[0]?.content || '';
      const name2Val = nameElements[1]?.content || '';
      const isCouple = nameElements.length >= 2;

      const dateEl = allElements.find(el => el.type === 'text' && (el.id.includes('date') || el.content.includes('202') || el.content.includes('OCTOBER') || el.content.includes('DEC') || el.content.includes('JUNE') || el.content.includes('SEPTEMBER') || el.content.includes('SAT') || el.content.includes('SUN') || el.content.includes('FRI')));
      const currentDate = dateEl ? dateEl.content : '';

      const timeEl = allElements.find(el => el.type === 'text' && (el.id.includes('time') || el.content.includes("O'CLOCK") || el.content.includes('PM') || el.content.includes('AM') || el.content.includes('17H00') || el.content.includes('20H00') || el.content.includes('HALF PAST') || el.content.includes('NOON')));
      const currentTime = timeEl ? timeEl.content : '';

      const venueEl = allElements.find(el => el.type === 'text' && (el.id.includes('venue') || el.id.includes('loc') || el.id.includes('church') || el.content.includes('CHÂTEAU') || el.content.includes('HÔTEL') || el.content.includes('VILLA') || el.content.includes('PALAZZO') || el.content.includes('MANOR') || el.content.includes('ESTATE') || el.content.includes('PARIS') || el.content.includes('ITALY') || el.content.includes('GARDEN') || el.content.includes('LAKE') || el.content.includes('MOSQUE') || el.content.includes('HOTEL') || el.content.includes('HALL') || el.content.includes('CONSERVATORY')));
      const currentVenue = venueEl ? venueEl.content : '';

      const attireEl = allElements.find(el => el.type === 'text' && (el.id.includes('attire') || el.id.includes('footer') || el.id.includes('reception') || el.id.includes('rsvp') || el.id.includes('tea') || el.content.includes('BLACK TIE') || el.content.includes('RECEPTION') || el.content.includes('RSVP') || el.content.includes('TENUE')));
      const currentAttire = attireEl ? attireEl.content : '';

      inspector.innerHTML = `
        <div class="space-y-5">
          <!-- How to edit helper -->
          <div class="p-3 rounded-xl bg-zinc-950 border border-amber-500/30 text-[11px] text-zinc-300 leading-relaxed space-y-1.5">
            <strong class="text-amber-300 font-serif block text-xs">How to customize</strong>
            <p><span class="text-amber-400 font-semibold">1.</span> Click any <strong>text</strong> on the card → edit box opens here</p>
            <p><span class="text-amber-400 font-semibold">2.</span> Click the same text again → type directly on the card</p>
            <p><span class="text-amber-400 font-semibold">3.</span> Click a <strong>photo</strong> → Replace Photo appears</p>
          </div>

          <!-- Template Header & Side Switcher -->
          <div class="pb-3 border-b border-zinc-800">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-serif uppercase tracking-widest text-amber-400 font-semibold block">
                Stationery Suite
              </span>
              <span class="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono">
                ${this.editor.currentTemplate?.style.split('/')[0] || 'Luxury'}
              </span>
            </div>
            <h3 class="text-sm font-serif font-bold text-white mt-0.5 truncate">
              ${this.editor.currentTemplate?.title || 'Template Details'}
            </h3>

            <!-- Card Side Switcher -->
            <div class="grid grid-cols-2 gap-1.5 mt-2.5 p-1 rounded-lg bg-zinc-950 border border-zinc-800">
              <button id="ins-side-front" class="py-1.5 text-xs font-serif rounded transition ${this.editor.activeSide === 'front' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold' : 'text-zinc-400 hover:text-white'}">
                Front (Invite)
              </button>
              <button id="ins-side-back" class="py-1.5 text-xs font-serif rounded transition ${this.editor.activeSide === 'back' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold' : 'text-zinc-400 hover:text-white'}">
                Back (Details/QR)
              </button>
            </div>
          </div>

          <!-- 1-Click Quick Customizer (Etsy Customer Friendly) -->
          <div class="p-3 rounded-xl bg-gradient-to-b from-amber-500/10 to-amber-500/5 border border-amber-500/30 shadow-md">
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-[10px] font-serif uppercase tracking-wider text-amber-300 font-bold flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                ⚡ Quick Event Details
              </span>
              <span class="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">Live Instant Sync</span>
            </div>
            <p class="text-[10px] text-zinc-400 mb-2.5 leading-relaxed">
              Edit the key details below to update the invitation card instantly on screen:
            </p>

            <div class="space-y-2">
              ${isCouple ? `
                <div class="grid grid-cols-2 gap-1.5">
                  <div>
                    <label class="block text-[10px] font-serif uppercase tracking-wider text-amber-300 font-semibold mb-0.5">Partner 1 (Name 1)</label>
                    <input id="quick-name1" type="text" placeholder="e.g. Zainab" 
                           value="${name1Val}"
                           class="w-full bg-zinc-950 border border-zinc-700/80 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition" />
                  </div>
                  <div>
                    <label class="block text-[10px] font-serif uppercase tracking-wider text-amber-300 font-semibold mb-0.5">Partner 2 (Name 2)</label>
                    <input id="quick-name2" type="text" placeholder="e.g. Hamza" 
                           value="${name2Val}"
                           class="w-full bg-zinc-950 border border-zinc-700/80 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition" />
                  </div>
                </div>
              ` : `
                <div>
                  <label class="block text-[10px] font-serif uppercase tracking-wider text-amber-300 font-semibold mb-0.5">Event Name / Host</label>
                  <input id="quick-name1" type="text" placeholder="e.g. Charlotte & Henri" 
                         value="${name1Val}"
                         class="w-full bg-zinc-950 border border-zinc-700/80 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition" />
                </div>
              `}

              <div class="grid grid-cols-2 gap-1.5">
                <div>
                  <label class="block text-[10px] font-serif uppercase tracking-wider text-zinc-400 mb-0.5">Event Date</label>
                  <input id="quick-date" type="text" placeholder="e.g. October 18, 2025" 
                         value="${currentDate}"
                         class="w-full bg-zinc-950 border border-zinc-700/80 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition" />
                </div>
                <div>
                  <label class="block text-[10px] font-serif uppercase tracking-wider text-zinc-400 mb-0.5">Time</label>
                  <input id="quick-time" type="text" placeholder="e.g. 5:00 PM" 
                         value="${currentTime}"
                         class="w-full bg-zinc-950 border border-zinc-700/80 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition" />
                </div>
              </div>

              <div>
                <label class="block text-[10px] font-serif uppercase tracking-wider text-zinc-400 mb-0.5">Venue & Location</label>
                <input id="quick-venue" type="text" placeholder="e.g. Villa Cimbrone, Ravello" 
                       value="${currentVenue}"
                       class="w-full bg-zinc-950 border border-zinc-700/80 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition" />
              </div>

              <div>
                <label class="block text-[10px] font-serif uppercase tracking-wider text-zinc-400 mb-0.5">Attire / Reception / RSVP</label>
                <input id="quick-attire" type="text" placeholder="e.g. Black Tie • Reception to follow" 
                       value="${currentAttire}"
                       class="w-full bg-zinc-950 border border-zinc-700/80 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition" />
              </div>
            </div>
          </div>

          <!-- All Card Text Lines (Direct Edit List) -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-xs font-serif font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                <span>📝 All Card Text Layers</span>
                <span class="text-[10px] px-1.5 py-0.2 rounded-full bg-zinc-800 text-zinc-400 font-mono">${allText.length}</span>
              </h4>
              <span class="text-[10px] text-zinc-500">Edit any line</span>
            </div>

            <div class="space-y-2 max-h-56 overflow-y-auto pr-1">
              ${allText.map(el => `
                <div class="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition group">
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-[10px] text-amber-400 font-serif truncate max-w-[150px]">
                      ${el.fontFamily.replace(/['",]/g, '').split(' ')[0]} • ${el.fontSize || 14}px
                    </span>
                    <button class="layer-select-btn text-[10px] text-zinc-500 group-hover:text-amber-300 font-serif transition" data-id="${el.id}">
                      Edit Style ↗
                    </button>
                  </div>
                  <textarea class="layer-quick-text w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs text-zinc-200 focus:outline-none focus:border-amber-500/60 resize-y transition" rows="1" data-id="${el.id}">${el.content}</textarea>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Global Text Positioning (Whole Card) -->
          <div class="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 shadow-sm space-y-2">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-serif font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                <span>📐 Global Text Positioning</span>
              </h4>
              <span class="text-[10px] text-amber-400 font-mono">Whole Card</span>
            </div>
            <p class="text-[10px] text-zinc-400 leading-relaxed">
              Align or shift all invitation text layers together:
            </p>
            <div class="grid grid-cols-3 gap-1.5">
              <button id="btn-global-center-text" class="py-1.5 px-1 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 text-[10px] font-serif text-zinc-300 hover:text-amber-300 flex items-center justify-center gap-1 transition" title="Center all text layers horizontally">
                <span>⬌ Center All</span>
              </button>
              <button id="btn-global-nudge-up" class="py-1.5 px-1 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 text-[10px] font-serif text-zinc-300 hover:text-amber-300 flex items-center justify-center gap-1 transition" title="Shift all text up by 10px">
                <span>▲ Shift Up</span>
              </button>
              <button id="btn-global-nudge-down" class="py-1.5 px-1 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 text-[10px] font-serif text-zinc-300 hover:text-amber-300 flex items-center justify-center gap-1 transition" title="Shift all text down by 10px">
                <span>▼ Shift Down</span>
              </button>
            </div>
          </div>

          <!-- Bleed Guide Toggle -->
          <div class="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
            <div>
              <span class="text-xs font-serif font-semibold text-zinc-300 block">Print Safe Margins</span>
              <span class="text-[10px] text-zinc-500">0.125" bleed zone guidelines</span>
            </div>
            <input type="checkbox" id="ins-bleed-check" ${this.editor.showBleed ? 'checked' : ''} 
                   class="w-4 h-4 accent-amber-500 cursor-pointer" />
          </div>

          <!-- Luxury Palette Presets -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-xs font-serif font-bold text-zinc-300 uppercase tracking-wider">
                Luxury Palette Presets
              </h4>
              <span class="text-[10px] text-amber-400 font-mono">1-Click Theme</span>
            </div>
            <div class="space-y-2">
              <button class="palette-btn w-full p-2.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-500/50 flex items-center justify-between text-xs text-zinc-300 transition"
                      data-bg="#FAF7F2" data-accent="#556B2F" data-tx="texture-deckle" data-text="#2C2825">
                <span class="font-serif font-medium">Tuscan Terracotta & Olive</span>
                <div class="flex gap-1.5">
                  <span class="w-4 h-4 rounded-full" style="background:#FAF7F2; border:1px solid #ddd"></span>
                  <span class="w-4 h-4 rounded-full" style="background:#556B2F"></span>
                  <span class="w-4 h-4 rounded-full" style="background:#C79B4B"></span>
                </div>
              </button>

              <button class="palette-btn w-full p-2.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-500/50 flex items-center justify-between text-xs text-zinc-300 transition"
                      data-bg="#FFFFFF" data-accent="#111111" data-tx="texture-linen" data-text="#111111">
                <span class="font-serif font-medium">Parisian Vogue Noir (B&W)</span>
                <div class="flex gap-1.5">
                  <span class="w-4 h-4 rounded-full" style="background:#FFFFFF; border:1px solid #ddd"></span>
                  <span class="w-4 h-4 rounded-full" style="background:#111111"></span>
                  <span class="w-4 h-4 rounded-full" style="background:#888888"></span>
                </div>
              </button>

              <button class="palette-btn w-full p-2.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-500/50 flex items-center justify-between text-xs text-zinc-300 transition"
                      data-bg="#FAF9F5" data-accent="#4A6B5B" data-tx="texture-deckle" data-text="#222A25">
                <span class="font-serif font-medium">Cotswolds Sage Botanicals</span>
                <div class="flex gap-1.5">
                  <span class="w-4 h-4 rounded-full" style="background:#FAF9F5; border:1px solid #ddd"></span>
                  <span class="w-4 h-4 rounded-full" style="background:#4A6B5B"></span>
                  <span class="w-4 h-4 rounded-full" style="background:#E2A76F"></span>
                </div>
              </button>

              <button class="palette-btn w-full p-2.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-500/50 flex items-center justify-between text-xs text-zinc-300 transition"
                      data-bg="#09231B" data-accent="#D4AF37" data-tx="texture-emerald" data-text="#F3E5AB">
                <span class="font-serif font-medium">Emerald Velvet & Gold Foil</span>
                <div class="flex gap-1.5">
                  <span class="w-4 h-4 rounded-full" style="background:#09231B"></span>
                  <span class="w-4 h-4 rounded-full" style="background:#D4AF37"></span>
                  <span class="w-4 h-4 rounded-full" style="background:#FFFFFF"></span>
                </div>
              </button>

              <button class="palette-btn w-full p-2.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-500/50 flex items-center justify-between text-xs text-zinc-300 transition"
                      data-bg="#2B0B14" data-accent="#E2A76F" data-tx="texture-burgundy" data-text="#FDFBF0">
                <span class="font-serif font-medium">Burgundy Autumn Velvet</span>
                <div class="flex gap-1.5">
                  <span class="w-4 h-4 rounded-full" style="background:#2B0B14"></span>
                  <span class="w-4 h-4 rounded-full" style="background:#E2A76F"></span>
                  <span class="w-4 h-4 rounded-full" style="background:#FFFFFF"></span>
                </div>
              </button>

              <button id="btn-restore-template-art" class="w-full mt-2 py-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-[11px] font-serif text-zinc-400 hover:text-amber-300 flex items-center justify-center gap-1.5 transition">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Reset Original Template Art</span>
              </button>
            </div>
          </div>
        </div>
      `;

      // Event bindings for quick fields
      document.getElementById('quick-name1')?.addEventListener('input', (e) => {
        if (nameElements[0]) {
          this.editor.updateElement(nameElements[0].id, { content: e.target.value }, { saveState: true, updateInspector: false });
        }
      });
      document.getElementById('quick-name2')?.addEventListener('input', (e) => {
        if (nameElements[1]) {
          this.editor.updateElement(nameElements[1].id, { content: e.target.value }, { saveState: true, updateInspector: false });
        }
      });
      document.getElementById('quick-date')?.addEventListener('input', (e) => {
        this.editor.updateEventDetails({ date: e.target.value });
      });
      document.getElementById('quick-time')?.addEventListener('input', (e) => {
        this.editor.updateEventDetails({ time: e.target.value });
      });
      document.getElementById('quick-venue')?.addEventListener('input', (e) => {
        this.editor.updateEventDetails({ venue: e.target.value });
      });
      document.getElementById('quick-attire')?.addEventListener('input', (e) => {
        this.editor.updateEventDetails({ attire: e.target.value });
      });

      // Event bindings for global text positioning
      document.getElementById('btn-global-center-text')?.addEventListener('click', () => {
        this.editor.centerAllText();
      });
      document.getElementById('btn-global-nudge-up')?.addEventListener('click', () => {
        this.editor.nudgeAllText(-10);
      });
      document.getElementById('btn-global-nudge-down')?.addEventListener('click', () => {
        this.editor.nudgeAllText(10);
      });

      // Event bindings for individual text layers
      inspector.querySelectorAll('.layer-quick-text').forEach(textarea => {
        textarea.addEventListener('input', (e) => {
          const id = textarea.getAttribute('data-id');
          this.editor.updateElement(id, { content: e.target.value }, { saveState: true, updateInspector: false });
        });
      });

      inspector.querySelectorAll('.layer-select-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          this.editor.selectElement(id);
        });
      });

      document.getElementById('ins-side-front')?.addEventListener('click', () => this.editor.switchSide('front'));
      document.getElementById('ins-side-back')?.addEventListener('click', () => this.editor.switchSide('back'));
      document.getElementById('ins-bleed-check')?.addEventListener('change', (e) => {
        this.editor.toggleBleed(e.target.checked);
      });

      inspector.querySelectorAll('.palette-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const bg = btn.getAttribute('data-bg');
          const tx = btn.getAttribute('data-tx');
          const accent = btn.getAttribute('data-accent');
          const textColor = btn.getAttribute('data-text');
          this.editor.applyPalettePreset({
            bg,
            texture: tx,
            accent,
            textColor
          });
        });
      });

      document.getElementById('btn-restore-template-art')?.addEventListener('click', () => {
        const orig = TEMPLATES.find(t => t.id === this.editor.currentTemplate?.id);
        if (orig) {
          this.editor.loadTemplate(orig);
        }
      });
      return;
    }

    // Selected Element Inspector
    this.showLiveEditDock(element);

    if (element.type === 'text') {
      this.renderTextInspector(inspector, element);
    } else if (element.type === 'svg') {
      this.renderSVGInspector(inspector, element);
    } else if (element.type === 'wax-seal') {
      this.renderWaxSealInspector(inspector, element);
    } else if (element.type === 'qr-code') {
      this.renderQRInspector(inspector, element);
    } else if (element.type === 'image') {
      this.renderImageInspector(inspector, element);
    }

    // Point the right panel clearly at the active edit controls
    requestAnimationFrame(() => {
      document.getElementById('sidebar-right')?.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  renderPositionControlsHTML(el) {
    return `
      <!-- Position & Alignment Control Panel -->
      <div class="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 space-y-2">
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-serif font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
            <span>📍 Position & Alignment</span>
          </span>
          <span class="text-[10px] text-zinc-500 font-mono">X: <span id="pos-x-lbl">${Math.round(el.x)}</span> • Y: <span id="pos-y-lbl">${Math.round(el.y)}</span></span>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-[10px] text-zinc-400 mb-0.5">Horizontal (X px):</label>
            <div class="flex items-center gap-1">
              <button id="pos-x-dec" class="w-6 h-6 rounded bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-zinc-200 font-bold flex items-center justify-center text-xs">-</button>
              <input id="pos-x-val" type="number" value="${Math.round(el.x)}" class="w-full bg-zinc-900 border border-zinc-700 rounded px-1.5 py-0.5 text-center text-xs text-white font-mono focus:outline-none focus:border-amber-500" />
              <button id="pos-x-inc" class="w-6 h-6 rounded bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-zinc-200 font-bold flex items-center justify-center text-xs">+</button>
            </div>
          </div>
          <div>
            <label class="block text-[10px] text-zinc-400 mb-0.5">Vertical (Y px):</label>
            <div class="flex items-center gap-1">
              <button id="pos-y-dec" class="w-6 h-6 rounded bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-zinc-200 font-bold flex items-center justify-center text-xs">-</button>
              <input id="pos-y-val" type="number" value="${Math.round(el.y)}" class="w-full bg-zinc-900 border border-zinc-700 rounded px-1.5 py-0.5 text-center text-xs text-white font-mono focus:outline-none focus:border-amber-500" />
              <button id="pos-y-inc" class="w-6 h-6 rounded bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-zinc-200 font-bold flex items-center justify-center text-xs">+</button>
            </div>
          </div>
        </div>

        <!-- Quick Canvas Alignment Buttons -->
        <div class="grid grid-cols-2 gap-1.5 pt-1">
          <button id="btn-align-center-card" class="py-1 px-2 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 text-[11px] font-serif text-zinc-300 hover:text-amber-300 flex items-center justify-center gap-1 transition" title="Center horizontally on card">
            <span>⬌ Center on Card</span>
          </button>
          <button id="btn-align-center-v" class="py-1 px-2 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 text-[11px] font-serif text-zinc-300 hover:text-amber-300 flex items-center justify-center gap-1 transition" title="Center vertically on card">
            <span>⬍ Center Middle</span>
          </button>
        </div>

        <div class="flex items-center justify-between pt-1 border-t border-zinc-800/80">
          <span class="text-[10px] text-zinc-500">Quick Nudge (5px):</span>
          <div class="flex items-center gap-1">
            <button id="btn-nudge-up" class="w-6 h-6 rounded bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 text-xs flex items-center justify-center" title="Nudge Up 5px">▲</button>
            <button id="btn-nudge-down" class="w-6 h-6 rounded bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 text-xs flex items-center justify-center" title="Nudge Down 5px">▼</button>
            <button id="btn-nudge-left" class="w-6 h-6 rounded bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 text-xs flex items-center justify-center" title="Nudge Left 5px">◀</button>
            <button id="btn-nudge-right" class="w-6 h-6 rounded bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 text-xs flex items-center justify-center" title="Nudge Right 5px">▶</button>
          </div>
        </div>
      </div>
    `;
  }

  bindPositionControls(el) {
    const xInput = document.getElementById('pos-x-val');
    const yInput = document.getElementById('pos-y-val');
    const xLbl = document.getElementById('pos-x-lbl');
    const yLbl = document.getElementById('pos-y-lbl');

    const updatePos = (newX, newY) => {
      if (newX !== undefined) {
        el.x = Math.round(newX);
        if (xInput && document.activeElement !== xInput) xInput.value = el.x;
        if (xLbl) xLbl.textContent = el.x;
      }
      if (newY !== undefined) {
        el.y = Math.round(newY);
        if (yInput && document.activeElement !== yInput) yInput.value = el.y;
        if (yLbl) yLbl.textContent = el.y;
      }
      this.editor.updateElement(el.id, { x: el.x, y: el.y }, { saveState: true, updateInspector: false });
    };

    xInput?.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      if (!isNaN(val)) updatePos(val, undefined);
    });

    yInput?.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      if (!isNaN(val)) updatePos(undefined, val);
    });

    document.getElementById('pos-x-dec')?.addEventListener('click', () => updatePos(el.x - 5, undefined));
    document.getElementById('pos-x-inc')?.addEventListener('click', () => updatePos(el.x + 5, undefined));
    document.getElementById('pos-y-dec')?.addEventListener('click', () => updatePos(undefined, el.y - 5));
    document.getElementById('pos-y-inc')?.addEventListener('click', () => updatePos(undefined, el.y + 5));

    document.getElementById('btn-align-center-card')?.addEventListener('click', () => {
      const centeredX = Math.round((400 - (el.width || 320)) / 2);
      updatePos(centeredX, undefined);
    });

    document.getElementById('btn-align-center-v')?.addEventListener('click', () => {
      const centeredY = Math.round((560 - (el.height || 40)) / 2);
      updatePos(undefined, centeredY);
    });

    document.getElementById('btn-nudge-up')?.addEventListener('click', () => updatePos(undefined, el.y - 5));
    document.getElementById('btn-nudge-down')?.addEventListener('click', () => updatePos(undefined, el.y + 5));
    document.getElementById('btn-nudge-left')?.addEventListener('click', () => updatePos(el.x - 5, undefined));
    document.getElementById('btn-nudge-right')?.addEventListener('click', () => updatePos(el.x + 5, undefined));
  }

  renderTextInspector(container, el) {
    const luxuryFonts = [
      { name: 'Bodoni Moda', family: "'Bodoni Moda', serif" },
      { name: 'Cormorant', family: "'Cormorant Garamond', serif" },
      { name: 'Great Vibes', family: "'Great Vibes', cursive" },
      { name: 'Pinyon Script', family: "'Pinyon Script', cursive" },
      { name: 'Montserrat', family: "'Montserrat', sans-serif" },
      { name: 'Cinzel', family: "'Cinzel', serif" }
    ];

    const luxuryColors = [
      { name: 'Classic Noir', hex: '#111111' },
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Ivory Vellum', hex: '#FAF7F2' },
      { name: 'Gold Leaf', hex: '#C79B4B' },
      { name: 'Royal Emerald', hex: '#09231B' },
      { name: 'Bordeaux Red', hex: '#5B1E29' },
      { name: 'Cotswolds Sage', hex: '#4A6B5B' },
      { name: 'Tuscan Ochre', hex: '#C05C3D' }
    ];

    container.innerHTML = `
      <div class="space-y-4 text-xs">
        
        <!-- Back to Card Details Button -->
        <button id="ins-back-btn" class="w-full py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-serif flex items-center justify-center gap-1.5 transition shadow-sm">
          <svg class="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Done • Back to Card Overview</span>
        </button>

        <div class="flex items-center justify-between pb-2 border-b border-zinc-800">
          <span class="font-serif font-bold text-amber-400 uppercase tracking-wider">Edit Text</span>
          <div class="flex items-center gap-1">
            <button id="ins-dup-btn" title="Duplicate Element" class="p-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
            </button>
            <button id="ins-del-btn" title="Delete Element" class="p-1 rounded bg-red-950/60 hover:bg-red-900 border border-red-800/60 text-red-400">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Text Content Area — primary edit window -->
        <div id="ins-edit-spotlight" class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/40 space-y-2">
          <div class="flex items-center justify-between gap-2">
            <label class="text-amber-300 font-serif font-bold uppercase tracking-wider text-[11px]">Change this text</label>
            <button type="button" id="ins-edit-on-card" class="text-[10px] px-2 py-1 rounded bg-zinc-950 border border-amber-500/40 text-amber-300 hover:bg-amber-500/20 transition">
              Type on card
            </button>
          </div>
          <textarea id="ins-text-content" rows="3" 
                    class="w-full bg-zinc-950 border border-amber-500/50 rounded-lg p-2.5 text-zinc-100 text-sm focus:outline-none focus:border-amber-400 leading-relaxed shadow-inner">${this.editor.escapeHtml(el.content)}</textarea>
          <p class="text-[10px] text-zinc-500">Type here to update instantly. Or click “Type on card” to edit on the invitation.</p>
        </div>

        <!-- Position & Movement Tool -->
        ${this.renderPositionControlsHTML(el)}

        <!-- Font Size & Quick Step Buttons -->
        <div>
          <div class="flex items-center justify-between mb-1">
            <label class="text-zinc-400 font-medium">Font Size:</label>
            <span id="ins-fs-val" class="font-mono text-amber-300 font-bold">${el.fontSize || 14}px</span>
          </div>
          <div class="flex items-center gap-2">
            <button id="ins-fs-dec" class="w-7 h-7 rounded bg-zinc-950 border border-zinc-700 hover:bg-zinc-800 text-zinc-200 font-bold flex items-center justify-center transition">-</button>
            <input id="ins-font-size" type="range" min="8" max="80" value="${el.fontSize || 14}" 
                   class="flex-1 accent-amber-500 cursor-pointer" />
            <button id="ins-fs-inc" class="w-7 h-7 rounded bg-zinc-950 border border-zinc-700 hover:bg-zinc-800 text-zinc-200 font-bold flex items-center justify-center transition">+</button>
          </div>
        </div>

        <!-- Luxury Quick Font Chips -->
        <div>
          <label class="block text-zinc-400 mb-1 font-medium">European Luxury Fonts:</label>
          <div class="grid grid-cols-3 gap-1 mb-1.5">
            ${luxuryFonts.map(f => `
              <button class="quick-font-btn px-1.5 py-1 rounded text-[10px] truncate border ${el.fontFamily === f.family ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold' : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'}" data-font="${f.family}">
                ${f.name}
              </button>
            `).join('')}
          </div>
          <select id="ins-font-family" class="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-2.5 py-1.5 text-zinc-200 text-xs focus:outline-none focus:border-amber-500">
            ${LUXURY_FONTS.map(f => `
              <option value="${f.family}" ${el.fontFamily === f.family ? 'selected' : ''}>
                ${f.name} (${f.category})
              </option>
            `).join('')}
          </select>
        </div>

        <!-- Gold Foil Pressed Toggle -->
        <div class="p-2.5 rounded-lg bg-zinc-950 border border-amber-500/30 flex items-center justify-between">
          <div>
            <span class="text-xs font-serif font-bold text-amber-300 block flex items-center gap-1">
              <span>✨ Gold Foil Pressed</span>
            </span>
            <span class="text-[10px] text-zinc-500">Simulate metallic gold leaf shimmer</span>
          </div>
          <input type="checkbox" id="ins-foil-check" ${el.isFoil ? 'checked' : ''} 
                 class="w-4 h-4 accent-amber-500 cursor-pointer" />
        </div>

        <!-- Color Quick Swatches & Color Picker -->
        <div>
          <label class="block text-zinc-400 mb-1 font-medium">Palette Swatches:</label>
          <div class="flex items-center gap-1.5 mb-2 bg-zinc-950 p-1.5 rounded-lg border border-zinc-800">
            ${luxuryColors.map(c => `
              <button class="ins-swatch-btn w-5 h-5 rounded-full transition hover:scale-110 shrink-0" 
                      style="background-color: ${c.hex}; ${el.color === c.hex ? 'ring-2 ring-amber-400 ring-offset-1 ring-offset-zinc-950' : 'border: 1px solid rgba(255,255,255,0.2)'}" 
                      data-hex="${c.hex}" title="${c.name}">
              </button>
            `).join('')}
            <div class="h-4 w-px bg-zinc-800 mx-1"></div>
            <input id="ins-color-picker" type="color" value="${el.color || '#2C2825'}" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" title="Custom Hex Color" />
          </div>
        </div>

        <!-- Font Weight & Alignment -->
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-zinc-400 mb-1 font-medium">Font Weight:</label>
            <select id="ins-font-weight" class="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-2 py-1.5 text-zinc-200 text-xs">
              <option value="300" ${el.fontWeight === '300' ? 'selected' : ''}>Light (300)</option>
              <option value="400" ${el.fontWeight === '400' || !el.fontWeight ? 'selected' : ''}>Regular (400)</option>
              <option value="600" ${el.fontWeight === '600' ? 'selected' : ''}>Semi-Bold (600)</option>
              <option value="700" ${el.fontWeight === '700' ? 'selected' : ''}>Bold (700)</option>
              <option value="900" ${el.fontWeight === '900' ? 'selected' : ''}>Black (900)</option>
            </select>
          </div>
          <div>
            <label class="block text-zinc-400 mb-1 font-medium">Alignment:</label>
            <div class="flex gap-1">
              <button id="align-left" class="flex-1 py-1.5 rounded bg-zinc-950 border ${el.textAlign === 'left' ? 'border-amber-500 text-amber-300 font-bold' : 'border-zinc-700 hover:bg-zinc-800 text-zinc-400'} text-center transition">L</button>
              <button id="align-center" class="flex-1 py-1.5 rounded bg-zinc-950 border ${el.textAlign === 'center' || !el.textAlign ? 'border-amber-500 text-amber-300 font-bold' : 'border-zinc-700 hover:bg-zinc-800 text-zinc-400'} text-center transition">C</button>
              <button id="align-right" class="flex-1 py-1.5 rounded bg-zinc-950 border ${el.textAlign === 'right' ? 'border-amber-500 text-amber-300 font-bold' : 'border-zinc-700 hover:bg-zinc-800 text-zinc-400'} text-center transition">R</button>
            </div>
          </div>
        </div>

        <!-- Letter Spacing (Kerning) -->
        <div>
          <label class="block text-zinc-400 mb-1 font-medium">Letter Spacing (${el.letterSpacing || 0}px):</label>
          <input id="ins-letter-spacing" type="range" min="0" max="12" step="0.5" value="${el.letterSpacing || 0}" 
                 class="w-full accent-amber-500 cursor-pointer" />
        </div>

        <!-- Layer Ordering -->
        <div class="pt-2 border-t border-zinc-800 flex gap-2">
          <button id="ins-bring-front" class="flex-1 py-1.5 rounded bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-zinc-300 text-[11px] transition">
            Bring Forward
          </button>
          <button id="ins-send-back" class="flex-1 py-1.5 rounded bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-zinc-300 text-[11px] transition">
            Send Backward
          </button>
        </div>
      </div>
    `;

    // Event bindings
    this.bindPositionControls(el);

    document.getElementById('ins-back-btn')?.addEventListener('click', () => {
      this.editor.selectElement(null);
    });

    document.getElementById('ins-edit-on-card')?.addEventListener('click', () => {
      const node = this.editor.getCanvasElementNode(el.id);
      if (node) this.editor.startInlineEdit(el, node);
    });

    document.getElementById('ins-text-content')?.addEventListener('input', (e) => {
      this.editor.updateElement(el.id, { content: e.target.value }, { saveState: true, updateInspector: false });
      const dockTa = document.getElementById('dock-text-content');
      if (dockTa && document.activeElement !== dockTa) dockTa.value = e.target.value;
    });

    // Prefer focusing the prominent dock; keep side panel ready
    requestAnimationFrame(() => {
      const dockTa = document.getElementById('dock-text-content');
      const ta = dockTa || document.getElementById('ins-text-content');
      if (ta && document.activeElement !== ta && document.activeElement?.id !== 'dock-text-content') {
        // Dock already auto-focuses; only focus side panel if dock missing
        if (!dockTa) {
          ta.focus();
          ta.setSelectionRange(ta.value.length, ta.value.length);
        }
      }
    });

    // Font size controls
    const fsSlider = document.getElementById('ins-font-size');
    const fsValDisplay = document.getElementById('ins-fs-val');
    fsSlider?.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      if (fsValDisplay) fsValDisplay.textContent = `${val}px`;
      this.editor.updateElement(el.id, { fontSize: val }, { saveState: true, updateInspector: false });
    });

    document.getElementById('ins-fs-dec')?.addEventListener('click', () => {
      const cur = el.fontSize || 14;
      const next = Math.max(8, cur - 1);
      if (fsSlider) fsSlider.value = next;
      if (fsValDisplay) fsValDisplay.textContent = `${next}px`;
      this.editor.updateElement(el.id, { fontSize: next }, { saveState: true, updateInspector: false });
    });

    document.getElementById('ins-fs-inc')?.addEventListener('click', () => {
      const cur = el.fontSize || 14;
      const next = Math.min(80, cur + 1);
      if (fsSlider) fsSlider.value = next;
      if (fsValDisplay) fsValDisplay.textContent = `${next}px`;
      this.editor.updateElement(el.id, { fontSize: next }, { saveState: true, updateInspector: false });
    });

    // Quick font chips
    container.querySelectorAll('.quick-font-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const font = btn.getAttribute('data-font');
        this.editor.updateElement(el.id, { fontFamily: font }, { updateInspector: true });
      });
    });

    document.getElementById('ins-font-family')?.addEventListener('change', (e) => {
      this.editor.updateElement(el.id, { fontFamily: e.target.value }, { updateInspector: true });
    });

    document.getElementById('ins-font-weight')?.addEventListener('change', (e) => {
      this.editor.updateElement(el.id, { fontWeight: e.target.value });
    });

    document.getElementById('ins-letter-spacing')?.addEventListener('input', (e) => {
      this.editor.updateElement(el.id, { letterSpacing: parseFloat(e.target.value) });
    });

    document.getElementById('ins-foil-check')?.addEventListener('change', (e) => {
      this.editor.updateElement(el.id, { isFoil: e.target.checked });
    });

    // Swatches
    container.querySelectorAll('.ins-swatch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const hex = btn.getAttribute('data-hex');
        this.editor.updateElement(el.id, { color: hex });
        const picker = document.getElementById('ins-color-picker');
        if (picker) picker.value = hex;
        const foilCheck = document.getElementById('ins-foil-check');
        if (foilCheck) foilCheck.checked = false;
      });
    });

    document.getElementById('ins-color-picker')?.addEventListener('input', (e) => {
      this.editor.updateElement(el.id, { color: e.target.value }, { saveState: true, updateInspector: false });
      const foilCheck = document.getElementById('ins-foil-check');
      if (foilCheck) foilCheck.checked = false;
    });

    document.getElementById('align-left')?.addEventListener('click', () => this.editor.updateElement(el.id, { textAlign: 'left' }));
    document.getElementById('align-center')?.addEventListener('click', () => this.editor.updateElement(el.id, { textAlign: 'center' }));
    document.getElementById('align-right')?.addEventListener('click', () => this.editor.updateElement(el.id, { textAlign: 'right' }));
    document.getElementById('ins-dup-btn')?.addEventListener('click', () => this.editor.duplicateElement(el.id));
    document.getElementById('ins-del-btn')?.addEventListener('click', () => this.editor.deleteElement(el.id));
    document.getElementById('ins-bring-front')?.addEventListener('click', () => this.editor.bringForward(el.id));
    document.getElementById('ins-send-back')?.addEventListener('click', () => this.editor.sendBackward(el.id));
  }

  renderSVGInspector(container, el) {
    container.innerHTML = `
      <div class="space-y-4 text-xs">
        <!-- Back to Card Details Button -->
        <button id="ins-back-btn" class="w-full py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-serif flex items-center justify-center gap-1.5 transition shadow-sm">
          <svg class="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Done • Back to Card Overview</span>
        </button>

        <div class="flex items-center justify-between pb-2 border-b border-zinc-800">
          <span class="font-serif font-bold text-amber-400 uppercase tracking-wider">Graphic Element</span>
          <button id="ins-del-btn" class="p-1 rounded bg-red-950/60 text-red-400 border border-red-800/60">
            Delete
          </button>
        </div>

        <div>
          <label class="block text-zinc-400 mb-1 font-medium">Color Tint:</label>
          <input id="ins-svg-color" type="color" value="${el.color || '#333333'}" class="w-8 h-8 rounded bg-transparent cursor-pointer" />
        </div>

        <div>
          <label class="block text-zinc-400 mb-1 font-medium">Opacity (${Math.round((el.opacity !== undefined ? el.opacity : 1) * 100)}%):</label>
          <input id="ins-svg-opacity" type="range" min="0.1" max="1" step="0.05" value="${el.opacity !== undefined ? el.opacity : 1}" 
                 class="w-full accent-amber-500" />
        </div>

        <div>
          <label class="block text-zinc-400 mb-1 font-medium">Rotation (${el.rotation || 0}°):</label>
          <input id="ins-svg-rotation" type="range" min="0" max="360" step="15" value="${el.rotation || 0}" 
                 class="w-full accent-amber-500" />
        </div>

        <!-- Position & Alignment Control Panel -->
        ${this.renderPositionControlsHTML(el)}

        <div class="pt-2 border-t border-zinc-800 flex gap-2">
          <button id="ins-bring-front" class="flex-1 py-1.5 rounded bg-zinc-900 border border-zinc-700 text-[11px]">Bring Forward</button>
          <button id="ins-send-back" class="flex-1 py-1.5 rounded bg-zinc-900 border border-zinc-700 text-[11px]">Send Backward</button>
        </div>
      </div>
    `;

    this.bindPositionControls(el);

    document.getElementById('ins-back-btn')?.addEventListener('click', () => {
      this.editor.selectElement(null);
    });
    document.getElementById('ins-svg-color')?.addEventListener('input', (e) => {
      this.editor.updateElement(el.id, { color: e.target.value });
    });
    document.getElementById('ins-svg-opacity')?.addEventListener('input', (e) => {
      this.editor.updateElement(el.id, { opacity: parseFloat(e.target.value) });
    });
    document.getElementById('ins-svg-rotation')?.addEventListener('input', (e) => {
      this.editor.updateElement(el.id, { rotation: parseInt(e.target.value, 10) });
    });
    document.getElementById('ins-del-btn')?.addEventListener('click', () => this.editor.deleteElement(el.id));
    document.getElementById('ins-bring-front')?.addEventListener('click', () => this.editor.bringForward(el.id));
    document.getElementById('ins-send-back')?.addEventListener('click', () => this.editor.sendBackward(el.id));
  }

  renderWaxSealInspector(container, el) {
    container.innerHTML = `
      <div class="space-y-4 text-xs">
        <!-- Back to Card Details Button -->
        <button id="ins-back-btn" class="w-full py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-serif flex items-center justify-center gap-1.5 transition shadow-sm">
          <svg class="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Done • Back to Card Overview</span>
        </button>

        <div class="flex items-center justify-between pb-2 border-b border-zinc-800">
          <span class="font-serif font-bold text-amber-400 uppercase tracking-wider">Wax Seal Crest</span>
          <button id="ins-del-btn" class="p-1 rounded bg-red-950/60 text-red-400 border border-red-800/60">Delete</button>
        </div>
        <div>
          <label class="block text-zinc-400 mb-2 font-medium">Seal Motif Style:</label>
          <div class="grid grid-cols-2 gap-2">
            ${ASSET_LIBRARY.waxSeals.map(seal => `
              <button class="seal-switch-btn p-2 rounded bg-zinc-900 border ${el.assetId === seal.id ? 'border-amber-500' : 'border-zinc-800'} text-center" data-sid="${seal.id}">
                <span class="text-[10px] text-zinc-300 block truncate">${seal.name.split(' ')[0]}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Position & Alignment Control Panel -->
        ${this.renderPositionControlsHTML(el)}
      </div>
    `;

    this.bindPositionControls(el);

    document.getElementById('ins-back-btn')?.addEventListener('click', () => {
      this.editor.selectElement(null);
    });
    container.querySelectorAll('.seal-switch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.editor.updateElement(el.id, { assetId: btn.getAttribute('data-sid') });
        const updated = this.editor.getSelectedElement() || el;
        this.renderWaxSealInspector(container, updated);
      });
    });
    document.getElementById('ins-del-btn')?.addEventListener('click', () => this.editor.deleteElement(el.id));
  }

  renderQRInspector(container, el) {
    container.innerHTML = `
      <div class="space-y-4 text-xs">
        <!-- Back to Card Details Button -->
        <button id="ins-back-btn" class="w-full py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-serif flex items-center justify-center gap-1.5 transition shadow-sm">
          <svg class="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Done • Back to Card Overview</span>
        </button>

        <div class="flex items-center justify-between pb-2 border-b border-zinc-800">
          <span class="font-serif font-bold text-amber-400 uppercase tracking-wider">RSVP QR Code</span>
          <button id="ins-del-btn" class="p-1 rounded bg-red-950/60 text-red-400 border border-red-800/60">Delete</button>
        </div>

        <div>
          <label class="block text-zinc-400 mb-1 font-medium">Destination URL:</label>
          <input id="ins-qr-url" type="url" value="${el.qrValue || ''}" 
                 class="w-full bg-zinc-950 border border-zinc-700 rounded p-2 text-zinc-200 text-xs focus:outline-none focus:border-amber-500" />
        </div>

        <!-- Position & Alignment Control Panel -->
        ${this.renderPositionControlsHTML(el)}

        <div class="p-3 bg-zinc-900/60 rounded border border-zinc-800 text-[11px] text-zinc-400">
          Point your phone camera at the card on screen to test scan this live QR code!
        </div>
      </div>
    `;

    this.bindPositionControls(el);

    document.getElementById('ins-back-btn')?.addEventListener('click', () => {
      this.editor.selectElement(null);
    });
    document.getElementById('ins-qr-url')?.addEventListener('input', (e) => {
      this.editor.updateElement(el.id, { qrValue: e.target.value });
    });
    document.getElementById('ins-del-btn')?.addEventListener('click', () => this.editor.deleteElement(el.id));
  }

  renderImageInspector(container, el) {
    container.innerHTML = `
      <div class="space-y-4 text-xs">
        <!-- Back to Card Details Button -->
        <button id="ins-back-btn" class="w-full py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-serif flex items-center justify-center gap-1.5 transition shadow-sm">
          <svg class="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Done • Back to Card Overview</span>
        </button>

        <div class="flex items-center justify-between pb-2 border-b border-zinc-800">
          <span class="font-serif font-bold text-amber-400 uppercase tracking-wider">Photo</span>
          <button id="ins-del-btn" class="p-1 rounded bg-red-950/60 text-red-400 border border-red-800/60">Delete</button>
        </div>

        <!-- Replace / Upload Custom Photo — primary action -->
        <div id="ins-photo-replace-box" class="p-3.5 bg-amber-500/15 rounded-xl border-2 border-amber-500/50 space-y-2.5 shadow-lg">
          <div class="flex items-center gap-2 text-amber-300 font-serif font-bold text-sm">
            <svg class="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Replace This Photo</span>
          </div>
          <div class="w-full h-28 rounded-lg overflow-hidden border border-zinc-700 bg-zinc-950">
            <img src="${this.editor.getEffectiveBg(el.src) || el.src || ''}" alt="Current photo" class="w-full h-full object-cover" />
          </div>
          <p class="text-[10px] text-zinc-400 leading-tight">
            Upload your couple portrait or venue photo. Click the button below, or click the photo again on the card.
          </p>
          <label class="w-full py-3 px-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-zinc-950 font-serif font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 cursor-pointer text-center">
            <span>Choose / Upload Photo</span>
            <input id="ins-photo-file-input" type="file" accept="image/*" class="hidden" />
          </label>
        </div>

        <div>
          <label class="block text-zinc-400 mb-2 font-medium">Silhouette Mask:</label>
          <div class="grid grid-cols-2 gap-2">
            <button class="mask-opt-btn p-2 rounded bg-zinc-900 border ${el.mask === 'mask-arch' ? 'border-amber-500' : 'border-zinc-800'} text-center" data-mask="mask-arch">
              Arch Cutout
            </button>
            <button class="mask-opt-btn p-2 rounded bg-zinc-900 border ${el.mask === 'mask-oval' ? 'border-amber-500' : 'border-zinc-800'} text-center" data-mask="mask-oval">
              Oval Cameo
            </button>
            <button class="mask-opt-btn p-2 rounded bg-zinc-900 border ${el.mask === 'mask-scallop' ? 'border-amber-500' : 'border-zinc-800'} text-center" data-mask="mask-scallop">
              Scalloped Frame
            </button>
            <button class="mask-opt-btn p-2 rounded bg-zinc-900 border ${!el.mask || el.mask === 'rounded-sm' || el.mask === 'mask-rectangle' ? 'border-amber-500' : 'border-zinc-800'} text-center" data-mask="mask-rectangle">
              Classic Rectangle
            </button>
          </div>
        </div>

        <!-- Position & Alignment Control Panel -->
        ${this.renderPositionControlsHTML(el)}
      </div>
    `;

    this.bindPositionControls(el);

    document.getElementById('ins-back-btn')?.addEventListener('click', () => {
      this.editor.selectElement(null);
    });
    document.getElementById('ins-photo-file-input')?.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (loadEv) => {
          this.editor.updateElement(el.id, { src: loadEv.target.result });
          this.renderImageInspector(container, this.editor.getSelectedElement() || el);
        };
        reader.readAsDataURL(file);
      }
    });
    container.querySelectorAll('.mask-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.editor.updateElement(el.id, { mask: btn.getAttribute('data-mask') });
        this.renderImageInspector(container, this.editor.getSelectedElement() || el);
      });
    });
    document.getElementById('ins-del-btn')?.addEventListener('click', () => this.editor.deleteElement(el.id));

    requestAnimationFrame(() => {
      document.getElementById('ins-photo-replace-box')?.classList.add('edit-panel-pulse');
    });
  }
}

// Robust instant app initialization for zero-config file:// double-click & http://
function initInvitationApp() {
  if (!window.app) {
    try {
      window.app = new InvitationStudioApp();
    } catch (err) {
      console.error('Error starting Invitation Card Generator:', err);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initInvitationApp);
} else {
  initInvitationApp();
}

