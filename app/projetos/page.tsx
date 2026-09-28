import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SelectedWork } from "@/components/SelectedWork";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projetos",
  description:
    "Projetos de Product Design, UX/UI e experiências digitais, com foco em jornadas, interfaces, sistemas e soluções para produtos digitais.",
  path: "/projetos",
});

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main id="main" className="page-main">
        <SelectedWork headingLevel="h1" />
      </main>
      <Footer />
    </>
  );
}
