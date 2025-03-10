import React, { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';

const LinksSection = () => {
  const [copied, setCopied] = useState<string | null>(null);
  
  const links = [
    {
      id: 'ca',
      title: 'CONTRACT ADDRESS',
      value: 'D5BfMMfpafHf4EUk26rnSF6dzmCvh4coQQeixnVyipX8', // Replace with actual CA
      icon: ExternalLink
    },
    {
      id: 'jup',
      title: 'JUPITER',
      value: 'https://jup.ag/swap/SOL-6SYG64GyL1uRzgyQmYHqervbcNy4jfKxWYfdzndppump',
      icon: ExternalLink
    },
    {
      id: 'dex',
      title: 'DEX SCREENER',
      value: 'https://dexscreener.com/solana/cjqqmu5ug9qcbdnthcyyvtnc26aot9sf7mdmazpwncqh',
      icon: ExternalLink
    },
    {
      id: 'raydium',
      title: 'RAYDIUM',
      value: 'https://raydium.io/swap/?inputMint=sol&outputMint=D5BfMMfpafHf4EUk26rnSF6dzmCvh4coQQeixnVyipX8',
      icon: ExternalLink
    }
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

  return (
    <div className="relative w-full py-24 bg-ben10-background overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-ben10 bg-blur"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-ben10-dark bg-blur opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font2 text-ben10 text-center mb-16 drop-shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
          LINKS
        </h2>
        
        <div className="max-w-4xl mx-auto glass-blur p-8 border-2 border-ben10 animate-scale-up">
          <div className="grid grid-cols-1 gap-6">
            {links.map((link) => (
              <div 
                key={link.id}
                className="glass-link rounded-lg p-4 border border-ben10/30 hover:border-ben10 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <link.icon className="text-ben10 mr-3" size={24} />
                    <h3 className="font2 text-2xl text-white">{link.title}</h3>
                  </div>
                  
                  <div className="flex items-center w-full sm:w-auto">
                    <div className="truncate max-w-[200px] sm:max-w-xs text-ben10-light mr-3 font-mono text-sm">
                      {link.value}
                    </div>
                    <button 
                      onClick={() => copyToClipboard(link.value, link.id)}
                      className="p-2 bg-ben10/20 hover:bg-ben10/40 rounded-md transition-colors duration-300"
                      aria-label="Copy to clipboard"
                    >
                      {copied === link.id ? (
                        <Check className="text-green-500" size={20} />
                      ) : (
                        <Copy className="text-white" size={20} />
                      )}
                    </button>
                    
                    <a 
                      href={link.id === 'ca' ? `https://dexscreener.com/solana/cjqqmu5ug9qcbdnthcyyvtnc26aot9sf7mdmazpwncqh` : link.value}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-2 p-2 bg-ben10/20 hover:bg-ben10/40 rounded-md transition-colors duration-300"
                      aria-label="Open link"
                    >
                      <ExternalLink className="text-white" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
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

export default LinksSection;