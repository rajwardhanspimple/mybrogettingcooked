import React from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import AgentCockpit from './components/AgentCockpit.jsx';
import FeatureTriad from './components/FeatureTriad.jsx';
import BenchmarkGrid from './components/BenchmarkGrid.jsx';
import ComparisonMatrix from './components/ComparisonMatrix.jsx';
import PilotAccess from './components/PilotAccess.jsx';
import HorizonFooter from './components/HorizonFooter.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#02040a] text-slate-100 flex flex-col relative selection:bg-cyan-500 selection:text-black font-sans">
      {/* Ambient Radial Backdrop Glow */}
      <div className="fixed inset-0 ambient-cyan-glow pointer-events-none -z-10"></div>

      {/* Navigation Header */}
      <Header />

      {/* Main Flow */}
      <main className="flex-grow">
        <HeroSection />
        <AgentCockpit />
        <FeatureTriad />
        <BenchmarkGrid />
        <ComparisonMatrix />
        <PilotAccess />
      </main>

      {/* Horizon Footer with 'SAIFULLAH' Banner */}
      <HorizonFooter />
    </div>
  );
}
