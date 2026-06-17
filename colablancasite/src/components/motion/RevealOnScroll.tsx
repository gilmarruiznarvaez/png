"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

/** Aparición desde abajo con mask suave al entrar al viewport. */
export function RevealOnScroll({
  children,
  delay = 0,
  y = 32,
  className,
  once = true,
}: RevealOnScrollProps) {
  const reduced = useReducedMotion();
  const initial = reduced ? { opacity: 1, y: 0 } : { opacity: 0, y };
  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{
        duration: reduced ? 0 : 0.85,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
