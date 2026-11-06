import React from "react"
import { ShieldCheck, Clock, MapPin, Car, Sparkles, CheckCircle2 } from "lucide-react"
import { SITE } from "../../data/site"

export const EventoResuelto: React.FC = () => {
  const pillars = [
    {
      icon: <Clock className="w-6 h-6 text-[#E36E5E]" />,
      title: "Menús servidos a la hora acordada",
      desc: "Nuestra cocina opera in situ con equipo propio. Eliminamos los retrasos típicos de catering externo: tus invitados almuerzan o cenan a la hora programada en tu itinerario.",
      highlight: "Cocina propia nariñense",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#BCD9C7]" />,
      title: "Plan B Antilluvia Garantizado",
      desc: "El clima de montaña no arruinará tu celebración. Si llueve durante tu momento campestre exterior, el Salón Auxiliar (45 pax) o el Salón Principal (200 pax) reciben a tu grupo bajo techo de inmediato.",
      highlight: "Salón auxiliar cubierto",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#E36E5E]" />,
      title: "A 8 minutos del Único Outlet",
      desc: "Se acabaron los viajes agotadores de hora y media por trochas. Estamos en la Vereda Dolores (Mocondino), a minutos de Pasto, con acceso completamente pavimentado y seguro.",
      highlight: "7 a 9 min de trayecto",
    },
    {
      icon: <Car className="w-6 h-6 text-[#BCD9C7]" />,
      title: "Parqueadero privado para todo tu equipo",
      desc: "Espacio amplio y vigilado dentro del mismo predio. Capacidad para vehículos particulares, vans y buses empresariales sin congestiones ni riesgos en la vía.",
      highlight: "Vigilancia privada",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#E36E5E] bg-[#FDECE9] px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Propuesta de Valor</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A2B] tracking-tight mb-4">
            Tu Evento, Completamente Resuelto
          </h2>
          <p className="text-base sm:text-lg text-[#5E6763] font-light leading-relaxed">
            Eliminamos la incertidumbre, el estrés logístico y la falta de garantías. Nosotros nos ocupamos de la infraestructura y la cocina; tú y tus invitados disfrutan.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md border border-black/5 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1E3A2B] flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#E36E5E] mb-1.5">
                  {pillar.highlight}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1E3A2B] mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#5E6763] font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-[#1E3A2B] font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Garantía de tranquilidad</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
