import React from 'react';
import { Cpu, Github, Twitter, Linkedin, Terminal } from 'lucide-react';

export default function HorizonFooter() {
  return (
    <footer className="relative border-t border-cyan-500/10 bg-[#02040a] pt-16 pb-12 overflow-hidden">
      {/* Ambient glowing horizon line at bottom from screenshot */}
      <div className="absolute bottom-0 left-0 right-0 h-64 ambient-horizon-glow pointer-events-none -z-0 opacity-80"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#00f0ff]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Links Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-16 border-b border-cyan-500/10 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-black font-extrabold">
              <Cpu className="w-4 h-4 text-black" />
            </div>
            <span className="font-bold tracking-widest text-white uppercase">COGNITION • DEVIN</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <a href="#cockpit" className="hover:text-cyan-400 transition-colors">Cockpit</a>
            <a href="#capabilities" className="hover:text-cyan-400 transition-colors">Capabilities</a>
            <a href="#benchmarks" className="hover:text-cyan-400 transition-colors">SWE-bench</a>
            <a href="#matrix" className="hover:text-cyan-400 transition-colors">Architecture</a>
            <a href="#pilot" className="hover:text-cyan-400 transition-colors">Pilot Program</a>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Massive Typography Horizon Banner from Screenshot ('SAIFULLAH') */}
        <div className="py-16 text-center select-none">
          <h2 className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-400/40 opacity-90 drop-shadow-[0_0_35px_rgba(0,240,255,0.4)] font-mono uppercase">
            SAIFULLAH
          </h2>
          <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mt-3">
            ENGINEERING THE FUTURE OF AUTONOMOUS SYSTEMS
          </p>
        </div>

        {/* Bottom Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500 pt-6">
          <p>© 2026 Cognition Systems / Saifullah. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Security Whitepaper</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
