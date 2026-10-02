'use client';

import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeViewerModal({ isOpen, onClose }: ResumeViewerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col rounded-2xl bg-[#0c0e14] border border-zinc-800 shadow-2xl text-slate-100 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#11151f]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base sm:text-lg">
                Anmol — Software Developer Resume
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                Backend-focused Software Developer • B.Tech CSE 2027
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download="Anmol-Backend-Developer-Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-black bg-cyan-400 hover:bg-cyan-300 rounded-md transition-all shadow-sm active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-md transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-md transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 w-full bg-zinc-950 p-2 sm:p-4 overflow-hidden relative">
          <iframe
            src={`${personalInfo.resumeUrl}#toolbar=1&navpanes=0`}
            title="Anmol Resume PDF Preview"
            className="w-full h-full rounded-lg border border-zinc-800 shadow-inner"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-2.5 bg-[#11151f] border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>Official Resume • Updated October 2026</span>
          <span>Contact: anmolsri520@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
