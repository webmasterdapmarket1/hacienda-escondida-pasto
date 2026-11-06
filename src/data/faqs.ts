export interface FAQ {
  question: string
  answer: string
  category: "ubicacion" | "salones" | "gastronomia" | "politicas"
}

export const FAQS_DATA: FAQ[] = [
  {
    category: "ubicacion",
    question: "¿A qué distancia exacta está Hacienda Escondida desde Pasto?",
    answer: "Estamos ubicados en la Vereda Dolores (Corregimiento de Mocondino), a solo 7 a 9 minutos en carro saliendo desde el Centro Comercial Único Outlet. La vía está totalmente pavimentada y de fácil acceso para automóviles y buses de servicio especial.",
  },
  {
    category: "salones",
    question: "¿Cuál es la capacidad de los salones y el mínimo para reservar?",
    answer: "Disponemos de un Salón Principal para 150 a 200 personas y un Salón Auxiliar ideal para grupos de hasta 45 personas. El mínimo de invitados para reservar un evento privado de lunes a sábado es de 35 personas. Para grupos menores, nuestro Restaurante Campestre atiende domingos y festivos con reserva de mesa.",
  },
  {
    category: "salones",
    question: "¿Qué sucede si llueve el día de mi evento?",
    answer: "Cuentas con tranquilidad garantizada. Hacienda Escondida dispone del Salón Auxiliar y de la infraestructura totalmente cubierta del Salón Principal como Plan B inmediato. Si habías planeado un momento al aire libre y llueve, la logística se traslada bajo techo sin retrasos ni costos imprevistos.",
  },
  {
    category: "gastronomia",
    question: "¿Puedo contratar mis propios proveedores de sonido, flores o fotografía?",
    answer: "Sí, tienes total libertad de traer a tus proveedores de confianza para decoración floral, sonido, iluminación, orquesta, fotografía y video. La alimentación y las bebidas son manejadas con exclusividad por la cocina de la hacienda para asegurar la cadena de inocuidad y el cumplimiento estricto de los horarios servidos.",
  },
  {
    category: "politicas",
    question: "¿Cuáles son las condiciones de pago y políticas de reserva?",
    answer: "La fecha se aparta formalmente con un anticipo del 50% al momento de la firma y el 50% restante se cancela hasta 2 días antes del evento. Cancelaciones con más de 120 días tienen devolución del 100%; entre 90 y 119 días se retiene el 60%; con menos de 89 días el anticipo no es reembolsable.",
  },
  {
    category: "politicas",
    question: "¿Cuáles son los horarios de atención para eventos y restaurante?",
    answer: "Los eventos privados se atienden de lunes a sábado con reserva previa y pueden extenderse hasta las 2:00 a.m. El restaurante campestre abre sus puertas exclusivamente los domingos y lunes festivos de 12:00 m. a 3:00 p.m.",
  },
  {
    category: "gastronomia",
    question: "¿Ofrecen prueba de menú antes de confirmar una boda o evento grande?",
    answer: "Por supuesto. Las parejas y comités de empresas que contratan paquetes de más de 80 invitados tienen incluida una cata gastronómica previa con Jacobo Arciniegas para ajustar salsas, acompañamientos y detalles de presentación.",
  },
]
