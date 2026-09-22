import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Sparkles, Code2, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle background ambient pattern */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-indigo-50/70 rounded-full blur-3xl opacity-60 transform -translate-y-12"></div>
        <div className="w-[400px] h-[400px] bg-slate-100/60 rounded-full blur-2xl opacity-70 transform translate-x-32 translate-y-24"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-medium text-slate-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>First-Year B.Tech Student</span>
            <span className="text-slate-300">•</span>
            <span className="text-indigo-600 font-semibold">Actively Learning & Building</span>
          </div>

          {/* Main Heading */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Hi, I'm <span className="text-indigo-600">Dharanraj A</span>
          </h1>

          {/* Supporting Headline */}
          <h2
            id="hero-supporting-headline"
            className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 max-w-2xl mx-auto"
          >
            {PERSONAL_INFO.heroSubtitle}
          </h2>

          {/* Short Description */}
          <p
            id="hero-description"
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {PERSONAL_INFO.heroDescription}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <button
              id="hero-btn-view-projects"
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm shadow-sm hover:shadow transition-all duration-150 flex items-center gap-2 cursor-pointer"
            >
              <span>View My Projects</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              id="hero-btn-connect"
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm border border-slate-200 shadow-2xs hover:border-slate-300 transition-all duration-150 cursor-pointer"
            >
              Connect With Me
            </button>
          </div>

          {/* Social Profiles */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <a
              id="hero-social-github"
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dharanraj A's GitHub Profile"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-950 hover:border-slate-300 hover:bg-slate-50 transition shadow-2xs flex items-center gap-2 text-xs font-medium"
            >
              <Github className="w-4 h-4 text-slate-800" />
              <span>GitHub</span>
            </a>

            <a
              id="hero-social-linkedin"
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dharanraj A's LinkedIn Profile"
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/50 transition shadow-2xs flex items-center gap-2 text-xs font-medium"
            >
              <Linkedin className="w-4 h-4 text-blue-600" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Subtle Key Highlights Badges */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-left">
            <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Computer Science</p>
                <p className="text-[11px] text-slate-500">Core Foundations</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Generative AI</p>
                <p className="text-[11px] text-slate-500">Exploring Tools & Models</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Entrepreneurship</p>
                <p className="text-[11px] text-slate-500">Solving Real Problems</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
