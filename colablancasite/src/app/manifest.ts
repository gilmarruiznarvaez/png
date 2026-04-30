import type { MetadataRoute } from "next";
import { BRAND } from "@/content/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BRAND.name} · ${BRAND.tagline}`,
    short_name: BRAND.shortName,
    description:
      "Seis servicios premium. Una sola dirección. Carwash, detailing, lubricentro, barbería, salón y restaurante en el corazón de Tegucigalpa.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f0f",
    theme_color: "#262626",
    lang: "es-HN",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
