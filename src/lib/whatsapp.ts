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
    "Hola, solicito informacion para un evento en Hacienda Escondida:",
    `Nombre: ${payload.name}`,
    `Telefono: ${payload.phone}`,
    payload.email ? `Email: ${payload.email}` : "",
    `Tipo de evento: ${payload.eventType}`,
    `Fecha: ${payload.date || "Por definir"}`,
    `Invitados: ${payload.guests}`,
    `Menu de interes: ${payload.menuInterest}`,
    payload.invoiceRequired ? "Factura electronica: Si" : "",
    payload.notes ? `Observaciones: ${payload.notes}` : "",
  ].filter(Boolean)

  const text = encodeURIComponent(parts.join("\n"))
  return `https://wa.me/${SITE.phonePrimaryClean}?text=${text}`
}

export function buildRestaurantWhatsAppUrl(name: string, guests: number, date: string, time: string): string {
  const parts = [
    "Hola, quiero reservar una mesa en el restaurante de Hacienda Escondida:",
    `Nombre: ${name}`,
    `Personas: ${guests}`,
    `Fecha: ${date}`,
    `Hora: ${time}`,
  ]
  return `https://wa.me/${SITE.phonePrimaryClean}?text=${encodeURIComponent(parts.join("\n"))}`
}

export function buildVisitWhatsAppUrl(): string {
  const message = "Hola, me gustaria agendar una visita guiada para conocer Hacienda Escondida."
  return `https://wa.me/${SITE.phonePrimaryClean}?text=${encodeURIComponent(message)}`
}
