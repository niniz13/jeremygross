"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import avatar from "@/assets/avatar.jpg";
import SocialLinks from "./SocialLinks";

const BIO =
  "Passionné de photographie automobile, je capture aussi bien des instants de vie urbaine que des paysages qui prennent le temps de respirer. Entre la vitesse des lignes d'une voiture et le calme d'un horizon, j'aime varier les regards et les ambiances à travers mon objectif.";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export default function Dock() {
  const [open, setOpen] = useState(false);
  const [canHover, setCanHover] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);

  // Survol sur souris (desktop), tap sur écran tactile (tablette / mobile).
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Largeur fermée = avatar + nom : mesurée pour pouvoir l'animer vers 320px.
  useIsoLayoutEffect(() => {
    const measure = () => {
      const name = nameRef.current;
      const panel = panelRef.current;
      if (!name || !panel) return;
      // padding 4×2 + avatar 36 + gap 8 + nom + padding-right 10
      const w = Math.ceil(name.getBoundingClientRect().width) + 62;
      panel.style.setProperty("--closed-w", `${w}px`);
    };
    measure();
    document.fonts?.ready.then(measure);
  }, []);

  // Tap en dehors : referme (tactile).
  useEffect(() => {
    if (canHover || !open) return;
    const onDown = (e: PointerEvent) => {
      if (!panelRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [canHover, open]);

  return (
    <aside className="dock" data-open={open} data-touch={!canHover}>
      <div
        ref={panelRef}
        className="dock-panel glass"
        onMouseEnter={canHover ? () => setOpen(true) : undefined}
        onMouseLeave={canHover ? () => setOpen(false) : undefined}
      >
        <button
          type="button"
          className="dock-head"
          aria-expanded={open}
          aria-controls="dock-bio"
          onClick={() => setOpen((o) => (canHover ? true : !o))}
          onFocus={canHover ? () => setOpen(true) : undefined}
        >
          <span className="dock-avatar">
            <Image
              src={avatar}
              alt=""
              fill
              sizes="60px"
              placeholder="blur"
              loading="eager"
              style={{ objectPosition: "53.6% 30.9%" }}
            />
          </span>
          <span className="dock-names">
            <span ref={nameRef} className="dock-name">
              Jérémy Gross
            </span>
            <span className="dock-sub">Photographe</span>
          </span>
        </button>

        <div className="dock-body" id="dock-bio">
          <div className="dock-body-inner">
            <div className="dock-card">
              <p className="dock-bio">{BIO}</p>
              {!canHover && <SocialLinks tabIndex={open ? 0 : -1} />}
            </div>
          </div>
        </div>
      </div>

      <div className="dock-socials glass">
        <SocialLinks />
      </div>
    </aside>
  );
}
