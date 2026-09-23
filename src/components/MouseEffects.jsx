import { useEffect } from "react";

// Adds small, desktop-only reactions to the current section and card under
// the cursor. It deliberately uses CSS variables so pointer events do not
// cause React re-renders while the mouse moves.
export default function MouseEffects() {
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) return undefined;

    const root = document.documentElement;
    const body = document.body;
    let frameId = 0;
    let activeSection = null;
    let activeCard = null;
    let point = { x: -400, y: -400 };

    const clearSection = () => {
      if (!activeSection) return;
      activeSection.removeAttribute("data-mouse-active");
      activeSection = null;
    };

    const clearCard = () => {
      if (!activeCard) return;
      activeCard.removeAttribute("data-mouse-card");
      activeCard.style.removeProperty("--card-rotate-x");
      activeCard.style.removeProperty("--card-rotate-y");
      activeCard = null;
    };

    const updateEffects = () => {
      frameId = 0;
      root.style.setProperty("--mouse-x", `${point.x}px`);
      root.style.setProperty("--mouse-y", `${point.y}px`);

      const target = document.elementFromPoint(point.x, point.y);
      const nextSection = target?.closest("section") ?? null;
      const nextCard = target?.closest(".card-edge") ?? null;

      if (nextSection !== activeSection) {
        clearSection();
        activeSection = nextSection;
        activeSection?.setAttribute("data-mouse-active", "");
      }

      if (activeSection) {
        const rect = activeSection.getBoundingClientRect();
        activeSection.style.setProperty("--section-mouse-x", `${point.x - rect.left}px`);
        activeSection.style.setProperty("--section-mouse-y", `${point.y - rect.top}px`);
      }

      if (nextCard !== activeCard) {
        clearCard();
        activeCard = nextCard;
        activeCard?.setAttribute("data-mouse-card", "");
      }

      if (activeCard) {
        const rect = activeCard.getBoundingClientRect();
        const relativeX = (point.x - rect.left) / rect.width - 0.5;
        const relativeY = (point.y - rect.top) / rect.height - 0.5;
        activeCard.style.setProperty("--card-rotate-x", `${relativeY * -5}deg`);
        activeCard.style.setProperty("--card-rotate-y", `${relativeX * 5}deg`);
      }
    };

    const handlePointerMove = (event) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      point = { x: event.clientX, y: event.clientY };
      if (!frameId) frameId = window.requestAnimationFrame(updateEffects);
    };

    const clearEffects = () => {
      window.cancelAnimationFrame(frameId);
      frameId = 0;
      clearSection();
      clearCard();
    };

    const handlePointerOut = (event) => {
      if (!event.relatedTarget) clearEffects();
    };

    body.classList.add("mouse-effects-enabled");
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerout", handlePointerOut, { passive: true });
    window.addEventListener("blur", clearEffects);

    return () => {
      clearEffects();
      body.classList.remove("mouse-effects-enabled");
      root.style.removeProperty("--mouse-x");
      root.style.removeProperty("--mouse-y");
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("blur", clearEffects);
    };
  }, []);

  return null;
}
