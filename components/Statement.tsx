import styles from "./Statement.module.css";

export function Statement() {
  return (
    <section className={styles.section} aria-label="Posicionamento">
      <p className={`wrap ${styles.line} reveal`}>
        Projetar é transformar
        <br />
        complexidade em <span>clareza.</span>
      </p>
    </section>
  );
}
