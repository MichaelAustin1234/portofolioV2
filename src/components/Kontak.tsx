"use client";

import { Mail, MessageSquare, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { profileData } from "@/data/profile";

export default function Kontak() {
  return (
    <section id="kontak" className="scroll-mt-16 py-20 bg-white border-b border-[#E8E5E0] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight">
            Mari Berdiskusi
          </h2>
          <p className="text-base sm:text-lg text-[#66625D] max-w-xl mx-auto leading-relaxed">
            Punya penawaran posisi (Full-Time/Remote), proyek rekayasa web, atau ingin berdiskusi mengenai analisis sistem? Silakan hubungi saya secara langsung melalui saluran kontak di bawah ini.
          </p>
        </div>

        {/* Clean Symmetrical Contact Cards Grid (No Copy Buttons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          
          {/* WhatsApp Card */}
          <div className="p-6 bg-[#FAF8F5] border border-[#E8E5E0] hover:border-[#121212]/30 rounded-2xl flex flex-col justify-between space-y-6 transition-all shadow-2xs group">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E5E0] flex items-center justify-center shrink-0 shadow-2xs">
                  <MessageSquare className="w-5 h-5 text-[#B94A24]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#66625D] block">WhatsApp</span>
                  <div className="font-display font-bold text-base text-[#121212] mt-0.5">
                    {profileData.whatsapp.formattedNumber}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E8E5E0]/60">
              <a
                href={profileData.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#121212] text-white hover:bg-[#B94A24] active:bg-[#9A3B1B] px-5 py-3 text-xs font-semibold rounded-xl transition-colors shadow-xs min-h-[42px]"
              >
                <span>Chat via WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-6 bg-[#FAF8F5] border border-[#E8E5E0] hover:border-[#121212]/30 rounded-2xl flex flex-col justify-between space-y-6 transition-all shadow-2xs group">
            <div className="space-y-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E5E0] flex items-center justify-center shrink-0 shadow-2xs">
                  <Mail className="w-5 h-5 text-[#B94A24]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#66625D] block">Email Direct</span>
                  <div className="font-display font-bold text-sm sm:text-base text-[#121212] truncate mt-0.5" title={profileData.email}>
                    {profileData.email}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E8E5E0]/60">
              <a
                href={profileData.emailLink}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#121212] text-white hover:bg-[#B94A24] active:bg-[#9A3B1B] px-5 py-3 text-xs font-semibold rounded-xl transition-colors shadow-xs min-h-[42px]"
              >
                <span>Kirim Email Direct</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

        </div>

        {/* Social Media Professional Badges */}
        <div className="pt-4 border-t border-[#E8E5E0] flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-[#66625D]">
          <a
            href={profileData.linkedin.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAF8F5] border border-[#E8E5E0] hover:border-[#121212] text-[#121212] rounded-xl transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
            <span>LinkedIn Profile</span>
          </a>

          <a
            href={profileData.github.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAF8F5] border border-[#E8E5E0] hover:border-[#121212] text-[#121212] rounded-xl transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-[#181717]" />
            <span>GitHub Repositories</span>
          </a>
        </div>

      </div>
    </section>
  );
}
