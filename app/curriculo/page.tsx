import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { pageMetadata } from "@/lib/seo";
import styles from "./curriculo.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Trajetória | Nayara Ormalezi — Product Designer",
  description:
    "Conheça a trajetória profissional de Nayara Ormalezi em Product Design, UX/UI e experiências digitais, com experiências em CAIXA Consórcio, TOTVS e outros projetos.",
  path: "/curriculo",
  absolute: true,
});

export default function ResumePage() {
  return (
    <>
      <Nav />
      <main id="main" className="page-main">
        <Experience>
          <div className={styles.chrome}>
            <nav className={styles.crumb} aria-label="Trilha">
              <Link href="/">Início</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Currículo</span>
            </nav>
            <Link className="btn btn-ghost" href="/#trajetoria">
              <Arrow direction="back" />
              Voltar
            </Link>
          </div>
        </Experience>
      </main>
      <Footer />
    </>
  );
}
