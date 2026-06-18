import { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/constants/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BUSINESS_INFO.baseUrl}/sitemap.xml`,
  };
}