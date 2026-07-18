import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://monrepossokobanja.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/galerija/", "/cenovnik/", "/kontakt/"];
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
