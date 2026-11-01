import { Fragment } from 'react'
import { useEffect, useRef, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'ACCEUIL', path: '/' },
  { label: 'TERRAINS', path: '/terrains' },
  { label: 'MODELES', path: '/chalet-models' },
  { label: 'OPTIONS', path: '/options' },
  { label: 'À PROPOS', path: '/about' },
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
        scrolled && !imageBackdrop ? 'bg-[#1D2923]/20' : 'bg-transparent'
      }`}
    >
      <div
        className={`relative mx-auto max-w-375 px-5 transition-all duration-500 md:px-8 lg:px-12 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <nav className="flex items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-0">
              <Link
                to="/"
                aria-label="Accueil Maison Havre"
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center"
              >
                <img
                  src="/favicon-48x48.png"
                  alt=""
                  aria-hidden="true"
                  className={`h-11 w-11 ${
                    contained && !imageBackdrop && !scrolled
                      ? ''
                      : 'brightness-0 invert'
                  }`}
                />
              </Link>
            <div className="flex flex-col items-start">
              <Link
                to="/"
                className={`relative z-50 shrink-0 whitespace-nowrap font-serif text-xl tracking-[0.129m] md:text-[1rem] ${
                  contained && !imageBackdrop && !scrolled
                    ? 'text-[#0C2B30]'
                    : 'text-[#FFF9EC] drop-shadow-[0_1px_3px_rgba(12,43,48,0.8)]'
                }`}
              >
                MAISON HAVRE
              </Link>
              <p
                className={`m-0 text-xs font-semibold leading-tight ${
                  contained && !imageBackdrop && !scrolled
                    ? 'text-[#0C2B30]/60'
                    : 'text-[#FFF9EC]/95 drop-shadow-[0_1px_3px_rgba(12,43,48,0.9)]'
                }`}
              >
                Solution Pour Maisons et Chalets en Bois
              </p>
            </div>
    

          </div>
          

          

          {/* Desktop */}
          <div
            className={`hidden items-center gap-1 rounded-full border p-1 ${
              imageBackdrop ? '' : 'backdrop-blur-md'
            } lg:-translate-x-30 lg:flex ${
              contained && !scrolled && !imageBackdrop
                ? 'border-[#0C2B30]/15 bg-white/45'
                : imageBackdrop
                  ? 'border-white/15 bg-transparent'
                  : 'border-white/15 bg-black/15'
            }`}
          >
            {navLinks.map((link, index) => (
              <Fragment key={link.path}>
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className={`h-4 w-px ${
                      contained && !scrolled && !imageBackdrop
                        ? 'bg-[#0C2B30]/20'
                        : 'bg-white/25'
                    }`}
                  />
                )}
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-semibold tracking-wide transition-colors ${
                    isActive
                      ? 'bg-white text-[#0C2B30]'
                      : contained && !scrolled && !imageBackdrop
                        ? 'text-[#0C2B30]/70 hover:bg-[#0C2B30]/10 hover:text-[#0C2B30]'
                        : 'text-[#FFF9EC] drop-shadow-[0_1px_3px_rgba(12,43,48,0.8)] hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </NavLink>
              </Fragment>
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