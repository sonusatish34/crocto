'use client';

import { motion } from 'framer-motion';

// Animation variants to reuse across components
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Gentle Electrical Pulses",
      description: "Soft, low-frequency pulses travel through the Crocto pads placed on your abdomen or lower back — you feel a gentle tingling, not discomfort."
    },
    {
      number: "02",
      title: "Pain Signals Get Blocked",
      description: "The pulses intercept nerve pathways, preventing cramp pain from reaching your brain — delivering rapid relief at the source."
    },
    {
      number: "03",
      title: "Endorphins Released Naturally",
      description: "TENS also triggers your body to release endorphins — natural chemicals that reduce pain perception and improve your mood."
    }
  ];

  return (
    <section 
      id="how-it-works" 
      aria-labelledby="how-heading"
      className="relative overflow-hidden bg-[#FDF6F0] px-[5vw] py-24 text-[#2A1B4D]"
    >
      {/* Soft Ambient Background Elements */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-[#C9B6EA]/15 blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-1/4 h-96 w-96 rounded-full bg-[#F3C6D6]/20 blur-[100px]" />

      <div className="mx-auto max-w-5xl">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.div 
            variants={fadeInUp}
            className="mb-3 inline-block rounded-full bg-[#4B1D5E]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#4B1D5E]"
          >
            The Science
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            id="how-heading" 
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            How Crocto relieves period pain
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#7C6F82] sm:text-lg"
          >
            TENS (Transcutaneous Electrical Nerve Stimulation) is a globally recognised, non-invasive therapy used in physiotherapy clinics worldwide — now in your pocket.
          </motion.p>
        </motion.div>

        {/* Dynamic Context Box (AEO Direct-Answer Snippet Box) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          role="note" 
          aria-label="What is TENS therapy"
          className="group relative mb-16 overflow-hidden rounded-2xl border border-[#EEE3F5] bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_8px_40px_rgb(75,29,94,0.05)] md:p-8"
        >
          {/* Subtle Accent Stripe */}
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#D6467E]" />
          
          <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[#D6467E]">
            Quick Answer · What is TENS Therapy?
          </div>
          <h3 className="mb-3 text-lg font-bold text-[#2A1B4D] md:text-xl">
            How does TENS therapy stop period pain?
          </h3>
          <p className="text-sm leading-relaxed text-[#5C4F63] md:text-base">
            TENS devices deliver low-frequency electrical pulses through adhesive pads placed on the skin. These pulses travel along nerve fibres and <strong className="font-semibold text-[#4B1D5E]">block pain signals before they reach the brain</strong> (the gate control theory of pain). Simultaneously, TENS stimulates the release of <strong className="font-semibold text-[#4B1D5E]">endorphins</strong> — your bodys natural painkillers — producing lasting comfort without any drugs or chemicals.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#EEE3F5] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#C9B6EA]"
            >
              <div>
                <div className="mb-4 text-3xl font-black tracking-tight text-[#4B1D5E]/15" >
                  {step.number}
                </div>
                <h3 className="mb-2 text-base font-bold text-[#2A1B4D] md:text-lg">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#7C6F82] sm:text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}