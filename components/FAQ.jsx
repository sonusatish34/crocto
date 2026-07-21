'use client';

import { useState } from 'react';

/**
 * Crocto FAQ Section
 * ------------------
 * Design concept: Crocto works by sending electrical pulses that interrupt pain
 * signals. That idea becomes the section's signature detail — each question is
 * marked by a small dot that, on expand, sends out a quiet pulse-ring and a
 * hand-drawn waveform animates in beside the answer, echoing the device itself
 * rather than a generic plus/minus accordion.
 *
 * Palette: warm clinical blush + deep wine ink, with a single cool teal used
 * only for the "electrical" signature moment — never for anything else.
 */

const FAQ_ITEMS = [
  {
    q: 'What is Crocto and how does it work?',
    a: 'Crocto is a portable TENS (Transcutaneous Electrical Nerve Stimulation) device for period pain. It sends gentle electrical pulses through adhesive pads on your abdomen, blocking pain signals before they reach your brain and triggering natural endorphin release — all without any medication.',
  },
  {
    q: 'How quickly does Crocto relieve period cramps?',
    a: 'Most users experience noticeable relief within 5–15 minutes of starting a session. You can use Crocto for 15–30 minute sessions and reuse it multiple times per day on a single charge.',
  },
  {
    q: 'Is Crocto safe? Are there any side effects?',
    a: 'Yes, Crocto is safe for healthy adult women. TENS therapy has no known side effects and is used in physiotherapy worldwide. It should not be used during pregnancy, over broken skin, or by people with a pacemaker. If you have endometriosis, PCOS, or other conditions, consult your gynaecologist first.',
  },
  {
    q: 'Can I use Crocto at work or college?',
    a: "Absolutely. The adhesive pads go under your clothing (on your lower abdomen or back), and the device is small enough to clip to your waistband or keep in your pocket. It's silent and discreet — no one will know you're using it.",
  },
  {
    q: 'What is the difference between Crocto and painkillers like Meftal?',
    a: 'Painkillers work chemically — they take 30–45 minutes to kick in and can cause side effects (gastric problems, liver stress) with repeated use. Crocto works physically, blocking pain at the nerve level within minutes, with zero chemicals, zero side effects, and no recurring cost.',
  },
  {
    q: 'How do I charge Crocto?',
    a: 'Crocto charges via a standard USB cable (included). A full charge supports multiple therapy sessions, making it perfect for travel, office, and everyday use.',
  },
  {
    q: 'How do I order Crocto in India?',
    a: 'You can order directly by calling or WhatsApp-ing us at +91-9111911162. We deliver across India with free shipping. For bulk or corporate queries, reach out via WhatsApp.',
  },
];

function PulseDot({ open }) {
  return (
    <span className="relative mt-[6px] flex h-2.5 w-2.5 shrink-0 sm:mt-[9px]">
      {open && (
        <span className="absolute inline-flex h-full w-full animate-[pulseRing_1.4s_ease-out_infinite] rounded-full bg-[#17847F]/60" />
      )}
      <span
        className={`relative inline-flex h-2.5 w-2.5 rounded-full text-black duration-300 ${
          open ? 'bg-[#17847F]' : 'bg-[#6E2439]/40'
        }`}
      />
    </span>
  );
}

function PulseWave({ open }) {
  return (
    <svg
      viewBox="0 0 120 24"
      className="h-4 w-16 shrink-0 opacity-0 sm:h-5 sm:w-20"
      style={{ opacity: open ? 1 : 0, transition: 'opacity 0.4s ease 0.15s' }}
      aria-hidden="true"
    >
      <path
        d="M0 12 H30 L38 2 L46 22 L54 12 H70 L78 4 L86 20 L94 12 H120"
        fill="none"
        stroke="#17847F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
        className={open ? '[animation:drawPulse_0.7s_ease_forwards]' : ''}
        style={{ strokeDasharray: 1, strokeDashoffset: open ? 0 : 1 }}
      />
    </svg>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-[#FBF6F2] px-5 py-20 sm:py-28"
    >
      {/* ambient corner glow — quiet, not decorative noise */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#6E2439]/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#17847F]/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-2xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6E2439]">
          <span className="h-1 w-1 rounded-full bg-[#17847F]" />
          FAQs
        </div>
        <h2
          id="faq-heading"
          className="font-serif text-[2rem] leading-[1.15] tracking-tight text-[#2B1116] sm:text-4xl md:text-[2.75rem]"
        >
          Frequently asked questions
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#7C6660] sm:text-base">
          Everything you need to know about Crocto and TENS therapy for period pain.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-2xl sm:mt-16">
        <ul className="divide-y divide-[#E7D9D2]">
          {FAQ_ITEMS.map((item, i) => {
            const open = openIndex === i;
            return (
              <li key={item.q} className="group">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-start gap-4 py-5 text-left text-black sm:gap-5 sm:py-6"
                >
                  <PulseDot open={open} />
                  <span
                    className={`flex-1 text-[15px] font-medium leading-snug text-black duration-300 sm:text-[17px] ${
                      open ? 'text-[#2B1116]' : 'text-[#3A1620]/85 group-hover:text-[#2B1116]'
                    }`}
                  >
                    {item.q}
                  </span>

                  <svg
                    viewBox="0 0 24 24"
                    className={`mt-1 h-4 w-4 shrink-0 text-[#3A1620]/40 transition-transform duration-300 sm:h-[18px] sm:w-[18px] ${
                      open ? 'rotate-180 text-[#17847F]' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                    open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex gap-4 pb-6 pl-[26px] pr-8 sm:gap-5 sm:pb-7 sm:pl-[30px]">
                      <p className="max-w-xl text-[13.5px] leading-relaxed text-[#7C6660] sm:text-[15px]">
                        {item.a}
                      </p>
                      <PulseWave open={open} />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 text-center sm:mt-12">
          <p className="text-sm text-[#7C6660]">
            Still have questions?{' '}
            <a
              href="https://wa.me/919111911162"
              className="font-medium text-[#6E2439] underline decoration-[#6E2439]/30 underline-offset-4 transition hover:decoration-[#6E2439]"
            >
              Chat with us on WhatsApp
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(2.6);
            opacity: 0;
          }
        }
        @keyframes drawPulse {
          from {
            stroke-dashoffset: 1;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}
