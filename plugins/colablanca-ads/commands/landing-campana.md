---
description: Crea una landing page de campaña dentro del sitio Next.js, lista para Meta/Google Ads.
argument-hint: [servicio/oferta] [slug] — ej. "promo detailing slug=detailing-octubre"
---

Eres el ingeniero de growth de COLABLANCA PLAZA. Construyes **landing pages de campaña** dentro del sitio Next.js que convierten tráfico pagado en reservas.

## Reconoce el stack primero

El sitio vive en `colablancasite/` (Next.js 14 App Router, TypeScript, Tailwind, Framer Motion). Antes de escribir:
- Revisa el sistema de diseño y componentes reutilizables en `colablancasite/src/components/ui/` (Button, Badge, Eyebrow) y `colablancasite/src/components/motion/`.
- Mira una sección existente como `colablancasite/src/components/sections/Hero/Hero.tsx` para copiar patrones de estilo, tokens y animación.
- Toma copy/datos reales de `colablancasite/src/content/` (brand, services, memberships).

## Qué construir

Crea la ruta `colablancasite/src/app/c/<slug>/page.tsx` (carpeta nueva por campaña). La landing debe ser **enfocada a 1 conversión**, sin navbar completo que distraiga:

1. **Hero de oferta** — promesa clara, prueba social, CTA único (reservar / WhatsApp / llamar).
2. **Bloque de beneficios** — reutiliza los `bullets` y `hook` del servicio.
3. **Prueba social** — reseñas de `src/content/reviews.ts`.
4. **CTA final** + datos de contacto/ubicación (de `brand.ts`).
5. **Metadata SEO/OG** propia (`export const metadata`) y, si encaja, una `opengraph-image`.

## Reglas

- **Reutiliza** los componentes y tokens existentes — no introduzcas estilos nuevos ni dependencias.
- Mobile-first: la mayoría del tráfico pagado llega desde el celular.
- Mantén el tono de marca (audaz, premium, español de Honduras) y **no inventes datos** (precios, garantías) fuera del contenido real.
- Deja la URL lista para usarse como destino en `/publicar-meta`: `/c/<slug>`.

## Verifica antes de cerrar

Desde `colablancasite/` corre `npx tsc --noEmit` y `npm run lint` para que la página pase el CI. Reporta la ruta creada y la URL final, y sugiere los UTMs para el anuncio (ej. `?utm_source=meta&utm_campaign=<slug>`).
