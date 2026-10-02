'use client';

import React from 'react';
import { skillsData } from '@/data/portfolioData';
import {
  Code,
  Server,
  Database,
  Layout,
  Terminal,
  Cpu,
} from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Code className="w-4 h-4 text-cyan-400" />;
      case 'Backend':
        return <Server className="w-4 h-4 text-emerald-400" />;
      case 'Databases':
        return <Database className="w-4 h-4 text-purple-400" />;
      case 'Frontend':
        return <Layout className="w-4 h-4 text-blue-400" />;
      case 'Infrastructure & Tools':
        return <Terminal className="w-4 h-4 text-sky-400" />;
      case 'DSA & Foundations':
        return <Cpu className="w-4 h-4 text-amber-400" />;
      default:
        return <Terminal className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-zinc-800/80 bg-[#0c0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
            <span className="text-zinc-600">{'//'}</span>
            <span>02. Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technologies & Foundations
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            A categorized overview of the languages, backend frameworks, databases, and developer tools I work with.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-xl bg-[#0e1117] border border-zinc-800/90 shadow-lg flex flex-col justify-between hover:border-zinc-700/80 transition-all duration-200"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-4 border-b border-zinc-800/80 mb-4">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="font-semibold text-white text-base tracking-tight">
                    {group.category}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-cyan-300 hover:border-zinc-700 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
