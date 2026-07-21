import ScrollReveal from './ScrollReveal';

export default function Steps() {
  return (
    <section className="bg-[#F5ECE4] py-20 px-[5vw]">
      <ScrollReveal>
        <span className="text-xs font-bold tracking-widest uppercase text-[#C9446B] block mb-2">Usage Guide</span>
        <h2 className=" text-3xl sm:text-4xl font-semibold text-[#1E0A2A] mb-12">Ready in 4 simple steps</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "1", title: "Fix the Pads", desc: "Peel and place the reusable adhesive Crocto pads on your lower abdomen or back." },
            { num: "2", title: "Attach the Device", desc: "Snap the compact Crocto device onto the pads until it clicks cleanly into place." },
            { num: "3", title: "Press On", desc: "Hit the power button. TENS pulses begin immediately at the foundational comfort level." },
            { num: "4", title: "Adjust & Relax", desc: "Use +/– to find your perfect custom comfort zone and let the tension disappear." }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-[#E8D8EB] relative overflow-hidden group">
              <span className=" text-6xl font-bold text-[#C9446B]/10 absolute top-2 right-4 transition-transform duration-300 group-hover:scale-110">{item.num}</span>
              <h3 className=" text-base font-semibold text-[#4B1D5E] mb-2 relative z-10">{item.title}</h3>
              <p className="text-xs sm:text-sm text-[#7A6480] leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}