export const personalInfo = {
  name: "Heikel Qushoyi Yulian",
  shortName: "Heikel",
  title: "Junior Application Developer | Web & Data",
  status: "Mahasiswa D4 Teknik Informatika — Politeknik Caltex Riau",
  graduationDate: "2026",
  gpa: "3.41 / 4.00",
  tagline: "Membangun Solusi Digital Berperforma Tinggi — 10 Bulan Pengalaman Software Engineering di Industri Perbankan Syariah.",
  bio: "Lulusan Teknik Informatika dengan 10 bulan pengalaman software engineering internship di bidang perbankan (Bank Riau Kepri Syariah). Berpengalaman membangun aplikasi web internal dengan JavaScript, React, Node.js/Express, dan MySQL — dari penerjemahan kebutuhan pengguna hingga UAT dan dokumentasi teknis. Membangun ETL pipeline yang memproses ~1 juta transaksi ATM dalam ~2 menit.",
  location: "Pekanbaru, Indonesia",
  email: "heikelqushoyi@gmail.com",
  phone: "+62 822-3781-4865",
  whatsapp: "6282237814865",
  github: "https://github.com/heisoyyy",
  linkedin: "https://www.linkedin.com/in/heikel-qushoyi-13436739a/",
  resumeUrl: "/cv-heikel.pdf",
  stats: [
    { label: "Bulan Pengalaman", value: 10, suffix: " Bln" },
    { label: "Proyek Utama", value: 6, suffix: "+" },
    { label: "IPK Akademik", value: 3.41, decimal: 2 },
    { label: "Sertifikasi", value: 5, suffix: "" }
  ]
};

export const experiences = [
  {
    id: "brks-fullstack-data",
    role: "Software Engineering Intern — Full-Stack, Data & ML",
    company: "Bank Riau Kepri Syariah",
    location: "Pekanbaru, Indonesia",
    period: "Mar 2026 – Jul 2026",
    type: "Magang Industri",
    description: "Mengembangkan sistem monitoring transaksi bank dengan ETL pipeline otomatis, dashboard KPI interaktif, dan laporan Excel/PDF untuk pengguna internal bank; diamankan dengan JWT dan RBAC menggunakan React, Node.js/Express, dan MySQL.",
    achievements: [
      "Membangun Bank Transaction Monitoring System dengan ETL pipeline otomatis memproses ~1 juta transaksi ATM dalam ~2 menit, dashboard KPI interaktif, serta laporan Excel/PDF dengan JWT auth dan RBAC.",
      "Mengembangkan dashboard prediksi & analisis kas ATM untuk 379 ATM di 4 kota, mengintegrasikan model XGBoost melalui FastAPI; mencapai MAE 7.17 jam dan R² 0.9173 untuk perencanaan cash-replenishment.",
      "Membangun aplikasi web internal (ATM First Line Maintenance dan SOP Knowledge Base) berdasarkan kebutuhan dari Divisi Operasional & Akuntansi, dengan manajemen insiden, pelacakan tugas, analitik, dan visualisasi decision-tree ReactFlow.",
      "Mengotomatisasi monitoring ATM dan alur entri data klaim menggunakan Python, Selenium, dan FastAPI. Sistem mengakses REKAN ATM secara otomatis, mengunduh data monitoring, memfilter data per wilayah, dan mendistribusikan hasilnya ke grup WhatsApp terkait.",
      "Mempresentasikan demo sistem, mendukung UAT, deployment, dan troubleshooting solusi yang digunakan divisi bank internal."
    ],
    skills: ["React", "Node.js", "Express", "MySQL", "Python", "XGBoost", "FastAPI", "Selenium", "JWT", "ReactFlow", "ECharts", "Chart.js"]
  },
  {
    id: "brks-fullstack-doc",
    role: "Software Engineering Intern — Full-Stack & Documentation",
    company: "Bank Riau Kepri Syariah",
    location: "Pekanbaru, Indonesia",
    period: "Sep 2025 – Jan 2026",
    type: "Magang Industri",
    description: "Membangun IT Project Timeline Monitoring System dan mengimplementasikan berbagai fitur enterprise untuk divisi Teknologi Sistem Informasi.",
    achievements: [
      "Membangun IT Project Timeline Monitoring System (React, Java 17, Spring Boot 3, MySQL) untuk melacak timeline proyek, PIC, status dokumen, dan progress untuk divisi Teknologi Sistem Informasi.",
      "Mengimplementasikan role-based access control, audit trail, impor/ekspor Excel/CSV, pelaporan, dan visualisasi data untuk meningkatkan akuntabilitas proyek.",
      "Menyusun 4 Functional Specification Documents (FSD) untuk sistem pembayaran internal: QRIS CPM, transaksi NFC, dan QRIS pada terminal EDC.",
      "Melakukan pengujian bug pra-rilis pada aplikasi internal dan melaporkan defect ke tim IT untuk resolusi."
    ],
    skills: ["React", "Java 17", "Spring Boot 3", "MySQL", "RBAC", "Audit Trail", "FSD Writing", "UAT Testing"]
  }
];

export const projects = [
  {
    id: "bank-txn-monitoring",
    title: "Bank Transaction Monitoring System",
    subtitle: "ETL Pipeline, KPI Dashboard & Laporan Otomatis",
    category: "Full-Stack",
    year: "2026",
    client: "Bank Riau Kepri Syariah",
    featured: true,
    description: "Sistem monitoring transaksi bank dengan ETL pipeline otomatis yang memproses ~1 juta transaksi ATM dalam ~2 menit, dilengkapi dashboard KPI interaktif serta laporan Excel/PDF untuk pengguna internal; diamankan JWT dan RBAC.",
    details: "Dibangun menggunakan React, Node.js/Express, dan MySQL. Sistem ini menangani pemrosesan data skala besar secara real-time, menampilkan visualisasi pergerakan transaksi harian, dan menghasilkan laporan bulanan secara otomatis. Fitur keamanan mencakup JWT authentication dan role-based access control.",
    techStack: ["React", "Node.js", "Express", "MySQL", "JWT", "ECharts", "Chart.js", "Excel/PDF Engine"],
    highlights: [
      "ETL pipeline memproses ~1 juta transaksi ATM dalam ~2 menit",
      "Dashboard KPI interaktif dengan visualisasi real-time",
      "Laporan Excel/PDF terotomatisasi untuk divisi internal bank",
      "JWT Auth + Role-Based Access Control (RBAC)"
    ],
    github: "https://github.com/heisoyyy",
    demo: null,
    imageBg: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
    accentColor: "#6366f1"
  },
  {
    id: "atm-cash-prediction",
    title: "ATM Cash Prediction & Analysis Dashboard",
    subtitle: "ML-powered Cash-Replenishment Planning — 379 ATM",
    category: "Data & ML",
    year: "2026",
    client: "Bank Riau Kepri Syariah",
    featured: true,
    description: "Dashboard prediksi & analisis kas ATM untuk 379 ATM di 4 kota, mengintegrasikan model XGBoost melalui FastAPI. Model mencapai MAE 7.17 jam dan R² 0.9173 untuk perencanaan cash-replenishment.",
    details: "Mengintegrasikan model machine learning XGBoost yang di-serve melalui FastAPI ke dalam dashboard React interaktif. Model dilatih untuk memprediksi waktu kehabisan kas ATM, memungkinkan tim operasional melakukan perencanaan refill lebih efisien dan mengurangi downtime ATM.",
    techStack: ["Python", "XGBoost", "FastAPI", "React", "MySQL", "Pandas", "Chart.js"],
    highlights: [
      "Prediksi kas 379 ATM di 4 kota secara akurat",
      "MAE 7.17 jam & R² 0.9173 — performa tinggi",
      "Model XGBoost di-serve via FastAPI",
      "Mengurangi downtime ATM secara signifikan"
    ],
    github: "https://github.com/heisoyyy",
    demo: null,
    imageBg: "linear-gradient(135deg, #0284c7 0%, #0f172a 100%)",
    accentColor: "#38bdf8"
  },
  {
    id: "it-project-timeline",
    title: "IT Project Timeline Monitoring System",
    subtitle: "Sistem Monitoring Proyek — Divisi TI Bank",
    category: "Full-Stack",
    year: "2025",
    client: "Bank Riau Kepri Syariah",
    featured: true,
    description: "Sistem untuk melacak timeline proyek IT, PIC, status dokumen, dan progres untuk divisi Teknologi Sistem Informasi. Dilengkapi RBAC, audit trail, dan impor/ekspor Excel/CSV.",
    details: "Dibangun dengan React, Java 17, Spring Boot 3, dan MySQL. Sistem ini menggantikan pengelolaan manual proyek dengan platform terpusat yang memudahkan koordinasi antar divisi, visualisasi timeline Gantt, dan pelaporan kemajuan proyek secara transparan.",
    techStack: ["React", "Java 17", "Spring Boot 3", "MySQL", "RBAC", "Excel/CSV"],
    highlights: [
      "Tracking timeline proyek, PIC, dan status dokumen",
      "Role-based access control & audit trail",
      "Import/export Excel/CSV dan visualisasi data",
      "Digunakan aktif oleh divisi Teknologi Sistem Informasi"
    ],
    github: "https://github.com/heisoyyy",
    demo: null,
    imageBg: "linear-gradient(135deg, #059669 0%, #064e3b 100%)",
    accentColor: "#34d399"
  },
  {
    id: "competition-management",
    title: "Competition Management Website",
    subtitle: "Platform Pendaftaran Lomba LKBB KOMANDO",
    category: "Full-Stack",
    year: "2025",
    client: "SMAN Plus Provinsi Riau",
    featured: true,
    description: "Platform web untuk kompetisi LKBB KOMANDO di SMAN Plus Provinsi Riau, mencakup pendaftaran, informasi kompetisi, 3 role pengguna, upload dokumen PDF/Word, serta notifikasi Email dan Telegram otomatis.",
    details: "Dibangun menggunakan Laravel, MySQL, dan Bootstrap sebagai Proyek Akhir. Dikembangkan dengan metodologi Prototyping dan divalidasi melalui pengujian black-box dan usability, serta didokumentasikan dalam laporan akhir 5 bab.",
    techStack: ["Laravel", "MySQL", "Bootstrap", "Email Notification", "Telegram Bot API"],
    highlights: [
      "3 role pengguna: Admin, Peserta, Juri",
      "Upload dokumen PDF/Word & notifikasi Email + Telegram otomatis",
      "Pengujian black-box dan usability testing",
      "Didokumentasikan dalam laporan akhir 5 bab"
    ],
    github: "https://github.com/heisoyyy",
    demo: null,
    imageBg: "linear-gradient(135deg, #7c3aed 0%, #312e81 100%)",
    accentColor: "#a78bfa"
  },
  {
    id: "indobart-summarization",
    title: "Indonesian Review Text Summarization",
    subtitle: "Fine-tuned IndoBART — 5.000 Ulasan",
    category: "Data & ML",
    year: "2025",
    client: "Akademik / Riset",
    featured: false,
    description: "Fine-tuning IndoBART untuk summarisasi abstraktif pada 5.000 ulasan bahasa Indonesia. Mencapai ROUGE-1 0.5757 sebagai metrik evaluasi utama.",
    details: "Proyek NLP menggunakan Hugging Face Transformers untuk fine-tuning model IndoBART pada dataset ulasan produk berbahasa Indonesia. Proses meliputi preprocessing data, tokenisasi, fine-tuning, dan evaluasi menggunakan metrik ROUGE (Recall-Oriented Understudy for Gisting Evaluation).",
    techStack: ["Python", "IndoBART", "Hugging Face Transformers", "ROUGE Evaluation", "Pandas"],
    highlights: [
      "ROUGE-1 0.5757 pada 5.000 ulasan bahasa Indonesia",
      "Fine-tuning IndoBART untuk summarisasi abstraktif",
      "Evaluasi komprehensif dengan metrik ROUGE",
      "Dataset ulasan produk berbahasa Indonesia"
    ],
    github: "https://github.com/heisoyyy",
    demo: null,
    imageBg: "linear-gradient(135deg, #d97706 0%, #451a03 100%)",
    accentColor: "#fbbf24"
  },
  {
    id: "water-monitor",
    title: "WaterMonitor",
    subtitle: "Aplikasi Android — Pelaporan Kualitas Air",
    category: "Mobile",
    year: "2024",
    client: "Akademik",
    featured: false,
    description: "Merancang dan memprototipi aplikasi Android untuk pelaporan dan monitoring kualitas air. Dikembangkan menggunakan Kotlin dan Figma untuk desain antarmuka.",
    details: "Aplikasi mobile berbasis Kotlin yang memungkinkan pengguna melaporkan kondisi kualitas air di sekitar mereka secara real-time. Proses desain menggunakan Figma sebagai alat prototyping untuk menghasilkan antarmuka yang intuitif sebelum implementasi.",
    techStack: ["Kotlin", "Android", "Figma"],
    highlights: [
      "Pelaporan kualitas air berbasis lokasi",
      "Prototype UI/UX dengan Figma",
      "Native Android dengan Kotlin",
      "Fitur monitoring real-time"
    ],
    github: "https://github.com/heisoyyy",
    demo: null,
    imageBg: "linear-gradient(135deg, #0369a1 0%, #0c4a6e 100%)",
    accentColor: "#7dd3fc"
  }
];

export const skillCategories = [
  {
    name: "Web Frontend",
    icon: "Code2",
    skills: [
      { name: "JavaScript", level: 90, experience: "3 Thn" },
      { name: "React.js", level: 88, experience: "2 Thn" },
      { name: "HTML5 / CSS3", level: 92, experience: "4 Thn" },
      { name: "Tailwind CSS", level: 90, experience: "2 Thn" },
      { name: "Bootstrap", level: 85, experience: "2 Thn" },
      { name: "Ant Design / ReactFlow", level: 78, experience: "1 Thn" },
      { name: "Vite", level: 80, experience: "1 Thn" }
    ]
  },
  {
    name: "Web Backend",
    icon: "Layers",
    skills: [
      { name: "Node.js / Express", level: 85, experience: "2 Thn" },
      { name: "REST API & JWT Auth", level: 88, experience: "2 Thn" },
      { name: "Spring Boot (Java)", level: 75, experience: "1 Thn" },
      { name: "JPA / Hibernate", level: 72, experience: "1 Thn" },
      { name: "Laravel (PHP)", level: 82, experience: "2 Thn" },
      { name: "FastAPI", level: 80, experience: "1 Thn" },
      { name: "Django", level: 75, experience: "1 Thn" }
    ]
  },
  {
    name: "Data & Automation",
    icon: "Database",
    skills: [
      { name: "Python", level: 88, experience: "3 Thn" },
      { name: "SQL / MySQL", level: 90, experience: "3 Thn" },
      { name: "Pandas", level: 85, experience: "2 Thn" },
      { name: "OpenPyXL / ETL Pipelines", level: 82, experience: "1 Thn" },
      { name: "Selenium", level: 80, experience: "1 Thn" },
      { name: "ECharts / Chart.js", level: 78, experience: "1 Thn" }
    ]
  },
  {
    name: "ML & Specializations",
    icon: "ShieldCheck",
    skills: [
      { name: "XGBoost", level: 80, badge: "ML" },
      { name: "Hugging Face Transformers", level: 75, badge: "NLP" },
      { name: "IndoBART / ROUGE Eval", level: 72, badge: "NLP" },
      { name: "Kotlin / Android", level: 70, badge: "Mobile" },
      { name: "Figma", level: 78, badge: "Design" },
      { name: "Git & GitHub", level: 88, badge: "DevOps" }
    ]
  }
];

export const certifications = [
  {
    id: "bnsp-programmer",
    title: "BNSP Programmer Certification",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2026",
    category: "Software Development",
    credentialId: "BNSP-PROG-2026-HQY",
    description: "Sertifikasi kompetensi nasional bidang Pemrograman dari Badan Nasional Sertifikasi Profesi Republik Indonesia.",
    badgeColor: "from-blue-500 to-cyan-500"
  },
  {
    id: "toeic",
    title: "TOEIC — Score 530",
    issuer: "ETS (Educational Testing Service)",
    year: "2026",
    category: "Language Proficiency",
    credentialId: "TOEIC-ETS-2026-HQY",
    description: "Sertifikasi kemahiran Bahasa Inggris profesional untuk komunikasi bisnis internasional dengan skor 530.",
    badgeColor: "from-indigo-500 to-purple-500"
  },
  {
    id: "mtcna",
    title: "MTCNA (MikroTik Certified Network Associate)",
    issuer: "MikroTik",
    year: "2024",
    category: "Networking & Security",
    credentialId: "MTCNA-2024-PCR",
    description: "Sertifikasi internasional konfigurasi router MikroTik, routing, firewall, dan manajemen jaringan.",
    badgeColor: "from-cyan-500 to-blue-600"
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
    id: "cyber-essentials",
    title: "Cybersecurity Essentials (CE)",
    issuer: "Cisco Networking Academy",
    year: "2024",
    category: "Cybersecurity",
    credentialId: "CISCO-CE-2024-HQY",
    description: "Sertifikasi konsep utama keamanan siber, enkripsi data, dan manajemen risiko informasi dari Cisco.",
    badgeColor: "from-violet-500 to-purple-500"
  }
];

export const education = [
  {
    institution: "Politeknik Caltex Riau (PCR)",
    degree: "Bachelor of Applied Computer Engineering (Teknik Informatika)",
    period: "2022 – 2026",
    gpa: "3.41 / 4.00",
    status: "Mahasiswa Tingkat Akhir",
    highlights: [
      "Fokus: Software development dan pengembangan aplikasi berbasis web.",
      "IPK Kumulatif: 3.41 dari 4.00.",
      "Magang Industri di Bank Riau Kepri Syariah."
    ]
  },
  {
    institution: "SMAN Plus Provinsi Riau",
    degree: "Sekolah Menengah Atas — Program Sains (IPA)",
    period: "2019 – 2022",
    gpa: "Alumni",
    status: "Alumni",
    highlights: [
      "Program Sains (Science Program).",
      "Aktif dalam kegiatan organisasi siswa dan sains teknologi."
    ]
  }
];

export const organizations = [
  {
    role: "Anggota, Departemen Olahraga & E-Sports",
    organization: "Information Technology Student Association (ITSA), PCR",
    period: "2023 – 2024"
  },
  {
    role: "Security Coordinator",
    organization: "PMB BASKET PCR Committee",
    period: "2023"
  }
];
