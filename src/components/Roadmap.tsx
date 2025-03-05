
import React from 'react';
import { Check } from 'lucide-react';

const Roadmap = () => {
  return (
    <div className="relative w-full py-24 bg-ben10-background overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-ben10 bg-blur"></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-ben10-dark bg-blur opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-['Bangers'] text-ben10 text-center mb-16 drop-shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
          ROADMAP
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div className="roadmap-card p-6 rounded-lg h-auto">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-['Bangers'] text-2xl text-ben10-light mb-4">LAUNCH & COMMUNITY KICKOFF</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-ben10 mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-white font-['Permanent_Marker']">LAUNCH OF FREAK</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ben10 mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-white font-['Permanent_Marker']">INITIAL EXCHANGE OFFERING</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ben10 mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-white font-['Permanent_Marker']">COMMUNITY BUILDING</span>
                    </li>
                  </ul>
                </div>
                <img 
                  src="/lovable-uploads/c28731e0-34e3-41c9-81dd-ce3dc878c1ed.png" 
                  alt="Ben 10" 
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
            
            <div className="roadmap-card p-6 rounded-lg h-auto">
              <h3 className="font-['Bangers'] text-2xl text-ben10-light mb-4">EXPANSION & GROWTH</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-ben10 mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-white font-['Permanent_Marker']">LISTINGS ON MAJOR EXCHANGES</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ben10 mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-white font-['Permanent_Marker']">PARTNERSHIPS WITH INFLUENCERS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ben10 mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-white font-['Permanent_Marker']">FIRST BURN EVENT</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <div className="roadmap-card p-6 rounded-lg h-auto">
              <h3 className="font-['Bangers'] text-2xl text-ben10-light mb-4">ENGAGEMENT & UTILITY</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-ben10 mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-white font-['Permanent_Marker']">LAUNCH OF FREAK</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ben10 mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-white font-['Permanent_Marker']">INITIAL EXCHANGE OFFERING</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ben10 mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-white font-['Permanent_Marker']">COMMUNITY BUILDING</span>
                </li>
              </ul>
            </div>
            
            <div className="roadmap-card p-6 rounded-lg h-auto flex justify-between items-start">
              <div>
                <h3 className="font-['Bangers'] text-2xl text-ben10-light mb-4">EXPANSION & GROWTH</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-ben10 mt-1">
                      <Check size={16} />
                    </span>
                    <span className="text-white font-['Permanent_Marker']">LISTINGS ON MAJOR EXCHANGES</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ben10 mt-1">
                      <Check size={16} />
                    </span>
                    <span className="text-white font-['Permanent_Marker']">PARTNERSHIPS WITH INFLUENCERS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ben10 mt-1">
                      <Check size={16} />
                    </span>
                    <span className="text-white font-['Permanent_Marker']">FIRST BURN EVENT</span>
                  </li>
                </ul>
              </div>
              <img 
                src="/lovable-uploads/c28731e0-34e3-41c9-81dd-ce3dc878c1ed.png" 
                alt="Ben 10" 
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <div className="roadmap-card p-6 rounded-lg h-auto">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-['Bangers'] text-2xl text-ben10-light mb-4">LAUNCH & COMMUNITY KICKOFF</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-ben10 mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-white font-['Permanent_Marker']">LAUNCH OF FREAK</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ben10 mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-white font-['Permanent_Marker']">INITIAL EXCHANGE OFFERING</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-ben10 mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-white font-['Permanent_Marker']">COMMUNITY BUILDING</span>
                    </li>
                  </ul>
                </div>
                <img 
                  src="/lovable-uploads/c28731e0-34e3-41c9-81dd-ce3dc878c1ed.png" 
                  alt="Ben 10" 
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
            
            <div className="roadmap-card p-6 rounded-lg h-auto">
              <img 
                src="/lovable-uploads/3ce6df62-6aaf-44fd-92c1-f5a522641c73.png" 
                alt="Ben 10" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Marquee section */}
      <div className="mt-20 bg-gradient-to-r from-ben10-dark to-ben10 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(20).fill(0).map((_, index) => (
            <span key={index} className="mx-4 text-2xl font-['Permanent_Marker'] tracking-wide text-black">FREAK FREAK FREAK</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
