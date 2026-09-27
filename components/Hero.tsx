import Link from "next/link";
import { site } from "@/lib/content";
import { Arrow } from "./Arrow";
import { InteractiveSkillField } from "./InteractiveSkillField";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="inicio" aria-labelledby="hero-title">
      <div className={styles.inner}>
        <h1 id="hero-title" className={styles.name}>
          <span>Nayara</span>
          <span>Ormalezi</span>
        </h1>
        <p className={styles.role}>{site.disciplines}</p>
        <div className={styles.split}>
          <p className={styles.statement}>{site.statement}</p>
          <div className={styles.aside}>
            <p className={styles.deck}>{site.deck}</p>
            <div className={styles.actions}>
              <a className="btn btn-primary" href="#projetos">
                Ir para projetos
                <Arrow />
              </a>
              <Link className="btn btn-ghost" href="/curriculo">
                Mostrar currículo
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
        <p className={styles.credit}>{site.credit}</p>
      </div>
      <div className={styles.map} aria-hidden="true">
        <InteractiveSkillField />
      </div>
    </section>
  );
}
