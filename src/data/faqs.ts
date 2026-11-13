export interface FAQ {
  question: string
  answer: string
  category: "ubicacion" | "salones" | "gastronomia" | "politicas"
}

export const FAQS_DATA: FAQ[] = [
  {
    category: "ubicacion",
    question: "¿A qué distancia exacta está Hacienda Escondida desde Pasto?",
    answer: "Estamos ubicados en la Vereda Dolores (Corregimiento de Mocondino), a solo 7 a 9 minutos en carro saliendo desde el Centro Comercial Único Outlet. La vía está totalmente pavimentada y de fácil acceso para automóviles y buses de servicio especial, con amplio parqueadero privado.",
  },
  {
    category: "salones",
    question: "¿Cuál es la capacidad de los salones y el mínimo para reservar?",
    answer: "Disponemos de un Salón Principal para hasta 200 personas y un Salón Auxiliar ideal para grupos de hasta 45 personas. El mínimo de invitados para reservar un evento privado de lunes a sábado es de 35 personas. Para grupos menores, nuestro Restaurante Campestre atiende domingos y festivos con reserva de mesa.",
  },
  {
    category: "salones",
    question: "¿Qué sucede si llueve el día de mi evento?",
    answer: "Cuentas con tranquilidad garantizada. Hacienda Escondida dispone del Salón Auxiliar y de la infraestructura totalmente cubierta del Salón Principal como Plan Antilluvia inmediato. Si habías planeado un momento al aire libre y llueve, la logística se traslada bajo techo sin retrasos ni costos imprevistos.",
  },
  {
    category: "salones",
    question: "¿Tienen salones campestres, salones de eventos y salas de reuniones en Pasto para empresas?",
    answer: "Sí. Somos la opción de salones campestres y salones de eventos más cercana a Pasto (a 8 minutos del Único Outlet). Nuestros espacios se adaptan como salas de reuniones en Pasto para juntas directivas, foros, capacitaciones de Recursos Humanos, convenciones e integraciones empresariales, con facturación electrónica y parqueadero privado.",
  },
  {
    category: "politicas",
    question: "¿Hacienda Escondida es un espacio Pet Friendly?",
    answer: "¡Por supuesto! Somos un lugar 100% Pet Friendly. Tanto en nuestros eventos familiares como los domingos en el restaurante campestre, tus mascotas son bienvenidas para disfrutar de los amplios jardines y zonas verdes junto a tu familia.",
  },
  {
    category: "gastronomia",
    question: "¿Puedo contratar mis propios proveedores de sonido, flores o fotografía?",
    answer: "Sí, te ofrecemos la confianza para trabajar con los mejores aliados en decoración floral, sonido, iluminación, orquesta, fotografía y video, o si prefieres que te ayudemos con la logística integral de tu evento, también tenemos la solución. La alimentación y las bebidas son preparadas por nuestra cocina propia para garantizar calidad y puntualidad.",
  },
  {
    category: "gastronomia",
    question: "¿Cómo se define y personaliza el menú para una boda o evento empresarial?",
    answer: "Las familias y comités de empresas cuentan con la asesoría directa y cercana de Jacobo Arciniegas para definir el plato fuerte, ajustar salsas, acompañamientos, opciones especiales y todos los detalles de presentación según el estilo de tu celebración.",
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
]
