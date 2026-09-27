import type { ReactNode } from "react";
import {
  certifications,
  courses,
  education,
  experience,
  site,
  skillGroups,
  trajectoryArc,
  trajectoryFocus,
  trajectoryIntro,
  trajectoryTools,
} from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import styles from "./Experience.module.css";

const jobClass = {
  lead: styles.jobLead,
  strong: styles.jobStrong,
  base: styles.jobBase,
} as const;

export function Experience({ children }: { children?: ReactNode }) {
  return (
    <section className={`${styles.band} ${styles.page} section`} id="trajetoria" aria-labelledby="trajetoria-title">
      <div className="wrap">
        {children}

        <div className={`${styles.intro} reveal`}>
          <div>
            <SectionHeading id="trajetoria-title" index="05" title="Minha trajetória" />
            <p className={styles.lede}>{trajectoryIntro}</p>
            <ul className={styles.focus}>
              {trajectoryFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <aside className={styles.aside}>
              <p className={styles.place}>{site.location}</p>
              <ul className={styles.asideLinks}>
                <li>
                  <a href={`mailto:${site.email}`}>E-mail</a>
                </li>
                <li>
                  <a href={site.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
              <a className={`btn btn-primary ${styles.download}`} href={site.resume} download="Nayara-Ormalezi-Curriculo.pdf">
                Baixar currículo PDF
                <span aria-hidden="true">↗</span>
              </a>
          </aside>
        </div>

        <ol className={styles.jobs}>
          {experience.map((item, index) => (
            <li key={item.org} className={`${styles.job} ${jobClass[item.emphasis]}`}>
              <div className={`${styles.meta} reveal`} style={{ transitionDelay: `${index * 80}ms` }}>
                <p className={styles.mark}>{item.index}</p>
                <p className={styles.when}>{item.time}</p>
              </div>
              <div className={`${styles.body} reveal`} style={{ transitionDelay: `${index * 80 + 140}ms` }}>
                <h3 className={styles.org}>{item.org}</h3>
                <p className={styles.position}>{item.role}</p>
                {item.summary.map((paragraph) => (
                  <p key={paragraph} className={styles.copy}>
                    {paragraph}
                  </p>
                ))}
                <p className={styles.kicker}>
                  {item.emphasis === "base" ? "Principais áreas de atuação" : "Principais frentes"}
                </p>
                <ul className={styles.fronts}>
                  {item.fronts.map((front) => (
                    <li key={front}>{front}</li>
                  ))}
                </ul>
                <ul className={styles.tags}>
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className={`${styles.evolution} reveal`}>
          <p>{trajectoryArc.line}</p>
          <ol>
            {trajectoryArc.steps.map((step, index) => (
              <li key={step}>
                {index > 0 ? <span aria-hidden="true">→</span> : null}
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.split}>
          <section className={`${styles.column} reveal`} aria-labelledby="formacao-title">
            <h3 id="formacao-title">Formação</h3>
            <ul className={styles.edu}>
              {education.map((item) => (
                <li key={item.title} className={item.current ? styles.current : undefined}>
                  <p className={styles.degree}>{item.title}</p>
                  <p className={styles.school}>{item.school}</p>
                  <p className={styles.status}>{item.status}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className={`${styles.column} ${styles.certs} reveal`} aria-labelledby="cert-title">
            <h3 id="cert-title">Certificações</h3>
            <ul>
              {certifications.map((item) => (
                <li key={item.title}>
                  <p>{item.title}</p>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className={`${styles.courses} reveal`} aria-labelledby="cursos-title">
          <h3 id="cursos-title">Cursos</h3>
          <ul>
            {courses.map((item) => (
              <li key={item.title}>
                <p>{item.title}</p>
                <p>{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={`${styles.competence} reveal`} aria-labelledby="competencias-title">
          <h3 id="competencias-title">Competências</h3>
          <div className={styles.groups}>
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h4>{group.title}</h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className={styles.tools}>
            <span>Ferramentas</span>
            {trajectoryTools}
          </p>
        </section>

        <section className={`${styles.close} reveal`} aria-labelledby="trajetoria-contato">
          <h3 id="trajetoria-contato">Quer conhecer meu trabalho mais de perto?</h3>
          <ul className={styles.closeLinks}>
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
                <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>
                E-mail
                <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href={site.resume} download="Nayara-Ormalezi-Curriculo.pdf">
                Baixar CV
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
