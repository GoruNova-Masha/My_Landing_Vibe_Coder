import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VIBE CODER: делаю проекты, которые держат ритм",
  description: "VIBE CODER — вайб-кодер. Портфолио, услуги и контакты.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`scroll-smooth ${manrope.variable}`}>
      <body className={`${inter.className} m-0 min-h-screen bg-bg-dark text-text-main antialiased`}>
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,255,0.08),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(0,229,255,0.05),transparent_40%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(0,229,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
