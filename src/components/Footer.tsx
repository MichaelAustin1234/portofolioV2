import { profileData } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-4 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center gap-1 text-center">
        <p className="text-white/90 font-medium tracking-tight text-xs sm:text-sm">
          © {new Date().getFullYear()} Michael Austin ({profileData.domain}). All rights reserved.
        </p>
        <p className="font-mono text-[11px] text-[#A19B95]">
          Built with Next.js, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
