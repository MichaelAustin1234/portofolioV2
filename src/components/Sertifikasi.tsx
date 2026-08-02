import { ExternalLink, Award } from "lucide-react";
import { dataSertifikasi } from "@/data/sertifikasi";

export default function Sertifikasi() {
  return (
    <section id="sertifikasi" className="py-20 bg-[#FAF8F5] border-b border-[#E8E5E0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight">
            Sertifikasi & Publikasi Ilmiah
          </h2>
          <p className="text-base text-[#66625D] mt-2">
            Sertifikasi kompetensi nasional, publikasi ilmiah akademis, dan kualifikasi terverifikasi.
          </p>
        </div>

        {/* Credentials Linear List */}
        <div className="space-y-6">
          {dataSertifikasi.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white border border-[#E8E5E0] rounded-xl space-y-3 shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8E5E0] pb-2 text-xs font-mono">
                <span className="text-[#B94A24] font-semibold flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> {item.category}
                </span>
                <span className="text-[#66625D]">{item.issueDate}</span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-[#121212]">
                  {item.title}
                </h3>
                <span className="text-xs text-[#66625D] font-mono block mt-0.5">
                  Penerbit: {item.issuer}
                </span>
              </div>

              <p className="text-sm text-[#66625D] leading-relaxed">
                {item.description}
              </p>

              {item.link && (
                <div className="pt-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#B94A24] hover:underline"
                  >
                    <span>Akses Open Library Telkom University</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
