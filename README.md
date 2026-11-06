# Hacienda Escondida Pasto — Mockup Web Oficial

Mockup interactivo y navegable del sitio web oficial de **Hacienda Escondida Pasto**, desarrollado como propuesta visual para el cliente previa a su posterior implementación en WordPress + Elementor.

## 🌿 Identidad y Concepto
- **Propuesta de valor:** *"La hacienda campestre elegante a minutos de Pasto (7 a 9 minutos desde el Único Outlet), donde tu evento se entrega resuelto"*.
- **Paleta de marca:**
  - Coral Primario: `#E36E5E`
  - Verde Sabio (Naturaleza): `#BCD9C7`
  - Verde Bosque (Estructura/Footer): `#1E3A2B`
  - Fondo Arena: `#FAF9F5`
  - Texto Carbón: `#2C302E`
- **Tipografías:**
  - Titulares: *Cormorant Garamond* (Fallback oficial de *Carmila Regular*)
  - Textos: *Open Sans Light (300/400)*

## 🚀 Stack Técnico
- **Framework:** React 18 + TypeScript + Vite
- **Estilos:** Tailwind CSS v4
- **Iconografía:** Lucide React
- **Navegación:** React Router v6
- **Hosting / Deploy:** Vercel (con `vercel.json` rewrites)

## 📁 Arquitectura de Rutas (Sitemap)
- `/` — Inicio (Hero, Propuesta de valor "Evento Resuelto", Salones, Experiencias, Calculadora estimativa, Testimonios Google 4.2★, Ubicación y Cotizador)
- `/eventos-corporativos` — Fin de año, novenas e integraciones B2B (factura electrónica, parqueadero de buses, buffet)
- `/eventos-sociales` — Bodas 2026-2027, XV años y grados (prueba de menú, Plan B antilluvia cubierto, proveedores libres)
- `/restaurante` — Servicio dominical y festivos (12:00 m. a 3:00 p.m.), carta tradicional nariñense completa y reserva de mesa
- `/nosotros-y-espacios` — Historia, anfitrión Jacobo Arciniegas, fichas técnicas de Salón Principal (200 pax) y Salón Auxiliar (45 pax)
- `/cotizar` — Formulario calificador inteligente conectado con WhatsApp

## 🛠️ Comandos de Desarrollo
```bash
# Instalar dependencias
npm install

# Iniciar servidor local
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```
