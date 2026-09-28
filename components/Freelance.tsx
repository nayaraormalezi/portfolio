import { freelanceServices, site } from "@/lib/content";
import { PresentationQuote } from "./PresentationQuote";
import styles from "./Freelance.module.css";

export function Freelance({ titleLevel = "h2" }: { titleLevel?: "h1" | "h2" }) {
  const Title = titleLevel === "h1" ? "h1" : "h2";

  return (
    <section className={styles.section} id="freelas" aria-labelledby="freelas-title">
      <div className={`wrap ${styles.panel} reveal`}>
        <p className={styles.index}>08</p>
        <Title id="freelas-title">Precisa de uma designer para o seu produto?</Title>
        <p className={styles.lede}>Também trabalho em projetos independentes.</p>

        <p className={styles.kicker}>Serviços</p>
        <ul className={styles.services}>
          {freelanceServices.map((service, index) => (
            <li key={service.title} className={index === 0 ? styles.featured : undefined}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              {index === 0 ? (
                <PresentationQuote />
              ) : (
                <a href={site.whatsappChat} target="_blank" rel="noreferrer">
                  Conversar sobre o projeto
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
