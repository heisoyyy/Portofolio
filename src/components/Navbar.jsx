import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Profil', href: '#about' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Sertifikasi', href: '#certifications' },
  { label: 'Kontak', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.25s ease',
        padding: scrolled ? '10px 0' : '20px 0',
        background: scrolled ? 'rgba(11, 20, 17, 0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid #2a4038' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Brand */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            width: 38, height: 38, borderRadius: '50%', overflow: 'hidden',
            border: '2px solid #A3E635',
            boxShadow: '0 0 12px rgba(163,230,53,0.3)',
            flexShrink: 0,
            transition: 'transform 0.2s',
          }}>
            <img src="/Profile.jpeg" alt="Heikel" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: 800, fontSize: '0.875rem', color: '#F0FDF4', letterSpacing: '-0.01em' }}>
              Heikel Q. Yulian
            </span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#A3E635', letterSpacing: '0.12em' }}>
              Jr. App Developer
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="md-nav">
          <style>{`
            @media (min-width: 768px) { .md-nav { display: flex !important; align-items: center; gap: 4px; background: rgba(25, 39, 32, 0.8); padding: 6px; border-radius: 9999px; border: 1px solid #2a4038; } }
            @media (max-width: 767px) { .md-hide { display: none !important; } .md-show { display: flex !important; } }
            @media (min-width: 768px) { .md-show { display: none !important; } }
          `}</style>
          {navItems.map((item) => {
            const target = item.href.substring(1);
            const isActive = activeSection === target;
            return (
              <a
                key={item.href}
                href={item.href}
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: isActive ? 700 : 500,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  background: isActive ? '#A3E635' : 'transparent',
                  color: isActive ? '#0B1411' : '#86efac',
                }}
                onMouseEnter={e => { if (!isActive) { e.target.style.color = '#F0FDF4'; e.target.style.background = 'rgba(163,230,53,0.1)'; }}}
                onMouseLeave={e => { if (!isActive) { e.target.style.color = '#86efac'; e.target.style.background = 'transparent'; }}}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="md-hide" style={{ display: 'none' }}>
          <a
            href="#contact"
            className="btn-accent"
            style={{ padding: '8px 20px', borderRadius: '0.6rem', fontSize: '0.75rem', textDecoration: 'none', display: 'inline-block' }}
          >
            Hubungi Saya
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md-show"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none', alignItems: 'center', gap: 6,
            padding: '6px 14px', borderRadius: '0.5rem',
            background: '#192720', border: '1px solid #2a4038',
            color: '#A3E635', fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.7rem', fontWeight: 700, cursor: 'pointer',
          }}
        >
          {mobileMenuOpen ? '✕ Tutup' : '☰ Menu'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#0B1411', borderTop: '1px solid #2a4038',
          padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'block', padding: '10px 14px', borderRadius: '0.5rem',
                fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none',
                color: '#86efac', transition: 'all 0.15s',
              }}
              onMouseEnter={e => { e.target.style.background = '#192720'; e.target.style.color = '#A3E635'; }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#86efac'; }}
            >
              {item.label}
            </a>
          ))}
          <div style={{ paddingTop: '0.75rem', borderTop: '1px solid #2a4038', marginTop: '0.5rem' }}>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-accent"
              style={{ display: 'block', textAlign: 'center', padding: '10px', borderRadius: '0.5rem', fontSize: '0.8rem', textDecoration: 'none' }}
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
