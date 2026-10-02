'use client';

import React from 'react';
import { educationData } from '@/data/portfolioData';
import { GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Education() {
  const coreCoursework = [
    'Data Structures & Algorithms',
    'Database Management Systems (DBMS)',
    'Operating Systems',
    'Computer Networks',
    'Object-Oriented Programming',
    'System Design Fundamentals',
  ];

  return (
    <section id="education" className="py-20 border-b border-zinc-800/80 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
            <span className="text-zinc-600">{'//'}</span>
            <span>06. Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Academic Background
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Formal computer science education and foundational engineering coursework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Timeline of Institutions */}
          <div className="lg:col-span-8 space-y-6">
            {educationData.map((edu) => (
              <div
                key={edu.institution}
                className="p-6 rounded-xl bg-[#0e1117] border border-zinc-800 hover:border-zinc-700/80 transition-all shadow-xl space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-zinc-800/80 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-cyan-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base sm:text-lg">
                        {edu.institution}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-cyan-400">
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-500 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {edu.notes && (
                  <div className="space-y-2">
                    {edu.notes.map((note, nIdx) => (
                      <div
                        key={nIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Coursework Card */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-xl bg-[#0e1117] border border-zinc-800 shadow-xl space-y-4">
              <div className="pb-3 border-b border-zinc-800/80">
                <h3 className="font-mono text-xs uppercase text-zinc-300 font-semibold tracking-wider">
                  Relevant Coursework
                </h3>
              </div>

              <div className="space-y-2">
                {coreCoursework.map((course) => (
                  <div
                    key={course}
                    className="p-2.5 rounded-lg bg-zinc-950/70 border border-zinc-800/80 text-xs font-mono text-zinc-300"
                  >
                    • {course}
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-zinc-800 text-[11px] font-mono text-zinc-500">
                Expected Graduation: June 2027
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
