import React from 'react';
import { ArrowRight, Sparkles, Terminal, Shield, RefreshCw } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-grid">
      {/* Top radial ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] ambient-cyan-glow pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-xs font-mono font-semibold text-cyan-300 mb-10 shadow-cyan-card hover:border-cyan-400 transition-colors cursor-pointer">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span>FIRST AUTONOMOUS AI SOFTWARE ENGINEER</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
        </div>

        {/* Main Headline from Screenshot */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.05] text-white">
          The whole job.<br />
          <span className="cyan-neon-text tracking-wide">On its own.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
          Devin is an autonomous software engineer. From prompt to pull request, Devin plans, writes, debugs, and deploys entire production software systems with human-grade reasoning.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <a 
            href="#pilot" 
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-cyan-glow transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center gap-2 font-mono"
          >
            <span>Request Pilot Access</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="#benchmarks" 
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/80 border border-cyan-500/20 hover:border-cyan-400/50 transition-all flex items-center justify-center gap-2 font-mono"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>SWE-bench Results</span>
          </a>
        </div>

        {/* 3 Glowing Feature Cards from Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="cognition-card p-6 rounded-2xl text-left relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors font-mono">
              10x Faster Iteration
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Resolves unassigned issues, builds greenfield features, and migrates repos from concept to production.
            </p>
          </div>

          {/* Card 2 */}
          <div className="cognition-card p-6 rounded-2xl text-left relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors font-mono">
              Full Autonomy
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Navigates unfamiliar codebases, reads external documentation, fixes bugs, and tests its own implementations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="cognition-card p-6 rounded-2xl text-left relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors font-mono">
              Self-Correcting Loop
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Runs test suites in sandboxes. When compiler errors emerge, Devin reads the stack trace and debugs autonomously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
