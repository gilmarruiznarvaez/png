/**
 * COLABLANCA PLAZA · Design Tokens
 * Fuente única de verdad: paleta, tipografía, espaciado, breakpoints,
 * z-index, easings, duraciones, sombras y radios.
 * Consumido por tailwind.config.ts y exportado como CSS vars en globals.css.
 */

export const colors = {
  /* Lienzos */
  ink: "#262626",       // fondo dominante
  inkDeep: "#0f0f0f",   // secciones de contraste
  inkPure: "#000000",   // CTA Final, máximas profundidades

  /* Texto */
  paper: "#ffffff",     // texto principal sobre ink
  paperMuted: "#a8a8a8",
  paperDim: "#6b6b6b",

  /* Marca */
  gold: "#ffbd59",      // CTAs primarios, badges, logo
  goldDeep: "#e5a949",
  neon: "#fff855",      // glows, líneas, énfasis disciplinado
  neonDim: "rgba(255, 248, 85, 0.5)",

  /* Estados / superficies */
  surface: "#1a1a1a",
  border: "#333333",
  borderStrong: "#4a4a4a",
} as const;

/* Tipografía
 * display = Antonio (titulares condensed, editorial)
 * body    = Poppins (cuerpo, UI, eyebrows)
 * Pesos cargados: Antonio 400/500/600/700, Poppins 400/500/600/700+italics.
 */
export const fontFamily = {
  display: ["var(--font-antonio)", "Oswald", "Impact", "sans-serif"],
  body: ["var(--font-poppins)", "system-ui", "sans-serif"],
} as const;

/* Escala fluida con clamp()
 * Min viewport 320px → max viewport 1920px.
 * Display jerárquico para Hero/CTA Final masivo.
 */
export const fontSize = {
  /* Body */
  "body-sm": ["0.875rem", { lineHeight: "1.55" }],
  "body-md": ["1rem", { lineHeight: "1.6" }],
  "body-lg": ["clamp(1.0625rem, 0.95rem + 0.5vw, 1.25rem)", { lineHeight: "1.55" }],
  "body-xl": ["clamp(1.125rem, 1rem + 0.75vw, 1.5rem)", { lineHeight: "1.5" }],

  /* Eyebrow / tag */
  eyebrow: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.18em" }],
  "eyebrow-lg": ["0.875rem", { lineHeight: "1.2", letterSpacing: "0.16em" }],

  /* Headings */
  h3: ["clamp(1.25rem, 0.9rem + 1.75vw, 2.25rem)", { lineHeight: "1.15" }],
  h2: ["clamp(1.5rem, 1rem + 2.5vw, 3rem)", { lineHeight: "1.1" }],
  h1: ["clamp(2rem, 1.25rem + 3.5vw, 4rem)", { lineHeight: "1.05" }],

  /* Display (Hero, CTA Final, números masivos del Proof Bar) */
  "display-sm": ["clamp(1.75rem, 1rem + 3vw, 3.5rem)", { lineHeight: "1" }],
  "display-md": ["clamp(2.5rem, 1.25rem + 5vw, 5.5rem)", { lineHeight: "0.95" }],
  "display-lg": ["clamp(3rem, 1.5rem + 7vw, 8rem)", { lineHeight: "0.9" }],
  "display-xl": ["clamp(3.5rem, 1.5rem + 10vw, 11rem)", { lineHeight: "0.85" }],
} as const;

export const fontWeight = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

/* Espaciado · escala editorial con whitespace abundante.
 * Pasos pensados para columns de magazine/landing premium.
 */
export const spacing = {
  px: "1px",
  0: "0",
  1: "0.25rem",   // 4
  2: "0.5rem",    // 8
  3: "0.75rem",   // 12
  4: "1rem",      // 16
  5: "1.25rem",   // 20
  6: "1.5rem",    // 24
  7: "2rem",      // 32
  8: "2.5rem",    // 40
  9: "3rem",      // 48
  10: "4rem",     // 64
  11: "5rem",     // 80
  12: "6rem",     // 96
  13: "8rem",     // 128
  14: "10rem",    // 160
  15: "12.5rem",  // 200
  16: "15rem",    // 240
  17: "20rem",    // 320
  /* Spacing fluido para padding vertical de secciones */
  "section-sm": "clamp(3rem, 6vw, 5rem)",
  "section-md": "clamp(5rem, 10vw, 9rem)",
  "section-lg": "clamp(7rem, 14vw, 14rem)",
} as const;

/* Breakpoints alineados al brief: 480 / 768 / 1024 / 1440 + 2xl. */
export const screens = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  "2xl": "1920px",
} as const;

/* Z-index ladder · evita el clásico desorden de capas */
export const zIndex = {
  behind: "-1",
  base: "0",
  raised: "10",
  sticky: "20",
  overlay: "100",
  nav: "200",
  modal: "300",
  toast: "400",
  cursor: "500",
  loader: "600",
} as const;

/* Easings · firma cinemática del sitio (estilo Lando Norris) */
export const easings = {
  cinema: "cubic-bezier(0.65, 0, 0.35, 1)",       // scroll global
  outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",       // entradas
  outQuint: "cubic-bezier(0.22, 1, 0.36, 1)",     // UI
  inOutQuint: "cubic-bezier(0.83, 0, 0.17, 1)",   // page transitions
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",    // micro-bounce
} as const;

/* Duraciones · agnósticas, en ms */
export const duration = {
  instant: "100ms",
  fast: "200ms",
  base: "400ms",
  slow: "700ms",
  cinematic: "1200ms",
  loader: "1200ms",
} as const;

/* Glows neón · disciplinados, sólo en bordes activos / nodos / CTAs primarios */
export const boxShadow = {
  none: "none",
  "glow-soft": "0 0 20px rgba(255, 248, 85, 0.25)",
  "glow-medium": "0 0 28px rgba(255, 248, 85, 0.45), 0 0 4px rgba(255, 248, 85, 0.6)",
  "glow-intense": "0 0 44px rgba(255, 248, 85, 0.6), 0 0 8px rgba(255, 248, 85, 0.85)",
  "glow-gold": "0 0 32px rgba(255, 189, 89, 0.45), 0 0 6px rgba(255, 189, 89, 0.7)",
  card: "0 24px 60px -28px rgba(0, 0, 0, 0.7)",
} as const;

export const borderRadius = {
  none: "0",
  sm: "2px",
  md: "6px",
  lg: "14px",
  xl: "24px",
  "2xl": "36px",
  pill: "9999px",
} as const;

/* Anchos de contenedor */
export const maxWidth = {
  prose: "65ch",
  text: "44rem",
  content: "78rem",
  wide: "92rem",
} as const;

/* Tipos exportados (consumibles por componentes con autocomplete) */
export type ColorToken = keyof typeof colors;
export type SpacingToken = keyof typeof spacing;
export type EasingToken = keyof typeof easings;
export type DurationToken = keyof typeof duration;
