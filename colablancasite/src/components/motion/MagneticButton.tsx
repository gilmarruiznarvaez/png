"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { forwardRef, type ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

/** Wrap magnético: el contenido sigue el cursor con factor `strength`. */
export const Magnetic = forwardRef<HTMLDivElement, MagneticProps>(
  function Magnetic({ children, strength = 0.25, className }, ref) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 220, damping: 22, mass: 0.6 });
    const sy = useSpring(y, { stiffness: 220, damping: 22, mass: 0.6 });

    return (
      <motion.div
        ref={ref}
        onPointerMove={(e) => {
          if (window.matchMedia("(pointer: coarse)").matches) return;
          const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          x.set((e.clientX - cx) * strength);
          y.set((e.clientY - cy) * strength);
        }}
        onPointerLeave={() => {
          x.set(0);
          y.set(0);
        }}
        style={{ x: sx, y: sy }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
);
