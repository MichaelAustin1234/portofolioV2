"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tentang", href: "#tentang" },
    { name: "Pengalaman", href: "#pengalaman" },
    { name: "Proyek", href: "#proyek" },
    { name: "Skill", href: "#skill" },
    { name: "Sertifikasi", href: "#sertifikasi" },
    { name: "Kontak", href: "#kontak" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E5E0] py-3 shadow-xs"
          : "bg-[#FAF8F5] py-4 sm:py-5 border-b border-[#E8E5E0]"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Wordmark */}
        <a href="#hero" className="group py-1">
          <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#121212] group-hover:text-[#B94A24] transition-colors">
            Michael Austin
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#66625D]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#121212] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#B94A24] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Download CV Link */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profileData.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            download="CV-Michael-Austin.pdf"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#121212] hover:text-[#B94A24] underline underline-offset-4 decoration-[#B94A24]/40 hover:decoration-[#B94A24] transition-colors py-1"
          >
            <Download className="w-4 h-4 text-[#B94A24]" />
            <span>Download CV (PDF)</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle (Min 44px Touch Target) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-[#121212] hover:bg-[#E8E5E0] active:bg-[#D6D3D1] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer (iPhone & Android Touch Ready) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E5E0] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-base font-medium text-[#121212] hover:bg-white hover:text-[#B94A24] rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 border-t border-[#E8E5E0]">
            <a
              href={profileData.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              download="CV-Michael-Austin.pdf"
              className="inline-flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-[#121212] border border-[#121212] rounded-lg text-center hover:bg-[#121212] hover:text-white transition-colors"
            >
              <Download className="w-4 h-4 text-[#B94A24]" />
              <span>Download CV (PDF - 27KB)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
