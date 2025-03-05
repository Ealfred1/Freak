
import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-ben10-background pt-16 overflow-hidden">
      {/* Background blurs - reduced in number and opacity */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ben10 bg-blur"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ben10-dark bg-blur"></div>
      
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 py-12 relative z-10 flex flex-col items-center justify-center h-screen">
        <h1 className="text-8xl md:text-9xl font-['Bangers'] text-ben10 text-center leading-none mb-8 animate-scale-down drop-shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
          $FREAK
        </h1>
        
        {/* Hero image */}
        <div className="relative w-64 h-64 md:w-72 md:h-72 mb-8 animate-scale-up">
          <img 
            src="/lovable-uploads/3ce6df62-6aaf-44fd-92c1-f5a522641c73.png" 
            alt="Ben 10" 
            className="w-full h-full object-contain ben10-glow"
          />
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-ben10/20 rounded-full blur-3xl z-[-1]"></div>
        </div>
        
        {/* Glass blur card */}
        <div className="glass-blur p-6 max-w-xl text-center mb-12">
          <p className="text-white text-xl font-['Bangers']">
            POWERED BY MEMES, FUELED BY CHAOS, BUILT FOR DEGENS!
          </p>
        </div>
      </div>
      
      {/* Marquee section */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-ben10-dark to-ben10 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(20).fill(0).map((_, index) => (
            <span key={index} className="mx-4 text-2xl font-['Permanent_Marker'] tracking-wide text-black">FREAK FREAK FREAK</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
