'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, ArrowUp, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '@/data/portfolioData';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#08090c] border-t border-zinc-800 text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-zinc-900">
          {/* Identity */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2 text-slate-200">
              <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-white text-sm">Anmol</span>
              <span className="text-zinc-600">{'//'}</span>
              <span className="text-cyan-400">Backend-focused Software Developer</span>
            </div>
            <p className="text-zinc-400 text-xs max-w-md font-sans">
              Building REST APIs, caching systems, asynchronous queues, real-time services, and reliable developer infrastructure.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-zinc-500 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>B.Tech CSE &apos;27 • Galgotias College of Eng. & Tech</span>
            </div>
          </div>

          {/* System Telemetry */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[10px] uppercase text-zinc-500">System Telemetry</div>
            <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-900 space-y-1 text-[11px]">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Local Time:</span>
                <span className="text-cyan-300 font-mono">{currentTime || 'SYNCING...'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Focus:</span>
                <span className="text-emerald-400 font-mono">Backend Engineering</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">HTTP Status:</span>
                <span className="text-zinc-300 font-mono">200 OK</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[10px] uppercase text-zinc-500">Quick Navigation</div>
            <div className="grid grid-cols-2 gap-1.5 text-[11px]">
              <a href="#about" className="hover:text-cyan-400 transition-colors">
                • About
              </a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">
                • Skills
              </a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">
                • Projects
              </a>
              <a href="#achievements" className="hover:text-cyan-400 transition-colors">
                • Achievements
              </a>
              <a href="#education" className="hover:text-cyan-400 transition-colors">
                • Education
              </a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">
                • Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} Anmol. Backend-focused Software Developer.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span>•</span>
            <a
              href={personalInfo.resumeUrl}
              download="Anmol-Backend-Developer-Resume.pdf"
              className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
