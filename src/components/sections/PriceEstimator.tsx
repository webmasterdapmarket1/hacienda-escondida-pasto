import React, { useState } from "react"
import { Calculator, ArrowRight, X, Phone, User, Utensils } from "lucide-react"
import { SITE } from "../../data/site"

interface MenuOption {
  id: string
  name: string
  basePrice?: number
  priceLabel: string
  desc: string
  dishes: string[]
}

const MENU_OPTIONS: MenuOption[] = [
  {
    id: "tradicional",
    name: "Menú Tradicional de 3 Tiempos",
    basePrice: 70000,
    priceLabel: "Desde $70.000",
    desc: "Entrada + Plato Fuerte + Postre",
    dishes: [
      "Filet Mignon de Cerdo",
      "Pollo Relleno en Salsa Mornay",
      "Lomo de Res en Salsa Velouté",
      "Por definir con Jacobo",
    ],
  },
  {
    id: "campestre",
    name: "Plato Campestre / Tradicional",
    basePrice: 34000,
    priceLabel: "Desde $34.000",
    desc: "Frito, trucha, ajiaco, sancocho, cazuela o langostinos",
    dishes: [
      "Frito Pastuso Tradicional",
      "Trucha Frita Corte Mariposa",
      "Sancocho Campesino / Ajiaco",
      "Cazuela de Mariscos / Langostinos",
      "Frijolada con Panceta al Horno",
    ],
  },
  {
    id: "refrigerio",
    name: "Refrigerios y Pasabocas",
    basePrice: 12000,
    priceLabel: "Desde $12.000",
    desc: "Pasabocas salados ($4.000), dulces ($4.500) y refrigerios",
    dishes: [
      "Pasabocas Salados y Dulces",
      "Empanadas de Añejo + Bebida",
      "Sándwich Gourmet / Hamburguesa Artesanal",
    ],
  },
  {
    id: "buffet",
    name: "Desayuno Tipo Buffet",
    priceLabel: "Cotizar según menú",
    desc: "Estaciones calientes, panadería, tabla de quesos y frutas",
    dishes: [
      "Desayuno Buffet Empresarial Completo",
      "Desayuno Campestre Familiar",
    ],
  },
  {
    id: "solo-salon",
    name: "Solo Alquiler de Salón",
    priceLabel: "Consultar condiciones",
    desc: "Uso exclusivo de instalaciones según disponibilidad",
    dishes: ["Salón Principal (hasta 200 pax)", "Salón Auxiliar (hasta 45 pax)"],
  },
]

export const PriceEstimator: React.FC = () => {
  const [guests, setGuests] = useState(60)
  const [selectedOption, setSelectedOption] = useState<MenuOption>(MENU_OPTIONS[0])
  const [selectedDish, setSelectedDish] = useState<string>(MENU_OPTIONS[0].dishes[0])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [leadName, setLeadName] = useState("")
  const [leadPhone, setLeadPhone] = useState("")
  const [phoneError, setPhoneError] = useState("")

  const estimatedBaseTotal = selectedOption.basePrice ? guests * selectedOption.basePrice : null

  const formatCOP = (num: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(num)
  }

  const handleSelectOption = (option: MenuOption) => {
    setSelectedOption(option)
    setSelectedDish(option.dishes[0])
  }

  const handleDishClick = (dish: string) => {
    setSelectedDish(dish)
    setIsModalOpen(true)
  }

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const cleanedPhone = leadPhone.replace(/\D/g, "").replace(/^57/, "")
    if (cleanedPhone.length !== 10 || !cleanedPhone.startsWith("3")) {
      setPhoneError("Ingresa un número celular válido de 10 dígitos (iniciando en 3).")
      return
    }
    setPhoneError("")

    const totalText = estimatedBaseTotal
      ? `Desde ${formatCOP(estimatedBaseTotal)} (aprox.)`
      : "A cotizar según opciones elegidas"

    const parts = [
      "Hola, realicé una estimación en la calculadora de Hacienda Escondida:",
      `Nombre: ${leadName}`,
      `WhatsApp: ${leadPhone}`,
      `Invitados: ${guests} personas`,
      `Opción gastronómica: ${selectedOption.name}`,
      `Plato / formato de interés: ${selectedDish}`,
      `Presupuesto base referencial: ${totalText}`,
      "Me gustaría recibir la cotización exacta y validar disponibilidad.",
    ]

    window.open(
      `https://wa.me/${SITE.phonePrimaryClean}?text=${encodeURIComponent(parts.join("\n"))}`,
      "_blank"
    )
    setIsModalOpen(false)
  }

  return (
    <section className="py-20 bg-white border-b border-black/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#E36E5E] bg-[#FDECE9] px-3.5 py-1.5 rounded-full mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Presupuesto Referencial</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3A2B] tracking-tight mb-3">
            Calculadora Estimativa de Evento
          </h2>
          <p className="text-sm text-[#5E6763] font-light">
            Ajusta el número de invitados y elige el plato fuerte de tu interés para recibir una propuesta personalizada en tu WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls column */}
          <div className="lg:col-span-7 bg-[#FAF9F5] p-6 sm:p-8 rounded-3xl border border-black/5 space-y-6">
            {/* Guests Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#1E3A2B]">
                  Número de Invitados
                </label>
                <span className="font-serif text-2xl font-bold text-[#E36E5E]">
                  {guests} personas
                </span>
              </div>
              <input
                type="range"
                min="35"
                max="200"
                step="5"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full accent-[#E36E5E] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1 font-light">
                <span>Mínimo 35 pax</span>
                <span>Hasta 200 personas</span>
              </div>
            </div>

            {/* Menu Selection Buttons */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3A2B] mb-2.5">
                1. Selecciona la propuesta gastronómica
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {MENU_OPTIONS.map((item) => {
                  const isSelected = selectedOption.id === item.id
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectOption(item)}
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#1E3A2B] text-white border-[#1E3A2B] shadow-xs"
                          : "bg-white text-[#2C302E] border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="font-semibold text-xs">{item.name}</div>
                      <div className="text-[11px] opacity-80 mt-0.5">{item.desc}</div>
                      <div
                        className={`text-xs font-bold mt-1.5 ${
                          isSelected ? "text-[#BCD9C7]" : "text-[#E36E5E]"
                        }`}
                      >
                        {item.priceLabel}{" "}
                        {item.basePrice && (
                          <span className="font-normal text-[10px] opacity-75">/ persona</span>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Dish choice selector (triggers pop-up on click) */}
            <div className="pt-1">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3A2B] mb-2 flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-[#E36E5E]" />
                <span>2. Elige el plato fuerte o formato para cotizar en WhatsApp</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {selectedOption.dishes.map((dish) => {
                  const active = selectedDish === dish
                  return (
                    <button
                      key={dish}
                      type="button"
                      onClick={() => handleDishClick(dish)}
                      className={`text-xs px-3.5 py-2 rounded-full border transition-all cursor-pointer ${
                        active
                          ? "bg-[#E36E5E] text-white border-[#E36E5E] font-medium shadow-xs"
                          : "bg-white text-[#2C302E] border-gray-200 hover:border-[#E36E5E]"
                      }`}
                    >
                      {dish}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Results column */}
          <div className="lg:col-span-5 bg-[#1E3A2B] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#BCD9C7] font-semibold mb-2">
                Estimación Base Tentativa
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
                {estimatedBaseTotal ? `Desde ${formatCOP(estimatedBaseTotal)}` : "Cotización a Medida"}
              </div>

              {/* Line item breakdown */}
              <div className="space-y-3 py-4 border-y border-white/10 text-xs">
                <div className="flex justify-between items-center text-white/80">
                  <span>Propuesta seleccionada</span>
                  <span className="font-semibold text-white text-right">{selectedOption.name}</span>
                </div>
                <div className="flex justify-between items-center text-white/80">
                  <span>Plato / opción de interés</span>
                  <span className="font-semibold text-[#BCD9C7] text-right">{selectedDish}</span>
                </div>
                <div className="flex justify-between items-center text-[#BCD9C7]">
                  <span>Parqueadero privado y zonas verdes</span>
                  <span className="font-semibold">Incluido</span>
                </div>
                <div className="flex justify-between items-center text-[#BCD9C7]">
                  <span>Plan Antilluvia</span>
                  <span className="font-semibold">Incluido</span>
                </div>
              </div>

              <div className="pt-4 text-[11px] text-white/60 font-light leading-relaxed">
                * Los valores varían según el plato fuerte, acompañamientos y opciones de menú elegidas. Recibe el presupuesto exacto en tu WhatsApp.
              </div>
            </div>

            <div className="pt-8">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#E36E5E] hover:bg-[#D05C4D] text-white font-semibold py-3.5 px-5 rounded-2xl text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Recibir cotización exacta en WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Capture Pop-up Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-black/5 relative">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#E36E5E] bg-[#FDECE9] px-3 py-1 rounded-full mb-3">
              <span>Cotización Inmediata</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1E3A2B] mb-2">
              Envía tu selección a WhatsApp
            </h3>
            <p className="text-xs text-[#5E6763] font-light leading-relaxed mb-5">
              Para <strong>{guests} invitados</strong> con interés en <strong>{selectedDish}</strong> ({selectedOption.name}). Déjanos tu nombre y WhatsApp para abrir tu cotización personalizada:
            </p>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3A2B] mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#E36E5E]" />
                  <span>Tu Nombre *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Carolina Gómez"
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#E36E5E]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3A2B] mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#E36E5E]" />
                  <span>Tu WhatsApp (Celular) *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ej. 315 000 0000"
                  value={leadPhone}
                  onChange={(e) => setLeadPhone(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#E36E5E]"
                />
                {phoneError && (
                  <p className="text-xs text-red-600 mt-1">{phoneError}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#E36E5E] hover:bg-[#D05C4D] text-white font-semibold py-3.5 px-5 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Continuar a WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
