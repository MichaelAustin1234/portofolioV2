export interface SkillCategory {
  category: string;
  description: string;
  skills: Array<{
    name: string;
    level?: string;
  }>;
}

export const dataSkill: SkillCategory[] = [
  {
    category: "Bahasa & Framework Pemrograman",
    description: "Pengembangan antarmuka antarmuka & backend full-stack relasional.",
    skills: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "MySQL" },
      { name: "SQL" }
    ]
  },
  {
    category: "Tools & Software Produksi",
    description: "Perangkat lunak desain, versi kontrol, perancangan, dan analitik.",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Figma" },
      { name: "Balsamiq" },
      { name: "VS Code" },
      { name: "Cisco Packet Tracer" },
      { name: "Microsoft Word" },
      { name: "Microsoft Excel" },
      { name: "Microsoft PowerPoint" },
      { name: "Google Sheets" },
      { name: "Google Slides" }
    ]
  },
  {
    category: "Metodologi & Analisis Sistem",
    description: "Pemodelan arsitektur perangkat lunak, dokumentasi SDLC, & analitik data.",
    skills: [
      { name: "SDLC Methodology" },
      { name: "Agile" },
      { name: "Scrum" },
      { name: "UML Diagram" },
      { name: "ERD" },
      { name: "Flowchart" },
      { name: "Business Analysis" },
      { name: "System Documentation" },
      { name: "Network Fundamentals" },
      { name: "Data Visualization" },
      { name: "Data Analysis" }
    ]
  }
];
