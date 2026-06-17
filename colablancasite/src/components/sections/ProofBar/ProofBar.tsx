"use client";

import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";

interface ProofItem {
  prefix?: string;
  value: number | string;
  suffix?: string;
  label: string;
  isText?: boolean;
}

const ITEMS: ProofItem[] = [
  { prefix: "★ ", value: 4.9, label: "Calificación promedio" },
  { prefix: "+", value: 10000, label: "Clientes satisfechos" },
  { value: "7 días", label: "Abiertos para ti", isText: true },
  { value: 6, label: "Servicios bajo un techo" },
];

export function ProofBar() {
  return (
    <section className="relative border-y border-border bg-ink-deep py-16 md:py-24">
      <div className="container-edge grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <div className="flex flex-col items-start gap-3">
              <p className="font-display text-display-md font-bold uppercase leading-none text-neon">
                {item.prefix}
                {item.isText ? (
                  <span>{item.value}</span>
                ) : typeof item.value === "number" && Number.isInteger(item.value) ? (
                  <AnimatedCounter to={item.value} />
                ) : (
                  <AnimatedCounter
                    to={typeof item.value === "number" ? item.value : 0}
                    format={(n) => n.toFixed(1)}
                  />
                )}
                {item.suffix}
              </p>
              <p className="font-body text-body-md text-paper">{item.label}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
