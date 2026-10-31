import { pages, SITE_URL } from "./lib/site";

export default function sitemap() {
  const lastModified = new Date();

  return pages.map((page, index) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
