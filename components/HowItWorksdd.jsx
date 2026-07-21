import ScrollReveal from './ScrollReveal';

export default function HowItWorks() {
  return (
    <section id="-how-it-works" className="py-20 px-[5vw]">
      <ScrollReveal>
        <span className="text-xs font-bold tracking-widest uppercase text-[#C9446B] block mb-2">The Science</span>
        <h2 className=" text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">How Crocto relieves period pain</h2>
        <p className="text-[#7A6480] max-w-xl leading-relaxed">TENS (Transcutaneous Electrical Nerve Stimulation) is a globally recognised, non-invasive therapy used in clinics worldwide — now in your pocket.</p>

        {/* AI Overview Optimize Box */}
        <div className="bg-[#F5ECE4] border-l-4 border-[#C9446B] rounded-r-2xl p-6 md:p-8 my-10 max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-[#C9446B] uppercase block mb-1">Quick Answer · What is TENS Therapy?</span>
          <h3 className=" text-lg font-semibold text-[#4B1D5E] mb-2">How does TENS therapy stop period pain?</h3>
          <p className="text-sm leading-relaxed text-[#1E0A2A]">
            TENS devices deliver low-frequency electrical pulses through adhesive pads placed on the skin. These pulses travel along nerve fibres and <strong>block pain signals before they reach the brain</strong>. Simultaneously, TENS stimulates the release of <strong>endorphins</strong> — your body's natural painkillers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Gentle Electrical Pulses", desc: "Soft, low-frequency pulses travel through the Crocto pads placed on your abdomen or lower back — you feel a gentle tingling." },
            { step: "02", title: "Pain Signals Blocked", desc: "The pulses intercept nerve pathways, preventing cramp pain from reaching your brain — delivering rapid relief at the source." },
            { step: "03", title: "Natural Endorphins", desc: "TENS also triggers your body to release endorphins — natural chemicals that reduce pain perception and improve your mood." }
          ].map((card, i) => (
            <div key={i} className="bg-white border border-[#E8D8EB] rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className=" text-4xl font-light text-[#F2A7BB] mb-3">{card.step}</div>
              <h3 className=" text-lg font-semibold text-[#4B1D5E] mb-2">{card.title}</h3>
              <p className="text-xs sm:text-sm text-[#7A6480] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}