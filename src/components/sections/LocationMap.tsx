import React from "react"
import { MapPin, Navigation, Car, Shield } from "lucide-react"
import { SITE } from "../../data/site"

export const LocationMap: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Info column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#E36E5E] bg-[#FDECE9] px-3.5 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5" />
              <span>Ubicación Estratégica</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3A2B] tracking-tight leading-tight">
              A Minutos de Pasto, Lejos del Ruido Urbano
            </h2>

            <p className="text-sm sm:text-base text-[#5E6763] font-light leading-relaxed">
              Resuelve la dicotomía entre salones cerrados de la ciudad y fincas lejanas de difícil acceso. Hacienda Escondida combina el paisaje natural de Mocondino con una ruta pavimentada de tan solo <strong>7 a 9 minutos</strong> saliendo desde el Centro Comercial Único Outlet.
            </p>

            <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-black/5 space-y-3 text-xs text-[#2C302E]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E36E5E] shrink-0 mt-0.5" />
                <span>
                  <strong>Dirección:</strong> {SITE.address}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Car className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Ruta recomendada:</strong> Vía principal a Mocondino desde el Único Outlet. Apta para automóviles bajos y buses.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-[#1E3A2B] shrink-0 mt-0.5" />
                <span>
                  <strong>Parqueadero interno:</strong> Capacidad vigilada dentro del predio privado.
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={SITE.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E3A2B] hover:bg-[#13261C] text-white text-xs font-semibold uppercase tracking-wider py-3 px-5 rounded-xl text-center flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#BCD9C7]" />
                <span>Ruta en Google Maps</span>
              </a>

              <a
                href={SITE.maps.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#BCD9C7] hover:bg-[#8BB89C] text-[#1E3A2B] text-xs font-semibold uppercase tracking-wider py-3 px-5 rounded-xl text-center flex items-center justify-center gap-2 transition-colors"
              >
                <Car className="w-4 h-4" />
                <span>Abrir en Waze</span>
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-black/10 h-[380px] sm:h-[440px] bg-gray-100">
              <iframe
                title="Mapa Hacienda Escondida Pasto"
                src={SITE.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
