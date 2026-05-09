"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  by?: "word" | "char";
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

/**
 * Mask reveal · divide texto en palabras o letras y las anima con stagger
 * desde y=110% a 0 con opacity 0→1.
 */
export function SplitText({
  text,
  className,
  delay = 0,
  staggerChildren = 0.04,
  by = "word",
  as = "h1",
}: SplitTextProps) {
  const reduced = useReducedMotion();
  const tokens = by === "char" ? Array.from(text) : text.split(" ");

  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delayChildren: delay,
        staggerChildren: reduced ? 0 : staggerChildren,
      }}
      aria-label={text}
    >
      {tokens.map((token, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: reduced ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: reduced ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {token}
            {by === "word" && i < tokens.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
