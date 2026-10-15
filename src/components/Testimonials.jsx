import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    quote: 'NovaFlow reduced our multi-agent orchestration latency from 850ms down to 18ms. The deterministic guardrails alone saved us months of compliance engineering.',
    author: 'Elena Rostova',
    role: 'VP of AI Systems',
    company: 'FinScale Global',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80'
  },
  {
    quote: 'Deploying autonomous agents into production used to feel like playing with fire. NovaFlow gives us complete auditability and zero memory degradation across long conversations.',
    author: 'Marcus Vance',
    role: 'Chief Architect',
    company: 'Veloce Data Platforms',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80'
  },
  {
    quote: 'The cost router seamlessly cut our proprietary LLM bills by 42% by intelligently delegating mundane tasks to smaller models while preserving top-tier accuracy.',
    author: 'Dr. Sarah Lin',
    role: 'Head of Machine Learning',
    company: 'Synthetix Genomics',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-brand-400 font-bold mb-3">Customer Proof</h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Trusted by Engineering Leaders</p>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Over 4,000 engineering teams rely on NovaFlow to power high-frequency agent actions in production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl flex flex-col justify-between relative group">
              <Quote className="w-10 h-10 text-brand-500/20 absolute top-6 right-6 group-hover:text-brand-500/40 transition-colors" />
              
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-8 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-800/80">
                <img 
                  src={item.avatar} 
                  alt={item.author} 
                  className="w-12 h-12 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <p className="text-sm font-bold text-white">{item.author}</p>
                  <p className="text-xs text-slate-400">{item.role} • <span className="text-brand-400">{item.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
