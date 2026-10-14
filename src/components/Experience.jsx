import React, { useState } from 'react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const [openExp, setOpenExp] = useState(null);

  return (
    <section id="experience" className="section-divider" style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
          <span className="section-label">[ PENGALAMAN KERJA ]</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#F0FDF4', letterSpacing: '-0.02em', marginTop: '0.5rem', marginBottom: 0 }}>
            Jejak Karir &{' '}
            <span className="text-gradient-lime">Pengalaman Industri</span>
          </h2>
          <div className="accent-bar" />
        </div>

        {/* Company Banner */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
          marginBottom: '2.5rem', padding: '1rem 1.5rem', borderRadius: '0.875rem',
          background: 'rgba(163,230,53,0.06)', border: '1px solid rgba(163,230,53,0.2)',
        }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#A3E635', boxShadow: '0 0 8px #A3E635', flexShrink: 0 }} />
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#A3E635', margin: 0, textAlign: 'center' }}>
          2 Periode Magang — <strong>PT Bank Riau Kepri Syariah</strong> | Sep 2025 – Jul 2026 (10 Bulan Total)
          </p>
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute', left: '1.1rem', top: '1.5rem', bottom: '1.5rem',
            width: '2px', background: 'linear-gradient(to bottom, #A3E635, rgba(163,230,53,0.1))',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {experiences.map((exp, idx) => {
              const isOpen = openExp === exp.id;
              return (
                <div key={exp.id} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  {/* Timeline Dot */}
                  <div style={{ paddingTop: '1.35rem', flexShrink: 0, position: 'relative', zIndex: 1 }}>
                    <div className="timeline-dot" />
                  </div>

                  {/* Card */}
                  <div className="card" style={{ flex: 1, padding: '1.5rem' }}>
                    {/* Header Row */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <div>
                        <span className="tag" style={{ marginBottom: '6px', display: 'inline-block' }}>{exp.type}</span>
                        <h3 style={{ fontWeight: 800, fontSize: '1.05rem', color: '#F0FDF4', margin: 0, lineHeight: 1.3 }}>
                          {exp.role}
                        </h3>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#4ade80', marginTop: '4px' }}>
                          {exp.company} — {exp.location}
                        </div>
                      </div>
                      <span style={{
                        fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem',
                        color: '#86efac', background: '#192720', border: '1px solid #2a4038',
                        padding: '4px 10px', borderRadius: '0.4rem', whiteSpace: 'nowrap', flexShrink: 0,
                      }}>
                        {exp.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: '0.82rem', color: '#a7f3d0', lineHeight: 1.7, marginBottom: '1rem' }}>
                      {exp.description}
                    </p>

                    {/* Toggle Achievements */}
                    <button
                      onClick={() => setOpenExp(isOpen ? null : exp.id)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '6px',
                        background: 'none', border: 'none', cursor: 'pointer',
                        fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem',
                        color: '#A3E635', fontWeight: 700, padding: 0, marginBottom: isOpen ? '1rem' : '1rem',
                      }}
                    >
                      {isOpen ? '▼ Sembunyikan Detail' : '▶ Lihat Pencapaian'}
                    </button>

                    {/* Achievements List */}
                    {isOpen && (
                      <div style={{ borderTop: '1px solid #2a4038', paddingTop: '1rem', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {exp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} style={{ display: 'flex', gap: '10px', fontSize: '0.8rem', color: '#86efac', lineHeight: 1.65 }}>
                            <span style={{ color: '#A3E635', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>→</span>
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '0.75rem', borderTop: '1px solid #2a4038' }}>
                      {exp.skills.map((skill) => (
                        <span key={skill} className="tag-dark">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
