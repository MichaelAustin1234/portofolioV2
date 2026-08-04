import { profileData } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-8 text-sm border-t border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-1.5 text-xs sm:text-sm">
        <p className="text-white/90 font-medium tracking-tight">
          © {new Date().getFullYear()} Michael Austin ({profileData.domain}). All rights reserved.
        </p>
        <p className="text-xs text-[#A19B95] font-mono">
          Built with Next.js (App Router), TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
