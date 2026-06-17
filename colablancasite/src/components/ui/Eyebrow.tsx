import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  tone?: "neon" | "gold" | "muted";
}

export function Eyebrow({ children, className, tone = "neon" }: EyebrowProps) {
  const colors = {
    neon: "text-neon",
    gold: "text-gold",
    muted: "text-paper-muted",
  } as const;
  return (
    <p
      className={cn(
        "font-body text-eyebrow font-bold uppercase tracking-eyebrow",
        colors[tone],
        className
      )}
    >
      <span aria-hidden className="mr-3 inline-block h-px w-8 align-middle bg-current opacity-60" />
      {children}
    </p>
  );
}
