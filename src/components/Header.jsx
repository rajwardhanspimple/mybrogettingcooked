import React, { useState } from 'react';
import { Cpu, ArrowRight, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#02040a]/80 backdrop-blur-xl border-b border-cyan-500/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-black font-extrabold shadow-cyan-glow group-hover:scale-105 transition-transform">
            <Cpu className="w-5 h-5 text-black" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-wider text-white uppercase font-mono flex items-center gap-2">
              COGNITION <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">DEVIN</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300 font-sans">
          <a href="#cockpit" className="hover:text-cyan-400 transition-colors">Cockpit</a>
          <a href="#capabilities" className="hover:text-cyan-400 transition-colors">Capabilities</a>
          <a href="#benchmarks" className="hover:text-cyan-400 transition-colors">Benchmarks</a>
          <a href="#matrix" className="hover:text-cyan-400 transition-colors">Architecture</a>
          <a href="#pilot" className="hover:text-cyan-400 transition-colors">Enterprise</a>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="#pilot" 
            className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-cyan-glow transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2 font-mono"
          >
            <span>Request Pilot</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden px-6 py-6 bg-[#050a15] border-t border-cyan-500/20 font-sans">
          <div className="flex flex-col gap-4 text-sm text-slate-300">
            <a href="#cockpit" onClick={() => setMobileOpen(false)} className="hover:text-cyan-400 py-1">Cockpit</a>
            <a href="#capabilities" onClick={() => setMobileOpen(false)} className="hover:text-cyan-400 py-1">Capabilities</a>
            <a href="#benchmarks" onClick={() => setMobileOpen(false)} className="hover:text-cyan-400 py-1">Benchmarks</a>
            <a href="#matrix" onClick={() => setMobileOpen(false)} className="hover:text-cyan-400 py-1">Architecture</a>
            <a href="#pilot" onClick={() => setMobileOpen(false)} className="hover:text-cyan-400 py-1">Enterprise Pilot</a>
            <div className="pt-4 border-t border-slate-800">
              <a 
                href="#pilot" 
                onClick={() => setMobileOpen(false)}
                className="block text-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-cyan-400 font-mono"
              >
                Request Pilot Access
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
