"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/content/nav";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { DeerAntlers } from "@/components/chrome/Loader";
import { MobileMenu } from "@/components/chrome/MobileMenu";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const padding = useTransform(scrollY, [0, 200], ["1.5rem", "0.85rem"]);
  const blur = useTransform(scrollY, [0, 200], ["blur(0px)", "blur(14px)"]);
  const bg = useTransform(
    scrollY,
    [0, 200],
    ["rgba(38, 38, 38, 0)", "rgba(15, 15, 15, 0.78)"]
  );

  return (
    <>
      <motion.header
        style={{ paddingBlock: padding, backdropFilter: blur, backgroundColor: bg }}
        className="fixed inset-x-0 top-0 z-nav border-b border-transparent"
      >
        <div className="container-edge flex items-center justify-between gap-4">
          <Link
            href="#contenido"
            className="flex items-center gap-3"
            aria-label="COLABLANCA PLAZA · ir al inicio"
            data-cursor="hover"
          >
            <DeerAntlers className="h-8 w-8 text-gold" />
            <span className="font-display text-h3 font-bold uppercase tracking-tight">
              COLABLANCA<span className="text-gold">.</span>
            </span>
          </Link>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    data-cursor="hover"
                    className="font-body text-body-sm font-medium text-paper-muted transition-colors hover:text-paper"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="hidden items-center gap-2 rounded-pill bg-gold px-5 py-2.5 font-body text-body-sm font-bold uppercase tracking-eyebrow text-ink transition-shadow duration-base ease-out-quint hover:shadow-glow-medium md:inline-flex"
            >
              VISÍTANOS
              <span aria-hidden>→</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              data-cursor="hover"
              className={cn(
                "group flex h-11 w-11 items-center justify-center rounded-pill border border-border-strong bg-surface/60 backdrop-blur transition-colors hover:border-neon"
              )}
            >
              <span className="flex flex-col gap-1.5">
                <span className="block h-px w-5 bg-paper transition-all group-hover:bg-neon" />
                <span className="block h-px w-5 bg-paper transition-all group-hover:bg-neon" />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
