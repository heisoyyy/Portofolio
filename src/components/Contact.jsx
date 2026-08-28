import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative z-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
            [ HUBUNGI SAYA ]
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Mari Berdiskusi & Bekerja Sama
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Punya penawaran kerja, peluang proyek freelance, atau sekadar ingin menyapa? Silakan kirimkan pesan!
          </p>
          <div className="w-12 h-1 bg-cyan-500 rounded-full mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white font-mono">Informasi Kontak Direct</h3>
              
              <div className="text-xs font-mono">
                <span className="text-slate-400 block mb-0.5">Email Resmi:</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-bold text-cyan-400 hover:underline"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="text-xs font-mono">
                <span className="text-slate-400 block mb-0.5">WhatsApp / Telepon:</span>
                <a
                  href={`https://wa.me/${personalInfo.whatsapp}?text=Halo%20Heikel,%20saya%20tertarik%20berdiskusi.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-emerald-400 hover:underline"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div className="text-xs font-mono">
                <span className="text-slate-400 block mb-0.5">Lokasi Domisili:</span>
                <span className="text-sm font-bold text-white">
                  {personalInfo.location}
                </span>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <a
                  href={`https://wa.me/${personalInfo.whatsapp}?text=Halo%20Heikel,%20saya%20melihat%20portofolio%20website%20Anda.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs text-center transition-colors"
                >
                  [ Kirim Pesan via WhatsApp ]
                </a>
              </div>
            </div>

            {/* Social Grid Text Buttons */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-center text-slate-300 hover:text-cyan-400 hover:border-slate-700"
              >
                [ GitHub Profile ]
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-center text-slate-300 hover:text-cyan-400 hover:border-slate-700"
              >
                [ LinkedIn Profile ]
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800">
            {submitted ? (
              <div className="text-center py-10 space-y-3 font-mono">
                <div className="text-emerald-400 font-bold text-lg">[ SUCCESS ]</div>
                <h3 className="text-xl font-bold text-white">Pesan Berhasil Terkirim!</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Terima kasih telah menghubungi Heikel. Pesan Anda telah diterima dan akan dibalas secepatnya.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono font-bold text-slate-300 mb-1 block">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold text-slate-300 mb-1 block">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@perusahaan.com"
                      className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 mb-1 block">
                    Subjek Pesan
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Contoh: Tawaran Project Freelance / Rekrutmen"
                    className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-300 mb-1 block">
                    Pesan Anda *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan rincian pesan atau tawaran Anda..."
                    className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg text-xs font-mono font-bold bg-cyan-500 text-black hover:bg-cyan-400 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Mengirim Pesan...' : 'Kirim Pesan Sekarang'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
