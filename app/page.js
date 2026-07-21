import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProofStrip from '@/components/ProofStrip';
import HowItWorks from '@/components/HowItWorksdd';
import WhyCrocto from '@/components/WhyCrocto';
import Steps from '@/components/Steps';
import ComparisonTable from '@/components/ComparisonTable';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
       
        {/* <HowItWorks /> */}
        {/* <WhyCrocto /> */}
        <Steps />
        <ComparisonTable />
        <Testimonials />
        <FAQ />
      </main>
      <CTA/>
      <Footer />
    </>
  );
}