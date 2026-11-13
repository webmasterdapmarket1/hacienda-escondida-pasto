import React from "react"
import { Briefcase, FileText, CheckCircle2, ShieldCheck, Users, Car, Download, ArrowRight } from "lucide-react"
import { QuoteForm } from "../components/sections/QuoteForm"
import { PriceEstimator } from "../components/sections/PriceEstimator"
import { SITE } from "../data/site"

export const EventosCorporativos: React.FC = () => {
  return (
    <div className="bg-[#FAF9F5]">
      {/* Hero Banner Corporativo */}
      <section className="relative py-24 bg-[#1E3A2B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/fiesta-noche.jpg"
            alt="Eventos Corporativos Hacienda Escondida"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs text-[#BCD9C7] font-medium mb-4">
            <Briefcase className="w-3.5 h-3.5 text-[#E36E5E]" />
            <span>Soluciones B2B para Empresas de Pasto y Nariño</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Foros, Convenciones y Eventos Corporativos a 8 Minutos de Pasto
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed mb-8">
            El mejor espacio campestre bien construido para áreas de Recursos Humanos y gerencias: salones de eventos y salas de reuniones en Pasto con cumplimiento exacto de horarios, platos generosos y parqueadero privado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cotizador"
              className="w-full sm:w-auto bg-[#E36E5E] hover:bg-[#D05C4D] text-white font-semibold px-8 py-3.5 rounded-full text-sm shadow-lg transition-all"
            >
              Solicitar Cotización Empresarial
            </a>
            <a
              href="/docs/portafolio-servicios.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium px-6 py-3.5 rounded-full text-sm transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#BCD9C7]" />
              <span>Descargar Portafolio PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4 Puntos Críticos B2B */}
      <section className="py-20 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF9F5] p-8 rounded-2xl border border-black/5 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1E3A2B] text-[#E36E5E] flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1E3A2B]">
                Facturación Electrónica Formal
              </h3>
              <p className="text-sm text-[#5E6763] font-light leading-relaxed">
                Cumplimiento de todos los requisitos tributarios de la DIAN. Expedimos factura electrónica formal a nombre de tu razón social para facilitar la legalización contable.
              </p>
            </div>

            <div className="bg-[#FAF9F5] p-8 rounded-2xl border border-black/5 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1E3A2B] text-[#BCD9C7] flex items-center justify-center">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1E3A2B]">
                Parqueadero para Todo el Equipo
              </h3>
              <p className="text-sm text-[#5E6763] font-light leading-relaxed">
                Parqueadero privado interno con amplia capacidad para vehículos personales, camionetas corporativas y buses de transporte especial de colaboradores.
              </p>
            </div>

            <div className="bg-[#FAF9F5] p-8 rounded-2xl border border-black/5 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1E3A2B] text-[#E36E5E] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1E3A2B]">
                Servicio a la Hora Acordada
              </h3>
              <p className="text-sm text-[#5E6763] font-light leading-relaxed">
                La cocina opera en el mismo salón con brigada propia. Tu almuerzo o cena corporativa se sirve en el minuto exacto estipulado en tu agenda de trabajo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menús Corporativos Populares */}
      <section className="py-20 bg-[#FAF9F5] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E36E5E] bg-[#FDECE9] px-3.5 py-1.5 rounded-full">
              Formatos de Alimentación
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3A2B] mt-3">
              Menús Diseñados para Integraciones y Convenciones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-black/5 shadow-xs space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  Matutino / Jornadas de Trabajo
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1E3A2B] mt-1 mb-3">
                  Desayuno Tipo Buffet
                </h3>
                <p className="text-xs text-[#5E6763] font-light leading-relaxed mb-4">
                  Barra libre con estaciones calientes (huevos al gusto), tabla de jamones y quesos, panadería nariñense, frutas frescas, yogur, cereales y café caliente ilimitado.
                </p>
              </div>
              <div className="text-xs text-emerald-800 bg-emerald-50 p-2.5 rounded-lg">
                Ideal para foros, asambleas gremiales y capacitaciones matutinas.
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl border-2 border-[#E36E5E] shadow-md space-y-4 flex flex-col justify-between relative">
              <div className="absolute -top-3 right-6 bg-[#E36E5E] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                Más Elegido por Empresas
              </div>
              <div>
                <span className="text-xs font-semibold text-[#E36E5E] uppercase tracking-wider">
                  Convenciones / Recepciones Corporativas
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1E3A2B] mt-1 mb-3">
                  Menú Tradicional de 3 Tiempos
                </h3>
                <p className="text-xs text-[#5E6763] font-light leading-relaxed mb-4">
                  Entrada (crema artesanal o escalopas), plato fuerte generoso a elegir (Filet mignon de cerdo, Pollo relleno Mornay o Lomo en velouté) y postre en copa de martini.
                </p>
              </div>
              <div className="text-xs text-[#E36E5E] bg-[#FDECE9] p-2.5 rounded-lg">
                Incluye servicio a la mesa formal y agua servida en vaso de cristal.
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-black/5 shadow-xs space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                  Integraciones Campestres
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1E3A2B] mt-1 mb-3">
                  Cocina Tradicional Nariñense
                </h3>
                <p className="text-xs text-[#5E6763] font-light leading-relaxed mb-4">
                  Platos generosos servidos al momento: Frito pastuso con crispetas, Trucha frita corte mariposa, Frijolada con panceta al horno, Cazuela de mariscos o Ajiaco campesino caliente.
                </p>
              </div>
              <div className="text-xs text-amber-900 bg-amber-50 p-2.5 rounded-lg">
                El favorito para integraciones relajadas en nuestras zonas verdes.
              </div>
            </div>
          </div>
        </div>
      </section>

      <PriceEstimator />
      <QuoteForm />
    </div>
  )
}
