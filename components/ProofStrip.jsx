export default function ProofStrip() {
  const items = [
    { icon: "⚡", text: "Relief in under 15 minutes" },
    { icon: "💊", text: "0 tablets. 0 side effects." },
    { icon: "🔬", text: "Clinically proven technology" },
    { icon: "📦", text: "Free shipping across India" }
  ];

  // We duplicate the items array once to guarantee a seamless, gap-free loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-[#8576FF] lg:py-2 py-2 text-white">
      {/* Premium subtle border accents */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/10" />

      {/* Smooth gradient masks on the left and right sides so elements fade in/out elegantly */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#4B1D5E] to-transparent md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#4B1D5E] to-transparent md:w-32" />

      {/* Marquee Wrapper Container */}
      <div className="flex w-max">
        {/* Injecting temporary Tailwind CSS animation keyframes on the fly */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-smooth {
            animation: marquee 25s linear infinite;
          }
        `}} />

        {/* Moving track */}
        <div className="animate-marquee-smooth flex items-center gap-10 pr-10 text-xs font-semibold uppercase tracking-wider text-purple-100 sm:text-sm md:gap-16 md:pr-16">
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 shrink-0">
              {/* Icon Capsule */}
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-base shadow-sm ring-1 ring-white/5 backdrop-blur-sm">
                {item.icon}
              </span>
              
              {/* Text Content */}
              <span className="opacity-95">{item.text}</span>
              
              {/* Minimalist dot separator between pairs */}
              <span className="ml-10 h-1.5 w-1.5 rounded-full bg-white/20 md:ml-16" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}