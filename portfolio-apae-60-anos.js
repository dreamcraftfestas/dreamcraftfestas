/* DreamCraft Decorações — Portfólio APAE Limeira
   Galeria ampliável com navegação por teclado, setas e toque. */
(() => {
  "use strict";
  const links = Array.from(document.querySelectorAll(
    'a[data-lightbox="apae-project"], a[data-lightbox="certificado-apae"]'
  ));
  if (!links.length) return;
  const groups = new Map();
  links.forEach((link) => {
    const group = link.dataset.lightbox || "apae-project";
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push(link);
  });
  const overlay = document.createElement("div");
  overlay.className = "apae-lightbox";
  overlay.hidden = true;
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Visualizador de fotos");
  const image = document.createElement("img");
  image.className = "apae-lightbox-image";
  image.alt = "";
  const makeButton = (text, label, className) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = className;
    button.textContent = text;
    button.setAttribute("aria-label", label);
    return button;
  };
  const close = makeButton("×", "Fechar imagem", "apae-lightbox-close");
  const prev = makeButton("‹", "Imagem anterior", "apae-lightbox-prev");
  const next = makeButton("›", "Próxima imagem", "apae-lightbox-next");
  const counter = document.createElement("div");
  counter.className = "apae-lightbox-counter";
  counter.setAttribute("aria-live", "polite");
  overlay.append(image, close, prev, next, counter);
  document.body.appendChild(overlay);
  let activeGroup = [];
  let activeIndex = 0;
  let previousFocus = null;
  let touchStartX = null;
  function render() {
    const link = activeGroup[activeIndex];
    if (!link) return;
    const thumb = link.querySelector("img");
    image.src = link.href;
    image.alt = thumb ? thumb.alt : "Foto do evento";
    counter.textContent = `${activeIndex + 1} / ${activeGroup.length}`;
    prev.hidden = activeGroup.length < 2;
    next.hidden = activeGroup.length < 2;
  }
  function open(link) {
    activeGroup = groups.get(link.dataset.lightbox) || [link];
    activeIndex = Math.max(0, activeGroup.indexOf(link));
    previousFocus = document.activeElement;
    render();
    overlay.hidden = false;
    document.body.classList.add("apae-lightbox-open");
    close.focus();
  }
  function closeViewer() {
    overlay.hidden = true;
    image.removeAttribute("src");
    document.body.classList.remove("apae-lightbox-open");
    if (previousFocus && typeof previousFocus.focus === "function") previousFocus.focus();
  }
  function move(delta) {
    if (!activeGroup.length) return;
    activeIndex = (activeIndex + delta + activeGroup.length) % activeGroup.length;
    render();
  }
  links.forEach((link) => link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    open(link);
  }));
  close.addEventListener("click", closeViewer);
  prev.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
  overlay.addEventListener("click", (event) => { if (event.target === overlay) closeViewer(); });
  document.addEventListener("keydown", (event) => {
    if (overlay.hidden) return;
    if (event.key === "Escape") closeViewer();
    else if (event.key === "ArrowLeft") move(-1);
    else if (event.key === "ArrowRight") move(1);
  });
  overlay.addEventListener("touchstart", (event) => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
  overlay.addEventListener("touchend", (event) => {
    if (touchStartX === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 50) move(delta < 0 ? 1 : -1);
    touchStartX = null;
  }, { passive: true });
})();
