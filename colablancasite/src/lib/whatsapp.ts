/**
 * WhatsApp único para todas las CTAs del sitio.
 * Confirmado por cliente: el sitio entero apunta a este link.
 */
export const WHATSAPP_URL =
  "https://wa.me/message/4YVQE77BNL7YP1" as const;

/**
 * Helpers tipados para los 4 destinos Canva del brief.
 */
export const CANVA_LINKS = {
  encuesta: "https://canva.link/4dcrgtreh5iji4n",
  alianzas: "https://canva.link/m9xty2m5tp7o60a",
  testimonio: "https://canva.link/brshoz98w5nx0xm",
  carreras: "https://canva.link/7xg4dtcwo3puz2x",
} as const;

export type CanvaLink = keyof typeof CANVA_LINKS;
