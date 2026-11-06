export interface MenuItem {
  name: string
  description?: string
  price?: number
  tag?: string
  image?: string
}

export interface MenuSection {
  id: string
  title: string
  subtitle: string
  pricePerPerson?: number
  note?: string
  items: MenuItem[]
}

export const MENUS_DATA: MenuSection[] = [
  {
    id: "tradicional",
    title: "Menú Tradicional de Tres Tiempos",
    subtitle: "Entrada + Plato fuerte + Postre + Agua servida en vaso de cristal",
    pricePerPerson: 70000,
    note: "El menú insignia para bodas, grados y banquetes corporativos con servicio a la mesa garantizado a la hora acordada.",
    items: [
      { name: "Filet Mignon de Cerdo", description: "Lomo fino de cerdo en salsa de vino tinto y tocineta, con puré fino de papa criolla y espárragos a la mantequilla.", tag: "Plato Fuerte" },
      { name: "Pollo Relleno con Vegetales", description: "Filete de pechuga enrollado con mix de vegetales en salsa Mornay, arroz de ajonjolí y ensalada de espinaca con fresas y vinagreta de maracuyá.", tag: "Plato Fuerte" },
      { name: "Lomo de Res en Salsa Velouté", description: "Cabeza de lomo de res bañada en salsa velouté, acompañado de papas criollas tipo casco y ensalada coleslaw fresca.", tag: "Plato Fuerte" },
      { name: "Escalopas de Cerdo", description: "Escalopas en reducción demi-glace con espárragos salteados.", tag: "Entrada" },
      { name: "Crema de Zanahoria Artesanal", description: "Decorada con crema de leche fresca y cilantro de huerta.", tag: "Entrada" },
      { name: "Caldo de Pechuga Campestre", description: "Con toque de zanahoria, cilantro, arveja tierna y papa pastusa.", tag: "Entrada" },
      { name: "Panacota de Frutos Rojos / Café", description: "Copa de martini con capas de mousse artesanal, galleta y chantilly.", tag: "Postre" },
      { name: "Carlota de Mango o Chocolate", description: "Pudín cremoso en capas con base crocante.", tag: "Postre" },
    ],
  },
  {
    id: "campestre",
    title: "Cocina Tradicional Nariñense",
    subtitle: "Nuestra carta estrella servida en el Restaurante Dominical y para celebraciones familiares",
    note: "Sabores auténticos de la región preparados con recetas campesinas tradicionales en un ambiente de hacienda.",
    items: [
      { name: "Frito Pastuso Tradicional", description: "Pierna de cerdo crocante con crispetas, papa cocida, plátano maduro, queso campesino, ají de maní y limón.", price: 38000, tag: "Especialidad Nariñense", image: "/images/menu/frito-pastuso.jpg" },
      { name: "Trucha Frita Corte Mariposa (450g)", description: "Trucha fresca servida con arroz, ensalada de mango de la región y patacones crocantes.", price: 39000, tag: "Pescado Fresco", image: "/images/menu/trucha-frita.jpg" },
      { name: "Tilapia Frita Corte Mariposa (450g)", description: "Servida con arroz, patacones y ensalada fresca.", price: 39000, tag: "Pescado", image: "/images/menu/tilapia-frita.jpg" },
      { name: "Ajiaco Nariñense", description: "Sopa tradicional de tres papas con pollo desmechado, arroz, aguacate, empanada de añejo, alcaparras y crema de leche.", price: 34000, tag: "Sopa Tradicional", image: "/images/menu/ajiaco-narinense.jpg" },
      { name: "Frijolada de la Hacienda", description: "Cazuela de frijoles con frito de cerdo, arroz, plátano maduro y aguacate fresco.", price: 35000, tag: "Cazuela", image: "/images/menu/frijolada-hacienda.jpg" },
      { name: "Sancocho Campesino", description: "Sopa campesina con pernil de pollo, hogao criollo, arroz y aguacate.", price: 34000, tag: "Sopa", image: "/images/menu/sancocho-campesino.jpg" },
      { name: "Filete de Res Asado (200g)", description: "Acompañado de papa al horno gratinada con queso mozzarella y ensalada de aguacate.", price: 38000, tag: "Carnes", image: "/images/menu/filete-res.jpg" },
      { name: "Empanadas de Añejo (2 unid.)", description: "Masa tradicional fermentada de maíz añejo rellena de guiso de carne, garbanzo, papa criolla y huevo, con ají casero.", price: 12000, tag: "Entrada Típica", image: "/images/menu/empanadas-anejo.jpg" },
      { name: "Platanitos Tentación", description: "Plátano maduro en reducción artesanal de Cola Román con notas especiadas y cuajada fresca.", price: 10000, tag: "Entrada Dulce", image: "/images/menu/platanitos-tentacion.jpg" },
      { name: "Papas Criollas con Chorizo Santarrosano", description: "250g de chorizo con papas criollas doradas (ideal para compartir 2-3 personas).", price: 22000, tag: "Para Compartir", image: "/images/menu/papas-chorizo.jpg" },
      { name: "Cuajada con Miel de Caña Artesanal", description: "Postre autóctono de cuajada nariñense bañada en melado campesino.", price: 11000, tag: "Postre Tradicional", image: "/images/menu/cuajada-miel.jpg" },
      { name: "Hervidos Tradicionales Nariñenses", description: "Bebida caliente típica a base de frutas y aguardiente nariñense para calentar la tarde campestre.", price: 12000, tag: "Bebida Típica", image: "/images/menu/hervidos-narinenses.jpg" },
    ],
  },
  {
    id: "buffet",
    title: "Desayuno Tipo Buffet",
    subtitle: "Barra libre con estaciones calientes, frías, panadería y frutas frescas",
    pricePerPerson: 47000,
    note: "Perfecto para jornadas empresariales matutinas, novenas y desayunos de trabajo con acceso libre durante el servicio.",
    items: [
      { name: "Estación de Huevos al Gusto", description: "Huevos revueltos sencillos, con salchicha ranchera o pericos al estilo tradicional.", tag: "Calientes" },
      { name: "Panadería & Amasijos", description: "Croissants, arepas de maíz, pan de mantequilla, tostadas y variedad de pan dulce.", tag: "Panadería" },
      { name: "Tabla de Fríos", description: "Selección de 3 tipos de jamones curados y 3 quesos campesinos.", tag: "Charcutería" },
      { name: "Frutas de Temporada & Cereales", description: "Tres opciones de fruta fresca picada, granola artesanal, hojuelas de maíz, leche y yogur.", tag: "Saludable" },
      { name: "Bebidas Calientes Ilimitadas", description: "Café negro recién colado, café con leche, chocolate en leña y aromática de hierbas de huerta.", tag: "Bebidas" },
      { name: "Jugos Naturales", description: "Naranja fresca exprimida, mora silvestre y agua pura.", tag: "Bebidas" },
    ],
  },
  {
    id: "refrigerios",
    title: "Refrigerios y Pasabocas Empresariales",
    subtitle: "Opciones ágiles para eventos corporativos, pausas de café y recepciones",
    note: "Todos los refrigerios incluyen café recién colado, vaso de gaseosa o jugo natural.",
    items: [
      { name: "Pasabocas Salados (Mini empanada añejo, mini burger, mini muslo)", description: "Piezas individuales elaboradas al momento para cócteles y bienvenidas.", price: 4000, tag: "Pasabocas" },
      { name: "Pasabocas Dulces (Panacotas en copa, mini pastel hawaiano, carlotas)", description: "Presentación elegante en copitas y porciones de bocado.", price: 4500, tag: "Pasabocas" },
      { name: "Refrigerio: Dos Empanadas de Añejo + Bebida", description: "Empanadas de añejo con guiso tradicional de carne y ají casero.", price: 12000, tag: "Refrigerio" },
      { name: "Refrigerio: Empanada de Horno Pollo o Carne + Bebida", description: "Empanada de harina rellena en salsa bechamel o carne desmechada.", price: 16000, tag: "Refrigerio" },
      { name: "Refrigerio: Sándwich de Pollo Gourmet + Chips + Bebida", description: "Pan francés con rúcula, queso, salsa bechamel de almendras y pimentón.", price: 23000, tag: "Refrigerio Gourmet" },
      { name: "Refrigerio: Hamburguesa Artesanal + Papas Francesa + Bebida", description: "Pan brioche, carne molida seleccionada, queso, tocineta y verduras frescas.", price: 26000, tag: "Refrigerio Completo" },
    ],
  },
]
