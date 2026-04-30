import { cn } from "@/lib/cn";

interface PlaceholderProps {
  label: string;
  aspect?: string;
  className?: string;
  hint?: string;
}

/**
 * Placeholder visible mientras llegan los assets reales.
 * Bloque #333 con texto neón describiendo la imagen pendiente.
 */
export function Placeholder({
  label,
  aspect = "16/9",
  className,
  hint,
}: PlaceholderProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-md border border-border bg-[#333]",
        className
      )}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <span className="font-body text-eyebrow font-bold uppercase tracking-eyebrow text-neon">
          IMAGEN PENDIENTE
        </span>
        <span className="mt-3 font-display text-h3 font-semibold uppercase text-paper">
          {label}
        </span>
        {hint && (
          <span className="mt-2 font-body text-body-sm text-paper-muted">
            {hint}
          </span>
        )}
      </div>
    </div>
  );
}
