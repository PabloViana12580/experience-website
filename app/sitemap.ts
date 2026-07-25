import type { MetadataRoute } from "next";

import { seoConfig } from "@/lib/seo";

export const dynamic = "force-static";

const lastModified = new Date("2026-07-25");

const routes = [
  { path: "", priority: 1 },
  { path: "/menu", priority: 0.85 },
  { path: "/visit", priority: 0.9 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${seoConfig.siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
