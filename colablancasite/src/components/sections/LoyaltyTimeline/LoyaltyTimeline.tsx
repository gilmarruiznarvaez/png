"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SplitText } from "@/components/motion/SplitText";
import { LOYALTY_NODES, LOYALTY_NARRATIVES } from "@/content/loyalty";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

const GLOW_CLASSES: Record<string, string> = {
  "neon-soft": "border-neon/60 shadow-glow-soft",
  "neon-intense": "border-neon shadow-glow-medium",
  "gold-mix": "border-neon shadow-[0_0_30px_rgba(255,189,89,0.5)]",
  gold: "border-gold shadow-glow-gold",
  "gold-intense": "border-gold shadow-[0_0_44px_rgba(255,189,89,0.7)]",
  "gold-pure": "border-gold shadow-[0_0_50px_rgba(255,189,89,0.85)]",
  "gold-particles":
    "border-gold animate-pulse-glow shadow-[0_0_70px_rgba(255,189,89,0.9),0_0_8px_rgba(255,248,85,1)]",
};

export function LoyaltyTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);

  return (
    <section
      id="fidelizacion"
      ref={sectionRef}
      className="relative bg-ink section-padding-lg"
    >
      <div className="container-edge">
        <div className="max-w-content">
          <Eyebrow tone="muted">PROGRAMA DE FIDELIZACIÓN COLABLANCA</Eyebrow>
          <SplitText
            as="h2"
            text="Tu 6ta visita"
            className="mt-8 font-display text-display-lg font-bold uppercase leading-none text-paper"
          />
          <SplitText
            as="h2"
            text="siempre es"
            delay={0.15}
            className="mt-2 font-display text-display-lg font-bold uppercase leading-none text-paper"
          />
          <SplitText
            as="h2"
            text="nuestra."
            delay={0.3}
            className="mt-2 font-display text-display-lg font-bold uppercase leading-none text-gold"
          />
          <p className="mt-10 max-w-text font-body text-body-xl text-paper">
            Y de ahí en adelante, mejora cada vez.
          </p>
          <p className="mt-4 max-w-text font-body text-body-lg text-paper-muted">
            Cada 5 visitas, la siguiente va por nuestra cuenta.{" "}
            <em className="not-italic font-bold italic text-neon">
              El conteo se reinicia. Las recompensas no.
            </em>
          </p>
          <p className="mt-8 max-w-text rounded-md border border-border bg-surface/60 p-5 font-body text-body-sm text-paper-muted">
            Tu 6ta visita gratis aplica en Carwash · Barbería · Salón de
            Belleza. Escoge 1: Lavado Básico · Corte de Cabello · Esmaltado
            Semipermanente. Solo necesitamos tu nombre, cumpleaños y celular
            para activar tu beneficio.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Línea base + línea progresiva */}
          <div className="pointer-events-none absolute inset-x-0 top-12 hidden h-px bg-border lg:block" />
          <motion.div
            style={{ width: lineWidth }}
            className="pointer-events-none absolute inset-x-0 top-12 hidden h-[2px] origin-left bg-[linear-gradient(90deg,#fff855_0%,#ffbd59_100%)] shadow-glow-medium lg:block"
          />

          <ul className="grid gap-8 lg:grid-cols-7 lg:gap-4">
            {LOYALTY_NODES.map((node) => (
              <li key={node.visit} className="relative">
                <RevealOnScroll>
                  <div className="flex flex-col items-center text-center">
                    <span
                      className={cn(
                        "relative mb-6 flex h-24 w-24 items-center justify-center rounded-pill border-2 bg-ink-deep text-display-sm transition-all",
                        GLOW_CLASSES[node.glow]
                      )}
                    >
                      <span aria-hidden>{node.icon}</span>
                    </span>
                    <p className="font-display text-h2 font-bold leading-none text-gold">
                      {node.visit}
                    </p>
                    <p className="mt-2 font-body text-eyebrow font-bold uppercase tracking-eyebrow text-neon">
                      {node.tier}
                    </p>
                    <p className="mt-3 font-display text-h3 font-semibold uppercase leading-tight text-paper">
                      {node.prize}
                    </p>
                    <p className="mt-3 font-body text-body-sm text-paper-muted">
                      {node.description}
                    </p>
                  </div>
                </RevealOnScroll>
              </li>
            ))}
          </ul>

          {/* Microcopys narrativos */}
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {Object.values(LOYALTY_NARRATIVES).map((text, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <p className="border-l border-neon/40 pl-5 font-body italic text-body-md text-paper-muted">
                  {text}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Banner activación */}
        <RevealOnScroll>
          <div className="mt-20 rounded-lg border border-neon bg-[radial-gradient(circle_at_50%_50%,rgba(255,248,85,0.06)_0%,transparent_70%)] p-12 text-center">
            <h3 className="font-display text-h1 font-bold uppercase">
              Empezar es tan fácil como venir.
            </h3>
            <p className="mx-auto mt-4 max-w-text font-body text-body-lg text-paper-muted">
              Regálanos tu nombre, cumpleaños y celular en tu próxima visita.
              Nosotros nos encargamos del resto.
            </p>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="mt-8 inline-flex items-center gap-3 rounded-pill bg-gold px-10 py-4 font-body text-body-md font-bold uppercase tracking-eyebrow text-ink transition-shadow hover:shadow-glow-gold"
            >
              EMPEZAR MI CONTEO HOY
              <span aria-hidden>→</span>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
