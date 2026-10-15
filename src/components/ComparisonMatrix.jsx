import React from 'react';
import { Check, X, Minus, Sparkles, Shield, Cpu } from 'lucide-react';

const rows = [
  {
    capability: 'Codebase Scale Context',
    copilot: 'Single active file buffer',
    wrappers: 'Top-k chunk similarity',
    devin: 'Entire repository graph & AST',
  },
  {
    capability: 'Self-Debugging Execution Loop',
    copilot: 'None (Blind prediction)',
    wrappers: 'Fragile prompt retry',
    devin: 'Runs tests, reads stack traces, fixes bugs',
  },
  {
    capability: 'Sandboxed Tooling Runtime',
    copilot: 'IDE editor pane only',
    wrappers: 'Restricted custom functions',
    devin: 'Full Linux shell, browser, editor & compiler',
  },
  {
    capability: 'End-to-End Task Completion',
    copilot: 'User must copy & test',
    wrappers: 'Breaks on runtime error',
    devin: 'Full unassisted PR ready for review',
  },
  {
    capability: 'Long-Horizon State Persistence',
    copilot: 'Context reset per session',
    wrappers: 'Loses state after 4 steps',
    devin: 'Bi-temporal memory across hundreds of steps',
  },
  {
    capability: 'Enterprise Isolation & VPC',
    copilot: 'Shared cloud telemetry',
    wrappers: 'Third-party API pass-through',
    devin: 'Hardware-isolated ephemeral VM & VPC',
  },
];

export default function ComparisonMatrix() {
  return (
    <section id="matrix" className="py-24 border-t border-cyan-500/10 bg-[#02040a] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading from Screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <span>ARCHITECTURAL COMPARISON</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Not a wrapper. <br />
            <span className="cyan-neon-text">Not a copilot.</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            A fundamentally different architecture built from scratch for full-spectrum engineering autonomy.
          </p>
        </div>

        {/* Matrix Container */}
        <div className="cognition-card rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-cyan-500/20 bg-[#050a18] text-xs font-mono">
                <th className="py-5 px-6 text-slate-400 uppercase tracking-wider font-semibold w-1/4">Capability</th>
                <th className="py-5 px-6 text-slate-400 uppercase tracking-wider font-semibold w-1/4">Traditional Copilot</th>
                <th className="py-5 px-6 text-slate-400 uppercase tracking-wider font-semibold w-1/4">Chained Agents</th>
                <th className="py-5 px-6 text-cyan-300 uppercase tracking-wider font-bold w-1/4 bg-cyan-950/50 border-l border-r border-cyan-500/40 relative">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Devin Engine</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 font-sans text-sm">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-4 px-6 font-semibold text-white font-mono text-xs">
                    {row.capability}
                  </td>
                  <td className="py-4 px-6 text-slate-400 text-xs">
                    <span className="flex items-center gap-2">
                      <Minus className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                      {row.copilot}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-400 text-xs">
                    <span className="flex items-center gap-2">
                      <Minus className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                      {row.wrappers}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-cyan-200 text-xs font-medium bg-cyan-950/30 border-l border-r border-cyan-500/30">
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400 font-bold flex-shrink-0" />
                      {row.devin}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
