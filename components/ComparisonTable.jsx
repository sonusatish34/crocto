'use client';

import { Check, X, CircleAlert, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ROWS = [
  { f: 'Drug-free', crocto: true, pain: false, hot: true },
  { f: 'Works in under 15 min', crocto: true, pain: 'partial', painNote: '~30–45 min', hot: 'partial', hotNote: 'Varies' },
  { f: 'Zero side effects', crocto: true, pain: false, painNote: 'Gastric risk', hot: true },
  { f: 'Portable / use anywhere', crocto: true, pain: true, hot: false },
  { f: 'Reusable for years', crocto: true, pain: false, painNote: 'Recurring cost', hot: true },
];

function Cell({ value, note, tone = 'default' }) {
  if (value === true) {
    return (
      <div className="flex items-center gap-2">
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
            tone === 'brand' ? 'bg-[#C9446B] text-white' : 'bg-[#E4F5E9] text-[#25A559]'
          }`}
        >
          <Check className="h-4 w-4" strokeWidth={2.5} />
        </span>
      </div>
    );
  }
  if (value === 'partial') {
    return (
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FBEEDA] text-[#C6902F] transition-transform duration-300 group-hover:scale-110">
          <CircleAlert className="h-4 w-4" strokeWidth={2.5} />
        </span>
        {note && <span className="text-xs text-[#9C8CAB]">{note}</span>}
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F3E4E7] text-[#B85C6E] transition-transform duration-300 group-hover:scale-110">
        <X className="h-4 w-4" strokeWidth={2.5} />
      </span>
      {note && <span className="text-xs text-[#9C8CAB]">{note}</span>}
    </div>
  );
}

export default function ComparisonTable() {
  return (
    <section className="relative overflow-hidden bg-[#FDF6F0] px-[5vw] py-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#C9B6EA]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#F3C6D6]/25 blur-3xl" />

      <ScrollReveal>
        <div className="relative mx-auto mb-12 max-w-xl text-center">
          <span className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C9446B]">
            <span className="h-1 w-1 rounded-full bg-[#C9446B]" />
            Comparison
          </span>
          <h2
            className="text-3xl font-semibold text-[#1E0A2A] sm:text-4xl"
          >
            Crocto vs. the alternatives
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* edge fade hints for horizontal scroll on mobile */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-6 bg-gradient-to-r from-[#FDF6F0] to-transparent sm:hidden" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-6 bg-gradient-to-l from-[#FDF6F0] to-transparent sm:hidden" />

          <div className="overflow-x-auto rounded-[1.75rem] border border-[#EEE3F5] bg-white shadow-[0_25px_60px_-25px_rgba(75,29,94,0.25)] transition-shadow duration-500 hover:shadow-[0_30px_70px_-20px_rgba(75,29,94,0.32)]">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr>
                  <th className="bg-[#3A1A47] p-5 text-xs font-semibold uppercase tracking-wider text-white/70">
                    Feature
                  </th>
                  <th className="relative bg-gradient-to-b from-[#D6467E] to-[#C9446B] p-5 text-xs font-semibold uppercase tracking-wider text-white">
                    <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-[#2A1B4D] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md">
                      {/* <Sparkles className="h-3 w-3 text-[#E7C9DA]" /> Best Choice */}
                    </span>
                    <span className="mt-1 block">Crocto TENS Device</span>
                  </th>
                  <th className="bg-[#3A1A47] p-5 text-xs font-semibold uppercase tracking-wider text-white/70">
                    Painkillers
                  </th>
                  <th className="bg-[#3A1A47] p-5 text-xs font-semibold uppercase tracking-wider text-white/70">
                    Hot Water Bag
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1E8F3]">
                {ROWS.map((row, i) => (
                  <tr
                    key={row.f}
                    className="group opacity-0 text-black duration-300 [animation-fill-mode:forwards] [animation:fadeUpRow_0.5s_ease_forwards] hover:bg-[#FBF5FB]"
                    style={{ animationDelay: `${i * 90}ms` }}
                  >
                    <td className="p-5 font-medium text-[#7A6480] text-black group-hover:text-[#3A1A47]">
                      {row.f}
                    </td>
                    <td className="relative border-x border-[#F3D9E3] bg-[#FDF0F4] p-5 text-black duration-300 group-hover:bg-[#FCE6EE]">
                      <Cell value={row.crocto} tone="brand" />
                    </td>
                    <td className="p-5">
                      <Cell value={row.pain} note={row.painNote} />
                    </td>
                    <td className="p-5">
                      <Cell value={row.hot} note={row.hotNote} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-center text-xs text-[#9C8CAB] sm:hidden">
            ← Swipe to compare →
          </p>
        </div>
      </ScrollReveal>

      <style jsx>{`
        @keyframes fadeUpRow {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
