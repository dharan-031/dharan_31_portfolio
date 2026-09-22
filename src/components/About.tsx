import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Lightbulb, Compass, Award, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Background & Mindset
          </span>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3"
          >
            About Me
          </h2>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
            {PERSONAL_INFO.about.map((paragraph, index) => (
              <p key={index} className="text-slate-700">
                {paragraph}
              </p>
            ))}

            {/* Quick Principles */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Learning by Building</h4>
                  <p className="text-[12px] text-slate-500 mt-0.5">
                    Reinforcing theory through small, practical web projects.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Problem-Solving Focus</h4>
                  <p className="text-[12px] text-slate-500 mt-0.5">
                    Developing algorithmic fundamentals and critical thinking.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Code Illustration / Developer Workspace Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-900 text-slate-200 shadow-xl overflow-hidden font-mono text-xs">
              {/* Terminal Window Controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>student-profile.ts</span>
                </div>
                <span className="text-[10px] text-slate-500">Node v20</span>
              </div>

              {/* Terminal Code Snippet */}
              <div className="p-5 space-y-2 leading-relaxed">
                <div>
                  <span className="text-indigo-400">const</span>{' '}
                  <span className="text-emerald-400">student</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-amber-300">'Dharanraj A'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">academicStage:</span>{' '}
                  <span className="text-amber-300">'First-Year B.Tech CSE'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">currentFocus:</span> [
                </div>
                <div className="pl-8 text-amber-300">
                  'Web Development',<br />
                  'Generative AI Fundamentals',<br />
                  'Programming Logic'
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-slate-400">ambition:</span>{' '}
                  <span className="text-amber-300">'Tech Entrepreneurship'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">status:</span>{' '}
                  <span className="text-emerald-400">'Actively Learning Every Day'</span>
                </div>
                <div>{'};'}</div>
                <div className="pt-2 text-slate-500">
                  // Continuous curiosity & building useful solutions
                </div>
                <div className="pt-1 text-indigo-400">
                  <span className="text-slate-400">$</span> student.startNextProject();
                </div>
              </div>

              {/* Status footer bar */}
              <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Ready to collaborate
                </span>
                <span>UTF-8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
