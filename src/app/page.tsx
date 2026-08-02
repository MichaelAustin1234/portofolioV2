import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tentang from "@/components/Tentang";
import Pengalaman from "@/components/Pengalaman";
import Proyek from "@/components/Proyek";
import Skill from "@/components/Skill";
import Sertifikasi from "@/components/Sertifikasi";
import Kontak from "@/components/Kontak";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Tentang />
        <Pengalaman />
        <Proyek />
        <Skill />
        <Sertifikasi />
        <Kontak />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
