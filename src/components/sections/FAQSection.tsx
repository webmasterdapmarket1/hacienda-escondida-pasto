import React, { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { FAQS_DATA } from "../../data/faqs"

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="py-20 bg-[#FAF9F5] border-b border-black/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#E36E5E] bg-[#FDECE9] px-3.5 py-1.5 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Resolviendo tus Inquietudes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3A2B] tracking-tight mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm sm:text-base text-[#5E6763] font-light">
            Transparencia total sobre distancias, clima, salones y condiciones comerciales.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-black/5 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#1E3A2B] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 text-[#1E3A2B] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#FDECE9] text-[#E36E5E]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#5E6763] font-light leading-relaxed border-t border-gray-50 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
