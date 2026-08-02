export interface Sertifikasi {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: "Sertifikasi Profesi" | "Publikasi Ilmiah" | "Kemampuan Bahasa" | "Cloud";
  credentialId?: string;
  link?: string;
  description: string;
}

export const dataSertifikasi: Sertifikasi[] = [
  {
    id: "bnsp-system-analyst",
    title: "Sertifikasi Profesi System Analyst",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    issueDate: "Nov 2024",
    category: "Sertifikasi Profesi",
    description: "Sertifikasi kompetensi nasional untuk spesialisasi analisis sistem informasi, perancangan arsitektur lunak, dan dokumentasi bisnis."
  },
  {
    id: "publikasi-ubi-bakar",
    title: "Publikasi Karya Ilmiah — Sistem Inventory & Keuangan Ubi Bakar Cilembu",
    issuer: "Open Library Telkom University",
    issueDate: "Jul 2025",
    category: "Publikasi Ilmiah",
    link: "https://openlibrary.telkomuniversity.ac.id/",
    description: "Karya ilmiah mengenai rancang bangun dan implementasi sistem informasi manajemen stok dan arus kas real-time pada usaha mikro."
  },
  {
    id: "eprt-telkom",
    title: "EPRT (English Proficiency Test)",
    issuer: "Telkom University Language Center",
    issueDate: "Jun 2025",
    category: "Kemampuan Bahasa",
    description: "Sertifikat kemahiran bahasa Inggris profesional untuk lingkungan akademis dan kerja."
  },
  {
    id: "alibaba-cloud",
    title: "Alibaba Cloud Certification",
    issuer: "Alibaba Cloud",
    issueDate: "Jan 2024",
    category: "Cloud",
    description: "Sertifikasi dasar komputasi awan dan arsitektur infrastruktur cloud Alibaba."
  }
];
