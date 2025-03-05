
import React from 'react';

const CrossMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-ben10-background">
      {/* Horizontal marquee */}
      <div className="py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(20).fill(0).map((_, index) => (
            <span key={`h-${index}`} className="mx-4 text-2xl font2 tracking-wide text-ben10">$FREAK $FREAK $FREAK</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrossMarquee;
