import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { Freelance } from "@/components/Freelance";
import { Nav } from "@/components/Nav";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Freelas | UX/UI, Sites e Design de Apresentações — Nayara Ormalezi",
  description:
    "Serviços freelance de UX/UI Design, Landing Pages, Sites, Consultoria UX e Design de Apresentações.",
  path: "/freelas",
  absolute: true,
});

export default function FreelancePage() {
  return (
    <>
      <Nav />
      <main id="main" className="page-main">
        <Freelance titleLevel="h1" />
        <Contact />
      </main>
    </>
  );
}
