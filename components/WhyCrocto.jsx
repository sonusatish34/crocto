import ScrollReveal from './ScrollReveal';

export default function WhyCrocto() {
  const features = [
    { icon: "⚡", title: "Instant Pain Relief", desc: "Most users feel relief within 5–15 minutes. No waiting for a tablet to dissolve." },
    { icon: "💊", title: "Zero Tablets, Zero Side Effects", desc: "No gastric irritation. Entirely drug-free and safe for long-term daily use." },
    { icon: "👜", title: "Pocket-Sized & Discreet", desc: "Slim enough to carry in a handbag or kurta pocket. Use it seamlessly at work or college." },
    { icon: "🔋", title: "Rechargeable via USB", desc: "One USB charge powers multiple sessions. Eco-friendly and economical." },
    { icon: "🎛️", title: "Adjustable Intensity", desc: "Pain varies — your relief should too. Dial up or down across multiple intensity settings." },
    { icon: "🌸", title: "Designed for Women", desc: "Every detail — pad weight, ergonomics, and comfort profiles have been completely thought through." }
  ];

  return (
    <section  className="bg-[#1A0A1E] text-white py-20 px-[5vw]">
      <ScrollReveal>
        <span className="text-xs font-bold tracking-widest uppercase text-[#C9446B] block mb-2">Why Crocto</span>
        <h2 className=" text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Built for real life. Designed for comfort.</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 text-black duration-200">
              <div className="w-12 h-12 bg-[#C9446B]/20 rounded-xl flex items-center justify-center text-xl mb-4">{f.icon}</div>
              <h3 className=" text-base font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}