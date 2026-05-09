"use client";

import Link from "next/link";
import { forwardRef, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Magnetic } from "@/components/motion/MagneticButton";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg" | "xl";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  magnetic?: boolean;
  arrow?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:shadow-glow-gold hover:bg-gold-deep border border-gold",
  secondary:
    "border border-neon text-neon hover:bg-neon hover:text-ink hover:shadow-glow-medium",
  ghost: "text-paper hover:text-neon",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-body-sm",
  lg: "px-8 py-4 text-body-md",
  xl: "px-10 py-5 text-body-lg",
};

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(function Button(
  {
    href,
    variant = "primary",
    size = "lg",
    external = false,
    magnetic = true,
    arrow = true,
    className,
    children,
    ...rest
  },
  ref
) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  const inner = (
    <Link
      ref={ref}
      href={href}
      className={cn(
        "group/btn inline-flex items-center justify-center gap-3 rounded-pill font-body font-semibold uppercase tracking-eyebrow transition-all duration-base ease-out-quint",
        "focus-visible:outline-2 focus-visible:outline-offset-4",
        variants[variant],
        sizes[size],
        className
      )}
      data-cursor="hover"
      {...externalProps}
      {...rest}
    >
      <span>{children}</span>
      {arrow && (
        <span
          aria-hidden
          className="inline-block transition-transform duration-base ease-out-quint group-hover/btn:translate-x-1"
        >
          →
        </span>
      )}
    </Link>
  );

  if (!magnetic) return inner;
  return (
    <Magnetic strength={0.18} className="inline-block">
      {inner}
    </Magnetic>
  );
});
