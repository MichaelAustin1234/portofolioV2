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
    fullDescription: "Platform pembuatan situs web tanpa kode (no-code sitebuilder) yang dirancang khusus untuk membantu pemilik UMKM membangun landing page dan katalog digital secara mandiri dengan alur kustomisasi visual.",
    highlights: [
      "Arsitektur modular menggunakan Laravel + React/TypeScript & Tailwind CSS",
      "Kustomisasi toko visual real-time dan manajemen komponen fleksibel",
      "Dioptimasi untuk performa tinggi & beban server efisien"
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
    fullDescription: "Aplikasi manajemen operasional bisnis UMKM yang mengintegrasikan pemantauan persediaan barang (inventory) dengan pembukuan arus kas secara real-time untuk akurasi data finansial harian.",
    highlights: [
      "Pencatatan transaksi & kalkulasi stok otomatis real-time",
      "Laporan arus kas terstruktur & dashboard analitik visual",
      "Dipublikasikan sebagai Karya Ilmiah di Open Library Telkom University"
    ],
    techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "System Modeling"],
    publicationUrl: "https://openlibrary.telkomuniversity.ac.id/",
    featured: true
  },
  {
    id: "hotel-horison-menteng",
    title: "Modul Manajemen Hotel Horison Menteng",
    period: "Mar 2024 – Sep 2024",
    role: "IT Developer Magang",
    shortDescription: "Modul sistem informasi manajemen operasional Hotel Horison Menteng.",
    fullDescription: "Pengembangan modul sistem internal manajemen operasional Hotel Horison Menteng untuk optimasi alur kerja staf, reservasi, dan pelaporan operasional harian.",
    highlights: [
      "Pengembangan fitur manajemen kamar, reservasi, dan log operasional",
      "Integrasi struktur database relational dengan skalabilitas manajemen hotel",
      "Kolaborasi tim IT internal Metropolitan Golden Management"
    ],
    techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML/CSS"],
    featured: true
  }
];
