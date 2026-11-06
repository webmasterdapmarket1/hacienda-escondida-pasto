import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { WhatsAppFloat } from "./components/layout/WhatsAppFloat"
import { ScrollToTop } from "./components/layout/ScrollToTop"

import { Home } from "./pages/Home"
import { EventosCorporativos } from "./pages/EventosCorporativos"
import { EventosSociales } from "./pages/EventosSociales"
import { Restaurante } from "./pages/Restaurante"
import { NosotrosEspacios } from "./pages/NosotrosEspacios"
import { Cotizar } from "./pages/Cotizar"

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#2C302E]">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventos-corporativos" element={<EventosCorporativos />} />
            <Route path="/eventos-sociales" element={<EventosSociales />} />
            <Route path="/restaurante" element={<Restaurante />} />
            <Route path="/nosotros-y-espacios" element={<NosotrosEspacios />} />
            <Route path="/cotizar" element={<Cotizar />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  )
}

export default App
