import type { MetadataRoute } from "next";
import { siteUrl } from "@/app/config/site";

export const dynamic = "force-static";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: siteUrl,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  },
];

export default sitemap;
