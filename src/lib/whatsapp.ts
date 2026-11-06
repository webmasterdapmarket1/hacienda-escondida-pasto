import { SITE } from "../data/site"

export interface QuotePayload {
  name: string
  phone: string
  email?: string
  eventType: string
  date: string
  guests: number
  menuInterest: string
  invoiceRequired?: boolean
  notes?: string
}

export function buildQuoteWhatsAppUrl(payload: QuotePayload): string {
  const parts = [
    `*Solicitud de Cotización Web - Hacienda Escondida Pasto*`,
    `----------------------------------------`,
    `👤 *Nombre:* ${payload.name}`,
    `📱 *WhatsApp:* ${payload.phone}`,
    payload.email ? `✉️ *Email:* ${payload.email}` : "",
    `🎉 *Tipo de evento:* ${payload.eventType}`,
    `📅 *Fecha estimada:* ${payload.date || "Por definir"}`,
    `👥 *Número de asistentes:* ${payload.guests} personas`,
    `🍽️ *Opción gastronómica:* ${payload.menuInterest}`,
    payload.invoiceRequired ? `📄 *Requiere factura electrónica:* Sí` : "",
    payload.notes ? `📝 *Observaciones:* ${payload.notes}` : "",
    `----------------------------------------`,
    `Hola, soy ${payload.name}. Acabo de solicitar una cotización para un evento de ${payload.guests} personas el día ${payload.date || "próximamente"}.`,
  ].filter(Boolean)

  const text = encodeURIComponent(parts.join("\n"))
  return `https://wa.me/${SITE.phonePrimaryClean}?text=${text}`
}

export function buildRestaurantWhatsAppUrl(name: string, guests: number, date: string, time: string): string {
  const message = `Hola Melisa, quiero reservar una mesa en el Restaurante Campestre de Hacienda Escondida:\n👤 Nombre: ${name}\n👥 Personas: ${guests}\n📅 Fecha: ${date}\n⏰ Hora estimada: ${time}`
  return `https://wa.me/${SITE.phonePrimaryClean}?text=${encodeURIComponent(message)}`
}

export function buildVisitWhatsAppUrl(): string {
  const message = `Hola Jacobo y Melisa, quiero agendar una visita guiada para conocer las instalaciones de Hacienda Escondida Pasto.`
  return `https://wa.me/${SITE.phonePrimaryClean}?text=${encodeURIComponent(message)}`
}
