import { projects } from "./lib/projects";
import { pages, SITE_URL } from "./lib/site";

export default function sitemap() {
  const lastModified = new Date();

  const core = pages.map((page, index) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));

  const work = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...core, ...work];
}
