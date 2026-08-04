"use client";

import { useState } from "react";
import { Mail, MessageSquare, CheckCircle, Copy, Check, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { profileData } from "@/data/profile";

export default function Kontak() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 3000);
  };

  return (
    <section id="kontak" className="py-20 bg-white border-b border-[#E8E5E0] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Toast Notification Banner */}
        {copiedType && (
          <div className="fixed bottom-8 right-8 z-50 px-4 py-3 bg-[#121212] text-white text-xs sm:text-sm font-medium rounded-xl shadow-xl border border-[#B94A24]/40 flex items-center gap-2.5">
            <CheckCircle className="w-4 h-4 text-[#B94A24] shrink-0" />
            <span>{copiedType === "wa" ? "Nomor WhatsApp disalin!" : "Email disalin!"}</span>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight">
            Mari Berdiskusi
          </h2>
          <p className="text-base sm:text-lg text-[#66625D] max-w-xl mx-auto leading-relaxed">
            Punya penawaran posisi (Full-Time/Remote), proyek rekayasa web, atau ingin berdiskusi mengenai analisis sistem? Silakan hubungi saya secara langsung melalui saluran kontak di bawah ini.
          </p>
        </div>

        {/* Unified Interactive Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          
          {/* WhatsApp Card */}
          <div className="p-6 bg-[#FAF8F5] border border-[#E8E5E0] hover:border-[#121212]/30 rounded-2xl flex flex-col justify-between space-y-5 transition-all shadow-2xs group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E5E0] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-[#B94A24]" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#66625D]">WhatsApp</span>
              </div>
              <div className="font-display font-bold text-base text-[#121212] truncate">
                {profileData.whatsapp.formattedNumber}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-[#E8E5E0]/60">
              <a
                href={profileData.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#121212] text-white hover:bg-[#B94A24] px-3.5 py-2.5 text-xs font-semibold rounded-xl transition-colors min-h-[38px]"
              >
                <span>Chat WA</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => handleCopy(profileData.whatsapp.number, "wa")}
                title="Salin Nomor WA"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 border border-[#E8E5E0] bg-white text-[#121212] hover:bg-[#E8E5E0] text-xs font-medium rounded-xl transition-colors min-h-[38px]"
              >
                {copiedType === "wa" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-6 bg-[#FAF8F5] border border-[#E8E5E0] hover:border-[#121212]/30 rounded-2xl flex flex-col justify-between space-y-5 transition-all shadow-2xs group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E5E0] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#B94A24]" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#66625D]">Email Direct</span>
              </div>
              <div className="font-display font-bold text-sm sm:text-base text-[#121212] truncate" title={profileData.email}>
                {profileData.email}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-[#E8E5E0]/60">
              <a
                href={profileData.emailLink}
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#121212] text-white hover:bg-[#B94A24] px-3.5 py-2.5 text-xs font-semibold rounded-xl transition-colors min-h-[38px]"
              >
                <span>Kirim Email</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => handleCopy(profileData.email, "email")}
                title="Salin Email"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 border border-[#E8E5E0] bg-white text-[#121212] hover:bg-[#E8E5E0] text-xs font-medium rounded-xl transition-colors min-h-[38px]"
              >
                {copiedType === "email" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin</span>
                  </>
                )}
              </button>
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
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn Profile</span>
          </a>

          <a
            href={profileData.github.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAF8F5] border border-[#E8E5E0] hover:border-[#121212] text-[#121212] rounded-xl transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repositories</span>
          </a>
        </div>

      </div>
    </section>
  );
}
