import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import type { CaseChapter, CaseStudyData, Stat } from "@/lib/cases";
import { CaseNav } from "./CaseNav";
import styles from "./CaseStudy.module.css";
import { BeforeAfter, FullWidthVisual, ImageGallery, ImageWithCaption, ScreenShowcase } from "./Visuals";

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function Figures({ items }: { items: Stat[] }) {
  return (
    <ul className={styles.figures}>
      {items.map((item) => (
        <li key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

function Meta({ study }: { study: CaseStudyData }) {
  const fields = study.facts ?? [
    { label: "Cliente", value: study.client },
    study.year ? { label: "Ano", value: study.year } : null,
    study.role ? { label: "Papel", value: study.role } : null,
    { label: "Disciplinas", value: study.disciplines },
    study.duration ? { label: "Duração", value: study.duration } : null,
    study.team ? { label: "Time", value: study.team } : null,
    study.tools?.length ? { label: "Ferramentas", value: study.tools } : null,
  ].filter((field) => field !== null);

  return (
    <section className={`${styles.meta} reveal`} aria-label="Resumo do projeto">
      <div className="wrap">
      <dl className={styles.metaList}>
        {fields.map((field) => (
          <div key={field.label}>
            <dt>{field.label}</dt>
            <dd>
              {Array.isArray(field.value) ? (
                <ul>
                  {field.value.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                field.value
              )}
            </dd>
          </div>
        ))}
      </dl>
      </div>
    </section>
  );
}

function Chapter({ chapter }: { chapter: CaseChapter }) {
  const tone = [
    chapter.tone === "emphasis" ? styles.challenge : styles.block,
    chapter.tone === "soft" ? styles.soft : "",
    chapter.tone === "statement" ? styles.statement : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={`${tone} reveal`} id={chapter.id} aria-labelledby={`${chapter.id}-title`}>
      <div className="wrap">
        <h2 id={`${chapter.id}-title`}>{chapter.title}</h2>
        {chapter.lead ? <p className={styles.lead}>{chapter.lead}</p> : null}
        {chapter.paragraphs?.map((paragraph) => (
          <p key={paragraph} className={styles.copy}>
            {paragraph}
          </p>
        ))}
        {chapter.bridge ? (
          <div className={styles.bridge}>
            <ul>
              {chapter.bridge.from.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <span aria-hidden="true">→</span>
            <p>{chapter.bridge.to}</p>
          </div>
        ) : null}
        {chapter.flow?.length ? (
          <ol className={styles.flow}>
            {chapter.flow.map((step, index) => (
              <li key={step}>
                {index > 0 ? <span aria-hidden="true">→</span> : null}
                {step}
              </li>
            ))}
          </ol>
        ) : null}
        {chapter.items?.length ? (
          <ul className={chapter.items.some((item) => item.text) ? styles.fronts : styles.slots}>
            {chapter.items.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                {item.text ? <p>{item.text}</p> : null}
              </li>
            ))}
          </ul>
        ) : null}
        {chapter.points?.length ? (
          <ul className={styles.points}>
            {chapter.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : null}
        {chapter.closing ? <p className={styles.copy}>{chapter.closing}</p> : null}
        {chapter.chips?.length ? (
          <ul className={styles.chips}>
            {chapter.chips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        ) : null}
        {chapter.visuals?.length === 1 ? (
          <FullWidthVisual source={chapter.visuals[0].source} caption={chapter.visuals[0].caption} />
        ) : null}
        {chapter.visuals && chapter.visuals.length > 1 ? (
          <ScreenShowcase
            frames={chapter.visuals.map((item) => ({ visual: item.source, caption: item.caption }))}
          />
        ) : null}
      </div>
    </section>
  );
}

export function CaseStudy({ study, next }: { study: CaseStudyData; next: CaseStudyData }) {
  const nav = [
    ...(study.chapters?.length ? [{ id: "visao", label: "Visão geral" }] : []),
    ...(study.chapters ?? [])
      .filter((chapter) => chapter.nav)
      .map((chapter) => ({ id: chapter.id, label: chapter.nav as string })),
  ];

  return (
    <article>
      <header className={styles.hero} id="visao">
        <div className="wrap">
          <Link className={`btn btn-ghost ${styles.back}`} href="/#projetos">
            <Arrow direction="back" />
            Voltar para projetos
          </Link>
          <div className={study.hero?.type === "art" ? styles.heroGrid : undefined}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>
                <span>{study.index}</span>
                <span>{study.client}</span>
                {study.year ? <span>{study.year}</span> : null}
              </p>
              <h1>{study.title}</h1>
              {study.headline ? <p className={styles.headline}>{study.headline}</p> : null}
              <p className={styles.disciplines}>{study.disciplines.join(" · ")}</p>
              {study.signals?.length ? (
                <ul className={styles.signals}>
                  {study.signals.map((signal) => (
                    <li key={signal}>{signal}</li>
                  ))}
                </ul>
              ) : null}
            </div>
            {study.hero?.type === "art" ? (
              <div className={`${styles.heroVisual} reveal`}>
                <FullWidthVisual source={study.hero} />
              </div>
            ) : null}
          </div>
          {study.hero?.type === "image" ? (
            <div className={`${styles.heroBand} reveal`}>
              <FullWidthVisual source={study.hero} />
            </div>
          ) : null}
        </div>
      </header>

      {nav.length > 1 ? <CaseNav items={nav} /> : null}

      <Meta study={study} />

      {study.intro ? (
        <section className={`${styles.intro} reveal`}>
          <div className="wrap">
            <p>{study.intro}</p>
            {study.site ? (
              <a href={study.site.href} target="_blank" rel="noreferrer">
                {study.site.label}
                <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        </section>
      ) : null}

      {study.chapters?.map((chapter) => (
        <Chapter key={chapter.id} chapter={chapter} />
      ))}

      {study.context ? (
        <section className={`${styles.block} reveal`} aria-labelledby="contexto-title">
          <div className="wrap">
            <h2 id="contexto-title">O contexto</h2>
            <div className={study.context.visual ? styles.context : undefined}>
              <div className={styles.copy}>
                {study.context.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {study.context.visual ? <FullWidthVisual source={study.context.visual} /> : null}
            </div>
          </div>
        </section>
      ) : null}

      {study.challenge ? (
        <section className={`${styles.challenge} reveal`} aria-labelledby="desafio-title">
          <div className="wrap">
            <h2 id="desafio-title">O desafio</h2>
            <p className={styles.lead}>{study.challenge.lead}</p>
            {study.challenge.paragraphs?.map((paragraph) => (
              <p key={paragraph} className={styles.copy}>
                {paragraph}
              </p>
            ))}
            {study.challenge.figures?.length ? <Figures items={study.challenge.figures} /> : null}
          </div>
        </section>
      ) : null}

      {study.contribution ? (
        <section className={`${styles.block} reveal`} aria-labelledby="papel-title">
          <div className="wrap">
            <h2 id="papel-title">Meu papel</h2>
            <div className={styles.copy}>
              {study.contribution.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {study.contribution.responsibilities?.length ? (
              <>
                <p className={styles.label}>Responsabilidades</p>
                <ul className={styles.pills}>
                  {study.contribution.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </section>
      ) : null}

      {study.objectives?.length ? (
        <section className={`${styles.block} ${styles.soft} reveal`} aria-labelledby="objetivos-title">
          <div className="wrap">
            <h2 id="objetivos-title">Objetivos</h2>
            <ol className={`${styles.objectives} stagger`}>
              {study.objectives.map((item, index) => (
                <li key={item}>
                  <span>{pad(index + 1)}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {study.process?.length ? (
        <section className={`${styles.block} reveal`} aria-labelledby="processo-title">
          <div className="wrap">
            {study.processLabel ? <h2 id="processo-title">{study.processLabel}</h2> : <h2 id="processo-title" className="sr-only">Investigação</h2>}
            <div className={styles.process}>
              {study.process.map((step) => (
                <article key={step.title}>
                  <h3>{step.title}</h3>
                  {step.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {step.points?.length ? (
                    <ul>
                      {step.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                  {step.visual ? <FullWidthVisual source={step.visual} /> : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {study.decisions?.length ? (
        <section className={`${styles.block} reveal`} aria-labelledby="decisoes-title">
          <div className="wrap">
            <h2 id="decisoes-title">Decisões</h2>
            <ol className={styles.decisions}>
              {study.decisions.map((item, index) => (
                <li key={item.insight}>
                  <div>
                    <p className={styles.label}>Insight {pad(index + 1)}</p>
                    <p>{item.insight}</p>
                  </div>
                  <span aria-hidden="true">→</span>
                  <div>
                    <p className={styles.label}>Decisão</p>
                    <p>{item.decision}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {study.solution ? (
        <section className={`${styles.block} reveal`} aria-labelledby="solucao-title">
          <div className="wrap">
            <h2 id="solucao-title">A solução</h2>
            {study.solution.paragraphs?.map((paragraph) => (
              <p key={paragraph} className={styles.copy}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className={styles.stage}>
            {study.solution.frames.length > 1 ? (
              <ScreenShowcase frames={study.solution.frames} />
            ) : study.solution.frames[0]?.caption ? (
              <ImageWithCaption source={study.solution.frames[0].visual} caption={study.solution.frames[0].caption} />
            ) : study.solution.frames[0] ? (
              <FullWidthVisual source={study.solution.frames[0].visual} />
            ) : null}
          </div>
        </section>
      ) : null}

      {study.beforeAfter ? (
        <section className={`${styles.block} reveal`} aria-label="Antes e depois">
          <div className="wrap">
            <BeforeAfter
              before={study.beforeAfter.before}
              after={study.beforeAfter.after}
              beforeLabel={study.beforeAfter.beforeLabel}
              afterLabel={study.beforeAfter.afterLabel}
            />
          </div>
        </section>
      ) : null}

      {study.results ? (
        <section className={`${styles.challenge} reveal`} aria-labelledby="resultados-title">
          <div className="wrap">
            <h2 id="resultados-title">Resultados</h2>
            {study.results.figures?.length ? <Figures items={study.results.figures} /> : null}
            {study.results.paragraphs?.map((paragraph) => (
              <p key={paragraph} className={styles.copy}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ) : null}

      {study.learnings?.length ? (
        <section className={`${styles.block} reveal`} aria-labelledby="aprendizados-title">
          <div className="wrap">
            <h2 id="aprendizados-title">O que eu levo deste projeto</h2>
            <ol className={styles.learnings}>
              {study.learnings.map((item, index) => (
                <li key={item}>
                  <span>{pad(index + 1)}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {study.gallery?.length ? (
        <section className={`${styles.gallery} reveal`} aria-label="Galeria">
          <div className={styles.stage}>
            {study.gallery.map((block, index) => (
              <ImageGallery key={`${block.layout}-${index}`} layout={block.layout} items={block.items} />
            ))}
          </div>
        </section>
      ) : null}

      <section className={`${styles.next} reveal`} aria-labelledby="proximo-title">
        <div className="wrap">
          <p className={styles.nextLabel} id="proximo-title">
            Próximo projeto
          </p>
          <Link className={styles.nextLink} href={`/projetos/${next.slug}`}>
            <FullWidthVisual source={next.cover} />
            <div>
              <p className={styles.kicker}>
                <span>{next.index}</span>
                <span>{next.client}</span>
              </p>
              <h2>{next.title}</h2>
              <p>{next.disciplines.join(" · ")}</p>
              <p className={styles.cta}>
                Ver próximo projeto
                <Arrow />
              </p>
            </div>
          </Link>
          <Link className={`btn btn-ghost ${styles.back}`} href="/#projetos">
            <Arrow direction="back" />
            Voltar para projetos
          </Link>
        </div>
      </section>
    </article>
  );
}
