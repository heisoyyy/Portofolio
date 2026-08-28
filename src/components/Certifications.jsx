import React, { useState } from 'react';
import { certifications, education } from '../data/portfolioData';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-20 relative z-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
            [ SERTIFIKASI & PENDIDIKAN ]
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Kredensial Resmi & Latar Belakang Akademik
          </h2>
          <div className="w-12 h-1 bg-cyan-500 rounded-full mx-auto mt-3" />
        </div>

        {/* Education Cards */}
        <div className="mb-14">
          <h3 className="text-base font-mono font-bold text-white mb-4">
            Riwayat Pendidikan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2 font-mono text-xs">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-bold">
                      {edu.status}
                    </span>
                    <span className="text-slate-400">{edu.period}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                  <p className="text-xs font-mono text-indigo-400 mt-0.5">{edu.degree}</p>
                  <p className="text-xs text-emerald-400 font-mono mt-1 font-bold">IPK: {edu.gpa}</p>

                  <div className="mt-3 pt-3 border-t border-slate-800 space-y-1 text-xs text-slate-300">
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx}>• {h}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <h3 className="text-base font-mono font-bold text-white mb-4">
            Sertifikasi Kompetensi & Keahlian (8 Certifications)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-colors cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-2 font-mono text-[10px]">
                    <span className="text-cyan-400 uppercase font-bold">{cert.category}</span>
                    <span className="text-slate-400">{cert.year}</span>
                  </div>

                  <h4 className="text-xs font-bold text-white leading-snug">
                    {cert.title}
                  </h4>

                  <p className="text-[11px] text-slate-400 mt-1">
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-slate-500 truncate max-w-[120px]">
                    ID: {cert.credentialId}
                  </span>
                  <span className="text-cyan-400 font-bold">
                    Verifikasi →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Window */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <div className="relative w-full max-w-lg bg-[#0b0f19] border border-slate-700 rounded-2xl p-6 shadow-2xl z-10 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase font-bold">
                    {selectedCert.category} • {selectedCert.year}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs font-mono text-indigo-400">
                    Penerbit: {selectedCert.issuer}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300"
                >
                  [X]
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed p-3 rounded bg-slate-900 border border-slate-800">
                {selectedCert.description}
              </p>

              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Credential ID:</span>
                <span className="text-cyan-400 font-bold">{selectedCert.credentialId}</span>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-1.5 rounded bg-cyan-500 text-black text-xs font-bold"
                >
                  Selesai
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
