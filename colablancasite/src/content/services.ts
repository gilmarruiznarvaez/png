export interface Service {
  id: string;
  tag: string;
  title: string;
  tagline: string;
  bullets: string[];
  hook: string;
  cta: string;
  imageHint: string;
}

export const SERVICES: Service[] = [
  {
    id: "carwash",
    tag: "LAVADO PREMIUM",
    title: "EL CARWASH #1 DE TEGUCIGALPA",
    tagline: "No lavamos autos. Devolvemos orgullo sobre ruedas.",
    bullets: [
      "Productos importados que protegen la pintura, no solo la limpian",
      "Equipo entrenado obsesivo con el detalle (cada rincón, cada vez)",
      "Tu auto sale como salió de agencia — o lo lavamos otra vez",
    ],
    hook: "El primer lavado te convence. El segundo te convierte en cliente de por vida.",
    cta: "RESERVAR",
    imageHint: "Carwash COLABLANCA · vehículo siendo lavado en la plaza",
  },
  {
    id: "detailing",
    tag: "RESTAURACIÓN ESTÉTICA",
    title: "DETAILING QUE TRANSFORMA",
    tagline: "Tu auto cuando lo recogiste de agencia. Mejor.",
    bullets: [
      "Pulido, encerado, descontaminación y protección cerámica Meguiar's",
      "Interiores que huelen y se ven nuevos — literalmente",
      "Procesos certificados que alargan la vida de tu inversión",
    ],
    hook: "Si vas a vender tu auto el próximo año, este detailing te paga solo.",
    cta: "RESERVAR",
    imageHint: "Detailing profesional · pulido y protección cerámica",
  },
  {
    id: "lubricentro",
    tag: "MECÁNICA RÁPIDA Y PREVENTIVA",
    title: "TU AUTO, EN MANOS QUE SABEN",
    tagline: "Mantenimiento sin perder tu día. Sin perder tu confianza.",
    bullets: [
      "Cambios de aceite, filtros y revisión completa en menos tiempo del que toma un almuerzo",
      "Diagnóstico honesto: te decimos qué necesita tu auto y qué no",
      "Lubricantes y filtros de marcas líderes (Motul, Castrol, Liqui Moly) — sin atajos",
    ],
    hook: "El mejor mecánico es el que te cuida la cartera tanto como el motor.",
    cta: "RESERVAR",
    imageHint: "Lubricentro · cambio de aceite y mantenimiento",
  },
  {
    id: "barberia",
    tag: "ESTILO MASCULINO",
    title: "DONDE EL ESTILO SE REDEFINE",
    tagline: "Salir de aquí es salir con una versión mejor de ti mismo.",
    bullets: [
      "Barberos que entienden tu cara, tu estilo y tu industria",
      "Cortes, afeitados clásicos, diseños y tratamientos premium",
      "Ambiente, café y conversación — la experiencia, no solo el corte",
    ],
    hook: "La diferencia entre verse bien y verse intencional se decide aquí.",
    cta: "RESERVAR",
    imageHint: "Barbería de élite · ambiente y trabajo en silla",
  },
  {
    id: "salon",
    tag: "BELLEZA ESPECIALIZADA",
    title: "EL ARTE DE SENTIRTE INCREÍBLE",
    tagline: "Manicura rusa. Acrílicas. Dual System. Pestañas. Maestría.",
    bullets: [
      "Especialistas certificadas — no técnicas que aprendieron viendo videos",
      "Productos hipoalergénicos de gama profesional",
      "Resultados que duran — y que te hacen volver porque quieres, no porque toca",
    ],
    hook: "Cuando alguien te pregunta dónde te las hiciste, sabes que lo hicimos bien.",
    cta: "RESERVAR",
    imageHint: "Aitana Salón · manicura especializada",
  },
  {
    id: "restaurante",
    tag: "RESTAURANTE",
    title: "SABOR QUE NO PIDE PERMISO",
    tagline: "Carnitas, alitas, boneless y antojos honestos. Como debe ser.",
    bullets: [
      "Carnitas, alitas, boneless, popcorn chicken, anafres, papas y bebidas naturales",
      "Cervecitas frías para acompañar lo que el día te pida",
      "La cocina que aparece cuando alguien dice ‘vamos por algo bueno’",
    ],
    hook: "Una visita y entiendes por qué la mesa siempre está llena.",
    cta: "VER MENÚ",
    imageHint: "Carnitas COLABLANCA · alitas y papas servidas",
  },
];
