
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HowToBuy from '@/components/HowToBuy';
import Roadmap from '@/components/Roadmap';
import Tokenomics from '@/components/Tokenomics';
import Community from '@/components/Community';
import CrossMarquee from '@/components/CrossMarquee';
import LinksSection from "@/components/LinkSection"

const Index = () => {
  useEffect(() => {
    // Add page load animation
    document.body.classList.add('animate-scale-up');
    
    return () => {
      document.body.classList.remove('animate-scale-up');
    };
  }, []);

  return (
    <div className="overflow-x-hidden bg-ben10-background">
      <div className="bg-cover bg-center bg-no-repeat w-full" style={{
      backgroundImage: "url('/bg.png')"
    }}>
        <Navbar />
        <Hero />
      </div>
      <About />
      <HowToBuy />
      <Roadmap />
      <LinksSection />
      <Tokenomics />
      <CrossMarquee />
      <Community />
    </div>
  );
};

export default Index;
