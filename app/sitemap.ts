import type { MetadataRoute } from "next";
import { serviceDirectory, servicePath } from "@/data/pages";
import { siteUrl } from "@/data/site";

const routes = ["", "/about", "/services", "/insights", "/contact", "/privacy", "/terms"] as const;
const lastModified = new Date("2026-10-07");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const serviceRoutes = serviceDirectory.map((service) => ({
    url: `${siteUrl}${servicePath(service.slug)}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
