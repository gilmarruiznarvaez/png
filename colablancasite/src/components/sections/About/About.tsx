import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SplitText } from "@/components/motion/SplitText";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export function About() {
  return (
    <section
      id="sobre-nosotros"
      className="relative bg-ink section-padding-lg"
    >
      <div className="container-edge grid items-start gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Eyebrow tone="muted">SOBRE COLABLANCA PLAZA</Eyebrow>
          <div className="mt-8">
            <SplitText
              as="h2"
              text="No competimos."
              className="font-display text-display-lg font-bold uppercase leading-none text-paper"
            />
            <SplitText
              as="h2"
              text="Definimos el estándar."
              delay={0.2}
              className="mt-3 font-display text-display-lg font-bold uppercase leading-none text-gold"
            />
          </div>
          <RevealOnScroll delay={0.4}>
            <div className="mt-12 max-w-text space-y-6 font-body text-body-lg text-paper">
              <p>
                Tegucigalpa cambió el día que abrimos. Lo que antes requería
                cinco lugares distintos, hoy ocurre en uno: el tuyo.
              </p>
              <p>
                COLABLANCA PLAZA no es una plaza comercial. Es la respuesta a
                una pregunta que la ciudad llevaba años haciendo:{" "}
                <em className="not-italic font-bold italic text-neon">
                  ¿dónde encuentro excelencia real, sin tener que escoger entre
                  calidad y conveniencia?
                </em>{" "}
                Aquí. Siempre aquí.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.6}>
            <div className="mt-10">
              <Button href={WHATSAPP_URL} external variant="secondary" size="lg">
                CONOCE NUESTRA HISTORIA
              </Button>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll className="lg:col-span-5" delay={0.2}>
          <Placeholder
            label="Vista aérea de la plaza COLABLANCA"
            aspect="3/4"
            hint="Foto vertical · golden hour · plaza completa"
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
