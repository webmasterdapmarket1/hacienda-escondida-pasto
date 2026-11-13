import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Briefcase, Heart, UtensilsCrossed, CheckCircle2, ArrowRight, FileText } from "lucide-react"

export const ServicesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"corp" | "social" | "resto">("corp")

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#E36E5E] bg-[#FDECE9] px-3.5 py-1.5 rounded-full mb-3">
            <span>Experiencias</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A2B] tracking-tight">
            Servicios Diseñados para Cada Ocasión
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-black/5 rounded-full max-w-md w-full justify-between">
            <button
              onClick={() => setActiveTab("corp")}
              className={`flex-1 py-3 px-4 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === "corp"
                  ? "bg-[#1E3A2B] text-white shadow-md"
                  : "text-[#5E6763] hover:text-[#1E3A2B]"
              }`}
            >
              <Briefcase className="w-4 h-4 text-[#BCD9C7]" />
              <span>Corporativos</span>
            </button>

            <button
              onClick={() => setActiveTab("social")}
              className={`flex-1 py-3 px-4 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === "social"
                  ? "bg-[#1E3A2B] text-white shadow-md"
                  : "text-[#5E6763] hover:text-[#1E3A2B]"
              }`}
            >
              <Heart className="w-4 h-4 text-[#E36E5E]" />
              <span>Familiar</span>
            </button>

            <button
              onClick={() => setActiveTab("resto")}
              className={`flex-1 py-3 px-4 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === "resto"
                  ? "bg-[#1E3A2B] text-white shadow-md"
                  : "text-[#5E6763] hover:text-[#1E3A2B]"
              }`}
            >
              <UtensilsCrossed className="w-4 h-4 text-amber-300" />
              <span>Restaurante</span>
            </button>
          </div>
        </div>

        {/* Tab Content Panels */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm">
          {activeTab === "corp" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center animate-in fade-in duration-300">
              <div className="space-y-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#E36E5E] bg-[#FDECE9] px-3 py-1 rounded-full">
                  Foros • Convenciones • Reuniones • Fiestas
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3A2B] leading-tight">
                  El mejor espacio para fiestas y eventos corporativos en Pasto
                </h3>
                <p className="text-[#5E6763] text-sm sm:text-base font-light leading-relaxed">
                  Un entorno campestre bien construido y versátil para organizar foros, convenciones, reuniones de dirección, integraciones, fiestas y eventos corporativos con total privacidad y parqueadero privado.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-[#2C302E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>No te preocupes por el tamaño de los platos, somos generosos</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#2C302E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Flexibles en las negociaciones</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#2C302E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Llegar no será un problema: somos la única opción a 8 minutos de Pasto</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <Link
                    to="/eventos-corporativos"
                    className="w-full sm:w-auto bg-[#E36E5E] hover:bg-[#D05C4D] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Ver propuesta corporativa completa</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="/docs/portafolio-servicios.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-xs text-[#1E3A2B] hover:text-[#E36E5E] font-medium flex items-center justify-center gap-1.5 py-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Portafolio PDF</span>
                  </a>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 shadow-md">
                <img
                  src="/images/fiesta-noche.jpg"
                  alt="Evento Corporativo Nocturno"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A2B]/80 via-transparent to-transparent flex items-end p-6 text-white">
                  <p className="text-xs font-light text-white/90">
                    Celebración empresarial con iluminación cálida y atención dedicada en Hacienda Escondida.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "social" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center animate-in fade-in duration-300">
              <div className="space-y-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#E36E5E] bg-[#FDECE9] px-3 py-1 rounded-full">
                  Bodas • XV Años • Grados • Bautizos
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3A2B] leading-tight">
                  Bodas campestres y celebraciones familiares memorables
                </h3>
                <p className="text-[#5E6763] text-sm sm:text-base font-light leading-relaxed">
                  Espacios fotogénicos con jardines, ambiente Pet Friendly y entorno campestre. Te ofrecemos la confianza para trabajar con los mejores aliados en decoración floral, sonido y orquesta, mientras nosotros garantizamos un servicio con calidez.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-[#2C302E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Experiencia y calidez en el servicio</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#2C302E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Plan Antilluvia</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#2C302E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>¿Te gustaría que te ayudemos con la logística de tu evento? ¡Tenemos la solución! Escríbenos.</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/eventos-familiares"
                    className="inline-flex items-center gap-2 bg-[#E36E5E] hover:bg-[#D05C4D] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors"
                  >
                    <span>Ver paquetes de Bodas y Familiares</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 shadow-md">
                <img
                  src="/images/evento-exterior.jpg"
                  alt="Ceremonia Familiar al Aire Libre"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {activeTab === "resto" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center animate-in fade-in duration-300">
              <div className="space-y-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  Exclusivo Domingos y Festivos • 12:00 m. a 3:00 p.m.
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3A2B] leading-tight">
                  Cocina tradicional nariñense en un ambiente familiar
                </h3>
                <p className="text-[#5E6763] text-sm sm:text-base font-light leading-relaxed">
                  El plan dominical por excelencia. Disfruta de nuestro frito pastuso, locro, cazuela de mariscos y frijolada con panceta al horno mientras tus hijos disfrutan de los amplios prados verdes.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-[#2C302E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cercanía: a solo 8 minutos del Único Outlet de Pasto</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#2C302E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Gastronomía nariñense propia (nos enfocamos en lo nuestro: un frito bien presentado y bien hecho)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#2C302E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Pet friendly: ven a disfrutar el domingo con toda tu familia y tus mascotas</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/restaurante"
                    className="inline-flex items-center gap-2 bg-[#1E3A2B] hover:bg-[#E36E5E] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors"
                  >
                    <span>Ver Carta del Restaurante y Reservar Mesa</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 shadow-md">
                <img
                  src="/images/menu/frito-pastuso.jpg"
                  alt="Frito pastuso y gastronomía nariñense en Hacienda Escondida"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
