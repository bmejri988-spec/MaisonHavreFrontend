import { Fragment } from 'react'
import { useEffect, useRef, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'ACCUEIL', path: '/' },
  { label: 'TERRAINS', path: '/terrains' },
  { label: 'MODELES', path: '/chalet-models' },
  { label: 'OPTIONS', path: '/options' },
  { label: 'À PROPOS', path: '/about' },
]

function Navbar({
  contained = false,
  imageBackdrop = false,
  responsiveHome = false,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollY = useRef(0)
  const positionClass = contained && !hasScrolled ? 'absolute' : 'fixed'
  const desktopNavClass = responsiveHome
    ? 'min-[1360px]:flex'
    : 'min-[1200px]:flex'
  const compactNavClass = responsiveHome
    ? 'min-[1360px]:hidden'
    : 'min-[1200px]:hidden'

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

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <header
      className={`site-navbar ${responsiveHome ? 'site-navbar--responsive-home' : ''} ${isOpen ? 'is-menu-open' : ''} ${positionClass} left-0 top-0 z-50 w-full transition-all duration-500 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled && !imageBackdrop ? 'bg-[#1D2923]/20' : 'bg-transparent'
      }`}
      data-image-backdrop={imageBackdrop}
    >
      <div
        className={`site-navbar__inner relative mx-auto max-w-375 px-5 transition-all duration-500 md:px-8 lg:px-12 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
      >
        <nav className="site-navbar__row grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-6">

          {/* Logo */}
          <Link
            to="/"
            aria-label="Accueil Terre & Toit"
            className="relative flex w-fit flex-col items-start lg:pb-2 lg:-translate-x-1 xl:-translate-x-2"
          >
            <span className="flex items-center gap-0.5">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center md:h-14 md:w-14 lg:h-16 lg:w-16">
              <img
                src="/terre-toit-mark.png"
                alt=""
                aria-hidden="true"
                className={`h-11 w-11 md:h-13 md:w-13 lg:h-14 lg:w-14 ${
                  contained && !imageBackdrop && !scrolled
                    ? ''
                    : 'brightness-0 invert'
                }`}
              />
              </span>
              <span
                className={`relative z-50 shrink-0 whitespace-nowrap font-serif text-[1.55rem] leading-none tracking-[-0.05em] md:text-[1.9rem] lg:text-[2.35rem] ${
                contained && !imageBackdrop && !scrolled
                  ? 'text-[#0C2B30]'
                  : 'text-[#FFF9EC] drop-shadow-[0_1px_3px_rgba(12,43,48,0.8)]'
                }`}
              >
                Terre &amp; Toit
              </span>
            </span>
            <span
              className={`mt-0.5 ml-1 self-start whitespace-nowrap text-[0.56rem] font-semibold uppercase leading-tight tracking-[0.06em] md:text-[0.62rem] lg:absolute lg:bottom-0 lg:left-3 lg:right-0 lg:ml-0 lg:mt-0 lg:w-auto lg:text-[0.53rem] lg:tracking-[0.02em] ${
                contained && !imageBackdrop && !scrolled
                ? 'text-[#0C2B30]/60'
                : 'text-[#FFF9EC]/95 drop-shadow-[0_1px_3px_rgba(12,43,48,0.9)]'
              }`}
            >
              Solution pour Maisons Écologiques et Autonomes
            </span>
          </Link>


          {/* Desktop */}
          <div
            className={`hidden items-center gap-1 rounded-full border p-1 ${desktopNavClass} ${
              imageBackdrop ? '' : 'backdrop-blur-md'
            } ${
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

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`mobile-menu-toggle relative z-50 col-start-3 flex h-11 w-11 items-center justify-center ${compactNavClass} ${
              contained && !imageBackdrop && !scrolled && !isOpen
                ? 'text-[#0C2B30]'
                : 'text-white'
            }`}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
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
        id="mobile-navigation"
        className={`mobile-nav-overlay fixed inset-0 z-40 transition-all duration-500 ${compactNavClass} ${
          isOpen ? 'is-open visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
      >
        <div
          className="mobile-nav-sheet flex flex-col"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mobile-nav-heading">
            <div className="mobile-nav-brand">
              <img src="/terre-toit-mark.png" alt="" aria-hidden="true" />
              <span>Terre &amp; Toit</span>
            </div>
            <span>Explorer</span>
          </div>
          <div className="mobile-nav-links flex flex-col">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `mobile-nav-link border-b border-white/10 py-5 font-serif text-4xl text-white ${
                    isActive ? 'is-active' : ''
                  }`
                }
              >
                <span className="mr-4 font-sans text-sm text-white/30">
                  0{index + 1}
                </span>
                {link.label}
              </NavLink>
            ))}
          </div>
          <Link
            to="/build-your-own"
            onClick={() => setIsOpen(false)}
            className="mobile-nav-cta mt-10 inline-flex w-fit items-center gap-3 bg-white px-6 py-4 text-sm font-semibold text-[#1D2923]"
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