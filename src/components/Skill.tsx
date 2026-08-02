import { dataSkill } from "@/data/skill";

export default function Skill() {
  return (
    <section id="skill" className="py-20 bg-white border-b border-[#E8E5E0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight">
            Keahlian Teknis & Tools
          </h2>
          <p className="text-base text-[#66625D] mt-2">
            Pengelompokan keahlian teknis pengembangan perangkat lunak, perangkat pendukung, serta metodologi analisis.
          </p>
        </div>

        {/* Skill Category Streamline Stack */}
        <div className="space-y-6">
          {dataSkill.map((cat) => (
            <div
              key={cat.category}
              className="p-6 bg-[#FAF8F5] border border-[#E8E5E0] rounded-xl space-y-4 shadow-xs"
            >
              <div>
                <h3 className="font-display font-bold text-lg text-[#121212]">
                  {cat.category}
                </h3>
                <p className="text-xs sm:text-sm text-[#66625D] mt-1">
                  {cat.description}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                {cat.skills.map((sk) => (
                  <span
                    key={sk.name}
                    className="px-3 py-1.5 rounded-lg bg-white border border-[#E8E5E0] text-xs font-medium text-[#121212]"
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
