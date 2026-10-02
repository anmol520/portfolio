import React from 'react';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Cpu,
  Terminal,
} from 'lucide-react';

export default function About() {
  const practicalFocus = [
    {
      title: 'RESTful API & Service Structure',
      desc: 'Organizing backend projects with clear separation: controllers for HTTP concerns, dedicated services for business logic, and schema models for persistence.',
    },
    {
      title: 'Caching Semantics & Invalidation',
      desc: 'Implementing Redis query caching and custom in-memory LRU stores with HTTP Cache-Control, ETag headers, and TTL eviction to cut origin latency.',
    },
    {
      title: 'Asynchronous Job Queues',
      desc: 'Decoupling heavy or slow background tasks (such as notifications) using Redis and BullMQ with exponential backoff retries and dead-letter queues.',
    },
    {
      title: 'Database Query Hygiene',
      desc: 'Designing Mongoose schemas with compound indexes, avoiding unindexed collection scans, and structuring pagination cleanly.',
    },
  ];

  return (
    <section id="about" className="py-20 border-b border-zinc-800/80 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
            <span className="text-zinc-600">{'//'}</span>
            <span>01. About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Backend Engineering & System Fundamentals
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Natural, Honest Introduction */}
          <div className="lg:col-span-7 space-y-5 text-zinc-300 leading-relaxed text-sm sm:text-base">
            <p>
              I am a Computer Science undergraduate at{' '}
              <span className="text-white font-medium">
                Galgotias College of Engineering and Technology
              </span>{' '}
              (graduating in <span className="text-cyan-400 font-mono">2027</span>). My core technical interest is backend software development—the server-side logic, networking, and data infrastructure that makes applications dependable under the hood.
            </p>

            <p>
              I spend most of my time working with <span className="text-white font-medium">Node.js</span>,{' '}
              <span className="text-white font-medium">Express.js</span>,{' '}
              <span className="text-white font-medium">TypeScript</span>,{' '}
              <span className="text-white font-medium">MongoDB</span>, and{' '}
              <span className="text-white font-medium">Redis</span>. Rather than building shallow prototypes, I focus on practical architectural concerns: writing clean controller-service layers, configuring Redis caches and LRU eviction, handling asynchronous job queues with BullMQ, and preventing slow database lookups with proper indexes.
            </p>

            <p>
              Along with building projects, I maintain a strong routine in data structures and algorithms, having solved over{' '}
              <span className="text-white font-medium">500+ problems</span> across LeetCode, GeeksforGeeks, and CodeChef. This algorithmic practice helps me reason rigorously about time complexity, edge cases, and memory overhead when designing server systems.
            </p>

            {/* Practical Focus Box */}
            <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 mt-4">
              <div className="text-xs font-mono uppercase text-zinc-400 mb-3 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Areas of Focus in My Projects</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {practicalFocus.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-zinc-900/60 border border-zinc-800/60">
                    <div className="font-semibold text-slate-200 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <div className="text-zinc-400 text-[11px] leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic & Background Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-[#0e1117] border border-zinc-800 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                <span className="text-xs font-mono uppercase text-zinc-400">Background Summary</span>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">
                  Student Profile
                </span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-cyan-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-zinc-500 uppercase text-[10px]">Education</div>
                    <div className="text-white font-medium text-xs">B.Tech in Computer Science & Engineering</div>
                    <div className="text-zinc-400 text-[11px]">Galgotias College of Eng. & Tech (2023 - 2027)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-emerald-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-zinc-500 uppercase text-[10px]">Problem Solving</div>
                    <div className="text-white font-medium text-xs">500+ DSA Problems Solved</div>
                    <div className="text-zinc-400 text-[11px]">LeetCode, GeeksforGeeks, CodeChef</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-amber-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-zinc-500 uppercase text-[10px]">Hackathon</div>
                    <div className="text-white font-medium text-xs">Runner-up at HACKBASE 2026</div>
                    <div className="text-zinc-400 text-[11px]">24-Hour Competitive Hackathon</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 font-mono text-[11px] text-zinc-400 space-y-1">
                <div className="text-[10px] text-zinc-500 uppercase">Core Backend Stack:</div>
                <div className="text-slate-300">
                  Node.js • Express.js • TypeScript • MongoDB • Redis • BullMQ • Docker
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
