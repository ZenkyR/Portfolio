import type { MetadataRoute } from "next";
import { lastUpdated, siteUrl } from "@/app/config/site";
import { privacyUpdated } from "@/app/data/portailBedrockPrivacy";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: siteUrl,
    lastModified: lastUpdated,
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    url: `${siteUrl}/portail-bedrock/confidentialite`,
    lastModified: privacyUpdated,
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

export default sitemap;
