import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const categories = ['Semua', 'Full-Stack', 'Enterprise', 'Frontend', 'Automation'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'Semua'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="projects" className="py-20 relative z-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
            [ PORTFOLIO PROYEK ]
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Karya & Aplikasi Berdampak Tinggi
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Eksplorasi sistem perbankan syariah, aplikasi otomatisasi, dan platform web modern.
          </p>
          <div className="w-12 h-1 bg-cyan-500 rounded-full mx-auto mt-3" />
        </div>

        {/* Filter Category Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="bg-slate-900 p-1 rounded-xl flex items-center gap-1 border border-slate-800">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-cyan-500 text-black font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{project.year}</span>
                </div>

                <span className="text-[11px] font-mono text-slate-400 block">{project.client}</span>
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                
                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Action Button */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-cyan-400 font-bold hover:underline"
                  >
                    Detail Proyek →
                  </button>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white"
                    >
                      [ GitHub ]
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Window */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
