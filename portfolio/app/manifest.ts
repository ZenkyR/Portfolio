import type { MetadataRoute } from "next";
import { description, person } from "@/app/config/site";

export const dynamic = "force-static";

const manifest = (): MetadataRoute.Manifest => ({
  name: person.name,
  short_name: "KL",
  description,
  lang: "fr",
  start_url: "/",
  display: "standalone",
  background_color: "#070510",
  theme_color: "#070510",
  icons: [
    {
      src: "/icon.svg",
      sizes: "any",
      type: "image/svg+xml",
    },
  ],
});

export default manifest;
