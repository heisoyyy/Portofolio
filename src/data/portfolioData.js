export const personalInfo = {
  name: "Heikel Qushoyi Yulian",
  shortName: "Heikel",
  title: "Software Engineer | Full-Stack Developer",
  status: "Mahasiswa D4 Teknik Informatika — Politeknik Caltex Riau",
  graduationDate: "Oktober 2026",
  gpa: "3.41 / 4.00",
  tagline: "Membangun Solusi Digital Berperforma Tinggi, Scalable, dan Berpengalaman 1 Tahun di Industri Perbankan Syariah.",
  bio: "Saya adalah mahasiswa D4 Teknik Informatika Politeknik Caltex Riau dengan pengalaman magang 1 tahun di Bank Riau Kepri Syariah sebagai Full-Stack & Automation Developer, serta beberapa proyek pengabdian dan industri. Berfokus pada pengembangan web modern (Laravel, React.js, Node.js, Django, Python) dengan standar kualitas tinggi, keamanan, serta antarmuka yang responsif dan interaktif.",
  location: "Pekanbaru, Riau, Indonesia",
  email: "heikelqushoyi@gmail.com",
  phone: "+62 822-3781-4865",
  whatsapp: "6282237814865",
  github: "https://github.com/heisoyyy",
  linkedin: "https://linkedin.com/in/heikel-qushoyi-yulian",
  resumeUrl: "/cv-heikel.pdf",
  stats: [
    { label: "Tahun Pengalaman", value: 1, suffix: " Thn+" },
    { label: "Proyek Utama", value: 5, suffix: "+" },
    { label: "IPK Akademik", value: 3.41, decimal: 2 },
    { label: "Sertifikasi", value: 8, suffix: "" }
  ]
};

export const experiences = [
  {
    id: "brk-syariah",
    role: "Full-Stack & Automation Developer (Magang 1 Tahun)",
    company: "PT Bank Riau Kepri Syariah (Perseroda)",
    location: "Pekanbaru, Indonesia",
    period: "Januari 2025 – Januari 2026",
    type: "Magang Industri (1 Tahun)",
    description: "Mengembangkan berbagai aplikasi web internal perbankan, alat otomatisasi entri data, serta sistem manajemen rekonsiliasi transaksi untuk meningkatkan efisiensi operasional divisi IT & Keuangan.",
    achievements: [
      "Mengembangkan REKAN BRK (Sistem Rekonsiliasi & Monitoring Transaksi) untuk pencocokan data keuangan skala besar.",
      "Menciptakan SIPENA BRKS Autofill (Browser Extension Automation) yang memangkas waktu entri data harian hingga 70%.",
      "Berkontribusi dalam pengembangan BTMS (Bank Training Management System) untuk pengelolaan pelatihan pegawai internal.",
      "Mengintegrasikan RESTful API aman sesuai standar perbankan syariah."
    ],
    skills: ["Laravel", "React.js", "PostgreSQL", "JavaScript Automation", "REST API", "Tailwind CSS"]
  },
  {
    id: "qrion",
    role: "Frontend Developer",
    company: "Qrion",
    location: "Pekanbaru, Riau",
    period: "2025",
    type: "Proyek Profesional",
    description: "Merancang dan memuat antarmuka web interaktif berkinerja tinggi, mengutamakan pengalaman pengguna (UI/UX) yang intuitif serta komponen modular yang reusable.",
    achievements: [
      "Membangun arsitektur komponen React yang bersih, responsif, dan mudah di-maintain.",
      "Mengimplementasikan state management dan animasi antarmuka yang mulus.",
      "Bekerja sama dengan tim backend untuk integrasi API yang lancar."
    ],
    skills: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Vite", "Framer Motion"]
  },
  {
    id: "pkm-mahad",
    role: "Website Developer (PKM)",
    company: "Ma'had Abu Ad Darda'",
    location: "Pekanbaru, Riau",
    period: "2024",
    type: "Pengabdian Kepada Masyarakat",
    description: "Mengembangkan platform website resmi untuk Ma'had Abu Ad Darda' sebagai sarana profil lembaga, berita, dan pendaftaran santri baru.",
    achievements: [
      "Mendesain dan mempublikasikan website profil lembaga yang informatif dan responsif.",
      "Menyediakan sistem informasi pendaftaran santri yang memudahkan calon wali santri.",
      "Mendapat penghargaan sertifikat apresiasi atas kontribusi teknologi."
    ],
    skills: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript", "SEO Optimization"]
  }
];

export const projects = [
  {
    id: "btms",
    title: "BTMS (Bank Training Management System)",
    subtitle: "Sistem Manajemen Pelatihan Pegawai Perbankan",
    category: "Full-Stack",
    year: "2025",
    client: "Bank Riau Kepri Syariah",
    featured: true,
    description: "Platform enterprise untuk mengelola seluruh siklus pelatihan internal pegawai Bank Riau Kepri Syariah, mulai dari pembuatan jadwal, alokasi materi, hingga penerbitan sertifikat digital.",
    details: "BTMS dirancang untuk menyederhanakan proses pelatihan internal divisi HRD. Sistem ini dilengkapi dengan penjejakan kehadiran otomatis, evaluasi kuis, serta pembuatan laporan analitik performa pelatihan pegawai secara real-time.",
    techStack: ["Laravel", "React.js", "PostgreSQL", "Tailwind CSS", "REST API"],
    highlights: [
      "Manajemen modul & jadwal pelatihan terintegrasi",
      "Penerbitan sertifikat digital PDF dengan verifikasi barcode",
      "Dashboard analitik performa peserta dan pengajar"
    ],
    github: "https://github.com/heisoyyy",
    demo: null,
    imageBg: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
    accentColor: "#6366f1"
  },
  {
    id: "rekan-brk",
    title: "REKAN BRK",
    subtitle: "Sistem Rekonsiliasi & Monitoring Transaksi Syariah",
    category: "Enterprise",
    year: "2025",
    client: "Bank Riau Kepri Syariah",
    featured: true,
    description: "Sistem pengolahan data transaksi perbankan untuk otomatisasi pencocokan saldo (rekonsiliasi) dan deteksi selisih transaksi harian secara cepat.",
    details: "Aplikasi ini memproses ribuan data log transaksi per hari untuk mendeteksi mismatch antar sistem ledger. Dilengkapi dengan grafik visualisasi pergerakan transaksi dan laporan eksportir otomatis.",
    techStack: ["Node.js", "Express.js", "React.js", "PostgreSQL", "Chart.js"],
    highlights: [
      "Pencocokan otomatis ribuan baris transaksi per menit",
      "Alerting system untuk transaksi berpotensi selisih",
      "Ekspor laporan bulanan PDF & Excel terotomatisasi"
    ],
    github: "https://github.com/heisoyyy",
    demo: null,
    imageBg: "linear-gradient(135deg, #0284c7 0%, #0f172a 100%)",
    accentColor: "#38bdf8"
  },
  {
    id: "sipra",
    title: "SIPRA (Sistem Informasi PKL / Magang)",
    subtitle: "Platform Monitoring & Evaluasi Magang Academic",
    category: "Full-Stack",
    year: "2025",
    client: "Politeknik Caltex Riau",
    featured: true,
    description: "Sistem informasi terpadu untuk pengelolaan alur Praktik Kerja Lapangan (PKL) mahasiswa, pengajuan dosen pembimbing, hingga pengisian logbook harian.",
    details: "SIPRA memfasilitasi 3 role utama (Mahasiswa, Dosen Pembimbing, Supervisor Industri) dalam satu platform terintegrasi. Menghilangkan kerumitan berkas fisik dan mempercepat verifikasi magang.",
    techStack: ["Laravel", "MySQL", "Bootstrap 5", "JavaScript", "PDF Engine"],
    highlights: [
      "Workflow verifikasi berkas magang multi-level",
      "Formulir logbook harian interaktif & penilaian supervisor",
      "Autogenerate lembar pengesahan & sertifikat magang"
    ],
    github: "https://github.com/heisoyyy",
    demo: null,
    imageBg: "linear-gradient(135deg, #059669 0%, #064e3b 100%)",
    accentColor: "#34d399"
  },
  {
    id: "sipena-autofill",
    title: "SIPENA BRKS Autofill Tool",
    subtitle: "Browser Extension Automation untuk Efisiensi Bank",
    category: "Automation",
    year: "2025",
    client: "BRK Syariah Operations",
    featured: true,
    description: "Ekstensi peramban otomatisasi yang mempercepat pengisian formulir berulang di portal SIPENA BRKS dengan akurasi tinggi.",
    details: "Alat ini dikembangkan untuk mengurangi human error dan menghemat waktu staf operasional dalam melakukan pemrosesan formulir massal. Menggunakan teknik DOM manipulation & data parsing otomatis.",
    techStack: ["JavaScript (ES6+)", "Browser Extension API", "CSS3", "DOM Automation"],
    highlights: [
      "Memangkas waktu pengisian formulir hingga 70%",
      "Validasi format data otomatis sebelum dikirim",
      "Keamanan data terjamin tanpa mengirim data luar"
    ],
    github: "https://github.com/heisoyyy",
    demo: null,
    imageBg: "linear-gradient(135deg, #d97706 0%, #451a03 100%)",
    accentColor: "#fbbf24"
  },
  {
    id: "competition-web",
    title: "Competition Profile & Registration Web",
    subtitle: "Platform Pendaftaran & Profil Lomba Nasional",
    category: "Frontend",
    year: "2024",
    client: "Event Organizer",
    featured: false,
    description: "Website portal pendaftaran kompetisi tingkat nasional dengan antarmuka dinamis, jadwal acara interaktif, dan formulir pendaftaran multi-step.",
    details: "Dibuat dengan animasi antarmuka yang menarik untuk meningkatkan konversi calon peserta kompetisi. Dilengkapi fitur upload berkas persyaratan dan konfirmasi pembayaran.",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    highlights: [
      "Formulir pendaftaran multi-step dengan validasi real-time",
      "Tampilan UI/UX modern beranimasi smooth",
      "Desain 100% responsif mobile & desktop"
    ],
    github: "https://github.com/heisoyyy",
    demo: null,
    imageBg: "linear-gradient(135deg, #7c3aed 0%, #312e81 100%)",
    accentColor: "#a78bfa"
  }
];

export const skillCategories = [
  {
    name: "Languages & Core",
    icon: "Code2",
    skills: [
      { name: "JavaScript (ES6+)", level: 90, experience: "3 Thn" },
      { name: "TypeScript", level: 82, experience: "2 Thn" },
      { name: "Python", level: 85, experience: "3 Thn" },
      { name: "PHP", level: 88, experience: "3 Thn" },
      { name: "HTML5 / CSS3", level: 95, experience: "4 Thn" }
    ]
  },
  {
    name: "Frameworks & Libraries",
    icon: "Layers",
    skills: [
      { name: "React.js", level: 90, experience: "2.5 Thn" },
      { name: "Laravel", level: 88, experience: "2.5 Thn" },
      { name: "Node.js / Express", level: 82, experience: "2 Thn" },
      { name: "Django", level: 78, experience: "1.5 Thn" },
      { name: "Tailwind CSS", level: 92, experience: "3 Thn" },
      { name: "Framer Motion", level: 85, experience: "1.5 Thn" }
    ]
  },
  {
    name: "Database & Backend Tools",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: 85, experience: "2 Thn" },
      { name: "MySQL", level: 90, experience: "3 Thn" },
      { name: "MongoDB", level: 75, experience: "1 Thn" },
      { name: "RESTful APIs", level: 92, experience: "3 Thn" },
      { name: "Postman API Testing", level: 88, experience: "2 Thn" }
    ]
  },
  {
    name: "Cybersecurity & Specializations",
    icon: "ShieldCheck",
    skills: [
      { name: "Network Defense Essentials", level: 80, badge: "EC-Council" },
      { name: "Ethical Hacking Essentials", level: 78, badge: "EC-Council" },
      { name: "Cybersecurity Essentials", level: 82, badge: "EC-Council" },
      { name: "Browser Automation", level: 88, badge: "JS Extension" },
      { name: "3D Animation Basics", level: 70, badge: "Blender" }
    ]
  }
];

export const certifications = [
  {
    id: "lsp-programmer",
    title: "Sertifikasi Kompetensi LSP Programmer",
    issuer: "LSP / BNSP Republik Indonesia",
    year: "2025",
    category: "Software Development",
    credentialId: "LSP-PROG-2025-HQY",
    description: "Sertifikasi kompetensi nasional bidang Pemrograman Web & Rekayasa Perangkat Lunak.",
    badgeColor: "from-blue-500 to-cyan-500"
  },
  {
    id: "toeic",
    title: "TOEIC Official English Certificate",
    issuer: "ETS (Educational Testing Service)",
    year: "2025",
    category: "Language Proficiency",
    credentialId: "TOEIC-ETS-HQY",
    description: "Sertifikasi kemahiran Bahasa Inggris profesional untuk komunikasi bisnis dan dunia kerja internasional.",
    badgeColor: "from-indigo-500 to-purple-500"
  },
  {
    id: "brk-internship-cert",
    title: "Sertifikat Magang 1 Tahun BRK Syariah",
    issuer: "PT Bank Riau Kepri Syariah (Perseroda)",
    year: "2026",
    category: "Professional Experience",
    credentialId: "BRKS-MAGANG-2026",
    description: "Surat Keterangan & Sertifikat Apresiasi Magang 1 Tahun di Divisi Teknologi Informasi BRK Syariah.",
    badgeColor: "from-emerald-500 to-teal-500"
  },
  {
    id: "network-defense",
    title: "Network Defense Essentials (NDE)",
    issuer: "EC-Council",
    year: "2024",
    category: "Cybersecurity",
    credentialId: "ECC-NDE-884920",
    description: "Sertifikasi keahlian dasar pertahanan jaringan komputer, firewall, dan keamanan infrastruktur.",
    badgeColor: "from-rose-500 to-red-500"
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking Essentials (EHE)",
    issuer: "EC-Council",
    year: "2024",
    category: "Cybersecurity",
    credentialId: "ECC-EHE-993011",
    description: "Sertifikasi pemahaman prinsip etika peretasan, vulnerability assessment, dan penetrasi dasar.",
    badgeColor: "from-amber-500 to-orange-500"
  },
  {
    id: "cyber-essentials",
    title: "Cybersecurity Essentials (CE)",
    issuer: "EC-Council",
    year: "2024",
    category: "Cybersecurity",
    credentialId: "ECC-CE-112094",
    description: "Sertifikasi konsep utama keamanan siber, enkripsi data, dan manajemen risiko informasi.",
    badgeColor: "from-violet-500 to-purple-500"
  },
  {
    id: "mtcna",
    title: "MTCNA (MikroTik Certified Network Associate)",
    issuer: "MikroTik",
    year: "2024",
    category: "Networking",
    credentialId: "MTCNA-2024-PCR",
    description: "Sertifikasi internasional konfigurasi router MikroTik, routing, firewall, dan manajemen jaringan.",
    badgeColor: "from-cyan-500 to-blue-600"
  },
  {
    id: "pkm-mahad-cert",
    title: "Sertifikat Website Dev Ma'had Abu Ad Darda'",
    issuer: "Politeknik Caltex Riau & Ma'had Abu Ad Darda'",
    year: "2024",
    category: "Social Contribution",
    credentialId: "PKM-MAHAD-2024",
    description: "Sertifikat penghargaan atas kontribusi pembuatan dan pengelolaan sistem website Ma'had Abu Ad Darda'.",
    badgeColor: "from-teal-500 to-emerald-600"
  }
];

export const education = [
  {
    institution: "Politeknik Caltex Riau (PCR)",
    degree: "D4 Teknik Informatika (Bachelor of Applied Science in Informatics)",
    period: "2022 – Oktober 2026 (Estimasi Lulus)",
    gpa: "3.41 / 4.00",
    status: "Mahasiswa Tingkat Akhir",
    highlights: [
      "Fokus Studi: Full-Stack Web Architecture, Machine Learning, Database Engineering & Software Quality Assurance.",
      "IPK Kumulatif: 3.41 dari 4.00 (Predikat Sangat Memuaskan).",
      "Magang Industri 1 Tahun di Bank Riau Kepri Syariah."
    ]
  },
  {
    institution: "SMAN Plus Provinsi Riau",
    degree: "Sekolah Menengah Atas — Jurusan MIPA",
    period: "2019 – 2022",
    gpa: "Lulus dengan Nilai Sangat Baik",
    status: "Alumni",
    highlights: [
      "Fokus pada Ilmu Pengetahuan Alam dan Matematika Dasar.",
      "Aktif dalam kegiatan organisasi siswa dan sains teknologi."
    ]
  }
];
