// export default function Hero() {
//   return (
//     <header className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-[5vw] py-16 bg-gradient-to-br from-[#FBF7F4] via-[#FBF7F4] to-[#f0dde8] relative overflow-hidden">
//       <div className="absolute w-[500px] h-[500px] bg-radial from-[#C9446B]/10 to-transparent right-[-10%] top-[10%] pointer-events-none blur-3xl" />

//       <div className="max-w-2xl">
//         <span className="inline-block bg-[#f9e4ec] text-[#C9446B] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
//           Drug-Free Period Pain Relief · India
//         </span>
//         <h1 className=" text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-[#1E0A2A] mb-6">
//           Say goodbye to period pain — <em className=" italic text-[#C9446B] font-normal">without a single tablet</em>
//         </h1>
//         <p className="text-base sm:text-lg text-[#7A6480] mb-8 leading-relaxed max-w-lg">
//           Crocto uses clinically proven TENS therapy to block menstrual cramp signals at the source. Pocket-sized. Rechargeable. Works in under 15 minutes.
//         </p>

//         <div className="flex flex-wrap gap-2.5 mb-8">
//           {["No Tablets or Chemicals", "Drug-Free TENS Therapy", "USB Rechargeable", "Pocket-Sized"].map((badge, idx) => (
//             <span key={idx} className="flex items-center gap-2 bg-white border border-[#E8D8EB] rounded-full px-3.5 py-1 text-xs font-medium text-[#4B1D5E]">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#C9446B]" />
//               {badge}
//             </span>
//           ))}
//         </div>

//         <div className="flex flex-wrap gap-4 items-center">
//           <a href="https://api.whatsapp.com/send/?phone=919111911162&text=Hi+I+want+to+order+Crocto" className="bg-[#C9446B] text-white font-semibold rounded-full px-7 py-3.5 inline-flex items-center gap-2 shadow-md hover:bg-[#a8325a] hover:-translate-y-0.5 transition-all">
//             🛒 Order via WhatsApp
//           </a>
//           <a href="tel:9111911162" className="border-2 border-[#4B1D5E] text-[#4B1D5E] font-semibold rounded-full px-7 py-3.5 inline-flex items-center gap-2 hover:bg-[#4B1D5E] hover:text-white transition-all">
//             📞 Call Us
//           </a>
//         </div>
//       </div>

//       <div className="flex justify-center items-center">
//         <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-xl border border-[#E8D8EB]/60 hover:scale-[1.02] transition-transform duration-300">
//           <span className="text-7xl block mb-4 filter drop-shadow-sm">🌸</span>
//           <h3 className=" text-xl font-semibold text-[#4B1D5E] mb-2">Crocto TENS Device</h3>
//           <p className="text-sm text-[#7A6480]">Instant period pain relief. No meds required.</p>
//           <div className="flex items-center justify-center gap-2 mt-4 text-xs font-semibold text-[#4B1D5E]">
//             <span className="text-[#F5A623] tracking-wider text-sm">★★★★★</span>
//             <span>4.7 / 5 · 312 reviews</span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

import Image from "next/image";
import ProofStrip from "./ProofStrip";
import HowItWorks from "./HowItWorks";

export default function Hero() {
  return (
    <>

      <div>
        <Image
          src='/images/banner/crocto.png'
          width={1000}
          height={1000}
          alt="dw"
          className="w-full h-full object-cover"
        />
      </div>
       {/* <ProofStrip /> */}
      {/* <div id="how-it-works">
        <Image
          src='/images/banner/1.png'
          width={1000}
          height={1000}
          alt="dw"
          className="w-full h-full object-cover"
        />
      </div> */}
      <HowItWorks/>
      <div id="why-crocto">
        <Image
          src='/images/banner/5.png'
          width={1000}
          height={1000}
          alt="dw"
          className="w-full h-full object-cover"
        />
      </div>
    </>

  );
}