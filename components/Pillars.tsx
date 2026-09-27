import { pillars } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import styles from "./Pillars.module.css";

export function Pillars() {
  return (
    <section className="section" aria-labelledby="pillars-title">
      <div className="wrap reveal">
        <SectionHeading
          id="pillars-title"
          index="06"
          title="O que eu faço"
          lede="Quatro formas de atuar no produto — da experiência à escala."
        />
        <ol className={styles.list}>
          {pillars.map((item) => (
            <li key={item.title} className={styles.item}>
              <span className={styles.index}>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
