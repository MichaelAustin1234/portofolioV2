export interface SkillCategory {
  category: string;
  description: string;
  skills: Array<{
    name: string;
    level?: string;
    featured?: boolean;
  }>;
}

export const dataSkill: SkillCategory[] = [
  {
    category: "Bahasa & Framework Pemrograman",
    description: "Teknologi utama pengembangan aplikasi web full-stack modern & backend relational database.",
    skills: [
      { name: "PHP", featured: true },
      { name: "Laravel", featured: true },
      { name: "React", featured: true },
      { name: "JavaScript", featured: true },
      { name: "TypeScript", featured: true },
      { name: "MySQL", featured: true },
      { name: "SQL", featured: true },
      { name: "HTML5 & CSS3", featured: false },
      { name: "Tailwind CSS", featured: true }
    ]
  },
  {
    category: "Tools & Environment",
    description: "Perangkat lunak pendukung alur kerja pengembangan, desain antarmuka, dan kontrol versi.",
    skills: [
      { name: "Git", featured: true },
      { name: "GitHub", featured: true },
      { name: "Figma", featured: true },
      { name: "Balsamiq", featured: false },
      { name: "VS Code", featured: true },
      { name: "Cisco Packet Tracer", featured: false }
    ]
  },
  {
    category: "Metodologi & Analisis Sistem",
    description: "Keahlian analisis kebutuhan bisnis, perancangan arsitektur data, dan metodologi pengembangan.",
    skills: [
      { name: "System Analysis (BNSP)", featured: true },
      { name: "SDLC", featured: true },
      { name: "Agile & Scrum", featured: true },
      { name: "UML Diagram", featured: true },
      { name: "ERD", featured: true },
      { name: "Flowchart & Process Mapping", featured: true },
      { name: "Business Analysis", featured: true },
      { name: "System Documentation", featured: true },
      { name: "Network Fundamentals", featured: false }
    ]
  },
  {
    category: "Produktivitas & Data",
    description: "Pengolahan informasi bisnis, visualisasi data, dan alat produktivitas kerja profesional.",
    skills: [
      { name: "Microsoft Office", featured: false },
      { name: "Google Workspace", featured: false },
      { name: "Data Visualization", featured: true },
      { name: "Data Analysis", featured: true }
    ]
  }
];
