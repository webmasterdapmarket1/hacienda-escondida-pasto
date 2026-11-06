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
    capacity: "150 a 200 personas",
    capacityNumber: 200,
    rentalPrice: "$3.000.000 COP",
    priceNumber: 3000000,
    image: "/images/salon-principal.jpg",
    description: "Salón amplio, cubierto y luminoso, diseñado para alojar banquetes de gala, fiestas de fin de año, matrimonios y asambleas. Su estructura brinda vista panorámica a los jardines y aislamiento térmico óptimo para el clima de la región.",
    features: [
      "Capacidad flexible para 150 a 200 invitados en mesas redondas o tablones",
      "Mobiliario completo incluido (mesas, mantelería y sillería)",
      "Acceso directo a cocina principal equipada y baterías de baños dobles",
      "Parqueadero privado con vigilancia para toda la flota vehicular",
      "Iluminación cálida y tomas eléctricas distribuidas para sonido e iluminación",
    ],
    idealFor: "Bodas, fiestas de fin de año empresarial, asambleas gremiales, grados y XV años.",
  },
  {
    id: "salon-auxiliar",
    name: "Salón Auxiliar (Plan B Antilluvia)",
    subtitle: "Espacio íntimo y seguro garantizado ante cualquier cambio de clima",
    capacity: "Hasta 45 personas",
    capacityNumber: 45,
    rentalPrice: "$1.000.000 COP",
    priceNumber: 1000000,
    image: "/images/salon-auxiliar.jpg",
    planBBadge: "Plan B Antilluvia Garantizado",
    description: "Espacio complementario totalmente cubierto que elimina el mayor temor de todo anfitrión campestre: la lluvia andina. Si el clima cambia durante tu ceremonia exterior, todo tu grupo pasa sin tropiezos al salón auxiliar para continuar sin interrupciones.",
    features: [
      "Capacidad cómoda para grupos de hasta 45 personas",
      "Mobiliario básico incluido y barra de servicio interior",
      "Cocina de apoyo y baños independientes",
      "Ventanas amplias con vista a las zonas verdes",
      "Excelente acústica para capacitaciones, novenas y reuniones familiares",
    ],
    idealFor: "Reuniones de junta, capacitaciones, celebraciones familiares íntimas, bautizos y respaldo antilluvia para ceremonias al aire libre.",
  },
  {
    id: "zonas-verdes-lago",
    name: "Zonas Verdes y Entorno Natural con Lago",
    subtitle: "Praderas abiertas y paisaje andino a solo 8 minutos de Pasto",
    capacity: "Hasta 300 personas al aire libre",
    capacityNumber: 300,
    rentalPrice: "Incluido con el alquiler de salones o paquetes de eventos",
    priceNumber: 0,
    image: "/images/lago-entorno.jpg",
    isStockImage: true,
    description: "Extensos jardines naturales rodeados de árboles nativos y un entorno sereno con lago natural. El marco fotográfico predilecto para recepciones al atardecer, ceremonias civiles o religiosas, cócteles de bienvenida y actividades de teambuilding al aire libre.",
    features: [
      "Pradera verde para montajes de carpas, altares y juegos corporativos",
      "Entorno con lago y naturaleza andina para sesiones fotográficas",
      "Zona de fogata y senderos peatonales seguros",
      "Fácil acceso para adultos mayores y niños",
      "Iluminación decorativa exterior para eventos nocturnos",
    ],
    idealFor: "Sesiones de fotos nupciales, ceremonias campestres, cócteles de bienvenida y dinámicas empresariales al aire libre.",
  },
]
