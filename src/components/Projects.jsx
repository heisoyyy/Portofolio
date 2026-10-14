import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const categories = ['Semua', 'Full-Stack', 'Data & ML', 'Mobile'];

const categoryColors = {
  'Full-Stack': { bg: 'rgba(163,230,53,0.1)', color: '#A3E635', border: 'rgba(163,230,53,0.25)' },
  'Data & ML': { bg: 'rgba(74,222,128,0.1)', color: '#4ade80', border: 'rgba(74,222,128,0.25)' },
  'Mobile': { bg: 'rgba(167,243,208,0.1)', color: '#a7f3d0', border: 'rgba(167,243,208,0.2)' },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'Semua'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="projects" className="section-divider" style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
          <span className="section-label">[ PORTFOLIO PROYEK ]</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#F0FDF4', letterSpacing: '-0.02em', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
            Karya & Aplikasi{' '}
            <span className="text-gradient-lime">Berdampak Tinggi</span>
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#4ade80', margin: 0 }}>
            Sistem perbankan, ML pipeline, dan platform web modern dari pengalaman industri nyata.
          </p>
          <div className="accent-bar" />
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            background: '#192720', padding: '5px', borderRadius: '9999px',
            border: '1px solid #2a4038',
          }}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '7px 18px', borderRadius: '9999px',
                    fontSize: '0.75rem', fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer', border: 'none', transition: 'all 0.2s',
                    background: isActive ? '#A3E635' : 'transparent',
                    color: isActive ? '#0B1411' : '#86efac',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { if (!isActive) { e.target.style.color = '#F0FDF4'; }}}
                  onMouseLeave={e => { if (!isActive) { e.target.style.color = '#86efac'; }}}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.25rem' }} className="projects-grid">
          <style>{`
            @media (min-width: 640px) { .projects-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (min-width: 1024px) { .projects-grid { grid-template-columns: repeat(3, 1fr) !important; } }
          `}</style>

          {filteredProjects.map((project) => {
            const catStyle = categoryColors[project.category] || { bg: 'rgba(163,230,53,0.1)', color: '#A3E635', border: 'rgba(163,230,53,0.25)' };
            return (
              <div
                key={project.id}
                className="card"
                style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'default' }}
              >
                <div>
                  {/* Top Row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{
                      padding: '3px 10px', borderRadius: '9999px',
                      background: catStyle.bg, color: catStyle.color,
                      border: `1px solid ${catStyle.border}`,
                      fontSize: '0.68rem', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700,
                    }}>
                      {project.category}
                    </span>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#4b6858' }}>
                      {project.year}
                    </span>
                  </div>

                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#4ade80', display: 'block', marginBottom: '4px' }}>
                    {project.client}
                  </span>
                  <h3 style={{ fontWeight: 800, fontSize: '1rem', color: '#F0FDF4', margin: '0 0 0.5rem', lineHeight: 1.3 }}>
                    {project.title}
                  </h3>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#4ade80', margin: '0 0 0.75rem' }}>
                    {project.subtitle}
                  </p>
                  <p style={{ fontSize: '0.78rem', color: '#86efac', lineHeight: 1.65, marginBottom: '1rem' }}>
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '1rem' }}>
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span key={tech} className="tag-dark">{tech}</span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="tag-dark">+{project.techStack.length - 5}</span>
                    )}
                  </div>

                  {/* Footer */}
                  <div style={{ paddingTop: '0.875rem', borderTop: '1px solid #2a4038', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <button
                      onClick={() => setSelectedProject(project)}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        color: '#A3E635', fontSize: '0.75rem',
                        fontFamily: 'JetBrains Mono, monospace', fontWeight: 700,
                        padding: 0, textDecoration: 'none',
                        transition: 'color 0.15s',
                      }}
                      onMouseEnter={e => e.target.style.color = '#bef264'}
                      onMouseLeave={e => e.target.style.color = '#A3E635'}
                    >
                      Detail Proyek →
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem',
                          color: '#4b6858', textDecoration: 'none', transition: 'color 0.15s',
                        }}
                        onMouseEnter={e => e.target.style.color = '#86efac'}
                        onMouseLeave={e => e.target.style.color = '#4b6858'}
                      >
                        [ GitHub ]
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  );
}
