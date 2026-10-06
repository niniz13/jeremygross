"use client";

import { useEffect, useRef } from "react";

/**
 * Petite pastille en verre dépoli qui suit la souris (décalée de 20px),
 * avec un ressort (stiffness 400, damping 100) comme sur le site Framer.
 */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches) return;

    const OFFSET = 20;
    const K = 400;
    const C = 100;
    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    const vel = { x: 0, y: 0 };
    let raf = 0;
    let last = 0;
    let shown = false;

    const tick = (t: number) => {
      const dt = Math.min((t - (last || t)) / 1000, 1 / 30);
      last = t;
      let moving = false;
      for (const k of ["x", "y"] as const) {
        if (reduced.matches) {
          pos[k] = target[k];
          vel[k] = 0;
          continue;
        }
        // Intégration semi-implicite, sous-pas pour la stabilité.
        const steps = 4;
        const h = dt / steps;
        for (let s = 0; s < steps; s++) {
          const a = -K * (pos[k] - target[k]) - C * vel[k];
          vel[k] += a * h;
          pos[k] += vel[k] * h;
        }
        if (Math.abs(pos[k] - target[k]) > 0.1 || Math.abs(vel[k]) > 0.1) moving = true;
      }
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, 0)`;
      raf = moving ? requestAnimationFrame(tick) : 0;
      if (!moving) last = 0;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      target.x = e.clientX + OFFSET;
      target.y = e.clientY + OFFSET;
      if (!shown) {
        pos.x = target.x;
        pos.y = target.y;
        shown = true;
        el.dataset.visible = "true";
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onDown = () => (el.dataset.pressed = "true");
    const onUp = () => delete el.dataset.pressed;
    const onLeave = () => {
      shown = false;
      delete el.dataset.visible;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div ref={ref} className="cursor glass" aria-hidden="true" />;
}
