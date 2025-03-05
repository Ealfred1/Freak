import React from 'react';
import { 
  Check, 
  Rocket, 
  GlobeLock, 
  Network, 
  TrendingUp, 
  Users, 
  Target, 
  BarChart 
} from 'lucide-react';

const Roadmap = () => {
  return (
    <div className="relative w-full py-24 bg-ben10-background overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-ben10 bg-blur"></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-ben10-dark bg-blur opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font2 text-ben10 text-center mb-16 drop-shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
          ROADMAP
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div className="roadmap-card bg-green-600/20 border border-green-500 p-6 rounded-2xl h-auto">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Rocket className="text-green-500" size={28} />
                    <h3 className="font2 text-2xl text-ben10-light">LAUNCH & COMMUNITY KICKOFF</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-white font2">LAUNCH OF FREAK</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-white font2">INITIAL EXCHANGE OFFERING</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-white font2">COMMUNITY BUILDING</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="roadmap-card bg-green-600/20 border border-green-500 p-6 rounded-2xl h-auto">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-green-500" size={28} />
                <h3 className="font2 text-2xl text-ben10-light">EXPANSION & GROWTH</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-white font2">LISTINGS ON MAJOR EXCHANGES</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-white font2">PARTNERSHIPS WITH INFLUENCERS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-white font2">FIRST BURN EVENT</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <div className="roadmap-card bg-green-600/20 border border-green-500 p-6 rounded-2xl h-auto">
              <div className="flex items-center gap-3 mb-4">
                <Network className="text-green-500" size={28} />
                <h3 className="font2 text-2xl text-ben10-light">ENGAGEMENT & UTILITY</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-white font2">DAPP DEVELOPMENT</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-white font2">STAKING PLATFORM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-white font2">COMMUNITY GOVERNANCE</span>
                </li>
              </ul>
            </div>
            
            <div className="roadmap-card bg-green-600/20 border border-green-500 p-6 rounded-2xl h-auto">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-green-500" size={28} />
                <h3 className="font2 text-2xl text-ben10-light">COMMUNITY EXPANSION</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-white font2">GLOBAL MARKETING CAMPAIGN</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-white font2">COMMUNITY REWARDS PROGRAM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-white font2">SOCIAL MEDIA EXPANSION</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <div className="roadmap-card bg-green-600/20 border border-green-500 p-6 rounded-2xl h-auto">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-green-500" size={28} />
                <h3 className="font2 text-2xl text-ben10-light">STRATEGIC MILESTONES</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-white font2">STRATEGIC PARTNERSHIPS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-white font2">INSTITUTIONAL INVESTMENTS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">
                    <Check size={16} />
                  </span>
                  <span className="text-white font2">GLOBAL COMPLIANCE</span>
                </li>
              </ul>
            </div>
            
            <div className="roadmap-card bg-green-600/20 border border-green-500 p-6 rounded-2xl h-auto flex items-center justify-center">
              <BarChart className="text-green-500" size={120} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Marquee section */}
      <div className="mt-20 bg-gradient-to-r from-ben10-dark to-ben10 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(20).fill(0).map((_, index) => (
            <span key={index} className="mx-2 text-2xl font2 tracking-wide text-black">$FREAK $FREAK $FREAK</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;