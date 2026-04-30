export interface Membership {
  id: string;
  badge?: { label: string; tone: "neon" | "gold" | "outline" };
  secondaryBadge?: string;
  subtitle: string;
  pitch: string;
  benefits: string[];
  impactQuote?: string;
  hook: string;
  cta: string;
  hero?: boolean;
}

export const MEMBERSHIPS: Membership[] = [
  {
    id: "dorada",
    badge: { label: "★ BEST SELLER", tone: "neon" },
    subtitle: "PARA ÉL · Total 4 servicios al mes",
    pitch:
      "El combo que el caballero moderno no sabía que necesitaba — hasta que lo probó.",
    benefits: [
      "2 cortes de cabello o barba (o 4 cortes en versión extendida)",
      "2 lavados básicos de turismo o camioneta (o 4 lavados vehiculares)",
      "Estación de aspirado y aromatizado GRATIS todo el mes",
      "Exclusividad de reservaciones para saltarte la fila de espera",
    ],
    hook:
      "Tu auto impecable. Tu look impecable. Cuatro veces al mes. Sin pensarlo.",
    cta: "QUIERO LA DORADA",
  },
  {
    id: "familiar",
    badge: { label: "★ LA FAVORITA", tone: "gold" },
    secondaryBadge: "Elegida por la mayoría de nuestras familias",
    subtitle: "FAMILIA Y AMIGOS · Total 10 servicios al mes",
    pitch:
      "Una sola membresía. Toda tu familia cubierta. Los ahorros se sienten antes de fin de mes.",
    benefits: [
      "Hasta 10 lavados básicos o 5 lavados deluxe al mes",
      "Aplica a varios vehículos del mismo hogar",
      "Estación de aspirado y aromatizado GRATIS todo el mes",
      "Exclusividad de reservaciones para saltarte la fila de espera",
    ],
    impactQuote:
      "La membresía que paga por sí sola en menos de un mes.",
    hook:
      "El secreto de las familias que lo entendieron primero: una sola decisión, cero estrés todo el año.",
    cta: "QUIERO LA FAMILIAR",
    hero: true,
  },
  {
    id: "camioneta",
    badge: { label: "★ BEST SELLER", tone: "neon" },
    subtitle: "Individual · Lavados ilimitados",
    pitch:
      "Porque cuidar una camioneta no es lo mismo que cuidar un sedán. Y nosotros lo sabemos.",
    benefits: [
      "Lavados básicos ILIMITADOS durante el mes",
      "Aplica a 1 vehículo (SUV, pickup o camioneta)",
      "Estación de aspirado y aromatizado GRATIS todo el mes",
      "Exclusividad de reservaciones para saltarte la fila de espera",
    ],
    hook:
      "Tu camioneta merece un lavado pensado para ella — no un lavado de sedán inflado de precio.",
    cta: "QUIERO LA DE CAMIONETA",
  },
  {
    id: "platino",
    badge: { label: "★ BEST SELLER", tone: "neon" },
    subtitle: "PARA ELLA · Total 4 servicios al mes",
    pitch:
      "La membresía pensada para la mujer que entiende que cuidarse no es lujo — es estándar.",
    benefits: [
      "2 citas de esmaltado semipermanente (o 4 esmaltados)",
      "2 lavados básicos de turismo o camioneta (o 4 lavados vehiculares)",
      "Estación de aspirado y aromatizado GRATIS todo el mes",
      "Exclusividad de reservaciones para saltarte la fila de espera",
    ],
    hook:
      "Manos perfectas. Auto impecable. Cero filas. Toda tú, todo el mes.",
    cta: "QUIERO LA PLATINO",
  },
  {
    id: "turismo",
    subtitle: "Individual · Lavados ilimitados",
    pitch:
      "Para quienes su auto los acompaña a todos lados — y quieren que siempre se vea como el primer día.",
    benefits: [
      "Lavados básicos ILIMITADOS durante el mes",
      "Aplica a 1 vehículo turismo",
      "Estación de aspirado y aromatizado GRATIS todo el mes",
      "Exclusividad de reservaciones para saltarte la fila de espera",
    ],
    hook:
      "Lavados ilimitados. Cero excusas para que tu auto no esté impecable.",
    cta: "QUIERO LA TURISMO",
  },
  {
    id: "familiar-plus",
    badge: { label: "EDICIÓN PREMIUM", tone: "outline" },
    subtitle: "FAMILIA Y AMIGOS · Total 20 servicios al mes",
    pitch:
      "Cuando la Familiar te queda chica — porque tu hogar pide más de lo bueno.",
    benefits: [
      "Hasta 20 lavados básicos o 10 lavados deluxe al mes",
      "Aplica a varios vehículos del mismo hogar",
      "Estación de aspirado y aromatizado GRATIS todo el mes",
      "Exclusividad de reservaciones para saltarte la fila de espera",
    ],
    hook:
      "El doble de servicios. La misma promesa: tu familia, siempre lista para lo que venga.",
    cta: "QUIERO LA FAMILIAR+",
  },
];

export const RENEWAL = [
  {
    icon: "🎟️",
    title: "2X1",
    body:
      "Renueva HOY antes de tu vencimiento y goza de 2 meses de beneficios por el precio de 1.",
    cta: "RENOVAR AHORA",
  },
  {
    icon: "🎟️",
    title: "3X2",
    body:
      "Renueva el día de tu vencimiento y goza de 3 meses de beneficios por el precio de 2.",
    cta: "REACTIVAR MI MEMBRESÍA",
  },
] as const;
