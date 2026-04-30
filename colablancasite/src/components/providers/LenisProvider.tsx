"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { ScrollTrigger, registerGsap } from "@/lib/gsap";

/**
 * Smooth scroll global con Lenis.
 * Sincroniza el RAF con ScrollTrigger para que las animaciones de GSAP
 * lean el progreso real del scroll suavizado, no el nativo.
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

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
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
    }

    lenis.on("scroll", ScrollTrigger.update);
    const ticker = (time: number) => raf(time * 1000);
    if (typeof window !== "undefined") {
      // gsap ticker keeps everything in sync
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { gsap } = require("gsap");
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
    }

    return () => {
      lenis.destroy();
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { gsap } = require("gsap");
      gsap.ticker.remove(ticker);
    };
  }, []);

  return <>{children}</>;
}
