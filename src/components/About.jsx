import React from 'react';
import { personalInfo } from '../data/portfolioData';

const specializations = [
  {
    icon: '⚡',
    title: 'Full-Stack Web Development',
    desc: 'React.js, Node.js/Express, Laravel, Spring Boot — membangun aplikasi enterprise berskala besar dengan arsitektur bersih dan modular.'
  },
  {
    icon: '🏦',
    title: 'Banking & Data Engineering',
    desc: 'ETL pipeline yang memproses ~1 juta transaksi ATM dalam ~2 menit, dashboard KPI interaktif, dan laporan otomatis untuk perbankan syariah.'
  },
  {
    icon: '🤖',
    title: 'Machine Learning & Analytics',
    desc: 'XGBoost (R² 0.9173), fine-tuning IndoBART (ROUGE-1 0.5757), dan visualisasi data ECharts/Chart.js untuk keputusan berbasis data.'
  },
  {
    icon: '🔒',
    title: 'Security & Certification',
    desc: 'BNSP Programmer, TOEIC 530, MTCNA MikroTik, EC-Council EHE/NDE/CE, Cisco Cybersecurity Essentials.'
  }
];

export default function About() {
  return (
    <section id="about" className="section-divider" style={{ padding: '5rem 0', position: 'relative' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
          <span className="section-label">[ TENTANG SAYA ]</span>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#F0FDF4', letterSpacing: '-0.02em', marginTop: '0.5rem', marginBottom: 0 }}>
            Kombinasi Pengalaman Industri &<br />
            <span className="text-gradient-lime">Akademik Teruji</span>
          </h2>
          <div className="accent-bar" />
        </div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', alignItems: 'start' }} className="about-grid">
          <style>{`@media (min-width: 1024px) { .about-grid { grid-template-columns: 5fr 7fr !important; } }`}</style>

          {/* Bio Card */}
          <div className="card" style={{ padding: '2rem', height: '100%' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <h3 style={{ fontWeight: 800, fontSize: '1.1rem', color: '#F0FDF4', margin: 0 }}>Ringkasan Profil</h3>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem', color: '#4ade80', marginTop: '4px' }}>
                Politeknik Caltex Riau — Angkatan 2022
              </p>
            </div>

            <p style={{ color: '#86efac', fontSize: '0.875rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              {personalInfo.bio}
            </p>

            <div style={{ borderTop: '1px solid #2a4038', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Magang', value: 'Full-Stack & Data ML — Bank Riau Kepri Syariah (10 Bulan)' },
                { label: 'Akademik', value: 'Mahasiswa Tingkat Akhir D4 Teknik Informatika (IPK 3.41/4.00)' },
                { label: 'Fokus', value: 'Enterprise Web, ETL Pipeline, ML Integration, Automation' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', gap: '8px', fontSize: '0.8rem' }}>
                  <span style={{ color: '#A3E635', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, minWidth: '72px', flexShrink: 0 }}>{label}:</span>
                  <span style={{ color: '#d1fae5' }}>{value}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #2a4038', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Pekanbaru, Indonesia', 'Bahasa Indonesia (Native)', 'TOEIC Score 530 (English)'].map(tag => (
                <span key={tag} className="tag-dark">{tag}</span>
              ))}
            </div>
          </div>

          {/* Specialization Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {specializations.map((spec) => (
              <div
                key={spec.title}
                className="card"
                style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', gap: '10px' }}
              >
                <div style={{ fontSize: '1.5rem' }}>{spec.icon}</div>
                <h4 style={{ fontWeight: 700, fontSize: '0.875rem', color: '#A3E635', margin: 0, lineHeight: 1.3 }}>
                  {spec.title}
                </h4>
                <p style={{ fontSize: '0.78rem', color: '#86efac', lineHeight: 1.65, margin: 0 }}>
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
