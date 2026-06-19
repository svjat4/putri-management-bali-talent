import { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/constants/data";
import { ARTICLES } from "@/constants/articles"; // 👈 Import data artikel Kakak

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS_INFO.baseUrl;
  const lastModified = new Date();

  // 1. Rute Statis (Halaman Utama, Halaman Talent, dan Index Journal)
  const staticRoutes = [
    "",
    "/journal", // 👈 Tambahkan halaman utama The Journal
    "/sexy-dancer-bali",
    "/fire-dance-bali",
    "/belly-dance-bali",
    "/balinese-dancer-bali",
    "/host-party-bali"
  ];

  const staticSitemap: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Rute Dinamis (Semua Artikel di The Journal)
  const articleSitemap: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${base}/journal/${article.slug}`,
    lastModified: lastModified,
    changeFrequency: "monthly",
    priority: 0.6, // Prioritas wajar untuk halaman artikel
  }));

  // Gabungkan keduanya
  return [...staticSitemap, ...articleSitemap];
}