export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  bioSummary: string;
  city: string;
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
  role: "PHP / Laravel & React Developer",
  tagline: "Fresh Graduate Sistem Informasi Telkom University berpengalaman membangun 5+ aplikasi web production dan tersertifikasi BNSP System Analyst.",
  bioSummary: "Lulusan Sistem Informasi Telkom University yang berfokus pada pengembangan web full-stack (PHP, Laravel, React, TypeScript) dan analisis sistem (SDLC, UML, ERD). Berpengalaman nyata menangani proyek industri, sistem inventory UMKM, hingga aktif sebagai Asisten Praktikum.",
  city: "Tangerang",
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
      detail: "Sistem berskala nyata & UMKM"
    },
    {
      label: "Pengalaman Mengajar",
      value: "2 Thn",
      detail: "Asisten Praktikum Telkom University"
    },
    {
      label: "Sertifikasi Profesi",
      value: "BNSP",
      detail: "System Analyst Certified"
    }
  ]
};
