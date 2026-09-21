/**
 * Complete Luxury Template Suite (20+ Highly Distinct, Creative Designs Across 5 Sections)
 * Built to sell on Etsy as top-tier digital products with rich multi-layered artwork,
 * 3D architectural arches, hanging lanterns, silk bows, wax seals, and event icons.
 */

export function getEffectiveBg(bgPath) {
  if (!bgPath) return '';
  if (typeof window !== 'undefined' && window.BACKGROUND_BASE64_DATA && window.BACKGROUND_BASE64_DATA[bgPath]) {
    return window.BACKGROUND_BASE64_DATA[bgPath];
  }
  return bgPath;
}

export const SECTIONS = [
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
];

export const TEMPLATES = [
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
