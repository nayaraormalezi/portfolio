import type { Metadata } from "next";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ExperienceOverview } from "@/components/ExperienceOverview";
import { Freelance } from "@/components/Freelance";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Pillars } from "@/components/Pillars";
import { Process } from "@/components/Process";
import { Repertoire } from "@/components/Repertoire";
import { SelectedWork } from "@/components/SelectedWork";
import { Statement } from "@/components/Statement";
import { site } from "@/lib/content";
import { pageMetadata, siteUrl } from "@/lib/seo";

const title = "Nayara Ormalezi | Product Designer · UX/UI Designer";
const description =
  "Product Designer em São Paulo, com experiência em UX/UI, produtos digitais, Design Systems e jornadas complexas. Conheça meus projetos, trajetória e serviços de design.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/",
  absolute: true,
  ogDescription:
    "Transformo problemas complexos em experiências digitais mais claras, estratégicas e escaláveis.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#profile`,
  url: `${siteUrl}/`,
  name: title,
  description,
  inLanguage: "pt-BR",
  mainEntity: {
    "@type": "Person",
    "@id": `${siteUrl}/#nayara-ormalezi`,
    name: site.name,
    jobTitle: "Product Designer",
    description,
    url: `${siteUrl}/`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressCountry: "BR",
    },
    worksFor: {
      "@type": "Organization",
      name: "CAIXA Consórcio",
    },
    sameAs: [site.linkedin],
    knowsAbout: [
      "Product Design",
      "UX/UI",
      "Digital Products",
      "Design Systems",
      "Estratégia de UX",
      "Prototipação",
      "Pesquisa",
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <SelectedWork variant="carousel" />
        <Statement />
        <ExperienceOverview />
        <Pillars />
        <Repertoire />
        <Process />
        <Freelance />
        <Contact />
      </main>
    </>
  );
}
