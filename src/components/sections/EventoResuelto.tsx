import React from "react"
import { Utensils, HeartHandshake, MapPin, PawPrint, Sparkles, CheckCircle2 } from "lucide-react"

export const EventoResuelto: React.FC = () => {
  const pillars = [
    {
      icon: <MapPin className="w-6 h-6 text-[#E36E5E]" />,
      title: "Cercanía y campo sin preocupaciones",
      desc: "No te preocupes por nada y disfruta: fuera de la ciudad pero a solo 8 minutos del Único Outlet, en una hacienda bien construida con vía pavimentada y amplio parqueadero privado.",
      highlight: "Cercanía y parqueadero privado",
    },
    {
      icon: <Utensils className="w-6 h-6 text-[#BCD9C7]" />,
      title: "Platos típicos gourmet",
      desc: "Nuestra cocina propia eleva la tradición nariñense y la gastronomía de eventos con porciones generosas, excelente presentación y platos servidos calientes a la hora acordada.",
      highlight: "Cocina propia en casa",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#E36E5E]" />,
      title: "El servicio más dedicado para ti",
      desc: "Seremos tu aliado en el momento más importante de tu vida. Jacobo Arciniegas y su equipo te acompañan personalmente de principio a fin para cuidar cada detalle.",
      highlight: "Atención personal de Jacobo",
    },
    {
      icon: <PawPrint className="w-6 h-6 text-[#BCD9C7]" />,
      title: "Espacio 100% Pet Friendly",
      desc: "Sabemos que tus mascotas hacen parte de tu familia. Nuestras amplias zonas verdes y jardines campestres están abiertos para que disfruten contigo.",
      highlight: "Pet Friendly",
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
            Un evento son muchos detalles, ¿te quieres arriesgar el día más importante de tu vida?
          </h2>
          <p className="text-base sm:text-lg text-[#5E6763] font-light leading-relaxed">
            Seremos tu aliado en un lugar campestre bien construido a minutos de Pasto. Nosotros nos ocupamos de la gastronomía y el servicio; tú y tus invitados solo se dedican a disfrutar.
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
