import type { MetadataRoute } from "next";
import { description, person } from "@/app/config/site";

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
    { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    { src: "/icon-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
  ],
});

export default manifest;
