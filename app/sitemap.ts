import type { MetadataRoute } from "next";

const SITE_URL = "https://tallybudget.com";

// Add routes you want indexed:
const ROUTES = ["/", "/features", "/faq", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
