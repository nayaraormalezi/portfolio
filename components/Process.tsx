import { process } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import styles from "./Process.module.css";

export function Process() {
  return (
    <section className="section" aria-labelledby="process-title">
      <div className={`wrap ${styles.surface} reveal`}>
        <SectionHeading
          id="process-title"
          index="08"
          title="Como eu trabalho"
          lede="Da compreensão do problema à evolução do produto."
        />
        <ol className={styles.steps}>
          {process.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <p className={styles.num}>
                <span>{step.index}</span>
                {index < process.length - 1 ? (
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                ) : null}
              </p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
