import { projects, type Project, type ProjectVisual } from "@/lib/content";
import { caixaConsorcio } from "@/lib/caixa-consorcio";
import { trajetoriaTotvs } from "@/lib/trajetoria-totvs";

export type CaseKind = "product" | "uxui" | "system" | "strategy" | "site" | "experimental";

export type VisualFrame = "board" | "device";

export type VisualSource =
  | { type: "art"; visual: ProjectVisual; frame?: VisualFrame }
  | { type: "image"; src: string; alt: string; frame?: VisualFrame; ratio?: string };

export type Stat = {
  value: string;
  label: string;
};

export type GalleryLayout = "full" | "pair" | "caption" | "surface" | "compare" | "sequence";

export type CaseNarrative = {
  kind?: CaseKind;
  year?: string;
  role?: string;
  duration?: string;
  team?: string;
  tools?: string[];
  headline?: string;
  hero?: VisualSource | null;
  cover?: VisualSource;
  context?: {
    paragraphs: string[];
    visual?: VisualSource;
  };
  challenge?: {
    lead: string;
    paragraphs?: string[];
    figures?: Stat[];
  };
  contribution?: {
    paragraphs: string[];
    responsibilities?: string[];
  };
  objectives?: string[];
  processLabel?: string;
  process?: {
    title: string;
    paragraphs?: string[];
    points?: string[];
    visual?: VisualSource;
  }[];
  decisions?: {
    insight: string;
    decision: string;
  }[];
  solution?: {
    paragraphs?: string[];
    frames: {
      visual: VisualSource;
      caption?: string;
    }[];
  };
  beforeAfter?: {
    before: VisualSource;
    after: VisualSource;
    beforeLabel?: string;
    afterLabel?: string;
  };
  results?: {
    paragraphs?: string[];
    figures?: Stat[];
  };
  learnings?: string[];
  gallery?: {
    layout: GalleryLayout;
    items: {
      visual: VisualSource;
      caption?: string;
    }[];
  }[];
  facts?: {
    label: string;
    value: string | string[];
  }[];
  intro?: string;
  site?: {
    label: string;
    href: string;
  };
  signals?: string[];
  chapters?: CaseChapter[];
};

export type CaseChapter = {
  id: string;
  nav?: string;
  title: string;
  paragraphs?: string[];
  lead?: string;
  items?: {
    title: string;
    text?: string;
  }[];
  bridge?: {
    from: string[];
    to: string;
  };
  flow?: string[];
  chips?: string[];
  points?: string[];
  closing?: string;
  tone?: "plain" | "soft" | "emphasis" | "statement";
  visuals?: {
    source: VisualSource;
    caption?: string;
  }[];
};

export type CaseStudyData = {
  slug: string;
  index: string;
  kind: CaseKind;
  title: string;
  client: string;
  disciplines: string[];
  hero?: VisualSource;
  cover: VisualSource;
} & CaseNarrative;

const kinds: Record<string, CaseKind> = {
  "trajetoria-totvs": "uxui",
  "site-caixa-consorcio": "site",
};

export const caseNarratives: Record<string, CaseNarrative> = {
  "trajetoria-totvs": trajetoriaTotvs,
  "site-caixa-consorcio": caixaConsorcio,
};

function toCase(project: Project): CaseStudyData {
  const extra = caseNarratives[project.slug] ?? {};
  const art: VisualSource = { type: "art", visual: project.visual };

  return {
    ...extra,
    slug: project.slug,
    index: project.index,
    kind: extra.kind ?? kinds[project.slug] ?? "product",
    title: project.title,
    client: project.company,
    disciplines: [...project.tags],
    hero: extra.hero === null ? undefined : (extra.hero ?? art),
    cover: extra.cover ?? art,
    role: extra.role,
  };
}

export function getCaseStudy(slug: string) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return undefined;
  return toCase(project);
}

export function getNextCase(slug: string) {
  const index = projects.findIndex((item) => item.slug === slug);
  if (index < 0) return undefined;
  return toCase(projects[(index + 1) % projects.length]);
}
