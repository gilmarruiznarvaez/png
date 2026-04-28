/**
 * Home · placeholder de preview del sistema de diseño.
 * Esta vista se reemplaza en el Paso 7 por la composición de las 14 secciones reales.
 * Mostramos paleta, tipografía y reglas de uso para validación visual rápida.
 */
export default function Home() {
  return (
    <main id="contenido" className="min-h-screen bg-ink text-paper">
      {/* Hero del preview */}
      <section className="container-edge section-padding-lg">
        <p className="font-body text-eyebrow font-bold uppercase tracking-eyebrow text-neon">
          SISTEMA DE DISEÑO · PREVIEW
        </p>
        <h1 className="mt-6 font-display text-display-xl font-bold uppercase leading-none">
          COLABLANCA
          <br />
          <span className="text-gold">PLAZA.</span>
        </h1>
        <p className="mt-8 max-w-text font-body text-body-xl text-paper-muted">
          Seis servicios premium. Una sola dirección.{" "}
          <em className="not-italic font-bold italic text-neon">
            Cero compromisos.
          </em>
        </p>
      </section>

      {/* Paleta */}
      <section className="container-edge section-padding border-t border-border">
        <p className="font-body text-eyebrow font-bold uppercase tracking-eyebrow text-paper-muted">
          Paleta
        </p>
        <h2 className="mt-4 font-display text-h1 font-semibold uppercase">
          La luz se usa con disciplina.
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {[
            { name: "ink", hex: "#262626", role: "lienzo" },
            { name: "ink-deep", hex: "#0f0f0f", role: "contraste" },
            { name: "paper", hex: "#ffffff", role: "texto" },
            { name: "gold", hex: "#ffbd59", role: "marca · CTAs" },
            { name: "neon", hex: "#fff855", role: "luz · énfasis" },
          ].map((c) => (
            <div
              key={c.name}
              className="overflow-hidden rounded-lg border border-border bg-surface"
            >
              <div
                className="h-32 w-full"
                style={{ backgroundColor: c.hex }}
                aria-hidden
              />
              <div className="p-4">
                <p className="font-display text-h3 font-semibold uppercase">
                  {c.name}
                </p>
                <p className="mt-1 font-body text-body-sm text-paper-muted">
                  {c.hex}
                </p>
                <p className="mt-2 font-body text-body-sm">{c.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tipografía */}
      <section className="container-edge section-padding border-t border-border">
        <p className="font-body text-eyebrow font-bold uppercase tracking-eyebrow text-paper-muted">
          Tipografía
        </p>
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-body text-body-sm uppercase tracking-eyebrow text-paper-muted">
              Display · Antonio
            </p>
            <p className="mt-3 font-display text-display-md font-bold uppercase leading-none">
              No competimos.
              <br />
              <span className="text-gold">Definimos el estándar.</span>
            </p>
          </div>
          <div>
            <p className="font-body text-body-sm uppercase tracking-eyebrow text-paper-muted">
              Body · Poppins
            </p>
            <p className="mt-3 font-body text-body-lg text-paper">
              Tegucigalpa cambió el día que abrimos. Lo que antes requería cinco
              lugares distintos, hoy ocurre en uno{" "}
              <em className="not-italic font-bold italic text-neon">
                — el tuyo.
              </em>
            </p>
            <p className="mt-4 font-body text-body-md text-paper-muted">
              Cuerpo Poppins Medium 500. Línea de altura cómoda, ideal para
              lectura larga sobre lienzo oscuro.
            </p>
          </div>
        </div>
      </section>

      {/* Hairline + nota de avance */}
      <section className="container-edge section-padding border-t border-border">
        <div className="hairline-neon" />
        <p className="mt-12 max-w-text font-body text-body-md text-paper-muted">
          Próximos pasos al confirmar paleta y tipografía: Lenis smooth scroll +
          cursor magnético + loading screen + componentes base (Button,
          MagneticButton, Marquee, Reveal, Counter), seguido de Navbar/Footer y
          las 14 secciones del brief.
        </p>
      </section>
    </main>
  );
}
