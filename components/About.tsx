import Link from "next/link";
import { about } from "@/lib/content";
import { Arrow } from "./Arrow";
import { Portrait } from "./Portrait";
import { SectionHeading } from "./SectionHeading";
import styles from "./About.module.css";

export function About() {
  return (
    <section className={`section ${styles.band}`} id="sobre" aria-labelledby="sobre-title">
      <div className={`wrap ${styles.layout}`}>
        <div className="reveal">
          <SectionHeading id="sobre-title" index="03" title="Sobre mim" />
          <div className={styles.copy}>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link className={`btn btn-primary ${styles.more}`} href="/curriculo">
            Mostrar currículo
            <Arrow />
          </Link>
        </div>
        <div className={`${styles.photo} reveal`}>
          <Portrait variant="about" src="/sobre.jpg" />
        </div>
      </div>
    </section>
  );
}
