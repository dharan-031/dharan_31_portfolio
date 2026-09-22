import React, { useState } from 'react';
import { Github, Linkedin, ArrowUpRight, MessageSquare, Send, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [quickMessage, setQuickMessage] = useState('');
  const [copiedNote, setCopiedNote] = useState(false);

  const handleCopyNote = () => {
    if (!quickMessage.trim()) return;
    navigator.clipboard.writeText(quickMessage);
    setCopiedNote(true);
    setTimeout(() => setCopiedNote(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/80 border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Open for Conversations
          </span>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3"
          >
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-xl mx-auto leading-relaxed">
            {PERSONAL_INFO.contactStatement}
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Connect Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* GitHub Card */}
          <a
            id="contact-github-card"
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                  <Github className="w-6 h-6" />
                </div>
                <span className="p-2 rounded-lg bg-slate-50 text-slate-400 group-hover:text-slate-900 group-hover:bg-slate-100 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">GitHub</h3>
              <p className="text-xs text-slate-500 mb-4">
                Explore repository commits, practice exercises, and project code.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-800">
              <span className="font-mono text-slate-600">@dharan-031</span>
              <span className="text-indigo-600 group-hover:underline flex items-center gap-1">
                Open Profile
              </span>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            id="contact-linkedin-card"
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-lg hover:border-blue-200 transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="p-2 rounded-lg bg-blue-50 text-blue-400 group-hover:text-blue-600 group-hover:bg-blue-100 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">LinkedIn</h3>
              <p className="text-xs text-slate-500 mb-4">
                Connect professionally, discuss technology ideas, and network.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-800">
              <span className="font-mono text-slate-600">dharanraj031</span>
              <span className="text-blue-600 group-hover:underline flex items-center gap-1">
                Connect
              </span>
            </div>
          </a>
        </div>

        {/* Quick Connect Note Composer (no fake email/phone) */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-3 text-slate-900 font-semibold text-sm">
            <MessageSquare className="w-4 h-4 text-indigo-600" />
            <span>Have a project idea, advice, or want to say hi?</span>
          </div>
          <p className="text-xs text-slate-500 mb-3">
            Draft a note here to copy and send via LinkedIn message:
          </p>
          <div className="space-y-3">
            <textarea
              rows={3}
              value={quickMessage}
              onChange={(e) => setQuickMessage(e.target.value)}
              placeholder="Hi Dharanraj, I saw your portfolio and would like to connect regarding..."
              className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50/50"
            />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] text-slate-400">
                You can paste this directly into LinkedIn connection request.
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyNote}
                  disabled={!quickMessage.trim()}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition disabled:opacity-40 flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedNote ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Copy Note</span>
                    </>
                  )}
                </button>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>Open LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
