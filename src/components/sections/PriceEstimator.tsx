import React, { useState } from "react"
import { Calculator, Sparkles, Check, ArrowRight } from "lucide-react"
import { SITE } from "../../data/site"

export const PriceEstimator: React.FC = () => {
  const [guests, setGuests] = useState(60)
  const [selectedMenuPrice, setSelectedMenuPrice] = useState(70000)
  const [selectedMenuName, setSelectedMenuName] = useState("Menú Tradicional de 3 Tiempos")
  const [includeSalonRental, setIncludeSalonRental] = useState(false)

  const salonPrice = guests > 45 ? 3000000 : 1000000
  const salonName = guests > 45 ? "Salón Principal (hasta 200 pax)" : "Salón Auxiliar (hasta 45 pax)"

  const foodTotal = guests * selectedMenuPrice
  const totalEstimated = foodTotal + (includeSalonRental ? salonPrice : 0)

  const formatCOP = (num: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(num)
  }

  const handleWhatsAppQuote = () => {
    const message = `Hola Melisa, usé la calculadora estimativa de la web y coticé un evento de ${guests} personas con ${selectedMenuName} (${formatCOP(selectedMenuPrice)}/inv) para un total estimado de ${formatCOP(totalEstimated)}. Me gustaría validar disponibilidad de fecha.`
    window.open(`https://wa.me/${SITE.phonePrimaryClean}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section className="py-20 bg-white border-b border-black/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#E36E5E] bg-[#FDECE9] px-3.5 py-1.5 rounded-full mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparencia en Precios</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3A2B] tracking-tight mb-3">
            Calculadora Estimativa de Evento
          </h2>
          <p className="text-sm text-[#5E6763] font-light">
            Ajusta el número de invitados y el tipo de menú para calcular un presupuesto aproximado en tiempo real.
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
                <span>Capacidad máxima 200 pax</span>
              </div>
            </div>

            {/* Menu Selection Buttons */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3A2B] mb-2.5">
                Selecciona la propuesta gastronómica
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { name: "Menú Tradicional de 3 Tiempos", price: 70000, desc: "Entrada + Plato Fuerte + Postre" },
                  { name: "Desayuno Buffet Libre", price: 47000, desc: "Estaciones calientes, panadería y frutas" },
                  { name: "Plato Campestre (Frito Pastuso / Trucha)", price: 38000, desc: "Cocina tradicional nariñense" },
                  { name: "Refrigerio Gourmet + Bebida", price: 23000, desc: "Sándwich de pollo / empanadas horno" },
                ].map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => {
                      setSelectedMenuPrice(item.price)
                      setSelectedMenuName(item.name)
                    }}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      selectedMenuPrice === item.price
                        ? "bg-[#1E3A2B] text-white border-[#1E3A2B] shadow-xs"
                        : "bg-white text-[#2C302E] border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="font-semibold text-xs">{item.name}</div>
                    <div className="text-[11px] opacity-80 mt-0.5">{item.desc}</div>
                    <div className="text-xs font-bold text-[#BCD9C7] mt-1.5">
                      {formatCOP(item.price)} <span className="font-normal text-[10px] opacity-70">/ persona</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Salon Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-gray-200 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includeSalonRental}
                  onChange={(e) => setIncludeSalonRental(e.target.checked)}
                  className="w-4 h-4 rounded text-[#E36E5E] focus:ring-[#E36E5E] mt-0.5"
                />
                <div className="text-xs text-[#2C302E]">
                  <span className="font-semibold block text-[#1E3A2B]">
                    Incluir alquiler exclusivo del {salonName} ({formatCOP(salonPrice)})
                  </span>
                  <span className="text-[11px] text-[#5E6763] font-light mt-0.5 block">
                    (Nota: Al contratar paquetes integrales de alimentación para más de 100 personas, Jacobo puede otorgar tarifas especiales de salón).
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Results column */}
          <div className="lg:col-span-5 bg-[#1E3A2B] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#BCD9C7] font-semibold mb-2">
                Presupuesto Estimado
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
                {formatCOP(totalEstimated)}
              </div>

              {/* Line item breakdown */}
              <div className="space-y-3 py-4 border-y border-white/10 text-xs">
                <div className="flex justify-between items-center text-white/80">
                  <span>Alimentación ({guests} × {formatCOP(selectedMenuPrice)})</span>
                  <span className="font-semibold text-white">{formatCOP(foodTotal)}</span>
                </div>
                {includeSalonRental && (
                  <div className="flex justify-between items-center text-white/80">
                    <span>Alquiler exclusivo {guests > 45 ? "Salón 200p" : "Salón 45p"}</span>
                    <span className="font-semibold text-white">{formatCOP(salonPrice)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-[#BCD9C7]">
                  <span>Parqueadero y zonas verdes</span>
                  <span className="font-semibold">Incluido</span>
                </div>
                <div className="flex justify-between items-center text-[#BCD9C7]">
                  <span>Plan B Antilluvia garantizado</span>
                  <span className="font-semibold">Incluido</span>
                </div>
              </div>

              <div className="pt-4 text-[11px] text-white/60 font-light leading-relaxed">
                * Este cálculo es de referencia rápida y no constituye oferta contractual final. Los valores finales se pactan con Jacobo Arciniegas tras visita presencial.
              </div>
            </div>

            <div className="pt-8">
              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="w-full bg-[#E36E5E] hover:bg-[#D05C4D] text-white font-semibold py-3.5 px-5 rounded-2xl text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Solicitar esta propuesta en WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
