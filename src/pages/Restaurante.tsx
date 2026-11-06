import React, { useState } from "react"
import { UtensilsCrossed, Clock, Calendar, Users, Phone, MapPin, Sparkles, Send, CheckCircle2 } from "lucide-react"
import { MENUS_DATA, MenuSection, MenuItem } from "../data/menus"
import { SITE } from "../data/site"
import { buildRestaurantWhatsAppUrl } from "../lib/whatsapp"

export const Restaurante: React.FC = () => {
  const [name, setName] = useState("")
  const [guests, setGuests] = useState(4)
  const [date, setDate] = useState("")
  const [time, setTime] = useState("1:00 p.m.")
  const [reserved, setReserved] = useState(false)

  const campestreMenu = MENUS_DATA.find((m: MenuSection) => m.id === "campestre")

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault()
    const url = buildRestaurantWhatsAppUrl(name, guests, date || "Este domingo", time)
    window.open(url, "_blank")
    setReserved(true)
  }

  const formatCOP = (num?: number) => {
    if (!num) return ""
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(num)
  }

  return (
    <div className="bg-[#FAF9F5]">
      {/* Hero Banner Restaurante */}
      <section className="relative py-24 bg-[#1E3A2B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-35">
          <img
            src="/images/zonas-verdes.jpg"
            alt="Restaurante Campestre Hacienda Escondida"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs text-[#BCD9C7] font-medium mb-4">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>Abierto Exclusivamente Domingos y Lunes Festivos de 12:00 m. a 3:00 p.m.</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Cocina Tradicional Nariñense en el Campo
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed mb-8">
            El plan familiar dominical predilecto a minutos de Pasto. Platos generosos preparados con recetas campesinas tradicionales en un ambiente de hacienda sin afanes.
          </p>

          <a
            href="#reserva-mesa"
            className="inline-block bg-[#E36E5E] hover:bg-[#D05C4D] text-white font-semibold px-8 py-3.5 rounded-full text-sm shadow-lg transition-all"
          >
            Reservar Mesa para este Domingo
          </a>
        </div>
      </section>

      {/* Horario y Políticas de Reserva */}
      <section className="py-10 bg-[#FAF9F5] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-black/5 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#FDECE9] text-[#E36E5E] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block">Horario de Cocina</span>
                <span className="font-serif text-lg font-bold text-[#1E3A2B]">Domingos y Festivos</span>
                <span className="text-xs text-[#5E6763] block">12:00 m. a 3:00 p.m.</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#EEF6F1] text-emerald-800 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block">Ubicación</span>
                <span className="font-serif text-lg font-bold text-[#1E3A2B]">Vereda Dolores, Mocondino</span>
                <span className="text-xs text-[#5E6763] block">7-9 min del Único Outlet</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#1E3A2B] text-white flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#BCD9C7] font-semibold block">Plan Familiar</span>
                <span className="font-serif text-lg font-bold text-[#1E3A2B]">Zonas Verdes Abiertas</span>
                <span className="text-xs text-[#5E6763] block">Parqueadero gratuito vigilado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carta del Restaurante */}
      <section className="py-20 bg-white border-b border-black/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E36E5E] bg-[#FDECE9] px-3.5 py-1.5 rounded-full">
              Nuestra Carta
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3A2B] mt-3">
              Especialidades Campestres de la Hacienda
            </h2>
            <p className="text-sm text-[#5E6763] font-light mt-2">
              Ingredientes locales seleccionados y recetas tradicionales del departamento de Nariño.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {campestreMenu?.items.map((item: MenuItem, idx: number) => (
              <div
                key={idx}
                className="bg-[#FAF9F5] p-5 sm:p-6 rounded-2xl border border-black/5 flex flex-col justify-between hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-serif text-xl font-bold text-[#1E3A2B]">
                      {item.name}
                    </h3>
                    {item.price && (
                      <span className="font-serif text-lg font-bold text-[#E36E5E] shrink-0">
                        {formatCOP(item.price)}
                      </span>
                    )}
                  </div>
                  {item.tag && (
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-100/60 px-2.5 py-0.5 rounded-md mb-2">
                      {item.tag}
                    </span>
                  )}
                  <p className="text-xs text-[#5E6763] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Reserva de Mesa Dominical */}
      <section id="reserva-mesa" className="py-20 bg-[#FAF9F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-xl">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E36E5E] bg-[#FDECE9] px-3 py-1 rounded-full">
                Atención por Melisa
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#1E3A2B] mt-2 mb-2">
                Reserva tu Mesa para este Fin de Semana
              </h2>
              <p className="text-xs sm:text-sm text-[#5E6763] font-light">
                Garantiza tu mesa familiar sin esperas. Al enviar, se abrirá WhatsApp con los detalles listos.
              </p>
            </div>

            {reserved ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-[#1E3A2B]">¡Reserva Enviada!</h3>
                <p className="text-xs text-[#5E6763]">Melisa te confirmará la mesa en WhatsApp.</p>
                <button
                  type="button"
                  onClick={() => setReserved(false)}
                  className="text-xs text-[#E36E5E] hover:underline pt-2"
                >
                  Hacer otra reserva
                </button>
              </div>
            ) : (
              <form onSubmit={handleReservation} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3A2B] mb-1.5">
                    Nombre de quien reserva *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Jacobo Arciniegas"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E36E5E]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3A2B] mb-1.5 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#E36E5E]" />
                      <span>Comensales *</span>
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="30"
                      required
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E36E5E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3A2B] mb-1.5 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#E36E5E]" />
                      <span>Domingo o Festivo *</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E36E5E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3A2B] mb-1.5 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#E36E5E]" />
                      <span>Hora de Llegada</span>
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E36E5E]"
                    >
                      <option value="12:00 m.">12:00 m.</option>
                      <option value="12:30 p.m.">12:30 p.m.</option>
                      <option value="1:00 p.m.">1:00 p.m.</option>
                      <option value="1:30 p.m.">1:30 p.m.</option>
                      <option value="2:00 p.m.">2:00 p.m.</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full bg-[#E36E5E] hover:bg-[#D05C4D] text-white font-semibold py-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirmar Mesa en WhatsApp con Melisa</span>
                  </button>
                  <p className="text-center text-[11px] text-gray-400 mt-2 font-light">
                    Te responderemos en WhatsApp para reservar tu mesa y orientarte con la ruta.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
