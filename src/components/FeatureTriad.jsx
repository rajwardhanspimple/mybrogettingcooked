import React from 'react';
import { Shield, Lock, FileCheck, Eye, Terminal, RefreshCw, Network, Radio } from 'lucide-react';

export default function FeatureTriad() {
  return (
    <section id="capabilities" className="py-24 border-t border-cyan-500/10 bg-[#02040a] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <span>ENGINEERED FOR COMPLEXITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How Devin Masters Software Engineering
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Deep architectural reasoning, autonomous self-healing, and strict enterprise sandboxing built from the ground up.
          </p>
        </div>

        {/* 3 Architecture Cards from Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Architected for real world complexity */}
          <div className="cognition-card p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden">
            <div>
              {/* Node Network Visual */}
              <div className="h-44 rounded-xl bg-[#040818] border border-cyan-500/20 mb-6 p-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30"></div>
                <div className="relative flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/60 flex items-center justify-center text-cyan-400 font-mono text-xs shadow-cyan-card">
                    Repo
                  </div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-400 flex items-center justify-center text-white font-mono text-xs font-bold shadow-blue-glow">
                    AST
                  </div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-400 animate-pulse"></div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/60 flex items-center justify-center text-emerald-400 font-mono text-xs">
                    Build
                  </div>
                </div>
              </div>

              <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Deep Codebase Understanding</p>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors font-mono">
                Architected for Real-World Complexity
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Navigates million-line monorepos, parses dependency graphs, and resolves intricate compiler mismatches across hundreds of sub-packages.
              </p>
            </div>
          </div>

          {/* Card 2: Never lost in the loop */}
          <div className="cognition-card p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden">
            <div>
              {/* Feedback Loop Visual */}
              <div className="h-44 rounded-xl bg-[#040818] border border-cyan-500/20 mb-6 p-4 flex items-center justify-center relative overflow-hidden">
                <div className="relative w-28 h-28 rounded-full border-2 border-dashed border-cyan-400/50 flex items-center justify-center animate-spin" style={{ animationDuration: '16s' }}>
                  <span className="absolute -top-2 px-2 py-0.5 rounded bg-cyan-500 text-black text-[9px] font-mono font-bold">Run</span>
                  <span className="absolute -bottom-2 px-2 py-0.5 rounded bg-rose-500 text-white text-[9px] font-mono font-bold">Test</span>
                  <span className="absolute -right-2 px-2 py-0.5 rounded bg-emerald-500 text-black text-[9px] font-mono font-bold">Fix</span>
                </div>
                <div className="absolute flex flex-col items-center">
                  <RefreshCw className="w-6 h-6 text-cyan-400" />
                  <span className="text-[10px] font-mono text-slate-300 mt-1">Self-Heal</span>
                </div>
              </div>

              <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Compiler-in-the-Loop</p>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors font-mono">
                Never Lost in the Loop
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                When unit tests fail or exceptions fire, Devin analyzes the runtime stack trace, generates hypothesis fixes, and executes until green.
              </p>
            </div>
          </div>

          {/* Card 3: Continuous learning from live runs */}
          <div className="cognition-card p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden">
            <div>
              {/* Radar Scanner Visual */}
              <div className="h-44 rounded-xl bg-[#040818] border border-cyan-500/20 mb-6 p-4 flex items-center justify-center relative overflow-hidden">
                <div className="w-32 h-32 rounded-full border border-cyan-500/30 flex items-center justify-center relative">
                  <div className="w-20 h-20 rounded-full border border-cyan-500/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400"></div>
                  </div>
                  <div className="absolute inset-0 rounded-full border-t-2 border-cyan-400 animate-radar pointer-events-none"></div>
                </div>
              </div>

              <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Runtime Telemetry</p>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors font-mono">
                Continuous Learning from Live Runs
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Devin builds repository-specific memory snapshots, learning your internal style guidelines, custom testing fixtures, and deploy rituals.
              </p>
            </div>
          </div>
        </div>

        {/* Security & Explicit Consent Banner matching screenshot */}
        <div className="cognition-card p-8 sm:p-12 rounded-3xl border border-cyan-500/30 relative overflow-hidden shadow-cyan-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
                <Shield className="w-3.5 h-3.5" />
                <span>ZERO-TRUST ENTERPRISE GUARDRAILS</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Nothing happens without explicit consent.
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Devin operates within strictly isolated ephemeral virtual machines. You define what files can be touched, what network domains are reachable, and when a human approval step is mandatory before merging.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-[#040818] border border-cyan-500/20 flex items-center gap-3 text-slate-300">
                <Lock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Ephemeral VMs destroyed immediately after job termination</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#040818] border border-cyan-500/20 flex items-center gap-3 text-slate-300">
                <Eye className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Every shell keystroke logged to immutable audit ledger</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#040818] border border-cyan-500/20 flex items-center gap-3 text-slate-300">
                <FileCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Zero training on proprietary customer source code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
