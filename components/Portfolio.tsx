"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  badge: string;
  description: string;
  buttonLabel: string;
  href: string;
  badgeIcon: "check" | "play" | "tools";
};

const projects: Project[] = [
  {
    title: "Лендинг психолога",
    badge: "В проде",
    description:
      "Лендинг для психолога: спроектировала конверсионную структуру и адаптивную вёрстку под мобильные устройства. Реализовала ключевые блоки для повышения заявок — сейчас проект в проде и стабильно приносит лиды",
    buttonLabel: "Открыть сайт",
    href: "http://ridzel-psyhologist.ru",
    badgeIcon: "check",
  },
  {
    title: "Игра «Associative Maze»",
    badge: "Демо доступно",
    description:
      "Associative Maze: браузерная головоломка с ассоциативными переходами между комнатами. Логика переходов и управление реализованы на чистом JS — попробуй демо, чтобы прочувствовать уникальную механику навигации",
    buttonLabel: "Играть в демо",
    href: "https://gorunova-masha.github.io/Associative-maze-game",
    badgeIcon: "play",
  },
  {
    title: "Чат-бот для кондитера",
    badge: "Локальный запуск",
    description:
      "Чат-бот для кондитера: снизил нагрузку на менеджера за счёт автоответов и формы заказа. Проект готов к деплою — в репозитории есть подробная инструкция, как запустить его за 3 минуты",
    buttonLabel: "GitHub (код + инструкция)",
    href: "https://gorunova-masha.github.io/ai_bot_tortiki_ot_oli",
    badgeIcon: "tools",
  },
];

function BadgeIcon({ type }: { type: Project["badgeIcon"] }) {
  if (type === "check") {
    return (
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
        <path
          d="M3.5 8.5 6.5 11.5 12.5 4.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "play") {
    return (
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
        <path d="M5 3.5v9l8-4.5-8-4.5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
      <path
        d="M3 4.5h10M3 8h10M3 11.5h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="10" y="10" width="3" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" className="ml-2 h-4 w-4" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="scroll-mt-28 bg-[#0b0b0b] px-6 pb-16 pt-28 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end gap-4"
        >
          <span className="font-mono text-sm tracking-[0.3em] text-accent-neon">03</span>
          <h2
            id="portfolio-title"
            className="text-3xl font-extrabold tracking-tight text-text-main md:text-4xl"
          >
            Портфолио
          </h2>
        </motion.header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group flex h-full flex-col rounded-xl border border-slate-800/30 p-6 transition-all duration-300 active:scale-100 md:hover:border-cyan-400/60 md:hover:shadow-[0_0_24px_rgba(85,239,255,0.15)]"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-800/60 bg-slate-800/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300 backdrop-blur-sm transition-all duration-300 md:group-hover:scale-105 md:group-hover:text-cyan-400 md:group-hover:shadow-[0_0_16px_rgba(85,239,255,0.2)]">
                <BadgeIcon type={project.badgeIcon} />
                {project.badge}
              </span>

              <h3 className="mt-4 text-xl font-bold leading-tight text-white">{project.title}</h3>

              <p className="mt-3 flex-1 text-sm text-slate-400 md:text-base">{project.description}</p>

              <span className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-cyan-400/40 bg-black/5 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-200 md:group-hover:border-cyan-400 md:group-hover:bg-cyan-900/20 md:group-hover:text-white">
                {project.buttonLabel}
                <ArrowIcon />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
