export interface Proyek {
  id: string;
  title: string;
  period: string;
  role: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  publicationUrl?: string;
  featured: boolean;
}

export const dataProyek: Proyek[] = [
  {
    id: "umkm-sitebuilder",
    title: "UMKM Sitebuilder",
    period: "Feb 2026 – Apr 2026",
    role: "Full-Stack Developer",
    shortDescription: "Platform no-code modular untuk pembuatan situs UMKM secara efisien dan kustomisasi fleksibel.",
    fullDescription: "Merancang arsitektur platform no-code (template engine, manajemen konten, integrasi katalog produk) agar pelaku UMKM dapat membangun website bisnis tanpa keahlian coding.",
    highlights: [
      "Merancang arsitektur platform no-code (template engine, manajemen konten, integrasi katalog produk) agar pelaku UMKM dapat membangun website bisnis tanpa keahlian coding",
      "Backend REST API (Laravel) dan frontend terpisah menggunakan React, TypeScript, dan Tailwind CSS",
      "Dioptimasi untuk performa tinggi & beban server efisien di Vercel Production"
    ],
    techStack: ["Laravel", "React", "TypeScript", "Tailwind CSS", "REST API", "MySQL"],
    demoUrl: "https://sitebuilder-v2.vercel.app/",
    featured: true
  },
  {
    id: "ubi-bakar-cilembu",
    title: "Sistem Inventory & Keuangan Ubi Bakar Cilembu",
    period: "Mar 2025 – Jul 2025",
    role: "Lead Developer & Analyst",
    shortDescription: "Sistem manajemen stok & pencatatan keuangan real-time yang dipublikasikan sebagai karya ilmiah.",
    fullDescription: "Menganalisis alur bisnis toko secara langsung di lokasi, merancang arsitektur ERD/UML aplikasi untuk sistem inventory dan keuangan real-time, lalu mengimplementasikannya dengan PHP/Laravel menggunakan metode Prototype.",
    highlights: [
      "Menganalisis alur bisnis toko secara langsung di lokasi, merancang arsitektur ERD/UML aplikasi untuk sistem inventory dan keuangan real-time, lalu mengimplementasikannya dengan PHP/Laravel menggunakan metode Prototype",
      "Project ini dikembangkan lebih lanjut menjadi tugas akhir dan dipublikasikan sebagai karya ilmiah di Open Library Telkom University, mencakup justifikasi teknis atas pemilihan arsitektur dan pertimbangan skalabilitas sistem",
      "Laporan arus kas terstruktur & dashboard analitik visual"
    ],
    techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "System Modeling"],
    publicationUrl: "https://openlibrary.telkomuniversity.ac.id/",
    featured: true
  },
  {
    id: "hotel-horison-menteng",
    title: "Modul Manajemen Hotel Horison Menteng",
    period: "Mar 2024 – Sep 2024",
    role: "IT Developer (Magang)",
    shortDescription: "Modul sistem informasi manajemen operasional Hotel Horison Menteng.",
    fullDescription: "Merancang dan mengimplementasikan modul manajemen hotel menggunakan PHP dan Laravel pada back-end sebagai bagian proyek profesional bersama Metropolitan Golden Management.",
    highlights: [
      "Merancang dan mengimplementasikan modul manajemen hotel menggunakan PHP dan Laravel pada back-end sebagai bagian proyek profesional bersama Metropolitan Golden Management",
      "Menganalisis kebutuhan operasional hotel bersama tim manajemen & IT, membangun 17 modul CRUD, serta mengelola migrasi data lintas database untuk 20 tabel",
      "Pengujian fungsional modul secara sistematis sebelum diluncurkan & pengelolaan version control dengan GitHub"
    ],
    techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML/CSS", "GitHub"],
    featured: true
  }
];
