
import React from 'react';
import Navbar from '@/components/Navbar';
import TokenomicsComponent from '@/components/Tokenomics';
import CrossMarquee from '@/components/CrossMarquee';

const TokenomicsPage = () => {
  return (
    <div className="min-h-screen bg-ben10-background">
      <Navbar />
      <div className="container mx-auto px-4 py-28">
        <h1 className="text-6xl font-['Rubik_Dirt'] text-ben10 text-center mb-12 drop-shadow-[4px_4px_0_rgba(0,0,0,0.3)]">Tokenomics</h1>
        <TokenomicsComponent />
        <CrossMarquee />
      </div>
    </div>
  );
};

export default TokenomicsPage;
