export interface Review {
  author: string
  role: string
  rating: number
  date: string
  comment: string
  source: string
}

export const REVIEWS_DATA: Review[] = [
  {
    author: "María Camila Erazo",
    role: "Organizadora Boda 2026",
    rating: 5,
    date: "Hace 1 mes",
    source: "Google Business Profile",
    comment: "El lugar es sencillamente hermoso, rodeado de naturaleza y a escasos minutos de la ciudad. Todo el equipo de la hacienda estuvo pendiente del más mínimo detalle y la comida salió caliente y puntual para los 160 invitados.",
  },
  {
    author: "Ing. Carlos Villota",
    role: "Gerente Operaciones (Evento Fin de Año)",
    rating: 5,
    date: "Hace 3 meses",
    source: "Google Business Profile",
    comment: "Coordinamos la integración de 120 colaboradores. La cercanía al Único Outlet facilitó la llegada de todos en vans sin complicaciones de carretera. El parqueadero es amplísimo y la carne asada estuvo en su punto.",
  },
  {
    author: "Diana Cabrera",
    role: "Celebración Familiar XV Años",
    rating: 5,
    date: "Hace 2 meses",
    source: "Google Business Profile",
    comment: "Nos dio mucha tranquilidad contar con el salón auxiliar porque a mitad de tarde se nubló. Jacobo y Melisa resolvieron todo con calma y calidez. Las empanaditas de añejo y el ajiaco fueron el comentario de todos.",
  },
  {
    author: "Javier Pantoja",
    role: "Comensal Restaurante Dominical",
    rating: 4,
    date: "Hace 3 semanas",
    source: "Google Business Profile",
    comment: "Excelente plan de domingo en familia. La trucha frita y el frito pastuso son deliciosos, con porciones generosas. Los niños corrieron en las zonas verdes mientras almorzábamos sin afanes.",
  },
]
