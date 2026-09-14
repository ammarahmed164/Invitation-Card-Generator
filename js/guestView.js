/**
 * Interactive Guest Experience & Digital Mobile Invite Module
 * 3D Envelope opening animation, card flip, RSVP actions, and Google Calendar / Maps integration.
 */

export class GuestExperienceModal {
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

  render() {
    const existing = document.getElementById('guest-experience-modal');
    if (existing) existing.remove();

    const t = this.editor.currentTemplate;
    const bgTexture = t.bgTexture || 'texture-deckle';
    const bgColor = t.bgColor || '#FAF7F2';

    // Extract key details from front template elements
    const titleEl = t.front.find(e => e.type === 'text' && (e.fontSize >= 20 || e.id.includes('name')));
    const dateEl = t.front.find(e => e.type === 'text' && (e.id.includes('date') || e.content.includes('202')));
    const venueEl = t.front.find(e => e.type === 'text' && (e.id.includes('venue') || e.id.includes('loc')));

    const eventTitle = titleEl ? titleEl.content : t.title;
    const eventDate = dateEl ? dateEl.content : 'Upcoming Event';
    const eventVenue = venueEl ? venueEl.content : 'Private Location';

    const modalHTML = `
      <div id="guest-experience-modal" class="fixed inset-0 z-[999] bg-zinc-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
        
        <!-- Close Button -->
        <button id="close-guest-modal" class="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-700 transition">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="relative w-full max-w-xl flex flex-col items-center py-6">
          
          <!-- Top Badge & Digital Product Hint -->
          <div class="mb-4 flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-serif tracking-widest uppercase">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Guest Experience • Interactive Digital Invite
          </div>

          <!-- 3D Envelope & Card Container -->
          <div id="envelope-wrapper" class="relative perspective-1000 w-[360px] sm:w-[400px] h-[520px] sm:h-[560px] flex items-center justify-center my-2">
            
            <!-- Realistic Envelope Back / Base -->
            <div id="envelope-body" class="absolute inset-0 bg-[#f3ede4] rounded-lg shadow-2xl border border-[#e0d6c5] overflow-hidden flex items-end justify-center">
              
              <!-- Envelope Liner Pattern -->
              <div class="absolute top-0 inset-x-0 h-44 bg-[#e8decf] opacity-40 border-b border-[#d8ccb8]"></div>

              <!-- Wax Seal Button (Click to Open) -->
              <div id="envelope-seal-btn" class="absolute top-36 z-30 cursor-pointer flex flex-col items-center group">
                <div class="wax-seal wax-red transform group-hover:scale-110 transition duration-300">
                  <span style="font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700;">RSVP</span>
                </div>
                <span class="mt-2 text-[11px] uppercase tracking-widest text-zinc-600 font-serif font-semibold group-hover:text-amber-700 transition">
                  Tap to Open Envelope
                </span>
              </div>

              <!-- Envelope Flap (Top triangle) -->
              <div id="envelope-flap" class="envelope-flap absolute top-0 inset-x-0 h-44 bg-[#e5dbc9] border-b-2 border-[#cfc1a9] shadow-md"
                   style="clip-path: polygon(0 0, 100% 0, 50% 100%);">
              </div>

              <!-- Card inside Envelope (Glides up when opened) -->
              <div id="envelope-card-inner" class="envelope-card relative w-[320px] sm:w-[350px] h-[450px] sm:h-[490px] shadow-2xl cursor-pointer">
                
                <!-- 3D Flipper -->
                <div id="guest-card-flipper" class="card-flipper relative w-full h-full">
                  
                  <!-- Card Front -->
                  <div class="card-front absolute inset-0 rounded-sm ${t.bgImage ? '' : bgTexture} overflow-hidden shadow-lg border border-black/5" 
                       style="background-color: ${bgColor}; ${t.bgImage ? `background-image: url('${this.editor.getEffectiveBg(t.bgImage)}'); background-size: cover; background-position: center;` : ''}">
                    <div class="w-full h-full transform scale-[0.8] sm:scale-[0.87] origin-top-left p-2">
                      ${t.front.map(el => this.editor.renderElementHTML(el, { preview: true, previewKey: 'guest-front' })).join('')}
                    </div>
                  </div>

                  <!-- Card Back -->
                  <div class="card-back absolute inset-0 rounded-sm ${bgTexture} overflow-hidden shadow-lg border border-black/5" 
                       style="background-color: ${bgColor};">
                    <div class="w-full h-full transform scale-[0.8] sm:scale-[0.87] origin-top-left p-2">
                      ${(t.back || []).map(el => this.editor.renderElementHTML(el, { preview: true, previewKey: 'guest-back' })).join('')}
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <!-- Interaction Controls (Flip card & RSVP actions) -->
          <div class="mt-6 w-full max-w-md flex flex-col gap-3 px-4">
            <div class="flex items-center justify-between gap-3">
              <button id="btn-flip-card" class="flex-1 py-2.5 px-4 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-amber-500/50 text-zinc-200 text-xs font-serif tracking-widest uppercase transition flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Flip Front / Back
              </button>

              <button id="btn-guest-rsvp" class="flex-1 py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-zinc-950 font-serif font-bold text-xs tracking-widest uppercase shadow-lg shadow-amber-900/30 transition flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                RSVP Acceptance
              </button>
            </div>

            <!-- Quick Action Links: Calendar & Maps -->
            <div class="grid grid-cols-2 gap-2 text-center text-[11px] font-sans">
              <button id="btn-add-calendar" class="py-2 px-3 rounded bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800 transition flex items-center justify-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Add to Google Calendar
              </button>
              
              <button id="btn-open-maps" class="py-2 px-3 rounded bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800 transition flex items-center justify-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Open in Google Maps
              </button>
            </div>

            <div class="text-center text-[10px] text-zinc-500 font-serif tracking-wider">
              ${eventTitle} • ${eventVenue}
            </div>

          </div>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    this.attachEvents(eventTitle, eventDate, eventVenue);
  }

  attachEvents(eventTitle, eventDate, eventVenue) {
    const modalEl = document.getElementById('guest-experience-modal');
    const closeBtn = document.getElementById('close-guest-modal');
    const sealBtn = document.getElementById('envelope-seal-btn');
    const envelopeBody = document.getElementById('envelope-body');
    const flipper = document.getElementById('guest-card-flipper');
    const flipBtn = document.getElementById('btn-flip-card');
    const rsvpBtn = document.getElementById('btn-guest-rsvp');
    const calBtn = document.getElementById('btn-add-calendar');
    const mapsBtn = document.getElementById('btn-open-maps');

    closeBtn.addEventListener('click', () => this.close());
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) this.close();
    });

    // Open Envelope
    const openEnvelope = () => {
      if (this.isEnvelopeOpen) return;
      this.isEnvelopeOpen = true;
      envelopeBody.classList.add('envelope-open');
      if (sealBtn) sealBtn.style.display = 'none';

      // Trigger soft celebratory sound or feedback
      if (window.confetti) {
        window.confetti({
          particleCount: 40,
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
        }, 600);
      } else {
        this.isCardFlipped = !this.isCardFlipped;
        flipper.classList.toggle('flipped', this.isCardFlipped);
      }
    };

    flipBtn.addEventListener('click', toggleFlip);
    flipper.addEventListener('click', toggleFlip);

    // RSVP Action
    rsvpBtn.addEventListener('click', () => {
      const guestName = prompt('Please enter your name to confirm attendance:');
      if (guestName) {
        if (window.confetti) {
          window.confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 }
          });
        }
        alert(`Thank you, ${guestName}! Your RSVP has been noted. We look forward to celebrating together!`);
      }
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

