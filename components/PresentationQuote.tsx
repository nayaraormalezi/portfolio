"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { site } from "@/lib/content";
import {
  buildQuote,
  formatBRL,
  quoteMessage,
  slideRate,
  tierLabel,
  whatsappHref,
  type AnimationChoice,
  type ContentChoice,
  type Deadline,
  type TemplateChoice,
} from "@/lib/quote";
import { Arrow } from "./Arrow";
import styles from "./PresentationQuote.module.css";

const deadlines: { value: Deadline; label: string; hint: string }[] = [
  { value: "3", label: "3 dias úteis", hint: "+ R$ 7 por slide" },
  { value: "5", label: "5 dias úteis", hint: "Sem acréscimo" },
];

const templates: { value: TemplateChoice; label: string; hint: string }[] = [
  { value: "ready", label: "Tenho um template pronto", hint: "Sem acréscimo" },
  {
    value: "new",
    label: "Quero um novo template",
    hint: "+ R$ 650",
  },
];

const contents: { value: ContentChoice; label: string; hint: string }[] = [
  { value: "ppt", label: "Conteúdo em PPT 100% pronto", hint: "Sem acréscimo" },
  { value: "other", label: "Conteúdo em outros formatos", hint: "+ R$ 5 por slide" },
  { value: "structure", label: "Preciso de estruturação do conteúdo", hint: "+ R$ 650" },
];

const animations: { value: AnimationChoice; label: string; hint: string }[] = [
  { value: "no", label: "Sem animação", hint: "Sem acréscimo" },
  { value: "yes", label: "Com animação", hint: "+ R$ 3 por slide" },
];

export function PresentationQuote() {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [slidesRaw, setSlidesRaw] = useState("10");
  const [deadline, setDeadline] = useState<Deadline>("5");
  const [template, setTemplate] = useState<TemplateChoice>("ready");
  const [content, setContent] = useState<ContentChoice>("ppt");
  const [animation, setAnimation] = useState<AnimationChoice>("no");
  const [note, setNote] = useState("");

  const slides = useMemo(() => {
    const parsed = Number.parseInt(slidesRaw, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
  }, [slidesRaw]);

  const quote = useMemo(
    () => buildQuote({ slides, deadline, template, content, animation, note }),
    [slides, deadline, template, content, animation, note],
  );

  const message = quoteMessage(
    { slides: quote.slides, deadline, template, content, animation, note },
    quote.total,
  );
  const href = whatsappHref(site.whatsapp, message);
  const ready = quote.slides > 0;

  useEffect(() => {
    if (!open) return;

    const dialog = dialogRef.current;
    const previous = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog?.querySelector<HTMLElement>("#slides")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !dialog) return;
      const nodes = [...dialog.querySelectorAll<HTMLElement>("button, a, input, textarea")].filter(
        (node) => !node.hasAttribute("disabled") && node.getAttribute("aria-disabled") !== "true",
      );
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previous?.focus();
    };
  }, [open]);

  return (
    <>
      <button className={styles.open} type="button" onClick={() => setOpen(true)}>
        Calcular orçamento
      </button>
      {open
        ? createPortal(
            <div className={styles.backdrop} onClick={() => setOpen(false)}>
              <div
                ref={dialogRef}
                className={styles.dialog}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                onClick={(event) => event.stopPropagation()}
              >
                <div className={styles.toolbar}>
                  <button
                    className={styles.close}
                    type="button"
                    aria-label="Fechar"
                    onClick={() => setOpen(false)}
                  >
                    ×
                  </button>
                </div>
                <div className={styles.calc} id="calculadora">
      <div className={styles.config}>
        <p className={styles.kicker}>Calculadora</p>
        <h3 id={titleId}>Design de apresentações</h3>
        <p className={styles.intro}>
          Configure o projeto e veja a estimativa na hora. O valor acompanha a
          quantidade de slides e o que o trabalho pede.
        </p>

        <div className={styles.field}>
          <label htmlFor="slides">Quantidade de slides</label>
          <input
            id="slides"
            inputMode="numeric"
            min={1}
            step={1}
            type="number"
            value={slidesRaw}
            onChange={(event) => setSlidesRaw(event.target.value.replace(/[^\d]/g, ""))}
          />
          <p className={styles.tier}>
            {ready
              ? `${tierLabel(slides)} · ${formatBRL(slideRate(slides))} por slide`
              : "Informe quantos slides a apresentação tem."}
          </p>
        </div>

        <fieldset className={styles.group}>
          <legend>Prazo</legend>
          <div className={styles.options}>
            {deadlines.map((option) => (
              <label key={option.value} className={styles.option}>
                <input
                  type="radio"
                  name="prazo"
                  value={option.value}
                  checked={deadline === option.value}
                  onChange={() => setDeadline(option.value)}
                />
                <span>{option.label}</span>
                <small>{option.hint}</small>
              </label>
            ))}
          </div>
          <p className={styles.note}>
            O prazo começa após o recebimento de todos os materiais necessários
            para o projeto.
          </p>
        </fieldset>

        <fieldset className={styles.group}>
          <legend>Identidade visual</legend>
          <div className={styles.options}>
            {templates.map((option) => (
              <label key={option.value} className={styles.option}>
                <input
                  type="radio"
                  name="template"
                  value={option.value}
                  checked={template === option.value}
                  onChange={() => setTemplate(option.value)}
                />
                <span>{option.label}</span>
                <small>{option.hint}</small>
              </label>
            ))}
          </div>
          {template === "new" ? (
            <p className={styles.note}>
              Criação de uma nova identidade visual para a apresentação.
            </p>
          ) : null}
        </fieldset>

        <fieldset className={styles.group}>
          <legend>Conteúdo</legend>
          <div className={styles.options}>
            {contents.map((option) => (
              <label key={option.value} className={styles.option}>
                <input
                  type="radio"
                  name="conteudo"
                  value={option.value}
                  checked={content === option.value}
                  onChange={() => setContent(option.value)}
                />
                <span>{option.label}</span>
                <small>{option.hint}</small>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className={styles.group}>
          <legend>Animação</legend>
          <div className={styles.options}>
            {animations.map((option) => (
              <label key={option.value} className={styles.option}>
                <input
                  type="radio"
                  name="animacao"
                  value={option.value}
                  checked={animation === option.value}
                  onChange={() => setAnimation(option.value)}
                />
                <span>{option.label}</span>
                <small>{option.hint}</small>
              </label>
            ))}
          </div>
          {animation === "yes" ? (
            <p className={styles.note}>
              Animações de entrada, transição e composição dos elementos.
            </p>
          ) : null}
        </fieldset>

        <div className={styles.field}>
          <label htmlFor="nota">Quer adicionar alguma informação?</label>
          <textarea
            id="nota"
            rows={4}
            value={note}
            placeholder="Contexto, referências ou o que a apresentação precisa resolver."
            onChange={(event) => setNote(event.target.value)}
          />
        </div>
      </div>

      <aside className={styles.summary} aria-live="polite">
        <p className={styles.kicker}>Seu orçamento</p>
        <ul className={styles.lines}>
          {quote.lines.map((line) => (
            <li key={line.label}>
              <div>
                <p>{line.label}</p>
                {line.detail ? <small>{line.detail}</small> : null}
              </div>
              <strong>{formatBRL(line.amount)}</strong>
            </li>
          ))}
        </ul>
        <div className={styles.total}>
          <span>Total estimado</span>
          <strong>{formatBRL(quote.total)}</strong>
        </div>
        <p className={styles.disclaimer}>
          Estimativa de investimento. O orçamento final pode variar conforme a
          complexidade do projeto, volume de conteúdo, alterações e necessidades
          específicas.
        </p>
        <p className={styles.disclaimer}>
          Obs: Todas as entregas incluem até 3 rodadas de alterações. Ajustes
          adicionais serão orçados à parte.
        </p>
        <a
          className={`btn btn-primary ${styles.whatsapp}`}
          href={ready ? href : undefined}
          aria-disabled={!ready}
          target={ready ? "_blank" : undefined}
          rel={ready ? "noreferrer" : undefined}
          onClick={(event) => {
            if (!ready) event.preventDefault();
          }}
        >
          Falar comigo no WhatsApp
          <Arrow />
        </a>
      </aside>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
