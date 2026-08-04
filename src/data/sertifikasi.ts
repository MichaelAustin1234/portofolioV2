export interface Sertifikasi {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: "Sertifikasi Profesi" | "Publikasi Ilmiah" | "Bahasa / Cloud";
  description: string;
  link?: string;
}

export const dataSertifikasi: Sertifikasi[] = [
  {
    id: "bnsp-system-analyst",
    title: "System Analyst Certification",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    issueDate: "Nov 2024",
    category: "Sertifikasi Profesi",
    description: "Sertifikasi kompetensi nasional dalam analisis kebutuhan pengguna, perancangan diagram UML/ERD, dan spesifikasi arsitektur sistem informasi."
  },
  {
    id: "publikasi-ubi-bakar",
    title: "Publikasi Ilmiah: Sistem Inventory & Keuangan Web (Ubi Bakar Cilembu)",
    issuer: "Open Library Telkom University",
    issueDate: "Jul 2025",
    category: "Publikasi Ilmiah",
    description: "Publikasi karya ilmiah tugas akhir (metode Prototype) mengenai perancangan & analisis skalabilitas sistem manajemen persediaan barang dan keuangan real-time berbasis web.",
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
    description: "Sertifikasi kompetensi dasar arsitektur cloud & infrastruktur komputasi cloud."
  }
];
