import React from 'react';
import { ArrowDown, GraduationCap, Code2, Sparkles, Rocket, Compass } from 'lucide-react';
import { TIMELINE } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  const getPhaseIcon = (phase: string) => {
    switch (phase) {
      case 'Currently':
        return <GraduationCap className="w-5 h-5 text-indigo-600" />;
      case 'Building':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'Exploring':
        return <Sparkles className="w-5 h-5 text-emerald-600" />;
      case 'Future Goal':
      default:
        return <Rocket className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Growth Roadmap
          </span>
          <h2
            id="journey-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3"
          >
            My Learning Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-xl mx-auto">
            A step-by-step roadmap reflecting where I stand today, what I am actively mastering, and my vision for the future.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-100 space-y-10 my-4 ml-4 sm:ml-8">
          {TIMELINE.map((item, index) => {
            const isLast = index === TIMELINE.length - 1;
            return (
              <div key={item.phase} className="relative group">
                {/* Node Dot / Icon */}
                <div
                  className={`absolute -left-[37px] sm:-left-[45px] top-1.5 w-10 h-10 rounded-full border-4 border-slate-50 flex items-center justify-center shadow-xs transition-transform group-hover:scale-110 ${
                    item.highlight
                      ? 'bg-indigo-600 text-white ring-4 ring-indigo-100'
                      : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  {getPhaseIcon(item.phase)}
                </div>

                {/* Card Content */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs hover:shadow-md hover:border-indigo-200 transition-all duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                        item.highlight
                          ? 'bg-indigo-100 text-indigo-700'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {item.phase}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">Stage 0{index + 1}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                    {item.label}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Downward indicator between items (except last) */}
                {!isLast && (
                  <div className="hidden sm:flex items-center justify-center -mb-6 mt-4 text-indigo-400">
                    <ArrowDown className="w-4 h-4 opacity-50" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
