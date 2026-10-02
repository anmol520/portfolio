'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import EngineeringFocus from '@/components/EngineeringFocus';
import DsaAchievements from '@/components/DsaAchievements';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ResumeViewerModal from '@/components/ResumeViewerModal';

export default function Home() {
  const [resumePreviewOpen, setResumePreviewOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#090a0d] text-slate-100 relative selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar onOpenResumePreview={() => setResumePreviewOpen(true)} />

      {/* 1. Hero */}
      <Hero onOpenResumePreview={() => setResumePreviewOpen(true)} />

      {/* 2. About */}
      <About />

      {/* 3. Skills / Technologies */}
      <Skills />

      {/* 4. Featured Projects */}
      <Projects />

      {/* 5. Engineering / Backend Focus */}
      <EngineeringFocus />

      {/* 6. DSA / Achievements */}
      <DsaAchievements />

      {/* 7. Education */}
      <Education />

      {/* 8. Contact */}
      <Contact />

      {/* 9. Footer */}
      <Footer />

      {/* Modal for PDF Resume in-browser inspection */}
      <ResumeViewerModal
        isOpen={resumePreviewOpen}
        onClose={() => setResumePreviewOpen(false)}
      />
    </main>
  );
}
