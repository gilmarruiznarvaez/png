export interface Review {
  name: string;
  city: string;
  rating: 5;
  service: string;
  body: string;
}

/**
 * 10 testimonios redactados según las reglas del brief:
 * tonos variados, demografías distintas, servicios cubiertos, español hondureño natural.
 */
export const REVIEWS: Review[] = [
  {
    name: "Andrea Martínez",
    city: "Tegucigalpa",
    rating: 5,
    service: "Aitana Salón",
    body:
      "Las acrílicas me duraron tres semanas perfectas. Mi maestra ya sabe lo que me gusta y nunca me falla. Es de los pocos lugares donde uno entra con prisa y sale relajada.",
  },
  {
    name: "Luis Javier Rodríguez",
    city: "Lomas del Guijarro",
    rating: 5,
    service: "Carwash",
    body:
      "Llegué por el carwash. Me quedé porque mi esposa probó el salón. Ahora venimos los sábados en familia y rendimos el día como nunca.",
  },
  {
    name: "Don Carlos Sevilla",
    city: "Centro",
    rating: 5,
    service: "Lubricentro",
    body:
      "Vine por un cambio de aceite y me explicaron con paciencia qué era opcional y qué urgía. Esa honestidad ya no se encuentra en cualquier taller.",
  },
  {
    name: "Ricardo Banegas",
    city: "Las Hadas",
    rating: 5,
    service: "Detailing",
    body:
      "Le hicieron un detailing a mi pickup que no había visto ni en el dealer. Quedé sin palabras — y mi seguro me bajó la prima cuando vio las fotos.",
  },
  {
    name: "Karla Suazo",
    city: "Tegucigalpa",
    rating: 5,
    service: "Carnitas Colablanca",
    body:
      "Las alitas BBQ son la razón por la que nuestro grupo del trabajo tiene un nuevo punto de encuentro fijo cada viernes. Y las cervecitas al precio justo.",
  },
  {
    name: "José Pablo Mejía",
    city: "Loma Linda",
    rating: 5,
    service: "Barbería",
    body:
      "Mi barbero de toda la vida está aquí. No es coincidencia, es que aquí se trabaja diferente. Llegué con el bigote de un Audiencia y salí presentable.",
  },
  {
    name: "Familia Andino",
    city: "Hato de Enmedio",
    rating: 5,
    service: "Membresía Familiar",
    body:
      "Tres servicios en un solo lugar mientras almuerzo. La membresía familiar nos cambió los sábados. No existe algo así en otro lado de Honduras.",
  },
  {
    name: "Daniela Flores",
    city: "Las Colinas",
    rating: 5,
    service: "Aitana Salón",
    body:
      "Probé la manicura rusa por curiosidad y ahora no quiero otra cosa. Cero cutícula levantada, color uniforme, y la conversación con la maestra fue terapia gratis.",
  },
  {
    name: "Marco Discua",
    city: "El Hatillo",
    rating: 5,
    service: "Carwash + Detailing",
    body:
      "Tengo cuatro autos y aquí los traigo todos. La consistencia entre uno y otro es lo que más respeto. Saben quién soy, qué uso, qué no.",
  },
  {
    name: "Gabriela y Pablo",
    city: "Tegucigalpa",
    rating: 5,
    service: "Plaza completa",
    body:
      "Domingo en COLABLANCA: corte para él, manicura para mí, lavado para el carro y carnitas para los dos. Salimos como recién casados otra vez.",
  },
];
