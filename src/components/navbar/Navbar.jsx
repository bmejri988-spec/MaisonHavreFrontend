import { useEffect, useRef, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'Terrains', path: '/terrains' },
  { label: 'Modèles', path: '/chalet-models' },
  { label: 'Options', path: '/options' },
  { label: 'À propos', path: '/about' },
]

function Navbar({ contained = false, imageBackdrop = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollY = useRef(0)
  const positionClass = contained && !hasScrolled ? 'absolute' : 'fixed'

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - lastScrollY.current

      setHasScrolled(currentScrollY > 0)

      if (currentScrollY <= 0) {
        setScrolled(false)
        setIsHidden(false)
      } else if (scrollDelta > 6 && !isOpen) {
        if (currentScrollY > 60) {
          setScrolled(true)
        }
        setIsHidden(true)
      } else if (scrollDelta < -2) {
        setScrolled(false)
        setIsHidden(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isOpen])

  return (
    <header
      className={`${positionClass} left-0 top-0 z-50 w-full transition-all duration-500 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled
          ? 'bg-[#1D2923]/95 shadow-lg backdrop-blur-md'
          : imageBackdrop
            ? 'bg-[#1D2923]/35 backdrop-blur-md'
            : 'bg-transparent'
      }`}
    >
      <div
        className={`mx-auto max-w-375 px-5 transition-all duration-500 md:px-8 lg:px-12 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <nav className="flex items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-4">
              <Link
                to="/"
                aria-label="Accueil Maison Havre"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center"
              >
                <img
                  src="/favicon-32x32.png"
                  alt=""
                  aria-hidden="true"
                  className={`h-8 w-8 ${
                    contained && !imageBackdrop && !scrolled
                      ? ''
                      : 'brightness-0 invert'
                  }`}
                />
              </Link>
            <Link
              to="/"
              className={`relative z-50 shrink-0 whitespace-nowrap font-serif text-xl tracking-[0.129m] md:text-[1rem] ${
                contained && !imageBackdrop && !scrolled
                  ? 'text-[#0C2B30]'
                  : 'text-white'
              }`}
            >
            MAISON HAVRE
            </Link>
            <span
              className={`hidden h-5 w-px sm:block ${
                contained && !imageBackdrop && !scrolled
                  ? 'bg-[#0C2B30]/25'
                  : 'bg-white/25'
              }`}
            />
            <span
              className={`hidden shrink-0 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.19em] sm:block ${
                contained && !imageBackdrop && !scrolled
                  ? 'text-[#0C2B30]/60'
                  : 'text-white/55'
              }`}
            >
              Chalets d’exception
            </span>
          </div>

          {/* Desktop */}
          <div
            className={`hidden items-center gap-1 rounded-full border p-1 backdrop-blur-md lg:flex ${
              contained && !scrolled && !imageBackdrop
                ? 'border-[#0C2B30]/15 bg-white/45'
                : 'border-white/15 bg-black/15'
            }`}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `whitespace-nowrap rounded-full px-3 py-2 text-[11px] font-semibold tracking-wide transition-colors ${
                  isActive
                    ? 'bg-white text-[#0C2B30]'
                    : contained && !scrolled && !imageBackdrop
                      ? 'text-[#0C2B30]/70 hover:bg-[#0C2B30]/10 hover:text-[#0C2B30]'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block"> 
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative z-50 flex h-11 w-11 items-center justify-center lg:hidden ${
              contained && !imageBackdrop && !scrolled && !isOpen
                ? 'text-[#0C2B30]'
                : 'text-white'
            }`}
            aria-label="Ouvrir le menu"
          >
            {isOpen ? (
              <X size={26} strokeWidth={1.5} />
            ) : (
              <Menu size={26} strokeWidth={1.5} />
            )}
          </button>

        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#1D2923] transition-all duration-500 lg:hidden ${
          isOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0'
        }`}
      >
        <div className="flex h-full flex-col px-6 pt-32">

          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 py-5 font-serif text-4xl text-white"
              >
                <span className="mr-4 font-sans text-sm text-white/30">
                  0{index + 1}
                </span>

                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/build-your-own"
            onClick={() => setIsOpen(false)}
            className="mt-10 inline-flex w-fit items-center gap-3 bg-white px-6 py-4 text-sm font-semibold text-[#1D2923]"
          >
            Composer votre chalet
            <ArrowUpRight size={17} />
          </Link>

        </div>
      </div>
    </header>
  )
}

export default Navbar