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
        setStatusMessage("Menghubungkan ke aplikasi email Anda...");
        window.location.href = profileData.emailLink;
      }
    } catch {
      setStatus("success");
      setStatusMessage("Membuka aplikasi email pengirim...");
      window.location.href = profileData.emailLink;
    }
  };

  return (
    <section id="kontak" className="py-20 bg-white border-b border-[#E8E5E0] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Toast Notification Banner */}
        {copiedType && (
          <div className="fixed bottom-8 right-8 z-50 px-4 py-3 bg-[#121212] text-white text-xs sm:text-sm font-medium rounded-xl shadow-xl border border-[#B94A24]/40 flex items-center gap-2.5">
            <CheckCircle className="w-4 h-4 text-[#B94A24] shrink-0" />
            <span>{copiedType === "wa" ? "Nomor WhatsApp disalin!" : "Email disalin!"}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Personal Context & Direct Links (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAF8F5] border border-[#E8E5E0] rounded-full text-xs font-medium text-[#121212]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Terbuka untuk Peluang Kerja & Proyek</span>
            </div>

            {/* Header */}
            <div className="space-y-3">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight leading-tight">
                Mari Berdiskusi
              </h2>
              <p className="text-base text-[#66625D] leading-relaxed">
                Punya penawaran posisi (Full-Time/Remote), proyek web, atau ingin berdiskusi mengenai analisis sistem? Jangan ragu untuk menghubungi saya.
              </p>
            </div>

            {/* Contact Method Cards */}
            <div className="space-y-3 pt-2">
              
              {/* WhatsApp Card */}
              <div className="p-4 bg-[#FAF8F5] border border-[#E8E5E0] hover:border-[#121212]/30 rounded-xl flex items-center justify-between transition-all group">
                <a
                  href={profileData.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-medium text-[#121212] group-hover:text-[#B94A24] truncate min-w-0"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#E8E5E0] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-[#B94A24]" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] text-[#66625D] uppercase tracking-wider font-semibold">WhatsApp</div>
                    <div className="truncate">{profileData.whatsapp.formattedNumber}</div>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(profileData.whatsapp.number, "wa")}
                  title="Salin Nomor WA"
                  className="p-2 text-[#66625D] hover:text-[#121212] hover:bg-white rounded-lg transition-colors shrink-0 ml-2"
                >
                  {copiedType === "wa" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email Card */}
              <div className="p-4 bg-[#FAF8F5] border border-[#E8E5E0] hover:border-[#121212]/30 rounded-xl flex items-center justify-between transition-all group">
                <a
                  href={profileData.emailLink}
                  className="flex items-center gap-3 text-sm font-medium text-[#121212] group-hover:text-[#B94A24] truncate min-w-0"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#E8E5E0] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#B94A24]" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] text-[#66625D] uppercase tracking-wider font-semibold">Email Direct</div>
                    <div className="truncate">{profileData.email}</div>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(profileData.email, "email")}
                  title="Salin Email"
                  className="p-2 text-[#66625D] hover:text-[#121212] hover:bg-white rounded-lg transition-colors shrink-0 ml-2"
                >
                  {copiedType === "email" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

            </div>

            {/* Social Links & Meta Info */}
            <div className="pt-4 border-t border-[#E8E5E0]">
              <div className="flex items-center gap-3">
                <a
                  href={profileData.linkedin.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#FAF8F5] border border-[#E8E5E0] hover:border-[#121212] text-xs font-medium text-[#121212] rounded-lg transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profileData.github.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#FAF8F5] border border-[#E8E5E0] hover:border-[#121212] text-xs font-medium text-[#121212] rounded-lg transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Form (7 Cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 bg-[#FAF8F5] border border-[#E8E5E0] rounded-2xl space-y-5 shadow-xs"
            >
              <div>
                <h3 className="font-display font-bold text-xl text-[#121212]">
                  Kirim Pesan Langsung
                </h3>
                <p className="text-xs text-[#66625D] mt-1">
                  Pesan Anda akan langsung dikirimkan ke kotak masuk email saya.
                </p>
              </div>

              {status === "success" && (
                <div className="p-4 bg-white border border-emerald-600/40 text-emerald-800 text-sm rounded-xl flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-white border border-rose-600/40 text-rose-800 text-sm rounded-xl flex items-center gap-2.5">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#121212] mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama Anda"
                    className="w-full px-3.5 py-3 bg-white border border-[#E8E5E0] rounded-xl text-sm focus:outline-none focus:border-[#121212] focus:ring-1 focus:ring-[#121212] text-[#121212] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#121212] mb-1.5">
                    Alamat Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@email.com"
                    className="w-full px-3.5 py-3 bg-white border border-[#E8E5E0] rounded-xl text-sm focus:outline-none focus:border-[#121212] focus:ring-1 focus:ring-[#121212] text-[#121212] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-[#121212] mb-1.5">
                  Subjek Pesan
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Misal: Penawaran Kerja / Proyek Web"
                  className="w-full px-3.5 py-3 bg-white border border-[#E8E5E0] rounded-xl text-sm focus:outline-none focus:border-[#121212] focus:ring-1 focus:ring-[#121212] text-[#121212] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#121212] mb-1.5">
                  Pesan *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tuliskan detail pesan Anda di sini..."
                  className="w-full px-3.5 py-3 bg-white border border-[#E8E5E0] rounded-xl text-sm focus:outline-none focus:border-[#121212] focus:ring-1 focus:ring-[#121212] text-[#121212] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-[#121212] text-white hover:bg-[#B94A24] active:bg-[#9A3B1B] py-3.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-xs min-h-[44px]"
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
          </div>

        </div>

      </div>
    </section>
  );
}
