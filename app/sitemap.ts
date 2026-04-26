import type { MetadataRoute } from "next";
import { navItems } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://comoresairways.com";

  return navItems.map((item) => ({
    url: `${baseUrl}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date("2026-04-26"),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8
  }));
}
