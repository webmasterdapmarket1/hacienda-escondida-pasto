import React, { useState } from "react"
import { Send, CheckCircle2, AlertCircle, Phone, Calendar, Users, Utensils, FileText, Sparkles } from "lucide-react"
import { buildQuoteWhatsAppUrl, QuotePayload } from "../../lib/whatsapp"
import { SITE } from "../../data/site"

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<QuotePayload>({
    name: "",
    phone: "",
    email: "",
    eventType: "Evento Empresarial / Fin de Año",
    date: "",
    guests: 50,
    menuInterest: "Menú Tradicional de 3 Tiempos ($70.000)",
    invoiceRequired: false,
    notes: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [phoneError, setPhoneError] = useState("")

  const isPrivateEvent = formData.eventType !== "Reserva Restaurante Dominical"
  const showMinGuestsWarning = isPrivateEvent && formData.guests > 0 && formData.guests < 35

  const validatePhone = (phoneStr: string) => {
    const cleaned = phoneStr.replace(/\D/g, "").replace(/^57/, "")
    return cleaned.length === 10 && cleaned.startsWith("3")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validatePhone(formData.phone)) {
      setPhoneError("Por favor ingresa un número de celular colombiano válido (10 dígitos iniciando por 3).")
      return
    }
    setPhoneError("")

    // 1. Simulate Clientify CRM webhook call (for production integration)
    console.log("[CRM Webhook Clientify Simulation] Payload enviado:", {
      lead_source: "Sitio Web Mockup",
      operator: SITE.salesRep,
      ...formData,
      created_at: new Date().toISOString(),
    })

    // 2. Open WhatsApp prefilled with lead details
    const waUrl = buildQuoteWhatsAppUrl(formData)
    window.open(waUrl, "_blank")

    setSubmitted(true)
  }

  return (
    <section id="cotizador" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-black/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#E36E5E] bg-[#FDECE9] px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cotizador Inteligente</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A2B] tracking-tight mb-4">
            Inicia la Planeación de tu Evento
          </h2>
          <p className="text-sm sm:text-base text-[#5E6763] font-light">
            Déjanos los datos iniciales y te enviaremos una propuesta formal en WhatsApp en menos de 24 horas.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-black/5">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E3A2B]">
                ¡Solicitud Generada con Éxito!
              </h3>
              <p className="text-sm text-[#5E6763] max-w-md mx-auto font-light leading-relaxed">
                Hemos preparado tu mensaje para WhatsApp con los datos de tu evento. Melisa o Jacobo te responderán en breve para confirmar disponibilidad.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#E36E5E] hover:underline font-medium"
                >
                  Modificar datos y volver a cotizar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Event Type */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3A2B] mb-2">
                  Tipo de Solicitud *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    "Evento Empresarial / Fin de Año",
                    "Evento Familiar (Boda, XV, Grado)",
                    "Reserva Restaurante Dominical",
                  ].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, eventType: type })}
                      className={`py-3 px-3.5 rounded-xl text-xs font-medium border text-center transition-all ${
                        formData.eventType === type
                          ? "bg-[#1E3A2B] text-white border-[#1E3A2B] shadow-xs"
                          : "bg-gray-50 text-[#5E6763] border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid 2 cols: Date & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3A2B] mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E36E5E]" />
                    <span>Fecha Estimada del Evento</span>
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E36E5E]/20 focus:border-[#E36E5E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3A2B] mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#E36E5E]" />
                    <span>Número Estimado de Invitados *</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="350"
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) || 0 })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E36E5E]/20 focus:border-[#E36E5E]"
                  />
                </div>
              </div>

              {/* Dynamic Min Guests Rule Notice */}
              {showMinGuestsWarning && (
                <div className="bg-[#EEF6F1] border border-[#BCD9C7] rounded-xl p-4 flex items-start gap-3 animate-in fade-in duration-200">
                  <AlertCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-[#1E3A2B] leading-relaxed">
                    <strong className="font-semibold block mb-0.5">Nota sobre capacidad mínima:</strong>
                    El mínimo para reserva de eventos privados es de <strong>35 personas</strong>. Para grupos menores te invitamos cordialmente a celebrar con nosotros reservando mesa en nuestro <strong>Restaurante Campestre</strong> los domingos y festivos de 12:00 m. a 3:00 p.m.
                  </div>
                </div>
              )}

              {/* Menu or Budget Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3A2B] mb-2 flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-[#E36E5E]" />
                  <span>Opción Gastronómica de Interés</span>
                </label>
                <select
                  value={formData.menuInterest}
                  onChange={(e) => setFormData({ ...formData, menuInterest: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E36E5E]/20 focus:border-[#E36E5E]"
                >
                  <option value="Menú Tradicional de 3 Tiempos ($70.000/inv)">
                    Menú Tradicional de 3 Tiempos — $70.000 / invitado (Filet mignon, pollo relleno o lomo)
                  </option>
                  <option value="Desayuno Buffet Libre ($47.000/inv)">
                    Desayuno Tipo Buffet — $47.000 / persona (Estaciones libres calientes y frías)
                  </option>
                  <option value="Cocina Nariñense Tradicional a la Carta ($34.000-$39.000)">
                    Platos Tradicionales a la Carta (Frito pastuso, truchas, ajiaco)
                  </option>
                  <option value="Refrigerios y Pasabocas Empresariales (desde $4.000)">
                    Refrigerios empresariales y pasabocas individuales
                  </option>
                  <option value="Solo Alquiler de Salón (Sin paquete de comida)">
                    Solo alquiler de salón (Salón Principal $3M / Auxiliar $1M)
                  </option>
                </select>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3A2B] mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Jacobo Arciniegas"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E36E5E]/20 focus:border-[#E36E5E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3A2B] mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#E36E5E]" />
                      <span>WhatsApp / Celular *</span>
                    </span>
                    <span className="text-[10px] text-gray-400 font-normal">10 dígitos</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 311 737 7030"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value })
                      if (phoneError) setPhoneError("")
                    }}
                    className={`w-full bg-gray-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E36E5E]/20 ${
                      phoneError ? "border-red-400 bg-red-50/30" : "border-gray-200 focus:border-[#E36E5E]"
                    }`}
                  />
                  {phoneError && (
                    <span className="text-[11px] text-red-600 block mt-1">{phoneError}</span>
                  )}
                </div>
              </div>

              {/* Email & Invoice */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3A2B] mb-2">
                    Correo Electrónico (Opcional)
                  </label>
                  <input
                    type="email"
                    placeholder="contacto@tuempresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#E36E5E]/20 focus:border-[#E36E5E]"
                  />
                </div>

                <div className="pt-2 sm:pt-6">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.invoiceRequired}
                      onChange={(e) => setFormData({ ...formData, invoiceRequired: e.target.checked })}
                      className="w-4 h-4 rounded text-[#E36E5E] focus:ring-[#E36E5E] border-gray-300"
                    />
                    <span className="text-xs text-[#2C302E] font-medium flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#5E6763]" />
                      <span>Requiere Factura Electrónica formal (B2B)</span>
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit CTA Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#E36E5E] hover:bg-[#D05C4D] text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar y Recibir Cotización en WhatsApp</span>
                </button>
                <p className="text-center text-[11px] text-gray-400 mt-2 font-light">
                  Tus datos se canalizan de inmediato con Melisa para garantizar respuesta en menos de 5 minutos.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
