import React from 'react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative z-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
            [ PENGALAMAN KERJA ]
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Jejak Pengalaman Magang & Proyek Industri
          </h2>
          <div className="w-12 h-1 bg-cyan-500 rounded-full mx-auto mt-3" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold">
                  {exp.type}
                </span>
                <span className="text-xs text-slate-400 font-mono">{exp.period}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{exp.role}</h3>
              <div className="text-xs font-mono text-indigo-400 mb-3">
                {exp.company} — {exp.location}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Bullet Achievements */}
              <div className="space-y-1.5 mb-4 pt-3 border-t border-slate-800 text-xs text-slate-300">
                {exp.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
