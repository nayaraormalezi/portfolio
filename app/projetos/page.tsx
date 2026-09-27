import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SelectedWork } from "@/components/SelectedWork";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos selecionados de Nayara Ormalezi em design de produto, UX/UI e sistemas de design.",
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main id="main" className="page-main">
        <SelectedWork />
      </main>
      <Footer />
    </>
  );
}
