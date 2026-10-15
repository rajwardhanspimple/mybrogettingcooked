import React, { useState } from 'react';
import { Zap, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-brand-500/20 transition-transform group-hover:scale-105">
            <Zap className="w-5 h-5 text-white fill-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            NovaFlow <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/30">React v3.2</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#simulator" className="hover:text-white transition-colors">Interactive Simulator</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Customers</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Sign In</a>
          <a 
            href="#simulator" 
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-lg shadow-brand-500/25 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-3 pb-6 border-t border-slate-800 glass animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4 text-sm font-medium text-slate-300">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">Features</a>
            <a href="#simulator" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">Interactive Simulator</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">Pricing</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">Customers</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">FAQ</a>
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a href="#" className="text-center text-sm font-medium text-slate-300 hover:text-white py-2">Sign In</a>
              <a 
                href="#simulator" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 shadow-md"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
