import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SplitText } from "@/components/motion/SplitText";
import { CANVA_LINKS } from "@/lib/whatsapp";

export function QualitySurvey() {
  return (
    <section className="relative bg-ink-deep section-padding">
      <div className="container-edge">
        <RevealOnScroll>
          <div className="mx-auto max-w-content rounded-lg border border-border bg-surface p-12 lg:p-20">
            <Eyebrow tone="muted">CONTROL DE CALIDAD</Eyebrow>
            <SplitText
              as="h2"
              text="Tu opinión"
              className="mt-8 font-display text-display-lg font-bold uppercase leading-none text-paper"
            />
            <SplitText
              as="h2"
              text="construye esta casa."
              delay={0.15}
              className="mt-2 font-display text-display-lg font-bold uppercase leading-none text-gold"
            />
            <p className="mt-8 max-w-text font-body text-body-lg text-paper-muted">
              Si algo podemos hacer mejor, queremos saberlo.{" "}
              <em className="not-italic font-bold italic text-neon">
                Y queremos compensártelo.
              </em>
            </p>
            <div className="mt-10">
              <Button href={CANVA_LINKS.encuesta} external variant="secondary" size="lg">
                PARTICIPAR EN LA ENCUESTA
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
