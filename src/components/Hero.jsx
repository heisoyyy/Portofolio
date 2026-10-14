import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', paddingTop: '7rem', paddingBottom: '4rem', display: 'flex', alignItems: 'center', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', width: '100%' }}>

        {/* Main 2-col Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="hero-grid">
          <style>{`
            @media (min-width: 1024px) { .hero-grid { grid-template-columns: 7fr 5fr !important; } }
            @media (max-width: 640px) { .hero-name { font-size: 2.4rem !important; } }
          `}</style>

          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>

            {/* Status Pill */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px', borderRadius: '9999px',
              background: 'rgba(163,230,53,0.08)', border: '1px solid rgba(163,230,53,0.25)',
              width: 'fit-content',
            }}>
              <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#A3E635', flexShrink: 0 }} />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: '#A3E635', fontWeight: 600 }}>
                Terbuka Untuk Kesempatan Kerja & Freelance
              </span>
            </div>

            {/* Name & Title */}
            <div>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#A3E635', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                Halo, Saya
              </span>
              <h1 className="hero-name" style={{ fontSize: '3.75rem', fontWeight: 800, color: '#F0FDF4', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
                {personalInfo.name}
              </h1>
              <div style={{
                marginTop: '0.6rem', fontSize: '1.1rem', fontWeight: 700,
                background: 'linear-gradient(135deg, #A3E635 0%, #4ade80 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                {personalInfo.title}
              </div>
            </div>

            {/* Tagline */}
            <p style={{ color: '#86efac', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: '580px', margin: 0 }}>
              {personalInfo.tagline}
            </p>

            {/* Academic Info Chip */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '10px 16px', borderRadius: '0.75rem',
              background: '#192720', border: '1px solid #2a4038',
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem',
              color: '#a7f3d0', width: 'fit-content',
            }}>
              {personalInfo.status} &nbsp;·&nbsp; IPK {personalInfo.gpa}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
              <a
                href="#contact"
                className="btn-accent"
                style={{ padding: '12px 28px', borderRadius: '0.75rem', fontSize: '0.82rem', textDecoration: 'none', display: 'inline-block' }}
              >
                Hubungi Saya →
              </a>
              <a
                href={personalInfo.resumeUrl}
                download="CV_Heikel_Qushoyi_Yulian.pdf"
                className="btn-ghost"
                style={{ padding: '12px 24px', borderRadius: '0.75rem', fontSize: '0.82rem', textDecoration: 'none', display: 'inline-block' }}
              >
                Download CV (PDF)
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#4b6858', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Connect:</span>
              {[
                { label: 'GitHub', href: personalInfo.github, color: '#a7f3d0' },
                { label: 'LinkedIn', href: personalInfo.linkedin, color: '#a7f3d0' },
                { label: `mailto:${personalInfo.email}`, href: `mailto:${personalInfo.email}`, label: 'Email', color: '#a7f3d0' },
                { label: 'WhatsApp', href: `https://wa.me/${personalInfo.whatsapp}`, color: '#A3E635' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    padding: '5px 12px', borderRadius: '0.4rem',
                    background: '#192720', border: '1px solid #2a4038',
                    color: s.color, fontSize: '0.72rem',
                    fontFamily: 'JetBrains Mono, monospace', textDecoration: 'none',
                    fontWeight: 600, transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#A3E635'; e.currentTarget.style.boxShadow = '0 0 10px rgba(163,230,53,0.15)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a4038'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column — Photo */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'relative',
              width: '280px', height: '360px',
              borderRadius: '1.25rem', overflow: 'hidden',
              border: '2px solid #2a4038',
              boxShadow: '0 0 40px rgba(163,230,53,0.12), 0 20px 60px rgba(0,0,0,0.5)',
            }}>
              {/* Corner accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'linear-gradient(90deg, #A3E635, #4ade80)', zIndex: 1 }} />
              <img
                src="/Fhoto.jpeg"
                alt={personalInfo.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '12px 16px',
                background: 'linear-gradient(0deg, rgba(11,20,17,0.97) 0%, transparent 100%)',
                textAlign: 'center',
              }}>
                <span style={{ fontWeight: 800, color: '#F0FDF4', fontSize: '0.875rem', display: 'block' }}>{personalInfo.name}</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#A3E635' }}>Ex-Intern Bank Riau Kepri Syariah</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="stats-grid">
          <style>{`@media (min-width: 768px) { .stats-grid { grid-template-columns: repeat(4, 1fr) !important; } }`}</style>
          {personalInfo.stats.map((stat) => (
            <div
              key={stat.label}
              className="card"
              style={{ padding: '1.25rem 1.5rem', textAlign: 'left', borderRadius: '0.875rem' }}
            >
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#F0FDF4', lineHeight: 1, display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span>{stat.value}</span>
                <span style={{ color: '#A3E635', fontSize: '1rem', fontWeight: 700 }}>{stat.suffix || ''}</span>
              </div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#4ade80', marginTop: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {stat.label}
              </div>
              <div style={{ marginTop: '8px', height: '2px', background: 'linear-gradient(90deg, #A3E635, transparent)', borderRadius: '1px' }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
