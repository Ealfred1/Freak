
import React from 'react';

const About = () => {
  return (
    <div className="relative font2 w-full py-24 flex justify-center items-center bg-ben10-background overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-ben10-dark bg-blur"></div>
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-ben10 bg-blur opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font2 text-ben10 text-center mb-16 drop-shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
          ABOUT US
        </h2>
        
        <div className="glass-blur max-w-4xl mx-auto p-8 relative animate-scale-up border-2 border-ben10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 text-center mb-8 md:mb-0">
              <p className="font2 text-xl leading-relaxed text-ben10-light">
                FREAK IS NOT JUST ANOTHER MEME COIN; IT'S A MOVEMENT. INSPIRED BY THE LEGENDARY BEN 10 CARTOON, FREAK IS DESIGNED TO BRING CHAOS AND PURE DEGENERATE ENERGY TO CRYPTO. NO ROADMAPS, NO PROMISES, JUST PURE MEMETIC POWER UNLEASHED ON THE BLOCKCHAIN!
              </p>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <img 
                src="/freak.png" 
                alt="Ben 10" 
                className="w-40 h-40 object-contain md:ml-4 animate-wiggle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
