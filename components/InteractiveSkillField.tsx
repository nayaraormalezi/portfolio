"use client";

import { useEffect, useRef } from "react";
import styles from "./InteractiveSkillField.module.css";

type Tier = "primary" | "secondary" | "tertiary";

type Tag = {
  label: string;
  tier: Tier;
  x: number;
  y: number;
  mx: number;
  my: number;
  float: number;
  mobile?: boolean;
};

const TAGS: Tag[] = [
  { label: "Product Design", tier: "primary", x: 36, y: 32, mx: 8, my: 18, float: 0, mobile: true },
  { label: "UX/UI", tier: "primary", x: 8, y: 24, mx: 4, my: 52, float: 1, mobile: true },
  { label: "Estratégia", tier: "primary", x: 60, y: 18, mx: 48, my: 6, float: 2, mobile: true },
  { label: "Experiência do cliente", tier: "primary", x: 1, y: 30, mx: 28, my: 46, float: 2, mobile: true },
  { label: "Figma", tier: "secondary", x: 70, y: 14, mx: 54, my: 32, float: 3, mobile: true },
  { label: "Design Systems", tier: "secondary", x: 54, y: 48, mx: 0, my: 0, float: 4 },
  { label: "Cursor", tier: "secondary", x: 10, y: 50, mx: 18, my: 74, float: 2, mobile: true },
  { label: "Claude Code", tier: "secondary", x: 30, y: 56, mx: 0, my: 0, float: 1 },
  { label: "IA", tier: "secondary", x: 74, y: 40, mx: 60, my: 62, float: 0, mobile: true },
  { label: "Miro", tier: "tertiary", x: 64, y: 62, mx: 0, my: 0, float: 3 },
  { label: "FigJam", tier: "tertiary", x: 42, y: 16, mx: 0, my: 0, float: 4 },
  { label: "Adobe", tier: "tertiary", x: 18, y: 16, mx: 0, my: 0, float: 2 },
  { label: "Prototipação", tier: "tertiary", x: 42, y: 44, mx: 0, my: 0, float: 0 },
  { label: "Pesquisa", tier: "tertiary", x: 78, y: 26, mx: 0, my: 0, float: 1 },
  { label: "Dados", tier: "tertiary", x: 24, y: 38, mx: 0, my: 0, float: 3 },
  { label: "Usabilidade", tier: "tertiary", x: 4, y: 38, mx: 0, my: 0, float: 4 },
];

export function InteractiveSkillField() {
  const glowRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const pointer = useRef({ x: 0, y: 0, inside: false });
  const glow = useRef({ x: 0, y: 0 });
  const nudge = useRef(TAGS.map(() => ({ x: 0, y: 0, near: 0 })));

  useEffect(() => {
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrowQuery = window.matchMedia("(max-width: 960px)");
    const hero = document.getElementById("inicio");
    if (!hero) return;

    let frame = 0;
    let active = false;
    let detach = () => {};

    const paint = () => {
      const field = glow.current;
      let aimX = 0;
      let aimY = 0;
      if (pointer.current.inside) {
        const rect = hero.getBoundingClientRect();
        const nx = (pointer.current.x - rect.left) / rect.width;
        const ny = (pointer.current.y - rect.top) / rect.height;
        aimX = (nx - 0.74) * 120;
        aimY = (ny - 0.4) * 86;
      }
      field.x += (aimX - field.x) * 0.042;
      field.y += (aimY - field.y) * 0.042;
      glowRef.current?.style.setProperty("transform", `translate3d(${field.x.toFixed(2)}px, ${field.y.toFixed(2)}px, 0)`);

      let moving = Math.hypot(aimX - field.x, aimY - field.y) > 0.35;

      TAGS.forEach((_, index) => {
        const element = tagRefs.current[index];
        const state = nudge.current[index];
        if (!element) return;
        const box = element.getBoundingClientRect();
        let offsetX = 0;
        let offsetY = 0;
        let near = 0;
        if (pointer.current.inside && box.width > 1) {
          const centerX = box.left + box.width / 2;
          const centerY = box.top + box.height / 2;
          const dx = centerX - pointer.current.x;
          const dy = centerY - pointer.current.y;
          const distance = Math.hypot(dx, dy) || 1;
          near = Math.max(0, 1 - distance / 150);
          offsetX = (dx / distance) * near * 6;
          offsetY = (dy / distance) * near * 6;
        }
        state.x += (offsetX - state.x) * 0.08;
        state.y += (offsetY - state.y) * 0.08;
        state.near += (near - state.near) * 0.08;
        element.style.setProperty("--nx", `${state.x.toFixed(2)}px`);
        element.style.setProperty("--ny", `${state.y.toFixed(2)}px`);
        element.style.setProperty("--near", state.near.toFixed(3));
        if (Math.hypot(state.x, state.y) > 0.25 || Math.abs(state.near) > 0.02) moving = true;
      });

      return moving || pointer.current.inside;
    };

    const tick = () => {
      frame = 0;
      if (!active) return;
      if (paint()) frame = requestAnimationFrame(tick);
    };

    const wake = () => {
      if (!frame && active) frame = requestAnimationFrame(tick);
    };

    const enable = () => {
      detach();
      cancelAnimationFrame(frame);
      frame = 0;
      active = !reduceQuery.matches && !narrowQuery.matches;
      glow.current = { x: 0, y: 0 };
      glowRef.current?.style.removeProperty("transform");
      nudge.current.forEach((state, index) => {
        state.x = 0;
        state.y = 0;
        state.near = 0;
        const element = tagRefs.current[index];
        element?.style.removeProperty("--nx");
        element?.style.removeProperty("--ny");
        element?.style.removeProperty("--near");
      });
      if (!active) return;

      const onMove = (event: PointerEvent) => {
        pointer.current = { x: event.clientX, y: event.clientY, inside: true };
        wake();
      };
      const onLeave = () => {
        pointer.current.inside = false;
        wake();
      };
      hero.addEventListener("pointermove", onMove);
      hero.addEventListener("pointerleave", onLeave);
      detach = () => {
        hero.removeEventListener("pointermove", onMove);
        hero.removeEventListener("pointerleave", onLeave);
      };
    };

    enable();
    reduceQuery.addEventListener("change", enable);
    narrowQuery.addEventListener("change", enable);
    return () => {
      active = false;
      cancelAnimationFrame(frame);
      detach();
      reduceQuery.removeEventListener("change", enable);
      narrowQuery.removeEventListener("change", enable);
    };
  }, []);

  return (
    <div className={styles.root}>
      <div ref={glowRef} className={styles.glow} />
      {TAGS.map((tag, index) => (
        <span
          key={tag.label}
          className={`${styles.slot} ${styles[`float${tag.float}`]} ${styles[tag.tier]} ${tag.mobile ? styles.mobile : ""}`}
          style={
            {
              "--x": `${tag.x}%`,
              "--y": `${tag.y}%`,
              "--mx": `${tag.mx}%`,
              "--my": `${tag.my}%`,
            } as React.CSSProperties
          }
        >
          <span
            className={styles.tag}
            ref={(element) => {
              tagRefs.current[index] = element;
            }}
          >
            {tag.tier !== "tertiary" ? <span className={styles.dot} /> : null}
            {tag.label}
          </span>
        </span>
      ))}
    </div>
  );
}
