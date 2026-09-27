import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="page-main wrap">
        <p style={{ color: "var(--blue)", letterSpacing: "0.16em", fontSize: "0.72rem", fontWeight: 550 }}>
          404
        </p>
        <h1
          style={{
            marginTop: "0.7rem",
            fontFamily: "var(--serif)",
            fontSize: "clamp(3rem, 6vw, 4.5rem)",
            fontWeight: 500,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
          }}
        >
          Esta página não está aqui.
        </h1>
        <p style={{ marginTop: "1rem" }}>
          <Link className="btn btn-ghost" href="/">
            <Arrow direction="back" />
            Voltar ao portfólio
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
