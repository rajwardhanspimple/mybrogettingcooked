import React from 'react';
import { Cpu, ShieldCheck, Database, Workflow, KeyRound, Network, ArrowUpRight } from 'lucide-react';

const features = [
  {
    title: 'Adaptive Multi-Model Router',
    category: 'Architecture',
    desc: 'Dynamically routes agent sub-tasks across Claude, GPT-4o, and DeepSeek based on real-time latency, pricing, and token budget constraints.',
    icon: Network,
    color: 'from-brand-500/20 to-indigo-500/20',
    colSpan: 'md:col-span-2',
    badge: 'Zero Overhead'
  },
  {
    title: 'Deterministic Guardrails',
    category: 'Security',
    desc: 'Block prompt injections, enforce JSON-schema validation, and redact PII before prompts hit foundation models.',
    icon: ShieldCheck,
    color: 'from-emerald-500/20 to-teal-500/20',
    colSpan: 'md:col-span-1',
    badge: 'SOC2 Ready'
  },
  {
    title: 'Persistent Vector Memory',
    category: 'Storage',
    desc: 'Bi-temporal memory indexing preserves long-running multi-turn agent contexts with sub-5ms retrieval over millions of embeddings.',
    icon: Database,
    color: 'from-blue-500/20 to-cyan-500/20',
    colSpan: 'md:col-span-1',
    badge: 'Low Latency'
  },
  {
    title: 'One-Click Edge Deployments',
    category: 'DevOps',
    desc: 'Publish your autonomous pipelines as authenticated REST, GraphQL, or streaming WebSocket endpoints distributed globally.',
    icon: Workflow,
    color: 'from-purple-500/20 to-pink-500/20',
    colSpan: 'md:col-span-2',
    badge: 'Serverless'
  },
  {
    title: 'Enterprise RBAC & KMS',
    category: 'Governance',
    desc: 'Manage secrets with hardware security module (HSM) level encryption and granular role-based access for multi-tenant teams.',
    icon: KeyRound,
    color: 'from-amber-500/20 to-orange-500/20',
    colSpan: 'md:col-span-1',
    badge: 'Compliance'
  },
  {
    title: 'Autonomous Tool Engine',
    category: 'Execution',
    desc: 'Built-in sandboxed runtime executes code, invokes databases, and runs background web scrapers with automatic retry heuristics.',
    icon: Cpu,
    color: 'from-violet-500/20 to-purple-500/20',
    colSpan: 'md:col-span-2',
    badge: 'Wasm Sandboxed'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-brand-400 font-bold mb-3">Platform Architecture</h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Built for Production AI Workloads</p>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            A complete foundation enabling software engineering teams to ship autonomous agent features with zero architectural compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`glass-card p-8 rounded-2xl relative group overflow-hidden ${item.colSpan}`}
              >
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${item.color} rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125`}></div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-brand-400 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700/80">
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs font-mono text-brand-400 uppercase tracking-wider mb-1">{item.category}</p>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors flex items-center gap-1">
                  {item.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
