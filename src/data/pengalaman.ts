export interface Pengalaman {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "Kerja / Magang" | "Akademik / Asisten";
  description: string;
  responsibilities: string[];
  skillsUsed: string[];
}

export const dataPengalaman: Pengalaman[] = [
  {
    id: "asistan-praktikum",
    role: "Asisten Praktikum",
    company: "Telkom University",
    location: "Bandung / Tangerang",
    period: "Sep 2023 – Sep 2025",
    type: "Akademik / Asisten",
    description: "Membimbing ratusan mahasiswa dalam pemahaman mata kuliah basis data, pemrograman web, dan analisis sistem informasi.",
    responsibilities: [
      "Menyusun modul praktikum & bahan ajar teknis pemrograman dan database",
      "Membimbing sesi praktikum hands-on pemrograman web & pemodelan UML/ERD",
      "Evaluasi & koreksi tugas/projek akhir mahasiswa secara terstruktur"
    ],
    skillsUsed: ["PHP", "Laravel", "MySQL", "UML", "ERD", "Mentoring", "Code Review"]
  },
  {
    id: "it-developer-intern",
    role: "IT Developer Magang",
    company: "Metropolitan Golden Management",
    location: "Jakarta / Tangerang",
    period: "Mar 2024 – Sep 2024",
    type: "Kerja / Magang",
    description: "Mengembangkan modul aplikasi web internal pendukung sistem operasional manajemen Hotel Horison Menteng.",
    responsibilities: [
      "Membangun fitur modul operasional & manajemen data hotel menggunakan PHP/Laravel",
      "Analisis kebutuhan pengguna internal dan penerjemahan menjadi rancangan sistem",
      "Debugging, optimasi query MySQL, dan perbaikan alur antarmuka aplikasi"
    ],
    skillsUsed: ["PHP", "Laravel", "JavaScript", "MySQL", "SDLC", "Business Analysis"]
  }
];
