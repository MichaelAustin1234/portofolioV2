# AGENTS.md

Panduan ini untuk AI coding agent (Antigravity/Gemini, Claude Code, dll) yang bekerja di proyek ini. Baca sebelum membuat atau mengubah file apapun.

## Tentang Proyek

Website portofolio pribadi Michael Austin (michaelaustin.me) — fresh graduate Sistem Informasi Telkom University, developer PHP/Laravel/React. Tujuan: representasi profesional untuk pelamar kerja/magang, menonjolkan proyek, skill, dan latar belakang.

## Tech Stack

- Framework: Next.js (App Router), TypeScript
- Styling: Tailwind CSS
- Konten: data statis (JSON/TypeScript object atau MDX untuk bagian tulisan panjang) di dalam kode — TIDAK butuh database atau backend terpisah
- Form kontak: gunakan layanan pihak ketiga gratis (Formspree atau Web3Forms) via API call langsung dari client, jangan bangun backend sendiri untuk ini
- Deploy: Vercel (native, tanpa konfigurasi khusus)

## Data Personal & Kontak (Referensi Tetap)

- WhatsApp: 081515526082 (format link wa.me: `https://wa.me/6281515526082`, ganti 0 di depan dengan 62)
- Email: austinmikel72@gmail.com
- LinkedIn: linkedin.com/in/michael-austin-4676022b5
- GitHub: github.com/MichaelAustin1234
- Domain: michaelaustin.me
- Kota: Tangerang
- Live demo proyek UMKM Sitebuilder: https://sitebuilder-v2.vercel.app/

Gunakan data ini secara konsisten di seluruh bagian situs (Hero, Tentang, Kontak, footer, meta tag) — jangan buat data kontak berbeda-beda di tiap komponen.

## Struktur Halaman

1. **Landing/Hero** — nama "Michael Austin", tagline singkat (fresh graduate Sistem Informasi, developer PHP/Laravel/React), CTA ke bagian proyek/kontak
2. **Tentang** — ringkasan profil: fresh graduate Telkom University, pengalaman membangun 5+ aplikasi web production, tersertifikasi BNSP System Analyst, aktif sebagai Asisten Praktikum
3. **Pengalaman Kerja** — Asisten Praktikum (Telkom University, Sep 2023-Sep 2025), IT Developer Magang (Metropolitan Golden Management, Mar-Sep 2024)
4. **Proyek** — showcase dengan kartu/section per proyek, link demo & GitHub jika ada:
   - UMKM Sitebuilder (Feb-Apr 2026) — platform no-code untuk UMKM, Laravel + React/TypeScript/Tailwind
   - Ubi Bakar Cilembu (Mar-Jul 2025) — sistem inventory & keuangan real-time, PHP/Laravel, dipublikasikan sebagai karya ilmiah
   - Hotel Horison Ultima (Mar-Sep 2024) — modul manajemen hotel, PHP/Laravel
5. **Skill** — dikelompokkan per kategori (jangan satu list panjang):
   - Bahasa & Framework: PHP, Laravel, JavaScript, HTML, CSS, React, MySQL, SQL
   - Tools: Git, GitHub, Figma, Balsamiq, VS Code, Cisco Packet Tracer
   - Metodologi & Analisis: SDLC, Agile, Scrum, UML Diagram, ERD, Flowchart, Business Analysis, System Documentation, Network Fundamentals
   - Produktivitas & Data: Microsoft Office, Google Workspace, Data Visualization, Data Analysis
6. **Publikasi & Sertifikasi** — publikasi ilmiah Ubi Bakar Cilembu (Open Library Telkom University), BNSP System Analyst (Nov 2024), EPRT (Jun 2025), Alibaba Cloud Certification (Jan 2024)
7. **Kontak** — form kontak + link email (austinmikel72@gmail.com), LinkedIn, GitHub

## Prinsip Desain — WAJIB DIBACA, PALING PENTING

Ini representasi personal, jadi identitas visual harus mencerminkan karakter, bukan template generik yang terlihat sama dengan ribuan portfolio developer lain.

- **HINDARI pola default AI generik berikut** kecuali dipilih sadar dengan alasan kuat:
  1. Warna biru/ungu/indigo sebagai warna utama atau gradasi (paling sering muncul di portfolio developer, langsung terlihat "AI/template generik")
  2. Background krem hangat + serif display kontras tinggi + aksen terracotta
  3. Background nyaris hitam + satu aksen hijau/vermillion terang
  4. Layout ala broadsheet/koran — hairline rules, border-radius nol, kolom rapat
  5. **Tema "terminal/hacker/dashboard developer"** — dark mode + aksen neon (cyan/teal/hijau terang) + font monospace di semua elemen + notasi kode sebagai gimmick (`// label`, `MODE_X:`, `>_`) + badge/pill berikon seragam di banyak tempat. Ini cliché portfolio developer yang paling sering dihasilkan AI tools — JANGAN pakai kecuali benar-benar ada alasan personal kuat, bukan sekadar "kesan developer".
- Jangan gunakan hero layout terpusat-standar (judul besar kiri + kartu foto kanan + badge di bawah) sebagai default tanpa dipikir ulang — ini pola paling umum di portfolio AI-generated. Eksplorasi layout asimetris atau struktur berbeda.
- Batasi penggunaan badge/pill berikon — kalau dipakai di lebih dari 2-3 tempat berbeda, itu tanda desainnya mengandalkan komponen template, bukan hierarki visual yang dirancang sengaja.
- Sebelum implementasi, tulis dulu rencana desain singkat: palet warna (4-6 hex bernama), pasangan tipografi (display + body + utility), konsep layout, dan satu signature element/detail yang jadi ciri khas.
- Pertimbangkan karakter personal yang relevan: developer dengan latar belakang analisis sistem (ERD/UML) dan pengalaman mengajar — bisa dieksplorasi lewat elemen visual yang mencerminkan ketelitian/struktur (bukan berarti harus jadi visual "teknis kaku", tapi punya alasan desain yang genuinely personal, bukan template acak).
- Cek diri sendiri sebelum coding: apakah rencana desain ini genuinely spesifik untuk portofolio developer ini, atau jawaban template yang sama untuk semua portfolio developer manapun? Kalau generik, revisi dulu.

**Penanda AI-generic lain yang harus dihindari:**
- Copywriting hero klise ("Building the future through code", "Turning ideas into reality", "Passionate developer creating digital solutions") — tulis kalimat yang spesifik dan faktual tentang Michael, bukan jargon inspirasional kosong.
- Glassmorphism berlebihan (kartu blur transparan + border tipis di mana-mana), apalagi dikombinasikan dengan background gradient/blob warna-warni — hindari kecuali benar-benar bagian dari konsep yang disengaja.
- Grid fitur seragam (ikon dalam lingkaran + judul + deskripsi, diulang identik 3-4 kali tanpa variasi hierarki) — kalau pakai grid kartu, beri variasi ukuran/penekanan, jangan semua kartu terlihat sama persis.
- **Baris statistik/angka pencapaian 3-kolom sejajar** (mis. "5+ Aplikasi / 2 Thn Pengalaman / BNSP Sertifikasi" berjajar rapi identik) — ini pola SaaS/portfolio yang sangat umum. Kalau ingin menonjolkan pencapaian, cari cara penyajian yang tidak berbentuk kartu/kolom seragam.
- Animasi fade-in-up yang diterapkan ke HAMPIR SEMUA elemen saat scroll — pilih momen yang benar-benar butuh animasi, jangan jadikan default di setiap section.
- Font selalu Inter/Poppins dipakai untuk display heading, body, DAN label sekaligus tanpa variasi — pasangan tipografi harus benar-benar dipilih untuk konsep ini, bukan default aman.

**PENTING — ganti warna saja BUKAN solusi:** kalau desain ditolak karena termasuk pola terlarang (mis. poin 3 atau 5 di atas), memperbaikinya dengan hanya mengganti warna aksen (mis. cyan jadi oranye) tanpa mengubah STRUKTUR/KOMPOSISI (layout hero, penempatan elemen, jumlah dan bentuk badge/kartu) TIDAK dianggap selesai. Evaluasi ulang harus mencakup struktur dan komposisi secara independen dari pilihan warna — pola "dark background + satu warna aksen cerah + hero split foto-teks + badge/kartu berjajar" tetap generik apapun warna aksennya.

- **Navbar generik**: kotak/lingkaran berisi inisial nama (mis. "MA") sebagai logo + nama + subtitle peran, diikuti nav links di tengah, lalu tombol CTA rounded di kanan — ini struktur navbar template yang sangat umum. Eksplorasi struktur navbar yang berbeda (mis. tanpa avatar-inisial, posisi elemen berbeda, treatment logo yang lebih personal).
- **Tombol CTA rounded-pill dengan ikon panah** ("Lihat Proyek →") — gaya tombol default SaaS/template. Kalau memakai CTA, beri treatment yang sesuai konsep desain yang dipilih, bukan bentuk pill standar dengan ikon panah otomatis.

- Responsif penuh (mobile-first), fokus keyboard terlihat jelas, hormati preferensi reduced-motion.
- Animasi/motion secukupnya dan bertujuan (reveal saat scroll, hover state) — jangan berlebihan.

## Fitur Tambahan Praktis

- **Download CV** — sediakan tombol/link download CV (PDF) di halaman Tentang dan/atau navbar. Taruh file CV di `public/cv-michael-austin.pdf`, link langsung ke situ (buka tab baru atau download attribute).
- **Optimasi gambar** — gunakan komponen `next/image` untuk semua gambar (bukan tag `<img>` biasa), supaya otomatis dioptimasi ukuran dan format.
- **Favicon custom** — pastikan ada favicon yang representasinya sesuai (bukan favicon default Next.js), taruh di `app/favicon.ico` atau lewat Metadata API.
- **Analitik (opsional)** — kalau ingin tahu jumlah pengunjung, bisa pasang Vercel Analytics (`@vercel/analytics`), tidak wajib tapi mudah diintegrasikan.

## README.md untuk Manusia (Terpisah dari AGENTS.md)

Di akhir proyek, buat `README.md` terpisah untuk pembaca manusia (bukan AI agent): deskripsi singkat proyek, screenshot halaman utama, cara install & run lokal (`npm install`, `npm run dev`), dan link demo live setelah deploy.

## SEO & Meta

- Title dan meta description yang jelas berisi nama dan peran ("Michael Austin — Developer PHP/Laravel & React")
- Open Graph tags (og:title, og:description, og:image) supaya tampil baik saat link dibagikan ke LinkedIn/WhatsApp
- Gunakan Next.js Metadata API untuk ini, bukan manual di setiap halaman

## Konvensi Kode

- TypeScript strict, hindari `any`
- Komponen dipisah per section (`components/hero/`, `components/proyek/`, `components/skill/`, dll)
- Data konten (proyek, skill, pengalaman) dipisah di file terstruktur sendiri (mis. `data/proyek.ts`, `data/pengalaman.ts`) — bukan hardcode langsung di komponen — supaya gampang diupdate saat CV/proyek berubah lagi nanti
- Styling hanya Tailwind utility classes, kecuali template butuh custom CSS untuk efek visual yang tidak bisa dicapai utility class standar

## Yang Harus Dihindari

- Jangan bangun backend/database sendiri untuk form kontak — pakai layanan pihak ketiga gratis
- Jangan hardcode data personal (proyek, pengalaman) tersebar di banyak komponen — sentralisasi di folder `data/`
- Jangan pakai palet biru/ungu generik atau pola AI generik lain yang disebutkan di atas

## Sebelum Menyelesaikan Task

- Cek semua halaman di ukuran layar mobile dan desktop
- Pastikan tidak ada console error
- Pastikan semua link eksternal (GitHub, LinkedIn, demo proyek) benar dan terbuka di tab baru
- Pecah task besar jadi langkah kecil (mis. "buat section Proyek" dulu, baru "buat section Skill") dan minta review tiap tahap
