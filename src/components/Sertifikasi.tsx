import { ExternalLink, ShieldCheck, BookOpen, Award } from "lucide-react";
import { dataSertifikasi } from "@/data/sertifikasi";

export default function Sertifikasi() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Sertifikasi Profesi":
        return <ShieldCheck className="w-4 h-4 text-[#B94A24]" />;
      case "Publikasi Ilmiah":
        return <BookOpen className="w-4 h-4 text-[#B94A24]" />;
      default:
        return <Award className="w-4 h-4 text-[#B94A24]" />;
    }
  };

  return (
    <section id="sertifikasi" className="scroll-mt-20 py-20 bg-[#FAF8F5] border-b border-[#E8E5E0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight">
            Sertifikasi & Publikasi Ilmiah
          </h2>
          <p className="text-base text-[#66625D] mt-2">
            Sertifikasi kompetensi nasional, publikasi ilmiah akademis, dan kualifikasi terverifikasi.
          </p>
        </div>

        {/* Credentials Grid (2-Column 2x2 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {dataSertifikasi.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white border border-[#E8E5E0] hover:border-[#121212]/30 rounded-2xl flex flex-col justify-between space-y-4 transition-all shadow-2xs group h-full"
            >
              <div className="space-y-3">
                {/* Header Meta */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF8F5] border border-[#E8E5E0] rounded-lg text-xs font-semibold text-[#121212]">
                    {getCategoryIcon(item.category)}
                    <span>{item.category}</span>
                  </span>
                  <span className="text-xs font-mono text-[#66625D]">{item.issueDate}</span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#121212] leading-snug group-hover:text-[#B94A24] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs text-[#B94A24] font-semibold block mt-1">
                    {item.issuer}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#66625D] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Link Footer if available */}
              {item.link && (
                <div className="pt-3 border-t border-[#E8E5E0]/60">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#121212] hover:text-[#B94A24] transition-colors"
                  >
                    <span>Akses Open Library Telkom</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#B94A24]" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
