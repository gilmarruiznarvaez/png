"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Loader inicial · logo + línea neón cargando, máximo 1.2s, fade out.
 * Se muestra una sola vez por sesión (sessionStorage).
 */
export function Loader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = typeof window !== "undefined" && sessionStorage.getItem("colablanca:seen");
    if (seen) return;
    setVisible(true);
    document.body.dataset.scrollLocked = "true";
    const t = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("colablanca:seen", "1");
      delete document.body.dataset.scrollLocked;
    }, 1200);
    return () => {
      clearTimeout(t);
      delete document.body.dataset.scrollLocked;
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-loader flex items-center justify-center bg-ink-deep"
          aria-label="Cargando"
        >
          <div className="flex flex-col items-center gap-8">
            <DeerAntlers className="h-16 w-16 text-gold glow-gold" />
            <div className="relative h-px w-44 overflow-hidden bg-border">
              <motion.span
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
                className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-neon to-transparent"
              />
            </div>
            <p className="font-display text-eyebrow uppercase tracking-eyebrow text-paper-muted">
              COLABLANCA · TEGUCIGALPA
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Marca de los cuernos del venado · usada en Loader, Navbar y Footer. */
export function DeerAntlers({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M55 50 C 50 70, 45 95, 55 130 C 60 145, 70 160, 80 165 C 70 145, 65 125, 65 105 C 70 110, 75 115, 82 117 C 78 105, 75 92, 75 80 C 80 88, 85 92, 92 95 C 87 80, 88 65, 95 55 C 92 65, 95 78, 100 88 L 100 175 L 100 88 C 105 78, 108 65, 105 55 C 112 65, 113 80, 108 95 C 115 92, 120 88, 125 80 C 125 92, 122 105, 118 117 C 125 115, 130 110, 135 105 C 135 125, 130 145, 120 165 C 130 160, 140 145, 145 130 C 155 95, 150 70, 145 50 C 140 60, 135 70, 128 75 C 130 65, 132 55, 135 45 C 125 55, 118 65, 110 70 C 108 60, 105 50, 100 45 C 95 50, 92 60, 90 70 C 82 65, 75 55, 65 45 C 68 55, 70 65, 72 75 C 65 70, 60 60, 55 50 Z" />
    </svg>
  );
}
