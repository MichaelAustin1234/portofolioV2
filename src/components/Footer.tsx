import { profileData } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-10 text-sm">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <span className="font-display font-extrabold text-base tracking-tight text-white">
            {profileData.name}
          </span>
          <span className="text-[#66625D]">•</span>
          <span className="text-[#B94A24] font-medium">
            {profileData.role}
          </span>
        </div>

        <div className="text-center sm:text-right text-[#66625D] text-xs space-y-1">
          <p>© {new Date().getFullYear()} Michael Austin ({profileData.domain}). All rights reserved.</p>
          <p className="text-[11px] text-[#88837E]">Built with Next.js (App Router), TypeScript & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
}
