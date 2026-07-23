import type { MetadataRoute } from "next";
import { lastUpdated, siteUrl } from "@/app/config/site";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: siteUrl,
    lastModified: lastUpdated,
    changeFrequency: "monthly",
    priority: 1,
  },
];

export default sitemap;
