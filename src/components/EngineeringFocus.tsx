import React from 'react';
import { backendPillars } from '@/data/portfolioData';
import {
  Server,
  Database,
  ShieldCheck,
  Zap,
  Container,
  CheckCircle,
  Network,
  Workflow,
} from 'lucide-react';

import { BackendPillar } from '@/types';

export default function EngineeringFocus() {
  const icons = [
    <Server key="0" className="w-5 h-5 text-cyan-400" />,
    <Zap key="1" className="w-5 h-5 text-emerald-400" />,
    <Workflow key="2" className="w-5 h-5 text-blue-400" />,
    <Database key="3" className="w-5 h-5 text-purple-400" />,
    <ShieldCheck key="4" className="w-5 h-5 text-amber-400" />,
    <Container key="5" className="w-5 h-5 text-sky-400" />,
  ];

  return (
    <section id="engineering" className="py-20 border-b border-zinc-800/80 bg-[#0c0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
            <span className="text-zinc-600">{'//'}</span>
            <span>04. Engineering & Backend Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Backend Engineering Principles
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-3xl">
            Core areas of server-side architecture, caching semantics, asynchronous processing, and system design that I focus on.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {backendPillars.map((pillar: BackendPillar, idx: number) => (
            <div
              key={pillar.title}
              className="p-6 rounded-xl bg-[#0e121a] border border-zinc-800/80 hover:border-zinc-700/80 hover:bg-[#121622] transition-all duration-200 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                    {icons[idx]}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900/90 px-2 py-0.5 rounded border border-zinc-800">
                    {pillar.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              {/* Verified Architecture Checkpoints */}
              <div className="pt-4 mt-4 border-t border-zinc-800/80 space-y-1.5">
                {pillar.metrics.map((metric: string, mIdx: number) => (
                  <div
                    key={mIdx}
                    className="flex items-center gap-2 text-xs font-mono text-zinc-400"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Flow Diagram Box */}
        <div className="mt-12 p-6 rounded-xl bg-zinc-950 border border-zinc-800/90 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-800/80 gap-3">
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono uppercase text-zinc-300 font-semibold">
                Production Backend Request Lifecycle & Boundary
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500">
              Zero Unhandled Failures • Fail-Fast Contract
            </span>
          </div>

          <div className="mt-6 overflow-x-auto pb-2">
            <div className="min-w-[700px] flex items-center justify-between font-mono text-xs gap-3">
              {/* Step 1 */}
              <div className="flex-1 p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-center">
                <div className="text-[10px] text-zinc-500 uppercase">Step 01</div>
                <div className="font-semibold text-slate-200 mt-1">Client Ingress</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">TLS, Rate Limit, CORS</div>
              </div>

              <span className="text-zinc-600 font-bold">→</span>

              {/* Step 2 */}
              <div className="flex-1 p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-center">
                <div className="text-[10px] text-zinc-500 uppercase">Step 02</div>
                <div className="font-semibold text-slate-200 mt-1">Auth & RBAC</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">JWT Guard & Roles</div>
              </div>

              <span className="text-zinc-600 font-bold">→</span>

              {/* Step 3 */}
              <div className="flex-1 p-3 rounded-lg bg-cyan-950/30 border border-cyan-800/50 text-center">
                <div className="text-[10px] text-cyan-400 uppercase">Step 03 (Fast Path)</div>
                <div className="font-semibold text-cyan-300 mt-1">Redis LRU Cache</div>
                <div className="text-[10px] text-cyan-400/80 mt-0.5">Sub-15ms Cache Hit</div>
              </div>

              <span className="text-zinc-600 font-bold">→</span>

              {/* Step 4 */}
              <div className="flex-1 p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-center">
                <div className="text-[10px] text-zinc-500 uppercase">Step 04 (Service)</div>
                <div className="font-semibold text-slate-200 mt-1">Business Logic</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">Pure Services Layer</div>
              </div>

              <span className="text-zinc-600 font-bold">→</span>

              {/* Step 5 */}
              <div className="flex-1 p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-center">
                <div className="text-[10px] text-zinc-500 uppercase">Step 05 (Storage)</div>
                <div className="font-semibold text-slate-200 mt-1">Indexed MongoDB</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">Compound Index Query</div>
              </div>

              <span className="text-zinc-600 font-bold">→</span>

              {/* Step 6 */}
              <div className="flex-1 p-3 rounded-lg bg-blue-950/30 border border-blue-800/50 text-center">
                <div className="text-[10px] text-blue-400 uppercase">Step 06 (Async)</div>
                <div className="font-semibold text-blue-300 mt-1">BullMQ Queue</div>
                <div className="text-[10px] text-blue-400/80 mt-0.5">Decoupled Worker (DLQ)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
