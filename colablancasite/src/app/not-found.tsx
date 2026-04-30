import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden bg-ink-deep px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(255,189,89,0.18), transparent 60%), radial-gradient(ellipse at 50% 80%, rgba(255,248,85,0.12), transparent 70%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center text-center">
        <Eyebrow tone="neon">Error 404</Eyebrow>
        <h1 className="mt-6 font-display text-display-xl font-bold uppercase leading-display text-paper">
          Esta ruta no existe
        </h1>
        <p className="mt-6 max-w-xl font-body text-body-lg text-paper-muted">
          Pero nuestra dirección sí. Veníte a Colablanca Plaza y dejá que cuidemos
          tu carro, tu look y tu apetito.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary" size="lg">
            Volver al inicio
          </Button>
          <Link
            href="/#servicios"
            className="font-body text-body-sm font-semibold uppercase tracking-eyebrow text-neon transition-colors hover:text-paper"
            data-cursor="hover"
          >
            Ver servicios →
          </Link>
        </div>
      </div>
    </main>
  );
}
