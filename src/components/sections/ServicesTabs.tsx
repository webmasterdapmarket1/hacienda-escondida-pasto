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
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A2B] tracking-tight mb-4">
            Servicios Diseñados para Cada Ocasión
          </h2>
          <p className="text-base text-[#5E6763] font-light">
            Soluciones integrales con gastronomía nariñense propia y logística garantizada.
          </p>
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
              <span>Sociales</span>
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
                  Empresas • Fin de Año • Novenas
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3A2B] leading-tight">
                  Fiestas de fin de año e integraciones empresariales a 8 minutos de Pasto
                </h3>
                <p className="text-[#5E6763] text-sm sm:text-base font-light leading-relaxed">
                  Para gerencias y áreas de Talento Humano que buscan precisión: menú servido a la hora exacta, parqueadero para todo el personal y facturación electrónica formal.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-[#2C302E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Factura electrónica oficial y documentación legal completa</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#2C302E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Parqueadero amplio y seguro para vehículos y buses de transporte especial</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#2C302E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Opciones de Desayuno Buffet ($47.000) o Almuerzo Tradicional ($70.000)</span>
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
                    Celebración nocturna con iluminación decorativa y música en vivo en Hacienda Escondida.
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
                  Espacios fotogénicos con jardines y entorno campestre. Te ofrecemos la tranquilidad de traer a tus propios aliados en decoración floral, sonido y orquesta, mientras nosotros garantizamos un banquete servido con calidez.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-[#2C302E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Prueba de menú incluida para novios y familias</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#2C302E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Plan B antilluvia garantizado con nuestro Salón Auxiliar</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#2C302E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Libertad total para contratar a tu decorador y fotógrafo favorito</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/eventos-sociales"
                    className="inline-flex items-center gap-2 bg-[#E36E5E] hover:bg-[#D05C4D] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors"
                  >
                    <span>Ver paquetes de Bodas y Sociales</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 shadow-md">
                <img
                  src="/images/evento-exterior.jpg"
                  alt="Ceremonia Social al Aire Libre"
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
                  Cocina tradicional nariñense en un ambiente campestre sereno
                </h3>
                <p className="text-[#5E6763] text-sm sm:text-base font-light leading-relaxed">
                  El plan familiar dominical por excelencia. Disfruta de nuestro tradicional frito pastuso, truchas frescas al corte mariposa, sancocho campesino y ajiaco caliente mientras tus hijos disfrutan de los amplios prados verdes.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-[#2C302E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Frito pastuso tradicional con crispetas y ají de maní ($38.000)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#2C302E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Trucha frita corte mariposa de 450g con ensalada de mango ($39.000)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#2C302E]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Entradas típicas: empanadas de añejo y platanitos tentación</span>
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
                  src="/images/restaurante-campestre.jpg"
                  alt="Restaurante campestre y zonas verdes en Hacienda Escondida"
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
