import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      position: 'relative', zIndex: 10,
      borderTop: '1px solid #2a4038',
      background: 'rgba(7,14,11,0.98)',
      padding: '2.5rem 0 2rem',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }} className="footer-inner">
          <style>{`@media (min-width: 768px) { .footer-inner { flex-direction: row !important; justify-content: space-between !important; } }`}</style>

          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }} className="footer-brand">
            <style>{`@media (min-width: 768px) { .footer-brand { align-items: flex-start !important; } }`}</style>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%', overflow: 'hidden',
                border: '2px solid #A3E635',
                boxShadow: '0 0 10px rgba(163,230,53,0.25)',
              }}>
                <img src="/Profile.jpeg" alt="Heikel" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              </div>
              <span style={{ fontWeight: 800, color: '#F0FDF4', fontSize: '0.9rem' }}>
                {personalInfo.name}
              </span>
            </div>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#4b6858', margin: 0, textAlign: 'center' }}>
              Junior Application Developer | Web & Data — PCR 2026
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { label: 'GitHub', href: personalInfo.github, external: true },
              { label: 'LinkedIn', href: personalInfo.linkedin, external: true },
              { label: 'Email', href: `mailto:${personalInfo.email}`, external: false },
            ].map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  padding: '6px 14px', borderRadius: '0.5rem',
                  background: '#192720', border: '1px solid #2a4038',
                  color: '#86efac', fontSize: '0.72rem',
                  fontFamily: 'JetBrains Mono, monospace', textDecoration: 'none',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#A3E635'; e.currentTarget.style.color = '#A3E635'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a4038'; e.currentTarget.style.color = '#86efac'; }}
              >
                {label}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="btn-accent"
              style={{
                padding: '6px 14px', borderRadius: '0.5rem',
                fontSize: '0.72rem', fontFamily: 'JetBrains Mono, monospace',
                cursor: 'pointer', border: 'none',
              }}
              title="Kembali ke Atas"
            >
              ▲ Ke Atas
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div style={{
          marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #1a2b22',
          display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center',
          fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#374a3d',
          textAlign: 'center',
        }}>
          <span>© {new Date().getFullYear()} Heikel Qushoyi Yulian. All rights reserved.</span>
          <span style={{ color: '#A3E635', opacity: 0.6 }}>Built with React + Vite · Forest Green Theme</span>
        </div>
      </div>
    </footer>
  );
}
