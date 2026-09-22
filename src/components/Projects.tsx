import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Play, ArrowUpRight, QrCode, Calculator, CheckSquare, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { InteractiveDemos } from './InteractiveDemos';

export const Projects: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'qr-scanner' | 'grade-calculator' | 'voting-checker' | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'qr-scanner':
        return <QrCode className="w-5 h-5 text-indigo-600" />;
      case 'grade-calculator':
        return <Calculator className="w-5 h-5 text-emerald-600" />;
      case 'voting-checker':
      default:
        return <CheckSquare className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Hands-on Practice
          </span>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3"
          >
            Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-xl mx-auto">
            Practical projects built to reinforce fundamental web development and programming logic concepts.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-2xs hover:shadow-lg hover:border-indigo-200 transition-all duration-200 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                {/* Header Tag & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                    {project.technology}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform">
                    {getProjectIcon(project.id)}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.name}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                {/* GitHub Button pointing to Dharanraj A's GitHub */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub profile`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-100 hover:border-slate-300 text-xs font-semibold shadow-2xs transition"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>

                {/* Interactive Demo simulation trigger */}
                {project.interactiveDemoId && (
                  <button
                    onClick={() => setActiveDemo(project.interactiveDemoId!)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-2xs transition cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Try Demo</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Repository Notice */}
        <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
              <Sparkles className="w-4 h-4" />
            </span>
            <p className="text-xs text-slate-600">
              More coursework projects and experiments are committed on GitHub as I advance through my B.Tech studies.
            </p>
          </div>
          <a
            href="https://github.com/dharan-031"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 whitespace-nowrap"
          >
            <span>Visit @dharan-031</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Interactive Modal when "Try Demo" is clicked */}
      {activeDemo && (
        <InteractiveDemos
          demoId={activeDemo}
          onClose={() => setActiveDemo(null)}
        />
      )}
    </section>
  );
};
