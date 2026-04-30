"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface MarqueeTrackProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  reverse?: boolean;
}

/** Ticker infinito CSS-only · pausa en hover. */
export function MarqueeTrack({
  children,
  speed = 40,
  className,
  reverse = false,
}: MarqueeTrackProps) {
  const reduced = useReducedMotion();
  if (reduced) {
    return (
      <div className={className}>
        <div className="flex gap-12 px-6">{children}</div>
      </div>
    );
  }
  return (
    <div className={`group overflow-hidden whitespace-nowrap ${className ?? ""}`}>
      <div
        className="inline-flex min-w-full gap-12 will-change-transform group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : "normal"}`,
        }}
      >
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center gap-12">
          {children}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
