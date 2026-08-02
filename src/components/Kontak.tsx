"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle, Loader2, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { profileData } from "@/data/profile";

export default function Kontak() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Pesan Portofolio dari ${formData.name}`,
          message: formData.message,
          to_email: profileData.email
        })
      });

      const result = await response.json();

      if (result.success || response.ok) {
        setStatus("success");
        setStatusMessage("Terima kasih! Pesan Anda telah terkirim. Saya akan segera merespons.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("success");
        setStatusMessage("Pesan telah disiapkan. Menghubungkan ke email austinmikel72@gmail.com...");
        window.location.href = profileData.emailLink;
      }
    } catch {
      setStatus("success");
      setStatusMessage("Membuka aplikasi email pengirim...");
      window.location.href = profileData.emailLink;
    }
  };

  return (
    <section id="kontak" className="py-16 sm:py-20 bg-white border-b border-[#E8E5E0] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div>
          <div className="text-xs font-eyebrow font-medium text-[#B94A24] tracking-wider uppercase mb-2">
            // Hubungi Saya
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight">
            Mari Berdiskusi
          </h2>
          <p className="text-sm sm:text-base text-[#66625D] mt-2">
            Silakan kirim pesan untuk diskusi peluang kerja, proyek web, atau pertanyaan lainnya.
          </p>
        </div>

        {/* Direct Contact Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
          <div className="p-4 bg-[#FAF8F5] border border-[#E8E5E0] hover:border-[#121212]/30 rounded-xl flex items-center justify-between min-h-[52px] transition-colors">
            <a
              href={profileData.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#121212] hover:text-[#B94A24] font-medium truncate"
            >
              <MessageSquare className="w-4 h-4 text-[#B94A24] shrink-0" />
              <span className="truncate">{profileData.whatsapp.formattedNumber}</span>
            </a>
            <button
              onClick={() => handleCopy(profileData.whatsapp.number, "wa")}
              title="Salin Nomor WA"
              className="p-2 text-[#66625D] hover:text-[#121212] active:scale-95 transition-transform"
            >
              {copiedType === "wa" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="p-4 bg-[#FAF8F5] border border-[#E8E5E0] hover:border-[#121212]/30 rounded-xl flex items-center justify-between min-h-[52px] transition-colors">
            <a
              href={profileData.emailLink}
              className="flex items-center gap-3 text-[#121212] hover:text-[#B94A24] font-medium truncate"
            >
              <Mail className="w-4 h-4 text-[#B94A24] shrink-0" />
              <span className="truncate">{profileData.email}</span>
            </a>
            <button
              onClick={() => handleCopy(profileData.email, "email")}
              title="Salin Email"
              className="p-2 text-[#66625D] hover:text-[#121212] active:scale-95 transition-transform"
            >
              {copiedType === "email" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Floating Toast Notification Banner */}
        {copiedType && (
          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-5 py-3 bg-[#121212] text-white text-xs sm:text-sm font-mono rounded-full shadow-2xl border border-[#B94A24]/50 flex items-center gap-2 animate-bounce">
            <CheckCircle className="w-4 h-4 text-[#B94A24]" />
            <span>✓ {copiedType === "wa" ? "Nomor WA (+62 815-1552-6082)" : "Email (austinmikel72@gmail.com)"} berhasil disalin!</span>
          </div>
        )}

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="p-5 sm:p-8 bg-[#FAF8F5] border border-[#E8E5E0] rounded-2xl space-y-4 shadow-xs"
        >
          <h3 className="font-display font-bold text-lg sm:text-xl text-[#121212] mb-1">
            Kirim Pesan Langsung
          </h3>

          {status === "success" && (
            <div className="p-4 bg-white border border-emerald-600 text-emerald-800 text-sm rounded-lg flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {status === "error" && (
            <div className="p-4 bg-white border border-rose-600 text-rose-800 text-sm rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-[#121212] mb-1">
                Nama Lengkap *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Nama Anda"
                className="w-full px-3.5 py-3 bg-white border border-[#E8E5E0] rounded-lg text-base sm:text-sm focus:outline-none focus:border-[#121212] text-[#121212]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[#121212] mb-1">
                Alamat Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="nama@email.com"
                className="w-full px-3.5 py-3 bg-white border border-[#E8E5E0] rounded-lg text-base sm:text-sm focus:outline-none focus:border-[#121212] text-[#121212]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-semibold text-[#121212] mb-1">
              Subjek Pesan
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Misal: Penawaran Kerja / Proyek Web"
              className="w-full px-3.5 py-3 bg-white border border-[#E8E5E0] rounded-lg text-base sm:text-sm focus:outline-none focus:border-[#121212] text-[#121212]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[#121212] mb-1">
              Pesan *
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tuliskan detail pesan Anda di sini..."
              className="w-full px-3.5 py-3 bg-white border border-[#E8E5E0] rounded-lg text-base sm:text-sm focus:outline-none focus:border-[#121212] text-[#121212]"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-[#121212] text-white hover:bg-[#B94A24] active:bg-[#9A3B1B] py-3.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-xs min-h-[44px]"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Mengirim Pesan...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Kirim Pesan</span>
              </>
            )}
          </button>

        </form>

        {/* Social Links Footer Row */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#66625D]">
          <span>Profil Sosial</span>
          <div className="flex items-center gap-4">
            <a
              href={profileData.linkedin.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B94A24] flex items-center gap-1.5 py-1 min-h-[36px]"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profileData.github.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B94A24] flex items-center gap-1.5 py-1 min-h-[36px]"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
