import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF8F5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://michaelaustin.me"),
  title: "Michael Austin — Developer PHP/Laravel & React",
  description: "Portofolio profesional Michael Austin. Fresh graduate Sistem Informasi Telkom University, PHP/Laravel & React Developer, BNSP System Analyst Certified.",
  authors: [{ name: "Michael Austin", url: "https://michaelaustin.me" }],
  keywords: [
    "Michael Austin",
    "Developer PHP",
    "Developer Laravel",
    "Developer React",
    "System Analyst BNSP",
    "Telkom University",
    "Portfolio Web"
  ],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Michael Austin — Developer PHP/Laravel & React",
    description: "Fresh graduate Sistem Informasi Telkom University berpengalaman membangun 5+ aplikasi web production & tersertifikasi BNSP System Analyst.",
    url: "https://michaelaustin.me",
    siteName: "Michael Austin Portfolio",
    images: [
      {
        url: "/foto-profil.png",
        width: 800,
        height: 800,
        alt: "Michael Austin - PHP/Laravel & React Developer"
      }
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Austin — Developer PHP/Laravel & React",
    description: "Fresh graduate Sistem Informasi Telkom University berpengalaman membangun 5+ aplikasi web production & tersertifikasi BNSP System Analyst.",
    images: ["/foto-profil.png"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAF8F5] text-[#121212] antialiased flex flex-col font-sans overflow-x-hidden selection:bg-[#B94A24] selection:text-white">
        {children}
      </body>
    </html>
  );
}
