import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How does NovaFlow differ from basic LangChain or CrewAI setups?',
    a: 'Traditional Python agent frameworks suffer from GIL limitations, high memory footprint, and non-deterministic loops. NovaFlow is engineered with an asynchronous high-throughput state runtime written in Rust and wrapped in native React bindings. This guarantees sub-millisecond dispatch, predictable token budgets, and zero infinite loop crashes.'
  },
  {
    q: 'Can NovaFlow connect to private internal VPC databases and microservices?',
    a: 'Yes. NovaFlow includes zero-trust mTLS connectors for PostgreSQL, Redis, Snowflake, ClickHouse, and internal gRPC/REST microservices. All queries are executed inside isolated sandboxes with strict ephemeral credentials.'
  },
  {
    q: 'Is customer prompt data stored or used to train public models?',
    a: 'Never. NovaFlow operates on a strict zero-data-retention policy by default. Your proprietary data and prompts are processed purely in ephemeral memory and discarded immediately after generation. We provide audited SOC2 Type II, HIPAA, and GDPR compliance agreements.'
  },
  {
    q: 'Can I write custom tool functions in TypeScript or Python?',
    a: 'Absolutely. NovaFlow supports custom tools written in TypeScript, JavaScript, Python, or WebAssembly (Wasm). You define the input parameters with JSON-schema, and our autonomous router handles type validation and execution.'
  },
  {
    q: 'What happens if a primary model provider experiences an outage?',
    a: 'NovaFlow features instant zero-downtime automated fallback. If your primary provider throws a 5xx error or exceeds latency thresholds, your agent pipeline immediately shifts traffic to your backup model configuration without dropping active sessions.'
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 border-t border-slate-800/80 bg-slate-950/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-brand-400 font-bold mb-3">Common Inquiries</h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Frequently Asked Questions</p>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Everything you need to know about NovaFlow architecture, governance, and deployment.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="glass-card rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex justify-between items-center text-base sm:text-lg font-semibold text-white focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-brand-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-300' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-400 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
