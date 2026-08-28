import React from 'react';
import { projects } from '../data/portfolioData';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Modal Window */}
      <div className="relative w-full max-w-3xl bg-[#0b0f19] border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 my-8">
        
        {/* Close Button (Text Based) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 px-3 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 hover:text-white"
        >
          Tutup [X]
        </button>

        {/* Modal Content */}
        <div className="space-y-5">
          
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-0.5 rounded bg-cyan-500 text-black font-bold">
              {project.category}
            </span>
            <span className="text-slate-400">Tahun: {project.year}</span>
            <span className="text-indigo-400 font-semibold">• {project.client}</span>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-cyan-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">
              Gambaran Umum Proyek:
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.details || project.description}
            </p>
          </div>

          {project.highlights && (
            <div className="pt-2 space-y-2">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">
                Fitur & Pencapaian Utama:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-slate-900 border border-slate-800">
                    • {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-2 space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">
              Tech Stack:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-slate-800 text-cyan-300 text-xs font-mono border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons (No Icons) */}
          <div className="flex items-center justify-between pt-5 border-t border-slate-800">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200 hover:text-cyan-400"
              >
                [ GitHub Repository ]
              </a>
            ) : <div />}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded bg-cyan-500 text-black text-xs font-bold"
            >
              Selesai
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
