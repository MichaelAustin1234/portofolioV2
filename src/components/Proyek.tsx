"use client";

import { useState } from "react";
import { ExternalLink, FileText, Filter, Check } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { dataProyek } from "@/data/proyek";

export default function Proyek() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const categories = [
    { name: "Semua", count: dataProyek.length },
    { name: "Full-Stack", count: dataProyek.filter(p => p.techStack.includes("Laravel") && p.techStack.includes("React")).length },
    { name: "System Analysis", count: dataProyek.filter(p => p.id === "ubi-bakar-cilembu" || p.role.includes("Analyst")).length },
    { name: "No-Code Engine", count: dataProyek.filter(p => p.id === "umkm-sitebuilder").length }
  ];

  const filteredProjects = dataProyek.filter((item) => {
    if (selectedCategory === "Semua") return true;
    if (selectedCategory === "Full-Stack") return item.techStack.includes("Laravel") && item.techStack.includes("React");
    if (selectedCategory === "System Analysis") return item.id === "ubi-bakar-cilembu" || item.role.includes("Analyst");
    if (selectedCategory === "No-Code Engine") return item.id === "umkm-sitebuilder";
    return true;
  });

  return (
    <section id="proyek" className="py-20 bg-[#FAF8F5] border-b border-[#E8E5E0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight">
            Karya Proyek Terpilih
          </h2>
          <p className="text-base text-[#66625D] mt-2">
            Aplikasi web skala produksi, produk no-code modular, dan implementasi sistem bisnis.
          </p>
        </div>

        {/* Filter Bar with Counter Badges */}
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#E8E5E0]">
          <span className="text-xs font-mono text-[#66625D] flex items-center gap-1 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 flex items-center gap-1.5 ${
                selectedCategory === cat.name
                  ? "bg-[#121212] text-white font-medium shadow-xs"
                  : "bg-white text-[#66625D] hover:text-[#121212] border border-[#E8E5E0] hover:border-[#121212]"
              }`}
            >
              <span>{cat.name}</span>
              <span
                className={`px-1.5 py-0.2 text-[10px] rounded-full font-bold ${
                  selectedCategory === cat.name
                    ? "bg-[#B94A24] text-white"
                    : "bg-[#FAF8F5] text-[#66625D] border border-[#E8E5E0]"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Linear Single-Column Project Case Studies Stack */}
        <div className="space-y-8">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 bg-white border border-[#E8E5E0] hover:border-[#121212]/40 rounded-2xl space-y-5 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8E5E0] pb-3 text-xs font-mono">
                <span className="px-2.5 py-0.5 bg-[#FDF6F0] text-[#B94A24] font-semibold rounded">
                  {item.role}
                </span>
                <span className="text-[#66625D]">{item.period}</span>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-2xl text-[#121212]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#66625D] leading-relaxed mt-2">
                  {item.fullDescription}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-2 border-t border-[#E8E5E0]">
                <span className="text-xs font-semibold text-[#121212] block">
                  Fitur Utama & Rekayasa:
                </span>
                {item.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#121212]">
                    <Check className="w-4 h-4 text-[#B94A24] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-2 flex flex-wrap gap-2">
                {item.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-[#FAF8F5] text-[#121212] border border-[#E8E5E0] text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Demo Links */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                {item.demoUrl && (
                  <a
                    href={item.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#121212] text-white hover:bg-[#B94A24] px-5 py-2.5 text-xs font-medium rounded-lg transition-colors shadow-xs"
                  >
                    <span>Kunjungi Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {item.publicationUrl && (
                  <a
                    href={item.publicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#B94A24] hover:underline"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Lihat Karya Ilmiah (Open Library)</span>
                  </a>
                )}
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#121212] hover:text-[#B94A24]"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
