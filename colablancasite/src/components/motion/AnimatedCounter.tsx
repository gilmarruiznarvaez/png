"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  to: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
}

/** Cuenta de 0 → `to` cuando entra al viewport. */
export function AnimatedCounter({
  to,
  duration = 1.6,
  format = (n: number) => Math.round(n).toLocaleString("es-HN"),
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduced = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      mv.set(to);
      return;
    }
    mv.set(to);
  }, [inView, to, mv, reduced]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = format(v);
    });
  }, [spring, format]);

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}
