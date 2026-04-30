export interface LoyaltyNode {
  visit: string;
  icon: string;
  prize: string;
  description: string;
  tier: string;
  glow: "neon-soft" | "neon-intense" | "gold-mix" | "gold" | "gold-intense" | "gold-pure" | "gold-particles";
}

export const LOYALTY_NODES: LoyaltyNode[] = [
  {
    visit: "06",
    icon: "🎁",
    prize: "LAVADO BÁSICO + ENCERADO",
    description:
      "Tu primera cortesía. Pintura limpia y protegida — por nuestra cuenta.",
    tier: "La primera",
    glow: "neon-soft",
  },
  {
    visit: "12",
    icon: "🎁🎁",
    prize: "LAVADO BÁSICO + MOTOR O CHASIS",
    description:
      "Ahora vamos por lo que no se ve. Tu auto protegido por dentro y por fuera.",
    tier: "Subiendo",
    glow: "neon-intense",
  },
  {
    visit: "18",
    icon: "✨",
    prize: "LAVADO DELUXE + AROMATIZANTE",
    description:
      "Sube de categoría. Tu auto huele tan bien como se ve.",
    tier: "Categoría",
    glow: "gold-mix",
  },
  {
    visit: "24",
    icon: "💎",
    prize: "DETAILING INTERIOR O EXTERIOR",
    description:
      "Tú eliges: por dentro o por fuera. El detailing profesional que restaura tu inversión.",
    tier: "Elite",
    glow: "gold",
  },
  {
    visit: "30",
    icon: "💎💎",
    prize: "DETAILING COMPLETO",
    description:
      "Por dentro y por fuera. Sin opciones, sin elegir. Restauración total.",
    tier: "Reconocimiento",
    glow: "gold-intense",
  },
  {
    visit: "36",
    icon: "👑",
    prize: "CERÁMICO PROFESIONAL · 8 MESES – 1 AÑO",
    description:
      "Protección cerámica profesional aplicada a tu vehículo. La tecnología Meguiar's en toda su extensión.",
    tier: "VIP",
    glow: "gold-pure",
  },
  {
    visit: "42",
    icon: "👑✨",
    prize: "CERÁMICO BEYOND PRO · 1 A 5 AÑOS",
    description:
      "La protección más avanzada del mercado mundial. Un año de fidelidad recompensado con hasta 5 años de blindaje para tu auto.",
    tier: "EL NIVEL MÁXIMO",
    glow: "gold-particles",
  },
];

export const LOYALTY_NARRATIVES: Record<string, string> = {
  "after-6":
    "Después de tu primera cortesía, el conteo se reinicia. Pero esta vez, lo que te espera es mejor.",
  "after-18":
    "La mayoría de nuestros clientes llega aquí. Los que pasan, descubren algo distinto.",
  "after-30":
    "Pocos llegan. Los que llegan, lo recuerdan toda la vida.",
  "before-42":
    "La visita 42 no se compra. Se gana visita por visita. ¿Tendrás la paciencia de descubrir qué pasa cuando la alcanzas?",
};
