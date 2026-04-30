import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { BRAND } from "@/content/brand";

export function Location() {
  return (
    <section id="ubicacion" className="relative bg-ink-deep section-padding-lg">
      <div className="container-edge grid items-start gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow tone="muted">UBICACIÓN Y HORARIOS</Eyebrow>
          <h2 className="mt-8 font-display text-display-md font-bold uppercase leading-none">
            Dónde estamos
          </h2>
          <p className="mt-8 max-w-text font-body text-body-lg text-paper">
            {BRAND.address.street}
          </p>
          <p className="mt-2 font-body text-body-md text-paper-muted">
            {BRAND.address.locality}, {BRAND.address.country}
          </p>

          <h3 className="mt-12 font-display text-h1 font-bold uppercase">
            Cuándo atendemos
          </h3>
          <dl className="mt-6 space-y-3 font-body text-body-md text-paper">
            <div className="flex items-baseline gap-4">
              <dt className="w-32 text-paper-muted">Lun – Sáb</dt>
              <dd>{BRAND.hours.weekdays}</dd>
            </div>
            <div className="flex items-baseline gap-4">
              <dt className="w-32 text-paper-muted">Domingo</dt>
              <dd>{BRAND.hours.sunday}</dd>
            </div>
          </dl>

          <RevealOnScroll>
            <div className="mt-10 inline-flex animate-pulse-glow items-center gap-2 rounded-pill border border-neon px-5 py-2 font-body text-eyebrow font-bold uppercase tracking-eyebrow text-neon">
              ABIERTOS LOS 7 DÍAS DE LA SEMANA
            </div>
          </RevealOnScroll>

          <div className="mt-10">
            <Button href={BRAND.address.mapUrl} external variant="primary" size="lg">
              CÓMO LLEGAR
            </Button>
          </div>
        </div>

        <RevealOnScroll className="lg:col-span-7" delay={0.2}>
          <div className="overflow-hidden rounded-lg border border-border [filter:invert(0.92)_hue-rotate(180deg)_saturate(0.6)_brightness(0.95)]">
            <iframe
              title="Ubicación de COLABLANCA PLAZA en el mapa"
              src="https://www.google.com/maps?q=Anillo+Periferico+Hato+de+Enmedio+Tegucigalpa+Honduras&output=embed"
              width="100%"
              height="540"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
