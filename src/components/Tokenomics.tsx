
import React from 'react';

const Tokenomics = () => {
  return (
    <div className="relative w-full py-12 bg-ben10-background overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-ben10 bg-blur"></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-ben10-dark bg-blur opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative">
          {/* Total Supply */}
          <div className="tokenomics-header mb-8 p-4 mx-auto text-center animated-border bg-black/50 backdrop-blur-md rounded-md max-w-md">
            <h3 className="font2 text-white text-xl">TOTAL SUPPLY</h3>
            <p className="text-ben10 text-3xl font2">500,000,000 $FREAK</p>
          </div>
          
          {/* Ben 10 Character */}
          <div className="flex justify-center mb-6">
            <img 
              src="/freak.png" 
              alt="Ben 10" 
              className="w-32 h-32 object-contain animate-float"
            />
          </div>
          
          {/* Tokenomics Grid */}
          <div className="tokenomics-grid grid grid-cols-2 gap-4">
            {/* Top Left */}
            <div className="tokenomics-card bg-black/40 backdrop-blur-md p-6 rounded-md notched-corner animate-pulse-glow">
              <h3 className="text-4xl font2 text-center text-ben10">10%</h3>
              <div className="w-full h-px bg-ben10 my-3"></div>
              <p className="text-center font2 text-white">MARKETING</p>
            </div>
            
            {/* Top Right */}
            <div className="tokenomics-card bg-black/40 backdrop-blur-md p-6 rounded-md  notched-corner animate-pulse-glow">
              <h3 className="text-4xl font2 text-center text-ben10">10%</h3>
              <div className="w-full h-px bg-ben10 my-3"></div>
              <p className="text-center font2 text-white">Community</p>
            </div>
            
            {/* Bottom Left */}
            <div className="tokenomics-card bg-black/40 backdrop-blur-md p-6 rounded-md  notched-corner animate-pulse-glow">
              <h3 className="text-4xl font2 text-center text-ben10">60%</h3>
              <div className="w-full h-px bg-ben10 my-3"></div>
              <p className="text-center font2 text-white">LIQUIDITY POOL</p>
            </div>
            
            {/* Bottom Right */}
            <div className="tokenomics-card bg-black/40 backdrop-blur-md p-6 rounded-md  notched-corner animate-pulse-glow">
              <h3 className="text-4xl font2 text-center text-ben10">20%</h3>
              <div className="w-full h-px bg-ben10 my-3"></div>
              <p className="text-center font2 text-white">MARKETING</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cross marquee section */}
      <div className="mt-20 overflow-hidden">
        {/* Horizontal marquee */}
        <div className="bg-gradient-to-r from-ben10-dark to-ben10 py-4 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array(20).fill(0).map((_, index) => (
              <span key={index} className="mx-4 text-2xl font2 tracking-wide text-black">FREAK FREAK FREAK</span>
            ))}
          </div>
        </div>
        
        {/* Vertical marquee */}
        <div className="bg-gradient-to-b from-ben10-dark to-ben10 py-4 overflow-hidden h-20 relative">
          <div className="absolute left-0 top-0 w-full animate-marquee-vertical whitespace-nowrap flex flex-col items-center">
            {Array(20).fill(0).map((_, index) => (
              <span key={index} className="my-4 text-2xl font2 tracking-wide text-black">FREAK FREAK FREAK</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
