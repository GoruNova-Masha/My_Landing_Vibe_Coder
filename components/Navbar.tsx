"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { href: "#about", label: "Обо мне" },
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [glow, setGlow] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    const sectionIds = ["#hero", "#about", "#services", "#portfolio", "#contacts"];

    const updateNavbarState = () => {
      setIsScrolled(window.scrollY > 16);

      const currentSection =
        sectionIds.findLast((id) => {
          const section = document.querySelector(id);

          if (!section) {
            return false;
          }

          const rect = section.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom > 140;
        }) ?? "#hero";

      setActiveSection(currentSection);
    };

    updateNavbarState();
    window.addEventListener("scroll", updateNavbarState, { passive: true });
    window.addEventListener("hashchange", updateNavbarState);

    return () => {
      window.removeEventListener("scroll", updateNavbarState);
      window.removeEventListener("hashchange", updateNavbarState);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-6"
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 -z-10 transition-all duration-500 ${
          isScrolled
            ? "h-32 bg-gradient-to-b from-accent-neon/10 via-bg-dark/85 to-transparent blur-2xl"
            : "h-24 bg-gradient-to-b from-bg-dark via-bg-dark/70 to-transparent"
        }`}
      />
      <motion.nav
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          setGlow({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
            visible: true,
          });
        }}
        onMouseLeave={() => setGlow((prev) => ({ ...prev, visible: false }))}
        className={`container relative isolate mx-auto flex overflow-hidden flex-col gap-3 rounded-[1.75rem] border px-4 py-4 transition-all duration-500 sm:px-6 md:flex-row md:items-center md:justify-between ${
          isScrolled
            ? "border-accent-neon/20 bg-bg-glass/75 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_64px_rgba(0,0,0,0.56),0_0_48px_rgba(0,229,255,0.18)] backdrop-blur-2xl"
            : "border-white/10 bg-bg-glass/70 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_18px_48px_rgba(0,0,0,0.45),0_0_36px_rgba(0,229,255,0.10)] backdrop-blur-2xl"
        }`}
      >
        <motion.div
          aria-hidden
          animate={{
            opacity: glow.visible ? 0.55 : 0,
            x: glow.x - 120,
            y: glow.y - 120,
          }}
          transition={{ type: "spring", stiffness: 180, damping: 22, mass: 0.6 }}
          className="pointer-events-none absolute h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.24)_0%,rgba(0,229,255,0.10)_28%,transparent_72%)] blur-2xl"
        />
        <Link
          href="#hero"
          className="group flex items-center gap-2 self-start text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:text-cyan-400 sm:text-base md:text-xl"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent-neon shadow-[0_0_12px_#00E5FF]" />
          <span className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(0,229,255,0.45)]">
            VIBE CODER
          </span>
        </Link>

        <div className="flex max-w-full items-center gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-4 md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={activeSection === item.href ? "page" : undefined}
              className={`group relative rounded-full px-3 py-2 whitespace-nowrap text-xs font-medium transition-all duration-300 sm:text-sm md:text-base ${
                activeSection === item.href ? "text-accent-neon" : "text-white/85 hover:text-cyan-400"
              }`}
            >
              <span
                className={`absolute inset-0 -z-10 rounded-full border transition-all duration-300 ${
                  activeSection === item.href
                    ? "border-accent-neon/35 bg-accent-neon/10 shadow-[0_0_22px_rgba(0,229,255,0.14)]"
                    : "border-transparent bg-transparent group-hover:border-white/10 group-hover:bg-white/5"
                }`}
              />
              <span className="relative">
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-accent-neon shadow-[0_0_10px_#00E5FF] transition-all duration-300 ${
                    activeSection === item.href ? "w-0" : "w-0 group-hover:w-full"
                  }`}
                />
              </span>
            </Link>
          ))}

          <Link
            href="#contacts"
            aria-current={activeSection === "#contacts" ? "page" : undefined}
            className={`rounded-full border px-4 py-2.5 text-xs font-medium whitespace-nowrap shadow-[0_0_18px_rgba(0,229,255,0.10)] transition-all duration-300 sm:px-5 sm:text-sm md:text-base ${
              activeSection === "#contacts"
                ? "border-accent-neon/70 bg-accent-neon/12 text-accent-neon shadow-[0_0_24px_rgba(0,229,255,0.24)]"
                : "border-accent-neon/35 bg-white/5 text-white hover:border-accent-neon/60 hover:bg-white/10 hover:text-accent-neon hover:shadow-[0_0_24px_rgba(0,229,255,0.24)]"
            }`}
          >
            Поработаем вместе
          </Link>
        </div>
      </motion.nav>
    </motion.header>
  );
}
