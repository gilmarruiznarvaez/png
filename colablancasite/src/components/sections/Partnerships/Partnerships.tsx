import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SplitText } from "@/components/motion/SplitText";
import { CANVA_LINKS } from "@/lib/whatsapp";

export function Partnerships() {
  return (
    <section id="alianzas" className="relative bg-ink-deep section-padding-lg">
      <div className="container-edge grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Eyebrow tone="muted">ALIANZAS EMPRESARIALES</Eyebrow>
          <SplitText
            as="h2"
            text="Alianzas que tus colaboradores"
            className="mt-8 font-display text-display-md font-bold uppercase leading-none text-paper"
          />
          <SplitText
            as="h2"
            text="van a agradecer."
            delay={0.15}
            className="mt-2 font-display text-display-md font-bold uppercase leading-none text-gold"
          />
          <RevealOnScroll delay={0.4}>
            <p className="mt-8 max-w-text font-body text-body-lg text-paper-muted">
              Las mejores empresas de Tegucigalpa ya entienden que cuidar al
              equipo empieza por darles acceso a lo bueno. Beneficios reales
              para tus colaboradores, en la plaza más completa de la ciudad.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.6}>
            <div className="mt-10">
              <Button href={CANVA_LINKS.alianzas} external variant="primary" size="lg">
                SOLICITAR ALIANZA EMPRESARIAL
              </Button>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll className="lg:col-span-5" delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            {["EQUIPO", "BENEFICIO", "COBERTURA", "PLAZA"].map((label) => (
              <div
                key={label}
                className="aspect-square rounded-lg border border-border bg-surface p-6 transition-colors hover:border-gold"
              >
                <p className="font-body text-eyebrow font-bold uppercase tracking-eyebrow text-paper-muted">
                  {label}
                </p>
                <p className="mt-auto pt-12 font-display text-h2 font-bold uppercase text-gold">
                  +
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
