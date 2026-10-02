'use client';

import React, { useState } from 'react';
import { projectsData } from '@/data/portfolioData';
import { Project } from '@/types';
import ProjectModal from './ProjectModal';
import { ExternalLink, ChevronRight, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 border-b border-zinc-800/80 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
            <span className="text-zinc-600">{'//'}</span>
            <span>03. Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Backend Systems & Production Implementations
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Key server-side and full-stack projects showcasing clean modular structure, caching, asynchronous queues, and network semantics.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-8">
          {projectsData.map((project, idx) => {
            const isCoreBackend = idx < 3;
            return (
              <div
                key={project.id}
                className={`rounded-xl bg-[#0e1117] transition-all duration-200 overflow-hidden shadow-xl flex flex-col justify-between ${
                  isCoreBackend
                    ? 'border border-zinc-700/80 hover:border-cyan-500/50 hover:shadow-cyan-950/20'
                    : 'border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* Header */}
                <div className="p-6 pb-4 border-b border-zinc-800/80 bg-[#10141d]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-mono text-xs text-cyan-400 font-semibold">
                        0{idx + 1}.
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                      {isCoreBackend && (
                        <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 font-semibold">
                          Core Backend
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 font-mono">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-cyan-300 hover:text-cyan-200 bg-cyan-950/60 border border-cyan-800/60 rounded-lg transition-colors"
                      title="View Live Demo"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors font-medium active:scale-95"
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Architecture & Endpoints</span>
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5">
                <p className="text-sm text-zinc-300 leading-relaxed max-w-4xl">
                  {project.summary}
                </p>

                {/* Key Engineering Concepts */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase text-zinc-400 font-semibold tracking-wider">
                    Key Engineering Concepts:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
                    {project.keyEngineeringConcepts.map((concept, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-start gap-2 p-2 rounded bg-zinc-950/80 border border-zinc-800/70"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                        <span className="leading-snug">{concept}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Endpoints (if defined) */}
                {project.endpoints && project.endpoints.length > 0 && (
                  <div className="pt-2">
                    <div className="text-[11px] font-mono uppercase text-zinc-400 font-semibold mb-2">
                      Sample Endpoints & Contracts:
                    </div>
                    <div className="space-y-1.5">
                      {project.endpoints.map((ep, eIdx) => (
                        <div
                          key={eIdx}
                          className="flex flex-wrap items-center justify-between p-2.5 rounded bg-zinc-950 border border-zinc-800/80 text-xs font-mono gap-2"
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-1.5 py-0.5 text-[10px] font-bold rounded ${
                                ep.method === 'GET'
                                  ? 'bg-blue-950 text-blue-400 border border-blue-800'
                                  : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                              }`}
                            >
                              {ep.method}
                            </span>
                            <span className="text-zinc-200 font-medium">{ep.path}</span>
                          </div>
                          <span className="text-zinc-400 text-[11px]">{ep.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Technologies Footer */}
              <div className="p-6 pt-3 pb-4 border-t border-zinc-800/80 bg-[#0b0e14] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Detailed Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
