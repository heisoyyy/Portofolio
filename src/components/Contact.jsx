import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

const contactCards = [
  { label: 'Email Resmi', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#A3E635' },
  { label: 'WhatsApp / Telepon', value: personalInfo.phone, href: `https://wa.me/${personalInfo.whatsapp}?text=Halo%20Heikel`, color: '#4ade80', target: '_blank' },
  { label: 'Lokasi', value: personalInfo.location, href: null, color: '#a7f3d0' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({ particleCount: 80, spread: 65, origin: { y: 0.6 }, colors: ['#A3E635', '#4ade80', '#86efac'] });
      setTimeout(() => { setFormData({ name: '', email: '', subject: '', message: '' }); setSubmitted(false); }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="section-divider" style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
          <span className="section-label">[ HUBUNGI SAYA ]</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#F0FDF4', letterSpacing: '-0.02em', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
            Mari Berdiskusi &{' '}
            <span className="text-gradient-lime">Bekerja Sama</span>
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#4ade80', margin: 0 }}>
            Terbuka untuk peluang kerja, proyek freelance, atau sekadar ingin menyapa!
          </p>
          <div className="accent-bar" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', alignItems: 'start' }} className="contact-grid">
          <style>{`@media (min-width: 1024px) { .contact-grid { grid-template-columns: 5fr 7fr !important; } }`}</style>

          {/* Left: Direct Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontWeight: 800, fontSize: '1rem', color: '#F0FDF4', marginBottom: '1.25rem' }}>
                Informasi Kontak Direct
              </h3>

              {contactCards.map(({ label, value, href, color, target }) => (
                <div key={label} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #2a4038' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#4b6858', display: 'block', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {label}
                  </span>
                  {href ? (
                    <a href={href} target={target} rel="noopener noreferrer" style={{ fontWeight: 700, fontSize: '0.875rem', color: color, textDecoration: 'none' }}>
                      {value}
                    </a>
                  ) : (
                    <span style={{ fontWeight: 700, fontSize: '0.875rem', color: color }}>{value}</span>
                  )}
                </div>
              ))}

              <a
                href={`https://wa.me/${personalInfo.whatsapp}?text=Halo%20Heikel,%20saya%20melihat%20portofolio%20Anda.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
                style={{ display: 'block', textAlign: 'center', padding: '12px', borderRadius: '0.75rem', fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace', textDecoration: 'none', marginTop: '0.5rem' }}
              >
                💬 Kirim Pesan via WhatsApp
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
              {[
                { label: '[ GitHub ]', href: personalInfo.github },
                { label: '[ LinkedIn ]', href: personalInfo.linkedin },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{
                    display: 'block', textAlign: 'center', padding: '12px',
                    borderRadius: '0.75rem', fontSize: '0.75rem',
                    fontFamily: 'JetBrains Mono, monospace', textDecoration: 'none',
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="card" style={{ padding: '2rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ fontSize: '3rem' }}>🎉</div>
                <div className="text-gradient-lime" style={{ fontWeight: 800, fontSize: '1.25rem' }}>Pesan Terkirim!</div>
                <p style={{ fontSize: '0.82rem', color: '#86efac', maxWidth: '360px', lineHeight: 1.7 }}>
                  Terima kasih telah menghubungi Heikel. Pesan Anda telah diterima dan akan dibalas secepatnya.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1rem' }} className="form-row">
                  <style>{`@media (min-width: 640px) { .form-row { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
                  {['name', 'email'].map((field) => (
                    <div key={field}>
                      <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', fontWeight: 700, color: '#86efac', display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        {field === 'name' ? 'Nama Lengkap *' : 'Alamat Email *'}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        required
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={field === 'name' ? 'Masukkan nama Anda' : 'nama@perusahaan.com'}
                        className="input-green"
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '0.625rem', fontSize: '0.82rem', boxSizing: 'border-box' }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', fontWeight: 700, color: '#86efac', display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Subjek Pesan
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Tawaran Project Freelance / Rekrutmen"
                    className="input-green"
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '0.625rem', fontSize: '0.82rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', fontWeight: 700, color: '#86efac', display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Pesan Anda *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan rincian pesan atau tawaran Anda..."
                    className="input-green"
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '0.625rem', fontSize: '0.82rem', resize: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-accent"
                  style={{
                    width: '100%', padding: '13px', borderRadius: '0.75rem',
                    fontSize: '0.82rem', fontFamily: 'JetBrains Mono, monospace',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.65 : 1, border: 'none',
                  }}
                >
                  {isSubmitting ? '⏳ Mengirim Pesan...' : '✉️ Kirim Pesan Sekarang'}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
