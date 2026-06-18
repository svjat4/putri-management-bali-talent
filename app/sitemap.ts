import { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/constants/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS_INFO.baseUrl;
  const lastModified = new Date();

  const routes = [
    "",
    "/sexy-dancer-bali",
    "/fire-dance-bali",
    "/belly-dance-bali",
    "/balinese-dancer-bali",
    "/host-party-bali"
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}