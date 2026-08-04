export interface SkillItem {
  name: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: "code" | "tools" | "analysis";
  skills: SkillItem[];
}

export const dataSkill: SkillCategory[] = [
  {
    category: "Bahasa & Framework Pemrograman",
    description: "Pengembangan antarmuka pengguna (frontend) & sistem backend full-stack relasional.",
    iconName: "code",
    skills: [
      { name: "PHP", featured: true },
      { name: "Laravel", featured: true },
      { name: "React", featured: true },
      { name: "TypeScript", featured: true },
      { name: "JavaScript" },
      { name: "MySQL", featured: true },
      { name: "SQL" },
      { name: "HTML" },
      { name: "CSS" }
    ]
  },
  {
    category: "Tools & Software Produksi",
    description: "Perangkat lunak desain, versi kontrol, perancangan, dan analitik data.",
    iconName: "tools",
    skills: [
      { name: "Git", featured: true },
      { name: "GitHub", featured: true },
      { name: "Figma", featured: true },
      { name: "Balsamiq" },
      { name: "VS Code" },
      { name: "Cisco Packet Tracer" },
      { name: "Microsoft Office" },
      { name: "Google Workspace" }
    ]
  },
  {
    category: "Metodologi & Analisis Sistem",
    description: "Pemodelan arsitektur perangkat lunak, dokumentasi SDLC, & pemetaan proses bisnis.",
    iconName: "analysis",
    skills: [
      { name: "SDLC Methodology", featured: true },
      { name: "UML Diagram", featured: true },
      { name: "ERD (3NF)", featured: true },
      { name: "Business Analysis", featured: true },
      { name: "System Documentation", featured: true },
      { name: "Agile & Scrum" },
      { name: "Flowchart & Process" },
      { name: "Network Fundamentals" },
      { name: "Data Visualization" }
    ]
  }
];
