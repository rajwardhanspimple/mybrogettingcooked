import React, { useState } from 'react';
import { Zap, Github, Twitter, Linkedin, ArrowRight, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-16 border-b border-slate-800/80">
          {/* Brand & Newsletter */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-brand-500/20">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">NovaFlow</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              The enterprise autonomous agent orchestration platform. Build, safeguard, and scale resilient AI workflows at global edge latency.
            </p>

            {/* Newsletter input */}
            <form onSubmit={handleSubscribe} className="pt-2">
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Subscribe to Agent Engineering Updates
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 py-2.5">
                  <Check className="w-4 h-4" /> You are subscribed to engineering updates!
                </div>
              ) : (
                <div className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="engineering@company.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 transition-colors flex items-center gap-1"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-white transition-colors">Agent Routing</a></li>
              <li><a href="#simulator" className="hover:text-white transition-colors">Interactive Playground</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Guardrails & PII</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Tiers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog v3.2</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">Developers</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">React SDK Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">REST & GraphQL APIs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Discord</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub Examples</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">Security & Trust</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">SOC2 Type II Report</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HIPAA Business Associate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Status: 99.999%</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 NovaFlow Systems Inc. All rights reserved.</p>
          <div className="flex items-center gap-5 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
