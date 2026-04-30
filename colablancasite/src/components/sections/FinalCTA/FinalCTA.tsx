import { Button } from "@/components/ui/Button";
import { SplitText } from "@/components/motion/SplitText";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section className="relative flex min-h-[var(--viewport-h)] items-center overflow-hidden bg-ink-pure section-padding-lg">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,rgba(255,189,89,0.12)_0%,transparent_60%)]" />
      <div className="container-edge relative">
        <p className="font-body text-eyebrow font-bold uppercase tracking-eyebrow text-paper-muted">
          UNA SOLA DECISIÓN
        </p>
        <SplitText
          as="h2"
          text="Ven a vivir la"
          className="mt-8 font-display text-display-xl font-bold uppercase leading-none text-paper"
        />
        <SplitText
          as="h2"
          text="experiencia COLABLANCA."
          delay={0.2}
          className="mt-3 font-display text-display-xl font-bold uppercase leading-none text-gold"
        />
        <RevealOnScroll delay={0.5}>
          <p className="mt-10 max-w-text font-body italic text-body-xl text-paper-muted">
            El resto se entiende mejor adentro.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.7}>
          <div className="mt-12 flex flex-col items-start gap-4">
            <Button href={WHATSAPP_URL} external variant="primary" size="xl">
              ESCRÍBENOS POR WHATSAPP
            </Button>
            <p className="font-body text-body-sm text-paper-muted">
              Respuesta promedio: menos de 5 minutos.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
