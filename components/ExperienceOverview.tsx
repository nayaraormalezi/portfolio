import Link from "next/link";
import { experience, trajectoryArc } from "@/lib/content";
import { Arrow } from "./Arrow";
import { SectionHeading } from "./SectionHeading";
import styles from "./Experience.module.css";

export function ExperienceOverview() {
  return (
    <section className={`${styles.band} section`} id="trajetoria" aria-labelledby="trajetoria-title">
      <div className="wrap">
        <div className="reveal">
          <SectionHeading
            id="trajetoria-title"
            index="05"
            title="Minha trajetória"
            lede={trajectoryArc.line}
          />
          <ol className={styles.steps}>
            {trajectoryArc.steps.map((step, index) => (
              <li key={step}>
                {index > 0 ? <span aria-hidden="true">→</span> : null}
                {step}
              </li>
            ))}
          </ol>
        </div>

        <ol className={styles.overview}>
          {experience.map((item) => (
            <li key={item.org} className={styles[item.emphasis]}>
              <p className={styles.time}>{item.time}</p>
              <div>
                <h3>{item.org}</h3>
                <p className={styles.role}>{item.role}</p>
              </div>
            </li>
          ))}
        </ol>

        <Link className={`btn btn-primary ${styles.more}`} href="/curriculo">
          Mostrar currículo
          <Arrow />
        </Link>
      </div>
    </section>
  );
}
