/**
 * Identidad central de marca · usada por metadata, schema.org, navbar, footer.
 */
export const BRAND = {
  name: "COLABLANCA PLAZA",
  shortName: "Colablanca",
  tagline: "La casa del venado",
  city: "Tegucigalpa",
  country: "Honduras",
  region: "HN",
  address: {
    street: "Anillo Periférico, antes de la Gasolinera UNO del Hato de Enmedio",
    locality: "Tegucigalpa",
    country: "Honduras",
    /* Lat/long pendientes de extraer del pin oficial */
    geo: { lat: null as number | null, lng: null as number | null },
    mapUrl: "https://maps.app.goo.gl/zwiJfYmM3pu2gidv8",
  },
  hours: {
    weekdays: "8:00 AM – 7:00 PM",
    sunday: "10:00 AM – 5:00 PM",
  },
  social: {
    instagram: {
      plaza: "https://www.instagram.com/colablancaplaza",
      carwash: "https://www.instagram.com/colablancacarwash/",
      barberia: "https://www.instagram.com/colablancabarbershop/",
      salon: "https://www.instagram.com/aitanasalonhn",
      restaurante: "https://www.instagram.com/carnitascolablanca",
    },
    tiktok: {
      plaza: "https://www.tiktok.com/@colablancaplaza",
      carwash: "https://www.tiktok.com/@colablancacarwash",
      barberia: "https://www.tiktok.com/@colablancabarbershop",
    },
  },
} as const;
