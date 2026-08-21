"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  "HTML5 / CSS3",
  "JavaScript",
  "Next.js",
  "Tailwind CSS",
  "Telegram Bot API",
  "Git",
  "Адаптивная вёрстка",
];

export default function About() {
  return (
    <section aria-labelledby="about-title" className="relative px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end gap-4"
        >
          <span className="font-mono text-sm tracking-[0.3em] text-accent-neon">01</span>
          <h2 id="about-title" className="text-3xl font-extrabold tracking-tight text-text-main md:text-4xl">
            Обо мне
          </h2>
        </motion.header>

        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-accent-neon/40 bg-bg-glass/70 p-2 shadow-[0_0_36px_rgba(0,229,255,0.18)] backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.35rem]">
                <Image
                  src="/images/maria-krause.jpg"
                  alt="Фото VIBE CODER"
                  width={420}
                  height={520}
                  className="h-auto w-full object-cover object-top grayscale contrast-125 brightness-90 transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:brightness-100"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-dark/70 via-transparent to-transparent" />
              </div>
            </div>

            <p className="mt-5 inline-flex items-center gap-3 rounded-full border border-accent-neon/25 bg-bg-glass/80 px-4 py-2 text-sm font-medium text-text-main backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-neon opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-neon shadow-[0_0_12px_#00E5FF]" />
              </span>
              Готова к проектам
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[1.75rem] border border-white/10 bg-bg-glass/60 p-8 shadow-[0_0_40px_rgba(0,229,255,0.08)] backdrop-blur-xl md:p-10"
          >
            <p className="border-l-2 border-accent-neon pl-5 text-lg font-medium leading-relaxed text-text-main md:text-xl">
              «Код должен помогать людям» — я в это верю. Я начинающий вайб‑кодер и уже делала вещи, которые работают в жизни, а не только в портфолио.
            </p>
            <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
              Мне близки проекты для малого бизнеса – когда одна фича экономит часы рутины или делает жизнь клиента проще. Люблю автоматизацию, чистые интерфейсы и код, который легко читать.
            </p>

            <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-accent-neon">
              Навыки
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5" aria-label="Технологии">
              {skills.map((skill) => (
                <li key={skill}>
                  <motion.span
                    whileHover={{ y: -3, borderColor: "rgba(0,229,255,0.8)" }}
                    className="inline-flex rounded-full border border-accent-neon/25 bg-bg-dark/60 px-3.5 py-1.5 text-sm font-medium text-text-main"
                  >
                    {skill}
                  </motion.span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
