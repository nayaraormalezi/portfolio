import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/case/CaseStudy";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { getCaseStudy, getNextCase } from "@/lib/cases";
import { projects } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const caseSeo: Record<string, { title: string; description: string }> = {
  "trajetoria-totvs": {
    title: "Trajetória TOTVS | Case de UX/UI — Nayara Ormalezi",
    description:
      "Projeto de experiência digital para transformar a história da TOTVS em uma experiência interativa, com atuação em UX/UI, interface e prototipação de jogos.",
  },
  "site-caixa-consorcio": {
    title: "Site CAIXA Consórcio | Case de UX/UI — Nayara Ormalezi",
    description:
      "Evolução da experiência digital do site CAIXA Consórcio, com atuação em organização de informações, componentes e distribuição de conteúdo para tornar a jornada mais clara e consistente.",
  },
};

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Projeto", robots: { index: false, follow: false } };

  const project = projects.find((item) => item.slug === slug);
  const known = caseSeo[slug];
  const title = known?.title ?? `${study.title} | Nayara Ormalezi`;
  const description = known?.description ?? [study.headline, study.intro].filter(Boolean).join(" ");

  return pageMetadata({
    title,
    description,
    path: `/projetos/${slug}`,
    absolute: true,
    image: project?.image ? { url: project.image.src, alt: project.image.alt } : undefined,
  });
}

export default async function CasePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const next = getNextCase(slug);
  if (!study || !next) notFound();

  return (
    <>
      <Nav />
      <main id="main" className="page-main">
        <CaseStudy study={study} next={next} />
      </main>
      <Footer />
    </>
  );
}
