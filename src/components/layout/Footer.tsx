import React from "react"
import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from "lucide-react"
import { SITE } from "../../data/site"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E3A2B] text-[#FAF9F5] border-t border-white/10">
      {/* Pre-footer reassurance banner */}
      <div className="border-b border-white/10 py-10 px-4 sm:px-6 lg:px-8 bg-[#13261C]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E36E5E]/20 flex items-center justify-center text-[#E36E5E] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm text-white">Cercanía Real</div>
              <div className="text-xs text-[#BCD9C7]">7 a 9 minutos del Único Outlet de Pasto</div>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#BCD9C7]/20 flex items-center justify-center text-[#BCD9C7] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm text-white">Plan B Antilluvia</div>
              <div className="text-xs text-[#BCD9C7]">Salón Auxiliar cubierto garantizado</div>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E36E5E]/20 flex items-center justify-center text-[#E36E5E] shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm text-white">Cocina Propia Nariñense</div>
              <div className="text-xs text-[#BCD9C7]">Menús servidos a la hora acordada</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo/logo-isotipo-blanco.png"
                alt="Hacienda Escondida"
                className="h-12 w-auto object-contain"
              />
              <div>
                <div className="font-serif text-2xl font-bold text-white tracking-tight leading-none">
                  Hacienda Escondida
                </div>
                <div className="text-[11px] text-[#BCD9C7] tracking-wider uppercase mt-0.5">
                  Pasto • Nariño
                </div>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed font-light">
              "{SITE.slogan}". Un entorno campestre sereno donde cada detalle de tu evento se entrega resuelto con hospitalidad nariñense.
            </p>
            <div className="text-xs text-[#BCD9C7] flex items-start gap-2 pt-2">
              <MapPin className="w-4 h-4 text-[#E36E5E] shrink-0 mt-0.5" />
              <span>{SITE.address}</span>
            </div>
          </div>

          {/* Column 2: Horarios */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide border-b border-white/10 pb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#E36E5E]" />
              <span>Horarios de Atención</span>
            </h3>
            <div className="space-y-3 text-sm text-white/80">
              <div>
                <span className="font-semibold text-white block">Restaurante Campestre:</span>
                <span className="text-xs text-[#BCD9C7]">
                  {SITE.hours.restaurant}
                </span>
                <span className="block text-[11px] text-white/60 mt-0.5">
                  Frito pastuso, truchas, ajiaco y cocina tradicional.
                </span>
              </div>
              <div className="pt-1">
                <span className="font-semibold text-white block">Eventos Privados:</span>
                <span className="text-xs text-[#BCD9C7]">
                  {SITE.hours.events}
                </span>
                <span className="block text-[11px] text-white/60 mt-0.5">
                  Bodas, fin de año, grados y capacitaciones empresariales.
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Contacto Directo */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide border-b border-white/10 pb-2">
              Contacto Directo
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`https://wa.me/${SITE.phonePrimaryClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/90 hover:text-[#BCD9C7] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E36E5E]" />
                  <span>WhatsApp 1: {SITE.phonePrimary}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE.phoneSecondaryClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/90 hover:text-[#BCD9C7] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#BCD9C7]" />
                  <span>WhatsApp 2: {SITE.phoneSecondary}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-white/90 hover:text-[#BCD9C7] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E36E5E]" />
                  <span className="truncate">{SITE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/90 hover:text-[#BCD9C7] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#E36E5E] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>{SITE.social.instagramHandle}</span>
                </a>
              </li>
            </ul>
            <div className="pt-2">
              <a
                href={SITE.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs bg-white/10 hover:bg-white/20 text-white px-3.5 py-2 rounded-lg transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#BCD9C7]" />
                <span>Cómo llegar desde el Único Outlet</span>
              </a>
            </div>
          </div>

          {/* Column 4: Condiciones y Portafolio */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide border-b border-white/10 pb-2">
              Garantías y Políticas
            </h3>
            <div className="text-xs text-white/70 space-y-2 leading-relaxed">
              <p>
                <strong className="text-white">Reserva de fechas:</strong> 50% de anticipo al formalizar y 50% dos días antes del evento.
              </p>
              <p>
                <strong className="text-white">Políticas de cancelación:</strong> Más de 120 días devolución 100%; entre 90 y 119 días retención del 60%; menos de 89 días no reembolsable.
              </p>
              <div className="pt-2">
                <a
                  href="/docs/portafolio-servicios.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#BCD9C7] hover:underline font-medium flex items-center gap-1.5"
                >
                  <span>📄 Descargar Portafolio de Servicios (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-white/60 gap-3">
          <p>© {new Date().getFullYear()} Hacienda Escondida Pasto. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Atención personalizada por</span>
            <span className="text-white font-medium">{SITE.contactPerson}</span>
            <span>y Melisa</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
