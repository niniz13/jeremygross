"use client";

import { useEffect } from "react";

/** Apparition des cartes à l'entrée dans le viewport (un seul observer). */
export default function Reveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        visible.forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          // Léger décalage entre les cartes qui apparaissent ensemble.
          el.style.transitionDelay = `${Math.min(i, 9) * 50}ms`;
          el.classList.add("is-in");
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -5% 0px" },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
