import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SplitText } from "@/components/motion/SplitText";
import { CANVA_LINKS } from "@/lib/whatsapp";

export function Careers() {
  return (
    <section id="carreras" className="relative bg-ink section-padding-lg">
      <div className="container-edge max-w-content">
        <Eyebrow tone="muted">TRABAJA CON NOSOTROS</Eyebrow>
        <SplitText
          as="h2"
          text="Si buscas dónde trabajar"
          className="mt-8 font-display text-display-lg font-bold uppercase leading-none text-paper"
        />
        <SplitText
          as="h2"
          text="buscas aquí."
          delay={0.15}
          className="mt-2 font-display text-display-lg font-bold uppercase leading-none text-gold"
        />
        <RevealOnScroll delay={0.4}>
          <p className="mt-10 max-w-text font-body text-body-xl text-paper-muted">
            Aquí no contratamos puestos. Construimos equipos.{" "}
            <em className="not-italic font-bold italic text-neon">
              Si lo tuyo es la excelencia, ya tienes algo en común con nosotros.
            </em>
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.6}>
          <div className="mt-10">
            <Button href={CANVA_LINKS.carreras} external variant="secondary" size="lg">
              VER PLAZAS DISPONIBLES
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
