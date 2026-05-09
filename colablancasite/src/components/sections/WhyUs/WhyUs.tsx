import { Eyebrow } from "@/components/ui/Eyebrow";
import { MarqueeTrack } from "@/components/motion/MarqueeTrack";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

const PILLARS = [
  {
    eyebrow: "PILAR 01",
    title: "PRODUCTOS DE GAMA MUNDIAL",
    body:
      "Trabajamos con Meguiar's, Liqui Moly, Motul, Castrol, Valvoline, Lucas Oil y Goodyear. Las mismas marcas que protegen flotas de lujo, autos de competición y talleres profesionales en todo el mundo.",
    highlight: "Tu auto recibe lo que recibirían un Porsche, un Mercedes o un Lexus.",
  },
  {
    eyebrow: "PILAR 02",
    title: "TECNOLOGÍA CERÁMICA DE ÉLITE",
    body:
      "Aplicamos los recubrimientos cerámicos más avanzados del mercado. Desde el Hybrid Ceramic SiO₂ hasta el Beyond Ceramic profesional con durabilidad extrema.",
    highlight: "Mientras otros lavan, nosotros protegemos.",
    badge: "PROTECCIÓN HASTA 5 AÑOS",
  },
  {
    eyebrow: "PILAR 03",
    title: "EQUIPO CERTIFICADO Y OBSESIVO",
    body:
      "Cada técnico, barbero, esteticista y mecánico de COLABLANCA pasa por capacitación continua. Entrenados en Meguiar's y formados en estándares internacionales.",
    highlight: "Lo que aquí es estándar, en otros lugares es premium.",
  },
];

const BRANDS = [
  "MEGUIAR'S",
  "LIQUI MOLY",
  "MOTUL",
  "CASTROL",
  "VALVOLINE",
  "LUCAS OIL",
  "GOODYEAR",
  "IDEMITSU",
  "KÄRCHER",
];

export function WhyUs() {
  return (
    <section className="relative bg-ink section-padding-lg">
      <div className="container-edge">
        <div className="max-w-content">
          <Eyebrow tone="muted">NUESTRA DIFERENCIA</Eyebrow>
          <h2 className="mt-8 font-display text-display-lg font-bold uppercase leading-none">
            Por qué nos eligen.
          </h2>
          <p className="mt-6 max-w-text font-body text-body-xl text-paper-muted">
            Porque la diferencia se ve.{" "}
            <em className="not-italic font-bold italic text-neon">Y se mantiene.</em>
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <article className="flex h-full flex-col gap-6 rounded-lg border border-border bg-surface p-8 transition-colors hover:border-gold">
                <p className="font-body text-eyebrow font-bold uppercase tracking-eyebrow text-paper-muted">
                  {p.eyebrow}
                </p>
                <h3 className="font-display text-h1 font-bold uppercase leading-tight">
                  {p.title}
                </h3>
                {p.badge && (
                  <p className="inline-block w-fit rounded-pill bg-gold/15 px-3 py-1 font-body text-eyebrow font-bold uppercase tracking-eyebrow text-gold">
                    {p.badge}
                  </p>
                )}
                <p className="font-body text-body-md text-paper">{p.body}</p>
                <p className="mt-auto border-t border-border pt-5 font-body italic text-body-md text-neon">
                  {p.highlight}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <div className="mt-20 border-y border-border bg-ink-deep py-8">
        <MarqueeTrack speed={50}>
          {BRANDS.map((b, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-display text-h1 font-semibold uppercase text-paper-muted"
            >
              {b}
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
            </span>
          ))}
        </MarqueeTrack>
      </div>
    </section>
  );
}
