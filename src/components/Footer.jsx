import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800 bg-[#070a12] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full overflow-hidden border border-cyan-400 bg-slate-800 flex-shrink-0">
                <img
                  src="/Profile.jpeg"
                  alt="Heikel Qushoyi Yulian"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="font-bold text-white text-sm">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Software Engineer | Full-Stack & Automation Developer — Politeknik Caltex Riau 2026
            </p>
          </div>

          {/* Social Links & Back to Top (Text Buttons) */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-2.5 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400"
            >
              Email
            </a>

            {/* Back To Top Button */}
            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded bg-cyan-500 text-black font-bold hover:bg-cyan-400"
              title="Kembali ke Atas"
            >
              ▲ Ke Atas
            </button>
          </div>

        </div>

        <div className="mt-6 pt-4 border-t border-slate-900 text-center text-xs font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Heikel Qushoyi Yulian. All rights reserved.</span>
          <span>Lightweight Clean Web Architecture</span>
        </div>
      </div>
    </footer>
  );
}
