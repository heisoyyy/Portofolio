import React from 'react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', overflowY: 'auto' }}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(8px)' }}
      />

      {/* Modal */}
      <div style={{
        position: 'relative', zIndex: 1, width: '100%', maxWidth: '760px',
        background: '#0B1411', border: '1px solid #2a4038',
        borderRadius: '1.25rem', padding: '2rem',
        boxShadow: '0 0 80px rgba(163,230,53,0.12)',
        margin: '2rem 0',
      }}>
        {/* Top accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #A3E635, #4ade80)', borderRadius: '1.25rem 1.25rem 0 0' }} />

        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            padding: '6px 12px', borderRadius: '0.5rem',
            background: '#192720', border: '1px solid #2a4038',
            color: '#86efac', fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.72rem', cursor: 'pointer',
          }}
        >
          ✕ Tutup
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Category + Year + Client */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', paddingTop: '0.5rem' }}>
            <span className="tag">{project.category}</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#4b6858' }}>
              Tahun: {project.year}
            </span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#4ade80', fontWeight: 600 }}>
              • {project.client}
            </span>
          </div>

          {/* Title */}
          <div>
            <h3 style={{ fontWeight: 800, fontSize: '1.5rem', color: '#F0FDF4', margin: 0, lineHeight: 1.25 }}>
              {project.title}
            </h3>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#A3E635', marginTop: '6px' }}>
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <div style={{ paddingTop: '1rem', borderTop: '1px solid #2a4038' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#4b6858', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '8px' }}>
              Gambaran Umum Proyek
            </span>
            <p style={{ fontSize: '0.875rem', color: '#86efac', lineHeight: 1.75 }}>
              {project.details || project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && (
            <div>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#4b6858', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '8px' }}>
                Fitur & Pencapaian Utama
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '8px' }} className="modal-highlights">
                <style>{`@media (min-width: 640px) { .modal-highlights { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '10px 14px', borderRadius: '0.625rem',
                      background: '#192720', border: '1px solid #2a4038',
                      display: 'flex', gap: '8px', fontSize: '0.8rem', color: '#a7f3d0',
                    }}
                  >
                    <span style={{ color: '#A3E635', flexShrink: 0, fontWeight: 700 }}>→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#4b6858', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '8px' }}>
              Tech Stack
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.techStack.map((tech) => (
                <span key={tech} className="tag-dark" style={{ padding: '4px 10px', fontSize: '0.72rem' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid #2a4038' }}>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ padding: '9px 18px', borderRadius: '0.625rem', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', textDecoration: 'none', display: 'inline-block' }}
              >
                [ GitHub Repository ]
              </a>
            ) : <div />}

            <button
              onClick={onClose}
              className="btn-accent"
              style={{ padding: '9px 24px', borderRadius: '0.625rem', fontSize: '0.78rem', fontFamily: 'JetBrains Mono, monospace', cursor: 'pointer', border: 'none' }}
            >
              Selesai
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
