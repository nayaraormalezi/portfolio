import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["/", "/projetos", "/curriculo", "/freelas", ...projects.map((project) => `/projetos/${project.slug}`)];

  return pages.map((path) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/projetos/") ? 0.7 : 0.8,
  }));
}
