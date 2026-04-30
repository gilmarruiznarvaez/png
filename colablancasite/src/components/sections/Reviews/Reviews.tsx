"use client";

import Image from "next/image";
import { useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { MarqueeTrack } from "@/components/motion/MarqueeTrack";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { REVIEWS, type Review } from "@/content/reviews";
import { CANVA_LINKS } from "@/lib/whatsapp";

export function Reviews() {
  const half = Math.ceil(REVIEWS.length / 2);
  const trackA = REVIEWS.slice(0, half);
  const trackB = REVIEWS.slice(half);

  return (
    <section id="resenas" className="relative bg-ink section-padding-lg">
      <div className="container-edge">
        <div className="max-w-content">
          <Eyebrow tone="muted">RESEÑAS</Eyebrow>
          <h2 className="mt-8 font-display text-display-lg font-bold uppercase leading-none">
            Lo que dice la ciudad.
          </h2>
          <p className="mt-6 max-w-text font-body text-body-xl text-paper-muted">
            Las palabras de quienes ya entendieron por qué venir.
          </p>
        </div>
      </div>

      <div className="mt-16 space-y-6">
        <MarqueeTrack speed={70}>
          {trackA.map((r, i) => (
            <ReviewCard key={i} review={r} index={i + 1} />
          ))}
        </MarqueeTrack>
        <MarqueeTrack speed={85} reverse>
          {trackB.map((r, i) => (
            <ReviewCard key={i} review={r} index={half + i + 1} />
          ))}
        </MarqueeTrack>
      </div>

      <div className="container-edge">
        <RevealOnScroll>
          <div className="mt-20 rounded-lg border border-neon bg-ink-deep p-12 text-center">
            <h3 className="font-display text-h1 font-bold uppercase">
              Tu historia también merece contarse.
            </h3>
            <p className="mx-auto mt-4 max-w-text font-body text-body-lg text-paper-muted">
              Déjanos tu testimonio y recibe{" "}
              <em className="not-italic font-bold italic text-neon">20% de descuento</em>{" "}
              en tu próxima visita.
            </p>
            <div className="mt-8">
              <Button href={CANVA_LINKS.testimonio} external variant="primary" size="lg">
                DEJAR MI TESTIMONIO
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function Avatar({ review, index }: { review: Review; index: number }) {
  const [imgFailed, setImgFailed] = useState(false);
  const initials = review.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  const padded = String(index).padStart(2, "0");
  const avatarSrc = `/images/testimonios/avatar-${padded}.jpg`;

  if (!imgFailed) {
    return (
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-pill">
        <Image
          src={avatarSrc}
          alt={review.name}
          fill
          sizes="48px"
          className="object-cover"
          onError={() => setImgFailed(true)}
        />
      </div>
    );
  }

  return (
    <span
      aria-hidden
      className="flex h-12 w-12 items-center justify-center rounded-pill bg-gold/20 font-display text-h3 font-bold text-gold"
    >
      {initials}
    </span>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <article className="relative w-[min(360px,80vw)] shrink-0 whitespace-normal rounded-lg border border-border bg-surface p-7">
      <div className="flex items-center gap-4">
        <Avatar review={review} index={index} />
        <div>
          <p className="font-body text-body-md font-semibold text-paper">{review.name}</p>
          <p className="font-body text-body-sm text-paper-muted">{review.city}</p>
        </div>
      </div>
      <div aria-label={`${review.rating} estrellas`} className="mt-4 flex gap-1 text-neon">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} aria-hidden>★</span>
        ))}
      </div>
      <p className="mt-4 font-body text-body-md leading-relaxed text-paper">{review.body}</p>
      <p className="mt-4 inline-block rounded-pill bg-ink px-3 py-1 font-body text-eyebrow font-bold uppercase tracking-eyebrow text-paper-muted">
        {review.service}
      </p>
    </article>
  );
}
