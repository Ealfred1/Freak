
import React from 'react';

const CrossMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-ben10-background">
      {/* Horizontal marquee */}
      <div className="py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(20).fill(0).map((_, index) => (
            <span key={`h-${index}`} className="mx-4 text-2xl font-['Rubik_Dirt'] tracking-wide text-ben10">FREAK FREAK FREAK</span>
          ))}
        </div>
      </div>
      
      {/* Vertical marquee overlapping */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-20 overflow-hidden pointer-events-none">
        <div className="animate-marquee-vertical whitespace-nowrap flex flex-col items-center h-full">
          {Array(20).fill(0).map((_, index) => (
            <span key={`v-${index}`} className="my-4 text-2xl font-['Rubik_Dirt'] tracking-wide text-ben10-light rotate-90">FREAK FREAK FREAK</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrossMarquee;
