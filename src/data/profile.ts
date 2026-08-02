export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  bioSummary: string;
  city: string;
  gpa: string;
  whatsapp: {
    number: string;
    formattedNumber: string;
    link: string;
    introMessage: string;
  };
  email: string;
  emailLink: string;
  emailIntroSubject: string;
  emailIntroBody: string;
  linkedin: {
    username: string;
    link: string;
  };
  github: {
    username: string;
    link: string;
  };
  domain: string;
  cvPath: string;
  photoPath: string;
  stats: Array<{
    label: string;
    value: string;
    detail: string;
  }>;
}

const waIntro = encodeURIComponent("Halo Michael, saya tertarik dengan portofolio Anda di michaelaustin.me. Apakah ada waktu untuk berdiskusi mengenai peluang kerja/proyek?");
const mailSubject = encodeURIComponent("Diskusi Peluang Kerja / Proyek — michaelaustin.me");
const mailBody = encodeURIComponent("Halo Michael Austin,\n\nSaya menemukan portofolio Anda di michaelaustin.me. Saya tertarik untuk berdiskusi mengenai peluang kerja/proyek web di perusahaan/tim kami.\n\nSalam,\n[Nama Pengirim / Perusahaan]");

export const profileData: ProfileData = {
  name: "Michael Austin",
  role: "System Analyst • Web Developer • Software Engineer • IT Support • QA",
  tagline: "Fresh Graduate Sistem Informasi Telkom University (IPK 3.15), berpengalaman membangun 5+ aplikasi web production dan tersertifikasi BNSP System Analyst.",
  bioSummary: "Fresh graduate Sistem Informasi Telkom University (IPK 3.15), dengan pengalaman membangun lebih dari 5 aplikasi web production menggunakan PHP/Laravel/React, mencakup sistem POS, payment gateway, dan manajemen inventory real-time untuk klien UMKM dan Hotel Horison Menteng. Dibekali kemampuan analisis kebutuhan dan perancangan sistem ERD/UML (tersertifikasi BNSP System Analyst) yang memperkuat proses SDLC, desain arsitektur, implementasi, hingga deployment. Aktif sebagai Asisten Praktikum untuk 5 mata kuliah dengan total lebih dari 150 mahasiswa per semester.",
  city: "Tangerang",
  gpa: "3.15 / 4.00",
  whatsapp: {
    number: "081515526082",
    formattedNumber: "+62 815-1552-6082",
    link: `https://wa.me/6281515526082?text=${waIntro}`,
    introMessage: "Halo Michael, saya tertarik dengan portofolio Anda di michaelaustin.me. Apakah ada waktu untuk berdiskusi mengenai peluang kerja/proyek?"
  },
  email: "austinmikel72@gmail.com",
  emailLink: `mailto:austinmikel72@gmail.com?subject=${mailSubject}&body=${mailBody}`,
  emailIntroSubject: "Diskusi Peluang Kerja / Proyek — michaelaustin.me",
  emailIntroBody: "Halo Michael Austin,\n\nSaya menemukan portofolio Anda di michaelaustin.me. Saya tertarik untuk berdiskusi mengenai peluang kerja/proyek web di perusahaan/tim kami.\n\nSalam,\n[Nama Pengirim / Perusahaan]",
  linkedin: {
    username: "michael-austin-4676022b5",
    link: "https://linkedin.com/in/michael-austin-4676022b5"
  },
  github: {
    username: "MichaelAustin1234",
    link: "https://github.com/MichaelAustin1234"
  },
  domain: "michaelaustin.me",
  cvPath: "/cv-michael-austin.pdf",
  photoPath: "/foto-profil.png",
  stats: [
    {
      label: "Aplikasi Web Production",
      value: "5+",
      detail: "POS, payment gateway & inventory"
    },
    {
      label: "Asisten Praktikum",
      value: "5 Matkul",
      detail: "150+ Mahasiswa / Semester (4 Semester)"
    },
    {
      label: "Sertifikasi Profesi",
      value: "BNSP",
      detail: "System Analyst Certified"
    }
  ]
};
