"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden px-6 pb-24 pt-36 md:px-10 md:pt-40 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent-neon/20 blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-accent-neon/10 blur-[100px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-accent-neon/20 blur-xl" />
          <div className="group relative overflow-hidden rounded-[1.75rem] border border-accent-neon/50 bg-bg-glass/80 p-2 shadow-[0_0_40px_rgba(0,229,255,0.28)] backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[1.35rem]">
              <Image
                src="/images/maria-krause.jpg"
                alt="VIBE CODER — вайб-кодер"
                width={420}
                height={560}
                priority
                className="h-auto w-full object-cover object-top grayscale contrast-125 brightness-90 transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:brightness-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-accent-neon/10 mix-blend-multiply transition duration-700 group-hover:opacity-40" />
            </div>
            <span className="absolute bottom-5 left-5 rounded-full border border-accent-neon/40 bg-bg-dark/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-neon backdrop-blur-md">
              ✦ vibe
            </span>
          </div>
        </motion.div>

        <div className="relative z-10 flex flex-col items-center rounded-[2rem] border border-white/10 bg-bg-glass/35 px-6 py-8 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_48px_rgba(0,0,0,0.32),0_0_36px_rgba(0,229,255,0.08)] backdrop-blur-xl lg:items-start lg:px-10 lg:py-10 lg:text-left">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-accent-neon/60 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 right-10 h-32 w-32 rounded-full bg-accent-neon/10 blur-3xl"
          />
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-3 rounded-full border border-accent-neon/30 bg-bg-glass/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-accent-neon shadow-[0_0_18px_rgba(0,229,255,0.08)] backdrop-blur-md"
          >
            Портфолио вайб-кодера
          </motion.p>

          <motion.h1
            id="hero-title"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative z-20 mb-5 font-manrope text-3xl font-extrabold uppercase tracking-[0.08em] text-text-main sm:text-4xl md:text-5xl"
          >
            МАРИЯ ГОРЮНОВА
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-8 max-w-xl text-xl font-semibold leading-snug text-text-secondary md:text-2xl"
          >
            Чистый код, понятная логика, честный результат
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <motion.a
              href="#portfolio"
              whileHover={{ y: -4, boxShadow: "0 0 28px rgba(0,229,255,0.45)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-accent-neon bg-accent-neon px-8 py-4 text-base font-bold text-bg-dark transition"
            >
              Посмотреть проекты
            </motion.a>
            <motion.a
              href="#contacts"
              whileHover={{ y: -4, boxShadow: "0 0 24px rgba(0,229,255,0.35)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-accent-neon/60 bg-bg-glass/70 px-8 py-4 text-base font-bold text-accent-neon backdrop-blur-md transition"
            >
              Написать мне
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
