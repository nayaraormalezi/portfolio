import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/case/CaseStudy";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { getCaseStudy, getNextCase } from "@/lib/cases";
import { projects } from "@/lib/content";

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
  if (!study) return { title: "Projeto" };
  return {
    title: study.title,
    description: `${study.title} — ${study.client}.`,
  };
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
