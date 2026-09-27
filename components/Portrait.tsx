import { site } from "@/lib/content";
import styles from "./Portrait.module.css";

export function Portrait({
  variant,
  mark = variant === "about",
  src = variant === "hero" ? site.portrait : null,
}: {
  variant: "hero" | "about";
  mark?: boolean;
  src?: string | null;
}) {
  if (src) {
    return (
      <figure className={`${styles.figure} ${styles[variant]}`}>
        <img
          src={src}
          alt="Nayara Ormalezi"
          className={styles.photo}
          loading={variant === "hero" ? "eager" : "lazy"}
        />
      </figure>
    );
  }

  return (
    <figure
      className={`${styles.figure} ${styles[variant]}`}
      aria-label="Retrato de Nayara Ormalezi, a adicionar"
    >
      <div className={styles.plate} aria-hidden="true">
        {mark ? <span className={styles.mark}>N</span> : null}
        <span className={styles.caption}>
          <span>Retrato</span>
          <span>A adicionar</span>
        </span>
      </div>
    </figure>
  );
}
