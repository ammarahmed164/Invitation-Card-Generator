/**
 * Invitation Card Generator — Standalone Distribution Bundle
 * Self-contained bundle for zero-config execution via file:// protocol (double-click index.html)
 * and http:// servers (including Vercel static hosting).
 */

(function() {
  'use strict';


  // =========================================================================
  // MODULE: js/data/fonts.js
  // =========================================================================

  /**
   * Curated European Luxury Fonts Collection
   * Used for high-end wedding, soirée, baby shower & gala invitation typography
   */const LUXURY_FONTS = [
    {
      name: 'Cormorant Garamond',
      family: "'Cormorant Garamond', serif",
      category: 'Serif',
      weights: ['300', '400', '500', '600', '700'],
      description: 'Traditional European editorial & literary serif'
    },
    {
      name: 'Playfair Display',
      family: "'Playfair Display', serif",
      category: 'Serif',
      weights: ['400', '600', '700', '900'],
      description: 'High-contrast transitional serif, vogue style'
    },
    {
      name: 'Bodoni Moda',
      family: "'Bodoni Moda', serif",
      category: 'Serif',
      weights: ['400', '600', '700', '800'],
      description: 'Ultra-modern Italian luxury & fashion editorial'
    },
    {
      name: 'Cinzel',
      family: "'Cinzel', serif",
      category: 'Serif',
      weights: ['400', '600', '700'],
      description: 'Classical Roman proportions, royal academy'
    },
    {
      name: 'Prata',
      family: "'Prata', serif",
      category: 'Serif',
      weights: ['400'],
      description: 'Elegant tear-drop terminals, Parisian chic'
    },
    {
      name: 'Pinyon Script',
      family: "'Pinyon Script', cursive",
      category: 'Script',
      weights: ['400'],
      description: 'Romantic aristocratic vintage calligraphy'
    },
    {
      name: 'Great Vibes',
      family: "'Great Vibes', cursive",
      category: 'Script',
      weights: ['400'],
      description: 'Fluid flowing calligraphy script for bride & groom'
    },
    {
      name: 'Alex Brush',
      family: "'Alex Brush', cursive",
      category: 'Script',
      weights: ['400'],
      description: 'Soft, delicate handwritten luxury brush'
    },
    {
      name: 'Italianno',
      family: "'Italianno', cursive",
      category: 'Script',
      weights: ['400'],
      description: 'Classic Tuscan cursive calligraphy'
    },
    {
      name: 'MonteCarlo',
      family: "'MonteCarlo', cursive",
      category: 'Script',
      weights: ['400'],
      description: 'Monaco French Riviera cursive luxury'
    },
    {
      name: 'Montserrat',
      family: "'Montserrat', sans-serif",
      category: 'Sans',
      weights: ['300', '400', '500', '600'],
      description: 'Clean geometric tracking for modern details'
    },
    {
      name: 'Plus Jakarta Sans',
      family: "'Plus Jakarta Sans', sans-serif",
      category: 'Sans',
      weights: ['400', '500', '600', '700'],
      description: 'Contemporary European sans-serif'
    }
  ];const FONT_PAIRINGS = [
    {
      name: 'Parisian Editorial',
      heading: 'Bodoni Moda',
      subheading: 'Montserrat',
      script: 'Pinyon Script'
    },
    {
      name: 'Tuscan Estate',
      heading: 'Cormorant Garamond',
      subheading: 'Montserrat',
      script: 'Italianno'
    },
    {
      name: 'English Wildflower',
      heading: 'Playfair Display',
      subheading: 'Plus Jakarta Sans',
      script: 'Great Vibes'
    },
    {
      name: 'Black Tie Gala',
      heading: 'Cinzel',
      subheading: 'Montserrat',
      script: 'Alex Brush'
    }
  ];
  
  

  // =========================================================================
  // MODULE: js/data/assets.js
  // =========================================================================

  /**
   * Vector Artwork, Luxury Badges, Frames & Wax Seals
   * Handcrafted SVG assets for European invitation card styling
   */const ASSET_LIBRARY = {
    // Wax Seals
    waxSeals: [
      {
        id: 'wax-monogram',
        name: 'Ornate Monogram Wax Seal',
        color: '#9b111e',
        type: 'wax-seal',
        html: `
          <div class="wax-seal wax-red">
            <span style="font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">M&C</span>
          </div>
        `
      },
      {
        id: 'wax-olive',
        name: 'Olive Branch Gold Seal',
        color: '#d4af37',
        type: 'wax-seal',
        html: `
          <div class="wax-seal wax-gold">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 16.5c-3 .5-5.5-1.5-6-4.5 2-.5 4.5.5 6 3 0 .5 0 1 0 1.5zm3.5-3c-1.5 2-4 2.5-6.5 1.5 1.5-2 4-2.5 6.5-1.5zm-1-4c-2.5.5-4.5-.5-5.5-3 2.5-.5 4.5.5 5.5 3z"/>
            </svg>
          </div>
        `
      },
      {
        id: 'wax-sage-rose',
        name: 'Botanical Rose Sage Seal',
        color: '#7a8b7b',
        type: 'wax-seal',
        html: `
          <div class="wax-seal wax-sage">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="12" cy="12" r="9"/>
              <path d="M12 7v10M8 10c2-1 4-1 4 2s2 3 4 2"/>
            </svg>
          </div>
        `
      },
      {
        id: 'wax-navy-crest',
        name: 'Royal Heritage Navy Seal',
        color: '#1f2d42',
        type: 'wax-seal',
        html: `
          <div class="wax-seal wax-navy">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 4.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5zm4 11.2c-1.2.8-2.6 1.3-4 1.3-1.4 0-2.8-.5-4-1.3v-1.2c0-1.8 3.6-2.8 5-2.8s5 1 5 2.8v1.2z"/>
            </svg>
          </div>
        `
      }
    ],
  
    // Botanicals & Florals
    botanicals: [
      {
        id: 'olive-wreath',
        name: 'Italian Olive Wreath',
        svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M50 85 C30 85 18 68 18 50 C18 32 30 15 50 15" />
          <path d="M50 85 C70 85 82 68 82 50 C82 32 70 15 50 15" />
          <path d="M22 65 C16 62 14 55 18 50" fill="currentColor" opacity="0.3"/>
          <path d="M78 65 C84 62 86 55 82 50" fill="currentColor" opacity="0.3"/>
          <path d="M25 35 C20 32 20 25 28 26" fill="currentColor" opacity="0.3"/>
          <path d="M75 35 C80 32 80 25 72 26" fill="currentColor" opacity="0.3"/>
          <circle cx="50" cy="85" r="2" fill="currentColor"/>
        </svg>`
      },
      {
        id: 'wildflower-corner',
        name: 'English Wildflower Spray',
        svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.2">
          <path d="M10 90 Q40 60 70 30 T90 10" />
          <circle cx="70" cy="30" r="5" fill="currentColor" opacity="0.2"/>
          <circle cx="85" cy="18" r="3" fill="currentColor" opacity="0.3"/>
          <path d="M45 55 C40 45 42 38 52 42 C48 52 45 55 45 55 Z" fill="currentColor" opacity="0.25"/>
          <path d="M25 75 C20 65 22 58 32 62 C28 72 25 75 25 75 Z" fill="currentColor" opacity="0.25"/>
          <circle cx="35" cy="65" r="3" fill="currentColor" opacity="0.4"/>
        </svg>`
      },
      {
        id: 'delicate-rose-stem',
        name: 'Vintage Single Rose',
        svg: `<svg viewBox="0 0 80 120" fill="none" stroke="currentColor" stroke-width="1.4">
          <path d="M40 30 C30 20 50 10 40 5 C30 10 50 20 40 30 Z" fill="currentColor" opacity="0.2"/>
          <path d="M40 30 C32 35 48 35 40 42" />
          <path d="M40 42 L40 110" />
          <path d="M40 60 Q55 55 60 48 Q55 65 40 68" fill="currentColor" opacity="0.2"/>
          <path d="M40 80 Q25 75 20 68 Q25 85 40 88" fill="currentColor" opacity="0.2"/>
        </svg>`
      },
      {
        id: 'olive-sprig',
        name: 'Tuscan Olive Sprig',
        svg: `<svg viewBox="0 0 120 60" fill="none" stroke="currentColor" stroke-width="1.3">
          <path d="M10 30 Q60 25 110 30" />
          <ellipse cx="35" cy="22" rx="12" ry="5" transform="rotate(-20 35 22)" fill="currentColor" opacity="0.25" />
          <ellipse cx="55" cy="38" rx="12" ry="5" transform="rotate(20 55 38)" fill="currentColor" opacity="0.25" />
          <ellipse cx="75" cy="20" rx="12" ry="5" transform="rotate(-15 75 20)" fill="currentColor" opacity="0.25" />
          <ellipse cx="95" cy="36" rx="10" ry="4" transform="rotate(25 95 36)" fill="currentColor" opacity="0.25" />
          <circle cx="65" cy="28" r="3" fill="currentColor"/>
        </svg>`
      }
    ],
  
    // Frames & Borders
    frames: [
      {
        id: 'arch-frame',
        name: 'Nordic Architectural Arch',
        svg: `<svg viewBox="0 0 200 300" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M20 280 L20 100 A80 80 0 0 1 180 100 L180 280 Z"/>
        </svg>`
      },
      {
        id: 'double-hairline',
        name: 'Parisian Double Hairline',
        svg: `<svg viewBox="0 0 200 280" fill="none" stroke="currentColor">
          <rect x="15" y="15" width="170" height="250" stroke-width="1.2"/>
          <rect x="20" y="20" width="160" height="240" stroke-width="0.6"/>
        </svg>`
      },
      {
        id: 'ivory-text-plaque',
        name: 'Plain Ivory Text Plaque',
        svg: `<svg viewBox="0 0 240 60" fill="currentColor">
          <rect x="1" y="1" width="238" height="58" rx="3" opacity="0.98"/>
          <rect x="5" y="5" width="230" height="50" rx="2" fill="none" stroke="#D8D0C5" stroke-width="0.8"/>
        </svg>`
      },
      {
        id: 'art-deco-frame',
        name: 'Speakeasy 1920s Stepped Border',
        svg: `<svg viewBox="0 0 200 280" fill="none" stroke="currentColor" stroke-width="1">
          <rect x="15" y="15" width="170" height="250"/>
          <path d="M15 35 H35 V15 M185 35 H165 V15 M15 245 H35 V265 M185 245 H165 V265" stroke-width="1.5"/>
          <polygon points="100,10 106,20 94,20" fill="currentColor"/>
          <polygon points="100,270 106,260 94,260" fill="currentColor"/>
        </svg>`
      },
      {
        id: 'scalloped-border',
        name: 'Vintage Scalloped Border',
        svg: `<svg viewBox="0 0 200 280" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 4">
          <rect x="12" y="12" width="176" height="256" rx="16"/>
        </svg>`
      }
    ],
  
    // Icons & Celebrations
    celebrations: [
      {
        id: 'martini-glass',
        name: 'French Riviera Martini with Olive',
        svg: `<svg viewBox="0 0 60 80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
          <path d="M10 15 L30 42 L50 15 Z" />
          <line x1="30" y1="42" x2="30" y2="70" />
          <line x1="20" y1="70" x2="40" y2="70" />
          <line x1="16" y1="12" x2="38" y2="38" stroke-width="1.2" />
          <circle cx="28" cy="26" r="3.5" fill="currentColor" opacity="0.3"/>
        </svg>`
      },
      {
        id: 'champagne-coupe',
        name: 'Vintage Champagne Coupe',
        svg: `<svg viewBox="0 0 60 80" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 25 Q30 45 48 25 Q30 18 12 25 Z" />
          <line x1="30" y1="36" x2="30" y2="70" />
          <line x1="18" y1="70" x2="42" y2="70" />
          <circle cx="27" cy="22" r="1.5" fill="currentColor"/>
          <circle cx="33" cy="20" r="1.5" fill="currentColor"/>
        </svg>`
      },
      {
        id: 'silk-bow',
        name: 'Dainty Silk Ribbon Bow',
        svg: `<svg viewBox="0 0 80 50" fill="none" stroke="currentColor" stroke-width="1.4">
          <path d="M40 22 C30 10 15 15 22 25 C28 32 36 24 40 22 Z" fill="currentColor" opacity="0.2"/>
          <path d="M40 22 C50 10 65 15 58 25 C52 32 44 24 40 22 Z" fill="currentColor" opacity="0.2"/>
          <circle cx="40" cy="22" r="3" fill="currentColor"/>
          <path d="M38 25 Q32 38 24 44" />
          <path d="M42 25 Q48 38 56 44" />
        </svg>`
      },
      {
        id: 'disco-ball',
        name: 'Studio 74 Disco Mirror Ball',
        svg: `<svg viewBox="0 0 70 90" fill="none" stroke="currentColor" stroke-width="1.2">
          <line x1="35" y1="5" x2="35" y2="25" />
          <circle cx="35" cy="55" r="30" />
          <ellipse cx="35" cy="55" rx="20" ry="30" stroke-dasharray="2 3"/>
          <line x1="5" y1="55" x2="65" y2="55" stroke-dasharray="2 3"/>
          <line x1="10" y1="42" x2="60" y2="42" stroke-dasharray="2 3"/>
          <line x1="10" y1="68" x2="60" y2="68" stroke-dasharray="2 3"/>
          <path d="M15 20 L25 15 L20 30" stroke-width="1.5"/>
        </svg>`
      },
      {
        id: 'dinner-table-setting',
        name: 'Al Fresco Table Setting',
        svg: `<svg viewBox="0 0 90 50" fill="none" stroke="currentColor" stroke-width="1.4">
          <circle cx="45" cy="25" r="16" />
          <circle cx="45" cy="25" r="11" stroke-dasharray="2 2"/>
          <line x1="22" y1="12" x2="22" y2="38" />
          <line x1="68" y1="12" x2="68" y2="38" />
          <path d="M22 12 Q20 20 22 22 M22 12 Q24 20 22 22" />
          <path d="M68 12 Q72 16 68 22" />
        </svg>`
      },
      {
        id: 'celestial-stars',
        name: 'Constellation & Moon Phases',
        svg: `<svg viewBox="0 0 100 60" fill="none" stroke="currentColor" stroke-width="1.2">
          <circle cx="50" cy="30" r="12" fill="currentColor" opacity="0.2"/>
          <path d="M50 18 A 12 12 0 0 1 50 42 A 8 12 0 0 0 50 18" fill="currentColor"/>
          <polygon points="25,20 27,25 32,25 28,28 30,33 25,30 20,33 22,28 18,25 23,25" fill="currentColor"/>
          <polygon points="75,35 76.5,39 80,39 77,41.5 78.5,45 75,43 71.5,45 73,41.5 70,39 73.5,39" fill="currentColor"/>
          <circle cx="35" cy="45" r="1.5" fill="currentColor"/>
          <circle cx="65" cy="15" r="1.5" fill="currentColor"/>
        </svg>`
      },
      {
        id: 'christening-cross',
        name: 'Sacred Minimalist Cross',
        svg: `<svg viewBox="0 0 60 80" fill="none" stroke="currentColor" stroke-width="1.5">
          <line x1="30" y1="10" x2="30" y2="70" />
          <line x1="15" y1="28" x2="45" y2="28" />
          <circle cx="30" cy="28" r="2.5" fill="currentColor"/>
        </svg>`
      },
      {
        id: 'academic-crest',
        name: 'Oxford Academic Honor Crest',
        svg: `<svg viewBox="0 0 80 90" fill="none" stroke="currentColor" stroke-width="1.4">
          <path d="M40 10 L68 22 V50 C68 68 40 80 40 80 C40 80 12 68 12 50 V22 Z" />
          <path d="M40 20 L40 70 M22 45 H58" stroke-width="0.8"/>
          <circle cx="40" cy="35" r="5" fill="currentColor" opacity="0.2"/>
        </svg>`
      },
      {
        id: 'bismillah-crest',
        name: 'Sacred Bismillah Calligraphy Crest',
        svg: `<svg viewBox="0 0 160 50" fill="currentColor">
          <path d="M25 32 C35 22 42 35 55 28 C65 20 75 36 85 24 C95 18 105 32 118 24 C128 20 138 32 145 28 C135 34 125 28 115 34 C100 32 90 38 80 32 C70 36 58 30 48 36 C38 34 30 38 25 32 Z"/>
          <circle cx="46" cy="18" r="2.2"/>
          <circle cx="78" cy="14" r="2.2"/>
          <circle cx="106" cy="15" r="2.2"/>
          <circle cx="132" cy="18" r="2.2"/>
        </svg>`
      },
      {
        id: 'flourish-divider',
        name: 'Imperial Gold Flourish Divider',
        svg: `<svg viewBox="0 0 120 30" fill="currentColor">
          <path d="M60 15 C52 8 42 8 36 13 C30 18 24 14 18 16 C26 19 32 13 38 19 C44 25 52 21 60 15 Z" />
          <path d="M60 15 C68 8 78 8 84 13 C90 18 96 14 102 16 C94 19 88 13 82 19 C76 25 68 21 60 15 Z" />
          <circle cx="60" cy="15" r="2.8" />
          <circle cx="48" cy="15" r="1.5" />
          <circle cx="72" cy="15" r="1.5" />
        </svg>`
      },
      {
        id: 'vertical-divider',
        name: 'Fine Column Divider Line',
        svg: `<svg viewBox="0 0 4 40" fill="currentColor">
          <rect x="1" y="2" width="1.5" height="36" rx="0.75" opacity="0.6"/>
        </svg>`
      }
    ],
  
    // Dividers & Flourishes
    dividers: [
      {
        id: 'divider-star',
        name: 'Classic Diamond Flourish',
        svg: `<svg viewBox="0 0 160 20" fill="none" stroke="currentColor" stroke-width="1">
          <line x1="10" y1="10" x2="68" y2="10" />
          <polygon points="80,5 85,10 80,15 75,10" fill="currentColor" />
          <line x1="92" y1="10" x2="150" y2="10" />
        </svg>`
      },
      {
        id: 'divider-wave',
        name: 'Subtle European Wave',
        svg: `<svg viewBox="0 0 160 20" fill="none" stroke="currentColor" stroke-width="1">
          <path d="M10 10 Q45 2 80 10 T150 10" />
        </svg>`
      },
      {
        id: 'divider-sapphire-line',
        name: 'Subtle Sapphire Hairline Accent',
        svg: `<svg viewBox="0 0 160 16" fill="none" stroke="currentColor">
          <line x1="15" y1="8" x2="68" y2="8" stroke-width="0.75" opacity="0.6"/>
          <polygon points="80,4 84,8 80,12 76,8" fill="currentColor" opacity="0.85"/>
          <circle cx="70" cy="8" r="1.2" fill="currentColor" opacity="0.6"/>
          <circle cx="90" cy="8" r="1.2" fill="currentColor" opacity="0.6"/>
          <line x1="92" y1="8" x2="145" y2="8" stroke-width="0.75" opacity="0.6"/>
        </svg>`
      },
      {
        id: 'divider-sapphire-dot',
        name: 'Delicate Triple Pearl Divider',
        svg: `<svg viewBox="0 0 120 12" fill="currentColor">
          <line x1="10" y1="6" x2="48" y2="6" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
          <circle cx="53" cy="6" r="1.2" opacity="0.6"/>
          <circle cx="60" cy="6" r="2.2" opacity="0.85"/>
          <circle cx="67" cy="6" r="1.2" opacity="0.6"/>
          <line x1="72" y1="6" x2="110" y2="6" stroke="currentColor" stroke-width="0.6" opacity="0.5"/>
        </svg>`
      }
    ],
  
    // Royal Monograms & Crests
    monograms: [
      {
        id: 'monogram-octagonal',
        name: 'Octagonal Gold Monogram Crest',
        svg: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <!-- Octagonal outer filigree -->
          <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" stroke-width="1.8" />
          <polygon points="32,9 68,9 91,32 91,68 68,91 32,91 9,68 9,32" stroke-width="0.8" opacity="0.6" />
          <line x1="50" y1="25" x2="50" y2="75" stroke-width="1" />
          <text x="32" y="58" font-family="'Cinzel', serif" font-size="22" font-weight="600" fill="currentColor" text-anchor="middle">Z</text>
          <text x="68" y="58" font-family="'Cinzel', serif" font-size="22" font-weight="600" fill="currentColor" text-anchor="middle">H</text>
        </svg>`
      },
      {
        id: 'lantern-gold',
        name: 'Hanging Royal Golden Lantern',
        svg: `<svg viewBox="0 0 60 120" fill="none" stroke="currentColor" stroke-width="1.2">
          <line x1="30" y1="0" x2="30" y2="35" stroke-width="1.5" />
          <circle cx="30" cy="35" r="4" fill="currentColor" />
          <!-- Lantern cap -->
          <path d="M15 50 Q30 38 45 50 Z" fill="currentColor" opacity="0.4" />
          <!-- Lantern cage -->
          <path d="M15 50 L18 90 L42 90 L45 50 Z" />
          <line x1="24" y1="50" x2="24" y2="90" opacity="0.5" />
          <line x1="36" y1="50" x2="36" y2="90" opacity="0.5" />
          <!-- Flame glow -->
          <ellipse cx="30" cy="72" rx="4" ry="7" fill="#F3E5AB" />
          <!-- Bottom base & finial -->
          <path d="M18 90 L30 105 L42 90 Z" fill="currentColor" opacity="0.4" />
          <circle cx="30" cy="110" r="2.5" fill="currentColor" />
        </svg>`
      },
      {
        id: 'tassel-gold',
        name: 'Hanging Gold Silk Tassel',
        svg: `<svg viewBox="0 0 40 120" fill="none" stroke="currentColor">
          <line x1="20" y1="0" x2="20" y2="40" stroke-width="1.5" />
          <circle cx="20" cy="40" r="3" fill="currentColor" />
          <path d="M12 48 Q20 44 28 48 L25 56 Q20 54 15 56 Z" fill="currentColor" />
          <path d="M14 56 L10 105 Q20 112 30 105 L26 56 Z" fill="currentColor" opacity="0.35" />
          <line x1="16" y1="56" x2="14" y2="105" opacity="0.6" />
          <line x1="20" y1="56" x2="20" y2="108" opacity="0.8" />
          <line x1="24" y1="56" x2="26" y2="105" opacity="0.6" />
        </svg>`
      },
      {
        id: 'hanging-gift-tag',
        name: 'Hanging Tag "Forever Looks Good On Us"',
        svg: `<svg viewBox="0 0 90 140" fill="none" stroke="currentColor">
          <!-- Cord -->
          <path d="M45 0 Q55 20 45 35" stroke-width="1.5" />
          <!-- Tag body -->
          <polygon points="30,35 60,35 75,55 75,130 15,130 15,55" fill="#FAF7F2" stroke="#B8A48A" stroke-width="1.2" />
          <circle cx="45" cy="48" r="4" fill="#6B5B49" />
          <!-- Message -->
          <text x="45" y="78" font-family="'Cormorant Garamond', serif" font-style="italic" font-size="11" font-weight="600" fill="#6B2D38" text-anchor="middle">Forever</text>
          <text x="45" y="93" font-family="'Cormorant Garamond', serif" font-style="italic" font-size="11" font-weight="600" fill="#6B2D38" text-anchor="middle">Looks</text>
          <text x="45" y="108" font-family="'Cormorant Garamond', serif" font-style="italic" font-size="11" font-weight="600" fill="#6B2D38" text-anchor="middle">Good On Us</text>
          <path d="M45 120 C42 116 38 116 38 119 C38 122 45 126 45 126 C45 126 52 122 52 119 C52 116 48 116 45 120 Z" fill="#6B2D38" />
        </svg>`
      },
      {
        id: 'event-icons-row',
        name: 'Event Icons: Dinner • Music • Celebration • Love',
        svg: `<svg viewBox="0 0 320 60" fill="none" stroke="currentColor">
          <!-- Dinner -->
          <g transform="translate(15, 0)">
            <circle cx="25" cy="20" r="14" stroke-width="1.5" />
            <circle cx="25" cy="20" r="10" stroke-width="0.8" stroke-dasharray="2 2" />
            <path d="M7 10 V30 M4 10 V18 Q7 20 7 24 M10 10 V18 Q7 20 7 24" stroke-width="1.2" />
            <path d="M43 10 V30 Q47 18 43 10" stroke-width="1.2" />
            <text x="25" y="48" font-family="'Montserrat', sans-serif" font-size="7.5" font-weight="600" letter-spacing="2" fill="currentColor" text-anchor="middle">DINNER</text>
          </g>
          <!-- Music -->
          <g transform="translate(95, 0)">
            <path d="M20 30 V12 L35 8 V26" stroke-width="1.5" />
            <line x1="20" y1="18" x2="35" y2="14" stroke-width="1.5" />
            <ellipse cx="16" cy="30" rx="5" ry="3.5" fill="currentColor" transform="rotate(-15 16 30)" />
            <ellipse cx="31" cy="26" rx="5" ry="3.5" fill="currentColor" transform="rotate(-15 31 26)" />
            <text x="25" y="48" font-family="'Montserrat', sans-serif" font-size="7.5" font-weight="600" letter-spacing="2" fill="currentColor" text-anchor="middle">MUSIC</text>
          </g>
          <!-- Celebration -->
          <g transform="translate(175, 0)">
            <path d="M18 10 L25 24 V34 M20 34 H30" stroke-width="1.2" />
            <path d="M34 10 L27 24" stroke-width="1.2" />
            <text x="25" y="48" font-family="'Montserrat', sans-serif" font-size="7.5" font-weight="600" letter-spacing="2" fill="currentColor" text-anchor="middle">CELEBRATION</text>
          </g>
          <!-- Love -->
          <g transform="translate(255, 0)">
            <path d="M25 14 C20 8 10 10 12 20 C14 26 25 32 25 32 C25 32 36 26 38 20 C40 10 30 8 25 14 Z" stroke-width="1.5" />
            <text x="25" y="48" font-family="'Montserrat', sans-serif" font-size="7.5" font-weight="600" letter-spacing="2" fill="currentColor" text-anchor="middle">LOVE</text>
          </g>
        </svg>`
      }
    ]
  };
  
  

  // =========================================================================
  // MODULE: js/data/templates.js
  // =========================================================================

  /**
   * Complete Luxury Template Suite (20+ Highly Distinct, Creative Designs Across 5 Sections)
   * Built to sell on Etsy as top-tier digital products with rich multi-layered artwork,
   * 3D architectural arches, hanging lanterns, silk bows, wax seals, and event icons.
   */function getEffectiveBg(bgPath) {
    if (!bgPath) return '';
    if (typeof window !== 'undefined' && window.BACKGROUND_BASE64_DATA && window.BACKGROUND_BASE64_DATA[bgPath]) {
      return window.BACKGROUND_BASE64_DATA[bgPath];
    }
    return bgPath;
  }const SECTIONS = [
    {
      id: 'wedding',
      name: 'Wedding & Destination Suites',
      icon: 'heart',
      tagline: 'Royal arches, hanging lanterns, Parisian Didot & celestial velvet',
      count: 5
    },
    {
      id: 'soiree',
      name: 'Milestone Birthdays & Soirées',
      icon: 'glass-water',
      tagline: 'French Riviera spritz clubs, 1920s speakeasies & old money birthdays',
      count: 4,
    },
    {
      id: 'baby-christening',
      name: 'Baby Shower & Christening',
      icon: 'sparkles',
      tagline: 'French Toile de Jouy gilded frames, Nordic woodland & silk bow cameos',
      count: 5
    },
    {
      id: 'engagement-party',
      name: 'Engagement Party',
      icon: 'sparkles',
      tagline: 'Embossed bridal frames, botanical gold wreaths, crimson arches & amber celebrations',
      count: 5
    },
    {
      id: 'bridal-shower',
      name: 'Bridal Shower & Bachelorette',
      icon: 'sparkles',
      tagline: 'Embossed ivory florals, charcoal silk bows, dusty blue peonies & Tuscan soirées',
      count: 5
    }
  ];const TEMPLATES = [
    // =========================================================================
    // SECTION 1: WEDDING & DESTINATION SUITES
    // =========================================================================
  
    // 1. Royal Emerald Arch & Hanging Lanterns (Directly matching user Image 2!)
    {
      id: 'royal-emerald-lantern-arch',
      title: 'Royal Emerald Arch & Hanging Lanterns',
      section: 'wedding',
      badge: 'Ultra Creative',
      style: 'Royal Filigree / Emerald Velvet',
      bgImage: 'assets/backgrounds/emerald_lantern_arch.jpg',
      bgColor: '#082017',
      accentColor: '#F3E5AB',
      tags: ['Emerald Velvet', 'Gold Filigree', 'Hanging Lanterns', 'White Peonies', 'Monogram Crest', 'Royal Wedding'],
      description: 'Opulent royal emerald velvet with 3D gold filigree Mughal scalloped arch, glowing hanging brass lanterns, cascading white peonies, and event icon row.',
      front: [
        {
          id: 'em-f-crest',
          type: 'svg',
          assetId: 'monogram-octagonal',
          x: 165, y: 55, width: 70, height: 70,
          color: '#F3E5AB',
          opacity: 0.95,
          zIndex: 3
        },
        {
          id: 'em-f-sub1',
          type: 'text',
          content: 'TOGETHER WITH THEIR FAMILIES',
          x: 60, y: 140, width: 280, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          fontWeight: '500',
          letterSpacing: 2.8,
          textAlign: 'center',
          color: '#F3E5AB',
          noWrap: true,
          zIndex: 3
        },
        {
          id: 'em-f-name1',
          type: 'text',
          content: 'Zainab',
          x: 60, y: 162, width: 280, height: 46,
          fontFamily: "'Great Vibes', cursive",
          fontSize: 44,
          fontWeight: '400',
          textAlign: 'center',
          color: '#FDFBF0',
          isFoil: true,
          noWrap: true,
          zIndex: 3
        },
        {
          id: 'em-f-and',
          type: 'text',
          content: '&',
          x: 60, y: 210, width: 280, height: 22,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 22,
          textAlign: 'center',
          color: '#D4AF37',
          zIndex: 3
        },
        {
          id: 'em-f-name2',
          type: 'text',
          content: 'Hamza',
          x: 60, y: 232, width: 280, height: 46,
          fontFamily: "'Great Vibes', cursive",
          fontSize: 44,
          fontWeight: '400',
          textAlign: 'center',
          color: '#FDFBF0',
          isFoil: true,
          noWrap: true,
          zIndex: 3
        },
        {
          id: 'em-f-sub2',
          type: 'text',
          content: 'INVITE YOU TO CELEBRATE THEIR WEDDING',
          x: 60, y: 284, width: 280, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7.8,
          fontWeight: '500',
          letterSpacing: 2.2,
          textAlign: 'center',
          color: '#F3E5AB',
          noWrap: true,
          zIndex: 3
        },
        {
          id: 'em-f-date',
          type: 'text',
          content: 'SATURDAY  ·  20  ·  DECEMBER 2026',
          x: 50, y: 310, width: 300, height: 22,
          fontFamily: "'Cinzel', serif",
          fontSize: 12.5,
          fontWeight: '600',
          letterSpacing: 2.5,
          textAlign: 'center',
          color: '#FFFFFF',
          isFoil: true,
          noWrap: true,
          zIndex: 3
        },
        {
          id: 'em-f-venue',
          type: 'text',
          content: 'THE GARDEN MARQUEE',
          x: 60, y: 340, width: 280, height: 20,
          fontFamily: "'Cinzel', serif",
          fontSize: 12,
          fontWeight: '600',
          letterSpacing: 2.2,
          textAlign: 'center',
          color: '#F3E5AB',
          noWrap: true,
          zIndex: 3
        },
        {
          id: 'em-f-loc',
          type: 'text',
          content: 'LAHORE  ·  SEVEN O\'CLOCK IN THE EVENING',
          x: 60, y: 364, width: 280, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7.5,
          fontWeight: '500',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#D1E0D7',
          noWrap: true,
          zIndex: 3
        },
        {
          id: 'em-f-icons',
          type: 'svg',
          assetId: 'event-icons-row',
          x: 65, y: 394, width: 270, height: 48,
          color: '#F3E5AB',
          opacity: 0.95,
          zIndex: 3
        },
        {
          id: 'em-f-footer',
          type: 'text',
          content: 'NEW CHAPTER  ·  FOREVER TOGETHER',
          x: 60, y: 450, width: 280, height: 16,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7.5,
          fontWeight: '600',
          letterSpacing: 2.5,
          textAlign: 'center',
          color: '#D4AF37',
          noWrap: true,
          zIndex: 3
        }
      ],
      back: [
        {
          id: 'em-b-qr',
          type: 'qr-code',
          qrValue: 'https://zainab-hamza.wedding/rsvp',
          x: 140, y: 180, width: 120, height: 120,
          zIndex: 2
        },
        {
          id: 'em-b-rsvp',
          type: 'text',
          content: 'ZAINAB & HAMZA\nRSVP: +92 300 1234567',
          x: 40, y: 324, width: 320, height: 52,
          fontFamily: "'Cinzel', serif",
          fontSize: 12,
          fontWeight: '600',
          letterSpacing: 2.5,
          lineHeight: 1.7,
          textAlign: 'center',
          color: '#F3E5AB',
          isFoil: true,
          zIndex: 3
        }
      ]
    },
  
    // 2. Mughal Scalloped Arch & Crimson Autumn Foliage (Directly matching user Image 1!)
    {
      id: 'mughal-burgundy-autumn-arch',
      title: 'Mughal Scalloped Arch & Crimson Foliage',
      section: 'wedding',
      badge: 'Trending Royal',
      style: 'Mughal Scalloped / Burgundy & Gold',
      bgImage: 'assets/backgrounds/mughal_burgundy_arch.jpg',
      bgColor: '#FAF3EB',
      accentColor: '#701323',
      tags: ['Mughal Arch', 'Burgundy', 'Gold Leaves', 'Silk Tassel', 'Watercolor', 'Royal Wedding'],
      description: 'Intricate golden Mughal arch with hanging silk tassel, deep crimson and shimmering gold autumn foliage, and royal Urdu/English calligraphy.',
      front: [
        {
          id: 'mu-f-name1',
          type: 'text',
          content: 'Zainab',
          x: 165, y: 136, width: 210, height: 42,
          fontFamily: "'Great Vibes', cursive",
          fontSize: 40,
          fontWeight: '400',
          textAlign: 'center',
          color: '#701323',
          noWrap: true,
          zIndex: 3
        },
        {
          id: 'mu-f-and',
          type: 'text',
          content: '&',
          x: 165, y: 178, width: 210, height: 20,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 20,
          textAlign: 'center',
          color: '#C79B4B',
          zIndex: 3
        },
        {
          id: 'mu-f-name2',
          type: 'text',
          content: 'Hamza',
          x: 165, y: 198, width: 210, height: 42,
          fontFamily: "'Great Vibes', cursive",
          fontSize: 40,
          fontWeight: '400',
          textAlign: 'center',
          color: '#701323',
          noWrap: true,
          zIndex: 3
        },
        {
          id: 'mu-f-sub2',
          type: 'text',
          content: 'REQUEST THE HONOUR OF YOUR PRESENCE\nAT THE CELEBRATION OF THEIR WEDDING',
          x: 165, y: 246, width: 210, height: 30,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 6.8,
          fontWeight: '500',
          lineHeight: 1.45,
          letterSpacing: 1.4,
          textAlign: 'center',
          color: '#6A564C',
          zIndex: 3
        },
        {
          id: 'mu-f-date',
          type: 'text',
          content: 'SUNDAY  ·  21 DEC 2026',
          x: 165, y: 288, width: 210, height: 22,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 14,
          fontWeight: '700',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#2C221D',
          noWrap: true,
          zIndex: 3
        },
        {
          id: 'mu-f-venue',
          type: 'text',
          content: 'FAISAL MOSQUE  ·  ISLAMABAD',
          x: 165, y: 316, width: 210, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7.5,
          fontWeight: '600',
          letterSpacing: 1.8,
          textAlign: 'center',
          color: '#701323',
          noWrap: true,
          zIndex: 3
        },
        {
          id: 'mu-f-time',
          type: 'text',
          content: 'SEVEN O\'CLOCK IN THE EVENING',
          x: 165, y: 338, width: 210, height: 16,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 6.8,
          letterSpacing: 1.5,
          textAlign: 'center',
          color: '#7A6B62',
          noWrap: true,
          zIndex: 3
        },
        {
          id: 'mu-f-footer',
          type: 'text',
          content: 'Reception to follow at Serena Hotel',
          x: 165, y: 366, width: 210, height: 22,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 13,
          textAlign: 'center',
          color: '#8A2E3E',
          noWrap: true,
          zIndex: 3
        }
      ],
      back: [
        {
          id: 'mu-b-qr',
          type: 'qr-code',
          qrValue: 'https://zainab-hamza-nikkah.com',
          x: 140, y: 180, width: 120, height: 120,
          zIndex: 2
        },
        {
          id: 'mu-b-rsvp',
          type: 'text',
          content: 'ZAINAB & HAMZA\nRSVP: +92 300 9876543',
          x: 40, y: 324, width: 320, height: 52,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 14,
          fontWeight: '700',
          letterSpacing: 2.2,
          lineHeight: 1.6,
          textAlign: 'center',
          color: '#701323',
          zIndex: 3
        }
      ]
    },
  
    // 3. Victorian Romantic Blush Silk Bow & Oval Cameo (Directly matching user Image 3!)
    {
      id: 'victorian-blush-silk-cameo',
      title: 'Victorian Blush Silk Bow & Oval Cameo',
      section: 'wedding',
      badge: 'Coquette Romantic',
      style: 'Victorian Cameo / Silk Bow & Roses',
      bgImage: 'assets/backgrounds/blush_bow_cameo.jpg',
      bgColor: '#FFF5F5',
      accentColor: '#8A253A',
      tags: ['Silk Bow', 'Cameo Frame', 'Blush Roses', 'Wax Seal', 'Romantic', 'Elegance'],
      description: 'Magnificent dusty rose satin ribbon bow atop an ornate golden oval cameo frame, framed by blooming pink garden roses and wax seal.',
      front: [
        {
          id: 'bl-f-sub1',
          type: 'text',
          content: 'TOGETHER WITH THEIR FAMILIES',
          x: 85, y: 142, width: 210, height: 16,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7.5,
          fontWeight: '500',
          letterSpacing: 2.2,
          textAlign: 'center',
          color: '#5A464B',
          noWrap: true,
          zIndex: 3
        },
        {
          id: 'bl-f-name1',
          type: 'text',
          content: 'Areeb',
          x: 85, y: 162, width: 210, height: 42,
          fontFamily: "'Great Vibes', cursive",
          fontSize: 40,
          fontWeight: '400',
          textAlign: 'center',
          color: '#8A253A',
          noWrap: true,
          zIndex: 3
        },
        {
          id: 'bl-f-and',
          type: 'text',
          content: '&',
          x: 85, y: 202, width: 210, height: 20,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 20,
          textAlign: 'center',
          color: '#B57988',
          zIndex: 3
        },
        {
          id: 'bl-f-name2',
          type: 'text',
          content: 'Maha',
          x: 85, y: 220, width: 210, height: 42,
          fontFamily: "'Great Vibes', cursive",
          fontSize: 40,
          fontWeight: '400',
          textAlign: 'center',
          color: '#8A253A',
          noWrap: true,
          zIndex: 3
        },
        {
          id: 'bl-f-sub2',
          type: 'text',
          content: 'REQUEST THE PLEASURE OF YOUR COMPANY\nAT THEIR WEDDING CELEBRATION',
          x: 85, y: 272, width: 210, height: 26,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 6.8,
          fontWeight: '500',
          lineHeight: 1.45,
          letterSpacing: 1.4,
          textAlign: 'center',
          color: '#5A464B',
          zIndex: 3
        },
        {
          id: 'bl-f-date',
          type: 'text',
          content: 'SATURDAY  ·  14 DEC 2026',
          x: 85, y: 304, width: 210, height: 20,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 13.5,
          fontWeight: '700',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#8A253A',
          noWrap: true,
          zIndex: 3
        },
        {
          id: 'bl-f-venue',
          type: 'text',
          content: 'SERENA HOTEL  ·  ISLAMABAD',
          x: 85, y: 328, width: 210, height: 16,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7.5,
          fontWeight: '600',
          letterSpacing: 1.8,
          textAlign: 'center',
          color: '#3B292D',
          noWrap: true,
          zIndex: 3
        },
        {
          id: 'bl-f-time',
          type: 'text',
          content: '7:00 PM ONWARDS',
          x: 85, y: 348, width: 210, height: 16,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7,
          letterSpacing: 1.5,
          textAlign: 'center',
          color: '#7E636A',
          noWrap: true,
          zIndex: 3
        }
      ],
      back: [
        {
          id: 'bl-b-qr',
          type: 'qr-code',
          qrValue: 'https://areeb-maha.com/registry',
          x: 140, y: 180, width: 120, height: 120,
          zIndex: 2
        },
        {
          id: 'bl-b-rsvp',
          type: 'text',
          content: 'AREEB & MAHA\nRSVP: +92 300 1234567',
          x: 40, y: 324, width: 320, height: 52,
          fontFamily: "'Playfair Display', serif",
          fontSize: 12.5,
          fontWeight: '600',
          letterSpacing: 2.5,
          lineHeight: 1.7,
          textAlign: 'center',
          color: '#8A253A',
          zIndex: 3
        }
      ]
    },
  
    // 5. Celestial Midnight Starlight & Crescent Moon
    {
      id: 'celestial-midnight-starlight-arch',
      title: 'Celestial Midnight Starlight & Crescent Moon',
      section: 'wedding',
      badge: 'Celestial Magic',
      style: 'Celestial Velvet / Gold Stars',
      bgImage: 'assets/backgrounds/celestial_gold_arch.jpg',
      bgColor: '#08142A',
      accentColor: '#F0D78C',
      tags: ['Celestial', 'Moon & Stars', 'Navy Velvet', 'Gold Arch', 'Moody Luxury'],
      description: 'Deep royal sapphire velvet with glowing golden crescent moon, constellation accents, and luminous foil typography with refined ceremonial hierarchy.',
      front: [
        {
          id: 'ce-f-sub1',
          type: 'text',
          content: 'REQUEST THE HONOUR OF YOUR PRESENCE',
          x: 90, y: 248, width: 220, height: 16,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7,
          fontWeight: '500',
          letterSpacing: 1.8,
          textAlign: 'center',
          color: '#D5E0F0',
          noWrap: true,
          zIndex: 4
        },
        {
          id: 'ce-f-sub2',
          type: 'text',
          content: 'AT THE WEDDING OF',
          x: 90, y: 268, width: 220, height: 14,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 11.5,
          textAlign: 'center',
          color: '#F0D78C',
          noWrap: true,
          zIndex: 4
        },
        {
          id: 'ce-f-name1',
          type: 'text',
          content: 'Seraphina',
          x: 90, y: 286, width: 220, height: 38,
          fontFamily: "'Great Vibes', cursive",
          fontSize: 36,
          noWrap: true,
          textAlign: 'center',
          color: '#FFFDF8',
          isFoil: true,
          zIndex: 4
        },
        {
          id: 'ce-f-and',
          type: 'text',
          content: '&',
          x: 90, y: 322, width: 220, height: 18,
          fontFamily: "'Cinzel', serif",
          fontSize: 13,
          textAlign: 'center',
          color: '#F0D78C',
          zIndex: 4
        },
        {
          id: 'ce-f-name2',
          type: 'text',
          content: 'Julian',
          x: 90, y: 338, width: 220, height: 38,
          fontFamily: "'Great Vibes', cursive",
          fontSize: 36,
          noWrap: true,
          textAlign: 'center',
          color: '#FFFDF8',
          isFoil: true,
          zIndex: 4
        },
        {
          id: 'ce-f-rule',
          type: 'svg',
          assetId: 'divider-sapphire-line',
          x: 120, y: 380, width: 160, height: 10,
          color: '#F0D78C',
          opacity: 0.85,
          zIndex: 4
        },
        {
          id: 'ce-f-date',
          type: 'text',
          content: 'SATURDAY  ·  OCTOBER 31, 2026',
          x: 90, y: 396, width: 220, height: 18,
          fontFamily: "'Cinzel', serif",
          fontSize: 9.5,
          fontWeight: '600',
          letterSpacing: 1.8,
          noWrap: true,
          textAlign: 'center',
          color: '#F0D78C',
          zIndex: 4
        },
        {
          id: 'ce-f-time',
          type: 'text',
          content: "SIX O'CLOCK IN THE EVENING",
          x: 90, y: 418, width: 220, height: 16,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7,
          fontWeight: '500',
          letterSpacing: 1.6,
          noWrap: true,
          textAlign: 'center',
          color: '#FFF8EC',
          zIndex: 4
        },
        {
          id: 'ce-f-loc',
          type: 'text',
          content: "CHÂTEAU DE CHANTILLY  ·  PARIS",
          x: 90, y: 436, width: 220, height: 14,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 6.5,
          letterSpacing: 1.5,
          noWrap: true,
          textAlign: 'center',
          color: '#C9D6E8',
          zIndex: 4
        }
      ],
      back: [
        {
          id: 'ce-b-qr',
          type: 'qr-code',
          qrValue: 'https://chantilly-nocturne.com/rsvp',
          x: 145, y: 180, width: 110, height: 110,
          zIndex: 2
        },
        {
          id: 'ce-b-rsvp',
          type: 'text',
          content: 'SERAPHINA & JULIAN\nRSVP: +1 (555) 234-5678',
          x: 90, y: 324, width: 220, height: 52,
          fontFamily: "'Cinzel', serif",
          fontSize: 10.5,
          fontWeight: '600',
          letterSpacing: 1.5,
          lineHeight: 1.7,
          textAlign: 'center',
          color: '#F0D78C',
          isFoil: true,
          zIndex: 3
        }
      ]
    },
  
    // 6. Parisian Vogue Editorial B&W
    {
      id: 'parisian-vogue-editorial',
      title: 'Parisian Vogue High-Fashion Editorial',
      section: 'wedding',
      badge: 'Trending Editorial',
      style: 'Haute Editorial / B&W',
      bgImage: 'assets/backgrounds/parisian_editorial_bg.jpg',
      bgColor: '#FAF8F5',
      accentColor: '#111111',
      tags: ['Editorial', 'Didot', 'Vogue', 'Arch Portrait', 'Black & White', 'Couture'],
      description: 'Chic French fashion magazine aesthetic with architectural French arch frame, black sealing wax, Parisian Didot typography, and customizable bridal portrait.',
      front: [
        {
          id: 'pv-f-photo',
          type: 'image',
          src: 'assets/backgrounds/parisian_couture_bride.jpg',
          mask: 'mask-arch',
          x: 110, y: 76, width: 180, height: 160,
          zIndex: 2
        },
        {
          id: 'pv-f-mag',
          type: 'text',
          content: 'V O G U E   M A R I A G E',
          x: 50, y: 348, width: 300, height: 18,
          fontFamily: "'Bodoni Moda', serif",
          fontSize: 12,
          fontWeight: '700',
          letterSpacing: 4,
          noWrap: true,
          textAlign: 'center',
          color: '#111111',
          zIndex: 3
        },
        {
          id: 'pv-f-edition',
          type: 'text',
          content: "L'AMOUR ÉDITION  ·  PARIS",
          x: 50, y: 368, width: 300, height: 14,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 6.8,
          fontWeight: '500',
          letterSpacing: 2.2,
          noWrap: true,
          textAlign: 'center',
          color: '#777777',
          zIndex: 3
        },
        {
          id: 'pv-f-rule',
          type: 'svg',
          assetId: 'divider-sapphire-dot',
          x: 140, y: 386, width: 120, height: 8,
          color: '#111111',
          opacity: 0.4,
          zIndex: 3
        },
        {
          id: 'pv-f-names',
          type: 'text',
          content: 'CHARLOTTE  &  ANTOINE',
          x: 40, y: 398, width: 320, height: 26,
          fontFamily: "'Bodoni Moda', serif",
          fontSize: 18,
          fontWeight: '700',
          letterSpacing: 3,
          noWrap: true,
          textAlign: 'center',
          color: '#111111',
          zIndex: 3
        },
        {
          id: 'pv-f-invitation',
          type: 'text',
          content: "sollicitent l'honneur de votre présence à leur mariage",
          x: 50, y: 428, width: 300, height: 18,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 12,
          textAlign: 'center',
          color: '#444444',
          zIndex: 3
        },
        {
          id: 'pv-f-date',
          type: 'text',
          content: 'SAMEDI 24 OCTOBRE 2026',
          x: 50, y: 450, width: 300, height: 18,
          fontFamily: "'Bodoni Moda', serif",
          fontSize: 11,
          fontWeight: '600',
          letterSpacing: 2.5,
          noWrap: true,
          textAlign: 'center',
          color: '#111111',
          zIndex: 3
        },
        {
          id: 'pv-f-venue',
          type: 'text',
          content: 'HÔTEL DE CRILLON  ·  PLACE DE LA CONCORDE',
          x: 50, y: 472, width: 300, height: 16,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7.5,
          fontWeight: '600',
          letterSpacing: 1.8,
          noWrap: true,
          textAlign: 'center',
          color: '#222222',
          zIndex: 3
        },
        {
          id: 'pv-f-reception',
          type: 'text',
          content: 'RÉCEPTION & COCKTAIL NOIR  ·  19H00',
          x: 50, y: 492, width: 300, height: 14,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 6.8,
          fontWeight: '500',
          letterSpacing: 1.6,
          noWrap: true,
          textAlign: 'center',
          color: '#666666',
          zIndex: 3
        },
        {
          id: 'pv-f-rsvp',
          type: 'text',
          content: 'TENUE DE SOIRÉE  ·  RSVP AVANT LE 1ER SEPTEMBRE',
          x: 50, y: 512, width: 300, height: 14,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 6.5,
          letterSpacing: 1.4,
          noWrap: true,
          textAlign: 'center',
          color: '#888888',
          zIndex: 3
        }
      ],
      back: [
        {
          id: 'pv-b-qr',
          type: 'qr-code',
          qrValue: 'https://vogue-weddings.example/charlotte-alexandre',
          x: 155, y: 365, width: 90, height: 90,
          zIndex: 2
        },
        {
          id: 'pv-b-rsvp',
          type: 'text',
          content: 'CHARLOTTE & ANTOINE\nRSVP: +33 6 12 34 56 78',
          x: 40, y: 468, width: 320, height: 48,
          fontFamily: "'Bodoni Moda', serif",
          fontSize: 12,
          fontWeight: '700',
          letterSpacing: 2.2,
          lineHeight: 1.6,
          textAlign: 'center',
          color: '#111111',
          zIndex: 3
        }
      ]
    },
  
    // =========================================================================
    // SECTION 2: MILESTONE BIRTHDAYS & SOIRÉES (4 TEMPLATES)
    // =========================================================================
  
    // 7. French Riviera Spritz & Martini Club
    {
      id: 'french-riviera-martini-club',
      title: 'French Riviera Spritz & Dirty Martini Club',
      section: 'soiree',
      badge: 'Viral Aesthetic',
      style: 'French Bistro / Playful Chic',
      bgTexture: 'texture-linen',
      bgColor: '#FAF5EE',
      accentColor: '#C05C3D',
      tags: ['Martini', 'Spritz', 'Riviera', 'Birthday', '30th', 'Cocktails'],
      description: 'Chic Saint-Tropez bistro club vibe with hand-drawn olive martini illustration, retro playful fonts, and vibrant coastal palette.',
      front: [
        {
          id: 's1-f-martini',
          type: 'svg',
          assetId: 'martini-glass',
          x: 170, y: 40, width: 60, height: 80,
          color: '#C05C3D',
          zIndex: 2
        },
        {
          id: 's1-f-sub1',
          type: 'text',
          content: 'DIRTY MARTINIS & DANCING SHOES',
          x: 40, y: 130, width: 320, height: 20,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8.5,
          fontWeight: '600',
          letterSpacing: 3.5,
          textAlign: 'center',
          color: '#C05C3D',
          zIndex: 3
        },
        {
          id: 's1-f-title',
          type: 'text',
          content: "MARGOT’S",
          x: 30, y: 160, width: 340, height: 45,
          fontFamily: "'Bodoni Moda', serif",
          fontSize: 40,
          fontWeight: '900',
          letterSpacing: 4,
          textAlign: 'center',
          color: '#1F2923',
          zIndex: 3
        },
        {
          id: 's1-f-age',
          type: 'text',
          content: 'CLUB 30',
          x: 30, y: 205, width: 340, height: 50,
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          fontSize: 42,
          fontWeight: '700',
          textAlign: 'center',
          color: '#C05C3D',
          zIndex: 3
        },
        {
          id: 's1-f-desc',
          type: 'text',
          content: 'JOIN ME ON THE CÔTE D’AZUR AS WE TOAST TO THIRTY FABULOUS YEARS',
          x: 50, y: 265, width: 300, height: 35,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8.5,
          fontWeight: '500',
          lineHeight: 1.5,
          letterSpacing: 2,
          textAlign: 'center',
          color: '#5C6B61',
          zIndex: 3
        },
        {
          id: 's1-f-date',
          type: 'text',
          content: 'SATURDAY • AUGUST 14 • 8:00 PM TILL LATE',
          x: 30, y: 320, width: 340, height: 25,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8.5,
          fontWeight: '700',
          letterSpacing: 1.5,
          textAlign: 'center',
          color: '#1F2923',
          zIndex: 3
        },
        {
          id: 's1-f-venue',
          type: 'text',
          content: 'LE CLUB 55 • PAMPELONNE BEACH',
          x: 40, y: 355, width: 320, height: 25,
          fontFamily: "'Bodoni Moda', serif",
          fontSize: 15,
          fontWeight: '700',
          letterSpacing: 3,
          textAlign: 'center',
          color: '#C05C3D',
          zIndex: 3
        }
      ],
      back: [
        {
          id: 's1-b-title',
          type: 'text',
          content: 'THE COCKTAIL MENU',
          x: 40, y: 60, width: 320, height: 25,
          fontFamily: "'Bodoni Moda', serif",
          fontSize: 16,
          fontWeight: '800',
          letterSpacing: 3,
          textAlign: 'center',
          color: '#C05C3D',
          zIndex: 3
        },
        {
          id: 's1-b-qr',
          type: 'qr-code',
          qrValue: 'https://partiful.com/e/margot30',
          x: 160, y: 160, width: 80, height: 80,
          zIndex: 4
        },
        {
          id: 's1-b-rsvp',
          type: 'text',
          content: 'SCAN TO RSVP ON PARTIFUL',
          x: 40, y: 260, width: 320, height: 20,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8.5,
          fontWeight: '600',
          letterSpacing: 2.5,
          textAlign: 'center',
          color: '#C05C3D',
          zIndex: 3
        }
      ]
    },
  
    // 8. Speakeasy 1920s Art Deco Noir
    {
      id: 'speakeasy-art-deco-noir',
      title: 'Speakeasy 1920s Art Deco Noir',
      section: 'soiree',
      badge: 'Gatsby Glamour',
      style: '1920s Art Deco / Speakeasy',
      bgTexture: 'texture-velvet',
      bgColor: '#0C141F',
      accentColor: '#D4AF37',
      tags: ['Art Deco', 'Gatsby', 'Black & Gold', 'Speakeasy', '40th Birthday'],
      description: 'Stepped geometric gold foil border, deep midnight velvet texture, and luxurious Great Gatsby era typography.',
      front: [
        {
          id: 's2-f-frame',
          type: 'svg',
          assetId: 'art-deco-frame',
          x: 20, y: 20, width: 360, height: 520,
          color: '#D4AF37',
          opacity: 0.9,
          zIndex: 1
        },
        {
          id: 's2-f-sub1',
          type: 'text',
          content: 'A LITTLE PARTY NEVER KILLED NOBODY',
          x: 40, y: 65, width: 320, height: 20,
          fontFamily: "'Cinzel', serif",
          fontSize: 9,
          letterSpacing: 3,
          textAlign: 'center',
          color: '#D4AF37',
          zIndex: 3
        },
        {
          id: 's2-f-sub2',
          type: 'text',
          content: 'CELEBRATING THE 40TH BIRTHDAY OF',
          x: 40, y: 110, width: 320, height: 20,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8.5,
          letterSpacing: 2.5,
          textAlign: 'center',
          color: '#E0DFDC',
          zIndex: 3
        },
        {
          id: 's2-f-name',
          type: 'text',
          content: 'MAXIMILIAN STERLING',
          x: 30, y: 145, width: 340, height: 50,
          fontFamily: "'Cinzel', serif",
          fontSize: 21,
          fontWeight: '700',
          letterSpacing: 3,
          textAlign: 'center',
          color: '#FFFFFF',
          isFoil: true,
          zIndex: 3
        },
        {
          id: 's2-f-coupe',
          type: 'svg',
          assetId: 'champagne-coupe',
          x: 170, y: 205, width: 60, height: 80,
          color: '#D4AF37',
          zIndex: 2
        },
        {
          id: 's2-f-date',
          type: 'text',
          content: 'SATURDAY, NOVEMBER 21ST',
          x: 40, y: 305, width: 320, height: 25,
          fontFamily: "'Cinzel', serif",
          fontSize: 14,
          letterSpacing: 3,
          textAlign: 'center',
          color: '#D4AF37',
          zIndex: 3
        },
        {
          id: 's2-f-venue',
          type: 'text',
          content: 'THE VAULT AT THE CONNAUGHT • LONDON',
          x: 30, y: 375, width: 340, height: 25,
          fontFamily: "'Cinzel', serif",
          fontSize: 10.5,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#FFFFFF',
          zIndex: 3
        }
      ],
      back: [
        {
          id: 's2-b-title',
          type: 'text',
          content: 'SECRET REVELRY DETAILS',
          x: 40, y: 70, width: 320, height: 25,
          fontFamily: "'Cinzel', serif",
          fontSize: 13,
          letterSpacing: 3,
          textAlign: 'center',
          color: '#D4AF37',
          zIndex: 3
        },
        {
          id: 's2-b-qr',
          type: 'qr-code',
          qrValue: 'https://speakeasy-london.rsvp',
          x: 160, y: 160, width: 80, height: 80,
          zIndex: 4
        },
        {
          id: 's2-b-rsvp',
          type: 'text',
          content: 'REPLY IN CONFIDENCE BY NOV 1',
          x: 40, y: 260, width: 320, height: 20,
          fontFamily: "'Cinzel', serif",
          fontSize: 8.5,
          letterSpacing: 3,
          textAlign: 'center',
          color: '#D4AF37',
          zIndex: 3
        }
      ]
    },
  
    // 9. Old Money 30th / 40th Champagne Editorial
    {
      id: 'old-money-champagne-editorial',
      title: 'Old Money 30th / 40th Champagne Editorial',
      section: 'soiree',
      badge: 'Quiet Luxury',
      style: 'Old Money / Heritage',
      bgTexture: 'texture-linen',
      bgColor: '#FAF7F0',
      accentColor: '#3A2E26',
      tags: ['Old Money', 'Quiet Luxury', 'Linen Paper', 'Editorial', '30th Birthday'],
      description: 'Crisp French linen paper, dual-column editorial layout, understated luxury, crest monogram, espresso brown typography.',
      front: [
        {
          id: 's3-f-seal',
          type: 'wax-seal',
          assetId: 'wax-navy-crest',
          x: 173, y: 40, width: 54, height: 54,
          zIndex: 3
        },
        {
          id: 's3-f-sub1',
          type: 'text',
          content: 'ESTABLISHED 1996 • 30 YEARS',
          x: 40, y: 110, width: 320, height: 20,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          fontWeight: '600',
          letterSpacing: 4,
          textAlign: 'center',
          color: '#76675B',
          zIndex: 3
        },
        {
          id: 's3-f-name',
          type: 'text',
          content: 'VICTORIA HELENA',
          x: 20, y: 140, width: 360, height: 45,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 32,
          fontWeight: '600',
          letterSpacing: 4,
          textAlign: 'center',
          color: '#241D17',
          zIndex: 3
        },
        {
          id: 's3-f-invite',
          type: 'text',
          content: 'invites you to celebrate thirty years of life, laughter & champagne',
          x: 40, y: 190, width: 320, height: 35,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 16,
          textAlign: 'center',
          color: '#4B3F35',
          zIndex: 3
        },
        {
          id: 's3-f-date',
          type: 'text',
          content: 'FRIDAY, OCTOBER 9TH, 2026',
          x: 40, y: 265, width: 320, height: 25,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 11,
          fontWeight: '600',
          letterSpacing: 3,
          textAlign: 'center',
          color: '#241D17',
          zIndex: 3
        },
        {
          id: 's3-f-venue',
          type: 'text',
          content: 'CHÂTEAU MARMONT • WEST HOLLYWOOD',
          x: 30, y: 310, width: 340, height: 25,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 11.5,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#3A2E26',
          zIndex: 3
        }
      ],
      back: [
        {
          id: 's3-b-title',
          type: 'text',
          content: 'GUEST ITINERARY',
          x: 40, y: 70, width: 320, height: 25,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 16,
          letterSpacing: 4,
          textAlign: 'center',
          color: '#241D17',
          zIndex: 3
        },
        {
          id: 's3-b-qr',
          type: 'qr-code',
          qrValue: 'https://victoria-30th.com',
          x: 160, y: 160, width: 80, height: 80,
          zIndex: 4
        }
      ]
    },
  
    // 10. Studio 74 Disco Fever & Glamour
    {
      id: 'studio-74-disco-fever',
      title: 'Studio 74 Disco Fever & Glamour',
      section: 'soiree',
      badge: 'Retro Glam',
      style: '70s Disco / High Glam',
      bgTexture: 'texture-velvet',
      bgColor: '#121217',
      accentColor: '#E2E8F0',
      tags: ['Disco Ball', '70s Glamour', 'Silver', 'Studio 54', 'Party'],
      description: 'Metallic silver gradient typography, illustrated retro mirror disco ball, and high-energy luxury nightlife vibe.',
      front: [
        {
          id: 's4-f-discoball',
          type: 'svg',
          assetId: 'disco-ball',
          x: 165, y: 35, width: 70, height: 90,
          color: '#E2E8F0',
          zIndex: 2
        },
        {
          id: 's4-f-name',
          type: 'text',
          content: "SIENNA’S 25TH",
          x: 30, y: 160, width: 340, height: 50,
          fontFamily: "'Bodoni Moda', serif",
          fontSize: 36,
          fontWeight: '900',
          letterSpacing: 5,
          textAlign: 'center',
          color: '#FFFFFF',
          isFoil: true,
          zIndex: 3
        },
        {
          id: 's4-f-date',
          type: 'text',
          content: 'SATURDAY • JULY 10 • 10 PM TILL SUNRISE',
          x: 30, y: 240, width: 340, height: 25,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8.5,
          fontWeight: '700',
          letterSpacing: 1.5,
          textAlign: 'center',
          color: '#FFFFFF',
          zIndex: 3
        },
        {
          id: 's4-f-venue',
          type: 'text',
          content: 'THE ROOF AT EDITION • WEST HOLLYWOOD',
          x: 40, y: 280, width: 320, height: 25,
          fontFamily: "'Bodoni Moda', serif",
          fontSize: 10.5,
          fontWeight: '700',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#E2E8F0',
          zIndex: 3
        }
      ],
      back: [
        {
          id: 's4-b-title',
          type: 'text',
          content: 'VIP GUEST LIST & ACCESS',
          x: 40, y: 70, width: 320, height: 25,
          fontFamily: "'Bodoni Moda', serif",
          fontSize: 15,
          letterSpacing: 4,
          textAlign: 'center',
          color: '#FFFFFF',
          zIndex: 3
        },
        {
          id: 's4-b-qr',
          type: 'qr-code',
          qrValue: 'https://sienna-disco25.com',
          x: 160, y: 160, width: 80, height: 80,
          zIndex: 4
        }
      ]
    },
  
    // =========================================================================
    // SECTION 3: BABY SHOWER & CHRISTENING (4 TEMPLATES)
    // =========================================================================
  
    // 11. French Chateau Toile de Jouy & Gilded Frame
    {
      id: 'french-chateau-toile-gilded',
      title: 'French Chateau Toile de Jouy & Gilded Frame',
      section: 'baby-christening',
      badge: 'French Heritage',
      style: 'French Rococo / Toile de Jouy',
      bgImage: 'assets/backgrounds/french_toile_chateau.jpg',
      bgColor: '#F8F9FC',
      accentColor: '#365175',
      tags: ['Toile de Jouy', 'Gilded Frame', 'Hydrangeas', 'Baby Shower', 'Chateau'],
      description: 'Authentic French porcelain blue Toile de Jouy with ornate 3D gilded rococo mirror frame, white hydrangeas, and silk ribbon bow.',
      front: [
        {
          id: 'to-f-sub2',
          type: 'text',
          content: 'a sweet little baby boy',
          x: 100, y: 178, width: 200, height: 32,
          fontFamily: "'Pinyon Script', cursive",
          fontStyle: 'italic',
          fontSize: 18,
          letterSpacing: 0.4,
          textAlign: 'center',
          noWrap: true,
          color: '#1B2C42',
          zIndex: 3
        },
        {
          id: 'to-f-name',
          type: 'text',
          content: 'BABY DUPONT',
          x: 110, y: 222, width: 180, height: 40,
          fontFamily: "'Playfair Display', serif",
          fontSize: 24,
          fontWeight: '700',
          letterSpacing: 3,
          textAlign: 'center',
          color: '#1B2C42',
          zIndex: 3
        },
        {
          id: 'to-f-date',
          type: 'text',
          content: 'SUNDAY, MAY 16TH • 1:00 PM',
          x: 110, y: 274, width: 180, height: 25,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 13,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#1B2C42',
          zIndex: 3
        },
        {
          id: 'to-f-venue',
          type: 'text',
          content: 'LE JARDIN DES TUILERIES • PARIS',
          x: 110, y: 308, width: 180, height: 20,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#365175',
          zIndex: 3
        },
        {
          id: 'to-f-tea',
          type: 'text',
          content: 'MACARONS, CHAMPAGNE',
          x: 115, y: 338, width: 170, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 6.5,
          letterSpacing: 1,
          noWrap: true,
          textAlign: 'center',
          color: '#526982',
          zIndex: 3
        },
        {
          id: 'to-f-tea-sub',
          type: 'text',
          content: '& AFTERNOON TEA',
          x: 115, y: 356, width: 170, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 6.5,
          letterSpacing: 1,
          noWrap: true,
          textAlign: 'center',
          color: '#526982',
          zIndex: 3
        }
      ],
      back: [
        {
          id: 'to-b-title',
          type: 'text',
          content: 'BABY REGISTRY & WISHES',
          x: 40, y: 70, width: 320, height: 25,
          fontFamily: "'Playfair Display', serif",
          fontSize: 15,
          letterSpacing: 3,
          textAlign: 'center',
          color: '#1B2C42',
          zIndex: 3
        },
        {
          id: 'to-b-qr',
          type: 'qr-code',
          qrValue: 'https://babylist.com/baby-dupont',
          x: 160, y: 160, width: 80, height: 80,
          zIndex: 4
        }
      ]
    },
  
    // 12. Scandinavian Neutral Woodland
    {
      id: 'scandinavian-woodland-baby',
      title: 'Scandinavian Neutral Woodland Baby',
      section: 'baby-christening',
      badge: 'Warm Minimalist',
      style: 'Nordic Organic / Woodland',
      bgTexture: 'texture-deckle',
      bgColor: '#FAF6F0',
      accentColor: '#5B695A',
      tags: ['Woodland', 'Nordic', 'Neutral', 'Eucalyptus', 'Gender Neutral'],
      description: 'Warm oat milk and eucalyptus tones, delicate line-art botanicals, and soft organic Scandinavian typography.',
      front: [
        {
          id: 'b2-f-wreath',
          type: 'svg',
          assetId: 'olive-wreath',
          x: 160, y: 40, width: 80, height: 80,
          color: '#5B695A',
          opacity: 0.8,
          zIndex: 2
        },
        {
          id: 'b2-f-sub1',
          type: 'text',
          content: 'A LITTLE MIRACLE IS ON THE WAY',
          x: 40, y: 135, width: 320, height: 20,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 8.5,
          fontWeight: '500',
          letterSpacing: 3,
          textAlign: 'center',
          color: '#849383',
          zIndex: 3
        },
        {
          id: 'b2-f-title',
          type: 'text',
          content: 'Baby Lindqvist',
          x: 20, y: 165, width: 360, height: 45,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 34,
          fontWeight: '500',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#2F382E',
          zIndex: 3
        },
        {
          id: 'b2-f-date',
          type: 'text',
          content: 'SATURDAY • APRIL 24TH • 2:00 PM',
          x: 40, y: 250, width: 320, height: 25,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 15,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#2F382E',
          zIndex: 3
        },
        {
          id: 'b2-f-venue',
          type: 'text',
          content: 'ROSLENDAL GARDEN CAFÉ • STOCKHOLM',
          x: 30, y: 290, width: 340, height: 25,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 9,
          fontWeight: '600',
          letterSpacing: 2.5,
          textAlign: 'center',
          color: '#5B695A',
          zIndex: 3
        },
        {
          id: 'b2-f-seal',
          type: 'wax-seal',
          assetId: 'wax-sage-rose',
          x: 173, y: 380, width: 54, height: 54,
          zIndex: 4
        }
      ],
      back: [
        {
          id: 'b2-b-title',
          type: 'text',
          content: 'REGISTRY & DETAILS',
          x: 40, y: 80, width: 320, height: 25,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 16,
          letterSpacing: 3,
          textAlign: 'center',
          color: '#2F382E',
          zIndex: 3
        },
        {
          id: 'b2-b-qr',
          type: 'qr-code',
          qrValue: 'https://babylist.com/baby-lindqvist',
          x: 160, y: 160, width: 80, height: 80,
          zIndex: 4
        }
      ]
    },
  
    // 13. Dainty Ballet Silk Bow & Scalloped Edge
    {
      id: 'dainty-ballet-silk-bow',
      title: 'Dainty Ballet Silk Bow & Scalloped Edge',
      section: 'baby-christening',
      badge: 'Coquette Chic',
      style: 'French Coquette / Dainty Bow',
      bgTexture: 'texture-linen',
      bgColor: '#FFF8F8',
      accentColor: '#BD6E7C',
      tags: ['Bow', 'Blush Pink', 'Scallop', 'Baby Shower', 'Dainty'],
      description: 'Soft ballet blush and ivory, hand-drawn silk ribbon bow, scalloped borders, and graceful cursive script.',
      front: [
        {
          id: 'b3-f-border',
          type: 'svg',
          assetId: 'scalloped-border',
          x: 20, y: 20, width: 360, height: 520,
          color: '#E8CCD2',
          zIndex: 1
        },
        {
          id: 'b3-f-bow',
          type: 'svg',
          assetId: 'silk-bow',
          x: 160, y: 45, width: 80, height: 50,
          color: '#BD6E7C',
          zIndex: 2
        },
        {
          id: 'b3-f-name',
          type: 'text',
          content: 'Clara Juliette',
          x: 20, y: 145, width: 360, height: 50,
          fontFamily: "'Alex Brush', cursive",
          fontSize: 44,
          textAlign: 'center',
          color: '#4A252C',
          zIndex: 3
        },
        {
          id: 'b3-f-date',
          type: 'text',
          content: 'SUNDAY, JUNE 6TH • 11:30 AM',
          x: 40, y: 240, width: 320, height: 25,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 15,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#4A252C',
          zIndex: 3
        },
        {
          id: 'b3-f-venue',
          type: 'text',
          content: 'THE CONSERVATORY AT PETERSHAM NURSERIES',
          x: 30, y: 280, width: 340, height: 25,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 8.5,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#BD6E7C',
          zIndex: 3
        }
      ],
      back: [
        {
          id: 'b3-b-title',
          type: 'text',
          content: 'BABY REGISTRY',
          x: 40, y: 80, width: 320, height: 25,
          fontFamily: "'Playfair Display', serif",
          fontSize: 15,
          letterSpacing: 3,
          textAlign: 'center',
          color: '#4A252C',
          zIndex: 3
        },
        {
          id: 'b3-b-qr',
          type: 'qr-code',
          qrValue: 'https://babylist.com/clara-juliette',
          x: 160, y: 160, width: 80, height: 80,
          zIndex: 4
        }
      ]
    },
  
    // 15. Baptism Photo Panel & Blue Script
    {
      id: 'baptism-photo-panel-blue-script',
      title: 'Baptism Photo Panel & Blue Script',
      section: 'baby-christening',
      badge: 'Photo Baptism',
      style: 'Editorial Baptism / Split Portrait',
      bgTexture: 'texture-deckle',
      bgColor: '#F4F0E8',
      accentColor: '#1A5278',
      tags: ['Baptism', 'Photo', 'Blue Script', 'Editable Portrait', 'Christening'],
      description: 'Refined ivory-and-sapphire baptism suite with a full-height replaceable portrait panel, botanical emblem, editorial typography, and elegant ceremony details.',
      front: [
        // Replaceable portrait panel (right)
        {
          id: 'bp-f-photo',
          type: 'image',
          src: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=900&q=85',
          mask: 'mask-rectangle',
          x: 208, y: 0, width: 192, height: 560,
          zIndex: 2
        },
        // Soft column divider between text & photo
        {
          id: 'bp-f-vline',
          type: 'svg',
          assetId: 'vertical-divider',
          x: 200, y: 48, width: 8, height: 464,
          color: '#C4B59E',
          opacity: 0.7,
          zIndex: 3
        },
        // Elegant botanical emblem (replaces cross)
        {
          id: 'bp-f-emblem',
          type: 'svg',
          assetId: 'olive-sprig',
          x: 48, y: 48, width: 116, height: 52,
          color: '#1A5278',
          opacity: 0.85,
          zIndex: 3
        },
        {
          id: 'bp-f-invite',
          type: 'text',
          content: 'YOU ARE INVITED TO THE',
          x: 18, y: 120, width: 176, height: 16,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 6.5,
          fontWeight: '500',
          letterSpacing: 2.2,
          textAlign: 'center',
          color: '#7A8B99',
          zIndex: 3
        },
        {
          id: 'bp-f-baptism',
          type: 'text',
          content: 'BAPTISM',
          x: 14, y: 138, width: 184, height: 28,
          fontFamily: "'Playfair Display', serif",
          fontSize: 18,
          fontWeight: '600',
          letterSpacing: 5,
          noWrap: true,
          textAlign: 'center',
          color: '#1A5278',
          zIndex: 3
        },
        {
          id: 'bp-f-of',
          type: 'text',
          content: 'of',
          x: 18, y: 170, width: 176, height: 20,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 15,
          textAlign: 'center',
          color: '#9AABBA',
          zIndex: 3
        },
        {
          id: 'bp-f-name',
          type: 'text',
          content: 'Maria Carmen',
          x: 10, y: 194, width: 192, height: 72,
          fontFamily: "'Great Vibes', cursive",
          fontSize: 38,
          lineHeight: 1.08,
          textAlign: 'center',
          color: '#0E3F63',
          zIndex: 3
        },
        {
          id: 'bp-f-rule',
          type: 'svg',
          assetId: 'divider-sapphire-line',
          x: 34, y: 272, width: 144, height: 16,
          color: '#1A5278',
          opacity: 0.55,
          zIndex: 3
        },
        {
          id: 'bp-f-date',
          type: 'text',
          content: 'SUNDAY, FEBRUARY 22, 2026',
          x: 14, y: 302, width: 184, height: 20,
          fontFamily: "'Playfair Display', serif",
          fontSize: 9.5,
          fontWeight: '600',
          letterSpacing: 0.8,
          textAlign: 'center',
          color: '#1A5278',
          zIndex: 3
        },
        {
          id: 'bp-f-time',
          type: 'text',
          content: 'at half past ten in the morning',
          x: 14, y: 326, width: 184, height: 18,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 12,
          textAlign: 'center',
          color: '#5A6E7D',
          zIndex: 3
        },
        {
          id: 'bp-f-venue',
          type: 'text',
          content: 'YELLOW OVAL PARISH',
          x: 14, y: 368, width: 184, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#1A5278',
          zIndex: 3
        },
        {
          id: 'bp-f-address',
          type: 'text',
          content: '123 Garden Lane  ·  Suite 13502',
          x: 14, y: 390, width: 184, height: 18,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 12,
          textAlign: 'center',
          color: '#5A6E7D',
          zIndex: 3
        },
        {
          id: 'bp-f-rule2',
          type: 'svg',
          assetId: 'divider-sapphire-dot',
          x: 42, y: 424, width: 128, height: 12,
          color: '#1A5278',
          opacity: 0.5,
          zIndex: 3
        },
        {
          id: 'bp-f-rsvp',
          type: 'text',
          content: 'RSVP  ·  Bertha  ·  (987) 654-3210',
          x: 12, y: 450, width: 188, height: 20,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7,
          fontWeight: '600',
          letterSpacing: 0.8,
          textAlign: 'center',
          color: '#0E3F63',
          zIndex: 3
        },
        {
          id: 'bp-f-blessing',
          type: 'text',
          content: '"Let the little children come to Me"',
          x: 16, y: 500, width: 180, height: 28,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 11,
          textAlign: 'center',
          color: '#9AABBA',
          zIndex: 3
        }
      ],
      back: [
        {
          id: 'bp-b-emblem',
          type: 'svg',
          assetId: 'olive-sprig',
          x: 142, y: 52, width: 116, height: 52,
          color: '#1A5278',
          opacity: 0.85,
          zIndex: 3
        },
        {
          id: 'bp-b-title',
          type: 'text',
          content: 'BAPTISM DETAILS',
          x: 40, y: 130, width: 320, height: 26,
          fontFamily: "'Playfair Display', serif",
          fontSize: 16,
          fontWeight: '600',
          letterSpacing: 3.5,
          textAlign: 'center',
          color: '#1A5278',
          zIndex: 3
        },
        {
          id: 'bp-b-rule',
          type: 'svg',
          assetId: 'divider-sapphire-line',
          x: 100, y: 168, width: 200, height: 16,
          color: '#1A5278',
          opacity: 0.5,
          zIndex: 3
        },
        {
          id: 'bp-b-message',
          type: 'text',
          content: 'With joyful hearts we invite you\nto celebrate this sacred blessing.',
          x: 50, y: 200, width: 300, height: 50,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 17,
          lineHeight: 1.4,
          textAlign: 'center',
          color: '#4A5F6E',
          zIndex: 3
        },
        {
          id: 'bp-b-qr',
          type: 'qr-code',
          qrValue: 'https://example.com/baptism-rsvp',
          x: 160, y: 280, width: 80, height: 80,
          zIndex: 4
        },
        {
          id: 'bp-b-rsvp',
          type: 'text',
          content: 'SCAN TO RSVP',
          x: 40, y: 380, width: 320, height: 20,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          fontWeight: '600',
          letterSpacing: 3,
          textAlign: 'center',
          color: '#1A5278',
          zIndex: 3
        },
        {
          id: 'bp-b-footer',
          type: 'text',
          content: 'Reception to follow in the Parish Hall',
          x: 40, y: 430, width: 320, height: 20,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 13,
          textAlign: 'center',
          color: '#7A8B99',
          zIndex: 3
        }
      ]
    },
  
    // 16. Woodland Bear Star Baby Shower
    {
      id: 'woodland-bear-star-baby-shower',
      title: 'Woodland Bear Star Baby Shower',
      section: 'baby-christening',
      badge: 'Storybook Baby',
      style: 'Woodland Storybook / Celestial',
      bgTexture: 'texture-deckle',
      bgColor: '#F6F1E8',
      accentColor: '#B8956A',
      tags: ['Baby Shower', 'Stars', 'Woodland', 'Storybook', 'Gender Neutral'],
      description: 'A dreamy woodland storybook baby shower with floral corners, golden celestial motif, silk bow accent, and warm honey typography.',
      front: [
        // Decorative corner botanicals
        {
          id: 'ws-f-corner-tl',
          type: 'svg',
          assetId: 'wildflower-corner',
          x: -8, y: -6, width: 100, height: 100,
          color: '#A8B592',
          opacity: 0.8,
          zIndex: 2
        },
        {
          id: 'ws-f-corner-br',
          type: 'svg',
          assetId: 'wildflower-corner',
          x: 308, y: 466, width: 100, height: 100,
          color: '#A8B592',
          opacity: 0.8,
          rotation: 180,
          zIndex: 2
        },
        {
          id: 'ws-f-corner-tr',
          type: 'svg',
          assetId: 'olive-sprig',
          x: 275, y: 22, width: 95, height: 44,
          color: '#8FA07A',
          opacity: 0.65,
          rotation: -18,
          zIndex: 2
        },
        {
          id: 'ws-f-corner-bl',
          type: 'svg',
          assetId: 'olive-sprig',
          x: 30, y: 498, width: 95, height: 44,
          color: '#8FA07A',
          opacity: 0.65,
          rotation: 162,
          zIndex: 2
        },
        {
          id: 'ws-f-join',
          type: 'text',
          content: 'J O I N   U S   F O R   A',
          x: 40, y: 48, width: 320, height: 20,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7.5,
          fontWeight: '500',
          letterSpacing: 3.5,
          textAlign: 'center',
          color: '#6B5E4E',
          zIndex: 5
        },
        // Celestial motif (no circle / wreath)
        {
          id: 'ws-f-stars',
          type: 'svg',
          assetId: 'celestial-stars',
          x: 85, y: 78, width: 230, height: 130,
          color: '#D4A84B',
          opacity: 0.9,
          zIndex: 3
        },
        {
          id: 'ws-f-bow',
          type: 'svg',
          assetId: 'silk-bow',
          x: 168, y: 198, width: 64, height: 40,
          color: '#C4A06A',
          opacity: 0.85,
          zIndex: 4
        },
        {
          id: 'ws-f-title',
          type: 'text',
          content: 'BABY\nSHOWER',
          x: 40, y: 242, width: 320, height: 78,
          fontFamily: "'Bodoni Moda', serif",
          fontSize: 36,
          fontWeight: '500',
          lineHeight: 1.1,
          letterSpacing: 7,
          textAlign: 'center',
          color: '#A67C4A',
          zIndex: 5
        },
        {
          id: 'ws-f-rule',
          type: 'svg',
          assetId: 'flourish-divider',
          x: 110, y: 328, width: 180, height: 22,
          color: '#C4A06A',
          opacity: 0.75,
          zIndex: 5
        },
        {
          id: 'ws-f-honor',
          type: 'text',
          content: 'I N   H O N O R   O F',
          x: 40, y: 358, width: 320, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7,
          letterSpacing: 3.5,
          textAlign: 'center',
          color: '#7A6D5C',
          zIndex: 5
        },
        {
          id: 'ws-f-name',
          type: 'text',
          content: 'Rachelle Beaudry',
          x: 30, y: 380, width: 340, height: 42,
          fontFamily: "'Great Vibes', cursive",
          fontSize: 34,
          textAlign: 'center',
          color: '#3D3429',
          zIndex: 5
        },
        {
          id: 'ws-f-month',
          type: 'text',
          content: 'AUGUST',
          x: 48, y: 438, width: 90, height: 22,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 9,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#6B5E4E',
          zIndex: 5
        },
        {
          id: 'ws-f-day',
          type: 'text',
          content: '30',
          x: 150, y: 426, width: 100, height: 42,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 40,
          fontWeight: '500',
          textAlign: 'center',
          color: '#A67C4A',
          zIndex: 5
        },
        {
          id: 'ws-f-year',
          type: 'text',
          content: '2026',
          x: 262, y: 438, width: 90, height: 22,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 9,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#6B5E4E',
          zIndex: 5
        },
        {
          id: 'ws-f-rule2',
          type: 'svg',
          assetId: 'divider-wave',
          x: 100, y: 476, width: 200, height: 14,
          color: '#C4A06A',
          opacity: 0.55,
          zIndex: 5
        },
        {
          id: 'ws-f-location',
          type: 'text',
          content: '123 Anywhere Street  ·  Any City',
          x: 40, y: 498, width: 320, height: 18,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 13,
          textAlign: 'center',
          color: '#5C5348',
          zIndex: 5
        },
        {
          id: 'ws-f-rsvp',
          type: 'text',
          content: 'RSVP  ·  +123 456 7890',
          x: 40, y: 522, width: 320, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7.5,
          fontWeight: '600',
          letterSpacing: 1.5,
          textAlign: 'center',
          color: '#A67C4A',
          zIndex: 5
        }
      ],
      back: [
        {
          id: 'ws-b-stars',
          type: 'svg',
          assetId: 'celestial-stars',
          x: 100, y: 40, width: 200, height: 100,
          color: '#D4A84B',
          opacity: 0.65,
          zIndex: 2
        },
        {
          id: 'ws-b-title',
          type: 'text',
          content: 'BABY SHOWER DETAILS',
          x: 40, y: 130, width: 320, height: 26,
          fontFamily: "'Bodoni Moda', serif",
          fontSize: 15,
          letterSpacing: 3,
          textAlign: 'center',
          color: '#A67C4A',
          zIndex: 3
        },
        {
          id: 'ws-b-rule',
          type: 'svg',
          assetId: 'flourish-divider',
          x: 110, y: 165, width: 180, height: 22,
          color: '#C4A06A',
          opacity: 0.7,
          zIndex: 3
        },
        {
          id: 'ws-b-message',
          type: 'text',
          content: 'A little star is on the way.\nPlease join us for sweets, stories\n& soft woodland magic.',
          x: 50, y: 200, width: 300, height: 70,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 17,
          lineHeight: 1.4,
          textAlign: 'center',
          color: '#4A4138',
          zIndex: 3
        },
        {
          id: 'ws-b-qr',
          type: 'qr-code',
          qrValue: 'https://example.com/baby-shower-rsvp',
          x: 160, y: 295, width: 80, height: 80,
          zIndex: 4
        },
        {
          id: 'ws-b-rsvp',
          type: 'text',
          content: 'RSVP BY AUGUST 1',
          x: 40, y: 400, width: 320, height: 20,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          fontWeight: '600',
          letterSpacing: 3,
          textAlign: 'center',
          color: '#A67C4A',
          zIndex: 3
        },
        {
          id: 'ws-b-footer',
          type: 'text',
          content: 'Games  ·  Gifts  ·  Gentle Joy',
          x: 40, y: 445, width: 320, height: 20,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 13,
          textAlign: 'center',
          color: '#8A7D6C',
          zIndex: 3
        }
      ]
    },
  
      // =========================================================================
    // SECTION 4: ENGAGEMENT PARTY SUITES (3 TEMPLATES)
    // =========================================================================
  
    // 16. Samira & Murad Emerald Botanical Gold Suite (Exact User Image 2 Match)
    {
      id: 'samira-murad-emerald-wreath',
      title: 'Samira & Murad Emerald Botanical Gold Suite',
      section: 'engagement-party',
      badge: 'Gilded Emerald',
      style: 'Botanical Foliage & Gold Ring Wreath',
      bgImage: 'assets/backgrounds/emerald_gold_wreath_engagement.jpg',
      bgColor: '#0B1B18',
      accentColor: '#E6CA65',
      tags: ['Samira & Murad', 'Engagement Party', 'Emerald Green', 'Gold Wreath', 'Photo Wreath', 'South Asian Wedding'],
      description: 'Opulent dark emerald and shimmering gold botanical wreath invitation with circular photo cameo, arched header calligraphy, and gilded typography.',
      front: [
        {
          id: 'sm-f-header',
          type: 'text',
          content: "YOU'RE INVITED TO OUR WEDDING!",
          x: 65, y: 42, width: 270, height: 30,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 18,
          fontWeight: '500',
          letterSpacing: 1.2,
          noWrap: true,
          textAlign: 'center',
          color: '#E6CA65',
          zIndex: 3
        },
        {
          id: 'sm-f-photo',
          type: 'image',
          src: 'assets/photos/samira_murad_photo.jpg',
          mask: 'mask-oval',
          x: 105, y: 105, width: 190, height: 190,
          zIndex: 2
        },
        {
          id: 'sm-f-names',
          type: 'text',
          content: 'Samira & Murad',
          x: 55, y: 334, width: 290, height: 48,
          fontFamily: "'Pinyon Script', cursive",
          fontSize: 38,
          noWrap: true,
          textAlign: 'center',
          color: '#E6CA65',
          zIndex: 3
        },
        {
          id: 'sm-f-date-col',
          type: 'text',
          content: 'MARCH   |   09   |   2023',
          x: 55, y: 392, width: 290, height: 24,
          fontFamily: "'Playfair Display', serif",
          fontSize: 12,
          fontWeight: '500',
          letterSpacing: 2.5,
          textAlign: 'center',
          color: '#D4E2DC',
          zIndex: 3
        },
        {
          id: 'sm-f-time',
          type: 'text',
          content: 'ON THURSDAY AT 5 PM',
          x: 60, y: 436, width: 280, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 9.5,
          fontWeight: '500',
          letterSpacing: 2.5,
          textAlign: 'center',
          color: '#A2BCB0',
          zIndex: 3
        },
        {
          id: 'sm-f-address',
          type: 'text',
          content: '123 ANYWHERE ST., ANYCITY, ST 12345',
          x: 60, y: 462, width: 280, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 9,
          fontWeight: '500',
          letterSpacing: 1.2,
          textAlign: 'center',
          color: '#A2BCB0',
          zIndex: 3
        }
      ],
      back: [
        {
          id: 'sm-b-crest',
          type: 'svg',
          assetId: 'olive-wreath',
          x: 175, y: 55, width: 50, height: 50,
          color: '#E6CA65',
          zIndex: 2
        },
        {
          id: 'sm-b-title',
          type: 'text',
          content: 'CELEBRATION OF SAMIRA & MURAD',
          x: 40, y: 125, width: 320, height: 22,
          fontFamily: "'Playfair Display', serif",
          fontSize: 11,
          fontWeight: '600',
          letterSpacing: 2.5,
          textAlign: 'center',
          color: '#E6CA65',
          zIndex: 3
        },
        {
          id: 'sm-b-desc',
          type: 'text',
          content: 'Together with their families, invite you to share in the joy of their engagement & wedding festivities.\nTraditional Banquet & Musical Soirée\nThe Grand Botanic Pavilion • Houston, TX',
          x: 45, y: 160, width: 310, height: 55,
          fontFamily: "'Playfair Display', serif",
          fontSize: 9.5,
          fontWeight: '500',
          textAlign: 'center',
          color: '#D4E2DC',
          zIndex: 3
        },
        {
          id: 'sm-b-qr',
          type: 'qr-code',
          qrValue: 'https://samiraandmurad.com',
          x: 160, y: 240, width: 80, height: 80,
          zIndex: 4
        },
        {
          id: 'sm-b-rsvp',
          type: 'text',
          content: 'PLEASE SCAN TO RSVP BY FEBRUARY 15TH\nSAMIRAANDMURAD.COM',
          x: 40, y: 335, width: 320, height: 30,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#E6CA65',
          zIndex: 3
        }
      ]
    },
  
    // 17. Sophia & Richard Champagne Confetti Engagement Suite (Exact User Image 3 Match)
    {
      id: 'sophia-richard-champagne-glitz',
      title: 'Sophia & Richard Champagne Confetti Engagement Suite',
      section: 'engagement-party',
      badge: 'Foil Confetti',
      style: 'Golden Bokeh & Floating Confetti Celebration',
      bgImage: 'assets/backgrounds/champagne_gold_confetti_engagement.jpg',
      bgColor: '#FBF7F0',
      accentColor: '#B38728',
      tags: ['Sophia & Richard', 'Engagement Party', 'Champagne Gold', 'Glitter Confetti', 'Photo Invitation', 'Milestone Celebration'],
      description: 'Radiant champagne ivory engagement invitation featuring floating golden bokeh confetti dots, modern couple photo framing, and metallic gold celebration typography.',
      front: [
        {
          id: 'sr-f-title1',
          type: 'text',
          content: 'We are',
          x: 70, y: 92, width: 260, height: 26,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 25,
          fontWeight: '600',
          letterSpacing: 1.5,
          noWrap: true,
          textAlign: 'center',
          color: '#3F291B',
          zIndex: 3
        },
        {
          id: 'sr-f-title2',
          type: 'text',
          content: 'engaged',
          x: 60, y: 114, width: 280, height: 42,
          fontFamily: "'Pinyon Script', cursive",
          fontSize: 42,
          fontWeight: '500',
          letterSpacing: 0.8,
          noWrap: true,
          textAlign: 'center',
          color: '#8A5B24',
          zIndex: 3
        },
        {
          id: 'sr-f-photo',
          type: 'image',
          src: 'assets/photos/sophia_richard_photo.jpg',
          mask: 'mask-rectangle',
          x: 102, y: 166, width: 196, height: 188,
          zIndex: 2
        },
        {
          id: 'sr-f-names',
          type: 'text',
          content: 'SOPHIA & RICHARD',
          x: 55, y: 366, width: 290, height: 22,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 13,
          fontWeight: '600',
          letterSpacing: 3,
          textAlign: 'center',
          color: '#6F431C',
          zIndex: 3
        },
        {
          id: 'sr-f-invite',
          type: 'text',
          content: 'PLEASE JOIN US TO CELEBRATE THIS\nEXCITING MILESTONE ON',
          x: 60, y: 398, width: 280, height: 28,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8.5,
          fontWeight: '500',
          letterSpacing: 1.5,
          lineHeight: 1.4,
          textAlign: 'center',
          color: '#4A3020',
          zIndex: 3
        },
        {
          id: 'sr-f-datetime',
          type: 'text',
          content: '-  SEP | 20 | 6PM  -',
          x: 60, y: 432, width: 280, height: 20,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 10,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#8A5B24',
          zIndex: 3
        },
        {
          id: 'sr-f-address-rsvp',
          type: 'text',
          content: '707 WALNUT AVE, COLUMBUS, OH 43215, USA\nRSVP BY 9/15 AT +1 012 345 6789',
          x: 50, y: 458, width: 300, height: 30,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          fontWeight: '500',
          letterSpacing: 1.2,
          lineHeight: 1.4,
          textAlign: 'center',
          color: '#4A3020',
          zIndex: 3
        }
      ],
      back: [
        {
          id: 'sr-b-crest',
          type: 'svg',
          assetId: 'champagne-coupe',
          x: 175, y: 55, width: 50, height: 50,
          color: '#C59B3F',
          zIndex: 2
        },
        {
          id: 'sr-b-title',
          type: 'text',
          content: 'SOPHIA & RICHARD CELEBRATION',
          x: 40, y: 125, width: 320, height: 22,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 10,
          fontWeight: '600',
          letterSpacing: 2.5,
          textAlign: 'center',
          color: '#A67C28',
          zIndex: 3
        },
        {
          id: 'sr-b-desc',
          type: 'text',
          content: 'Join us on the rooftop terrace for sunset drinks, grazing tables, and dancing as we celebrate our engagement!\nDress Code: Festive Chic\nThe Skyline Loft • Columbus, OH',
          x: 45, y: 160, width: 310, height: 55,
          fontFamily: "'Playfair Display', serif",
          fontSize: 9.5,
          fontWeight: '500',
          textAlign: 'center',
          color: '#4A3F30',
          zIndex: 3
        },
        {
          id: 'sr-b-qr',
          type: 'qr-code',
          qrValue: 'https://sophiaandrichard.com',
          x: 160, y: 240, width: 80, height: 80,
          zIndex: 4
        },
        {
          id: 'sr-b-rsvp',
          type: 'text',
          content: 'KINDLY RSVP BY SEPTEMBER 15TH\nSOPHIAANDRICHARD.COM',
          x: 40, y: 335, width: 320, height: 30,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#A67C28',
          zIndex: 3
        }
      ]
    },
  
    {
      id: 'burgundy-botanical-engagement-invite',
      title: 'Burgundy Botanical Engagement Party',
      section: 'engagement-party',
      badge: 'Reference Match',
      style: 'Warm Ivory Botanical & Editorial Script',
      bgImage: 'assets/backgrounds/mughal_burgundy_arch.jpg',
      bgColor: '#F7EFE4',
      accentColor: '#6F1D2A',
      tags: ['Burgundy Botanicals', 'Engagement Party', 'Warm Ivory', 'Couple Photo', 'Editorial Script', 'Reference Match'],
      description: 'Warm ivory engagement invitation with burgundy botanical framing, elegant right-column typography, and an editable couple portrait area.',
      front: [
        {
          id: 'be-f-photo',
          type: 'image',
          src: 'assets/photos/samira_murad_photo.jpg',
          mask: 'mask-rectangle',
          x: 8, y: 336, width: 156, height: 216,
          zIndex: 2
        },
        {
          id: 'be-f-title1',
          type: 'text',
          content: 'ENGAGEMENT',
          x: 190, y: 90, width: 185, height: 30,
          fontFamily: "'Playfair Display', serif",
          fontSize: 22,
          fontWeight: '600',
          letterSpacing: 3.5,
          noWrap: true,
          textAlign: 'center',
          color: '#3D1B22',
          zIndex: 3
        },
        {
          id: 'be-f-title2',
          type: 'text',
          content: 'PARTY',
          x: 210, y: 120, width: 145, height: 28,
          fontFamily: "'Playfair Display', serif",
          fontSize: 21,
          fontWeight: '600',
          letterSpacing: 4,
          noWrap: true,
          textAlign: 'center',
          color: '#3D1B22',
          zIndex: 3
        },
        {
          id: 'be-f-honor',
          type: 'text',
          content: 'To celebrate the engagement of',
          x: 195, y: 158, width: 175, height: 22,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 12,
          textAlign: 'center',
          color: '#6F5A4D',
          zIndex: 3
        },
        {
          id: 'be-f-name1',
          type: 'text',
          content: 'Lorena',
          x: 190, y: 190, width: 180, height: 48,
          fontFamily: "'Pinyon Script', cursive",
          fontSize: 39,
          noWrap: true,
          textAlign: 'center',
          color: '#7A1F2B',
          zIndex: 3
        },
        {
          id: 'be-f-and',
          type: 'text',
          content: '&',
          x: 270, y: 230, width: 24, height: 22,
          fontFamily: "'Playfair Display', serif",
          fontSize: 17,
          fontStyle: 'italic',
          textAlign: 'center',
          color: '#A7794E',
          zIndex: 3
        },
        {
          id: 'be-f-name2',
          type: 'text',
          content: 'Faith',
          x: 190, y: 244, width: 180, height: 48,
          fontFamily: "'Pinyon Script', cursive",
          fontSize: 39,
          noWrap: true,
          textAlign: 'center',
          color: '#7A1F2B',
          zIndex: 3
        },
        {
          id: 'be-f-req-lead',
          type: 'text',
          content: 'REQUEST THE HONOUR',
          x: 200, y: 306, width: 170, height: 24,
          fontFamily: "'Pinyon Script', cursive",
          fontSize: 20,
          letterSpacing: 0.4,
          textAlign: 'center',
          color: '#7A1F2B',
          zIndex: 3
        },
        {
          id: 'be-f-req-detail',
          type: 'text',
          content: 'OF YOUR PRESENCE\nAT THEIR WEDDING',
          x: 200, y: 332, width: 170, height: 32,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7.5,
          fontWeight: '500',
          letterSpacing: 1.6,
          lineHeight: 1.35,
          textAlign: 'center',
          color: '#4B3A32',
          zIndex: 3
        },
        {
          id: 'be-f-date',
          type: 'text',
          content: 'SUNDAY\n21 DEC 2026',
          x: 205, y: 370, width: 160, height: 38,
          fontFamily: "'Playfair Display', serif",
          fontSize: 10,
          fontWeight: '600',
          letterSpacing: 2,
          lineHeight: 1.45,
          textAlign: 'center',
          color: '#3D1B22',
          zIndex: 3
        },
        {
          id: 'be-f-venue',
          type: 'text',
          content: 'FAISAL MOSQUE\nISLAMABAD',
          x: 205, y: 418, width: 160, height: 32,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7.5,
          fontWeight: '600',
          letterSpacing: 1.8,
          lineHeight: 1.4,
          textAlign: 'center',
          color: '#4B3A32',
          zIndex: 3
        },
        {
          id: 'be-f-time',
          type: 'text',
          content: '7:00 PM ONWARDS',
          x: 205, y: 462, width: 160, height: 20,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7,
          letterSpacing: 1.5,
          textAlign: 'center',
          color: '#6F5A4D',
          zIndex: 3
        },
      ],
      back: [
        {
          id: 'be-b-title',
          type: 'text',
          content: 'ENGAGEMENT PARTY DETAILS',
          x: 40, y: 78, width: 320, height: 24,
          fontFamily: "'Playfair Display', serif",
          fontSize: 13,
          fontWeight: '600',
          letterSpacing: 2.5,
          textAlign: 'center',
          color: '#3D1B22',
          zIndex: 3
        },
        {
          id: 'be-b-desc',
          type: 'text',
          content: 'Join us for an evening of celebration, family and new beginnings.\nDress Code: Festive Formal\nFaisal Mosque • Islamabad',
          x: 45, y: 130, width: 310, height: 55,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 12,
          textAlign: 'center',
          color: '#4B3A32',
          zIndex: 3
        },
        {
          id: 'be-b-qr',
          type: 'qr-code',
          qrValue: 'https://engagement-party.example/rsvp',
          x: 160, y: 250, width: 80, height: 80,
          zIndex: 4
        },
        {
          id: 'be-b-rsvp',
          type: 'text',
          content: 'KINDLY RSVP\nENGAGEMENT-PARTY.COM',
          x: 55, y: 355, width: 290, height: 32,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#7A1F2B',
          zIndex: 3
        }
      ]
    },
  
    // 19. Zainab & Hamza Crimson Arch & Ring Suite (Exact User Image 1 Match)
    {
      id: 'zainab-hamza-crimson-rings',
      title: 'Zainab & Hamza Crimson Arch & Ring Suite',
      section: 'engagement-party',
      badge: 'Pakistani Luxury',
      style: 'Crimson Velvet & Gilded Double Rings',
      bgImage: 'assets/backgrounds/zainab_hamza_crimson_rings.jpg',
      bgColor: '#580B1E',
      accentColor: '#F3A8B8',
      tags: ['Zainab & Hamza', 'Engagement Party', 'Crimson Velvet', 'Interlocking Rings', 'Arch Canopy', 'Pakistani Wedding'],
      description: 'Deep crimson velvet luxury engagement invitation with delicate floral arch canopy, interlocking gold twin rings, and elegant Karachi wedding typography.',
      front: [
        {
          id: 'zh-c-top-script',
          type: 'text',
          content: "We're Engaged",
          x: 50, y: 92, width: 300, height: 38,
          fontFamily: "'Pinyon Script', cursive",
          fontSize: 34,
          fontWeight: '400',
          textAlign: 'center',
          color: '#FFFFFF',
          zIndex: 3
        },
        {
          id: 'zh-c-families',
          type: 'text',
          content: 'TOGETHER WITH THEIR FAMILIES',
          x: 40, y: 212, width: 320, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8.5,
          fontWeight: '600',
          letterSpacing: 2.2,
          textAlign: 'center',
          color: '#F9D8DE',
          zIndex: 3
        },
        {
          id: 'zh-c-names',
          type: 'text',
          content: 'ZAINAB & HAMZA',
          x: 30, y: 234, width: 340, height: 28,
          fontFamily: "'Playfair Display', serif",
          fontSize: 21,
          fontWeight: '700',
          letterSpacing: 1.5,
          textAlign: 'center',
          color: '#FFFFFF',
          zIndex: 3
        },
        {
          id: 'zh-c-invite',
          type: 'text',
          content: 'INVITE YOU TO THEIR WEDDING',
          x: 40, y: 266, width: 320, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 10,
          fontWeight: '600',
          letterSpacing: 2.5,
          textAlign: 'center',
          color: '#FFFFFF',
          zIndex: 3
        },
        {
          id: 'zh-c-divider',
          type: 'text',
          content: '•   ⭑   •',
          x: 160, y: 288, width: 80, height: 16,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 10,
          textAlign: 'center',
          color: '#F3A8B8',
          zIndex: 3
        },
        {
          id: 'zh-c-date',
          type: 'text',
          content: 'Saturday, 20 December 2026',
          x: 40, y: 308, width: 320, height: 22,
          fontFamily: "'Playfair Display', serif",
          fontSize: 13,
          fontWeight: '600',
          letterSpacing: 0.8,
          textAlign: 'center',
          color: '#FFFFFF',
          zIndex: 3
        },
        {
          id: 'zh-c-time',
          type: 'text',
          content: '7:00 PM onwards',
          x: 50, y: 332, width: 300, height: 20,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 11.5,
          fontWeight: '700',
          textAlign: 'center',
          color: '#FFFFFF',
          zIndex: 3
        },
        {
          id: 'zh-c-venue',
          type: 'text',
          content: 'The Pearl Grand',
          x: 40, y: 358, width: 320, height: 24,
          fontFamily: "'Playfair Display', serif",
          fontSize: 15,
          fontWeight: '700',
          letterSpacing: 0.5,
          textAlign: 'center',
          color: '#FFFFFF',
          zIndex: 3
        },
        {
          id: 'zh-c-city',
          type: 'text',
          content: 'Karachi',
          x: 50, y: 382, width: 300, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 10.5,
          fontWeight: '500',
          letterSpacing: 1.5,
          textAlign: 'center',
          color: '#F9D8DE',
          zIndex: 3
        },
        {
          id: 'zh-c-attire',
          type: 'text',
          content: 'ATTIRE: Here begins our forever',
          x: 40, y: 406, width: 320, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8.5,
          letterSpacing: 0.8,
          textAlign: 'center',
          color: '#FFFFFF',
          zIndex: 3
        },
        {
          id: 'zh-c-rsvp',
          type: 'text',
          content: 'RSVP: Family Coordinator - +92 300 1234567',
          x: 30, y: 426, width: 340, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8.5,
          letterSpacing: 0.5,
          textAlign: 'center',
          color: '#FFFFFF',
          zIndex: 3
        },
        {
          id: 'zh-c-tagline',
          type: 'text',
          content: 'Different Place Same Love',
          x: 50, y: 448, width: 300, height: 20,
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          fontSize: 9.5,
          textAlign: 'center',
          color: '#F9D8DE',
          zIndex: 3
        }
      ],
      back: [
        {
          id: 'zh-c-b-crest',
          type: 'svg',
          assetId: 'monogram-octagonal',
          x: 175, y: 55, width: 50, height: 50,
          color: '#F3A8B8',
          zIndex: 2
        },
        {
          id: 'zh-c-b-title',
          type: 'text',
          content: 'CELEBRATING ZAINAB & HAMZA',
          x: 40, y: 125, width: 320, height: 22,
          fontFamily: "'Playfair Display', serif",
          fontSize: 12,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#FFFFFF',
          zIndex: 3
        },
        {
          id: 'zh-c-b-desc',
          type: 'text',
          content: 'Join us for an unforgettable evening celebrating our engagement with traditional dinner, music & cherished memories.\nDress Code: Elegant Festive Formal\nThe Pearl Grand • Karachi, Pakistan',
          x: 45, y: 160, width: 310, height: 55,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 11,
          lineHeight: 1.4,
          textAlign: 'center',
          color: '#F9D8DE',
          zIndex: 3
        },
        {
          id: 'zh-c-b-qr',
          type: 'qr-code',
          qrValue: 'https://zainabandhamza.com',
          x: 160, y: 240, width: 80, height: 80,
          zIndex: 4
        },
        {
          id: 'zh-c-b-rsvp',
          type: 'text',
          content: 'PLEASE SCAN TO RSVP BY DECEMBER 5TH\nZAINABANDHAMZA.COM',
          x: 40, y: 335, width: 320, height: 30,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#F3A8B8',
          zIndex: 3
        }
      ]
    },
  
    // 20. Zainab & Hamza Amber Gold Celebration Suite
    {
      id: 'zainab-hamza-amber-gold',
      title: 'Zainab & Hamza Amber Gold Celebration Suite',
      section: 'engagement-party',
      badge: 'Terracotta Gold',
      style: 'Warm Amber & Golden Confetti Soirée',
      bgImage: 'assets/backgrounds/zainab_hamza_amber_gold.jpg',
      bgColor: '#883E0D',
      accentColor: '#E6BE72',
      tags: ['Zainab & Hamza', 'Engagement Party', 'Amber Gold', 'Confetti', 'Pakistani Wedding', 'Star Ring Emblem'],
      description: 'Warm amber terracotta celebration invitation with refined golden star-and-ring emblem, confetti flakes, and luminous gold script typography.',
      front: [
        {
          id: 'zh-a-eyebrow',
          type: 'text',
          content: 'E N G A G E M E N T   C E L E B R A T I O N',
          x: 35, y: 195, width: 330, height: 16,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7.5,
          fontWeight: '600',
          letterSpacing: 3,
          noWrap: true,
          textAlign: 'center',
          color: '#F0D78C',
          zIndex: 3
        },
        {
          id: 'zh-a-families',
          type: 'text',
          content: 'together with their families',
          x: 50, y: 218, width: 300, height: 16,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 13,
          textAlign: 'center',
          color: '#FBE4BF',
          zIndex: 3
        },
        {
          id: 'zh-a-name1',
          type: 'text',
          content: 'Zainab',
          x: 30, y: 240, width: 340, height: 48,
          fontFamily: "'Great Vibes', cursive",
          fontSize: 46,
          noWrap: true,
          textAlign: 'center',
          color: '#FFF8EC',
          isFoil: true,
          zIndex: 3
        },
        {
          id: 'zh-a-and',
          type: 'text',
          content: '&',
          x: 50, y: 284, width: 300, height: 22,
          fontFamily: "'Cinzel', serif",
          fontSize: 16,
          textAlign: 'center',
          color: '#E6BE72',
          zIndex: 3
        },
        {
          id: 'zh-a-name2',
          type: 'text',
          content: 'Hamza',
          x: 30, y: 300, width: 340, height: 48,
          fontFamily: "'Great Vibes', cursive",
          fontSize: 46,
          noWrap: true,
          textAlign: 'center',
          color: '#FFF8EC',
          isFoil: true,
          zIndex: 3
        },
        {
          id: 'zh-a-invite',
          type: 'text',
          content: 'invite you to an evening of golden joy',
          x: 40, y: 352, width: 320, height: 20,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 14,
          textAlign: 'center',
          color: '#F0D78C',
          zIndex: 3
        },
        {
          id: 'zh-a-rule',
          type: 'svg',
          assetId: 'flourish-divider',
          x: 120, y: 376, width: 160, height: 18,
          color: '#E6BE72',
          opacity: 0.9,
          zIndex: 3
        },
        {
          id: 'zh-a-day',
          type: 'text',
          content: '20',
          x: 150, y: 396, width: 100, height: 36,
          fontFamily: "'Playfair Display', serif",
          fontSize: 34,
          fontWeight: '700',
          textAlign: 'center',
          color: '#FFFFFF',
          isFoil: true,
          zIndex: 3
        },
        {
          id: 'zh-a-monthyear',
          type: 'text',
          content: 'D E C E M B E R   ·   2 0 2 6',
          x: 50, y: 436, width: 300, height: 16,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8.5,
          fontWeight: '600',
          letterSpacing: 2,
          noWrap: true,
          textAlign: 'center',
          color: '#FBE4BF',
          zIndex: 3
        },
        {
          id: 'zh-a-weekday',
          type: 'text',
          content: 'SATURDAY  ·  7:00 PM ONWARDS',
          x: 40, y: 460, width: 320, height: 16,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          fontWeight: '600',
          letterSpacing: 2,
          noWrap: true,
          textAlign: 'center',
          color: '#F0D78C',
          zIndex: 3
        },
        {
          id: 'zh-a-venue',
          type: 'text',
          content: 'THE PEARL GRAND',
          x: 40, y: 488, width: 320, height: 18,
          fontFamily: "'Playfair Display', serif",
          fontSize: 14,
          fontWeight: '700',
          letterSpacing: 3,
          noWrap: true,
          textAlign: 'center',
          color: '#FFFFFF',
          zIndex: 3
        },
        {
          id: 'zh-a-city',
          type: 'text',
          content: 'KARACHI',
          x: 50, y: 510, width: 300, height: 14,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8.5,
          fontWeight: '500',
          letterSpacing: 4,
          noWrap: true,
          textAlign: 'center',
          color: '#FBE4BF',
          zIndex: 3
        }
      ],
      back: [
        {
          id: 'zh-a-b-rule',
          type: 'svg',
          assetId: 'flourish-divider',
          x: 120, y: 60, width: 160, height: 22,
          color: '#E6BE72',
          zIndex: 2
        },
        {
          id: 'zh-a-b-title',
          type: 'text',
          content: 'CELEBRATION DETAILS',
          x: 40, y: 100, width: 320, height: 24,
          fontFamily: "'Playfair Display', serif",
          fontSize: 14,
          fontWeight: '600',
          letterSpacing: 3,
          noWrap: true,
          textAlign: 'center',
          color: '#FFFFFF',
          zIndex: 3
        },
        {
          id: 'zh-a-b-desc',
          type: 'text',
          content: 'Join us under golden lights for an evening\nof celebration, toasts & heartfelt joy.',
          x: 45, y: 140, width: 310, height: 48,
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 15,
          lineHeight: 1.4,
          textAlign: 'center',
          color: '#FBE4BF',
          zIndex: 3
        },
        {
          id: 'zh-a-b-attire',
          type: 'text',
          content: 'DRESS CODE  ·  FESTIVE CHIC',
          x: 40, y: 200, width: 320, height: 16,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          fontWeight: '600',
          letterSpacing: 2.5,
          noWrap: true,
          textAlign: 'center',
          color: '#E6BE72',
          zIndex: 3
        },
        {
          id: 'zh-a-b-qr',
          type: 'qr-code',
          qrValue: 'https://zainabandhamza.com',
          x: 160, y: 250, width: 80, height: 80,
          zIndex: 4
        },
        {
          id: 'zh-a-b-rsvp',
          type: 'text',
          content: 'KINDLY RSVP BY DECEMBER 5TH',
          x: 40, y: 355, width: 320, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          fontWeight: '600',
          letterSpacing: 2.5,
          noWrap: true,
          textAlign: 'center',
          color: '#E6BE72',
          zIndex: 3
        },
        {
          id: 'zh-a-b-contact',
          type: 'text',
          content: 'Family Coordinator  ·  +92 300 1234567',
          x: 40, y: 385, width: 320, height: 16,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 13,
          textAlign: 'center',
          color: '#FBE4BF',
          zIndex: 3
        }
      ]
    },
  
    // =========================================================================
    // SECTION 5: BRIDAL SHOWER & BACHELORETTE (5 TEMPLATES)
    // =========================================================================
  
    // 19. Imperial Ivory & Sculpted Floral Suite (User Image 1 Match)
    {
      id: 'imperial-ivory-embossed-floral',
      title: 'Imperial Ivory & Sculpted Floral Suite',
      section: 'bridal-shower',
      badge: 'Ultra Creative',
      style: '3D Bas-Relief & Gold Leaf',
      bgImage: 'assets/backgrounds/embossed_ivory_floral.jpg',
      bgColor: '#FAF8F3',
      accentColor: '#9B7020',
      tags: ['Embossed Florals', 'Gold Foil Leaf', 'Bismillah Crest', 'Sculpted Border', 'Bridal Shower', 'Luxury Ivory'],
      description: 'Sculpted 3D ivory porcelain camellias in the four corners, thin gold filigree perimeter frame, Bismillah calligraphy crest, and structured triple-column date grid.',
      front: [
        {
          id: 'bs1-f-bismillah',
          type: 'svg',
          assetId: 'bismillah-crest',
          x: 130, y: 62, width: 140, height: 32,
          color: '#9B7020',
          zIndex: 2
        },
        {
          id: 'bs1-f-name1',
          type: 'text',
          content: 'Ayesha & Hamza',
          x: 85, y: 136, width: 230, height: 60,
          fontFamily: "'Pinyon Script', cursive",
          fontSize: 31,
          fontWeight: '600',
          letterSpacing: 0.5,
          noWrap: true,
          textAlign: 'center',
          color: '#181109',
          zIndex: 3
        },
        {
          id: 'bs1-f-req',
          type: 'text',
          content: 'CORDIALLY REQUEST THE HONOUR OF YOUR PRESENCE\nAT THE CELEBRATION OF THEIR WEDDING & BRIDAL SHOWER',
          x: 65, y: 230, width: 270, height: 28,
          fontFamily: "'Cinzel', serif",
          fontSize: 7.5,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#24190E',
          zIndex: 3
        },
        {
          id: 'bs1-f-flourish',
          type: 'svg',
          assetId: 'flourish-divider',
          x: 150, y: 298, width: 100, height: 16,
          color: '#9B7020',
          zIndex: 2
        },
        // Triple Column Date Box
        {
          id: 'bs1-f-day',
          type: 'text',
          content: 'SATURDAY',
          x: 70, y: 324, width: 75, height: 30,
          fontFamily: "'Cinzel', serif",
          fontSize: 8.5,
          fontWeight: 'bold',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#181109',
          zIndex: 3
        },
        {
          id: 'bs1-f-col1',
          type: 'svg',
          assetId: 'vertical-divider',
          x: 147, y: 323, width: 4, height: 32,
          color: '#9B7020',
          zIndex: 2
        },
        {
          id: 'bs1-f-date',
          type: 'text',
          content: 'OCTOBER 24',
          x: 153, y: 322, width: 94, height: 32,
          fontFamily: "'Playfair Display', serif",
          fontSize: 13,
          fontWeight: 'bold',
          letterSpacing: 1.5,
          textAlign: 'center',
          color: '#181109',
          zIndex: 3
        },
        {
          id: 'bs1-f-col2',
          type: 'svg',
          assetId: 'vertical-divider',
          x: 249, y: 323, width: 4, height: 32,
          color: '#9B7020',
          zIndex: 2
        },
        {
          id: 'bs1-f-time',
          type: 'text',
          content: 'AT 5:00 PM',
          x: 255, y: 324, width: 75, height: 30,
          fontFamily: "'Cinzel', serif",
          fontSize: 8.5,
          fontWeight: 'bold',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#181109',
          zIndex: 3
        },
        {
          id: 'bs1-f-venue',
          type: 'text',
          content: 'THE GLASS PAVILION AT THE BILTMORE ESTATE\nONE LODGE STREET, ASHEVILLE, NORTH CAROLINA',
          x: 65, y: 375, width: 270, height: 32,
          fontFamily: "'Cinzel', serif",
          fontSize: 8,
          fontWeight: '600',
          letterSpacing: 1.8,
          textAlign: 'center',
          color: '#24190E',
          zIndex: 3
        },
        {
          id: 'bs1-f-rsvp',
          type: 'text',
          content: 'DINNER & RECEPTION TO FOLLOW\nR.S.V.P. BY OCTOBER FIRST',
          x: 65, y: 422, width: 270, height: 26,
          fontFamily: "'Cinzel', serif",
          fontSize: 7.5,
          fontWeight: 'bold',
          letterSpacing: 2.2,
          textAlign: 'center',
          color: '#9B7020',
          zIndex: 3
        }
      ],
      back: [
        {
          id: 'bs1-b-seal',
          type: 'wax-seal',
          assetId: 'wax-olive',
          x: 174, y: 55, width: 52, height: 52,
          zIndex: 2
        },
        {
          id: 'bs1-b-hdr',
          type: 'text',
          content: 'CELEBRATION DETAILS & REGISTRY',
          x: 50, y: 120, width: 300, height: 25,
          fontFamily: "'Cinzel', serif",
          fontSize: 11,
          fontWeight: 'bold',
          letterSpacing: 3,
          textAlign: 'center',
          color: '#181109',
          zIndex: 3
        },
        {
          id: 'bs1-b-txt',
          type: 'text',
          content: 'Kindly join us for an evening of blessings, dinner and joyous celebration.\nDress Code: Formal Black Tie & Traditional Elegance.\nValet parking provided at the main pavilion entrance.',
          x: 50, y: 155, width: 300, height: 60,
          fontFamily: "'Playfair Display', serif",
          fontSize: 9,
          fontWeight: '500',
          textAlign: 'center',
          color: '#24190E',
          zIndex: 3
        },
        {
          id: 'bs1-b-qr',
          type: 'qr-code',
          qrValue: 'https://ayeshaandhamza.com',
          x: 160, y: 240, width: 80, height: 80,
          zIndex: 4
        },
        {
          id: 'bs1-b-scan',
          type: 'text',
          content: 'SCAN TO RSVP & VIEW WEDDING REGISTRY\nAYESHAANDHAMZA.COM',
          x: 50, y: 335, width: 300, height: 28,
          fontFamily: "'Cinzel', serif",
          fontSize: 8,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#24190E',
          zIndex: 3
        }
      ]
    },
  
    // 20. Parisian Charcoal Silk Ribbon & Minimalist Script (Redesigned Zero-Overlap Chic)
    {
      id: 'charcoal-silk-ribbon-minimalist',
      title: 'Parisian Charcoal Silk Ribbon & Script',
      section: 'bridal-shower',
      badge: 'Coquette Chic',
      style: 'Modern Editorial Silk Bow',
      bgImage: 'assets/backgrounds/charcoal_silk_bow.jpg',
      bgColor: '#FAF9F6',
      accentColor: '#1A1A1A',
      tags: ['Silk Bow', 'Charcoal Watercolor', 'Coquette Aesthetic', 'Bridal Shower', 'Minimalist Typography', 'Parisian Chic'],
      description: 'Dainty hand-painted charcoal organza silk ribbon bow crowning the top header, with graceful spaced French typography in the pristine open paper below.',
      front: [
        {
          id: 'cs2-f-border',
          type: 'svg',
          assetId: 'double-hairline',
          x: 20, y: 18, width: 360, height: 520,
          color: '#1A1A1A',
          opacity: 0.32,
          zIndex: 1
        },
        {
          id: 'cs2-f-top-flourish',
          type: 'svg',
          assetId: 'flourish-divider',
          x: 135, y: 112, width: 130, height: 24,
          color: '#1A1A1A',
          opacity: 0.38,
          zIndex: 2
        },
        {
          id: 'cs2-f-title',
          type: 'text',
          content: 'Bridal Shower',
          x: 30, y: 170, width: 340, height: 60,
          fontFamily: "'Alex Brush', cursive",
          fontSize: 48,
          letterSpacing: 1,
          noWrap: true,
          textAlign: 'center',
          color: '#111111',
          zIndex: 3
        },
        {
          id: 'cs2-f-honoring',
          type: 'text',
          content: 'HONORING',
          x: 40, y: 246, width: 320, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7.5,
          fontWeight: '600',
          letterSpacing: 4.5,
          textAlign: 'center',
          color: '#555555',
          zIndex: 3
        },
        {
          id: 'cs2-f-name1',
          type: 'text',
          content: 'ELIZABETH MARKS',
          x: 30, y: 272, width: 340, height: 36,
          fontFamily: "'Playfair Display', serif",
          fontSize: 24,
          letterSpacing: 4.5,
          fontWeight: '700',
          textAlign: 'center',
          color: '#111111',
          zIndex: 3
        },
        {
          id: 'cs2-f-details',
          type: 'text',
          content: "SATURDAY, JUNE 20TH\nAT TWO O'CLOCK IN THE AFTERNOON",
          x: 40, y: 326, width: 320, height: 40,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8.5,
          letterSpacing: 2.8,
          fontWeight: '500',
          textAlign: 'center',
          color: '#222222',
          zIndex: 3
        },
        {
          id: 'cs2-f-venue',
          type: 'text',
          content: 'THE GREENHOUSE AT SOHO FARMHOUSE\n14 HIGH STREET, CHIPPING NORTON',
          x: 40, y: 381, width: 320, height: 34,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          letterSpacing: 2.2,
          fontWeight: '500',
          textAlign: 'center',
          color: '#333333',
          zIndex: 3
        },
        {
          id: 'cs2-f-rsvp',
          type: 'text',
          content: 'RSVP TO CLAIRE AT 555.0192 BY JUNE 1ST',
          x: 30, y: 429, width: 340, height: 18,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 6.3,
          letterSpacing: 1.2,
          fontWeight: '500',
          noWrap: true,
          textAlign: 'center',
          color: '#444444',
          zIndex: 3
        },
        {
          id: 'cs2-f-registry',
          type: 'text',
          content: 'registered at williams sonoma',
          x: 30, y: 462, width: 340, height: 28,
          fontFamily: "'Alex Brush', cursive",
          fontSize: 21,
          letterSpacing: 1,
          noWrap: true,
          textAlign: 'center',
          color: '#222222',
          zIndex: 3
        },
        {
          id: 'cs2-f-bottom-flourish',
          type: 'svg',
          assetId: 'flourish-divider',
          x: 145, y: 500, width: 110, height: 20,
          color: '#1A1A1A',
          opacity: 0.25,
          zIndex: 2
        }
      ],
      back: [
        {
          id: 'cs2-b-icon',
          type: 'svg',
          assetId: 'silk-bow',
          x: 160, y: 60, width: 80, height: 50,
          color: '#1A1A1A',
          zIndex: 2
        },
        {
          id: 'cs2-b-quote',
          type: 'text',
          content: '"A toast to love, laughter, and happily ever after."',
          x: 40, y: 125, width: 320, height: 40,
          fontFamily: "'Pinyon Script', cursive",
          fontSize: 26,
          textAlign: 'center',
          color: '#111111',
          zIndex: 3
        },
        {
          id: 'cs2-b-info',
          type: 'text',
          content: 'Join us for champagne, canapés and afternoon tea in the garden conservatory.',
          x: 40, y: 175, width: 320, height: 40,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 9,
          letterSpacing: 1.5,
          fontWeight: '500',
          textAlign: 'center',
          color: '#2A2A2A',
          zIndex: 3
        },
        {
          id: 'cs2-b-qr',
          type: 'qr-code',
          qrValue: 'https://withjoy.com/elizabethmarks',
          x: 160, y: 245, width: 80, height: 80,
          zIndex: 4
        },
        {
          id: 'cs2-b-registry',
          type: 'text',
          content: 'VIEW GIFT REGISTRY & DIRECTIONS\nWITHJOY.COM/ELIZABETHMARKS',
          x: 40, y: 340, width: 320, height: 30,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          fontWeight: '600',
          letterSpacing: 2.5,
          textAlign: 'center',
          color: '#222222',
          zIndex: 3
        }
      ]
    },
  
    // 21. Dusty Blue Peonies & Hydrangea Garden Shower (User Image 3 Match)
    {
      id: 'dusty-blue-peony-garden',
      title: 'Dusty Blue Peonies & Hydrangea Garden',
      section: 'bridal-shower',
      badge: 'Botanical Romance',
      style: 'Asymmetric French Floral Garland',
      bgImage: 'assets/backgrounds/dusty_blue_peonies.jpg',
      bgColor: '#F8FAFC',
      accentColor: '#1B3448',
      tags: ['Dusty Blue', 'Hydrangea Garland', 'Navy Peonies', 'Garden Shower', 'Botanical Border', 'Summer Romance'],
      description: 'Opulent cascading botanical border of dusty slate blue peonies along the left, with deep navy, crisp right-aligned typography.',
      front: [
        {
          id: 'db3-f-title',
          type: 'text',
          content: 'Bridal Shower',
          x: 170, y: 104, width: 215, height: 48,
          fontFamily: "'Pinyon Script', cursive",
          fontStyle: 'italic',
          fontSize: 35,
          fontWeight: '500',
          letterSpacing: 0.5,
          noWrap: true,
          textAlign: 'center',
          color: '#0B1E2E',
          zIndex: 3
        },
        {
          id: 'db3-f-name1',
          type: 'text',
          content: 'Sophia Eleanor\nHayes',
          x: 145, y: 174, width: 200, height: 68,
          fontFamily: "'Pinyon Script', cursive",
          fontSize: 32,
          letterSpacing: 0.5,
          lineHeight: 1.05,
          textAlign: 'center',
          color: '#091825',
          zIndex: 3
        },
        {
          id: 'db3-f-date',
          type: 'text',
          content: 'SATURDAY, MAY 16TH\nAT 1:00 IN THE AFTERNOON',
          x: 145, y: 260, width: 200, height: 38,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          letterSpacing: 2,
          fontWeight: '500',
          textAlign: 'center',
          color: '#122536',
          zIndex: 3
        },
        {
          id: 'db3-f-divider',
          type: 'svg',
          assetId: 'flourish-divider',
          x: 232, y: 304, width: 90, height: 14,
          color: '#1B3448',
          zIndex: 2
        },
        {
          id: 'db3-f-venue',
          type: 'text',
          content: 'THE ROSEWOOD CONSERVATORY\n450 WOODLAND TERRACE\nCHARLOTTESVILLE, VIRGINIA',
          x: 170, y: 330, width: 215, height: 48,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7.5,
          letterSpacing: 1.8,
          fontWeight: '500',
          textAlign: 'center',
          color: '#183044',
          zIndex: 3
        },
        {
          id: 'db3-f-rsvp',
          type: 'text',
          content: 'RSVP TO KATHERINE AT 434.555.0188\nBY MAY FIRST',
          x: 170, y: 408, width: 215, height: 30,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7,
          letterSpacing: 2,
          fontWeight: '500',
          textAlign: 'center',
          color: '#1B3448',
          zIndex: 3
        },
      ],
      back: [
        {
          id: 'db3-b-crest',
          type: 'svg',
          assetId: 'monogram-crest-botanical',
          x: 175, y: 60, width: 50, height: 50,
          color: '#1B3448',
          zIndex: 2
        },
        {
          id: 'db3-b-title',
          type: 'text',
          content: 'EVENT & REGISTRY DETAILS',
          x: 40, y: 125, width: 320, height: 22,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 9,
          fontWeight: 'bold',
          letterSpacing: 3,
          textAlign: 'center',
          color: '#0B1E2E',
          zIndex: 3
        },
        {
          id: 'db3-b-desc',
          type: 'text',
          content: 'Cocktails, light brunch and sweet delicacies will be served outdoors overlooking the gardens.\nGarden party attire encouraged.',
          x: 45, y: 160, width: 310, height: 50,
          fontFamily: "'Playfair Display', serif",
          fontSize: 9,
          fontWeight: '500',
          textAlign: 'center',
          color: '#183044',
          zIndex: 3
        },
        {
          id: 'db3-b-qr',
          type: 'qr-code',
          qrValue: 'https://sophiaandlucas.com/shower',
          x: 160, y: 240, width: 80, height: 80,
          zIndex: 4
        },
        {
          id: 'db3-b-link',
          type: 'text',
          content: 'SCAN TO VIEW REGISTRY & RSVP\nSOPHIAANDLUCAS.COM',
          x: 40, y: 335, width: 320, height: 30,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#1B3448',
          zIndex: 3
        }
      ]
    },
  
    // 22. Sameera Sapphire Peony & Dusty Blue Shower (Exact User Reference Image Match)
    {
      id: 'sameera-slate-navy-peony',
      title: 'Sapphire Peony & Dusty Blue Shower',
      section: 'bridal-shower',
      badge: 'Botanical Blue',
      style: 'Sapphire Peony & Botanical Garland',
      bgImage: 'assets/backgrounds/sapphire_dusty_blue_peony.jpg',
      bgColor: '#FFFFFF',
      accentColor: '#1E3A52',
      tags: ['Sapphire Peonies', 'Dusty Blue Roses', 'Sameera Reddy', 'Bridal Shower', 'Botanical Garland', 'Luxury Wedding'],
      description: 'Exact luxury replica of the sapphire & dusty blue peony botanical suite with rich Prussian navy calligraphy, crisp serif typography, and elegant date framing.',
      front: [
        {
          id: 'sr-f-welcome',
          type: 'text',
          content: 'WELCOME TO',
          x: 184, y: 78, width: 192, height: 20,
          fontFamily: "'Playfair Display', serif",
          fontSize: 10,
          fontWeight: '600',
          letterSpacing: 3.5,
          textAlign: 'center',
          color: '#334155',
          zIndex: 3
        },
        {
          id: 'sr-f-title1',
          type: 'text',
          content: 'Bridal Shower',
          x: 184, y: 114, width: 192, height: 48,
          fontFamily: "'Alex Brush', cursive",
          fontSize: 34,
          letterSpacing: 0.5,
          noWrap: true,
          textAlign: 'center',
          color: '#1E3A52',
          zIndex: 3
        },
        {
          id: 'sr-f-divider1',
          type: 'svg',
          assetId: 'divider-sapphire-line',
          x: 225, y: 182, width: 112, height: 12,
          color: '#2C4A6F',
          opacity: 0.65,
          zIndex: 3
        },
        {
          id: 'sr-f-honoring',
          type: 'text',
          content: 'IN HONORING OF',
          x: 184, y: 218, width: 192, height: 20,
          fontFamily: "'Playfair Display', serif",
          fontSize: 9.5,
          fontWeight: '600',
          letterSpacing: 2.8,
          textAlign: 'center',
          color: '#475569',
          zIndex: 3
        },
        {
          id: 'sr-f-name1',
          type: 'text',
          content: 'Sameera Reddy',
          x: 184, y: 246, width: 192, height: 44,
          fontFamily: "'Alex Brush', cursive",
          fontSize: 32,
          fontWeight: '400',
          textAlign: 'center',
          color: '#1E3A52',
          zIndex: 3
        },
        {
          id: 'sr-f-divider2',
          type: 'svg',
          assetId: 'divider-sapphire-dot',
          x: 236, y: 308, width: 90, height: 10,
          color: '#2C4A6F',
          opacity: 0.65,
          zIndex: 3
        },
        {
          id: 'sr-f-date',
          type: 'text',
          content: '14.JUN.2022',
          x: 184, y: 338, width: 192, height: 24,
          fontFamily: "'Playfair Display', serif",
          fontSize: 16,
          fontWeight: 'bold',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#1A2530',
          zIndex: 3
        },
        {
          id: 'sr-f-time',
          type: 'text',
          content: 'AT 1:30 PM',
          x: 184, y: 378, width: 192, height: 20,
          fontFamily: "'Playfair Display', serif",
          fontSize: 10,
          fontWeight: '600',
          letterSpacing: 2.5,
          textAlign: 'center',
          color: '#475569',
          zIndex: 3
        }
      ],
      back: [
        {
          id: 'sr-b-crest',
          type: 'svg',
          assetId: 'monogram-crest-botanical',
          x: 175, y: 60, width: 50, height: 50,
          color: '#1E3A52',
          zIndex: 2
        },
        {
          id: 'sr-b-title',
          type: 'text',
          content: 'EVENT & RECEPTION DETAILS',
          x: 40, y: 125, width: 320, height: 22,
          fontFamily: "'Cinzel', serif",
          fontSize: 10,
          fontWeight: 'bold',
          letterSpacing: 3,
          textAlign: 'center',
          color: '#1E3A52',
          zIndex: 3
        },
        {
          id: 'sr-b-desc',
          type: 'text',
          content: 'Join us for cocktails, high tea and sweet treats celebrating Sameera.\nDress Code: Elegant garden or shades of blue.\nThe Rosewood Conservatory • Charlottesville, VA',
          x: 45, y: 160, width: 310, height: 55,
          fontFamily: "'Playfair Display', serif",
          fontSize: 9,
          fontWeight: '500',
          textAlign: 'center',
          color: '#111111',
          zIndex: 3
        },
        {
          id: 'sr-b-qr',
          type: 'qr-code',
          qrValue: 'https://sameerabridal.com',
          x: 160, y: 240, width: 80, height: 80,
          zIndex: 4
        },
        {
          id: 'sr-b-link',
          type: 'text',
          content: 'SCAN TO RSVP & VIEW REGISTRY\nSAMEERABRIDAL.COM',
          x: 40, y: 335, width: 320, height: 30,
          fontFamily: "'Cinzel', serif",
          fontSize: 8,
          fontWeight: 'bold',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#1E3A52',
          zIndex: 3
        }
      ]
    },
  
    // 23. English Garden Rose & Silk Chiffon Luncheon (Serene Non-Noisy Manor Garden)
    {
      id: 'blush-garden-chiffon-shower',
      title: 'English Garden Rose & Chiffon Luncheon',
      section: 'bridal-shower',
      badge: 'English Romance',
      style: 'Cotswolds Watercolor Florals',
      bgImage: 'assets/backgrounds/blush_garden_shower.jpg',
      bgColor: '#FCF9F7',
      accentColor: '#6A2637',
      tags: ['English Garden', 'Blush Peonies', 'Silk Chiffon', 'High Tea Luncheon', 'Bridal Shower', 'Pastel Florals'],
      description: 'Delicate watercolor David Austin roses crowning the top header, with serene, quiet, non-noisy British estate typography centered in the pristine open paper below.',
      front: [
        {
          id: 'bg5-f-title',
          type: 'text',
          content: 'Bridal',
          x: 85, y: 190, width: 210, height: 32,
          fontFamily: "'Pinyon Script', cursive",
          fontSize: 30,
          letterSpacing: 0.2,
          noWrap: true,
          textAlign: 'center',
          color: '#1A0B10',
          zIndex: 3
        },
        {
          id: 'bg5-f-title-sub',
          type: 'text',
          content: 'Luncheon',
          x: 95, y: 222, width: 210, height: 36,
          fontFamily: "'Pinyon Script', cursive",
          fontSize: 30,
          letterSpacing: 0.2,
          noWrap: true,
          textAlign: 'center',
          color: '#1A0B10',
          zIndex: 3
        },
        {
          id: 'bg5-f-name1',
          type: 'text',
          content: 'Victoria Montgomery',
          x: 50, y: 270, width: 300, height: 42,
          fontFamily: "'Pinyon Script', cursive",
          fontSize: 34,
          letterSpacing: 0.5,
          noWrap: true,
          textAlign: 'center',
          color: '#1A0B10',
          zIndex: 3
        },
        {
          id: 'bg5-f-date',
          type: 'text',
          content: 'SATURDAY, JULY 18TH • AT 1:30 PM',
          x: 55, y: 332, width: 290, height: 24,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 9,
          letterSpacing: 2.5,
          fontWeight: '500',
          textAlign: 'center',
          color: '#2C151B',
          zIndex: 3
        },
        {
          id: 'bg5-f-venue',
          type: 'text',
          content: 'THE WISTERIA ORANGERY AT SOMERSET MANOR\nBATH, UNITED KINGDOM',
          x: 55, y: 382, width: 290, height: 36,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          letterSpacing: 2,
          fontWeight: '500',
          textAlign: 'center',
          color: '#3A1E26',
          zIndex: 3
        },
        {
          id: 'bg5-f-rsvp',
          type: 'text',
          content: 'KINDLY RSVP TO ELEANOR BY JULY 1ST • 07700 900382',
          x: 55, y: 438, width: 290, height: 22,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 7.5,
          letterSpacing: 2.2,
          fontWeight: '500',
          textAlign: 'center',
          color: '#4A2832',
          zIndex: 3
        },
      ],
      back: [
        {
          id: 'bg5-b-crest',
          type: 'svg',
          assetId: 'monogram-crest-botanical',
          x: 176, y: 60, width: 48, height: 48,
          color: '#6A2637',
          zIndex: 2
        },
        {
          id: 'bg5-b-quote',
          type: 'text',
          content: '"Where love blooms, joy follows."',
          x: 40, y: 125, width: 320, height: 38,
          fontFamily: "'Pinyon Script', cursive",
          fontSize: 26,
          textAlign: 'center',
          color: '#1A0B10',
          zIndex: 3
        },
        {
          id: 'bg5-b-desc',
          type: 'text',
          content: 'Pastel garden dresses & floral hats warmly welcomed.\nChampagne toast and macaron towers following afternoon tea.',
          x: 45, y: 170, width: 310, height: 45,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8.5,
          letterSpacing: 1.2,
          fontWeight: '500',
          textAlign: 'center',
          color: '#2C151B',
          zIndex: 3
        },
        {
          id: 'bg5-b-qr',
          type: 'qr-code',
          qrValue: 'https://victoriamontgomery.uk/shower',
          x: 160, y: 240, width: 80, height: 80,
          zIndex: 4
        },
        {
          id: 'bg5-b-link',
          type: 'text',
          content: 'SCAN TO VIEW WISH LIST & RSVP\nVICTORIAMONTGOMERY.UK',
          x: 40, y: 335, width: 320, height: 30,
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 8,
          fontWeight: '600',
          letterSpacing: 2,
          textAlign: 'center',
          color: '#6A2637',
          zIndex: 3
        }
      ]
    }
  ];
  

  // =========================================================================
  // MODULE: js/editor.js
  // =========================================================================

  /**
   * Advanced WYSIWYG Canvas Editor Engine for Luxury Invitations
   * Handles drag/drop, resize, typography, gold foil, QR codes, photo masks, undo/redo
   */class CardEditor {
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
            if (updates.content !== undefined && document.activeElement !== textInner) {
              textInner.textContent = element.content;
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
              // Explicit color choice removes gold foil override so the picked color is 100% visible live!
              if (updates.isFoil === undefined && element.isFoil) {
                element.isFoil = false;
                textInner.classList.remove('foil-gold');
                const foilCheck = document.getElementById('ins-foil-check');
                if (foilCheck) foilCheck.checked = false;
              }
            }
            if (updates.isFoil !== undefined) {
              element.isFoil = !!updates.isFoil;
              textInner.classList.toggle('foil-gold', element.isFoil);
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
      const isFoil = el.isFoil ? 'foil-gold' : '';
      const rotation = el.rotation ? `transform: rotate(${el.rotation}deg);` : '';
  
      let contentHTML = '';
  
      if (el.type === 'text') {
        const isSingleLine = !String(el.content).includes('\n');
        const shouldNoWrap = el.noWrap || (isSingleLine && (el.height <= (el.fontSize || 14) * 2.5));
        const styles = `
          font-family: ${el.fontFamily || "'Cormorant Garamond', serif"};
          font-size: ${el.fontSize || 14}px;
          font-weight: ${el.fontWeight || '400'};
          font-style: ${el.fontStyle || 'normal'};
          letter-spacing: ${el.letterSpacing !== undefined ? el.letterSpacing + 'px' : 'normal'};
          line-height: ${el.lineHeight || 1.3};
          text-align: ${el.textAlign || 'center'};
          color: ${el.color || '#2C2825'};
          white-space: ${shouldNoWrap ? 'nowrap' : 'pre-wrap'};
          word-break: ${shouldNoWrap ? 'normal' : 'keep-all'};
          overflow-wrap: normal;
        `;
        let justifyClass = 'justify-center';
        if (el.textAlign === 'left') justifyClass = 'justify-start';
        else if (el.textAlign === 'right') justifyClass = 'justify-end';
  
        contentHTML = `
          <div class="text-content-inner w-full h-full flex items-center ${justifyClass} ${isFoil}" style="${styles}">
            ${this.escapeHtml(el.content)}
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
  
      this.isInlineEditing = true;
      textInner.contentEditable = "true";
      textInner.classList.add('text-editing-active');
      textInner.focus();
  
      // Select all text for easy replacement
      const range = document.createRange();
      range.selectNodeContents(textInner);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
  
      const onInput = () => {
        el.content = textInner.innerText;
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
          textInner.blur();
        } else if (e.key === 'Escape') {
          textInner.blur();
        }
      };
  
      const onBlur = () => {
        textInner.contentEditable = "false";
        textInner.classList.remove('text-editing-active');
        this.isInlineEditing = false;
        el.content = textInner.innerText;
        this.saveState();
        textInner.removeEventListener('input', onInput);
        textInner.removeEventListener('keydown', onKeyDown);
        textInner.removeEventListener('blur', onBlur);
        if (this.options.onElementSelect) {
          this.options.onElementSelect(el);
        }
      };
  
      textInner.addEventListener('input', onInput);
      textInner.addEventListener('keydown', onKeyDown);
      textInner.addEventListener('blur', onBlur);
    }
  
    finishInlineEdit() {
      if (!this.selectedElementId) return;
      const elNode = this.getCanvasElementNode(this.selectedElementId);
      if (!elNode) return;
      const textInner = elNode.querySelector('.text-content-inner');
      if (textInner && textInner.contentEditable === "true") {
        textInner.blur();
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
  
  

  // =========================================================================
  // MODULE: js/export.js
  // =========================================================================

  /**
   * Professional Multi-Format Export Engine
   * 100% Live-Preview & Guest-View Fidelity Capture Engine
   * Exports Front & Back together across WhatsApp, Email JPG, Print PDF, and PNG.
   */
  class CardExporter {
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
     * Captures an exact card side directly with 100% Live-Preview & Guest-View fidelity.
     * Uses an isolated 400x560 stage attached directly to body, ensuring zero clipping,
     * zero white bottom bars, and preserving background artwork on both front and back.
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
  
      const elements = side === 'front' ? t.front : (t.back || []);
      const bgTexture = t.bgTexture || 'texture-deckle';
      const bgColor = t.bgColor || '#FAF7F2';
      const bgImage = t.bgImage ? this.editor.getEffectiveBg(t.bgImage) : '';
      const effectiveBg = (type === 'image/jpeg' || type === 'image/jpg')
        ? (backgroundColor || (bgImage ? '#ffffff' : bgColor))
        : (backgroundColor !== undefined ? backgroundColor : (bgImage ? null : bgColor));
  
      // Create an isolated export stage directly attached to body.
      // This completely bypasses responsive studio containers (.canvas-stage-shell, #canvas-outer-stage)
      // and guarantees an exact 400x560 (5"x7") aspect ratio with 0px white space or clipping.
      const exportCard = document.createElement('div');
      exportCard.id = 'export-card-stage';
      exportCard.className = `export-card-stage select-none ${bgImage ? '' : bgTexture}`;
      exportCard.style.cssText = `
        position: fixed !important;
        left: 0 !important;
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
        border-radius: 0px !important;
        box-shadow: none !important;
        transform: none !important;
        overflow: hidden !important;
        z-index: 100000 !important;
        pointer-events: none !important;
        background-color: ${bgColor} !important;
        ${bgImage ? `background-image: url('${bgImage}') !important; background-size: cover !important; background-position: center !important;` : ''}
      `;
  
      exportCard.innerHTML = `
        <!-- SVG Definitions for Metallic Foil Shimmer -->
        <svg width="0" height="0" class="absolute" style="position: absolute; width: 0; height: 0;">
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
        <div id="export-elements-wrapper" class="absolute inset-0 w-full h-full" style="position: absolute; left: 0; top: 0; width: 400px; height: 560px; overflow: hidden;">
          ${elements.map(el => this.editor.renderElementHTML(el, { preview: true, previewKey: 'exp-' + side })).join('')}
        </div>
      `;
  
      // Mount vector QR code if present
      if (window.QRCode) {
        elements.forEach(el => {
          if (el.type === 'qr-code') {
            const qrBox = exportCard.querySelector(`#qr-box-pv-exp-${side}-${el.id}`);
            if (qrBox) {
              try {
                qrBox.innerHTML = '';
                new window.QRCode(qrBox, {
                  text: el.qrValue || 'https://wedbuilder.example/rsvp',
                  width: Math.max(30, el.width - 12),
                  height: Math.max(30, el.height - 12),
                  colorDark: "#111111",
                  colorLight: "#ffffff",
                  correctLevel: window.QRCode.CorrectLevel?.M || 0
                });
              } catch (qrErr) {
                console.warn('Vector QR code render fallback in export:', qrErr);
              }
            }
          }
        });
      }
  
      document.body.appendChild(exportCard);
  
      try {
        // Preload background image & assets
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
          try { await document.fonts.ready; } catch (_) {}
        }
  
        await this.waitForImages(exportCard);
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
          windowWidth: 1200,
          windowHeight: 800,
          onclone: (clonedDoc) => {
            const overlay = clonedDoc.getElementById('export-busy-overlay');
            if (overlay) overlay.style.display = 'none';
  
            const modal = clonedDoc.getElementById('guest-experience-modal');
            if (modal) modal.remove();
  
            const clonedCard = clonedDoc.getElementById('export-card-stage');
            if (clonedCard) {
              clonedCard.style.position = 'fixed';
              clonedCard.style.left = '0px';
              clonedCard.style.top = '0px';
              clonedCard.style.width = '400px';
              clonedCard.style.height = '560px';
              clonedCard.style.transform = 'none';
              clonedCard.style.boxShadow = 'none';
              clonedCard.style.borderRadius = '0px';
            }
  
            // Strip background gradients from foil elements so html2canvas renders pure elegant metallic text without solid rectangular bars
            const foilElements = clonedDoc.querySelectorAll('.foil-gold, .foil-rose, .foil-silver, [class*="foil-"]');
            foilElements.forEach((el) => {
              el.style.setProperty('background', 'none', 'important');
              el.style.setProperty('background-image', 'none', 'important');
              el.style.setProperty('-webkit-background-clip', 'initial', 'important');
              el.style.setProperty('background-clip', 'initial', 'important');
              if (el.classList.contains('foil-rose')) {
                el.style.setProperty('-webkit-text-fill-color', '#E8B4B8', 'important');
                el.style.setProperty('color', '#E8B4B8', 'important');
              } else if (el.classList.contains('foil-silver')) {
                el.style.setProperty('-webkit-text-fill-color', '#E0E4E8', 'important');
                el.style.setProperty('color', '#E0E4E8', 'important');
              } else {
                el.style.setProperty('-webkit-text-fill-color', '#E2C785', 'important');
                el.style.setProperty('color', '#E2C785', 'important');
              }
            });
  
            const style = clonedDoc.createElement('style');
            style.textContent = `
              * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility; }
              .text-content-inner { overflow: visible !important; }
              .canvas-element { outline: none !important; box-shadow: none !important; }
              .foil-gold, [class*="foil-gold"] {
                background: none !important;
                background-image: none !important;
                -webkit-background-clip: initial !important;
                background-clip: initial !important;
                -webkit-text-fill-color: #E2C785 !important;
                color: #E2C785 !important;
                text-shadow: 0 1px 1px rgba(255, 245, 200, 0.4), 0 0 2px rgba(212, 175, 55, 0.6) !important;
              }
              .foil-rose, [class*="foil-rose"] {
                background: none !important;
                background-image: none !important;
                -webkit-background-clip: initial !important;
                background-clip: initial !important;
                -webkit-text-fill-color: #E8B4B8 !important;
                color: #E8B4B8 !important;
                text-shadow: 0 1px 1px rgba(255, 230, 235, 0.4), 0 0 2px rgba(183, 110, 121, 0.6) !important;
              }
              .foil-silver, [class*="foil-silver"] {
                background: none !important;
                background-image: none !important;
                -webkit-background-clip: initial !important;
                background-clip: initial !important;
                -webkit-text-fill-color: #E0E4E8 !important;
                color: #E0E4E8 !important;
                text-shadow: 0 1px 1px rgba(255, 255, 255, 0.4), 0 0 2px rgba(190, 195, 200, 0.6) !important;
              }
            `;
            clonedDoc.head.appendChild(style);
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
  

  // =========================================================================
  // MODULE: js/guestView.js
  // =========================================================================

  /**
   * Interactive Guest Experience & Digital Mobile Invite Module
   * 3D Envelope opening animation, card flip, bespoke luxury RSVP modal, and Google Calendar / Maps integration.
   */
  class GuestExperienceModal {
    constructor(editor) {
      this.editor = editor;
      this.modal = null;
      this.isOpen = false;
      this.isEnvelopeOpen = false;
      this.isCardFlipped = false;
    }
  
    show() {
      if (!this.editor.currentTemplate) return;
      this.render();
      this.isOpen = true;
      document.body.style.overflow = 'hidden';
    }
  
    close() {
      const modalEl = document.getElementById('guest-experience-modal');
      if (modalEl) modalEl.remove();
      this.isOpen = false;
      this.isEnvelopeOpen = false;
      this.isCardFlipped = false;
      document.body.style.overflow = '';
    }
  
    getStoredRsvp(templateId) {
      try {
        const raw = localStorage.getItem(`invitation_guest_rsvp_${templateId}`);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    }
  
    saveRsvp(templateId, data) {
      try {
        localStorage.setItem(`invitation_guest_rsvp_${templateId}`, JSON.stringify(data));
      } catch (e) {}
    }
  
    render() {
      const existing = document.getElementById('guest-experience-modal');
      if (existing) existing.remove();
  
      const t = this.editor.currentTemplate;
      const bgTexture = t.bgTexture || 'texture-deckle';
      const bgColor = t.bgColor || '#FAF7F2';
  
      // Extract key details from template elements
      const titleEl = t.front.find(e => e.type === 'text' && (e.fontSize >= 20 || e.id.includes('name')));
      const dateEl = t.front.find(e => e.type === 'text' && (e.id.includes('date') || e.content.includes('202')));
      const venueEl = t.front.find(e => e.type === 'text' && (e.id.includes('venue') || e.id.includes('loc')));
      const rsvpEl = (t.back || []).find(e => e.type === 'text' && (e.id.includes('rsvp') || e.content.includes('RSVP')));
  
      const eventTitle = titleEl ? titleEl.content.replace(/\n/g, ' & ') : t.title;
      const eventDate = dateEl ? dateEl.content.replace(/\n/g, ' · ') : 'Upcoming Celebration';
      const eventVenue = venueEl ? venueEl.content.replace(/\n/g, ' · ') : 'Private Location';
      const rsvpContactText = rsvpEl ? rsvpEl.content.replace(/\n/g, ' · ') : '';
  
      const savedRsvp = this.getStoredRsvp(t.id);
      const rsvpBtnLabel = savedRsvp 
        ? (savedRsvp.status === 'attending' ? `✓ Attending (${savedRsvp.name})` : `Declined (${savedRsvp.name})`)
        : 'Respond to RSVP';
  
      const modalHTML = `
        <div id="guest-experience-modal" class="fixed inset-0 z-[999] bg-zinc-950/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          
          <!-- Close Button -->
          <button id="close-guest-modal" class="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-700 transition shadow-lg">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
  
          <div class="relative w-full max-w-xl flex flex-col items-center py-4">
            
            <!-- Top Badge & Digital Product Hint -->
            <div class="mb-3 flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[11px] font-serif tracking-widest uppercase shadow-sm">
              <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              Guest View • Interactive Digital Invitation
            </div>
  
            <!-- 3D Envelope & Card Container -->
            <div id="envelope-wrapper" class="relative perspective-1000 guest-envelope-wrap flex items-center justify-center my-2">
              
              <!-- Realistic Envelope Back / Base -->
              <div id="envelope-body" class="absolute inset-0 bg-[#f3ede4] rounded-lg shadow-2xl border border-[#e0d6c5] overflow-hidden flex items-end justify-center">
                
                <!-- Envelope Liner Pattern -->
                <div class="absolute top-0 inset-x-0 h-44 bg-[#e8decf] opacity-40 border-b border-[#d8ccb8]"></div>
  
                <!-- Royal Wax Seal Button (Click to Open) -->
                <div id="envelope-seal-btn" class="absolute top-36 z-30 cursor-pointer flex flex-col items-center group">
                  <div class="wax-seal wax-gold transform group-hover:scale-105 transition duration-300 shadow-xl border border-amber-300/40">
                    <div class="absolute inset-1 rounded-full border border-amber-950/20 pointer-events-none"></div>
                    <span class="font-serif text-lg font-bold text-amber-950 tracking-wider">✦</span>
                  </div>
                  <span class="mt-2.5 px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-amber-500/25 text-[11px] uppercase tracking-widest text-amber-200/90 font-serif font-medium group-hover:text-amber-100 transition shadow-sm">
                    Tap to Open Invitation
                  </span>
                </div>
  
                <!-- Envelope Flap (Top triangle) -->
                <div id="envelope-flap" class="envelope-flap absolute top-0 inset-x-0 h-44 bg-[#e5dbc9] border-b-2 border-[#cfc1a9] shadow-md"
                     style="clip-path: polygon(0 0, 100% 0, 50% 100%);">
                </div>
  
                <!-- Card inside Envelope (Glides up when opened) -->
                <div id="envelope-card-inner" class="envelope-card relative guest-envelope-card shadow-2xl cursor-pointer">
                  
                  <!-- 3D Flipper -->
                  <div id="guest-card-flipper" class="card-flipper relative w-full h-full">
                    
                    <!-- Card Front -->
                    <div class="card-front absolute inset-0 rounded-md ${t.bgImage ? '' : bgTexture} overflow-hidden shadow-xl border border-black/5" 
                         style="background-color: ${bgColor}; ${t.bgImage ? `background-image: url('${this.editor.getEffectiveBg(t.bgImage)}'); background-size: cover; background-position: center;` : ''}">
                      <div class="guest-card-viewport">
                        <div class="guest-card-stage">
                          ${t.front.map(el => this.editor.renderElementHTML(el, { preview: true, previewKey: 'guest-front' })).join('')}
                        </div>
                      </div>
                    </div>
  
                    <!-- Card Back -->
                    <div class="card-back absolute inset-0 rounded-md ${t.bgImage ? '' : bgTexture} overflow-hidden shadow-xl border border-black/5" 
                         style="background-color: ${bgColor}; ${t.bgImage ? `background-image: url('${this.editor.getEffectiveBg(t.bgImage)}'); background-size: cover; background-position: center;` : ''}">
                      <div class="guest-card-viewport">
                        <div class="guest-card-stage">
                          ${(t.back || []).map(el => this.editor.renderElementHTML(el, { preview: true, previewKey: 'guest-back' })).join('')}
                        </div>
                      </div>
                    </div>
  
                  </div>
  
                </div>
  
              </div>
  
            </div>
  
            <!-- Interaction Controls (Flip card & RSVP actions) -->
            <div class="mt-5 w-full max-w-md flex flex-col gap-2.5 px-3 sm:px-4">
              
              <!-- Primary Action Buttons -->
              <div class="flex items-center justify-between gap-2.5">
                <button id="btn-flip-card" type="button" class="flex-1 py-2.5 px-3 sm:px-4 rounded-xl bg-zinc-900/90 border border-zinc-700/80 hover:border-amber-500/50 hover:bg-zinc-800 text-zinc-200 text-xs font-serif tracking-widest uppercase transition flex items-center justify-center gap-2 shadow-md">
                  <svg class="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span id="flip-btn-label">Flip to Details</span>
                </button>
  
                <button id="btn-guest-rsvp" type="button" class="flex-1 py-2.5 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-serif font-bold text-xs tracking-widest uppercase shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition flex items-center justify-center gap-2">
                  <svg class="w-4 h-4 text-zinc-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span id="guest-rsvp-btn-text">${rsvpBtnLabel}</span>
                </button>
              </div>
  
              <!-- Quick Action Links: Calendar & Maps -->
              <div class="grid grid-cols-2 gap-2 text-center text-[11px] font-sans">
                <button id="btn-add-calendar" type="button" class="py-2.5 px-3 rounded-lg bg-zinc-900/70 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition flex items-center justify-center gap-1.5 shadow-sm">
                  <svg class="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Add to Calendar
                </button>
                
                <button id="btn-open-maps" type="button" class="py-2.5 px-3 rounded-lg bg-zinc-900/70 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition flex items-center justify-center gap-1.5 shadow-sm">
                  <svg class="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  View Venue Map
                </button>
              </div>
  
              <!-- Event Meta Footer -->
              <div class="text-center text-[11px] text-zinc-400 font-serif tracking-wider pt-1 flex items-center justify-center gap-2">
                <span class="text-amber-400/80">✦</span>
                <span>${eventTitle}</span>
                <span class="text-zinc-600">•</span>
                <span>${eventDate}</span>
                <span class="text-amber-400/80">✦</span>
              </div>
  
            </div>
  
          </div>
  
          <!-- ===================================================================
               BESPOKE LUXURY RSVP MODAL DRAWER
               =================================================================== -->
          <div id="guest-rsvp-drawer" class="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 hidden">
            <div class="relative w-full max-w-md bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border border-amber-500/30 rounded-2xl p-6 shadow-2xl text-left guest-rsvp-card">
              
              <!-- Close RSVP Drawer -->
              <button id="close-rsvp-drawer" type="button" class="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-white rounded-full bg-zinc-800/60 hover:bg-zinc-800 transition">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
  
              <!-- RSVP Form Container -->
              <div id="rsvp-form-container">
                <!-- Header -->
                <div class="text-center mb-5">
                  <span class="text-[10px] font-serif uppercase tracking-widest text-amber-400 font-semibold block mb-1">✦ Kindly Respond ✦</span>
                  <h3 class="font-serif text-2xl font-bold text-zinc-100 tracking-wide">RSVP</h3>
                  <p class="text-xs text-zinc-400 mt-1 font-serif italic">${eventTitle}</p>
                  <p class="text-[11px] text-zinc-500 mt-0.5">${eventDate}</p>
                </div>
  
                <!-- Form Body -->
                <form id="guest-rsvp-form" class="space-y-4">
                  <!-- Guest Name -->
                  <div>
                    <label class="block text-[11px] font-serif uppercase tracking-wider text-zinc-300 mb-1.5 font-semibold">Your Full Name(s) <span class="text-amber-400">*</span></label>
                    <input type="text" id="rsvp-guest-name" required value="${savedRsvp ? savedRsvp.name : ''}" placeholder="e.g. Katherine & Julian" class="w-full px-3.5 py-2.5 rounded-lg bg-zinc-800/80 border border-zinc-700 focus:border-amber-500 text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none transition" />
                  </div>
  
                  <!-- Attendance Options -->
                  <div>
                    <label class="block text-[11px] font-serif uppercase tracking-wider text-zinc-300 mb-2 font-semibold">Will You Attend? <span class="text-amber-400">*</span></label>
                    <div class="grid grid-cols-2 gap-2.5">
                      <button type="button" class="rsvp-attend-btn ${(!savedRsvp || savedRsvp.status === 'attending') ? 'is-active' : ''} py-2.5 px-3 rounded-xl border border-zinc-700 bg-zinc-800/50 text-zinc-300 text-xs font-serif font-bold tracking-wide flex items-center justify-center gap-2" data-status="attending">
                        <span class="text-base">✨</span> Joyfully Accepts
                      </button>
                      <button type="button" class="rsvp-attend-btn ${savedRsvp && savedRsvp.status === 'declining' ? 'is-active' : ''} py-2.5 px-3 rounded-xl border border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:text-zinc-200 text-xs font-serif font-bold tracking-wide flex items-center justify-center gap-2" data-status="declining">
                        <span class="text-base">🕊️</span> Regretfully Declines
                      </button>
                    </div>
                  </div>
  
                  <!-- Guest Count -->
                  <div id="rsvp-guests-wrap" class="${savedRsvp && savedRsvp.status === 'declining' ? 'hidden' : ''}">
                    <label class="block text-[11px] font-serif uppercase tracking-wider text-zinc-300 mb-1.5 font-semibold">Total Guests Attending</label>
                    <div class="flex items-center gap-2">
                      <button type="button" class="rsvp-count-btn ${(!savedRsvp || savedRsvp.count === 1) ? 'is-active' : ''} flex-1 py-1.5 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-300 text-xs font-semibold" data-count="1">1</button>
                      <button type="button" class="rsvp-count-btn ${savedRsvp && savedRsvp.count === 2 ? 'is-active' : ''} flex-1 py-1.5 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-300 text-xs font-semibold" data-count="2">2</button>
                      <button type="button" class="rsvp-count-btn ${savedRsvp && savedRsvp.count === 3 ? 'is-active' : ''} flex-1 py-1.5 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-300 text-xs font-semibold" data-count="3">3</button>
                      <button type="button" class="rsvp-count-btn ${savedRsvp && savedRsvp.count >= 4 ? 'is-active' : ''} flex-1 py-1.5 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-300 text-xs font-semibold" data-count="4">4+</button>
                    </div>
                  </div>
  
                  <!-- Dietary / Message -->
                  <div>
                    <label class="block text-[11px] font-serif uppercase tracking-wider text-zinc-300 mb-1.5 font-semibold">Dietary Preferences or Wishes</label>
                    <textarea id="rsvp-guest-note" rows="2" placeholder="e.g. Vegetarian, allergies, or a message to the couple..." class="w-full px-3.5 py-2 rounded-lg bg-zinc-800/80 border border-zinc-700 focus:border-amber-500 text-zinc-100 placeholder-zinc-500 text-xs focus:outline-none transition resize-none">${savedRsvp ? (savedRsvp.note || '') : ''}</textarea>
                  </div>
  
                  ${rsvpContactText ? `
                    <div class="p-2.5 rounded-lg bg-zinc-800/40 border border-zinc-700/60 text-[11px] text-zinc-400 font-serif leading-relaxed">
                      <span class="text-amber-400 font-semibold block mb-0.5">Host Contact & Inquiries:</span>
                      <span>${rsvpContactText}</span>
                    </div>
                  ` : ''}
  
                  <!-- Submit Button -->
                  <button type="submit" id="btn-submit-rsvp" class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-serif font-bold text-sm tracking-widest uppercase shadow-lg shadow-amber-500/20 transition flex items-center justify-center gap-2 mt-2 cursor-pointer">
                    <span>Confirm RSVP</span>
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>
  
              <!-- RSVP Confirmation Screen (Shown upon submission) -->
              <div id="rsvp-success-screen" class="hidden text-center py-4 space-y-3.5">
                <div class="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-2xl shadow-lg shadow-emerald-500/20">
                  ✓
                </div>
                <h4 class="font-serif text-2xl font-bold text-zinc-100">RSVP Confirmed</h4>
                <p id="rsvp-success-msg" class="text-xs text-zinc-300 font-serif leading-relaxed px-2">
                  Thank you! Your response has been recorded. We look forward to celebrating together.
                </p>
                
                <div class="p-3 rounded-xl bg-zinc-800/60 border border-zinc-700 text-left text-xs space-y-1.5 my-2">
                  <div class="flex justify-between text-zinc-400">
                    <span>Guest:</span>
                    <span id="conf-guest-name" class="font-bold text-zinc-200"></span>
                  </div>
                  <div class="flex justify-between text-zinc-400">
                    <span>Response:</span>
                    <span id="conf-guest-status" class="font-bold text-amber-300"></span>
                  </div>
                  <div class="flex justify-between text-zinc-400" id="conf-guest-count-row">
                    <span>Seats:</span>
                    <span id="conf-guest-count" class="font-bold text-zinc-200"></span>
                  </div>
                </div>
  
                <div class="pt-2 flex flex-col gap-2">
                  <button type="button" id="btn-done-rsvp" class="w-full py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-serif tracking-wider uppercase transition">
                    Back to Invitation
                  </button>
                  <button type="button" id="btn-edit-rsvp" class="text-[11px] text-amber-400/80 hover:text-amber-300 underline font-serif">
                    Edit Response
                  </button>
                </div>
              </div>
  
            </div>
          </div>
  
        </div>
      `;
  
      document.body.insertAdjacentHTML('beforeend', modalHTML);
      this.attachEvents(eventTitle, eventDate, eventVenue, t);
    }
  
    attachEvents(eventTitle, eventDate, eventVenue, template) {
      const modalEl = document.getElementById('guest-experience-modal');
      const closeBtn = document.getElementById('close-guest-modal');
      const sealBtn = document.getElementById('envelope-seal-btn');
      const envelopeBody = document.getElementById('envelope-body');
      const flipper = document.getElementById('guest-card-flipper');
      const flipBtn = document.getElementById('btn-flip-card');
      const flipBtnLabel = document.getElementById('flip-btn-label');
      const rsvpBtn = document.getElementById('btn-guest-rsvp');
      const rsvpBtnText = document.getElementById('guest-rsvp-btn-text');
      const calBtn = document.getElementById('btn-add-calendar');
      const mapsBtn = document.getElementById('btn-open-maps');
  
      // RSVP Drawer Elements
      const rsvpDrawer = document.getElementById('guest-rsvp-drawer');
      const closeRsvpDrawerBtn = document.getElementById('close-rsvp-drawer');
      const rsvpForm = document.getElementById('guest-rsvp-form');
      const rsvpFormContainer = document.getElementById('rsvp-form-container');
      const rsvpSuccessScreen = document.getElementById('rsvp-success-screen');
      const rsvpNameInput = document.getElementById('rsvp-guest-name');
      const rsvpNoteInput = document.getElementById('rsvp-guest-note');
      const rsvpGuestsWrap = document.getElementById('rsvp-guests-wrap');
      const doneRsvpBtn = document.getElementById('btn-done-rsvp');
      const editRsvpBtn = document.getElementById('btn-edit-rsvp');
  
      let currentAttendance = 'attending';
      let currentGuestCount = 1;
  
      // Check pre-saved values
      const existingRsvp = this.getStoredRsvp(template.id);
      if (existingRsvp) {
        currentAttendance = existingRsvp.status || 'attending';
        currentGuestCount = existingRsvp.count || 1;
      }
  
      closeBtn.addEventListener('click', () => this.close());
      modalEl.addEventListener('click', (e) => {
        if (e.target === modalEl) this.close();
      });
  
      // Mount vector QR code on card back using easy.qrcode if available
      if (window.QRCode) {
        (template.back || []).forEach(el => {
          if (el.type === 'qr-code') {
            const qrBox = document.getElementById(`qr-box-pv-guest-back-${el.id}`);
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
                // Make QR box clickable to open RSVP modal
                qrBox.style.cursor = 'pointer';
                qrBox.title = 'Click to open RSVP';
                qrBox.addEventListener('click', (e) => {
                  e.stopPropagation();
                  openRsvpDrawer();
                });
              } catch (err) {
                console.warn('Vector QR code render fallback:', err);
              }
            }
          }
        });
      }
  
      // Open Envelope Action
      const openEnvelope = () => {
        if (this.isEnvelopeOpen) return;
        this.isEnvelopeOpen = true;
        envelopeBody.classList.add('envelope-open');
        if (sealBtn) sealBtn.style.display = 'none';
  
        if (window.confetti) {
          window.confetti({
            particleCount: 45,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#D4AF37', '#FAF7F2', '#AA771C']
          });
        }
      };
  
      sealBtn.addEventListener('click', openEnvelope);
  
      // Flip Card Front / Back
      const toggleFlip = () => {
        if (!this.isEnvelopeOpen) {
          openEnvelope();
          setTimeout(() => {
            this.isCardFlipped = !this.isCardFlipped;
            flipper.classList.toggle('flipped', this.isCardFlipped);
            if (flipBtnLabel) {
              flipBtnLabel.textContent = this.isCardFlipped ? 'Flip to Front' : 'Flip to Details';
            }
          }, 600);
        } else {
          this.isCardFlipped = !this.isCardFlipped;
          flipper.classList.toggle('flipped', this.isCardFlipped);
          if (flipBtnLabel) {
            flipBtnLabel.textContent = this.isCardFlipped ? 'Flip to Front' : 'Flip to Details';
          }
        }
      };
  
      flipBtn.addEventListener('click', toggleFlip);
      flipper.addEventListener('click', toggleFlip);
  
      // Open & Close RSVP Drawer
      const openRsvpDrawer = () => {
        rsvpDrawer.classList.remove('hidden');
        setTimeout(() => rsvpNameInput?.focus(), 150);
      };
  
      const closeRsvpDrawer = () => {
        rsvpDrawer.classList.add('hidden');
      };
  
      rsvpBtn.addEventListener('click', openRsvpDrawer);
      closeRsvpDrawerBtn.addEventListener('click', closeRsvpDrawer);
      rsvpDrawer.addEventListener('click', (e) => {
        if (e.target === rsvpDrawer) closeRsvpDrawer();
      });
  
      // Attendance Toggle (Joyfully Accepts vs Regretfully Declines)
      const attendBtns = rsvpDrawer.querySelectorAll('.rsvp-attend-btn');
      attendBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          attendBtns.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          currentAttendance = btn.dataset.status;
  
          if (currentAttendance === 'declining') {
            rsvpGuestsWrap.classList.add('hidden');
          } else {
            rsvpGuestsWrap.classList.remove('hidden');
          }
        });
      });
  
      // Guest Count Selector
      const countBtns = rsvpDrawer.querySelectorAll('.rsvp-count-btn');
      countBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          countBtns.forEach(b => b.classList.remove('is-active'));
          btn.classList.add('is-active');
          currentGuestCount = parseInt(btn.dataset.count, 10) || 1;
        });
      });
  
      // RSVP Form Submission
      rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const guestName = rsvpNameInput.value.trim();
        if (!guestName) return;
  
        const rsvpData = {
          name: guestName,
          status: currentAttendance,
          count: currentAttendance === 'attending' ? currentGuestCount : 0,
          note: rsvpNoteInput.value.trim(),
          timestamp: new Date().toISOString()
        };
  
        this.saveRsvp(template.id, rsvpData);
  
        // Trigger Celebration Confetti
        if (window.confetti && currentAttendance === 'attending') {
          window.confetti({
            particleCount: 110,
            spread: 85,
            origin: { y: 0.55 },
            colors: ['#D4AF37', '#FAF7F2', '#34D399', '#AA771C']
          });
        }
  
        // Update Confirmation Screen Content
        document.getElementById('conf-guest-name').textContent = guestName;
        document.getElementById('conf-guest-status').textContent = currentAttendance === 'attending' ? 'Joyfully Attending' : 'Regretfully Declining';
        const countRow = document.getElementById('conf-guest-count-row');
        if (currentAttendance === 'attending') {
          countRow.classList.remove('hidden');
          document.getElementById('conf-guest-count').textContent = `${currentGuestCount} ${currentGuestCount === 1 ? 'Guest' : 'Guests'}`;
        } else {
          countRow.classList.add('hidden');
        }
  
        // Transition to Success Screen
        rsvpFormContainer.classList.add('hidden');
        rsvpSuccessScreen.classList.remove('hidden');
  
        // Update the main RSVP button on the guest view
        if (rsvpBtnText) {
          rsvpBtnText.textContent = currentAttendance === 'attending'
            ? `✓ Attending (${guestName})`
            : `Declined (${guestName})`;
        }
      });
  
      doneRsvpBtn.addEventListener('click', () => {
        closeRsvpDrawer();
        setTimeout(() => {
          rsvpFormContainer.classList.remove('hidden');
          rsvpSuccessScreen.classList.add('hidden');
        }, 300);
      });
  
      editRsvpBtn.addEventListener('click', () => {
        rsvpSuccessScreen.classList.add('hidden');
        rsvpFormContainer.classList.remove('hidden');
      });
  
      // Add to Google Calendar Link
      calBtn.addEventListener('click', () => {
        const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&details=${encodeURIComponent('Celebration Invitation - RSVP confirmed')}&location=${encodeURIComponent(eventVenue)}`;
        window.open(gcalUrl, '_blank');
      });
  
      // Open Maps Link
      mapsBtn.addEventListener('click', () => {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(eventVenue)}`;
        window.open(mapsUrl, '_blank');
      });
    }
  }
  

  // =========================================================================
  // MODULE: js/etsyGuide.js
  // =========================================================================

  /**
   * Etsy Digital Product Seller & Buyer Toolkit
   * Printing guides, paper recommendations, and Etsy order demo simulation.
   */class EtsyGuideManager {
    constructor() {
      this.init();
    }
  
    init() {
      // Check if URL has demo params (e.g. ?order=ETSY-12345&buyer=Camilla)
      const urlParams = new URLSearchParams(window.location.search);
      this.orderId = urlParams.get('order') || 'ETSY-DEMO-2026';
      this.buyerName = urlParams.get('buyer') || 'Sophie Dupont';
    }
  
    showPrintGuide() {
      const existing = document.getElementById('print-guide-modal');
      if (existing) existing.remove();
  
      const guideHTML = `
        <div id="print-guide-modal" class="fixed inset-0 z-[999] bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div class="relative w-full max-w-2xl bg-zinc-900 border border-zinc-700/80 rounded-xl shadow-2xl p-6 md:p-8 text-zinc-200">
            
            <button id="close-print-guide" class="absolute top-5 right-5 text-zinc-400 hover:text-white p-2">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
  
            <div class="flex items-center gap-3 mb-4">
              <span class="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-serif font-bold uppercase tracking-wider border border-amber-500/30">
                Etsy Buyer Guide
              </span>
              <h3 class="text-xl font-serif font-bold text-white tracking-wide">
                Professional Printing & Paper Instructions
              </h3>
            </div>
  
            <p class="text-sm text-zinc-400 mb-6 leading-relaxed">
              Congratulations on your digital template purchase! Follow this European stationery guide to achieve a luxury, tactile finish identical to bespoke letterpress ateliers.
            </p>
  
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              
              <!-- Paper Stock Recommendations -->
              <div class="p-4 rounded-lg bg-zinc-800/60 border border-zinc-700/60">
                <div class="flex items-center gap-2 mb-2 text-amber-400 font-serif font-bold text-sm">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Recommended Paper Weights
                </div>
                <ul class="text-xs space-y-2 text-zinc-300">
                  <li><strong class="text-white">300 GSM – 350 GSM</strong> (120 lb – 130 lb cover)</li>
                  <li><span class="text-amber-300 font-medium">Cotton Rag / Deckle Edge:</span> For romantic, organic European weddings.</li>
                  <li><span class="text-amber-300 font-medium">Woven Linen Cardstock:</span> Crisp, timeless texture for editorial suites.</li>
                  <li><span class="text-amber-300 font-medium">Eggshell Matte Ultra-White:</span> Sharp contrast for modern Didot typography.</li>
                </ul>
              </div>
  
              <!-- Print Shop Partners -->
              <div class="p-4 rounded-lg bg-zinc-800/60 border border-zinc-700/60">
                <div class="flex items-center gap-2 mb-2 text-amber-400 font-serif font-bold text-sm">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Where to Print
                </div>
                <ul class="text-xs space-y-2 text-zinc-300">
                  <li><strong class="text-white">Prints of Love:</strong> Fast free 2–3 day delivery + free envelopes with orders.</li>
                  <li><strong class="text-white">VistaPrint / Zazzle:</strong> Select 5" × 7" flat card with Premium Linen finish.</li>
                  <li><strong class="text-white">Local European Printers:</strong> Solopress (UK), Helloprint (EU), or your local high-street print atelier.</li>
                  <li><strong class="text-white">At Home:</strong> Use rear-feed inkjet printer with heavy cardstock settings.</li>
                </ul>
              </div>
  
            </div>
  
            <!-- Cutting & Bleed instructions -->
            <div class="p-4 rounded-lg bg-zinc-800/40 border border-zinc-700/40 mb-6 text-xs text-zinc-300 space-y-2">
              <h4 class="font-serif font-bold text-white text-sm">Bleed & Crop Marks Explained</h4>
              <p>
                When exporting as <strong>Print-Ready PDF</strong>, keep <strong>"Include 0.125" Bleed"</strong> checked. This prevents any white margins when your print shop trims down the card. Use a metal ruler and craft knife / guillotine for home trimming along the corner tick marks.
              </p>
            </div>
  
            <div class="flex justify-end">
              <button id="guide-ok-btn" class="px-6 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-zinc-950 font-serif font-bold text-xs uppercase tracking-wider transition">
                Got It, Thank You
              </button>
            </div>
  
          </div>
        </div>
      `;
  
      document.body.insertAdjacentHTML('beforeend', guideHTML);
      document.getElementById('close-print-guide').addEventListener('click', () => {
        document.getElementById('print-guide-modal').remove();
      });
      document.getElementById('guide-ok-btn').addEventListener('click', () => {
        document.getElementById('print-guide-modal').remove();
      });
    }
  
    showSellerToolkit() {
      const existing = document.getElementById('seller-toolkit-modal');
      if (existing) existing.remove();
  
      const toolkitHTML = `
        <div id="seller-toolkit-modal" class="fixed inset-0 z-[999] bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div class="relative w-full max-w-xl bg-zinc-900 border border-zinc-700/80 rounded-xl shadow-2xl p-6 text-zinc-200">
            
            <button id="close-seller-toolkit" class="absolute top-5 right-5 text-zinc-400 hover:text-white p-2">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
  
            <div class="flex items-center gap-3 mb-4">
              <span class="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-serif font-bold uppercase tracking-wider border border-amber-500/30">
                Etsy Shop Owner
              </span>
              <h3 class="text-xl font-serif font-bold text-white tracking-wide">
                Etsy Digital Delivery & Demo Kit
              </h3>
            </div>
  
            <p class="text-xs text-zinc-400 mb-5 leading-relaxed">
              Provide this self-hosted studio link directly inside your Etsy PDF download or email automated access to your buyers.
            </p>
  
            <div class="space-y-4 text-xs">
              <div>
                <label class="block text-zinc-400 mb-1 font-medium">Customer Demo / Access Link Generator:</label>
                <div class="flex items-center gap-2">
                  <input id="demo-link-input" type="text" readonly 
                         value="${window.location.origin}${window.location.pathname}?order=ETSY-88912&buyer=Sophie" 
                         class="flex-1 bg-zinc-950 border border-zinc-700 rounded px-3 py-2 text-zinc-300 font-mono text-[11px]" />
                  <button id="copy-demo-link" class="px-3 py-2 rounded bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-amber-400 font-medium whitespace-nowrap transition">
                    Copy Link
                  </button>
                </div>
              </div>
  
              <div>
                <label class="block text-zinc-400 mb-1 font-medium">Copyable Etsy Order Message Template:</label>
                <textarea readonly class="w-full h-28 bg-zinc-950 border border-zinc-700 rounded p-2.5 text-zinc-300 font-mono text-[11px] leading-relaxed">
  Dear Sophie,
  
  Thank you for your order! Here is your exclusive access link to personalize your luxury invitation:
  [LINK_HERE]
  
  You can edit all text, fonts, colors, and download print-ready 300 DPI PDFs with bleed and trim marks.
  
  Warm regards,
  Your European Stationery Atelier</textarea>
              </div>
            </div>
  
            <div class="mt-6 flex justify-end">
              <button id="close-toolkit-btn" class="px-5 py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-serif tracking-wider uppercase">
                Close Toolkit
              </button>
            </div>
  
          </div>
        </div>
      `;
  
      document.body.insertAdjacentHTML('beforeend', toolkitHTML);
  
      document.getElementById('close-seller-toolkit').addEventListener('click', () => {
        document.getElementById('seller-toolkit-modal').remove();
      });
      document.getElementById('close-toolkit-btn').addEventListener('click', () => {
        document.getElementById('seller-toolkit-modal').remove();
      });
      document.getElementById('copy-demo-link').addEventListener('click', () => {
        const input = document.getElementById('demo-link-input');
        input.select();
        navigator.clipboard.writeText(input.value);
        alert('Access link copied to clipboard!');
      });
    }
  }
  
  

  // =========================================================================
  // MODULE: js/app.js
  // =========================================================================

  /**
   * Main Application Controller for European Luxury Invitation Studio
   * Manages UI interactions, template gallery, left/right sidebars, and export modals.
   */
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
      document.getElementById('btn-reset-card')?.addEventListener('click', () => {
        this.resetCurrentTemplate({ showConfirm: true });
      });
  
      // Zoom
      document.getElementById('btn-zoom-in')?.addEventListener('click', () => {
        this.editor.zoom = Math.min(1.5, this.editor.zoom + 0.1);
        this.editor.render();
        const currentSelId = this.editor.selectedElementId;
        if (currentSelId) this.editor.selectElement(currentSelId, { forceRefresh: true });
        this.syncZoomDisplay();
      });
      document.getElementById('btn-zoom-out')?.addEventListener('click', () => {
        this.editor.zoom = Math.max(0.28, this.editor.zoom - 0.1);
        this.editor.render();
        const currentSelId = this.editor.selectedElementId;
        if (currentSelId) this.editor.selectElement(currentSelId, { forceRefresh: true });
        this.syncZoomDisplay();
      });
      document.getElementById('btn-zoom-reset')?.addEventListener('click', () => {
        this.resetZoom();
      });
      document.getElementById('zoom-display')?.addEventListener('click', () => {
        this.resetZoom();
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
      this.hideLiveEditDock();
      if (this.editor?.selectedElementId) {
        this.editor.selectElement(null);
      }
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
  
    resetZoom() {
      if (!this.editor?.currentTemplate) return;
      const currentSelId = this.editor.selectedElementId;
      // Toggle: if zoomed away from 100%, reset cleanly to 100%; if already 100%, fit to viewport
      if (Math.abs(this.editor.zoom - 1) > 0.05) {
        this.editor.zoom = 1;
      } else {
        const stage = document.getElementById('canvas-outer-stage');
        if (stage) {
          const padX = 24;
          const padY = 120;
          const availW = Math.max(180, stage.clientWidth - padX);
          const availH = Math.max(220, stage.clientHeight - padY);
          const fit = Math.min(availW / 400, availH / 560, 1);
          this.editor.zoom = Math.max(0.28, Math.min(1, Math.floor(fit * 100) / 100));
        } else {
          this.editor.zoom = 1;
        }
      }
      this.editor.render();
      if (currentSelId) {
        this.editor.selectElement(currentSelId, { forceRefresh: true });
      }
      this.syncZoomDisplay();
      this.exporter?.showToast(`Zoom: ${Math.round(this.editor.zoom * 100)}%`);
    }
  
    resetCurrentTemplate({ showConfirm = true } = {}) {
      if (!this.editor?.currentTemplate) return;
      const currentId = this.editor.currentTemplate.id;
      const orig = TEMPLATES.find(t => t.id === currentId);
      if (!orig) {
        this.exporter?.showToast('Original template not found', 'error');
        return;
      }
  
      if (showConfirm) {
        const ok = window.confirm('Reset this card back to original template design?\n\nAll text, colors, and layout will be restored to defaults. (You can also press Ctrl+Z / Undo to revert this reset).');
        if (!ok) return;
      }
  
      // Save current state so the user can easily Undo the reset if desired
      this.editor.saveState();
  
      // Reload template fresh from source definitions
      this.editor.loadTemplate(orig);
  
      // Keep active section and lobby in sync
      this.activeSection = orig.section;
      this.lobbySectionId = orig.section;
  
      // Refresh UI components
      this.renderLeftSidebar();
      this.renderInspector(null);
      this.fitCanvasToViewport();
      this.exporter?.showToast('Card restored to original template design.');
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
    // LEFT SIDEBAR: DOCKED ELEMENT EDITOR MODAL (NEVER COVERS THE TEMPLATE CARD)
    // =========================================================================
    hideLiveEditDock() {
      const dock = document.getElementById('live-edit-dock');
      if (dock) {
        dock.classList.add('is-hidden');
        dock.innerHTML = '';
      }
      const leftContent = document.getElementById('sidebar-left-content');
      if (leftContent) {
        leftContent.classList.remove('hidden');
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
      const leftContent = document.getElementById('sidebar-left-content');
      if (leftContent) {
        leftContent.classList.add('hidden');
      }
  
      // Automatically highlight the appropriate tab icon on the left rail
      let targetTab = 'text';
      if (element.type === 'text') targetTab = 'text';
      else if (element.type === 'image') targetTab = 'photos';
      else if (element.type === 'qr-code') targetTab = 'qr';
      else if (element.type === 'svg' || element.type === 'wax-seal') targetTab = 'elements';
  
      this.activeLeftTab = targetTab;
      document.querySelectorAll('.tab-btn').forEach(btn => {
        const isActive = btn.getAttribute('data-tab') === targetTab;
        btn.classList.toggle('text-amber-400', isActive);
        btn.classList.toggle('bg-zinc-800/80', isActive);
        btn.classList.toggle('text-zinc-400', !isActive);
      });
  
      if (window.innerWidth <= 900) {
        this.openStudioDrawer('tools');
      }
  
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
  
      const quickFonts = [
        { name: 'Garamond', family: "'Cormorant Garamond', serif" },
        { name: 'Bodoni', family: "'Bodoni Moda', serif" },
        { name: 'Playfair', family: "'Playfair Display', serif" },
        { name: 'Cinzel', family: "'Cinzel', serif" },
        { name: 'Great Vibes', family: "'Great Vibes', cursive" },
        { name: 'Pinyon', family: "'Pinyon Script', cursive" }
      ];
  
      if (element.type === 'text') {
        dock.innerHTML = `
          <!-- Done / Back Button -->
          <button type="button" id="dock-done-btn" class="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-zinc-950 font-serif font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-1.5 mb-3 cursor-pointer">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            <span>Done • Back to Suite</span>
          </button>
  
          <!-- Header -->
          <div class="live-edit-dock-header">
            <div>
              <p class="live-edit-dock-sub">Selected text layer</p>
              <h3 class="live-edit-dock-title">Edit Typography</h3>
            </div>
            <div class="flex items-center gap-1">
              <button type="button" id="dock-dup-btn" title="Duplicate Text (Ctrl+D)" class="p-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
              </button>
              <button type="button" id="dock-del-btn" title="Delete Text (Del)" class="p-1.5 rounded bg-red-950/60 hover:bg-red-900 border border-red-800/60 text-red-400 transition">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              </button>
            </div>
          </div>
  
          <!-- Text Content Area -->
          <div class="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1.5 mb-3">
            <div class="flex items-center justify-between">
              <label class="text-amber-300 font-serif font-bold uppercase tracking-wider text-[10px]">Change text content</label>
              <span class="text-[9px] text-zinc-400">Live sync</span>
            </div>
            <textarea id="dock-text-content" rows="3" placeholder="Type your text…" class="w-full bg-zinc-950 border border-amber-500/50 rounded-lg p-2 text-zinc-100 text-xs focus:outline-none focus:border-amber-400 leading-relaxed shadow-inner font-sans">${this.editor.escapeHtml(element.content || '')}</textarea>
          </div>
  
          <!-- Font Size Controls -->
          <div class="mb-3">
            <div class="flex items-center justify-between mb-1">
              <label class="text-[11px] text-zinc-400 font-medium">Font Size:</label>
              <span id="dock-fs-val" class="font-mono text-amber-300 font-bold text-xs">${element.fontSize || 14}px</span>
            </div>
            <div class="flex items-center gap-1.5">
              <button type="button" id="dock-fs-down" class="w-7 h-7 rounded bg-zinc-950 border border-zinc-700 hover:bg-zinc-800 text-zinc-200 font-bold flex items-center justify-center transition text-xs">− Size</button>
              <input id="dock-fs-slider" type="range" min="8" max="80" value="${element.fontSize || 14}" class="flex-1 accent-amber-500 cursor-pointer" />
              <button type="button" id="dock-fs-up" class="w-7 h-7 rounded bg-zinc-950 border border-zinc-700 hover:bg-zinc-800 text-zinc-200 font-bold flex items-center justify-center transition text-xs">+ Size</button>
            </div>
          </div>
  
          <!-- Font Family Selector -->
          <div class="mb-3">
            <label class="block text-[11px] text-zinc-400 mb-1 font-medium">European Luxury Fonts:</label>
            <div class="grid grid-cols-3 gap-1 mb-1.5">
              ${quickFonts.map(f => `
                <button type="button" class="dock-font-chip px-1.5 py-1 rounded text-[10px] truncate border ${element.fontFamily === f.family ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold' : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white'}" data-font="${f.family}">
                  ${f.name}
                </button>
              `).join('')}
            </div>
            <select id="dock-font-family" class="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-2 py-1.5 text-zinc-200 text-xs focus:outline-none focus:border-amber-500">
              ${LUXURY_FONTS.map(f => `
                <option value="${f.family}" ${element.fontFamily === f.family ? 'selected' : ''}>
                  ${f.name} (${f.category})
                </option>
              `).join('')}
            </select>
          </div>
  
          <!-- Style & Alignment -->
          <div class="mb-3">
            <label class="block text-[11px] text-zinc-400 mb-1 font-medium">Style & Alignment:</label>
            <div class="flex items-center gap-1.5">
              <button type="button" id="dock-toggle-bold" class="flex-1 py-1 px-2 rounded bg-zinc-950 border ${element.fontWeight === '700' || element.fontWeight === 'bold' ? 'border-amber-500 text-amber-300 bg-amber-500/10 font-bold' : 'border-zinc-800 text-zinc-300'} text-xs text-center transition">
                Bold
              </button>
              <button type="button" id="dock-toggle-italic" class="flex-1 py-1 px-2 rounded bg-zinc-950 border ${element.fontStyle === 'italic' ? 'border-amber-500 text-amber-300 bg-amber-500/10 italic' : 'border-zinc-800 text-zinc-300'} text-xs text-center transition">
                Italic
              </button>
              <div class="flex items-center bg-zinc-950 rounded border border-zinc-800 p-0.5">
                <button type="button" id="dock-align-left" class="p-1 rounded ${element.textAlign === 'left' ? 'text-amber-400 bg-zinc-800' : 'text-zinc-400 hover:text-white'} transition" title="Align Left">
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h10M4 18h14"/></svg>
                </button>
                <button type="button" id="dock-align-center" class="p-1 rounded ${!element.textAlign || element.textAlign === 'center' ? 'text-amber-400 bg-zinc-800' : 'text-zinc-400 hover:text-white'} transition" title="Align Center">
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M7 12h10M5 18h14"/></svg>
                </button>
                <button type="button" id="dock-align-right" class="p-1 rounded ${element.textAlign === 'right' ? 'text-amber-400 bg-zinc-800' : 'text-zinc-400 hover:text-white'} transition" title="Align Right">
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M10 12h10M6 18h14"/></svg>
                </button>
              </div>
            </div>
          </div>
  
          <!-- Gold Foil Pressed Toggle -->
          <div class="p-2 rounded-lg bg-zinc-950 border border-amber-500/30 flex items-center justify-between mb-3">
            <div>
              <span class="text-xs font-serif font-bold text-amber-300 block flex items-center gap-1">
                <span>✨ Gold Foil Pressed</span>
              </span>
              <span class="text-[9px] text-zinc-500">Metallic gold leaf shimmer</span>
            </div>
            <input type="checkbox" id="dock-foil-check" ${element.isFoil ? 'checked' : ''} class="w-4 h-4 accent-amber-500 cursor-pointer" />
          </div>
  
          <!-- Color Palette Swatches & Picker -->
          <div class="mb-3">
            <label class="block text-[11px] text-zinc-400 mb-1 font-medium">Text Color:</label>
            <div class="flex items-center gap-1.5 bg-zinc-950 p-1.5 rounded-lg border border-zinc-800">
              ${luxuryColors.map(c => `
                <button type="button" class="dock-swatch-btn w-5 h-5 rounded-full transition hover:scale-110 shrink-0" 
                        style="background-color: ${c.hex}; ${element.color === c.hex ? 'ring-2 ring-amber-400 ring-offset-1 ring-offset-zinc-950' : 'border: 1px solid rgba(255,255,255,0.2)'}" 
                        data-hex="${c.hex}" title="${c.name}">
                </button>
              `).join('')}
              <div class="h-4 w-px bg-zinc-800 mx-0.5"></div>
              <input id="dock-color-picker" type="color" value="${element.color || '#2C2825'}" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" title="Custom Color" />
            </div>
          </div>
  
          <!-- Letter Spacing -->
          <div class="mb-3">
            <div class="flex items-center justify-between mb-1">
              <label class="text-[11px] text-zinc-400 font-medium">Letter Spacing:</label>
              <span id="dock-spacing-val" class="font-mono text-zinc-300 text-xs">${element.letterSpacing !== undefined ? element.letterSpacing : 0}px</span>
            </div>
            <input id="dock-letter-spacing" type="range" min="0" max="10" step="0.5" value="${element.letterSpacing || 0}" class="w-full accent-amber-500 cursor-pointer" />
          </div>
  
          <!-- Center Alignment -->
          <div class="pt-2 border-t border-zinc-800/80">
            <button type="button" id="dock-center-x" class="w-full py-1.5 px-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-[11px] font-serif transition text-center">
              ⬌ Center Horizontally
            </button>
          </div>
  
          <!-- Layer Ordering Controls -->
          <div class="pt-2 border-t border-zinc-800/80 space-y-1.5">
            <div class="flex items-center justify-between text-[11px] text-zinc-400 font-medium">
              <span>Layer Order:</span>
              <span class="text-zinc-500 font-mono text-[10px]">Position: <strong id="dock-layer-num" class="text-amber-400 font-bold">Layer ${element.zIndex || 1}</strong></span>
            </div>
            <div class="grid grid-cols-2 gap-1.5">
              <button type="button" id="dock-bring-fwd" class="py-1.5 px-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 text-zinc-200 hover:text-amber-300 text-[11px] font-medium transition flex items-center justify-center gap-1.5 shadow-sm" title="Bring Forward (1 Layer Up)">
                <span>▲ Bring Forward</span>
              </button>
              <button type="button" id="dock-send-bwd" class="py-1.5 px-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 text-zinc-200 hover:text-amber-300 text-[11px] font-medium transition flex items-center justify-center gap-1.5 shadow-sm" title="Send Backward (1 Layer Down)">
                <span>▼ Send Backward</span>
              </button>
            </div>
          </div>
        `;
  
        // Event Bindings for Text
        const textInput = document.getElementById('dock-text-content');
        textInput?.addEventListener('input', (e) => {
          this.editor.updateElement(element.id, { content: e.target.value }, { saveState: true, updateInspector: false });
          const sideTa = document.getElementById('ins-text-content');
          if (sideTa && document.activeElement !== sideTa) sideTa.value = e.target.value;
        });
  
        document.getElementById('dock-fs-down')?.addEventListener('click', () => {
          const next = Math.max(8, (element.fontSize || 14) - 1);
          this.editor.updateElement(element.id, { fontSize: next });
          const lbl = document.getElementById('dock-fs-val');
          if (lbl) lbl.textContent = `${next}px`;
          const slider = document.getElementById('dock-fs-slider');
          if (slider) slider.value = next;
        });
  
        document.getElementById('dock-fs-up')?.addEventListener('click', () => {
          const next = Math.min(80, (element.fontSize || 14) + 1);
          this.editor.updateElement(element.id, { fontSize: next });
          const lbl = document.getElementById('dock-fs-val');
          if (lbl) lbl.textContent = `${next}px`;
          const slider = document.getElementById('dock-fs-slider');
          if (slider) slider.value = next;
        });
  
        document.getElementById('dock-fs-slider')?.addEventListener('input', (e) => {
          const next = parseInt(e.target.value, 10);
          this.editor.updateElement(element.id, { fontSize: next });
          const lbl = document.getElementById('dock-fs-val');
          if (lbl) lbl.textContent = `${next}px`;
        });
  
        dock.querySelectorAll('.dock-font-chip').forEach(btn => {
          btn.addEventListener('click', () => {
            const font = btn.getAttribute('data-font');
            this.editor.updateElement(element.id, { fontFamily: font });
            this.showLiveEditDock(this.editor.getSelectedElement() || element);
          });
        });
  
        document.getElementById('dock-font-family')?.addEventListener('change', (e) => {
          this.editor.updateElement(element.id, { fontFamily: e.target.value });
          this.showLiveEditDock(this.editor.getSelectedElement() || element);
        });
  
        document.getElementById('dock-toggle-bold')?.addEventListener('click', () => {
          const isBold = element.fontWeight === '700' || element.fontWeight === 'bold';
          this.editor.updateElement(element.id, { fontWeight: isBold ? '400' : '700' });
          this.showLiveEditDock(this.editor.getSelectedElement() || element);
        });
  
        document.getElementById('dock-toggle-italic')?.addEventListener('click', () => {
          const isItalic = element.fontStyle === 'italic';
          this.editor.updateElement(element.id, { fontStyle: isItalic ? 'normal' : 'italic' });
          this.showLiveEditDock(this.editor.getSelectedElement() || element);
        });
  
        document.getElementById('dock-align-left')?.addEventListener('click', () => {
          this.editor.updateElement(element.id, { textAlign: 'left' });
          this.showLiveEditDock(this.editor.getSelectedElement() || element);
        });
        document.getElementById('dock-align-center')?.addEventListener('click', () => {
          this.editor.updateElement(element.id, { textAlign: 'center' });
          this.showLiveEditDock(this.editor.getSelectedElement() || element);
        });
        document.getElementById('dock-align-right')?.addEventListener('click', () => {
          this.editor.updateElement(element.id, { textAlign: 'right' });
          this.showLiveEditDock(this.editor.getSelectedElement() || element);
        });
  
        document.getElementById('dock-foil-check')?.addEventListener('change', (e) => {
          this.editor.updateElement(element.id, { isFoil: e.target.checked });
        });
  
        dock.querySelectorAll('.dock-swatch-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const hex = btn.getAttribute('data-hex');
            this.editor.updateElement(element.id, { color: hex, isFoil: false });
            this.showLiveEditDock(this.editor.getSelectedElement() || element);
          });
        });
  
        document.getElementById('dock-color-picker')?.addEventListener('input', (e) => {
          this.editor.updateElement(element.id, { color: e.target.value, isFoil: false });
        });
  
        document.getElementById('dock-letter-spacing')?.addEventListener('input', (e) => {
          const sp = parseFloat(e.target.value);
          this.editor.updateElement(element.id, { letterSpacing: sp });
          const lbl = document.getElementById('dock-spacing-val');
          if (lbl) lbl.textContent = `${sp}px`;
        });
  
        document.getElementById('dock-center-x')?.addEventListener('click', () => {
          const newX = Math.round(200 - element.width / 2);
          this.editor.updateElement(element.id, { x: newX });
        });
        document.getElementById('dock-bring-fwd')?.addEventListener('click', () => this.editor.bringForward(element.id));
        document.getElementById('dock-send-bwd')?.addEventListener('click', () => this.editor.sendBackward(element.id));
        document.getElementById('dock-dup-btn')?.addEventListener('click', () => this.editor.duplicateElement(element.id));
        document.getElementById('dock-del-btn')?.addEventListener('click', () => this.editor.deleteElement(element.id));
        document.getElementById('dock-done-btn')?.addEventListener('click', () => this.editor.selectElement(null));
  
        requestAnimationFrame(() => {
          if (textInput && document.activeElement !== textInput) {
            textInput.focus();
          }
        });
  
      } else if (element.type === 'image') {
        const src = this.editor.getEffectiveBg(element.src) || element.src || '';
        dock.innerHTML = `
          <!-- Done / Back Button -->
          <button type="button" id="dock-done-btn" class="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-zinc-950 font-serif font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-1.5 mb-3 cursor-pointer">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            <span>Done • Back to Suite</span>
          </button>
  
          <div class="live-edit-dock-header">
            <div>
              <p class="live-edit-dock-sub">Selected photo</p>
              <h3 class="live-edit-dock-title">Edit Photo & Frame</h3>
            </div>
            <button type="button" id="dock-del-btn" title="Delete Photo" class="p-1.5 rounded bg-red-950/60 hover:bg-red-900 border border-red-800/60 text-red-400 transition">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
          </div>
  
          <!-- Replace / Upload Custom Photo Card -->
          <div class="p-3 bg-amber-500/10 rounded-xl border border-amber-500/40 space-y-2.5 mb-3.5 shadow-sm">
            <div class="flex items-center gap-2 text-amber-300 font-serif font-bold text-xs">
              <svg class="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Replace This Photo</span>
            </div>
            <div class="w-full h-32 rounded-lg overflow-hidden border border-zinc-700 bg-zinc-950 flex items-center justify-center">
              <img id="dock-photo-preview" src="${src}" alt="Current photo" class="w-full h-full object-cover" />
            </div>
            <p class="text-[10px] text-zinc-400 leading-tight">
              Upload your couple portrait or venue photo. The card updates instantly.
            </p>
            <label class="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-zinc-950 font-serif font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 cursor-pointer text-center">
              <span>Choose / Upload Photo</span>
              <input id="dock-photo-file" type="file" accept="image/*" class="hidden" />
            </label>
          </div>
  
          <!-- Silhouette Frame Masks -->
          <div class="mb-3.5">
            <label class="block text-[11px] text-zinc-400 mb-1.5 font-medium">Silhouette Mask:</label>
            <div class="grid grid-cols-2 gap-1.5">
              <button type="button" class="dock-mask-btn p-2 rounded bg-zinc-950 border ${element.mask === 'mask-arch' ? 'border-amber-500 text-amber-300 font-bold' : 'border-zinc-800 text-zinc-300'} text-xs text-center transition" data-mask="mask-arch">
                Arch Cutout
              </button>
              <button type="button" class="dock-mask-btn p-2 rounded bg-zinc-950 border ${element.mask === 'mask-oval' ? 'border-amber-500 text-amber-300 font-bold' : 'border-zinc-800 text-zinc-300'} text-xs text-center transition" data-mask="mask-oval">
                Oval Cameo
              </button>
              <button type="button" class="dock-mask-btn p-2 rounded bg-zinc-950 border ${element.mask === 'mask-scallop' ? 'border-amber-500 text-amber-300 font-bold' : 'border-zinc-800 text-zinc-300'} text-xs text-center transition" data-mask="mask-scallop">
                Scalloped Frame
              </button>
              <button type="button" class="dock-mask-btn p-2 rounded bg-zinc-950 border ${!element.mask || element.mask === 'rounded-sm' || element.mask === 'mask-rectangle' ? 'border-amber-500 text-amber-300 font-bold' : 'border-zinc-800 text-zinc-300'} text-xs text-center transition" data-mask="mask-rectangle">
                Classic Rectangle
              </button>
            </div>
          </div>
  
          <!-- Layer Ordering Controls -->
          <div class="pt-2 border-t border-zinc-800/80 space-y-1.5">
            <div class="flex items-center justify-between text-[11px] text-zinc-400 font-medium">
              <span>Layer Order:</span>
              <span class="text-zinc-500 font-mono text-[10px]">Position: <strong id="dock-layer-num" class="text-amber-400 font-bold">Layer ${element.zIndex || 1}</strong></span>
            </div>
            <div class="grid grid-cols-2 gap-1.5">
              <button type="button" id="dock-bring-fwd" class="py-1.5 px-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 text-zinc-200 hover:text-amber-300 text-[11px] font-medium transition flex items-center justify-center gap-1.5 shadow-sm" title="Bring Forward (1 Layer Up)">
                <span>▲ Bring Forward</span>
              </button>
              <button type="button" id="dock-send-bwd" class="py-1.5 px-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 text-zinc-200 hover:text-amber-300 text-[11px] font-medium transition flex items-center justify-center gap-1.5 shadow-sm" title="Send Backward (1 Layer Down)">
                <span>▼ Send Backward</span>
              </button>
            </div>
          </div>
        `;
  
        document.getElementById('dock-photo-file')?.addEventListener('change', (e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = (ev) => {
            this.editor.updateElement(element.id, { src: ev.target.result });
            this.showLiveEditDock(this.editor.getSelectedElement() || element);
          };
          reader.readAsDataURL(file);
        });
  
        dock.querySelectorAll('.dock-mask-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            this.editor.updateElement(element.id, { mask: btn.getAttribute('data-mask') });
            this.showLiveEditDock(this.editor.getSelectedElement() || element);
          });
        });
  
        document.getElementById('dock-bring-fwd')?.addEventListener('click', () => this.editor.bringForward(element.id));
        document.getElementById('dock-send-bwd')?.addEventListener('click', () => this.editor.sendBackward(element.id));
        document.getElementById('dock-del-btn')?.addEventListener('click', () => this.editor.deleteElement(element.id));
        document.getElementById('dock-done-btn')?.addEventListener('click', () => this.editor.selectElement(null));
  
      } else if (element.type === 'qr-code') {
        dock.innerHTML = `
          <!-- Done / Back Button -->
          <button type="button" id="dock-done-btn" class="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-zinc-950 font-serif font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-1.5 mb-3 cursor-pointer">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            <span>Done • Back to Suite</span>
          </button>
  
          <div class="live-edit-dock-header">
            <div>
              <p class="live-edit-dock-sub">Dynamic RSVP Code</p>
              <h3 class="live-edit-dock-title">RSVP QR Code</h3>
            </div>
            <button type="button" id="dock-del-btn" title="Delete QR Code" class="p-1.5 rounded bg-red-950/60 hover:bg-red-900 border border-red-800/60 text-red-400 transition">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
          </div>
  
          <div class="space-y-3 mb-3.5">
            <div>
              <label class="block text-[11px] text-zinc-400 mb-1 font-medium">Destination RSVP URL:</label>
              <input id="dock-qr-url" type="url" value="${this.editor.escapeHtml(element.qrValue || '')}" placeholder="https://withjoy.com/your-wedding" 
                     class="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-2.5 py-2 text-zinc-200 text-xs focus:outline-none focus:border-amber-500" />
            </div>
  
            <div class="p-3 bg-zinc-950 rounded-lg border border-zinc-800 text-[11px] text-zinc-400 leading-relaxed">
              Point your smartphone camera at the card on screen to test scan this live QR code!
            </div>
          </div>
  
          <!-- Layer Ordering Controls -->
          <div class="pt-2 border-t border-zinc-800/80 space-y-1.5">
            <div class="flex items-center justify-between text-[11px] text-zinc-400 font-medium">
              <span>Layer Order:</span>
              <span class="text-zinc-500 font-mono text-[10px]">Position: <strong id="dock-layer-num" class="text-amber-400 font-bold">Layer ${element.zIndex || 1}</strong></span>
            </div>
            <div class="grid grid-cols-2 gap-1.5">
              <button type="button" id="dock-bring-fwd" class="py-1.5 px-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 text-zinc-200 hover:text-amber-300 text-[11px] font-medium transition flex items-center justify-center gap-1.5 shadow-sm" title="Bring Forward (1 Layer Up)">
                <span>▲ Bring Forward</span>
              </button>
              <button type="button" id="dock-send-bwd" class="py-1.5 px-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 text-zinc-200 hover:text-amber-300 text-[11px] font-medium transition flex items-center justify-center gap-1.5 shadow-sm" title="Send Backward (1 Layer Down)">
                <span>▼ Send Backward</span>
              </button>
            </div>
          </div>
        `;
  
        document.getElementById('dock-qr-url')?.addEventListener('input', (e) => {
          this.editor.updateElement(element.id, { qrValue: e.target.value });
        });
  
        document.getElementById('dock-bring-fwd')?.addEventListener('click', () => this.editor.bringForward(element.id));
        document.getElementById('dock-send-bwd')?.addEventListener('click', () => this.editor.sendBackward(element.id));
        document.getElementById('dock-del-btn')?.addEventListener('click', () => this.editor.deleteElement(element.id));
        document.getElementById('dock-done-btn')?.addEventListener('click', () => this.editor.selectElement(null));
  
      } else {
        // SVG, Wax Seal, or other elements
        dock.innerHTML = `
          <!-- Done / Back Button -->
          <button type="button" id="dock-done-btn" class="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-zinc-950 font-serif font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-1.5 mb-3 cursor-pointer">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            <span>Done • Back to Suite</span>
          </button>
  
          <div class="live-edit-dock-header">
            <div>
              <p class="live-edit-dock-sub">Selected artwork</p>
              <h3 class="live-edit-dock-title">Artwork & Seal</h3>
            </div>
            <button type="button" id="dock-del-btn" title="Delete Element" class="p-1.5 rounded bg-red-950/60 hover:bg-red-900 border border-red-800/60 text-red-400 transition">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
          </div>
  
          <div class="space-y-3 mb-3.5">
            <div>
              <label class="block text-[11px] text-zinc-400 mb-1 font-medium">Element Color:</label>
              <div class="flex items-center gap-1.5 bg-zinc-950 p-1.5 rounded-lg border border-zinc-800">
                ${luxuryColors.map(c => `
                  <button type="button" class="dock-swatch-btn w-5 h-5 rounded-full transition hover:scale-110 shrink-0" 
                          style="background-color: ${c.hex}; ${element.color === c.hex ? 'ring-2 ring-amber-400 ring-offset-1 ring-offset-zinc-950' : 'border: 1px solid rgba(255,255,255,0.2)'}" 
                          data-hex="${c.hex}" title="${c.name}">
                  </button>
                `).join('')}
                <div class="h-4 w-px bg-zinc-800 mx-0.5"></div>
                <input id="dock-color-picker" type="color" value="${element.color || '#D4AF37'}" class="w-6 h-6 rounded bg-transparent cursor-pointer shrink-0" />
              </div>
            </div>
  
            <div>
              <div class="flex items-center justify-between mb-1">
                <label class="text-[11px] text-zinc-400 font-medium">Opacity:</label>
                <span id="dock-opacity-val" class="font-mono text-zinc-300 text-xs">${Math.round((element.opacity !== undefined ? element.opacity : 1) * 100)}%</span>
              </div>
              <input id="dock-opacity" type="range" min="0.1" max="1" step="0.05" value="${element.opacity !== undefined ? element.opacity : 1}" class="w-full accent-amber-500 cursor-pointer" />
            </div>
          </div>
  
          <!-- Layer Ordering Controls -->
          <div class="pt-2 border-t border-zinc-800/80 space-y-1.5">
            <div class="flex items-center justify-between text-[11px] text-zinc-400 font-medium">
              <span>Layer Order:</span>
              <span class="text-zinc-500 font-mono text-[10px]">Position: <strong id="dock-layer-num" class="text-amber-400 font-bold">Layer ${element.zIndex || 1}</strong></span>
            </div>
            <div class="grid grid-cols-2 gap-1.5">
              <button type="button" id="dock-bring-fwd" class="py-1.5 px-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 text-zinc-200 hover:text-amber-300 text-[11px] font-medium transition flex items-center justify-center gap-1.5 shadow-sm" title="Bring Forward (1 Layer Up)">
                <span>▲ Bring Forward</span>
              </button>
              <button type="button" id="dock-send-bwd" class="py-1.5 px-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 text-zinc-200 hover:text-amber-300 text-[11px] font-medium transition flex items-center justify-center gap-1.5 shadow-sm" title="Send Backward (1 Layer Down)">
                <span>▼ Send Backward</span>
              </button>
            </div>
          </div>
        `;
  
        dock.querySelectorAll('.dock-swatch-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            this.editor.updateElement(element.id, { color: btn.getAttribute('data-hex') });
            this.showLiveEditDock(this.editor.getSelectedElement() || element);
          });
        });
  
        document.getElementById('dock-color-picker')?.addEventListener('input', (e) => {
          this.editor.updateElement(element.id, { color: e.target.value });
        });
  
        document.getElementById('dock-opacity')?.addEventListener('input', (e) => {
          const val = parseFloat(e.target.value);
          this.editor.updateElement(element.id, { opacity: val });
          const lbl = document.getElementById('dock-opacity-val');
          if (lbl) lbl.textContent = `${Math.round(val * 100)}%`;
        });
  
        document.getElementById('dock-bring-fwd')?.addEventListener('click', () => this.editor.bringForward(element.id));
        document.getElementById('dock-send-bwd')?.addEventListener('click', () => this.editor.sendBackward(element.id));
        document.getElementById('dock-del-btn')?.addEventListener('click', () => this.editor.deleteElement(element.id));
        document.getElementById('dock-done-btn')?.addEventListener('click', () => this.editor.selectElement(null));
      }
  
      dock.scrollTo({ top: 0, behavior: 'smooth' });
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
          this.resetCurrentTemplate({ showConfirm: true });
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
  
          <!-- Layer Ordering Controls -->
          <div class="pt-2 border-t border-zinc-800/80 space-y-1.5">
            <div class="flex items-center justify-between text-[11px] text-zinc-400 font-medium">
              <span>Layer Order:</span>
              <span class="text-zinc-500 font-mono text-[10px]">Position: <strong id="pos-layer-val" class="text-amber-400 font-bold">Layer ${el.zIndex || 1}</strong></span>
            </div>
            <div class="grid grid-cols-2 gap-1.5">
              <button type="button" id="ins-bring-front" class="py-1.5 px-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 text-zinc-200 hover:text-amber-300 text-[11px] font-medium transition flex items-center justify-center gap-1.5 shadow-sm" title="Bring Forward (1 Layer Up)">
                <span>▲ Bring Forward</span>
              </button>
              <button type="button" id="ins-send-back" class="py-1.5 px-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500/50 text-zinc-200 hover:text-amber-300 text-[11px] font-medium transition flex items-center justify-center gap-1.5 shadow-sm" title="Send Backward (1 Layer Down)">
                <span>▼ Send Backward</span>
              </button>
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
  
      document.getElementById('ins-bring-front')?.addEventListener('click', () => {
        this.editor.bringForward(el.id);
        const val = document.getElementById('pos-layer-val');
        if (val) val.textContent = `Layer ${el.zIndex || 1}`;
      });
      document.getElementById('ins-send-back')?.addEventListener('click', () => {
        this.editor.sendBackward(el.id);
        const val = document.getElementById('pos-layer-val');
        if (val) val.textContent = `Layer ${el.zIndex || 1}`;
      });
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
  
  

})();
