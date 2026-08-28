import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

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
  const { theme, toggleTheme } = useTheme();
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'py-3 bg-[#0b0f19]/95 border-b border-slate-800 shadow-md'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Circular User Profile Avatar */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-cyan-400 bg-slate-800 flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
              <img
                src="/Profile.jpeg"
                alt="Heikel Qushoyi Yulian"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Heikel Q. Yulian
              </span>
              <span className="text-[10px] text-cyan-400 font-mono tracking-wider">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800">
            {navItems.map((item) => {
              const target = item.href.substring(1);
              const isActive = activeSection === target;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                    isActive
                      ? 'bg-cyan-500 text-black font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons & Theme Switcher */}
          <div className="hidden md:flex items-center gap-3">
            

            <a
              href="#contact"
              className="px-4 py-1.5 rounded-lg text-xs font-bold bg-cyan-500 text-black hover:bg-cyan-400 transition-colors"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-cyan-400"
            >
              {mobileMenuOpen ? 'Tutup [X]' : 'Menu [=]'}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b0f19] border-b border-slate-800 mt-2 px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium rounded text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2 rounded text-xs font-bold bg-cyan-500 text-black"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
