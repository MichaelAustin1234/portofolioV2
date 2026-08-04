import { Code2, Wrench, Workflow } from "lucide-react";
import { dataSkill } from "@/data/skill";

export default function Skill() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code2 className="w-5 h-5 text-[#B94A24]" />;
      case "tools":
        return <Wrench className="w-5 h-5 text-[#B94A24]" />;
      case "analysis":
        return <Workflow className="w-5 h-5 text-[#B94A24]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#B94A24]" />;
    }
  };

  return (
    <section id="skill" className="scroll-mt-20 py-20 bg-white border-b border-[#E8E5E0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight">
            Keahlian Teknis & Tools
          </h2>
          <p className="text-base text-[#66625D] mt-2">
            Pengelompokan keahlian teknis pengembangan perangkat lunak, perangkat pendukung, serta metodologi analisis.
          </p>
        </div>

        {/* 3-Column Equal-Height Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {dataSkill.map((cat) => (
            <div
              key={cat.category}
              className="p-6 bg-[#FAF8F5] border border-[#E8E5E0] hover:border-[#121212]/30 rounded-2xl flex flex-col justify-between space-y-5 transition-all shadow-2xs group h-full"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E8E5E0] flex items-center justify-center shrink-0">
                    {getIcon(cat.iconName)}
                  </div>
                  <h3 className="font-display font-bold text-base text-[#121212] group-hover:text-[#B94A24] transition-colors leading-snug">
                    {cat.category}
                  </h3>
                </div>
                <p className="text-xs text-[#66625D] leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                {cat.skills.map((sk) => (
                  <span
                    key={sk.name}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      sk.featured
                        ? "bg-white text-[#121212] border border-[#B94A24]/40 font-semibold shadow-2xs"
                        : "bg-white text-[#66625D] border border-[#E8E5E0] hover:text-[#121212]"
                    }`}
                  >
                    {sk.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
