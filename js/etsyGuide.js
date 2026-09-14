/**
 * Etsy Digital Product Seller & Buyer Toolkit
 * Printing guides, paper recommendations, and Etsy order demo simulation.
 */

export class EtsyGuideManager {
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

