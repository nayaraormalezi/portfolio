import { repertoire } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import styles from "./Repertoire.module.css";

export function Repertoire() {
  return (
    <section className="section" id="ferramentas" aria-labelledby="ferramentas-title">
      <div className="wrap">
        <div className="reveal">
          <SectionHeading id="ferramentas-title" index="07" title="Ferramentas & possibilidades" />
        </div>

        <ol className={`${styles.list} reveal stagger`}>
          {repertoire.map((item) =>
            item.featured ? (
              <li key={item.title} className={styles.featured}>
                <p className={styles.index}>{item.index}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p className={styles.callout}>
                    Design não termina no <span>Figma.</span>
                  </p>
                  <p className={styles.note}>
                    Exploro código e IA como extensão do processo de design — da prototipação à
                    construção de experiências funcionais.
                  </p>
                  <p className={styles.tools}>{item.tools}</p>
                </div>
              </li>
            ) : (
              <li key={item.title} className={styles.item}>
                <p className={styles.index}>{item.index}</p>
                <h3>{item.title}</h3>
                <p className={styles.tools}>{item.tools}</p>
              </li>
            ),
          )}
        </ol>
      </div>
    </section>
  );
}
