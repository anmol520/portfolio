import React from 'react';
import { achievementsData } from '@/data/portfolioData';
import { Trophy, Award, Code2 } from 'lucide-react';

export default function DsaAchievements() {
  return (
    <section id="achievements" className="py-20 border-b border-zinc-800/80 bg-[#0c0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
            <span className="text-zinc-600">{'//'}</span>
            <span>05. DSA & Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Algorithmic Practice & Credentials
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Factual achievements across competitive problem solving, hackathon building, and industry certifications.
          </p>
        </div>

        {/* DSA Highlight Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0e121a] border border-zinc-800 shadow-xl mb-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-xs font-mono text-cyan-300">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Problem Solving Practice</span>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">
                  500<span className="text-cyan-400">+</span> Problems Solved
                </div>
                <div className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                  LeetCode • GeeksforGeeks • CodeChef
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Practicing algorithmic problem solving focusing on Data Structures & Algorithms, including Dynamic Programming, Graph Traversals (BFS/DFS), Trees, Heaps, Sliding Window, and Greedy methods.
              </p>
            </div>

            {/* Hackathon Achievement Box */}
            <div className="p-5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 md:w-80 shrink-0 space-y-2">
              <div className="flex items-center gap-2 text-amber-400">
                <Trophy className="w-5 h-5" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Hackathon</span>
              </div>
              <div className="text-base font-bold text-white">
                Runner-up — HACKBASE 2026
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Awarded runner-up in a competitive 24-hour hackathon for building a resilient backend service under tight time constraints.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.slice(2).map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl bg-[#0e1117] border border-zinc-800 hover:border-zinc-700/80 transition-all flex flex-col justify-between shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-cyan-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                    {item.highlight}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-white text-sm tracking-tight">{item.title}</h3>
                  <div className="text-xs font-mono text-cyan-400 mt-0.5">{item.eventOrIssuer}</div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
