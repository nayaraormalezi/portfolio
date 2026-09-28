import styles from "./SectionHeading.module.css";

type Props = {
  index: string;
  title: string;
  lede?: string;
  id: string;
  level?: "h1" | "h2";
};

export function SectionHeading({ index, title, lede, id, level = "h2" }: Props) {
  const Title = level === "h1" ? "h1" : "h2";

  return (
    <header className={styles.header}>
      <p className={styles.index}>{index}</p>
      <div>
        <Title id={id} className={styles.title}>
          {title}
        </Title>
        {lede ? <p className={styles.lede}>{lede}</p> : null}
      </div>
    </header>
  );
}
