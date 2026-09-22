# ⚜️ ATELIER LUMIÈRE — European Luxury Invitation Studio

> **Turnkey Digital Product for Etsy Sellers**  
> Tailored for European & International Clientele (UK, France, Italy, Scandinavia, Germany)

---

## 🌟 Overview

**Atelier Lumière** is an advanced, editorial-grade web application designed to be sold on **Etsy** as a premium digital product (similar to top-selling Corjl & Canva template suites).

It allows couples, event planners, and hosts to fully customize high-end European invitations on any browser and download **print-ready 300 DPI PDFs** (with 0.125" bleed and crop marks) or send interactive **digital mobile invites** with a 3D animated envelope and RSVP links.

---

## 🏛️ 5 Curated Sections & 20 Distinct Templates

Every section has its own distinctive aesthetic, typography, and mood:

### 1. Wedding & Destination Suites (5 Templates)
- **Tuscan Villa & Amalfi Olive Garden**: Warm terracotta & olive foliage, vintage estate sketch, deckle edge paper, Italian calligraphy, wax seal crest.
- **Parisian Vogue Editorial B&W**: High-fashion black & white luxury, bold Didot serif initials, crisp rules, editorial typography.
- **Cotswolds Wildflower & English Garden**: Romantic watercolor botanical borders, soft sage & blush rose, flowing cursive script, gold foil accenting.
- **Nordic Travertine & Architectural Arch**: Travertine limestone texture, arched window frame cutout silhouette, Scandinavian minimalist typography.
- **Midnight Celestial Emerald & Starlight**: Deep royal emerald velvet, antique gold constellation map, moon phases, dramatic foil typography.

### 2. Milestone Birthdays & Soirées (4 Templates)
- **French Riviera Spritz & Martini Club**: Hand-drawn olive martini illustration, retro bistro typography, chic Côte d'Azur aesthetic.
- **Speakeasy 1920s Art Deco Noir**: Great Gatsby midnight velvet, stepped geometric gold foil borders, 1920s luxury typography.
- **Old Money 30th / 40th Champagne Editorial**: French cream linen weave, dual-column editorial layout, crest monogram, understated luxury.
- **Studio 74 Disco Fever & Glamour**: Metallic chrome gradients, retro disco mirror ball illustration, groovy high-fashion chic.

### 3. Baby Shower & Christening / Baptism (4 Templates)
- **French Chateau Toile de Jouy**: Classic French blue & ivory pastoral toile pattern, antique monogram crest, royal heritage font.
- **Scandinavian Neutral Woodland**: Warm oat milk & eucalyptus palette, minimalist hand-drawn line-art fawn/rabbit motifs, soft organic typography.
- **Dainty Ballet Silk Bow & Scalloped Edge**: Pastel blush & ivory, delicate silk ribbon bow, scalloped borders, graceful cursive script.
- **Mediterranean Olive Branch Blessing**: Minimalist gold cross, sacred olive branch wreath, serene neutral aesthetic for Christenings and Baptisms.

### 4. Supper Clubs & Dinner Parties (4 Templates)
- **Italian Al Fresco Feast**: Illustrated banquet table with wine glasses, lemons & candles, checkered border, warm festive typography.
- **Parisian Wine & Jazz Salon**: Deep burgundy wine red, intimate candlelight motif, vintage French bistro typography.
- **English Country Garden Harvest Brunch**: Pressed botanical herbarium, wildflower frame, warm honey & linen tones.
- **Chef’s Tasting Table Minimalist**: High contrast bone white and charcoal, clean editorial grid, culinary menu aesthetic.

### 5. Black Tie Galas & Academic Honors (3 Templates)
- **Oxford Royal Navy & Gold Academy Honors**: Academic crest, gold braided border, navy & parchment, formal proclamation typography.
- **Haute Couture Charity Gala**: Espresso brown & champagne silk, ultra-modern condensed editorial typography, avant-garde framing.
- **Metropolitan Symphony Black Tie**: Classic tuxedo silhouette, gold stardust accents, orchestral sophistication.

---

## 🎨 Advanced WYSIWYG Canvas Editor

- **Typography Controls**: 20+ Google luxury fonts (*Cormorant Garamond, Bodoni Moda, Playfair Display, Cinzel, Great Vibes, Pinyon Script, Montserrat, etc.*).
- **Gold Foil Shimmer Simulation**: Toggle real metallic gold foil stamp effects.
- **Art & Elements**: Realistic 3D wax seals, botanical branches, architectural arch frames, champagne coupes, silk bows, crests, and dividers.
- **Paper Textures**: Cotton Deckle Edge Rag, Woven French Linen, Travertine Stone, Midnight Velvet, Royal Emerald, Burgundy Wine, Parchment.
- **Photo Upload**: Custom portrait upload with arch, oval, and scalloped frame cutouts.
- **Dynamic RSVP QR Code**: Type any URL (WithJoy, Google Form, WhatsApp) -> generates live high-resolution scannable QR code directly on the card.
- **Dual-Sided Card Switching**: Front (Main Invitation) & Back (Details / Itinerary / QR Code).
- **History**: Full Undo & Redo stack (Ctrl+Z / Ctrl+Y).

---

## 📦 Etsy Seller & Buyer Features

1. **Print-Ready PDF Export (300 DPI)**:
   - Formatted to standard **5" × 7"** card size.
   - Built-in **0.125" (3mm) Bleed** and **Crop / Trim Marks** for professional printers (Prints of Love, VistaPrint, Staples, local European print shops).
2. **Digital Image Downloads**:
   - High-resolution **PNG** & **JPG** for paperless invites via WhatsApp, Instagram Stories, and Email.
3. **Guest Experience (3D Envelope & RSVP)**:
   - Interactive 3D envelope opening animation with wax seal click.
   - 3D card flipping (Front / Back).
   - "RSVP Acceptance" with celebration confetti.
   - "Add to Google Calendar" & "Open in Google Maps" integration.
4. **Etsy Paper & Printing Guide**:
   - In-app modal detailing recommended cardstocks (300–350 GSM cotton rag, linen, eggshell matte) and cutting tips.
5. **Etsy Seller Toolkit**:
   - Instant access link generator with order ID simulation (`?order=ETSY-12345&buyer=Sophie`) and copyable customer message templates.

---

## 🚀 How to Run Locally

### Option 1: Direct in Browser
Double-click `index.html` in your file explorer.

### Option 2: Run with Node.js Server
```bash
node server.js
```
Then open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## ☁️ Deploy on Vercel (Wedding only)

This app is a **static** studio (HTML/CSS/JS). Do **not** choose the Node.js framework preset.

Vercel is configured to deploy **only the Wedding section**.

1. Import the GitHub repo on [Vercel](https://vercel.com/new)
2. Set **Framework Preset** → **Other**
3. **Build Command** → `node build.js --section=wedding` (already in `vercel.json`)
4. **Output Directory** → `public`
5. Deploy

Local commands:
- Full studio (all sections): `npm run build`
- Wedding-only (same as Vercel): `npm run build:wedding`

Master source files still keep **all** sections for later Etsy packs.

---

## 💼 How to Sell on Etsy

1. **ZIP delivery (recommended)**: Run `npm run pack:wedding` to generate a Wedding-only buyer ZIP at `etsy-releases/Wedding-Invitation-Builder.zip`. Upload that ZIP to Etsy. The master project keeps **all** sections for later packs (`npm run pack:section soiree`, etc.).
2. **Instant PDF Delivery (optional)**: Provide a branded PDF containing a hosted studio link if you prefer link delivery instead of ZIP.
3. **Zero Maintenance**: 100% client-side HTML5/CSS — buyers open `index.html` (double-click); no server required.

