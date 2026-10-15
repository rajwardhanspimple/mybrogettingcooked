import React, { useState, useEffect } from 'react';
import { 
  Terminal, Code2, Globe, GitPullRequest, CheckCircle2, 
  Play, RotateCw, FileCode, Check, AlertCircle, ArrowRight
} from 'lucide-react';

export default function AgentCockpit() {
  const [activeTab, setActiveTab] = useState('editor');
  const [stepProgress, setStepProgress] = useState(3);
  const [simulating, setSimulating] = useState(false);

  const steps = [
    { id: 1, title: 'Analyze GitHub Issue #892', desc: 'Read stack trace and repro environment', status: 'done' },
    { id: 2, title: 'Clone Repository & Spin Sandboxed VM', desc: 'Set up node_modules and isolated docker container', status: 'done' },
    { id: 3, title: 'Synthesize & Apply AST Patch', desc: 'Fix race condition in async connection pool', status: 'active' },
    { id: 4, title: 'Run Full Test Suite Matrix', desc: '148 integration tests verifying regression safety', status: 'pending' },
    { id: 5, title: 'Generate Verified Pull Request', desc: 'Produce branch with detailed commit commentary', status: 'pending' },
  ];

  const triggerRun = () => {
    setSimulating(true);
    setTimeout(() => {
      setStepProgress(4);
      setSimulating(false);
    }, 800);
  };

  return (
    <section id="cockpit" className="py-24 border-t border-cyan-500/10 bg-[#02040a] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading matching screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <span>REAL-TIME EXECUTION ENVIRONMENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From prompt into live software.<br />
            <span className="cyan-neon-text font-mono text-2xl sm:text-4xl">Without a hitch.</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Devin comes equipped with common developer tools including its own shell, code editor, and browser within a secure, isolated sandbox.
          </p>
        </div>

        {/* Cockpit Window Container */}
        <div className="cognition-card rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl relative">
          {/* Top Window Bar */}
          <div className="bg-[#050a18] border-b border-cyan-500/20 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
            {/* Window Dots & Workstation Title */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <span className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-2 border-l border-slate-700 pl-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                devin-sandbox-vm // session #dev-9401
              </span>
            </div>

            {/* Workstation Navigation Tabs */}
            <div className="flex items-center bg-[#030611] p-1 rounded-xl border border-slate-800">
              <button 
                onClick={() => setActiveTab('editor')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                  activeTab === 'editor' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Editor</span>
              </button>
              <button 
                onClick={() => setActiveTab('terminal')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                  activeTab === 'terminal' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Shell</span>
              </button>
              <button 
                onClick={() => setActiveTab('browser')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                  activeTab === 'browser' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Browser</span>
              </button>
              <button 
                onClick={() => setActiveTab('diff')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                  activeTab === 'diff' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                <GitPullRequest className="w-3.5 h-3.5" />
                <span>PR Diff</span>
              </button>
            </div>

            {/* Action Trigger */}
            <button 
              onClick={triggerRun}
              disabled={simulating}
              className="px-4 py-1.5 rounded-lg text-xs font-mono font-bold text-black bg-cyan-400 hover:bg-cyan-300 flex items-center gap-1.5 shadow-cyan-glow transition-all disabled:opacity-50"
            >
              {simulating ? <RotateCw className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3 fill-black" />}
              <span>{simulating ? 'Executing...' : 'Run Step'}</span>
            </button>
          </div>

          {/* Main Grid: Left Plan, Right Tool View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Left Column: Autonomous Task Planner */}
            <div className="lg:col-span-4 bg-[#030611] border-r border-cyan-500/10 p-5 font-sans">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  Autonomous Planner
                </span>
                <span className="text-[11px] font-mono text-slate-500">5 Steps</span>
              </div>

              <div className="space-y-3">
                {steps.map((st) => {
                  const isCompleted = st.id < stepProgress;
                  const isCurrent = st.id === stepProgress;
                  return (
                    <div 
                      key={st.id}
                      className={`p-3.5 rounded-xl border transition-all ${
                        isCurrent 
                          ? 'bg-cyan-950/40 border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                          : isCompleted 
                            ? 'bg-[#050b18]/60 border-slate-800/80 opacity-90'
                            : 'bg-transparent border-slate-800/40 opacity-40'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">
                          {isCompleted ? (
                            <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                              <Check className="w-3 h-3" />
                            </div>
                          ) : isCurrent ? (
                            <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center animate-pulse">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                            </div>
                          ) : (
                            <div className="w-4 h-4 rounded-full bg-slate-800 text-slate-500 flex items-center justify-center text-[10px] font-mono">
                              {st.id}
                            </div>
                          )}
                        </div>
                        <div>
                          <p className={`text-xs font-semibold ${isCurrent ? 'text-white font-mono' : isCompleted ? 'text-slate-300' : 'text-slate-500'}`}>
                            {st.title}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                            {st.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Active Tool Display */}
            <div className="lg:col-span-8 bg-[#040816] p-5 font-mono text-xs overflow-x-auto flex flex-col justify-between">
              {activeTab === 'editor' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2 text-[11px]">
                    <span className="flex items-center gap-2 text-cyan-300">
                      <FileCode className="w-4 h-4 text-cyan-400" />
                      lib/connection-pool.ts
                    </span>
                    <span className="text-slate-500">TypeScript • UTF-8</span>
                  </div>
                  <div className="text-slate-300 leading-relaxed font-mono">
                    <p><span className="text-blue-400">export async function</span> <span className="text-cyan-300">acquireSocket</span>(options: PoolOptions) &#123;</p>
                    <p className="pl-4 text-slate-500">// Devin: Fixing concurrency race condition under load</p>
                    <p className="pl-4 text-rose-400 bg-rose-950/20 -mx-2 px-2">- const socket = this.idlePool.pop();</p>
                    <p className="pl-4 text-emerald-300 bg-emerald-950/20 -mx-2 px-2">+ const socket = await this.mutex.acquire(() =&gt; this.idlePool.pop());</p>
                    <p className="pl-4"><span className="text-blue-400">if</span> (!socket) &#123;</p>
                    <p className="pl-8 text-emerald-300 bg-emerald-950/20 -mx-2 px-2">+ await this.provisionFallbackNode(options.timeoutMs);</p>
                    <p className="pl-8"><span className="text-blue-400">return this</span>.allocateNewConnection();</p>
                    <p className="pl-4">&#125;</p>
                    <p className="pl-4"><span className="text-blue-400">return</span> socket;</p>
                    <p>&#125;</p>
                  </div>
                </div>
              )}

              {activeTab === 'terminal' && (
                <div className="space-y-2 text-slate-300 font-mono text-xs leading-relaxed">
                  <p className="text-slate-500">$ npm test -- --runInBand lib/connection-pool.test.ts</p>
                  <p className="text-cyan-400">➔ RUNS lib/connection-pool.test.ts</p>
                  <p className="text-slate-400">  ✓ acquireSocket allocates within 2ms threshold (12ms)</p>
                  <p className="text-slate-400">  ✓ handles 2,000 concurrent socket spikes without leakage (184ms)</p>
                  <p className="text-slate-400">  ✓ automated reconnection triggers upon socket closure (45ms)</p>
                  <p className="text-emerald-400 font-bold pt-2">Test Suites: 1 passed, 1 total</p>
                  <p className="text-emerald-400 font-bold">Tests:       42 passed, 42 total</p>
                  <p className="text-slate-400">Snapshots:   0 total</p>
                  <p className="text-slate-400">Time:        0.842 s</p>
                  <p className="text-cyan-300 font-semibold">Ran all test suites. [Clean compilation - Exit Code 0]</p>
                </div>
              )}

              {activeTab === 'browser' && (
                <div className="rounded-xl border border-slate-800 bg-[#02050f] p-4 font-sans text-center my-auto">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 text-xs font-mono text-slate-400">
                    <span>http://localhost:3000/telemetry</span>
                    <span className="text-emerald-400">HTTP 200 OK</span>
                  </div>
                  <p className="text-sm text-white font-bold">Live Application Preview</p>
                  <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                    Devin boots an automated headless Chrome instance to test UI state, console exceptions, and visual snapshots.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Browser checks passed: 0 runtime errors
                  </div>
                </div>
              )}

              {activeTab === 'diff' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
                    <span className="text-cyan-300">Pull Request #14: fix(pool): resolve race condition in socket allocation</span>
                    <span className="text-emerald-400">+18 / -4 lines</span>
                  </div>
                  <p className="text-slate-400 text-xs">Branch: <span className="text-white">devin/fix-pool-concurrency</span> ➔ <span className="text-white">main</span></p>
                  <p className="text-emerald-400 text-xs pt-1">✔ All continuous integration checks have passed</p>
                  <p className="text-slate-400 text-xs">✔ 1 approval from Devin Automations (bot)</p>
                </div>
              )}

              {/* Cockpit Status Footer */}
              <div className="border-t border-slate-800/80 pt-3 mt-6 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Sandbox: Linux x86_64
                  </span>
                  <span>CPU: 8%</span>
                  <span>Mem: 1.4GB / 8GB</span>
                </div>
                <div className="text-cyan-400 font-semibold">
                  Human Oversight: 0 interventions required
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
