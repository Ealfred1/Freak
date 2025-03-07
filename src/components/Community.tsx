
import React from 'react';
import { Send, Twitter } from 'lucide-react';

const Community = () => {
  return (
    <div className="relative w-full py-24 overflow-hidden" 
         style={{ 
           backgroundImage: `url('/bg.png')`, 
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font2 text-black text-center mb-12 drop-shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
          JOIN THE FREAK COMMUNITY
        </h2>
        
        <div className="flex justify-center mb-8">
          <div className="flex gap-4">
            <a href="https://t.me/freakcn" className="bg-black p-4 rounded-full hover:bg-ben10 transition-colors hover:scale-110 transform duration-300">
              <Send className="text-white w-6 h-6" />
            </a>
            <a href="https://x.com/freakonsol__" className="bg-white p-4 rounded-full hover:bg-ben10 transition-colors hover:scale-110 transform duration-300">
              <Twitter className="text-black w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="flex justify-center">
          <img 
            src="/freak2.png" 
            alt="Ben 10" 
            className="w-40 h-40 md:w-60 md:h-60 object-contain animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
