"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitText } from "@/components/motion/SplitText";
import { MarqueeTrack } from "@/components/motion/MarqueeTrack";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const MARQUEE_ITEMS = [
  "CARWASH #1 DE TEGUCIGALPA",
  "DETAILING DE AUTORIDAD",
  "LUBRICENTRO EXPRESS",
  "BARBERÍA DE ELITE",
  "AITANA SALÓN",
  "CARNITAS COLABLANCA",
  "ABIERTOS LOS 7 DÍAS",
];

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative overflow-hidden bg-ink-deep" id="contenido">
      {/* Gradient base · siempre visible, queda como fallback si no hay video */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,#1a1a1a_0%,#0f0f0f_50%,#000_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,189,89,0.08)_0%,transparent_40%,rgba(255,248,85,0.05)_100%)]" />
        <div className="absolute inset-0 opacity-30 mix-blend-screen [background-image:radial-gradient(circle_at_20%_30%,rgba(255,189,89,0.25)_0%,transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,248,85,0.2)_0%,transparent_45%)]" />
      </div>

      {/* Video hero · auto-activa cuando dropees /videos/hero-main.mp4 */}
      {!videoFailed && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero/hero-main.jpg"
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-50" : "opacity-0"
          }`}
        >
          <source src="/videos/hero-main.mp4" type="video/mp4" />
        </video>
      )}

      {/* Velo oscuro sobre video para legibilidad de texto */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/70 to-ink-deep/40"
      />

      <div className="container-edge relative flex min-h-[calc(var(--viewport-h)*0.95)] flex-col justify-end pb-24 pt-40 lg:min-h-[var(--viewport-h)]">
        <Eyebrow tone="neon" className="text-neon">
          LA CASA DEL VENADO COLABLANCA · TEGUCIGALPA
        </Eyebrow>

        <div className="mt-8 max-w-[18ch]">
          <SplitText
            as="h1"
            text="COLABLANCA PLAZA"
            by="char"
            staggerChildren={0.025}
            className="font-display text-display-xl font-bold uppercase leading-none text-paper"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-text font-body text-body-xl text-paper"
        >
          Seis servicios premium. Una sola dirección.{" "}
          <em className="not-italic font-bold italic text-neon">
            Cero compromisos.
          </em>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-text font-body italic text-body-md text-paper-muted"
        >
          Donde Tegucigalpa viene a cuidar lo que importa: tu auto, tu imagen y tu mesa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button href={WHATSAPP_URL} external variant="primary" size="xl">
            VISÍTANOS HOY
          </Button>
          <Button href="#servicios" variant="secondary" size="xl">
            VER NUESTROS SERVICIOS
          </Button>
        </motion.div>

        <div className="mt-20 flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <span className="block h-12 w-px animate-pulse-glow bg-neon" />
            <span className="font-body text-eyebrow uppercase tracking-eyebrow text-paper-muted">
              SCROLL
            </span>
          </motion.div>
        </div>
      </div>

      {/* Marquee inferior */}
      <div className="relative border-y border-border bg-ink-deep py-6">
        <MarqueeTrack speed={45}>
          {MARQUEE_ITEMS.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-display text-h2 font-semibold uppercase text-paper-muted"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-neon" aria-hidden />
            </span>
          ))}
        </MarqueeTrack>
      </div>
    </section>
  );
}
