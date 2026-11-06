import React from "react"
import { Star, Quote, CheckCircle2 } from "lucide-react"
import { REVIEWS_DATA } from "../../data/reviews"
import { SITE } from "../../data/site"

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#1E3A2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs text-[#BCD9C7] font-medium mb-4">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>{SITE.googleRating} de 5.0 en Google Business Profile ({SITE.googleReviewCount} reseñas)</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Lo que Dicen Quienes Ya Celebraron con Nosotros
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-light">
            Testimonios verificados de empresas, novias y familias nariñenses.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:bg-white/15 transition-all"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-white/20"
                      }`}
                    />
                  ))}
                  <span className="text-[11px] text-[#BCD9C7] ml-2 font-medium">{rev.source}</span>
                </div>

                <Quote className="w-6 h-6 text-[#E36E5E] mb-3 opacity-60" />

                <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-xs text-white">{rev.author}</div>
                  <div className="text-[11px] text-[#BCD9C7] font-light">{rev.role}</div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
