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

        {/* Primary Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          <a
            href={profileData.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#121212] text-white hover:bg-[#B94A24] active:bg-[#9A3B1B] px-6 py-4 rounded-xl text-sm font-semibold transition-all shadow-xs hover:shadow-md min-h-[52px]"
          >
            <MessageSquare className="w-4 h-4 text-[#B94A24]" />
            <span>Chat via WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70 ml-auto" />
          </a>

          <a
            href={profileData.emailLink}
            className="inline-flex items-center justify-center gap-2.5 border border-[#121212] bg-white text-[#121212] hover:bg-[#121212] hover:text-white active:bg-slate-100 px-6 py-4 rounded-xl text-sm font-semibold transition-all shadow-2xs min-h-[52px] group"
          >
            <Mail className="w-4 h-4 text-[#B94A24] group-hover:text-white transition-colors" />
            <span>Kirim Email Direct</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70 ml-auto" />
          </a>
        </div>

        {/* Detailed Contact Cards (WhatsApp & Email with Copy Feature) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-2">
          
          {/* WhatsApp Info Card */}
          <div className="p-5 bg-[#FAF8F5] border border-[#E8E5E0] hover:border-[#121212]/30 rounded-2xl flex items-center justify-between transition-all">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E5E0] flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5 text-[#B94A24]" />
              </div>
              <div className="truncate">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#66625D]">WhatsApp</div>
                <div className="text-sm font-semibold text-[#121212] truncate mt-0.5">{profileData.whatsapp.formattedNumber}</div>
              </div>
            </div>
            <button
              onClick={() => handleCopy(profileData.whatsapp.number, "wa")}
              title="Salin Nomor WA"
              className="p-2 text-[#66625D] hover:text-[#121212] hover:bg-white rounded-lg transition-colors shrink-0 ml-2"
            >
              {copiedType === "wa" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Email Info Card */}
          <div className="p-5 bg-[#FAF8F5] border border-[#E8E5E0] hover:border-[#121212]/30 rounded-2xl flex items-center justify-between transition-all">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E5E0] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#B94A24]" />
              </div>
              <div className="truncate">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#66625D]">Email Direct</div>
                <div className="text-sm font-semibold text-[#121212] truncate mt-0.5">{profileData.email}</div>
              </div>
            </div>
            <button
              onClick={() => handleCopy(profileData.email, "email")}
              title="Salin Email"
              className="p-2 text-[#66625D] hover:text-[#121212] hover:bg-white rounded-lg transition-colors shrink-0 ml-2"
            >
              {copiedType === "email" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
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
