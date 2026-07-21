import Image from 'next/image';
import { FiPhone, FiMessageCircle, FiInstagram, FiFacebook, FiArrowUpRight } from 'react-icons/fi';

const PRODUCT_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Crocto', href: '#why-choose' },
  { label: 'Reviews', href: '#reviews' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#EEE3F5] bg-[#FDF6F0] px-[5vw] pb-8 pt-16 text-[#5C4F63]">
      {/* soft ambient glow, echoes the rest of the site rather than a hard cutoff */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#C9B6EA]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#F3C6D6]/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-b border-[#EEE3F5] pb-12 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="mb-4 flex items-center gap-1.5">
              <Image src="/images/logo.png" alt="Crocto" width={150} height={80} />
            </a>
            <p className="max-w-[26ch] text-[13px] leading-relaxed text-[#7C6F82]">
              Drug-free, fast period pain relief using clinically proven TENS therapy. Designed in India for Indian women.
            </p>
            <div className="mt-5 flex gap-2.5">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#7C5CBF] shadow-sm transition hover:bg-[#EDE7F9] hover:text-[#5B3F99]"
              >
                <FiInstagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#7C5CBF] shadow-sm transition hover:bg-[#EDE7F9] hover:text-[#5B3F99]"
              >
                <FiFacebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2A1B4D]">Product</h4>
            <ul className="space-y-2.5 text-[13.5px]">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-black hover:text-[#D6467E]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2A1B4D]">Legal</h4>
            <ul className="space-y-2.5 text-[13.5px]">
              {LEGAL_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-black hover:text-[#D6467E]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2A1B4D]">Contact</h4>
            <ul className="space-y-3 text-[13.5px]">
              <li>
                <a
                  href="tel:9111911162"
                  className="group flex items-center gap-2.5 text-black hover:text-[#5B3F99]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EDE7F9] text-[#7C5CBF] transition group-hover:bg-[#7C5CBF] group-hover:text-white">
                    <FiPhone className="h-3.5 w-3.5" />
                  </span>
                  +91 91119 11162
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=919111911162"
                  className="group flex items-center gap-2.5 text-black hover:text-[#25A559]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E4F5E9] text-[#25A559] transition group-hover:bg-[#25A559] group-hover:text-white">
                    <FiMessageCircle className="h-3.5 w-3.5" />
                  </span>
                  WhatsApp Us
                </a>
              </li>
            </ul>
            <a
              href="https://api.whatsapp.com/send/?phone=919111911162"
              className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#D6467E] transition hover:gap-2.5"
            >
              Order now <FiArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-[11px] text-[#9C8CAB] sm:flex-row">
          <span>© 2026 Crocto · All rights reserved.</span>
          <span
            className="italic text-[#B08FE0]"
          >
            Designed for comfort. Powered by innovation.
          </span>
        </div>
      </div>
    </footer>
  );
}