import Link from "next/link";
import { site } from "@/lib/content";
import styles from "./Contact.module.css";

const links = [
  {
    label: "LinkedIn",
    href: site.linkedin,
    external: true,
  },
  {
    label: "E-mail",
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    label: "WhatsApp",
    href: site.whatsappChat,
    external: true,
  },
  {
    label: "Mostrar currículo",
    href: "/curriculo",
    external: false,
  },
];

export function Contact() {
  return (
    <section className={styles.contact} id="contato" aria-labelledby="contato-title">
      <div className={`wrap ${styles.inner}`}>
        <p className={styles.index}>09</p>
        <h2 id="contato-title">
          Vamos criar
          <br />
          algo melhor?
        </h2>
        <p className={styles.text}>
          Tem um projeto, oportunidade ou desafio em mente? Vamos conversar.
        </p>
        <ul className={styles.links}>
          {links.map((item) => (
            <li key={item.label}>
              {item.href.startsWith("/") ? (
                <Link href={item.href}>
                  {item.label}
                  <span aria-hidden="true">↗</span>
                </Link>
              ) : (
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {item.label}
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </li>
          ))}
        </ul>
        <footer className={styles.footer}>
          <p>© {site.year} Design & desenvolvimento por {site.name}.</p>
          <p>{site.role}</p>
        </footer>
      </div>
    </section>
  );
}
