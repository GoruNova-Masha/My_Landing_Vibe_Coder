"use client";

import { FormEvent, useState } from "react";

/** Formspree endpoint. В кабинете Formspree получатель должен быть только m.nemnyaseva@gmail.com */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnpawpol";

/** Публичный адрес только для отображения и mailto — не использовать в fetch/Formspree */
const PUBLIC_EMAIL = "hello@vibecoder.studio";

type FormStatus = "idle" | "sending" | "success" | "error";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mb-1 h-5 w-5 text-cyan-300" fill="none" aria-hidden>
      <path
        d="M4 6.5h16v11H4v-11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m4.5 7 7.5 6 7.5-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mb-1 h-5 w-5 text-cyan-300" fill="none" aria-hidden>
      <path
        d="M7.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3A2 2 0 0 1 18.5 18.5 14.5 14.5 0 0 1 4 4a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mb-1 h-5 w-5 text-cyan-300" fill="none" aria-hidden>
      <path
        d="M21 5 3.5 11.5l5.2 1.9L17 8l-7.2 7.4 1.1 5.1L14 16.8 18.5 20 21 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const inputBaseClass =
  "w-full bg-slate-950/40 border border-slate-800/50 text-white placeholder-slate-500 rounded-xl px-4 py-3 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/60 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const contactCardClass =
  "w-max inline-flex flex-col gap-1 self-start p-4 bg-slate-900/40 border border-slate-800/50 rounded-xl backdrop-blur-md hover:border-cyan-400/60 hover:shadow-[0_0_24px_rgba(85,239,255,0.15)] transition-all duration-300";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const isSending = status === "sending";

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!name.trim()) {
      nextErrors.name = "Пожалуйста, укажите ваше имя";
    }

    if (!email.trim()) {
      nextErrors.email = "Пожалуйста, укажите ваш email";
    } else if (!email.includes("@")) {
      nextErrors.email = "Пожалуйста, укажите корректный email";
    }

    if (!message.trim()) {
      nextErrors.message = "Расскажите коротко о задаче";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Formspree error");
      }

      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contacts"
      aria-labelledby="contacts-title"
      className="scroll-mt-28 bg-[#0b0b0b]"
    >
      <div className="pt-12 md:pt-16" />
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <header className="mb-10 flex items-end gap-4 md:mb-12">
          <span className="font-mono text-sm tracking-[0.3em] text-accent-neon">04</span>
          <h2
            id="contacts-title"
            className="text-3xl font-extrabold tracking-tight text-text-main md:text-4xl"
          >
            Готовы к проекту?
          </h2>
        </header>
        <p className="mb-10 max-w-3xl text-sm text-slate-400 md:mb-12 md:text-base">
          Я — Vibe Coder. Расскажите задачу — предложу решение и сроки.
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <a href={`mailto:${PUBLIC_EMAIL}`} className={contactCardClass}>
              <MailIcon />
              <span className="text-sm font-medium text-white">Написать на почту</span>
              <span className="text-xs text-slate-400">{PUBLIC_EMAIL}</span>
            </a>

            <a href="tel:+79060395050" className={contactCardClass}>
              <PhoneIcon />
              <span className="text-sm font-medium text-white">Позвонить</span>
              <span className="text-xs text-slate-400">+79060395050</span>
            </a>

            <a
              href="https://t.me/maria_krausss"
              target="_blank"
              rel="noopener noreferrer"
              className={contactCardClass}
            >
              <TelegramIcon />
              <span className="text-sm font-medium text-white">Telegram</span>
              <span className="text-xs text-slate-400">@maria_krausss</span>
            </a>
          </div>

          <div className="flex flex-col items-center">
            <div className="form-with-led group relative w-full max-w-[460px] overflow-hidden animate-form-enter">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="relative z-[1] mx-auto flex w-full flex-col gap-4"
              >
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Ваше имя
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Ваше имя"
                    value={name}
                    disabled={isSending}
                    onChange={(event) => setName(event.target.value)}
                    className={`${inputBaseClass} ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name ? <p className="mt-1 text-sm text-red-400/70">{errors.name}</p> : null}
                </div>

                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Ваш email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Ваш email"
                    value={email}
                    disabled={isSending}
                    onChange={(event) => setEmail(event.target.value)}
                    className={`${inputBaseClass} ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email ? <p className="mt-1 text-sm text-red-400/70">{errors.email}</p> : null}
                </div>

                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Коротко о задаче (1–2 предложения)
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    placeholder="Коротко о задаче (1–2 предложения)"
                    value={message}
                    disabled={isSending}
                    onChange={(event) => setMessage(event.target.value)}
                    className={`${inputBaseClass} min-h-16 resize-y ${errors.message ? "border-red-500" : ""}`}
                  />
                  {errors.message ? (
                    <p className="mt-1 text-sm text-red-400/70">{errors.message}</p>
                  ) : null}
                </div>

                {status === "success" ? (
                  <p className="mb-4 text-sm text-cyan-300">
                    Спасибо! Я получил ваше сообщение и отвечу в течение 24 часов
                  </p>
                ) : null}

                {status === "error" ? (
                  <p className="mb-4 text-sm text-red-400">
                    Произошла ошибка при отправке. Попробуйте позже
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full border border-cyan-400/40 bg-transparent py-4 font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-950/30 hover:text-white active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSending ? "Отправляется..." : "Отправить →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
