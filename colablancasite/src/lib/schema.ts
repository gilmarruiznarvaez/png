import { BRAND } from "@/content/brand";

const BASE_URL = "https://colablancaplaza.com";

/**
 * JSON-LD para LocalBusiness + sub-tipos por servicio (Restaurant, BeautySalon,
 * AutoRepair, BarberShop). Inyectado en <head> desde RootLayout.
 */
export function buildSchema(): string {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#colablanca`,
    name: BRAND.name,
    description:
      "Plaza comercial premium en Tegucigalpa con seis servicios: carwash, detailing, lubricentro, barbería, salón de belleza y restaurante.",
    url: BASE_URL,
    image: `${BASE_URL}/og.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.address.street,
      addressLocality: BRAND.address.locality,
      addressCountry: BRAND.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      BRAND.social.instagram.plaza,
      BRAND.social.tiktok.plaza,
    ],
  };

  const sub = [
    {
      "@type": "Restaurant",
      name: "Carnitas Colablanca",
      servesCuisine: ["Honduran", "BBQ"],
      sameAs: BRAND.social.instagram.restaurante,
    },
    {
      "@type": "BeautySalon",
      name: "Aitana Salón",
      sameAs: BRAND.social.instagram.salon,
    },
    {
      "@type": "BarberShop",
      name: "Colablanca Barbería",
      sameAs: BRAND.social.instagram.barberia,
    },
    {
      "@type": "AutoRepair",
      name: "Colablanca Carwash & Lubricentro",
      sameAs: BRAND.social.instagram.carwash,
    },
  ].map((s) => ({
    "@context": "https://schema.org",
    ...s,
    address: localBusiness.address,
    url: BASE_URL,
  }));

  return JSON.stringify([localBusiness, ...sub]);
}
