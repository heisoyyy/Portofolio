import React from 'react';
import { personalInfo } from '../data/portfolioData';

const specializations = [
  {
    title: 'Full-Stack Web Development',
    desc: 'Menguasai arsitektur React.js, Node.js, Laravel, dan Django dengan standar kode bersih, modular, dan teruji.'
  },
  {
    title: 'Banking & Process Automation',
    desc: 'Pengalaman 1 tahun di industri perbankan syariah merancang alat otomatisasi logbook & pengolahan rekonsiliasi data.'
  },
  {
    title: 'Machine Learning & Analytics',
    desc: 'Pemahaman dasar model Machine Learning Python (Scikit-Learn) untuk klasifikasi dan analisis data terstruktur.'
  },
  {
    title: 'Cybersecurity Essentials',
    desc: 'Memiliki 3 sertifikasi EC-Council (Network Defense, Ethical Hacking, Cybersecurity Essentials) & MikroTik MTCNA.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
            [ TENTANG SAYA ]
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Kombinasi Pengalaman Industri Perbankan & Akademik Teruji
          </h2>
          <div className="w-12 h-1 bg-cyan-500 rounded-full mx-auto mt-3" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-6 bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white">Ringkasan Profil</h3>
                <p className="text-xs text-slate-400 font-mono">Politeknik Caltex Riau — Angkatan 2026</p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {personalInfo.bio}
              </p>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                <div>• <strong>Magang 1 Tahun:</strong> Full-Stack & Automation Developer di Bank Riau Kepri Syariah</div>
                <div>• <strong>Status Akademik:</strong> Mahasiswa Tingkat Akhir D4 Teknik Informatika (IPK 3.41)</div>
                <div>• <strong>Fokus Utama:</strong> Enterprise Web Apps, Process Automation, & Database Engineering</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300">Pekanbaru, Indonesia</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300">Bahasa Indonesia (Native)</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300">TOEIC Certified (English)</span>
            </div>
          </div>

          {/* Specialization Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specializations.map((spec) => (
              <div
                key={spec.title}
                className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-cyan-500/50 transition-colors"
              >
                <div>
                  <h4 className="text-sm font-bold text-cyan-400 mb-2">{spec.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{spec.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
