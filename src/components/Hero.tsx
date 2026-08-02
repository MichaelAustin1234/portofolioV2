import Image from "next/image";
import { Mail, MessageSquare, Code2, Award, Users, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { profileData } from "@/data/profile";

export default function Hero() {
  return (
    <section id="profil" className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-[#FAF8F5] border-b border-[#E8E5E0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        
        {/* Top Status Bar */}
        <div className="flex justify-end">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] sm:text-xs font-mono font-medium shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>Terbuka untuk Peluang Kerja & Magang</span>
          </div>
        </div>

        {/* Hero Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Bio & CTAs (Lg: 7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Headline + Multi-Role Subtitle */}
            <div className="space-y-2">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#121212] tracking-tight leading-[1.06]">
                Michael Austin
              </h1>
              
              {/* Elegant Multi-Role Subtitle Tag */}
              <p className="text-[#B94A24] font-display font-bold text-base sm:text-lg tracking-tight leading-snug">
                System Analyst <span className="text-[#66625D]/40 mx-1">•</span> Web Developer <span className="text-[#66625D]/40 mx-1">•</span> Software Engineer <span className="text-[#66625D]/40 mx-1">•</span> IT Support <span className="text-[#66625D]/40 mx-1">•</span> QA
              </p>

              <div className="text-xs font-mono font-medium text-[#66625D]">
                Fresh Graduate S1 Sistem Informasi • Telkom University
              </div>
            </div>

            <p className="text-[#66625D] text-sm sm:text-base lg:text-lg leading-relaxed pt-1">
              Fresh graduate Sistem Informasi Telkom University, dengan pengalaman membangun lebih dari 5 aplikasi web production menggunakan PHP/Laravel/React, mencakup sistem POS, payment gateway, dan manajemen inventory real-time untuk klien UMKM dan Hotel Horison Menteng.
            </p>

            {/* Action CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#proyek"
                className="inline-flex items-center justify-center gap-2 bg-[#121212] text-white hover:bg-[#B94A24] active:bg-[#9A3B1B] px-6 py-3.5 text-sm font-medium transition-colors shadow-xs hover:shadow-md rounded-lg text-center min-h-[44px]"
              >
                <span>Lihat Karya Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 border border-[#121212] bg-white text-[#121212] hover:bg-[#121212] hover:text-white active:bg-slate-100 px-6 py-3.5 text-sm font-medium transition-colors rounded-lg shadow-2xs text-center min-h-[44px]"
              >
                <Mail className="w-4 h-4 text-[#B94A24]" />
                <span>Hubungi Saya</span>
              </a>
            </div>

            {/* Direct Contact Links */}
            <div className="pt-4 border-t border-[#E8E5E0] flex flex-wrap items-center gap-4 sm:gap-5 text-xs sm:text-sm text-[#66625D]">
              <a
                href={profileData.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#B94A24] underline underline-offset-4 py-1 min-h-[40px]"
              >
                <MessageSquare className="w-4 h-4 text-[#B94A24] shrink-0" />
                <span>WA: {profileData.whatsapp.formattedNumber}</span>
              </a>

              <a
                href={profileData.emailLink}
                className="inline-flex items-center gap-1.5 hover:text-[#B94A24] underline underline-offset-4 py-1 min-h-[40px]"
              >
                <Mail className="w-4 h-4 text-[#B94A24] shrink-0" />
                <span className="truncate max-w-[200px] sm:max-w-none">{profileData.email}</span>
              </a>

              <a
                href={profileData.linkedin.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#B94A24] underline underline-offset-4 py-1 min-h-[40px]"
              >
                <LinkedinIcon className="w-4 h-4 shrink-0" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profileData.github.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#B94A24] underline underline-offset-4 py-1 min-h-[40px]"
              >
                <GithubIcon className="w-4 h-4 shrink-0" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Modern Portrait Card (Lg: 5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] group">
              {/* Photo Card Frame */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md border-2 border-white bg-white p-2 group-hover:shadow-xl transition-all duration-500">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={profileData.photoPath}
                    alt={profileData.name}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 340px"
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Sub-card Meta Spec Tag */}
              <div className="mt-3 flex items-center justify-between text-[11px] sm:text-xs font-mono text-[#66625D] px-1">
                <span className="font-semibold text-[#121212]">TELKOM UNIVERSITY</span>
                <span>TANGERANG, INDONESIA</span>
              </div>
            </div>
          </div>

        </div>

        {/* Predictable & Balanced 3 Achievement Cards */}
        <div className="pt-6 sm:pt-8 border-t border-[#E8E5E0] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-5 bg-white border border-[#E8E5E0] rounded-xl space-y-1.5 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
            <div className="w-8 h-8 rounded bg-[#FDF6F0] text-[#B94A24] flex items-center justify-center mb-2">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="font-display font-extrabold text-xl sm:text-2xl text-[#121212]">
              5+ Aplikasi
            </div>
            <div className="text-xs font-semibold text-[#B94A24]">
              Web Production
            </div>
            <p className="text-xs text-[#66625D] leading-relaxed">
              Sistem POS, payment gateway & inventory real-time klien UMKM & Hotel.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#E8E5E0] rounded-xl space-y-1.5 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
            <div className="w-8 h-8 rounded bg-[#FDF6F0] text-[#B94A24] flex items-center justify-center mb-2">
              <Award className="w-4 h-4" />
            </div>
            <div className="font-display font-extrabold text-xl sm:text-2xl text-[#121212]">
              BNSP Analyst
            </div>
            <div className="text-xs font-semibold text-[#B94A24]">
              System Analyst Certified
            </div>
            <p className="text-xs text-[#66625D] leading-relaxed">
              Analisis kebutuhan, perancangan ERD/UML 3NF & metodologi SDLC.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#E8E5E0] rounded-xl space-y-1.5 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
            <div className="w-8 h-8 rounded bg-[#FDF6F0] text-[#B94A24] flex items-center justify-center mb-2">
              <Users className="w-4 h-4" />
            </div>
            <div className="font-display font-extrabold text-xl sm:text-2xl text-[#121212]">
              Asisten Praktikum
            </div>
            <div className="text-xs font-semibold text-[#B94A24]">
              5 Mata Kuliah • Telkom University
            </div>
            <p className="text-xs text-[#66625D] leading-relaxed">
              150+ Mahasiswa / semester (4 semester berturut-turut).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
