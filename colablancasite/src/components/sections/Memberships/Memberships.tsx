"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SplitText } from "@/components/motion/SplitText";
import { MEMBERSHIPS, RENEWAL, type Membership } from "@/content/memberships";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

export function Memberships() {
  return (
    <section
      id="membresias"
      className="relative bg-ink-deep section-padding-lg"
    >
      <div className="container-edge">
        <div className="max-w-content">
          <Eyebrow tone="muted">MEMBRESÍAS COLABLANCA</Eyebrow>
          <SplitText
            as="h2"
            text="Porque la excelencia, repetida,"
            className="mt-8 font-display text-display-lg font-bold uppercase leading-none text-paper"
          />
          <SplitText
            as="h2"
            text="se vuelve estilo de vida."
            delay={0.15}
            className="mt-2 font-display text-display-lg font-bold uppercase leading-none text-gold"
          />
          <p className="mt-8 max-w-text font-body text-body-lg text-paper-muted">
            Diseñamos cada membresía para que recibas más de lo que pagas — desde tu primera visita.{" "}
            <em className="not-italic font-bold italic text-neon">
              Sin contratos eternos. Sin letra chica.
            </em>{" "}
            Solo beneficios que sí se sienten.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {MEMBERSHIPS.map((m, i) => (
            <RevealOnScroll key={m.id} delay={(i % 3) * 0.08}>
              <MembershipCard membership={m} />
            </RevealOnScroll>
          ))}
        </div>

        {/* Banner asesor */}
        <RevealOnScroll>
          <div className="mt-16 border-y border-neon bg-ink py-12">
            <div className="container-edge text-center">
              <h3 className="font-display text-h1 font-bold uppercase">
                ¿No sabes cuál elegir?
              </h3>
              <p className="mx-auto mt-4 max-w-text font-body text-body-lg text-paper-muted">
                Cuéntanos sobre ti y tu familia. En menos de 5 minutos te decimos cuál es la membresía que más te conviene — sin compromiso.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4">
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="inline-flex items-center gap-3 rounded-pill bg-gold px-10 py-4 font-body text-body-md font-bold uppercase tracking-eyebrow text-ink transition-shadow hover:shadow-glow-medium"
                >
                  HABLAR CON UN ASESOR
                  <span aria-hidden>→</span>
                </Link>
                <p className="font-body text-body-sm text-paper-muted">
                  Sin contratos forzosos · Cancelación flexible · Beneficios desde tu primera visita · Atención humana, no robótica
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Renovación */}
        <div className="mt-20">
          <RevealOnScroll>
            <h3 className="font-display text-h2 font-bold uppercase">
              ¿Ya eres miembro y tu membresía está por vencer?
            </h3>
            <p className="mt-3 font-body text-body-lg text-paper-muted">
              Te tenemos algo bueno.
            </p>
          </RevealOnScroll>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {RENEWAL.map((r, i) => (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <article className="flex h-full flex-col gap-4 rounded-lg border border-gold/40 bg-surface p-8">
                  <span aria-hidden className="text-display-sm">
                    {r.icon}
                  </span>
                  <h4 className="font-display text-h1 font-bold uppercase text-gold">
                    {r.title}
                  </h4>
                  <p className="font-body text-body-md text-paper">{r.body}</p>
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="mt-4 inline-flex items-center gap-2 font-body text-body-sm font-bold uppercase tracking-eyebrow text-neon hover:gap-4"
                  >
                    {r.cta}
                    <span aria-hidden>→</span>
                  </Link>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MembershipCard({ membership: m }: { membership: Membership }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative flex h-full flex-col gap-5 rounded-lg border bg-surface p-8 transition-colors duration-base",
        m.hero
          ? "scale-[1.02] border-neon shadow-glow-medium animate-pulse-glow [background:linear-gradient(180deg,#262626_0%,#0f0f0f_100%)]"
          : "border-border hover:border-gold"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col items-start gap-2">
          {m.badge && <Badge variant={m.badge.tone}>{m.badge.label}</Badge>}
          {m.secondaryBadge && (
            <p className="font-body text-eyebrow text-paper-muted">
              {m.secondaryBadge}
            </p>
          )}
        </div>
        {m.hero && (
          <span className="text-display-sm" aria-hidden>
            ⭐
          </span>
        )}
      </div>

      <p className="font-body text-eyebrow font-bold uppercase tracking-eyebrow text-paper-muted">
        {m.subtitle}
      </p>

      <h3 className="font-display text-h2 font-bold uppercase leading-tight">
        Membresía {m.id.replace("-plus", "+").replace("-", " ")}
      </h3>

      <p className="font-body text-body-md text-paper">{m.pitch}</p>

      <ul className="space-y-2.5">
        {m.benefits.map((b, i) => (
          <li
            key={i}
            className="flex items-start gap-3 font-body text-body-sm text-paper"
          >
            <span aria-hidden className="mt-1 text-neon">
              ✓
            </span>
            {b}
          </li>
        ))}
      </ul>

      {m.impactQuote && (
        <p className="rounded-md border border-neon/30 bg-neon/5 p-4 font-body italic text-body-md text-neon">
          “{m.impactQuote}”
        </p>
      )}

      <p className="border-t border-border pt-4 font-body italic text-body-sm text-paper-muted">
        {m.hook}
      </p>

      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="hover"
        className={cn(
          "mt-auto inline-flex items-center justify-center gap-3 rounded-pill px-6 py-3 font-body text-body-sm font-bold uppercase tracking-eyebrow transition-all",
          m.hero
            ? "bg-gold text-ink hover:shadow-glow-gold"
            : "border border-paper text-paper hover:border-neon hover:text-neon"
        )}
      >
        {m.cta}
        <span aria-hidden>→</span>
      </Link>
    </motion.article>
  );
}
