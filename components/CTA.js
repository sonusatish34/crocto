'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

export default function CTA() {
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
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section 
      className="relative overflow-hidden bg-[#4B1D5E] px-[5vw] py-20 text-white sm:py-12"
      aria-labelledby="cta-heading"
    >
      {/* Soft Ambient Radiance Blooms */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#C9B6EA]/10 blur-[90px]" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-[#F3C6D6]/15 blur-[90px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          {/* Main Heading */}
          <motion.h2 
            variants={fadeInUp}
            id="cta-heading" 
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.15]"
          >
            Your period doesnt have to be a write-off day.
          </motion.h2>

          {/* Subtext description */}
          <motion.p 
            variants={fadeInUp}
            className="mt-6 max-w-xl text-sm leading-relaxed text-purple-100/80 sm:text-base"
          >
            Join hundreds of women across India who&quot;ve put down the painkiller blister pack and picked up Crocto instead.
          </motion.p>

          {/* Action Callouts */}
          <motion.div 
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 w-full sm:flex-row"
          >
            {/* Primary Action Button */}
            <a 
              href="https://api.whatsapp.com/send/?phone=919111911162&text=Hi+I+want+to+order+Crocto" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#4B1D5E] shadow-md transition-all duration-300 hover:bg-purple-50 hover:shadow-lg sm:w-auto"
            >
              <FaWhatsapp className="h-4 w-4 text-[#25D366] transition-transform duration-300 group-hover:scale-110" />
              <span>Order on WhatsApp</span>
            </a>

            {/* Secondary Action Button */}
            <a 
              href="tel:9111911162" 
              className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 sm:w-auto"
            >
              <FiPhone className="h-3.5 w-3.5 opacity-80 transition-transform duration-300 group-hover:translate-x-0.5" />
              <span>+91 91119 11162</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}