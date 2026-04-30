"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { NAV_LINKS } from "@/content/nav";
import { WHATSAPP_URL } from "@/lib/whatsapp";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    document.body.dataset.scrollLocked = "true";
    return () => {
      delete document.body.dataset.scrollLocked;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-overlay flex flex-col bg-ink-deep/95 backdrop-blur-xl"
        >
          <div className="container-edge flex items-center justify-between py-6">
            <span className="font-display text-h3 font-bold uppercase">
              COLABLANCA<span className="text-gold">.</span>
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar menú"
              className="flex h-11 w-11 items-center justify-center rounded-pill border border-border-strong"
            >
              <span className="relative block h-5 w-5">
                <span className="absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 rotate-45 bg-paper" />
                <span className="absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 -rotate-45 bg-paper" />
              </span>
            </button>
          </div>

          <nav className="container-edge flex flex-1 flex-col justify-center" aria-label="Móvil">
            <ul className="space-y-4">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.15 + i * 0.06,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={onClose}
                    className="block font-display text-display-md font-bold uppercase leading-none transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="container-edge pb-12">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="inline-flex items-center gap-3 rounded-pill bg-gold px-8 py-4 font-body text-body-md font-bold uppercase tracking-eyebrow text-ink"
            >
              VISÍTANOS POR WHATSAPP
              <span aria-hidden>→</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
