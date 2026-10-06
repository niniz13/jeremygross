"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // La copie de bouclage doit faire exactement innerHeight (≠ 100svh sur mobile).
    const syncHeight = () => root.style.setProperty("--loop-h", `${window.innerHeight}px`);
    syncHeight();

    const lenis = new Lenis({
      infinite: true,
      smoothWheel: true,
      syncTouch: true, // requis pour boucler au doigt
      lerp: reduced ? 1 : 0.1,
      autoRaf: true,
      anchors: true,
    });

    const onResize = () => {
      syncHeight();
      lenis.resize();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      lenis.destroy();
    };
  }, []);

  return null;
}
