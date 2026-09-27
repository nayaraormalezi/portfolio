import { site } from "@/lib/content";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <p>© {site.year} Design & desenvolvimento por {site.name}.</p>
        <p>{site.role}</p>
        <a href="/#inicio">Início</a>
      </div>
    </footer>
  );
}
