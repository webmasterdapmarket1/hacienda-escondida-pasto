import React from "react"
import { Heart, Sparkles, ShieldCheck, Utensils, Camera, Music, CheckCircle2, ArrowRight } from "lucide-react"
import { QuoteForm } from "../components/sections/QuoteForm"
import { PriceEstimator } from "../components/sections/PriceEstimator"
import { SPACES_DATA } from "../data/spaces"

export const EventosSociales: React.FC = () => {
  return (
    <div className="bg-[#FAF9F5]">
      {/* Hero Banner Sociales */}
      <section className="relative py-24 bg-[#1E3A2B] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="/images/evento-exterior.jpg"
            alt="Bodas y Eventos Sociales Hacienda Escondida"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs text-[#BCD9C7] font-medium mb-4">
            <Heart className="w-3.5 h-3.5 text-[#E36E5E]" />
            <span>Bodas 2026-2027 • XV Años • Grados • Celebraciones Familiares</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            El Escenario Campestre que Soñaste, con la Certeza que Necesitas
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed mb-8">
            Espacios rodeados de jardines y lago a minutos de Pasto. Con la tranquilidad de tener un Plan B antilluvia cubierto y cata de menú previa con Jacobo Arciniegas.
          </p>

          <a
            href="#cotizador"
            className="inline-block bg-[#E36E5E] hover:bg-[#D05C4D] text-white font-semibold px-8 py-3.5 rounded-full text-sm shadow-lg transition-all"
          >
            Cotizar Fecha de Boda o Evento
          </a>
        </div>
      </section>

      {/* 4 Garantías para Novias y Familias */}
      <section className="py-20 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E36E5E] bg-[#FDECE9] px-3.5 py-1.5 rounded-full">
              Tu Celebración en Manos Expertas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3A2B] mt-3">
              ¿Por Qué Elegir Hacienda Escondida para tu Gran Día?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-black/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E36E5E]/15 text-[#E36E5E] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1E3A2B]">
                Plan B Antilluvia Real
              </h3>
              <p className="text-xs text-[#5E6763] font-light leading-relaxed">
                Si la tarde se nubla o llueve durante la ceremonia campestre, dispones del Salón Auxiliar o del Salón Principal cubiertos para continuar sin pausas ni incomodidades.
              </p>
            </div>

            <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-black/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#BCD9C7]/30 text-emerald-800 flex items-center justify-center">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1E3A2B]">
                Prueba de Menú Incluida
              </h3>
              <p className="text-xs text-[#5E6763] font-light leading-relaxed">
                Prueba previamente cada plato con tu pareja o familia. Ajustamos puntos de cocción, salsas, acompañamientos y postres con Jacobo antes del evento.
              </p>
            </div>

            <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-black/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E36E5E]/15 text-[#E36E5E] flex items-center justify-center">
                <Music className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1E3A2B]">
                Tus Propios Aliados
              </h3>
              <p className="text-xs text-[#5E6763] font-light leading-relaxed">
                Libertad absoluta para contratar a tu decorador floral, orquesta, DJ, pastelero y fotógrafo de confianza. No cobramos sobrecostos ni comisiones ocultas de proveedores.
              </p>
            </div>

            <div className="bg-[#FAF9F5] p-6 rounded-2xl border border-black/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#BCD9C7]/30 text-emerald-800 flex items-center justify-center">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1E3A2B]">
                Fotos Naturales Únicas
              </h3>
              <p className="text-xs text-[#5E6763] font-light leading-relaxed">
                Praderas verdes, árboles nativos y entorno con lago para tus sesiones nupciales o de quinceañera sin tener que trasladarte a locaciones adicionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Espacios Sociales */}
      <section className="py-20 bg-[#FAF9F5] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3A2B]">
              Rincones para Cada Momento de tu Boda
            </h2>
            <p className="text-sm text-[#5E6763] font-light mt-2">
              Ceremonia exterior, cóctel de bienvenida en jardines y fiesta de gala en el salón.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-sm bg-white border border-black/5">
              <img
                src="/images/evento-exterior.jpg"
                alt="Ceremonia en jardín"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-[#1E3A2B]">Ceremonia al Aire Libre</h3>
                <p className="text-xs text-[#5E6763] font-light mt-1">Montaje de sillas y arco floral en la pradera verde.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm bg-white border border-black/5">
              <img
                src="/images/montaje-mesas.jpg"
                alt="Salón Principal Banquetes"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-[#1E3A2B]">Recepción y Banquete</h3>
                <p className="text-xs text-[#5E6763] font-light mt-1">Salón principal con iluminación cálida y vista al paisaje.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm bg-white border border-black/5">
              <img
                src="/images/fiesta-noche.jpg"
                alt="Fiesta Nocturna"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-[#1E3A2B]">Fiesta y Baile hasta las 2:00 a.m.</h3>
                <p className="text-xs text-[#5E6763] font-light mt-1">Acústica cuidada y espacio para pista de baile y tarima de música.</p>
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
