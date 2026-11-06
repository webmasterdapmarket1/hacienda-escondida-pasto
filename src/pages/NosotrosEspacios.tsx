import React from "react"
import { Users, ShieldCheck, MapPin, Sparkles, Check, Car, TreePine, AlertCircle, Phone } from "lucide-react"
import { SPACES_DATA, Space } from "../data/spaces"
import { LocationMap } from "../components/sections/LocationMap"
import { SITE } from "../data/site"
import { buildVisitWhatsAppUrl } from "../lib/whatsapp"

export const NosotrosEspacios: React.FC = () => {
  return (
    <div className="bg-[#FAF9F5]">
      {/* Hero Nosotros */}
      <section className="relative py-24 bg-[#1E3A2B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/entrada-hacienda.jpg"
            alt="Entrada Hacienda Escondida Pasto"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs text-[#BCD9C7] font-medium mb-4">
            <TreePine className="w-3.5 h-3.5 text-[#BCD9C7]" />
            <span>Nuestra Historia y Filosofía de Puertas Abiertas</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Hospitalidad Nariñense y Serenidad en el Campo
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed mb-8">
            Ubicados en la Vereda Dolores (Mocondino). Un refugio campestre donde cada visitante es recibido con calma, sin afanes y con la garantía de que todo saldrá perfecto.
          </p>

          <a
            href={buildVisitWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E36E5E] hover:bg-[#D05C4D] text-white font-semibold px-8 py-3.5 rounded-full text-sm shadow-lg transition-all"
          >
            Agendar Recorrido Presencial con Jacobo
          </a>
        </div>
      </section>

      {/* Filosofía del Anfitrión Sereno */}
      <section className="py-20 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E36E5E] bg-[#FDECE9] px-3.5 py-1.5 rounded-full">
                El Espíritu del Lugar
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3A2B] leading-tight">
                "Nosotros nos ocupamos; tú y tus invitados disfrutan"
              </h2>
              <p className="text-sm sm:text-base text-[#5E6763] font-light leading-relaxed">
                Hacienda Escondida nació del deseo de ofrecerle a Pasto un espacio campestre distinguido que no exigiera desplazamientos desgastantes ni dejara a los anfitriones a merced del clima.
              </p>
              <p className="text-sm sm:text-base text-[#5E6763] font-light leading-relaxed">
                Bajo la dirección de <strong>{SITE.contactPerson}</strong>, nuestro equipo cuida cada detalle de tu celebración: desde el parqueadero vigilado hasta la temperatura exacta en la que el lomo o la trucha llegan a la mesa de tus invitados.
              </p>

              <div className="pt-2 border-t border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1E3A2B] text-white flex items-center justify-center font-serif text-xl font-bold">
                  JA
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#1E3A2B]">{SITE.contactPerson}</div>
                  <div className="text-xs text-[#5E6763]">Propietario y Anfitrión de Hacienda Escondida</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-sm h-64">
                <img
                  src="/images/entrada-hacienda.jpg"
                  alt="Fachada colonial"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm h-64 mt-8">
                <img
                  src="/images/zonas-verdes.jpg"
                  alt="Paisaje verde"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fichas Técnicas de los Salones */}
      <section className="py-20 bg-[#FAF9F5] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E36E5E] bg-[#FDECE9] px-3.5 py-1.5 rounded-full">
              Infraestructura
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3A2B] mt-3">
              Fichas Técnicas de Salones y Zonas Verdes
            </h2>
          </div>

          <div className="space-y-12">
            {SPACES_DATA.map((space: Space) => (
              <div
                key={space.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-black/5 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 relative rounded-2xl overflow-hidden h-64 sm:h-80 shadow-md">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover"
                  />
                  {space.isStockImage && (
                    <div className="absolute top-4 left-4 bg-[#1E3A2B]/85 text-[#BCD9C7] text-[10px] px-2.5 py-1 rounded-md shadow flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 text-[#E36E5E]" />
                      <span>Foto referencial de stock</span>
                    </div>
                  )}
                  {space.planBBadge && (
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      {space.planBBadge}
                    </div>
                  )}
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-serif text-3xl font-bold text-[#1E3A2B]">
                      {space.name}
                    </h3>
                    {space.priceNumber > 0 && (
                      <span className="font-serif text-xl font-bold text-[#E36E5E]">
                        {space.rentalPrice} <span className="text-xs text-gray-400 font-normal">alquiler básico</span>
                      </span>
                    )}
                  </div>

                  <p className="text-xs uppercase tracking-wider text-[#E36E5E] font-medium">
                    {space.subtitle}
                  </p>

                  <p className="text-sm text-[#5E6763] font-light leading-relaxed">
                    {space.description}
                  </p>

                  <div className="bg-[#FAF9F5] p-4 rounded-xl border border-black/5 space-y-2">
                    <span className="text-xs font-semibold text-[#1E3A2B] uppercase tracking-wider block mb-1">
                      Detalles y Equipamiento:
                    </span>
                    {space.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#2C302E]">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-[#5E6763] pt-2">
                    <strong className="text-[#1E3A2B]">Recomendado para:</strong> {space.idealFor}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocationMap />
    </div>
  )
}
