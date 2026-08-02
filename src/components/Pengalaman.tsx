import { Briefcase, Calendar, MapPin, Check } from "lucide-react";
import { dataPengalaman } from "@/data/pengalaman";

export default function Pengalaman() {
  return (
    <section id="pengalaman" className="py-20 bg-white border-b border-[#E8E5E0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight">
            Pengalaman Kerja & Asisten
          </h2>
          <p className="text-base text-[#66625D] mt-2">
            Jejak pengalaman kerja profesional di manajemen hotel dan peran akademis membimbing mahasiswa.
          </p>
        </div>

        {/* Vertical Timeline Linear Stack */}
        <div className="space-y-8">
          {dataPengalaman.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 bg-[#FAF8F5] border border-[#E8E5E0] rounded-xl space-y-4 shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8E5E0] pb-3 text-xs font-mono text-[#66625D]">
                <span className="px-2.5 py-0.5 bg-[#FDF6F0] text-[#B94A24] font-semibold rounded">
                  {item.type}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#B94A24]" />
                  <span>{item.period}</span>
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-[#121212]">
                  {item.role}
                </h3>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#B94A24] mt-1">
                  <Briefcase className="w-4 h-4" />
                  <span>{item.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-xs text-[#66625D] font-mono">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#66625D] leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-2 pt-3 border-t border-[#E8E5E0]">
                <span className="text-xs font-semibold text-[#121212] block">
                  Tanggung Jawab & Output Utama:
                </span>
                {item.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#121212]">
                    <Check className="w-4 h-4 text-[#B94A24] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-[#66625D]">
                <span className="font-semibold text-[#121212]">Teknologi:</span>
                <span>{item.skillsUsed.join(" • ")}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
