# COLABLANCA PLAZA · Sitio web

Build premium de conversión para la plaza comercial **COLABLANCA PLAZA** en Tegucigalpa. Estética inspirada en [landonorris.com](https://landonorris.com), con paleta, contenido y copy propios.

## Stack

- **Next.js 14** (App Router)
- **TypeScript** estricto (`noUncheckedIndexedAccess`, `noImplicitOverride`)
- **Tailwind CSS** + tokens en `src/styles/tokens.ts`
- **Framer Motion** para hover y micro-interacciones
- **GSAP + ScrollTrigger** para scroll cinematográfico
- **Lenis** para smooth scroll
- `next/font` con Antonio + Poppins (Google Fonts)

## Sistema de diseño

Toda la fuente de verdad vive en `src/styles/tokens.ts`. Se consume desde:

- `tailwind.config.ts` (colores, tipos, easings, sombras, breakpoints)
- `src/app/globals.css` (CSS vars equivalentes, para CSS Modules y `clamp()` en runtime)

### Paleta

| Rol | Hex | Token |
|---|---|---|
| Lienzo dominante | `#262626` | `ink` |
| Contraste profundo | `#0f0f0f` | `ink-deep` |
| Texto principal | `#ffffff` | `paper` |
| Marca · CTAs primarios | `#ffbd59` | `gold` |
| Acento neón · luz | `#fff855` | `neon` |

## Scripts

```bash
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Estructura

```
src/
├── app/                Next App Router (layout, page, metadata)
├── components/
│   ├── chrome/         Navbar, MobileMenu, Cursor, Loader
│   ├── motion/         Reveal, Magnetic, Marquee, Counter, SplitText
│   ├── providers/      Lenis, Cursor, ReducedMotion
│   ├── sections/       Las 14 secciones del home
│   └── ui/             Button, Tag, Badge, Eyebrow
├── content/            Copy y data tipada
├── hooks/              useLenis, useScrollTrigger, useMagnetic
├── lib/                gsap, lenis, schema, whatsapp, cn
├── styles/             tokens.ts (fuente de verdad)
└── types/

public/
├── images/             Fotos por sección/servicio
├── logo/               SVG y PNG fallback
└── videos/             Loops de hero
```

## Despliegue

Vercel · push a `main` → deploy automático.

Variables de entorno: ninguna requerida en el setup base.

## Accesibilidad

- WCAG AA mínimo, Skip-to-content link, focus visible neón
- Respeta `prefers-reduced-motion` (Lenis y animaciones intensas se desactivan)
- Navegación 100% por teclado
