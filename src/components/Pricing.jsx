import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  const tiers = [
    {
      name: 'Developer',
      desc: 'Ideal for prototyping and individual engineers building side projects.',
      monthlyPrice: 0,
      annualPrice: 0,
      badge: null,
      features: [
        'Up to 50,000 runs / month',
        '3 active autonomous pipelines',
        'Community Discord support',
        'Standard 3-day log retention',
        'Community model access (Llama 3, Mistral)'
      ],
      cta: 'Start Prototyping Free',
      popular: false
    },
    {
      name: 'Team Pro',
      desc: 'For high-growth software teams scaling mission-critical autonomous agents.',
      monthlyPrice: 79,
      annualPrice: 63,
      badge: 'Most Popular',
      features: [
        '1,000,000 runs / month included',
        'Unlimited autonomous agent pipelines',
        'Dynamic low-latency cost router',
        'Deterministic guardrails & PII filters',
        '90-day searchable audit logs',
        'Dedicated Slack Connect channel'
      ],
      cta: 'Start 14-Day Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      desc: 'For organizations with strict compliance, VPC, and SLA requirements.',
      monthlyPrice: 399,
      annualPrice: 319,
      badge: 'Custom Cloud',
      features: [
        'Unlimited runs with volume discounts',
        'Self-hosted VPC or On-Prem agents',
        'Hardware Security Module (HSM) keys',
        'Custom SLA guarantees (99.999%)',
        'Dedicated Technical Account Manager',
        'Custom fine-tuned router algorithms'
      ],
      cta: 'Talk to Enterprise Engineering',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-brand-400 font-bold mb-3">Predictable Pricing</h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Simple, Transparent Tiering</p>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Choose the right plan to scale from your first prototype to billions of autonomous micro-actions.
          </p>

          {/* Annual / Monthly Toggle Switch */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-xl glass border border-slate-700/80">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                !annual ? 'bg-brand-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                annual ? 'bg-brand-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => {
            const price = annual ? tier.annualPrice : tier.monthlyPrice;
            return (
              <div
                key={idx}
                className={`glass-card p-8 rounded-2xl flex flex-col justify-between relative ${
                  tier.popular ? 'border-brand-500/60 shadow-xl shadow-brand-500/10' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-white" />
                    <span>{tier.badge}</span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-slate-400 text-sm mb-6 min-h-[40px]">{tier.desc}</p>
                  
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-extrabold text-white tracking-tight">
                      ${price}
                    </span>
                    <span className="text-slate-400 text-sm font-medium">/ month</span>
                  </div>

                  <ul className="space-y-3.5 text-sm text-slate-300 mb-8">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white shadow-lg shadow-brand-500/20 transform hover:-translate-y-0.5'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
