import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge utility para clases Tailwind.
 * Combina clsx (condicionales) con tailwind-merge (deduplica conflictos).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
