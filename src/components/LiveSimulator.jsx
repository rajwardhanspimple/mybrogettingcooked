import React, { useState } from 'react';
import { Play, RotateCw, CheckCircle2, ShieldCheck, Terminal, Layers } from 'lucide-react';

const scenarios = {
  rag: {
    title: '1. RAG & Knowledge Synthesizer',
    subtitle: 'Vector semantic routing + source verification',
    input: `{
  "action": "query_knowledge_base",
  "question": "What are the multi-region SLA terms?",
  "embedding_model": "text-embedding-3-small",
  "similarity_cutoff": 0.86
}`,
    output: `[00:00:00.003] ➔ Tokenizing question prompt (16 tokens)
[00:00:00.012] ➔ Vector search completed: 4 matches in 9ms
[00:00:00.024] ➔ Verifying citations from immutable doc repo
[00:00:00.041] ✔ Synthesized answer: 99.999% SLA across EU and US clusters.
[00:00:00.043] Pipeline run complete [Total Cost: $0.00008 | Latency: 43ms]`
  },
  agent: {
    title: '2. Autonomous Finance Agent',
    subtitle: 'Dynamic tool calls with spend controls',
    input: `{
  "action": "process_vendor_invoice",
  "invoice_id": "INV-2026-8891",
  "max_auto_approve": 1000,
  "delegates": ["stripe.verify", "sap.post", "slack.alert"]
}`,
    output: `[00:00:00.002] ➔ Decrypting customer credentials via Vault KMS
[00:00:00.019] ➔ Tool: stripe.verify({"id": "INV-2026-8891"}) → $480.00
[00:00:00.035] ➔ Auto-approval criterion met ($480 < $1000 threshold)
[00:00:00.052] ➔ Tool: sap.post("AP_APPROVED_LEDGER") → Ledger #49021
[00:00:00.068] ✔ Slack webhook notified #finance-ops [Status: SUCCESS]`
  },
  guard: {
    title: '3. Compliance Guardrail',
    subtitle: 'Real-time PII & prompt injection sanitizer',
    input: `{
  "stream": "user_chat_intake",
  "message": "Please contact Alice at alice@hospital.org with SSN: 000-45-6789",
  "guardrail_policy": "Strict-HIPAA-v4"
}`,
    output: `[00:00:00.001] ➔ Packet ingested into streaming sanitizer buffer
[00:00:00.004] ⚠ Sensitive Entity Detected: [PII_SSN] at pos 57
[00:00:00.007] 🛡 Sanitized stream: 'Alice (SSN: [REDACTED_ENCRYPTED_TAG])'
[00:00:00.012] ✔ Dispatched cleansed token buffer to inference model
[00:00:00.014] Audit event #AUD-882 logged to immutable append-only ledger`
  }
};

export default function LiveSimulator() {
  const [activeTab, setActiveTab] = useState('rag');
  const [isRunning, setIsRunning] = useState(false);
  const [logText, setLogText] = useState(scenarios['rag'].output);

  const handleTabChange = (key) => {
    setActiveTab(key);
    setLogText(scenarios[key].output);
  };

  const handleRun = () => {
    setIsRunning(true);
    setLogText('// Executing agent workflow in cloud sandbox runtime...');
    setTimeout(() => {
      setLogText(scenarios[activeTab].output);
      setIsRunning(false);
    }, 450);
  };

  return (
    <section id="simulator" className="py-24 border-t border-slate-800/80 bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs uppercase tracking-widest text-brand-400 font-bold mb-3">Live Interactive Playground</h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Test Agent Pipelines in Real Time</p>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Simulate autonomous agent execution, RAG queries, and real-time security guardrails directly in the browser.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.entries(scenarios).map(([key, item]) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
                activeTab === key
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30 ring-2 ring-brand-400/30'
                  : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Console Window */}
        <div className="glass rounded-2xl border border-slate-700/80 p-6 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{scenarios[activeTab].title}</p>
                <p className="text-xs text-slate-400 font-mono">{scenarios[activeTab].subtitle}</p>
              </div>
            </div>

            <button
              onClick={handleRun}
              disabled={isRunning}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isRunning ? (
                <RotateCw className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-white" />
              )}
              <span>{isRunning ? 'Running Pipeline...' : 'Run Simulation'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Payload */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase font-mono text-slate-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-brand-400" />
                  Input JSON Payload
                </label>
                <span className="text-[11px] text-slate-500 font-mono">POST /api/v3/agent/dispatch</span>
              </div>
              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 h-64 overflow-y-auto leading-relaxed selection:bg-slate-800">
                {scenarios[activeTab].input}
              </pre>
            </div>

            {/* Telemetry Output */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  Execution Log Stream
                </label>
                <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Live Output
                </span>
              </div>
              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400 h-64 overflow-y-auto leading-relaxed selection:bg-slate-800 whitespace-pre-wrap">
                {logText}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
