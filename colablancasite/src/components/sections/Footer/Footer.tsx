import Link from "next/link";
import { BRAND } from "@/content/brand";
import { NAV_LINKS } from "@/content/nav";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { DeerAntlers } from "@/components/chrome/Loader";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-ink-deep">
      <div className="hairline-neon absolute inset-x-0 top-0" aria-hidden />
      <div className="container-edge section-padding">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <DeerAntlers className="h-12 w-12 text-gold" />
              <span className="font-display text-h2 font-bold uppercase">
                COLABLANCA<span className="text-gold">.</span>
              </span>
            </div>
            <p className="mt-6 max-w-text font-body text-body-md text-paper-muted">
              Seis servicios premium. Una sola dirección. La casa del venado en
              Tegucigalpa.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="font-body text-eyebrow font-bold uppercase tracking-eyebrow text-paper-muted">
              Navegación
            </p>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-body-md text-paper transition-colors hover:text-neon"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-body text-eyebrow font-bold uppercase tracking-eyebrow text-paper-muted">
              Síguenos
            </p>
            <ul className="mt-6 space-y-3 font-body text-body-md">
              <li>
                <Link href={BRAND.social.instagram.plaza} target="_blank" rel="noopener" className="hover:text-neon">
                  Instagram · Plaza
                </Link>
              </li>
              <li>
                <Link href={BRAND.social.instagram.carwash} target="_blank" rel="noopener" className="hover:text-neon">
                  Instagram · Carwash
                </Link>
              </li>
              <li>
                <Link href={BRAND.social.instagram.barberia} target="_blank" rel="noopener" className="hover:text-neon">
                  Instagram · Barbería
                </Link>
              </li>
              <li>
                <Link href={BRAND.social.instagram.salon} target="_blank" rel="noopener" className="hover:text-neon">
                  Instagram · Aitana
                </Link>
              </li>
              <li>
                <Link href={BRAND.social.instagram.restaurante} target="_blank" rel="noopener" className="hover:text-neon">
                  Instagram · Carnitas
                </Link>
              </li>
              <li>
                <Link href={BRAND.social.tiktok.plaza} target="_blank" rel="noopener" className="hover:text-neon">
                  TikTok · Plaza
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-body text-eyebrow font-bold uppercase tracking-eyebrow text-paper-muted">
              Contacto
            </p>
            <ul className="mt-6 space-y-3 font-body text-body-md text-paper">
              <li className="text-paper-muted">{BRAND.address.street}</li>
              <li>
                {BRAND.address.locality}, {BRAND.address.country}
              </li>
              <li>
                <Link href={WHATSAPP_URL} target="_blank" rel="noopener" className="text-neon hover:opacity-80">
                  WhatsApp
                </Link>
              </li>
              <li className="text-paper-muted">
                Lun–Sáb · {BRAND.hours.weekdays}
                <br />
                Dom · {BRAND.hours.sunday}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="font-body text-body-sm text-paper-muted">
            © {new Date().getFullYear()} COLABLANCA PLAZA · {BRAND.address.locality}, {BRAND.address.country} · Todos los derechos reservados.
          </p>
          <p className="font-body text-body-sm text-paper-muted">
            Hecho con disciplina en Honduras.
          </p>
        </div>
      </div>
    </footer>
  );
}
