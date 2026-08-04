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
    company: "Telkom University Kampus Jakarta",
    location: "Jakarta",
    period: "Sep 2023 – Sep 2025",
    type: "Akademik / Asisten",
    description: "Peran akademis membimbing dan mengajar mahasiswa Telkom University Kampus Jakarta pada laboratorium ilmu komputer & sistem informasi.",
    responsibilities: [
      "Membimbing dan mengajar 30–40 mahasiswa per kelas di 5 mata kuliah: Basis Data, Manajemen Rantai Pasok, Keamanan Sistem Informasi, SAP (Sistem Informasi Akuntansi), dan Data Warehouse (3 sesi praktikum/semester per matkul)",
      "Menyusun modul praktikum dan mengevaluasi hasil kerja mahasiswa secara konsisten selama 4 semester berturut-turut",
      "Mengembangkan kemampuan leadership dan problem-solving melalui sesi mentoring rutin dengan total lebih dari 150 mahasiswa per semester"
    ],
    skillsUsed: ["Basis Data", "Manajemen Rantai Pasok", "Keamanan Sistem Informasi", "SAP", "Data Warehouse", "PHP", "MySQL", "UML", "ERD"]
  },
  {
    id: "it-developer-intern",
    role: "IT Developer (Magang)",
    company: "Metropolitan Golden Management",
    location: "Jakarta",
    period: "Mar 2024 – Sep 2024",
    type: "Kerja / Magang",
    description: "Pengalaman magang profesional dalam pengembangan dan konsolidasi sistem informasi manajemen operasional Hotel Horison Menteng.",
    responsibilities: [
      "Menganalisis kebutuhan operasional hotel bersama tim manajemen hotel dan IT, lalu merancang dan mengimplementasikan sistem yang dibutuhkan menjadi 17 modul CRUD menggunakan PHP dan Laravel",
      "Mengelola version control dengan GitHub selama proses pengembangan untuk menjaga histori perubahan kode tetap terlacak dan mudah di-review",
      "Melakukan pengujian fungsional modul secara sistematis sebelum website diluncurkan, memastikan tidak ada bug",
      "Melakukan migrasi data lintas database untuk 20 tabel sebagai bagian dari proses konsolidasi sistem, memastikan integritas data tetap terjaga selama proses perpindahan"
    ],
    skillsUsed: ["PHP", "Laravel", "MySQL", "GitHub", "Migrasi 20 Tabel", "17 Modul CRUD", "Functional Testing", "Business Analysis"]
  }
];
