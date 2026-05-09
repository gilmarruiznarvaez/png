"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cursor magnético circular con halo. Usa lerp en RAF y transform3d.
 * Oculto en touch / pointer:coarse y bajo prefers-reduced-motion.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
    document.body.dataset.cursor = "custom";

    const target = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const onOver = (e: Event) => {
      const el = e.target as HTMLElement;
      const interactive = el.closest("a, button, [data-cursor='hover']");
      if (interactive && ringRef.current) {
        ringRef.current.dataset.state = "hover";
      }
    };
    const onOut = () => {
      if (ringRef.current) ringRef.current.dataset.state = "idle";
    };

    const tick = () => {
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      delete document.body.dataset.cursor;
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-cursor h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon mix-blend-difference"
      />
      <div
        ref={ringRef}
        aria-hidden
        data-state="idle"
        className="pointer-events-none fixed left-0 top-0 z-cursor h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon/70 mix-blend-difference transition-[width,height,opacity] duration-300 ease-out-quint data-[state=hover]:h-16 data-[state=hover]:w-16 data-[state=hover]:bg-neon/15"
      />
    </>
  );
}
