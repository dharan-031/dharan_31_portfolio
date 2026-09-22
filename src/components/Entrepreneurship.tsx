import React from 'react';
import { Lightbulb, Rocket, Target, Zap, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Entrepreneurship: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-8 sm:p-12 shadow-xl overflow-hidden">
          {/* Subtle geometric overlay accents */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Visual Icon Badge */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-amber-300 shadow-inner group">
                <Rocket className="w-10 h-10 sm:w-12 sm:h-12 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold">
                <Lightbulb className="w-3.5 h-3.5 text-amber-300" />
                <span>Vision & Ambition</span>
              </div>

              <h2
                id="entrepreneurship-heading"
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white"
              >
                Building Towards Entrepreneurship
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                {PERSONAL_INFO.entrepreneurshipStatement}
              </p>

              {/* Three Pill Pillars */}
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-xs text-indigo-200">
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-indigo-400" /> Problem Identification
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-indigo-400" /> Technical Execution
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <Rocket className="w-3.5 h-3.5 text-indigo-400" /> Long-Term Value
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
