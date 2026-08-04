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
    fullDescription: "Platform pembuat situs web modular berbasis no-code yang dirancang untuk membantu pelaku UMKM membangun dan mengelola katalog produk serta profil bisnis digital secara mandiri.",
    highlights: [
      "Arsitektur terpisah (decoupled): Backend REST API Laravel + Frontend SPA React & TypeScript",
      "Engine kustomisasi template modular dengan visual preview instan & integrasi katalog produk",
      "Dioptimasi untuk performa tinggi, waktu muat cepat, & pemrosesan efisien di Vercel Production"
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
    fullDescription: "Sistem informasi bisnis terintegrasi untuk pengelolaan stok persediaan barang dan pencatatan keuangan toko secara real-time yang dikembangkan menggunakan metode Prototype.",
    highlights: [
      "Analisis alur bisnis langsung di lokasi & perancangan arsitektur data ter-normalisasi (UML & ERD 3NF)",
      "Pengembangan modul inventory persediaan barang, transaksi kasir, dan laporan keuangan terstruktur",
      "Dipublikasikan sebagai karya ilmiah tugas akhir di Open Library Telkom University dengan pengujian skalabilitas"
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
    fullDescription: "Modul web manajemen operasional hotel yang dikembangkan selama program magang profesional bersama Metropolitan Golden Management untuk mendukung efisiensi layanan internal.",
    highlights: [
      "Analisis kebutuhan bisnis operasional hotel bersama tim manajemen & IT perusahaan",
      "Pengembangan 17 modul CRUD internal serta pengelolaan migrasi data lintas database relasional untuk 20 tabel",
      "Pengujian fungsional modul secara sistematis sebelum diluncurkan ke lingkungan produksi"
    ],
    techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML/CSS", "GitHub"],
    featured: true
  }
];
