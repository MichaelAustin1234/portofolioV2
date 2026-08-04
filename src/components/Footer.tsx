import { profileData } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-3.5 sm:py-4 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#A19B95]">
        <p className="text-white/90 font-medium tracking-tight">
          © {new Date().getFullYear()} Michael Austin ({profileData.domain}). All rights reserved.
        </p>
        <p className="font-mono text-[11px] sm:text-xs">
          Built with Next.js, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
