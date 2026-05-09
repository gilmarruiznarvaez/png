"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap";

/**
 * Smooth scroll global con Lenis.
 * Sincroniza el RAF con ScrollTrigger para que las animaciones de GSAP
 * lean el progreso real del scroll suavizado, no el nativo.
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    registerGsap();

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const ticker = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(ticker);
    };
  }, []);

  return <>{children}</>;
}
