'use client';

import React, { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { Mail, Copy, Check, Send, Terminal, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Engineering Query / SDE Opportunity',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Anmol,\n\n${formData.message}\n\n---\nSender: ${formData.name} (${formData.email})`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-b border-zinc-800/80 bg-[#0c0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
            <span className="text-zinc-600">{'//'}</span>
            <span>07. Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get in Touch
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Feel free to reach out directly regarding software engineering opportunities, internships, or technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact & Profiles */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-xl bg-[#0e1117] border border-zinc-800/90 shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-zinc-500">Email Address</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-cyan-400 transition-colors font-medium"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* General Location */}
            <div className="p-5 rounded-xl bg-[#0e1117] border border-zinc-800/90 shadow-lg flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-amber-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-zinc-500">Location</div>
                <div className="text-xs sm:text-sm font-mono text-white font-medium">
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Public Developer Profiles */}
            <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800/80 font-mono text-xs space-y-3">
              <div className="text-[11px] uppercase text-zinc-500">Developer Profiles</div>
              <div className="flex flex-col gap-2">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub (@{personalInfo.githubUsername})</span>
                  </div>
                  <span className="text-zinc-500 text-xs">↗</span>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-zinc-500 text-xs">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1117] border border-zinc-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono uppercase text-zinc-300 font-semibold">
                    Send Direct Message
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Inbox Active</span>
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-zinc-400">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex"
                      className="w-full px-3 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-slate-200 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-zinc-400">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-3 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-slate-200 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  <label className="text-zinc-400">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Subject of message"
                    className="w-full px-3 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-slate-200 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  <label className="text-zinc-400">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or inquiry here..."
                    className="w-full px-3 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-slate-200 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none font-sans text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-mono text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-md shadow-cyan-950/40 active:scale-[0.99]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via Email</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60 font-mono text-xs text-emerald-400 text-center">
                    ✓ Opening email client with your message drafted.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
