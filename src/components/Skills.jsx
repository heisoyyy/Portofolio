import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCat, setSelectedCat] = useState(0);

  return (
    <section id="skills" className="py-20 relative z-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
            [ KEAHLIAN TEKNIS ]
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Kemampuan Full-Stack & Spesialisasi
          </h2>
          <div className="w-12 h-1 bg-cyan-500 rounded-full mx-auto mt-3" />
        </div>

        {/* Skill Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {skillCategories.map((cat, idx) => {
            const isSelected = selectedCat === idx;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCat(idx)}
                className={`p-4 rounded-xl border text-left font-mono transition-colors ${
                  isSelected
                    ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400 font-bold'
                    : 'border-slate-800 bg-slate-900/90 text-slate-400 hover:text-white'
                }`}
              >
                <div className="text-xs">{cat.name}</div>
                <div className="text-[10px] text-slate-500 mt-1">{cat.skills.length} Skills</div>
              </button>
            );
          })}
        </div>

        {/* Display Active Skills List */}
        <div className="bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800">
          <h3 className="text-base font-mono font-bold text-white mb-6 pb-3 border-b border-slate-800">
            {skillCategories[selectedCat].name}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {skillCategories[selectedCat].skills.map((skill) => (
              <div key={skill.name} className="space-y-1.5 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-200 text-sm">
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-2">
                    {skill.badge && (
                      <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px]">
                        {skill.badge}
                      </span>
                    )}
                    {skill.experience && (
                      <span className="text-slate-400 text-[10px]">{skill.experience}</span>
                    )}
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                </div>

                {/* Lightweight CSS Level Meter */}
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
