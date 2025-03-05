
import React from 'react';
import Navbar from '@/components/Navbar';

const Buy = () => {
  return (
    <div className="min-h-screen bg-ben10-background">
      <Navbar />
      <div className="container mx-auto px-4 py-28">
        <h1 className="text-6xl font-['Bangers'] text-ben10 text-center mb-12">Buy $FREAK</h1>
        <div className="max-w-4xl mx-auto glass-blur p-8 relative">
          <div className="absolute -z-10 inset-0 bg-blur w-full h-full opacity-30"></div>
          <p className="text-center text-xl mb-8 text-white">Coming Soon...</p>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-ben10-background/50 p-6 rounded-lg border border-ben10/20 w-full max-w-md">
              <h3 className="text-ben10 text-xl font-bold mb-4">Join the waiting list</h3>
              <p className="text-white mb-4">Be the first to know when $FREAK launches</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 bg-ben10-background border border-ben10/30 rounded-lg text-white focus:outline-none focus:border-ben10"
                />
                <button className="buy-button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
