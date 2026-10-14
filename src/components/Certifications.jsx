import React, { useState } from 'react';
import { certifications, education } from '../data/portfolioData';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="section-divider" style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
          <span className="section-label">[ SERTIFIKASI & PENDIDIKAN ]</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#F0FDF4', letterSpacing: '-0.02em', marginTop: '0.5rem', marginBottom: 0 }}>
            Kredensial Resmi &{' '}
            <span className="text-gradient-lime">Latar Belakang Akademik</span>
          </h2>
          <div className="accent-bar" />
        </div>

        {/* Education */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h3 style={{
            fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '0.8rem',
            color: '#A3E635', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em',
          }}>
            Riwayat Pendidikan
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1rem' }} className="edu-grid">
            <style>{`@media (min-width: 768px) { .edu-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="card"
                style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden' }}
              >
                {/* Top accent bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #A3E635, #4ade80)' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '0.5rem' }}>
                  <span className="tag" style={{ fontSize: '0.62rem' }}>{edu.status}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#4b6858' }}>{edu.period}</span>
                </div>

                <h4 style={{ fontWeight: 800, fontSize: '1.05rem', color: '#F0FDF4', margin: '0 0 4px' }}>
                  {edu.institution}
                </h4>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#4ade80', margin: '0 0 8px' }}>
                  {edu.degree}
                </p>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#A3E635', fontWeight: 700, margin: '0 0 1rem' }}>
                  IPK: {edu.gpa}
                </p>

                <div style={{ borderTop: '1px solid #2a4038', paddingTop: '0.875rem', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', gap: '8px', fontSize: '0.78rem', color: '#86efac' }}>
                      <span style={{ color: '#A3E635', flexShrink: 0 }}>•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 style={{
            fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '0.8rem',
            color: '#A3E635', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em',
          }}>
            Sertifikasi Kompetensi ({certifications.length} Sertifikasi)
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1rem' }} className="cert-grid">
            <style>{`
              @media (min-width: 640px) { .cert-grid { grid-template-columns: repeat(2, 1fr) !important; } }
              @media (min-width: 1024px) { .cert-grid { grid-template-columns: repeat(3, 1fr) !important; } }
            `}</style>
            {certifications.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="card"
                style={{ padding: '1.4rem', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
              >
                {/* Left accent bar */}
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: 'linear-gradient(180deg, #A3E635, #4ade80)' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#A3E635', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {cert.category}
                  </span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#4b6858' }}>
                    {cert.year}
                  </span>
                </div>

                <h4 style={{ fontWeight: 700, fontSize: '0.875rem', color: '#F0FDF4', margin: '0 0 4px', lineHeight: 1.35 }}>
                  {cert.title}
                </h4>
                <p style={{ fontSize: '0.75rem', color: '#4ade80', margin: '0 0 0.875rem' }}>
                  {cert.issuer}
                </p>

                <div style={{ paddingTop: '0.75rem', borderTop: '1px solid #2a4038', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#4b6858', maxWidth: '130px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    ID: {cert.credentialId}
                  </span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#A3E635', fontWeight: 700 }}>
                    Detail →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedCert && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <div
              onClick={() => setSelectedCert(null)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
            />
            <div style={{
              position: 'relative', zIndex: 1, width: '100%', maxWidth: '500px',
              background: '#0B1411', border: '1px solid #2a4038',
              borderRadius: '1.25rem', padding: '2rem',
              boxShadow: '0 0 60px rgba(163,230,53,0.1)',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #A3E635, #4ade80)', borderRadius: '1.25rem 1.25rem 0 0' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <span className="section-label">{selectedCert.category} • {selectedCert.year}</span>
                  <h3 style={{ fontWeight: 800, fontSize: '1.1rem', color: '#F0FDF4', marginTop: '6px', marginBottom: '4px' }}>
                    {selectedCert.title}
                  </h3>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#4ade80' }}>
                    Penerbit: {selectedCert.issuer}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  style={{
                    padding: '6px 12px', borderRadius: '0.5rem',
                    background: '#192720', border: '1px solid #2a4038',
                    color: '#86efac', fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.7rem', cursor: 'pointer',
                  }}
                >
                  ✕
                </button>
              </div>

              <p style={{
                fontSize: '0.82rem', color: '#86efac', lineHeight: 1.7,
                padding: '1rem', borderRadius: '0.75rem',
                background: '#192720', border: '1px solid #2a4038', marginBottom: '1rem',
              }}>
                {selectedCert.description}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace' }}>
                <span style={{ color: '#4b6858' }}>Credential ID:</span>
                <span style={{ color: '#A3E635', fontWeight: 700 }}>{selectedCert.credentialId}</span>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="btn-accent"
                style={{ width: '100%', padding: '10px', borderRadius: '0.75rem', fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace', cursor: 'pointer', border: 'none' }}
              >
                Selesai
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
