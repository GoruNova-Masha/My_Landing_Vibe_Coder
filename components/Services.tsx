"use client";

import { motion } from "framer-motion";

const services = [
  {
    index: "01",
    title: "Цифровая визитка с вайбом",
    description:
      "Не просто контакты, а мини-история о вас. Добавляю анимации, стильный дизайн и интерактивные элементы, чтобы визитка запоминалась.",
  },
  {
    index: "02",
    title: "Атмосферные лендинги",
    description:
      "Создаю посадочные страницы, которые не только продают, но и создают настроение. Работаю с цветом, шрифтами и микроанимациями.",
  },
  {
    index: "03",
    title: "Чат-боты с характером",
    description:
      "Программирую ботов с уникальным голосом и стилем. Они могут шутить, поддерживать tone of voice бренда и делать общение приятнее.",
  },
  {
    index: "04",
    title: "Мобильные приложения-прототипы",
    description:
      "Разрабатываю MVP простого мобильного приложения для демонстрации идеи или тестирования гипотезы.",
  },
  {
    index: "05",
    title: "Интерактивные элементы для сайта",
    description:
      "Добавляю «изюминку»: анимированные кнопки, параллакс-эффекты, плавные переходы, чтобы пользователь получил удовольствие от взаимодействия.",
  },
];

export default function Services() {
  return (
    <section aria-labelledby="services-title" className="relative px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end gap-4"
        >
          <span className="font-mono text-sm tracking-[0.3em] text-accent-neon">02</span>
          <h2
            id="services-title"
            className="text-3xl font-extrabold tracking-tight text-text-main md:text-4xl"
          >
            Услуги
          </h2>
        </motion.header>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">
          {services.map((service, i) => (
            <motion.article
              key={service.index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-bg-glass/55 p-7 shadow-[0_0_30px_rgba(0,229,255,0.06)] backdrop-blur-xl transition-colors duration-300 hover:border-accent-neon/50 hover:shadow-[0_0_36px_rgba(0,229,255,0.2)] ${
                i === 0 ? "md:col-span-2 xl:col-span-4" : "xl:col-span-2"
              }`}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-neon/0 blur-3xl transition duration-500 group-hover:bg-accent-neon/20"
              />
              <span className="font-mono text-xs tracking-[0.28em] text-accent-neon">
                {service.index}
              </span>
              <h3 className="mt-4 text-xl font-bold text-text-main md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                {service.description}
              </p>
              <div className="mt-6 h-px w-12 bg-accent-neon/50 transition-all duration-300 group-hover:w-24 group-hover:bg-accent-neon" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
