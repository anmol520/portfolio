'use client';

import React from 'react';
import Image from 'next/image';
import { personalInfo } from '@/data/portfolioData';
import TerminalWidget from './TerminalWidget';
import {
  ArrowDown,
  Download,
  Mail,
  FileText,
  Cpu,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResumePreview: () => void;
}

export default function Hero({ onOpenResumePreview }: HeroProps) {
  const coreTags = [
    'Node.js',
    'Express.js',
    'TypeScript',
    'REST APIs',
    'Redis Caching',
    'BullMQ Queues',
    'MongoDB',
    'Docker',
    'Next.js',
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-zinc-800/60 bg-grid-pattern">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-cyan-950/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Identity & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Beacon - honest student positioning */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>B.Tech CSE Student • Graduating 2027</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Anmol
              </h1>
              <p className="text-lg sm:text-2xl font-mono font-medium text-cyan-400">
                {personalInfo.headline}
              </p>
            </div>

            {/* Supporting Pitch */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
              {personalInfo.supportingPitch}
            </p>

            {/* Quick Tech Highlights */}
            <div className="flex flex-wrap gap-2 pt-1">
              {coreTags.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono text-zinc-300 bg-zinc-900/90 border border-zinc-800 rounded-md hover:border-zinc-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Primary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-md shadow-cyan-950/40 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Anmol-Backend-Developer-Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-mono text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 rounded-lg transition-all shadow-sm active:scale-95"
                title="Download Resume PDF directly"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResumePreview}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-mono text-zinc-400 hover:text-white bg-zinc-900/40 hover:bg-zinc-800/60 border border-zinc-800 rounded-lg transition-all"
                title="Preview Resume in browser"
              >
                <FileText className="w-4 h-4" />
                <span>Preview</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-mono text-zinc-400 hover:text-white transition-colors"
              >
                <span>Contact Me →</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-3 text-zinc-400 text-xs font-mono border-t border-zinc-800/80">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/{personalInfo.githubUsername}</span>
              </a>
              <span className="text-zinc-700">|</span>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-zinc-700">|</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo Card & Interactive Terminal */}
          <div className="lg:col-span-5 space-y-5">
            {/* Developer Identity Card */}
            <div className="p-4 rounded-xl bg-[#0e1117] border border-zinc-800/90 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-4">
                {/* Photo with technical border */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 border-zinc-700/80 relative shadow-inner bg-zinc-900">
                    <Image
                      src={personalInfo.photoUrl}
                      alt="Anmol - Backend-focused Software Developer"
                      width={100}
                      height={100}
                      priority
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-zinc-950 border border-zinc-800 rounded-full px-1.5 py-0.5 flex items-center gap-1 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-mono text-emerald-400 font-bold">200 OK</span>
                  </div>
                </div>

                {/* Profile Meta */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-semibold text-base sm:text-lg">Anmol</h3>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                      B.Tech &apos;27
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-mono">
                    Galgotias College of Eng. & Tech
                  </p>
                  <p className="text-xs text-zinc-500 font-mono">
                    Noida, Uttar Pradesh, India
                  </p>
                  <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-cyan-400">
                    <Cpu className="w-3 h-3" />
                    <span>500+ Algorithmic Problems Solved</span>
                  </div>
                </div>
              </div>

              {/* Verified Technical Anchors */}
              <div className="mt-4 pt-3 border-t border-zinc-800/80 grid grid-cols-3 gap-2 text-center font-mono">
                <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/60">
                  <div className="text-[10px] text-zinc-500 uppercase">Primary Stack</div>
                  <div className="text-xs font-semibold text-cyan-300 mt-0.5">Node / Express</div>
                </div>
                <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/60">
                  <div className="text-[10px] text-zinc-500 uppercase">Caching</div>
                  <div className="text-xs font-semibold text-emerald-400 mt-0.5">Redis / LRU</div>
                </div>
                <div className="p-2 rounded bg-zinc-900/60 border border-zinc-800/60">
                  <div className="text-[10px] text-zinc-500 uppercase">Async Queues</div>
                  <div className="text-xs font-semibold text-blue-400 mt-0.5">BullMQ</div>
                </div>
              </div>
            </div>

            {/* Interactive Terminal Simulator */}
            <TerminalWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
