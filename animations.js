const FRESHA = "https://www.fresha.com/book-now/your-beauty-studio-c4y9gb9q/all-offer?share=true&pId=2849651";
const PHONE = "7059770927";

document.addEventListener("DOMContentLoaded", () => {
  initLenis();
  initScrollProgress();
  initHeader();
  initMobileMenu();
  initReveal();
  initBaScroll();
  initBaCompare();
  initBookTiles();
});

function initLenis() {
  if (typeof Lenis === "undefined") return;
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
  if (typeof gsap !== "undefined" && gsap.registerPlugin && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
}

function initScrollProgress() {
  const bar = document.querySelector(".scroll-progress span");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = h > 0 ? `${(window.scrollY / h) * 100}%` : "0%";
  }, { passive: true });
}

function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 60);
  }, { passive: true });
}

function initMobileMenu() {
  const btn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu-overlay");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    menu.classList.toggle("is-open");
    document.body.style.overflow = menu.classList.contains("is-open") ? "hidden" : "";
  });
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      document.body.style.overflow = "";
    });
  });
}

function initReveal() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
  gsap.utils.toArray("[data-reveal]").forEach((el) => {
    gsap.from(el, {
      y: 48, opacity: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
    });
  });
}

function initBaScroll() {
  const section = document.querySelector(".ba-scroll");
  const reveal = document.querySelector(".ba-scroll__reveal");
  if (!section || !reveal || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.to(reveal, {
    clipPath: "inset(0 0% 0 0)",
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=120%",
      pin: ".ba-scroll__pin",
      scrub: 0.6
    }
  });
}

function initBaCompare() {
  const root = document.querySelector(".ba-compare");
  if (!root) return;
  const after = root.querySelector(".ba-compare__after");
  const handle = root.querySelector(".ba-compare__handle");
  let dragging = false;

  function setPos(x) {
    const rect = root.getBoundingClientRect();
    let pct = ((x - rect.left) / rect.width) * 100;
    pct = Math.max(4, Math.min(96, pct));
    after.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    handle.style.left = `${pct}%`;
  }

  const move = (e) => { if (dragging) setPos(e.clientX || e.touches?.[0]?.clientX); };
  root.addEventListener("mousedown", () => { dragging = true; });
  root.addEventListener("touchstart", () => { dragging = true; }, { passive: true });
  window.addEventListener("mouseup", () => { dragging = false; });
  window.addEventListener("touchend", () => { dragging = false; });
  window.addEventListener("mousemove", move);
  root.addEventListener("touchmove", (e) => move(e), { passive: true });
  root.addEventListener("click", (e) => setPos(e.clientX));
  setPos(root.getBoundingClientRect().left + root.offsetWidth * 0.5);
}

function initBookTiles() {
  document.querySelectorAll("[data-book]").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (el.tagName === "A") return;
      window.open(FRESHA, "_blank", "noopener");
    });
  });
}
