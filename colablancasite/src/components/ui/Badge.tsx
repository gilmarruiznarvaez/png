import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "neon" | "gold" | "outline";
  className?: string;
}

export function Badge({ children, variant = "neon", className }: BadgeProps) {
  const styles = {
    neon: "bg-neon text-ink",
    gold: "bg-gold text-ink",
    outline: "border border-neon text-neon",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-pill px-3 py-1 font-body text-eyebrow font-bold uppercase tracking-eyebrow",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
