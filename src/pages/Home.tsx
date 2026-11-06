import React from "react"
import { Hero } from "../components/sections/Hero"
import { EventoResuelto } from "../components/sections/EventoResuelto"
import { SpacesShowcase } from "../components/sections/SpacesShowcase"
import { ServicesTabs } from "../components/sections/ServicesTabs"
import { PriceEstimator } from "../components/sections/PriceEstimator"
import { Testimonials } from "../components/sections/Testimonials"
import { LocationMap } from "../components/sections/LocationMap"
import { FAQSection } from "../components/sections/FAQSection"
import { QuoteForm } from "../components/sections/QuoteForm"

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <EventoResuelto />
      <SpacesShowcase />
      <ServicesTabs />
      <PriceEstimator />
      <Testimonials />
      <LocationMap />
      <FAQSection />
      <QuoteForm />
    </div>
  )
}
