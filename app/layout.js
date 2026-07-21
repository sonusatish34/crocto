import './globals.css';
import Script from 'next/script';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Crocto – Drug-Free Period Pain Relief Device | TENS Therapy in India",
  description: "Crocto is India's portable TENS therapy device for instant period pain relief — no tablets, no side effects. Clinically backed. Pocket-sized. Rechargeable via USB. Order now.",
  keywords: "period pain relief device India, TENS therapy for periods, drug-free period cramp relief, portable period pain device",
  alternates: { canonical: 'https://crocto.com/' },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "Crocto – Drug-Free Period Pain Relief Device | TENS Therapy",
    description: "No tablets. No side effects. Crocto uses clinically proven TENS therapy to block period pain signals within minutes.",
    url: "https://crocto.com/",
    type: "website",
    images: [{ url: "https://crocto.com/images/og-cover.jpg" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.className} h-full antialiased scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />

        {/* Product Schema */}
        <Script id="product-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Crocto Period Pain Relief Device",
            "brand": { "@type": "Brand", "name": "Crocto" },
            "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "INR", "url": "https://crocto.com/" },
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "312" }
          })}
        </Script>
      </head>
      <body className="antialiased bg-[#FBF7F4] text-[#1E0A2A]">
        {children}
      </body>
    </html>
  );
}