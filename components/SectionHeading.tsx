import styles from "./SectionHeading.module.css";

type Props = {
  index: string;
  title: string;
  lede?: string;
  id: string;
};

export function SectionHeading({ index, title, lede, id }: Props) {
  return (
    <header className={styles.header}>
      <p className={styles.index}>{index}</p>
      <div>
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
        {lede ? <p className={styles.lede}>{lede}</p> : null}
      </div>
    </header>
  );
}
