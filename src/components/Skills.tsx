import React from 'react';
import { Globe, Cpu, Code2, Sparkles, Check, ArrowRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Code2':
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          {/* Explicit Honest Label */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100/70 text-emerald-800 border border-emerald-200 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            <span>Currently Learning & Improving</span>
          </div>

          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Skills & Technologies
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-xl mx-auto">
            As a first-year student, my current focus is building solid fundamentals in web development,
            programming logic, and modern AI tools.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 3 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-md hover:border-indigo-200 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {getIcon(category.categoryIcon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{category.title}</h3>
                    <span className="text-[11px] text-slate-400 font-medium">Core Learning Area</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 hover:bg-indigo-50/40 hover:border-indigo-100 transition-colors"
                    >
                      <div className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-semibold text-slate-800 block">
                          {skill.name}
                        </span>
                        <span className="text-[11px] text-slate-500 block">
                          {skill.levelDescription}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status footer for each card */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-slate-600 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                  Foundation Track
                </span>
                <span className="text-indigo-600 font-semibold">Active Practice</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
