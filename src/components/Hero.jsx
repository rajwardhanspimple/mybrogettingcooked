import React from 'react';
import { ArrowRight, Play, Terminal, Shield, Activity, Cpu, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Announcement Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-500/30 text-xs font-semibold text-brand-400 mb-8 hover:border-brand-500/50 transition-colors cursor-pointer group">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/80 animate-ping"></span>
          <span>NovaFlow React v3.2 Engine Launched</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 max-w-5xl mx-auto leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-brand-300">
          Build, Orchestrate, and Deploy Agentic AI Pipelines in React
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          NovaFlow turns complex LLM integrations, dynamic tool calling, and deterministic guardrails into high-speed autonomous workflows with real-time UI state bindings.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <a 
            href="#simulator" 
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-xl shadow-brand-500/25 transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            <span>Test Live Simulator</span>
          </a>
          <a 
            href="#features" 
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-300 hover:text-white glass hover:bg-slate-800/80 transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 text-brand-400 fill-brand-400" />
            <span>Explore Architecture</span>
          </a>
        </div>

        {/* Interactive Dashboard / Terminal Mockup */}
        <div className="relative max-w-5xl mx-auto rounded-2xl glass border border-slate-700/80 shadow-2xl p-4 sm:p-6 text-left font-mono text-sm overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-3 text-xs text-slate-400 font-sans font-medium flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-brand-400" />
                novaflow-cluster-01 • US-East (Vite React Runtime)
              </span>
            </div>
            <div className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md font-sans font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Cluster Active (100% Health)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start font-mono text-xs sm:text-sm text-slate-300">
            <div className="md:col-span-7 space-y-2 bg-slate-950/80 p-4 rounded-xl border border-slate-800/90">
              <p className="text-slate-500">// Import production-ready React hook orchestrator</p>
              <p><span className="text-brand-400">import</span> &#123; useNovaAgent, Guardrail &#125; <span className="text-brand-400">from</span> <span className="text-emerald-300">'@novaflow/react'</span>;</p>
              <p className="text-slate-500 mt-2">// High-throughput parallel execution hook</p>
              <p><span className="text-blue-400">const</span> &#123; dispatch, telemetry, isRunning &#125; = useNovaAgent(&#123;</p>
              <p className="pl-4">cluster: <span className="text-amber-400">'edge-global'</span>,</p>
              <p className="pl-4">compliance: Guardrail.ENTERPRISE_SOC2</p>
              <p>&#125;);</p>
              <p className="text-emerald-400 font-semibold pt-1">✔ Telemetry: 1,840,290 requests streamed | Latency: 11.4ms</p>
            </div>

            <div className="md:col-span-5 space-y-3 font-sans">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Median P99 Latency</p>
                  <p className="text-xl font-bold text-white">11.4 ms <span className="text-xs text-emerald-400 font-medium font-mono">-22% avg</span></p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                  <Cpu className="w-5 h-5" />
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Active Node Throughput</p>
                  <p className="text-xl font-bold text-white">112,400 <span className="text-xs text-slate-400 font-mono">req/sec</span></p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Activity className="w-5 h-5" />
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Safety & Compliance</p>
                  <p className="text-xl font-bold text-emerald-400">Zero PII Leakage</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Shield className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Metrics Counter */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-10 border-t border-slate-800/80">
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">99.999%</p>
            <p className="text-sm text-slate-400 mt-1 font-medium">Global Edge Uptime</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">&lt; 15ms</p>
            <p className="text-sm text-slate-400 mt-1 font-medium">Dispatch Response</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">4.8B+</p>
            <p className="text-sm text-slate-400 mt-1 font-medium">Monthly Micro-actions</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">SOC2 / HIPAA</p>
            <p className="text-sm text-slate-400 mt-1 font-medium">Production Certified</p>
          </div>
        </div>
      </div>
    </section>
  );
}
