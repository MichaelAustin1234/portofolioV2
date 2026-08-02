export interface Sertifikasi {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: "Pendidikan" | "Sertifikasi Profesi" | "Publikasi Ilmiah" | "Bahasa / Cloud";
  description: string;
  link?: string;
}

export const dataSertifikasi: Sertifikasi[] = [
  {
    id: "pendidikan-s1",
    title: "S1 Sistem Informasi (Telkom University)",
    issuer: "Telkom University",
    issueDate: "Sep 2021 – Aug 2025",
    category: "Pendidikan",
    description: "Lulusan S1 Sistem Informasi Telkom University dengan IPK 3.15 dari 4.00. Berfokus pada rekayasa lunak, desain arsitektur ERD/UML, basis data relasional (3NF), dan metodologi SDLC."
  },
  {
    id: "bnsp-system-analyst",
    title: "BNSP System Analyst Certification",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    issueDate: "Nov 2024",
    category: "Sertifikasi Profesi",
    description: "Sertifikasi kompetensi nasional dalam analisis kebutuhan pengguna, perancangan diagram UML/ERD, dan spesifikasi arsitektur sistem informasi."
  },
  {
    id: "publikasi-ubi-bakar",
    title: "Rancang Bangun Sistem Informasi Manajemen Inventory dan Keuangan Berbasis Web Menggunakan Metode Prototype (Studi Kasus Toko Ubi Bakar Cilembu)",
    issuer: "Open Library Telkom University",
    issueDate: "Jul 2025",
    category: "Publikasi Ilmiah",
    description: "Publikasi karya ilmiah tugas akhir mengenai perancangan & analisis skalabilitas sistem manajemen persediaan barang dan keuangan real-time berbasis web.",
    link: "https://openlibrary.telkomuniversity.ac.id/"
  },
  {
    id: "eprt-english",
    title: "EPRT (English Proficiency Test)",
    issuer: "Telkom University Language Center",
    issueDate: "Jun 2025",
    category: "Bahasa / Cloud",
    description: "Uji kemahiran Bahasa Inggris terstandarisasi Telkom University."
  },
  {
    id: "alibaba-cloud",
    title: "Alibaba Cloud Certification",
    issuer: "Alibaba Cloud Academy",
    issueDate: "Jan 2024",
    category: "Bahasa / Cloud",
    description: "Sertifikasi kompetensi dasar arsitektur cloud & infrastruktur komputasi awan."
  }
];
