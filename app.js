/* ===================================================
   GRIP & GO — app.js
   GSAP + ScrollTrigger animations & interactions
   =================================================== */

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────────
   1. NAVBAR — Scroll State
────────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ──────────────────────────────────────────────────
   2. HERO ENTRANCE — Staggered cinematic reveal
────────────────────────────────────────────────── */
function initHero() {
  // Background image slow zoom
  gsap.to('.hero-bg-img', {
    scale: 1.12,
    duration: 14,
    ease: 'none',
  });

  // Text elements staggered
  const fadels = gsap.utils.toArray('.reveal-fade');
  fadels.forEach((el) => {
    const fd = parseFloat(el.style.getPropertyValue('--fd')) || 0;
    gsap.to(el, {
      y: 0, opacity: 1,
      duration: 0.9,
      ease: 'expo.out',
      delay: 0.2 + fd,
    });
  });

  // Hero cup float-in
  gsap.to('.hero-cup-float', {
    scale: 1, opacity: 1, y: 0,
    duration: 1.3, ease: 'expo.out', delay: 0.5,
  });

  // Floating badges pop
  gsap.to('.floating-badge', {
    scale: 1, opacity: 1,
    duration: 0.6, ease: 'back.out(2)',
    stagger: 0.2, delay: 1.0,
  });

  // Scroll indicator
  gsap.to('.hero-scroll-indicator', {
    y: 0, opacity: 1,
    duration: 0.7, ease: 'expo.out', delay: 1.4,
  });
}

/* ──────────────────────────────────────────────────
   3. SCROLL REVEALS — Generic classes
────────────────────────────────────────────────── */
function initScrollReveals() {
  // reveal-up
  gsap.utils.toArray('.reveal-up').forEach((el) => {
    const delay = parseFloat(el.style.getPropertyValue('--delay')) || 0;
    gsap.to(el, {
      y: 0, opacity: 1,
      duration: 0.9, ease: 'expo.out', delay,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  // reveal-left
  gsap.utils.toArray('.reveal-left').forEach((el) => {
    gsap.to(el, {
      x: 0, opacity: 1,
      duration: 1.0, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });

  // reveal-right
  gsap.utils.toArray('.reveal-right').forEach((el) => {
    gsap.to(el, {
      x: 0, opacity: 1,
      duration: 1.0, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });

  // reveal-img
  gsap.utils.toArray('.reveal-img').forEach((el) => {
    gsap.to(el, {
      scale: 1, opacity: 1, y: 0,
      duration: 1.2, ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });
}

/* ──────────────────────────────────────────────────
   4. GALLERY — Stagger entrance
────────────────────────────────────────────────── */
function initGallery() {
  const items = gsap.utils.toArray('.gallery-item');
  items.forEach((item, i) => {
    gsap.from(item, {
      y: 60, scale: 0.92, opacity: 0,
      duration: 0.85, ease: 'back.out(1.5)',
      delay: i * 0.08,
      scrollTrigger: { trigger: item, start: 'top 92%', once: true },
    });
  });
}

/* ──────────────────────────────────────────────────
   5. BRANDED SECTION — image float
────────────────────────────────────────────────── */
function initBrandedSection() {
  gsap.to('.branded-img', {
    y: -18,
    duration: 3.5,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
    scrollTrigger: { trigger: '.branded-section', start: 'top 70%' },
  });
}

/* ──────────────────────────────────────────────────
   6. SPECS TABLE — Stagger rows
────────────────────────────────────────────────── */
function initSpecsTable() {
  gsap.from('.specs-table tr', {
    x: 40, opacity: 0,
    duration: 0.55, stagger: 0.08, ease: 'power2.out',
    scrollTrigger: { trigger: '.specs-card', start: 'top 80%', once: true },
  });
}

/* ──────────────────────────────────────────────────
   7. LOGO BAR
────────────────────────────────────────────────── */
function initLogoBar() {
  gsap.from('.logo-item', {
    y: 18, opacity: 0,
    duration: 0.5, stagger: 0.07, ease: 'power2.out',
    scrollTrigger: { trigger: '.logo-bar-track', start: 'top 90%', once: true },
  });
}

/* ──────────────────────────────────────────────────
   8. TESTIMONIALS
────────────────────────────────────────────────── */
function initTestimonials() {
  gsap.from('.testimonial-card', {
    y: 60, opacity: 0,
    duration: 0.75, stagger: 0.14, ease: 'expo.out',
    scrollTrigger: { trigger: '.testimonials-section', start: 'top 80%', once: true },
  });
}

/* ──────────────────────────────────────────────────
   9. HERO CTA GLOW PULSE
────────────────────────────────────────────────── */
function initGlowPulse() {
  gsap.to('#hero-cta', {
    boxShadow: '0 0 50px rgba(201,147,58,0.8), 0 8px 32px rgba(201,147,58,0.45)',
    duration: 1.5,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
  });
}

/* ──────────────────────────────────────────────────
   10. LIFESTYLE SECTION — parallax bg
────────────────────────────────────────────────── */
function initLifestyleParallax() {
  gsap.to('.lifestyle-bg-img', {
    yPercent: -15,
    ease: 'none',
    scrollTrigger: {
      trigger: '.lifestyle-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2,
    },
  });
}

/* ──────────────────────────────────────────────────
   11. PROBLEM CARD ICON HOVER
────────────────────────────────────────────────── */
function initProblemCardHovers() {
  document.querySelectorAll('.problem-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card.querySelector('.prob-icon-wrap'), {
        rotation: -6, scale: 1.14, duration: 0.35, ease: 'back.out(2)',
      });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card.querySelector('.prob-icon-wrap'), {
        rotation: 0, scale: 1, duration: 0.35, ease: 'power2.out',
      });
    });
  });
}

/* ──────────────────────────────────────────────────
   12. BRANDED CUP HOVER PARALLAX
────────────────────────────────────────────────── */
function initBrandedHover() {
  const wrap = document.querySelector('.branded-img-wrap');
  if (!wrap) return;
  wrap.addEventListener('mousemove', (e) => {
    const rect = wrap.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    gsap.to('.branded-img', { rotateY: x, rotateX: -y, duration: 0.6, ease: 'power2.out' });
  });
  wrap.addEventListener('mouseleave', () => {
    gsap.to('.branded-img', { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power2.out' });
  });
}

/* ──────────────────────────────────────────────────
   13. SMOOTH SCROLL
────────────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const navMenu = document.getElementById('navMenu');
      if (navMenu && navMenu.classList.contains('show')) {
        document.querySelector('.navbar-toggler').click();
      }
    });
  });
}

/* ──────────────────────────────────────────────────
   14. PARALLAX — Mouse on hero
────────────────────────────────────────────────── */
function initHeroMouseParallax() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  hero.addEventListener('mousemove', (e) => {
    const xRatio = (e.clientX / window.innerWidth - 0.5) * 30;
    const yRatio = (e.clientY / window.innerHeight - 0.5) * 16;
    gsap.to('.hero-bg-img', { x: xRatio * 0.5, y: yRatio * 0.5, duration: 1.8, ease: 'power1.out' });
    gsap.to('.hero-cup-main', { x: xRatio * -0.4, y: yRatio * -0.3, duration: 1.4, ease: 'power1.out' });
  }, { passive: true });
}

/* ──────────────────────────────────────────────────
   15. QUOTE FORM HANDLER
────────────────────────────────────────────────── */
function handleQuote(e) {
  e.preventDefault();
  const btn = document.getElementById('quoteSubmitBtn');
  const success = document.getElementById('quoteSuccess');
  const form = document.getElementById('quoteForm');

  gsap.to(btn, { scale: 0.96, duration: 0.1, yoyo: true, repeat: 1 });
  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    Array.from(form.querySelectorAll('.row > .col-sm-6, .row > .col-12')).forEach(el => {
      if (!el.contains(success)) gsap.to(el, { opacity: 0, y: -10, duration: 0.3 });
    });
    setTimeout(() => {
      success.style.display = 'block';
      gsap.from(success, { y: 16, opacity: 0, duration: 0.6, ease: 'expo.out' });
    }, 350);
  }, 1200);
}

/* ──────────────────────────────────────────────────
   16. NEWSLETTER FORM HANDLER
────────────────────────────────────────────────── */
function handleNewsletter(e) {
  e.preventDefault();
  const btn = document.getElementById('nlSubmitBtn');
  const success = document.getElementById('nlSuccess');
  const form = document.getElementById('newsletterForm');

  btn.textContent = 'Joining...';
  btn.disabled = true;

  setTimeout(() => {
    gsap.to(form, { opacity: 0, y: -8, duration: 0.3 });
    setTimeout(() => {
      form.style.display = 'none';
      success.style.display = 'block';
      gsap.from(success, { y: 12, opacity: 0, duration: 0.5, ease: 'expo.out' });
    }, 350);
  }, 900);
}

/* ──────────────────────────────────────────────────
   17. CONTACT EMAIL FORM HANDLER
────────────────────────────────────────────────── */
function handleContactEmail(e) {
  e.preventDefault();
  const btn = document.getElementById('cfSubmitBtn');
  const btnText = document.getElementById('cfBtnText');
  const success = document.getElementById('cfSuccess');

  btnText.textContent = 'Sending...';
  btn.disabled = true;
  gsap.to(btn, { scale: 0.97, duration: 0.1, yoyo: true, repeat: 1 });

  setTimeout(() => {
    const form = document.getElementById('contactEmailForm');
    gsap.to(form.querySelectorAll('.row > div'), { opacity: 0, y: -10, duration: 0.3, stagger: 0.04 });
    setTimeout(() => {
      success.style.display = 'block';
      gsap.from(success, { y: 16, opacity: 0, duration: 0.6, ease: 'expo.out' });
    }, 400);
  }, 1100);
}

/* ──────────────────────────────────────────────────
   INIT EVERYTHING
────────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  initHero();
  initScrollReveals();
  initGallery();
  initBrandedSection();
  initSpecsTable();
  initLogoBar();
  initTestimonials();
  initGlowPulse();
  initLifestyleParallax();
  initProblemCardHovers();
  initBrandedHover();
  initSmoothScroll();
  initHeroMouseParallax();
});
