import React from "react"
import { Link } from "react-router-dom"
import { Calendar, Users, MapPin, ShieldCheck, Utensils, Star, ArrowRight } from "lucide-react"
import { SITE } from "../../data/site"
import { buildVisitWhatsAppUrl } from "../../lib/whatsapp"

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1E3A2B]">
      {/* Background image with realistic depth overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-hacienda.jpg"
          alt="Hacienda Escondida Pasto"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-95 duration-1000"
        />
        {/* Gradients to guarantee high contrast typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#13261C] via-[#1E3A2B]/75 to-black/40" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center text-white flex flex-col items-center">
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-[#BCD9C7] mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#E36E5E] animate-ping" />
          <span>🌿 {SITE.distanceReference} (Mocondino, Pasto)</span>
        </div>

        {/* Main H1 Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] mb-6 text-balance">
          Tu evento resuelto en el campo, con la tranquilidad que mereces
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl font-light leading-relaxed mb-10 text-balance">
          Una casa campestre con raíces nariñenses que cuida a quien llega. Dos salones adaptados a tu celebración (para 200 o 45 personas), cocina tradicional propia y logística a tiempo sin afán.
        </p>

        {/* Dual Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <Link
            to="/cotizar"
            className="w-full sm:w-auto bg-[#E36E5E] hover:bg-[#D05C4D] text-white font-medium px-8 py-4 rounded-full text-base shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
          >
            <Calendar className="w-5 h-5" />
            <span>Cotizar mi fecha</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={buildVisitWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium px-8 py-4 rounded-full text-base transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Agendar visita con Jacobo</span>
          </a>
        </div>

        {/* Floating Key Metrics Grid */}
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 text-white transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-2 text-[#BCD9C7] text-xs font-medium uppercase tracking-wider mb-1">
              <Users className="w-4 h-4 text-[#E36E5E]" />
              <span>Salón Principal</span>
            </div>
            <div className="font-serif text-xl sm:text-2xl font-bold">150–200 pax</div>
            <p className="text-xs text-white/70 mt-1 font-light">Grandes banquetes y convenciones</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 text-white transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-2 text-[#BCD9C7] text-xs font-medium uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4 text-[#BCD9C7]" />
              <span>Plan B Antilluvia</span>
            </div>
            <div className="font-serif text-xl sm:text-2xl font-bold">Hasta 45 pax</div>
            <p className="text-xs text-white/70 mt-1 font-light">Salón auxiliar cubierto garantizado</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 text-white transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-2 text-[#BCD9C7] text-xs font-medium uppercase tracking-wider mb-1">
              <Utensils className="w-4 h-4 text-[#E36E5E]" />
              <span>Restaurante</span>
            </div>
            <div className="font-serif text-xl sm:text-2xl font-bold">Dom. y Festivos</div>
            <p className="text-xs text-white/70 mt-1 font-light">12:00 m. a 3:00 p.m. Cocina nariñense</p>
          </div>

          <a
            href={SITE.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 text-white transition-all hover:-translate-y-1 block group"
          >
            <div className="flex items-center gap-2 text-[#BCD9C7] text-xs font-medium uppercase tracking-wider mb-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="group-hover:text-white transition-colors">Prueba Social</span>
            </div>
            <div className="font-serif text-xl sm:text-2xl font-bold">{SITE.googleRating} / 5.0 ★</div>
            <p className="text-xs text-white/70 mt-1 font-light">{SITE.googleReviewCount} reseñas en Google Maps ↗</p>
          </a>
        </div>
      </div>
    </section>
  )
}
