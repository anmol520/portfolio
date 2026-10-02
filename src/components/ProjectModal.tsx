'use client';

import React from 'react';
import { Project } from '@/types';
import { X, ExternalLink, Terminal, Cpu, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0d1017] border border-zinc-800 shadow-2xl text-slate-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#11151f]">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
            <p className="text-xs text-zinc-400 font-mono">{project.tagline}</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg transition-colors"
              title="View on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Summary */}
          <div>
            <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Project Summary</span>
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-950/60 p-4 rounded-xl border border-zinc-800/70">
              {project.summary}
            </p>
          </div>

          {/* Key Architecture Details */}
          <div>
            <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Engineering Implementation & Details</span>
            </h4>
            <div className="space-y-2">
              {project.architectureDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/60 text-xs sm:text-sm text-zinc-300"
                >
                  <span className="text-cyan-400 font-mono text-xs mt-0.5">[{idx + 1}]</span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Endpoints & Contracts (if available) */}
          {project.endpoints && project.endpoints.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase text-zinc-400 mb-3 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>Sample REST Endpoints & Contracts</span>
              </h4>

              <div className="space-y-4">
                {project.endpoints.map((ep, eIdx) => (
                  <div
                    key={eIdx}
                    className="p-4 rounded-xl bg-[#090b10] border border-zinc-800/80 space-y-3 font-mono text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                          ep.method === 'GET'
                            ? 'bg-blue-950 text-blue-400 border border-blue-800'
                            : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        }`}
                      >
                        {ep.method}
                      </span>
                      <span className="text-slate-200 font-medium">{ep.path}</span>
                    </div>

                    <p className="text-zinc-400 text-xs font-sans">{ep.description}</p>

                    {ep.samplePayload && (
                      <div className="space-y-1">
                        <div className="text-[10px] uppercase text-zinc-500">Request Body:</div>
                        <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-900 overflow-x-auto text-[11px] text-cyan-300 whitespace-pre">
                          {ep.samplePayload}
                        </div>
                      </div>
                    )}

                    <div className="space-y-1">
                      <div className="text-[10px] uppercase text-zinc-500">Sample Response:</div>
                      <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-900 overflow-x-auto text-[11px] text-emerald-400 whitespace-pre">
                        {ep.sampleResponse}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase text-zinc-400 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-zinc-800 bg-[#11151f] flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-500">GitHub: github.com/anmol520</span>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-black bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors font-medium"
            >
              <span>View Source</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-mono text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
