export interface Space {
  id: string
  name: string
  subtitle: string
  capacity: string
  capacityNumber: number
  rentalPrice: string
  priceNumber: number
  image: string
  isStockImage?: boolean
  description: string
  features: string[]
  idealFor: string
  planBBadge?: string
}

export const SPACES_DATA: Space[] = [
  {
    id: "salon-principal",
    name: "Salón Principal",
    subtitle: "El espacio insigne para grandes celebraciones y convenciones",
    capacity: "Hasta 200 personas",
    capacityNumber: 200,
    rentalPrice: "",
    priceNumber: 0,
    image: "/images/salon-principal.jpg",
    description: "Salón amplio, cubierto y luminoso, diseñado para alojar recepciones de gala, eventos corporativos, matrimonios y asambleas. Su estructura bien construida brinda vista panorámica a los jardines y aislamiento térmico óptimo para el clima de la región.",
    features: [
      "Capacidad flexible hasta 200 invitados",
      "2 baños para hombres y mujeres",
      "Parqueadero privado",
    ],
    idealFor: "Bodas, convenciones e integraciones empresariales, asambleas gremiales, grados y XV años.",
  },
  {
    id: "salon-auxiliar",
    name: "Salón Auxiliar (Plan Antilluvia)",
    subtitle: "Espacio íntimo y seguro garantizado ante cualquier cambio de clima",
    capacity: "Hasta 45 personas",
    capacityNumber: 45,
    rentalPrice: "",
    priceNumber: 0,
    image: "/images/salon-auxiliar.jpg",
    planBBadge: "Plan Antilluvia",
    description: "Espacio complementario totalmente cubierto que elimina el mayor temor de todo anfitrión campestre: la lluvia andina. Si el clima cambia durante tu ceremonia exterior, todo tu grupo pasa sin tropiezos al salón auxiliar para continuar sin interrupciones.",
    features: [
      "Capacidad hasta 45 invitados",
      "2 baños para hombres y mujeres",
      "Parqueadero privado",
    ],
    idealFor: "Reuniones de junta, capacitaciones, celebraciones familiares íntimas, bautizos y Plan Antilluvia para ceremonias al aire libre.",
  },
  {
    id: "zonas-verdes-lago",
    name: "Zonas Verdes y Entorno Natural con Lago",
    subtitle: "Praderas abiertas, juegos para niños y espacio Pet Friendly a 8 minutos de Pasto",
    capacity: "Hasta 300 personas al aire libre",
    capacityNumber: 300,
    rentalPrice: "",
    priceNumber: 0,
    image: "/images/lago-entorno.jpg",
    isStockImage: true,
    description: "Extensos jardines naturales rodeados de árboles nativos y un entorno sereno con lago natural. Un espacio Pet Friendly ideal para recepciones al atardecer, ceremonias civiles o religiosas, cócteles de bienvenida y tardes familiares.",
    features: [
      "Pradera verde para montajes de carpas, altares y actividades al aire libre",
      "Juegos para niños y amplios jardines seguros",
      "Espacio Pet Friendly para disfrutar con tus mascotas",
      "Entorno con lago y naturaleza andina para sesiones fotográficas",
      "Fácil acceso para adultos mayores y niños",
    ],
    idealFor: "Sesiones de fotos nupciales, ceremonias campestres, cócteles de bienvenida y dinámicas al aire libre.",
  },
]
