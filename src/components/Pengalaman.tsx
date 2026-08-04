import { Briefcase, Calendar, MapPin, Check } from "lucide-react";
import { dataPengalaman } from "@/data/pengalaman";

export default function Pengalaman() {
  return (
    <section id="pengalaman" className="scroll-mt-16 py-16 sm:py-20 bg-white border-b border-[#E8E5E0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#121212] tracking-tight">
            Pengalaman Kerja & Asisten
          </h2>
          <p className="text-sm sm:text-base text-[#66625D] mt-1.5">
            Jejak pengalaman profesional di manajemen hotel dan peran akademis membimbing mahasiswa.
          </p>
        </div>

        {/* 2-Column Grid Layout for Side-by-Side Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {dataPengalaman.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 bg-[#FAF8F5] border border-[#E8E5E0] rounded-xl flex flex-col justify-between space-y-4 shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div className="space-y-3">
                {/* Top Badge & Date Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8E5E0] pb-3 text-xs font-mono text-[#66625D]">
                  <span className="px-2.5 py-0.5 bg-[#FDF6F0] text-[#B94A24] font-semibold rounded text-[11px] sm:text-xs">
                    {item.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#B94A24]" />
                    <span>{item.period}</span>
                  </span>
                </div>

                {/* Role & Company Header */}
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#121212]">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#B94A24] mt-1">
                    <Briefcase className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.company}</span>
                    <span className="text-[#66625D]/40">•</span>
                    <span className="flex items-center gap-1 text-xs text-[#66625D] font-mono font-normal">
                      <MapPin className="w-3 h-3 shrink-0" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#66625D] leading-relaxed">
                  {item.description}
                </p>

                {/* Responsibilities List */}
                <div className="space-y-2 pt-3 border-t border-[#E8E5E0]">
                  <span className="text-xs font-semibold text-[#121212] block">
                    Tanggung Jawab & Output Utama:
                  </span>
                  <div className="space-y-1.5">
                    {item.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#121212]">
                        <Check className="w-3.5 h-3.5 text-[#B94A24] shrink-0 mt-0.5" />
                        <span className="leading-snug">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies Bottom Footer */}
              <div className="pt-3 border-t border-[#E8E5E0] space-y-1.5">
                <span className="text-[11px] font-mono font-semibold text-[#121212] block">
                  Teknologi & Tools:
                </span>
                <div className="flex flex-wrap gap-1">
                  {item.skillsUsed.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-white border border-[#E8E5E0] text-[#66625D] font-mono rounded text-[10px] sm:text-[11px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
