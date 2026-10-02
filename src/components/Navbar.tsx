'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { personalInfo } from '@/data/portfolioData';
import { Terminal, Download, Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResumePreview: () => void;
}

export default function Navbar({ onOpenResumePreview }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Engineering', href: '#engineering' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#090a0d]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Terminal Prompt */}
          <Link
            href="#"
            className="flex items-center gap-2 group text-slate-100 font-mono text-sm tracking-tight"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-colors shadow-sm">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-slate-100">anmol</span>
              <span className="text-zinc-500">@</span>
              <span className="text-cyan-400">backend</span>
              <span className="text-zinc-500">:~$</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-cyan-400 hover:bg-zinc-800/40 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions: Preview + Download Resume */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenResumePreview}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-zinc-300 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-md transition-all shadow-sm"
              title="Preview Resume in browser"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Preview</span>
            </button>

            <a
              href={personalInfo.resumeUrl}
              download="Anmol-Backend-Developer-Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-medium text-black bg-cyan-400 hover:bg-cyan-300 rounded-md transition-all shadow-sm active:scale-95"
              title="Download Resume PDF directly"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={personalInfo.resumeUrl}
              download="Anmol-Backend-Developer-Resume.pdf"
              className="p-1.5 text-black bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors"
              title="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white rounded-md border border-zinc-800 bg-zinc-900/80"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-zinc-800/80 pb-3 flex flex-col gap-1 bg-[#0c0e13]/95 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-zinc-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-mono text-zinc-300 hover:text-cyan-400 hover:bg-zinc-800/60 rounded-md transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-zinc-600 text-xs">→</span>
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-800 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumePreview();
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-700 rounded-md"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Preview Resume</span>
              </button>
              <a
                href={personalInfo.resumeUrl}
                download="Anmol-Backend-Developer-Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono font-medium text-black bg-cyan-400 rounded-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
