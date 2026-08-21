/**
 * Maria Krause — Midnight Vibe Lab
 */

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Vibe Landing",
    stack: "HTML, CSS, JS",
    thumb: "https://placehold.co/900x400/1a3d38/7ee8d8?text=Vibe+Landing",
    image: "https://placehold.co/800x500/1a3d38/7ee8d8?text=Vibe+Landing",
    desc: "Атмосферный лендинг для стартапа с плавными анимациями и глубиной. Фокус на конверсию и эмоциональное восприятие бренда.",
    demo: "#",
    github: "https://github.com/",
    featured: true,
  },
  {
    id: 2,
    title: "Chat Bot UI",
    stack: "JavaScript, API",
    thumb: "https://placehold.co/600x380/264653/7ee8d8?text=Chat+Bot",
    image: "https://placehold.co/800x500/264653/7ee8d8?text=Chat+Bot",
    desc: "Прототип чат-бота с уникальным tone of voice. Быстрые ответы и дружелюбные подсказки для пользователя.",
    demo: "#",
    github: "https://github.com/",
  },
  {
    id: 3,
    title: "Mobile MVP",
    stack: "React Native",
    thumb: "https://placehold.co/600x380/3d2c1a/f4a261?text=Mobile+MVP",
    image: "https://placehold.co/800x500/3d2c1a/f4a261?text=Mobile+MVP",
    desc: "MVP приложения для теста гипотезы. Чистый UI и базовые сценарии onboarding.",
    demo: "#",
    github: "https://github.com/",
  },
];

// ——— Портфолио ———
function renderPortfolio() {
  const grid = document.getElementById("portfolio-grid");
  if (!grid || grid.children.length > 0) return;

  grid.innerHTML = PORTFOLIO_ITEMS.map((item, index) => {
    const num = String(index + 1).padStart(2, "0");
    const featuredClass = item.featured ? " portfolio-card--featured" : "";
    return `
    <article class="portfolio-card reveal${featuredClass}" data-id="${item.id}">
      <div class="portfolio-card__thumb">
        <span class="portfolio-card__num">${num}</span>
        <img src="${item.thumb}" alt="${item.title}" width="600" height="380" loading="lazy">
      </div>
      <div class="portfolio-card__body">
        <h3>${item.title}</h3>
        <p class="portfolio-card__stack">${item.stack}</p>
        <button type="button" class="btn btn--small btn--outline portfolio-open" data-id="${item.id}">
          Подробнее
        </button>
      </div>
    </article>
  `;
  }).join("");

  grid.querySelectorAll(".portfolio-open").forEach((btn) => {
    btn.addEventListener("click", () => openModal(Number(btn.dataset.id)));
  });
}

// ——— Модальное окно ———
const modal = document.getElementById("portfolio-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalStack = document.getElementById("modal-stack");
const modalImage = document.getElementById("modal-image");
const modalDemo = document.getElementById("modal-demo");
const modalGithub = document.getElementById("modal-github");

function openModal(id) {
  const item = PORTFOLIO_ITEMS.find((p) => p.id === id);
  if (!item || !modal) return;

  modalTitle.textContent = item.title;
  modalDesc.textContent = item.desc;
  modalStack.textContent = item.stack;
  modalImage.src = item.image;
  modalImage.alt = `Скриншот проекта ${item.title}`;
  modalDemo.href = item.demo;
  modalGithub.href = item.github;

  modal.hidden = false;
  document.body.style.overflow = "hidden";

  if (typeof gsap !== "undefined") {
    gsap.fromTo(
      ".modal-content",
      { opacity: 0, y: 30, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power3.out" }
    );
  }
}

function isAnyModalOpen() {
  const legalOpen = document.querySelector(".legal-modal:not([hidden])");
  const portfolioOpen = modal && !modal.hidden;
  return Boolean(legalOpen || portfolioOpen);
}

function closeModal() {
  if (!modal) return;
  modal.hidden = true;
  if (!isAnyModalOpen()) document.body.style.overflow = "";
}

modal?.querySelectorAll("[data-close-modal]").forEach((el) => {
  el.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal && !modal.hidden) closeModal();
});

// ——— Навигация ———
const header = document.querySelector(".header");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle?.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!open));
  navToggle.classList.toggle("is-active");
  navMenu?.classList.toggle("is-open");
});

navMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.classList.remove("is-active");
    navMenu?.classList.remove("is-open");
  });
});

window.addEventListener("scroll", () => {
  header?.classList.toggle("header--scrolled", window.scrollY > 40);
});

// ——— Курсор-свечение ———
function initCursorGlow() {
  const glow = document.getElementById("cursor-glow");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (!glow || prefersReduced || !finePointer) return;

  let x = 0;
  let y = 0;
  let cx = 0;
  let cy = 0;

  document.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
    document.body.classList.add("cursor-ready");
  });

  function tick() {
    cx += (x - cx) * 0.12;
    cy += (y - cy) * 0.12;
    glow.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(tick);
  }

  tick();
}

// ——— Магнитные кнопки ———
function initMagneticButtons() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  document.querySelectorAll("[data-magnetic]").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });
}

// ——— Частицы ———
function initParticles() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let w, h;

  function resize() {
    const hero = document.getElementById("hero");
    w = canvas.width = hero?.offsetWidth || window.innerWidth;
    h = canvas.height = hero?.offsetHeight || window.innerHeight;
  }

  function createParticles(count) {
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.5 + 0.15,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(61, 212, 195, ${p.opacity})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dist = Math.hypot(p.x - q.x, p.y - q.y);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(61, 212, 195, ${0.1 * (1 - dist / 100)})`;
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  }

  resize();
  createParticles(50);
  draw();
  window.addEventListener("resize", () => {
    resize();
    createParticles(50);
  });
}

// ——— Параллакс ———
function initParallax() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const orbs = document.querySelectorAll("[data-parallax]");
  const heroContent = document.querySelector(".hero-content");

  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;
      orbs.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0.15;
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
      if (heroContent && scrollY < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrollY * 0.06}px)`;
        heroContent.style.opacity = String(Math.max(0.2, 1 - scrollY / (window.innerHeight * 0.85)));
      }
    },
    { passive: true }
  );
}

// ——— GSAP ———
function initScrollAnimations() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".reveal").forEach((el, i) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 0.85,
      delay: (i % 3) * 0.06,
      ease: "power3.out",
    });
  });

  gsap.utils.toArray(".service-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: "top 92%" },
      opacity: 0,
      y: 40,
      rotate: i % 2 === 0 ? -1 : 1,
      duration: 0.7,
      delay: i * 0.05,
      ease: "power3.out",
    });
  });
}

// ——— Прогресс-бары ———
function initSkillBars() {
  const fills = document.querySelectorAll(".skill-bar__fill");
  if (!fills.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          fill.style.width = `${fill.dataset.width || 0}%`;
          observer.unobserve(fill);
        }
      });
    },
    { threshold: 0.3 }
  );

  fills.forEach((fill) => observer.observe(fill));
}

// ——— Форма обратной связи: нативная отправка через Formspree (без AJAX) ———
// JS не перехватывает submit — браузер отправляет POST на action формы.

// ——— Юридические модальные окна (футер) ———
function initLegalModals() {
  const modalMap = {
    privacy: document.getElementById("privacy-modal"),
  };

  const buttons = document.querySelectorAll(".footer-legal-btn[data-type]");
  if (!buttons.length) return;
  let activeTrigger = null;

  function syncTriggerState(openType = null) {
    buttons.forEach((btn) => {
      const isOpen = btn.dataset.type === openType;
      btn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  function openLegalModal(type, trigger) {
    const legalModal = modalMap[type];
    if (!legalModal) return;

    Object.values(modalMap).forEach((modalItem) => {
      if (modalItem && modalItem !== legalModal) modalItem.hidden = true;
    });

    legalModal.hidden = false;
    document.body.style.overflow = "hidden";
    activeTrigger = trigger || null;
    syncTriggerState(type);
    legalModal.querySelector(".legal-modal__close")?.focus();
  }

  function closeLegalModal(legalModal) {
    if (!legalModal) return;

    legalModal.hidden = true;
    syncTriggerState(null);
    if (activeTrigger) activeTrigger.focus();
    activeTrigger = null;
    if (!isAnyModalOpen()) document.body.style.overflow = "";
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => openLegalModal(btn.dataset.type, btn));
  });

  Object.values(modalMap).forEach((legalModal) => {
    if (!legalModal) return;

    legalModal.querySelectorAll("[data-close-legal]").forEach((el) => {
      el.addEventListener("click", () => closeLegalModal(legalModal));
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;

    const openLegal = document.querySelector(".legal-modal:not([hidden])");
    if (openLegal) closeLegalModal(openLegal);
  });
}

// ——— GIF-заполнитель в секции контактов ———
function initContactGifFiller() {
  const gifElement = document.querySelector(".contact-gif-filler");
  if (!gifElement) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gifElement.classList.add("is-visible");
          observer.unobserve(gifElement);
        }
      });
    },
    { threshold: 0.15 }
  );

  observer.observe(gifElement);
}

// ——— Старт ———
document.addEventListener("DOMContentLoaded", () => {
  renderPortfolio();
  initParticles();
  initParallax();
  initCursorGlow();
  initMagneticButtons();
  initScrollAnimations();
  initSkillBars();
  initLegalModals();
  initContactGifFiller();

  requestAnimationFrame(() => {
    document.body.classList.add("loaded");
  });
});
