"use client";

import { useEffect } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden bg-ink-deep px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(255,189,89,0.18), transparent 60%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center text-center">
        <Eyebrow tone="gold">Algo salió del cauce</Eyebrow>
        <h1 className="mt-6 font-display text-display-lg font-bold uppercase leading-display text-paper">
          Tuvimos un tropiezo
        </h1>
        <p className="mt-6 max-w-xl font-body text-body-lg text-paper-muted">
          Probá recargar — si persiste, escribinos directo y te atendemos.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-3 rounded-pill border border-neon px-8 py-4 font-body text-body-md font-semibold uppercase tracking-eyebrow text-neon transition-all duration-base ease-out-quint hover:bg-neon hover:text-ink hover:shadow-glow-medium"
            data-cursor="hover"
          >
            Reintentar
          </button>
          <Button href="/" variant="ghost" size="lg" magnetic={false} arrow={false}>
            Inicio
          </Button>
        </div>
      </div>
    </main>
  );
}
