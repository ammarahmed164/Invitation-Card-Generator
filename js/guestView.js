/**
 * Interactive Guest Experience & Digital Mobile Invite Module
 * 3D Envelope opening animation, card flip, bespoke luxury RSVP modal, and Google Calendar / Maps integration.
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
