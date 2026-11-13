import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Phone, Calendar, MapPin, Sparkles, ChevronDown } from "lucide-react"
import { SITE } from "../../data/site"

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [eventosDropdownOpen, setEventosDropdownOpen] = useState(false)
  const [mobileEventosOpen, setMobileEventosOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setEventosDropdownOpen(false)
    setMobileEventosOpen(false)
  }, [location])

  const navItems = [
    {
      name: "Eventos",
      children: [
        { name: "Eventos Familiares", path: "/eventos-sociales" },
        { name: "Eventos Corporativos", path: "/eventos-corporativos" },
      ],
    },
    { name: "Salones Sociales", path: "/nosotros-y-espacios" },
    { name: "Restaurante", path: "/restaurante" },
  ]

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false
    return location.pathname.startsWith(path)
  }

  const isEventosActive =
    isActive("/eventos-sociales") || isActive("/eventos-corporativos")

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-[#1E3A2B] text-[#BCD9C7] text-xs py-2 px-4 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E36E5E] animate-pulse"></span>
            <span className="font-light tracking-wide text-white/90">
              🌿 {SITE.distanceReference} (Mocondino, Pasto)
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/80">
            <a 
              href={`https://wa.me/${SITE.phonePrimaryClean}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#BCD9C7] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E36E5E]" />
              <span>WhatsApp: {SITE.phonePrimary}</span>
            </a>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-white/70">
              Restaurante: Dom. y Festivos 12:00 m. a 3:00 p.m.
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white/90 backdrop-blur-sm shadow-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo/logo-isotipo-coral.png"
              alt="Hacienda Escondida Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1E3A2B] leading-none">
                Hacienda Escondida
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest text-[#E36E5E] uppercase font-medium mt-0.5">
                Pasto • Eventos & Restaurante
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setEventosDropdownOpen(true)}
                  onMouseLeave={() => setEventosDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setEventosDropdownOpen((prev) => !prev)}
                    aria-expanded={eventosDropdownOpen}
                    className={`text-sm font-medium transition-colors relative py-1 flex items-center gap-1 cursor-pointer ${
                      isEventosActive
                        ? "text-[#E36E5E] font-semibold"
                        : "text-[#2C302E] hover:text-[#E36E5E]"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        eventosDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                    {isEventosActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E36E5E] rounded-full" />
                    )}
                  </button>

                  {eventosDropdownOpen && (
                    <div className="absolute left-0 top-full pt-2 w-52 z-50">
                      <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setEventosDropdownOpen(false)}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              isActive(subItem.path)
                                ? "bg-[#FDECE9] text-[#E36E5E] font-semibold"
                                : "text-[#2C302E] hover:bg-black/5 hover:text-[#E36E5E]"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive(item.path!)
                      ? "text-[#E36E5E] font-semibold"
                      : "text-[#2C302E] hover:text-[#E36E5E]"
                  }`}
                >
                  {item.name}
                  {isActive(item.path!) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E36E5E] rounded-full" />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/cotizar"
              className="bg-[#E36E5E] hover:bg-[#D05C4D] text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Cotizar Evento</span>
            </Link>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/cotizar"
              className="bg-[#E36E5E] text-white text-xs px-3.5 py-2 rounded-full sm:hidden font-medium"
            >
              Cotizar
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2C302E] hover:text-[#E36E5E] hover:bg-black/5 rounded-lg transition-colors focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Panel */}
          <div className="fixed top-[100px] right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-black/40 px-3">
                Navegación
              </div>
              <div className="flex flex-col space-y-1">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.name} className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => setMobileEventosOpen((prev) => !prev)}
                        aria-expanded={mobileEventosOpen}
                        className={`px-3 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between w-full text-left ${
                          isEventosActive
                            ? "bg-[#FDECE9] text-[#E36E5E] font-semibold"
                            : "text-[#2C302E] hover:bg-black/5"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileEventosOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileEventosOpen && (
                        <div className="flex flex-col pl-4 mt-1 space-y-1">
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                                isActive(subItem.path)
                                  ? "bg-[#FDECE9] text-[#E36E5E] font-semibold"
                                  : "text-[#2C302E] hover:bg-black/5"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.path}
                      to={item.path!}
                      className={`px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive(item.path!)
                          ? "bg-[#FDECE9] text-[#E36E5E] font-semibold"
                          : "text-[#2C302E] hover:bg-black/5"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 space-y-3">
              <Link
                to="/cotizar"
                className="w-full bg-[#E36E5E] text-white py-3 rounded-full text-center font-medium block shadow-sm hover:bg-[#D05C4D]"
              >
                Cotizar mi Evento
              </Link>
              <a
                href={`https://wa.me/${SITE.phonePrimaryClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-[#1E3A2B] text-[#1E3A2B] py-3 rounded-full text-center font-medium block hover:bg-[#1E3A2B] hover:text-white transition-colors"
              >
                Hablar con Melisa por WhatsApp
              </a>
              <p className="text-center text-xs text-[#5E6763] pt-2">
                📍 {SITE.distanceReference}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
