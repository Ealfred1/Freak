
import React from 'react';
import Navbar from '@/components/Navbar';
import Roadmap from '@/components/Roadmap';

const RoadmapPage = () => {
  return (
    <div className="min-h-screen bg-ben10-background">
      <Navbar />
      <div className="container mx-auto px-4 py-28">
        <h1 className="text-6xl font-['Rubik_Dirt'] text-ben10 text-center mb-12">Roadmap</h1>
        <Roadmap />
      </div>
    </div>
  );
};

export default RoadmapPage;
