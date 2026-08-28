import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left">

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-mono text-slate-300">
                Terbuka Untuk Kesempatan Kerja & Freelance
              </span>
            </div>

            {/* Name & Title */}
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                Halo, Saya
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {personalInfo.name}
              </h1>
              <div className="mt-2 text-xl sm:text-2xl font-bold text-cyan-400">
                {personalInfo.title}
              </div>
            </div>

            {/* Tagline */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              {personalInfo.tagline}
            </p>

            {/* Academic Info */}
            <div className="text-xs text-slate-300 bg-slate-900 px-4 py-2.5 rounded-xl border border-slate-800 w-fit font-mono">
              Status: {personalInfo.status} (Lulus {personalInfo.graduationDate})
            </div>

            {/* CTA Buttons (No Icons) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl text-xs font-bold bg-cyan-500 text-black hover:bg-cyan-400 transition-colors"
              >
                Hubungi Saya
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="CV_Heikel_Qushoyi_Yulian.pdf"
                className="px-6 py-3 rounded-xl text-xs font-bold bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
              >
                Download CV (PDF)
              </a>
            </div>

            {/* Social Links (Clean Text Buttons) */}
            <div className="flex items-center gap-3 pt-3">
              <span className="text-xs font-mono text-slate-500 uppercase">Kontak:</span>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700"
                >
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700"
                >
                  LinkedIn
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700"
                >
                  Email
                </a>
                <a
                  href={`https://wa.me/${personalInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-emerald-400 hover:border-slate-700"
                >
                  WhatsApp
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: User Pas Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-slate-800 bg-slate-900 shadow-xl">
              <img
                src="/Fhoto.jpeg"
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-black/80 backdrop-blur-sm border-t border-slate-800 text-center">
                <span className="text-xs font-bold text-white block">{personalInfo.name}</span>
                <span className="text-[10px] font-mono text-cyan-400">Ex-Intern BRK Syariah</span>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-900/90 p-4 rounded-xl border border-slate-800"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-baseline gap-1">
                <span>{stat.value}</span>
                <span className="text-cyan-400 text-base font-bold">{stat.suffix || ''}</span>
              </div>
              <div className="text-xs text-slate-400 mt-1 font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
