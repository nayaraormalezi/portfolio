"use client";

import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import Link from "next/link";
import { projects, type Project } from "@/lib/content";
import { Arrow } from "./Arrow";
import { SectionHeading } from "./SectionHeading";
import { WorkArt } from "./WorkArt";
import styles from "./SelectedWork.module.css";

function ProjectCard({ project }: { project: Project }) {
  return (
    <>
      <div className={styles.media}>
        {project.image ? (
          <img src={project.image.src} alt={project.image.alt} />
        ) : (
          <WorkArt visual={project.visual} />
        )}
      </div>
      <div className={styles.body}>
        <p className={styles.kicker}>
          <span>{project.index}</span>
          <span>{project.company}</span>
        </p>
        <h3>{project.title}</h3>
        <p className={styles.tags}>{project.tags.join(" · ")}</p>
        <p className={styles.cta}>
          Ver detalhes
          <Arrow />
        </p>
      </div>
    </>
  );
}

function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const drag = useRef<{ x: number; y: number } | null>(null);
  const count = projects.length;
  const current = projects[index];

  function go(next: number) {
    setIndex((next + count) % count);
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    drag.current = { x: event.clientX, y: event.clientY };
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    const dx = event.clientX - drag.current.x;
    const dy = event.clientY - drag.current.y;
    drag.current = null;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    go(index + (dx < 0 ? 1 : -1));
  }

  return (
    <div
      className={styles.carousel}
      style={{ "--count": count, "--index": index } as CSSProperties}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(index - 1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(index + 1);
        }
      }}
    >
      <p className="sr-only" aria-live="polite">
        Projeto {current.index} de {String(count).padStart(2, "0")}: {current.title}
      </p>
      <div
        className={styles.viewport}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          drag.current = null;
        }}
      >
        <div className={styles.track}>
          {projects.map((project, slide) => {
            const active = slide === index;
            return (
              <div key={project.slug} className={styles.slide} aria-hidden={!active}>
                <Link
                  href={`/projetos/${project.slug}`}
                  className={styles.row}
                  tabIndex={active ? undefined : -1}
                  inert={active ? undefined : true}
                >
                  <ProjectCard project={project} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.controls}>
        <button type="button" className={styles.navBtn} aria-label="Projeto anterior" onClick={() => go(index - 1)}>
          <Arrow direction="back" />
        </button>
        <p className={styles.count}>
          <span>{current.index}</span>
          <span aria-hidden="true">/</span>
          <span>{String(count).padStart(2, "0")}</span>
        </p>
        <button type="button" className={styles.navBtn} aria-label="Próximo projeto" onClick={() => go(index + 1)}>
          <Arrow />
        </button>
      </div>
    </div>
  );
}

export function SelectedWork({ variant = "list" }: { variant?: "carousel" | "list" }) {
  return (
    <section className="section" id="projetos" aria-labelledby="projetos-title">
      <div className="wrap">
        <div className="reveal">
          <SectionHeading
            id="projetos-title"
            index="04"
            title="Projetos selecionados"
            lede="Uma seleção de projetos que representam diferentes dimensões da minha atuação em design de produto."
          />
        </div>
        {variant === "carousel" ? (
          <ProjectCarousel />
        ) : (
          <div className={styles.list}>
            {projects.map((project, item) => (
              <Link
                key={project.slug}
                href={`/projetos/${project.slug}`}
                className={`${styles.row} reveal ${item % 2 === 1 ? styles.reverse : ""}`}
                style={{ transitionDelay: `${Math.min(item, 3) * 70}ms` }}
              >
                <ProjectCard project={project} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
