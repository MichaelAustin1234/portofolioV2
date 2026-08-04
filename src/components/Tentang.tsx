import { CheckCircle2 } from "lucide-react";

export default function Tentang() {
  const competencies = [
    {
      title: "Fresh Graduate Sistem Informasi Telkom University",
      description: "Lulusan Sistem Informasi Telkom University dengan fokus rekayasa lunak, perancangan basis data relasional (3NF), dan pemodelan alur kerja sistem."
    },
    {
      title: "BNSP Certified System Analyst",
      description: "Tersertifikasi nasional oleh BNSP dalam analisis kebutuhan pengguna, dokumentasi FSD/BRD, dan perancangan diagram UML/ERD."
    },
    {
      title: "5+ Aplikasi Web Production",
      description: "Pengalaman membangun modul manajemen operasional Hotel Horison Menteng (Metropolitan Golden Management) dan platform sitebuilder modular UMKM."
    },
    {
      title: "2 Tahun Asisten Praktikum",
      description: "Aktif mengajar praktikum untuk 5 mata kuliah di Telkom University (Sep 2023 – Sep 2025)."
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-white border-b border-[#E8E5E0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Title */}
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight leading-tight">
          Rekayasa Perangkat Lunak Berbasis Analisis Sistem Terstruktur
        </h2>

        {/* Narrative Paragraphs */}
        <div className="space-y-4 text-[#66625D] text-base sm:text-lg leading-relaxed">
          <p>
            Saya adalah lulusan Sistem Informasi Telkom University yang memadukan kedalaman analisis sistem dengan eksekusi teknis full-stack. Sebelum mengeksekusi baris kode, saya terbiasa memetakan proses bisnis, merancang ERD yang ter-normalisasi, serta menyusun dokumentasi UML.
          </p>
          <p>
            Dalam eksekusi teknis, stack utama yang saya kuasai meliputi <strong className="text-[#121212]">PHP, Laravel, React, TypeScript, dan MySQL</strong>. Pengalaman magang pengembangan sistem manajemen Hotel Horison Menteng serta peran 2 tahun sebagai Asisten Praktikum membentuk disiplin kerja yang tinggi, ketelitian logika, dan komunikasi teknis yang jernih.
          </p>
        </div>

        {/* Competencies List (Compact 2x2 Grid) */}
        <div className="pt-6 border-t border-[#E8E5E0] space-y-5">
          <h3 className="font-display font-bold text-xl text-[#121212]">
            Kualifikasi Utama:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            {competencies.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#FAF8F5] border border-[#E8E5E0] hover:border-[#121212]/30 rounded-2xl flex flex-col justify-between transition-all shadow-2xs group h-full"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B94A24] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-base text-[#121212] group-hover:text-[#B94A24] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#66625D] leading-relaxed mt-1.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
