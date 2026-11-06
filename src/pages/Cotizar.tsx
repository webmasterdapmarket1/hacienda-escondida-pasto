import React from "react"
import { QuoteForm } from "../components/sections/QuoteForm"
import { PriceEstimator } from "../components/sections/PriceEstimator"
import { LocationMap } from "../components/sections/LocationMap"
import { Phone, MessageCircle, Clock, ShieldCheck, Sparkles } from "lucide-react"
import { SITE } from "../data/site"
import { buildVisitWhatsAppUrl } from "../lib/whatsapp"

export const Cotizar: React.FC = () => {
  return (
    <div className="bg-[#FAF9F5]">
      {/* Header Banner */}
      <section className="py-16 bg-[#1E3A2B] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#BCD9C7] bg-white/10 px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E36E5E]" />
            <span>Respuesta en Menos de 5 Minutos</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Cotiza tu Evento en Hacienda Escondida
          </h1>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-2xl mx-auto">
            Indícanos la fecha estimada, cantidad de invitados y formato de comida. Te enviaremos una cotización detallada directamente a tu WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-[#BCD9C7]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E36E5E]" />
              <span>Sin cobros ocultos de proveedores</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#E36E5E]" />
              <span>Respuesta rápida por Melisa</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#E36E5E]" />
              <span>Atención: {SITE.phonePrimary}</span>
            </div>
          </div>
        </div>
      </section>

      <PriceEstimator />
      <QuoteForm />
      <LocationMap />
    </div>
  )
}
