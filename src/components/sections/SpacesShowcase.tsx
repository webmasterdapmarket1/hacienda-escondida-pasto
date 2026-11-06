import React from "react"
import { Link } from "react-router-dom"
import { Users, ShieldCheck, Check, ArrowRight, Sparkles, AlertCircle } from "lucide-react"
import { SPACES_DATA } from "../../data/spaces"

export const SpacesShowcase: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#E36E5E] bg-[#FDECE9] px-3.5 py-1.5 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nuestros Salones y Espacios</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A2B] tracking-tight">
              Espacios Adaptados al Tamaño de tu Celebración
            </h2>
            <p className="text-base sm:text-lg text-[#5E6763] font-light mt-3">
              Desde grandes fiestas empresariales de fin de año hasta reuniones familiares íntimas.
            </p>
          </div>

          <Link
            to="/nosotros-y-espacios"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#E36E5E] hover:text-[#D05C4D] group"
          >
            <span>Ver especificaciones completas</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SPACES_DATA.map((space) => (
            <div
              key={space.id}
              className="bg-[#FAF9F5] rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image container */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Plan B badge */}
                  {space.planBBadge && (
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{space.planBBadge}</span>
                    </div>
                  )}

                  {/* Stock placeholder notice for lake */}
                  {space.isStockImage && (
                    <div className="absolute top-4 left-4 bg-[#1E3A2B]/80 backdrop-blur-xs text-[#BCD9C7] text-[10px] font-medium px-2.5 py-1 rounded-md shadow flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-[#E36E5E]" />
                      <span>Foto referencial de entorno</span>
                    </div>
                  )}

                  {/* Capacity badge over image */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#BCD9C7] font-medium">
                        Capacidad
                      </div>
                      <div className="font-serif text-2xl font-bold flex items-center gap-2">
                        <Users className="w-5 h-5 text-[#E36E5E]" />
                        <span>{space.capacity}</span>
                      </div>
                    </div>
                    {space.priceNumber > 0 && (
                      <div className="text-right">
                        <span className="text-[10px] text-white/70 uppercase block">Alquiler básico</span>
                        <span className="text-sm font-semibold text-white">{space.rentalPrice}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-serif text-2xl font-bold text-[#1E3A2B] mb-2">
                    {space.name}
                  </h3>
                  <p className="text-xs text-[#E36E5E] font-medium uppercase tracking-wider mb-3">
                    {space.subtitle}
                  </p>
                  <p className="text-sm text-[#5E6763] font-light leading-relaxed mb-6">
                    {space.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-black/5">
                    <span className="text-xs font-semibold text-[#1E3A2B] uppercase tracking-wider block">
                      Incluye:
                    </span>
                    {space.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#2C302E]">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 sm:p-7 pt-0">
                <Link
                  to="/cotizar"
                  className="w-full bg-[#1E3A2B] hover:bg-[#E36E5E] text-white text-xs font-semibold uppercase tracking-wider py-3.5 rounded-xl text-center block transition-colors duration-200"
                >
                  Cotizar este espacio
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
