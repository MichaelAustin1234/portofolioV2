"use client";

import { X, Layers, Database, Cpu, Layout, CheckCircle2 } from "lucide-react";

interface SystemBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

export default function SystemBlueprintModal({
  isOpen,
  onClose,
  projectTitle
}: SystemBlueprintModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#0F172A] border border-slate-700 rounded-2xl max-w-3xl w-full text-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#D97706]/20 text-[#D97706] flex items-center justify-center font-mono-spec font-bold text-xs">
              UML
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-white">
                Rancangan Arsitektur Sistem — {projectTitle}
              </h3>
              <span className="text-[11px] font-mono-spec text-slate-400">
                System Analyst Spec (BNSP Standard Modeling)
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Layered System Architecture Diagram */}
          <div className="space-y-4">
            <span className="text-xs font-mono-spec font-semibold text-[#D97706] uppercase tracking-wider block">
              // Layered Architecture Schema
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Layer 1: Presentation */}
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-[#D97706] font-mono-spec text-xs font-bold">
                  <Layout className="w-4 h-4" />
                  <span>1. Presentation Layer</span>
                </div>
                <h4 className="font-display font-semibold text-sm text-white">React & TypeScript</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Kustomisasi antarmuka visual real-time, state management modular, dan responsif Tailwind CSS.
                </p>
              </div>

              {/* Layer 2: Business Logic */}
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-[#D97706] font-mono-spec text-xs font-bold">
                  <Cpu className="w-4 h-4" />
                  <span>2. Business Logic Layer</span>
                </div>
                <h4 className="font-display font-semibold text-sm text-white">Laravel REST API Engine</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Validasi input, otorisasi pengguna, bisnis logika transaksi stok & keuangan, serta JWT/Sanctum Auth.
                </p>
              </div>

              {/* Layer 3: Relational Persistence */}
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-[#D97706] font-mono-spec text-xs font-bold">
                  <Database className="w-4 h-4" />
                  <span>3. Database & ERD Layer</span>
                </div>
                <h4 className="font-display font-semibold text-sm text-white">MySQL Relational Schema</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Relasi ter-normalisasi (1:N, N:M), indeks performa query, dan konsistensi transaksi ACID.
                </p>
              </div>

            </div>
          </div>

          {/* Key Analysis Highlights */}
          <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-xl space-y-3">
            <h4 className="font-display font-bold text-sm text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#D97706]" />
              <span>Metodologi Analisis & Dokumentasi Sistem</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>Pemodelan Use Case & Activity Diagram (UML)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>Perancangan ERD dengan Normalisasi 3NF</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>Spesifikasi Kebutuhan Fungsional & Non-Fungsional</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>Pengujian Sistem & Dokumentasi API Postman</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#D97706] hover:bg-[#B45309] text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors"
          >
            Tutup Pratinjau
          </button>
        </div>

      </div>
    </div>
  );
}
