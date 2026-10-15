import React from 'react';
import { Quote, Sparkles, CheckCircle2, Bot, Cpu, Zap } from 'lucide-react';

const items = [
  {
    num: '01',
    title: 'Chatbot LLMs',
    subtitle: 'Fragmented Context',
    desc: 'Require constant copy-pasting, lose memory of your repo, and hallucinate non-existent API methods.',
    highlighted: false
  },
  {
    num: '02',
    title: 'Inline Copilots',
    subtitle: 'Next-Token Completion',
    desc: 'Great for completing the next 3 lines of code, but completely blind to system architecture and multi-file dependencies.',
    highlighted: false
  },
  {
    num: '03',
    title: 'Chained Agent Scripts',
    subtitle: 'Fragile Loops',
    desc: 'Fail when unexpected runtime exceptions occur. Incapable of debugging their own build failures.',
    highlighted: false
  },
  {
    num: '04',
    title: 'Manual Tool Wrappers',
    subtitle: 'Rigid Schemas',
    desc: 'Restricted to predetermined API calls. Cannot spin up terminals, launch browsers, or inspect network waterfalls.',
    highlighted: false
  },
  {
    num: '05',
    title: 'Devin Autonomous Engine',
    subtitle: 'Full System Autonomy',
    desc: 'Navigates full codebases, writes tests, runs shells, analyzes errors, and iterates autonomously until tests pass.',
    highlighted: true
  },
  {
    num: '06',
    title: 'Enterprise Sandboxes',
    subtitle: 'Zero Trust Rigor',
    desc: 'Runs completely isolated in ephemeral VMs with hardware isolation, granular approvals, and zero code retention.',
    highlighted: false
  }
];

export default function BenchmarkGrid() {
  return (
    <section id="benchmarks" className="py-24 border-t border-cyan-500/10 bg-[#02040a] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <span>PARADIGM SHIFT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            AI Today. <span className="cyan-neon-text">The Autonomous Standard.</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Why engineering teams are replacing superficial chat copilots with fully autonomous software engineers.
          </p>
        </div>

        {/* 6-Card Grid from Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl transition-all duration-300 relative flex flex-col justify-between ${
                item.highlighted
                  ? 'cognition-card-active border-cyan-400/80 shadow-cyan-glow relative overflow-hidden'
                  : 'cognition-card'
              }`}
            >
              {item.highlighted && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-cyan-400 text-black text-[10px] font-mono font-bold tracking-wider uppercase rounded-bl-xl">
                  State of the Art
                </div>
              )}

              <div>
                <span className={`text-2xl font-mono font-extrabold mb-4 block ${
                  item.highlighted ? 'text-cyan-300' : 'text-slate-600'
                }`}>
                  {item.num}
                </span>
                <p className={`text-xs font-mono uppercase tracking-wider mb-1 ${
                  item.highlighted ? 'text-cyan-200' : 'text-slate-500'
                }`}>
                  {item.subtitle}
                </p>
                <h3 className={`text-xl font-bold mb-3 font-mono ${
                  item.highlighted ? 'text-white' : 'text-slate-200'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  item.highlighted ? 'text-cyan-100/90 font-medium' : 'text-slate-400'
                }`}>
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className={item.highlighted ? 'text-cyan-300' : 'text-slate-500'}>
                  {item.highlighted ? 'Autonomous Resolution' : 'Manual Intervention'}
                </span>
                {item.highlighted && <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Quote Box from Screenshot */}
        <div className="cognition-card p-8 sm:p-12 rounded-3xl border border-cyan-500/30 max-w-4xl mx-auto relative overflow-hidden shadow-cyan-card">
          <Quote className="w-12 h-12 text-cyan-400/20 absolute top-8 right-8" />
          
          <p className="text-lg sm:text-2xl text-slate-200 font-medium italic leading-relaxed mb-6 max-w-3xl">
            "Devin resolved a complex distributed locking issue across our monorepo in 14 minutes. It set up the test environment, reproduced the deadlock, applied the patch, and opened a clean pull request with 100% test pass rate."
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800/80 text-sm">
            <div>
              <p className="font-bold text-white font-mono">Head of Distributed Systems</p>
              <p className="text-xs text-cyan-400 font-mono">Fortune 50 Infrastructure Engineering Team</p>
            </div>

            {/* Benchmark Progress Bar below quote */}
            <div className="w-full sm:w-64 space-y-1.5">
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>SWE-bench Resolved</span>
                <span className="text-cyan-400 font-bold">13.86% Unassisted</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-[85%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
