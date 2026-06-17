"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/** Registra GSAP plugins una sola vez del lado del cliente. */
export function registerGsap(): typeof gsap {
  if (typeof window === "undefined") return gsap;
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "expo.out", duration: 0.9 });
    registered = true;
  }
  return gsap;
}

export { gsap, ScrollTrigger };
