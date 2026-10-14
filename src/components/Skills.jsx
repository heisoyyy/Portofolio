import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCat, setSelectedCat] = useState(0);

  return (
    <section id="skills" className="section-divider" style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
          <span className="section-label">[ KEAHLIAN TEKNIS ]</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#F0FDF4', letterSpacing: '-0.02em', marginTop: '0.5rem', marginBottom: 0 }}>
            Kemampuan{' '}
            <span className="text-gradient-lime">Full-Stack & Spesialisasi</span>
          </h2>
          <div className="accent-bar" />
        </div>

        {/* Category Tab Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }} className="skill-tabs">
          <style>{`@media (min-width: 768px) { .skill-tabs { grid-template-columns: repeat(4, 1fr) !important; } }`}</style>
          {skillCategories.map((cat, idx) => {
            const isSelected = selectedCat === idx;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCat(idx)}
                style={{
                  padding: '1rem', borderRadius: '0.875rem', textAlign: 'left',
                  cursor: 'pointer', transition: 'all 0.2s',
                  background: isSelected ? 'rgba(163,230,53,0.08)' : '#192720',
                  border: `1px solid ${isSelected ? '#A3E635' : '#2a4038'}`,
                  boxShadow: isSelected ? '0 0 16px rgba(163,230,53,0.15)' : 'none',
                }}
              >
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem',
                  fontWeight: 700, color: isSelected ? '#A3E635' : '#86efac',
                  marginBottom: '4px',
                }}>
                  {cat.name}
                </div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#4b6858' }}>
                  {cat.skills.length} Skills
                </div>
                {isSelected && (
                  <div style={{ marginTop: '8px', height: '2px', background: 'linear-gradient(90deg, #A3E635, #4ade80)', borderRadius: '1px' }} />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Panel */}
        <div className="card" style={{ padding: '2rem' }}>
          <h3 style={{
            fontFamily: 'JetBrains Mono, monospace', fontWeight: 800, fontSize: '0.9rem',
            color: '#A3E635', marginBottom: '1.5rem', paddingBottom: '0.75rem',
            borderBottom: '1px solid #2a4038',
          }}>
            {skillCategories[selectedCat].name}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.25rem 3rem' }} className="skills-inner-grid">
            <style>{`@media (min-width: 768px) { .skills-inner-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
            {skillCategories[selectedCat].skills.map((skill) => (
              <div key={skill.name} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 700, color: '#F0FDF4', fontSize: '0.875rem' }}>
                    {skill.name}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {skill.badge && (
                      <span style={{
                        padding: '2px 8px', borderRadius: '4px',
                        background: 'rgba(163,230,53,0.1)', color: '#A3E635',
                        border: '1px solid rgba(163,230,53,0.2)',
                        fontSize: '0.6rem', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600,
                      }}>
                        {skill.badge}
                      </span>
                    )}
                    {skill.experience && (
                      <span style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', color: '#4ade80' }}>
                        {skill.experience}
                      </span>
                    )}
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', fontWeight: 700, color: '#A3E635' }}>
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%`, transition: 'width 0.6s ease' }}
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
