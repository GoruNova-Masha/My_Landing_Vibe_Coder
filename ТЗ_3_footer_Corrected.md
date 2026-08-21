## Задача
Собрать секцию контактов для лендинга Vibe Coder. Стек: Next.js (App Router) + TypeScript + Tailwind CSS. Стиль: «Монохромный техно». Добавить анимацию появления формы: плавное появление снизу с лёгким увеличением.

## Контент (строго на русском, не менять)

### Заголовок и подзаголовок (Вариант 1)
- Заголовок: «Готовы к проекту?»
- Подзаголовок: «Я — Vibe Coder. Расскажите задачу — предложу решение и сроки.»

### Контакты (левая колонка)
- Карточка 1: «Написать на почту» + `vibe_coder_2026@gmail.com` (`mailto:...`)
- Карточка 2: «Позвонить» + `+790603950` (`tel:+79060395050`)
- Стиль карточек:
  - `w-max`, `inline-flex`, `flex-col`, `gap-1`, `p-4`, `bg-slate-900/40`, `border border-slate-800/50`, `rounded-xl`, `backdrop-blur-md`, `hover:border-cyan-400/60`, `hover:shadow-[0_0_24px_rgba(85,239,255,0.15)]`, `transition-all duration-300`
  - `align-self: flex-start`
  - Текст: `text-white font-medium text-sm`, значение: `text-slate-400 text-xs`

### Форма (правая колонка)
- Обертка: `w-full max-w-[460px] mx-auto flex flex-col gap-4`
- Поля (input и textarea):
  - `w-full`, `bg-slate-950/40`, `border border-slate-800/50`, `text-white`, `placeholder-slate-500`, `rounded-xl`, `px-4 py-3`, `backdrop-blur-sm`
  - Фокус: `focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/60`
  - Textarea: `min-h-16`
- Кнопка «Отправить»:
  - `w-full`, `py-4`, `bg-transparent`, `border border-cyan-400/40`, `text-cyan-300`, `hover:bg-cyan-950/30`, `hover:border-cyan-400`, `hover:text-white`, `active:scale-[0.98]`, `transition-all duration-300`, `font-medium`
  - Текст: «Отправить →»

### Анимация появления формы
- Оберни форму в контейнер с классом: `animate-form-enter`
- В глобальные стили (globals.css) добавь:
  ```css
  @keyframes formEnter {
    from {
      opacity: 0;
      transform: translateY(24px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .animate-form-enter {
    animation: formEnter 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  }

