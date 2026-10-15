import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Lock, Mail, Users, Terminal } from 'lucide-react';

export default function PilotAccess() {
  const [email, setEmail] = useState('');
  const [teamSize, setTeamSize] = useState('10-50');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="pilot" className="py-24 border-t border-cyan-500/10 bg-[#02040a] relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <span>EARLY ADOPTER QUEUE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Request pilot access.
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            We are onboarding select engineering teams with complex production codebases into private pilot environments.
          </p>
        </div>

        {/* Form Card matching screenshot */}
        <div className="cognition-card p-8 sm:p-12 rounded-3xl border border-cyan-500/40 shadow-cyan-card max-w-2xl mx-auto relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400 flex items-center justify-center mx-auto shadow-cyan-glow">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white font-mono">Access Request Queued</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you! Our engineering team will review your organization's repository requirements and follow up within 24 hours.
              </p>
              <p className="text-xs font-mono text-cyan-400 pt-2">Queue ID: #DEVIN-PILOT-{Math.floor(100000 + Math.random() * 900000)}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  Work Email
                </label>
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="lead.engineer@company.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#040818] border border-cyan-500/30 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 font-mono text-sm transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    Engineering Team Size
                  </label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#040818] border border-cyan-500/30 text-white focus:outline-none focus:border-cyan-400 font-mono text-sm"
                  >
                    <option value="1-10">1 - 10 Engineers</option>
                    <option value="10-50">10 - 50 Engineers</option>
                    <option value="50-250">50 - 250 Engineers</option>
                    <option value="250+">250+ Engineers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    Primary Ecosystem
                  </label>
                  <select
                    className="w-full px-4 py-3.5 rounded-xl bg-[#040818] border border-cyan-500/30 text-white focus:outline-none focus:border-cyan-400 font-mono text-sm"
                  >
                    <option value="ts">TypeScript / JavaScript</option>
                    <option value="py">Python / PyTorch</option>
                    <option value="go">Go / Kubernetes</option>
                    <option value="rust">Rust / Systems</option>
                    <option value="other">Polyglot Monorepo</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-cyan-glow transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 font-mono"
              >
                <span>Request Pilot Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-[11px] font-mono text-slate-500 flex items-center justify-center gap-1.5">
                <Lock className="w-3 h-3 text-cyan-400" />
                Enterprise VPC deployments available upon approval
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
