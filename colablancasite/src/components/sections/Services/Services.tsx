"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Placeholder } from "@/components/ui/Placeholder";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SplitText } from "@/components/motion/SplitText";
import { SERVICES, type Service } from "@/content/services";
import { WHATSAPP_URL } from "@/lib/whatsapp";

/** Mapa de servicio id → ruta de imagen real en /public */
const SERVICE_IMAGES: Record<string, string> = {
    carwash:     "/images/servicios/carwash/cover.jpg",
    detailing:   "/images/servicios/detailing/cover.jpg",
    lubricentro: "/images/servicios/lubricentro/cover.jpg",
    barberia:    "/images/servicios/barberia/cover.jpg",
    salon:       "/images/servicios/salon/cover.jpg",
    restaurante: "/images/servicios/restaurante/cover.jpg",
};

export function Services() {
    return (
          <section id="servicios" className="relative bg-ink-deep section-padding-lg">
                <div className="container-edge">
                        <div className="max-w-content">
                                  <Eyebrow tone="muted">NUESTROS SERVICIOS</Eyebrow>Eyebrow>
                                  <SplitText
                                                as="h2"
                                                text="Seis servicios."
                                                className="mt-8 font-display text-display-lg font-bold uppercase leading-none text-paper"
                                              />
                                  <SplitText
                                                as="h2"
                                                text="Una sola dirección."
                                                delay={0.15}
                                                className="mt-2 font-display text-display-lg font-bold uppercase leading-none text-gold"
                                              />
                        </div>div>
                
                        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                          {SERVICES.map((s, i) => (
                        <RevealOnScroll key={s.id} delay={(i % 3) * 0.08}>
                                      <ServiceCard service={s} />
                        </RevealOnScroll>RevealOnScroll>
                      ))}
                        </div>div>
                </div>div>
          </section>section>
        );
}

function ServiceCard({ service }: { service: Service }) {
    const imageSrc = SERVICE_IMAGES[service.id];
  
    return (
          <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors duration-base hover:border-neon"
                >
            {/* Imagen del servicio: next/image cuando exista el archivo, Placeholder mientras tanto */}
                <div className="relative aspect-[4/3] overflow-hidden">
                        <div className="transition-transform duration-700 ease-out-quint group-hover:scale-[1.06]">
                          {imageSrc ? (
                              <Image
                                              src={imageSrc}
                                              alt={service.imageHint}
                                              fill
                                              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                              className="object-cover"
                                              onError={(e) => {
                                                                // Si la imagen no existe aún, ocultar y mostrar placeholder
                                                                (e.currentTarget as HTMLImageElement).style.display = "none";
                                              }}
                                            />
                            ) : null}
                                  <Placeholder label={service.imageHint} aspect="4/3" />
                        </div>div>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/30 to-transparent" />
                </div>div>
          
                <div className="flex flex-1 flex-col gap-5 p-7">
                        <p className="font-body text-eyebrow font-bold uppercase tracking-eyebrow text-neon">
                          {service.tag}
                        </p>p>
                        <h3 className="font-display text-h2 font-bold uppercase leading-tight text-paper">
                          {service.title}
                        </h3>h3>
                        <p className="font-body italic text-body-md text-paper-muted">
                          {service.tagline}
                        </p>p>
                        <ul className="mt-2 space-y-2">
                          {service.bullets.map((b, i) => (
                              <li
                                              key={i}
                                              className="flex items-start gap-3 font-body text-body-sm text-paper"
                                            >
                                            <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-neon" />
                                {b}
                              </li>li>
                            ))}
                        </ul>ul>
                        <p className="mt-2 border-t border-border pt-4 font-body italic text-body-sm text-paper-muted">
                          {service.hook}
                        </p>p>
                        <div className="mt-auto pt-5">
                                  <Link
                                                href={WHATSAPP_URL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                data-cursor="hover"
                                                className="inline-flex items-center gap-2 font-body text-body-sm font-bold uppercase tracking-eyebrow text-gold transition-all hover:gap-4 hover:text-neon"
                                              >
                                    {service.cta}
                                              <span aria-hidden>→</span>span>
                                  </Link>Link>
                        </div>div>
                </div>div>
          </motion.article>motion.article>
        );
}</section>
