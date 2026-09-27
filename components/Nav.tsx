"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/content";
import styles from "./Nav.module.css";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.89c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.55-1.17-2.96 0-1.41.74-2.1 1-2.39.26-.29.57-.36.76-.36h.55c.17 0 .41-.07.64.49.24.58.82 2 .89 2.15.07.14.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.28-.12.55.16.26.71 1.17 1.52 1.89 1.05.93 1.93 1.22 2.2 1.36.27.14.43.12.59-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.54.73 1.8.86.27.13.44.2.51.31.06.11.06.65-.18 1.33z"
      />
    </svg>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const marker = window.scrollY + window.innerHeight * 0.42;
      let current: string | null = null;
      for (const item of nav) {
        const section = document.getElementById(item.id);
        if (!section) continue;
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = item.id;
      }
      const atEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 8;
      if (atEnd && document.getElementById("contato")) current = "contato";
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const header = headerRef.current;
    const panel = panelRef.current;
    const button = menuBtnRef.current;
    if (!header || !panel || !button) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = () => [button, ...panel.querySelectorAll<HTMLElement>("a[href]")];
    const frame = window.requestAnimationFrame(() => {
      focusable()[1]?.focus();
    });

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const onPointer = (event: MouseEvent) => {
      if (!header.contains(event.target as Node)) setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 1100) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onPointer);
    window.addEventListener("resize", onResize);
    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onPointer);
      window.removeEventListener("resize", onResize);
      button.focus();
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${scrolled || open ? styles.scrolled : ""} ${open ? styles.open : ""}`}
    >
      <a className={styles.logo} href="/#inicio" onClick={() => setOpen(false)}>
        <span className={styles.full}>{site.name}</span>
        <span className={styles.short}>Nayara</span>
      </a>

      <nav className={styles.cluster} aria-label="Principal">
        {nav.map((item) =>
          item.href.startsWith("/#") ? (
            <a
              key={item.id}
              href={item.href}
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.id}
              href={item.href}
              aria-current={pathname === item.href || active === item.id ? "true" : undefined}
            >
              {item.label}
            </Link>
          ),
        )}
      </nav>

      <div className={styles.actions}>
        <a className={styles.chat} href={site.whatsappChat} target="_blank" rel="noreferrer">
          <WhatsAppIcon />
          Vamos conversar
        </a>
        <Link className={styles.resume} href="/curriculo">
          Mostrar currículo
          <span aria-hidden="true">↗</span>
        </Link>
        <button
          ref={menuBtnRef}
          className={styles.menuBtn}
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>

      <nav
        ref={panelRef}
        id={menuId}
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        aria-label="Menu"
        aria-hidden={!open}
        inert={!open}
      >
        <ul className={styles.list}>
          {nav.map((item, index) => {
            const current = active === item.id;
            const order = { "--i": index } as React.CSSProperties;
            const content = (
              <>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.name}>
                  {current ? <span className={styles.dot} /> : null}
                  {item.label}
                </span>
                <span className={styles.go} aria-hidden="true">
                  →
                </span>
              </>
            );
            return (
              <li key={item.id} className={styles.row} style={order}>
                {item.href.startsWith("/#") ? (
                  <a href={item.href} aria-current={current ? "true" : undefined} onClick={() => setOpen(false)}>
                    {content}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href || current ? "true" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <div className={styles.menuCtas}>
          <a
            className={`${styles.row} ${styles.menuChat}`}
            style={{ "--i": nav.length } as React.CSSProperties}
            href={site.whatsappChat}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <WhatsAppIcon />
            Conversar no WhatsApp
            <span aria-hidden="true">↗</span>
          </a>
          <Link
            className={`${styles.row} ${styles.menuCv}`}
            style={{ "--i": nav.length + 1 } as React.CSSProperties}
            href="/curriculo"
            onClick={() => setOpen(false)}
          >
            Mostrar currículo
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
