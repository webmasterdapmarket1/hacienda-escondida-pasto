import React from "react"
import { MessageCircle } from "lucide-react"
import { SITE } from "../../data/site"

export const WhatsAppFloat: React.FC = () => {
  const defaultMessage = encodeURIComponent(
    "Hola Melisa, visito la página web de Hacienda Escondida Pasto y me gustaría recibir información sobre eventos y reservas."
  )

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip callout on desktop */}
      <a
        href={`https://wa.me/${SITE.phonePrimaryClean}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center bg-white text-[#1E3A2B] text-xs font-medium py-2 px-3.5 rounded-full shadow-lg border border-black/5 hover:bg-gray-50 transition-all transform hover:-translate-x-1"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-ping" />
        <span>¿Dudas? Hablar con <strong>Melisa</strong></span>
      </a>

      {/* Floating circle button */}
      <a
        href={`https://wa.me/${SITE.phonePrimaryClean}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </div>
  )
}
