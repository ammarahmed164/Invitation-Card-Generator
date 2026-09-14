/**
 * Vector Artwork, Luxury Badges, Frames & Wax Seals
 * Handcrafted SVG assets for European invitation card styling
 */

export const ASSET_LIBRARY = {
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

