"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <footer className="bg-[#0b0b0b] text-slate-500">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <p className="text-sm md:text-base">© Vibe Coder. Все права защищены</p>
            <div className="md:justify-self-end">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="rounded-lg border border-slate-800/40 bg-slate-900/30 px-4 py-2 text-slate-400 transition-all duration-200 hover:border-cyan-400/50 hover:text-cyan-300"
              >
                Политика конфиденциальности
              </button>
            </div>
          </div>
        </div>
      </footer>

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="privacy-modal-title"
            className="relative w-full max-w-md overflow-hidden rounded-xl border border-slate-800/40 bg-[#121212] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Закрыть"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-slate-500 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 16 16" className="h-5 w-5" fill="none" aria-hidden>
                <path
                  d="M4 4l8 8M12 4l-8 8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="p-6 pt-8">
              <h2 id="privacy-modal-title" className="mb-4 text-xl font-bold text-white">
                Политика конфиденциальности
              </h2>

              <div className="mb-6 px-4 text-sm leading-relaxed text-slate-400">
                <p className="mb-4">
                  Мы ценим вашу приватность и не собираем персональные данные через сайт. Кнопка
                  „Напишите нам“ — это просто способ начать диалог: она открывает почтовый клиент
                  или мессенджер, и вы сами решаете, какую информацию указать в сообщении.
                </p>
                <p className="mb-4">
                  Если вы отправите нам письмо или сообщение, мы будем использовать указанные вами
                  данные только для ответа и обсуждения вашего запроса. Мы строго соблюдаем
                  требования ФЗ‑152, не передаём ваши контакты третьим лицам и не используем их для
                  рекламы или спама.
                </p>
                <p>
                  Вы полностью контролируете свои данные: в любой момент можете запросить информацию
                  о том, что у нас хранится, или попросить удалить её. Просто напишите нам — мы
                  оперативно всё сделаем.
                </p>
              </div>

              <a
                href="#contacts"
                onClick={() => setIsModalOpen(false)}
                className="inline-flex items-center gap-1.5 text-cyan-300 transition-colors duration-200 hover:text-white"
              >
                Написать нам
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
