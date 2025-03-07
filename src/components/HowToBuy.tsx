
import React from 'react';
import { Wallet, Banknote, Link, ArrowRight } from 'lucide-react';

const HowToBuy = () => {
  return (
    <div className="relative w-full py-24 bg-ben10-background overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-ben10 bg-blur"></div>
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-ben10-dark bg-blur opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font2 text-ben10 text-center mb-16">
          HOW TO BUY
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Step 1 - Left */}
          <div className="wooden-plank p-6 rounded-lg mb-16 ml-0 mr-auto max-w-md">
            <div className="flex items-start gap-4">
              <div className="bg-ben10 p-2 rounded-full">
                <Wallet className="text-ben10-background w-8 h-8" />
              </div>
              <div>
                <h3 className="font2 text-2xl text-ben10-light mb-2">SET UP A WALLET</h3>
                <p className="text-white">
                  Download Nest wallet or Phantom wallet to store your $FREAK tokens. These wallets are your gateway to the Ben10 universe on the blockchain.
                </p>
              </div>
            </div>
            {/* Connector to next step */}
            <div className="wooden-connector -right-20 top-1/2 transform -translate-y-1/2 rotate-45"></div>
          </div>
          
          {/* Step 2 - Right */}
          <div className="wooden-plank p-6 rounded-lg mb-16 ml-auto mr-0 max-w-md relative">
            <div className="flex items-start gap-4">
              <div className="bg-ben10 p-2 rounded-full">
                <Banknote className="text-ben10-background w-8 h-8" />
              </div>
              <div>
                <h3 className="font2 text-2xl text-ben10-light mb-2">PURCHASE SOL</h3>
                <p className="text-white">
                  Buy Solana (SOL) from any major exchange like Coinbase, Binance, or Kraken. You'll need SOL to swap for $FREAK tokens.
                </p>
              </div>
            </div>
            {/* Connector to next step */}
            <div className="wooden-connector -left-20 top-1/2 transform -translate-y-1/2 -rotate-45"></div>
          </div>
          
          {/* Step 3 - Left */}
          <div className="wooden-plank p-6 rounded-lg mb-16 ml-0 mr-auto max-w-md relative">
            <div className="flex items-start gap-4">
              <div className="bg-ben10 p-2 rounded-full">
                <Link className="text-ben10-background w-8 h-8" />
              </div>
              <div>
                <h3 className="font2 text-2xl text-ben10-light mb-2">CONNECT YOUR WALLET</h3>
                <p className="text-white">
                  Connect your wallet to Raydium or your preferred swap protocol.
                </p>
              </div>
            </div>
            {/* Connector to next step */}
            <div className="wooden-connector -right-20 top-1/2 transform -translate-y-1/2 rotate-45"></div>
          </div>
          
          {/* Step 4 - Right */}
          <div className="wooden-plank p-6 rounded-lg ml-auto mr-0 max-w-md">
            <div className="flex items-start gap-4">
              <div className="bg-ben10 p-2 rounded-full">
                <ArrowRight className="text-ben10-background w-8 h-8" />
              </div>
              <div>
                <h3 className="font2 text-2xl text-ben10-light mb-2">SWAP SOL FOR $FREAK</h3>
                <p className="text-white">
                  Use Raydium to swap your SOL for $FREAK. Paste the $FREAK contract address, set your slippage, and complete the swap to transform your portfolio!
                </p>
              </div>
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

export default HowToBuy;
