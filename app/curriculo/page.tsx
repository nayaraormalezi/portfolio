import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import styles from "./curriculo.module.css";

export const metadata: Metadata = {
  title: "Currículo",
  description:
    "Currículo de Nayara Ormalezi: trajetória, da comunicação e do design ao product design.",
};

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
