"use client";

import HeaderHero from "@/components/ui/HeroHeader";
import WhyChooseCrocto from "@/components/ui/WhyChooseCrocto";
import HowItWorks from "@/components/ui/HowItWorks";
import HowToUse from "@/components/ui/HowToUse";
import Waiting from "@/components/ui/Waiting";
import Footer from "@/components/ui/Footer";
import Testimonials from "@/components/ui/Testimonials";
import WhoIsItFor from "@/components/ui/WhoIsItFor";
import Influencers from "@/components/ui/Influencers";
export default function Home() {
  return (
    <main className="bg-white font-poppins">
      <HeaderHero />
      <WhyChooseCrocto />
      <HowItWorks />
      <HowToUse />
      <WhoIsItFor/>
      <Testimonials />
      {/* <Influencers/> */}
      <Waiting />

      {/* Testimonials - Swiper */}
      <Footer />
    </main>
  );
}
