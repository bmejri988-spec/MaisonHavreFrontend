import { Mail, MapPin, Phone, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#EFEBE2] text-[#0C2B30]">

      <div className="mx-auto max-w-375 px-6 py-16 md:px-10 md:py-20 lg:px-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">

          {/* Brand */}
          <div className="w-fit">
            <Link
              to="/"
              aria-label="Accueil Maison Havre"
              className="relative flex w-fit flex-col items-start text-[#0C2B30] lg:pb-2 lg:-translate-x-1 xl:-translate-x-2"
            >
              <span className="flex items-center gap-0.5">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center md:h-14 md:w-14 lg:h-16 lg:w-16">
                  <img
                    src="/android-chrome-192x192.png"
                    alt=""
                    aria-hidden="true"
                    className="h-11 w-11 brightness-0 md:h-13 md:w-13 lg:h-14 lg:w-14"
                  />
                </span>
                <span className="relative z-50 shrink-0 whitespace-nowrap font-serif text-[1.55rem] leading-none tracking-[-0.05em] text-[#0C2B30] md:text-[1.9rem] lg:text-[2.1rem]">
                  Maison Havre
                </span>
              </span>
              <span className="mt-0.5 ml-1 self-start whitespace-nowrap text-[0.56rem] font-semibold uppercase leading-tight tracking-[0.06em] text-[#0C2B30] md:text-[0.62rem] lg:absolute lg:bottom-0 lg:left-3 lg:right-0 lg:ml-0 lg:mt-0 lg:w-auto lg:text-[0.53rem] lg:tracking-[0.02em]">
                Solution pour Maisons Écologiques et Autonomes
              </span>
            </Link>
          </div>

          {/* Explore */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#5A6A6C]">
              Découvrir
            </span>

            <div className="mt-6 flex flex-col gap-3">
              <Link to="/about" className="text-sm text-[#0C2B30]/75 transition-colors duration-300 hover:text-[#0C2B30]">
                À propos
              </Link>

              <Link to="/terrains" className="text-sm text-[#0C2B30]/75 transition-colors duration-300 hover:text-[#0C2B30]">
                Terrains
              </Link>

              <Link to="/chalet-models" className="text-sm text-[#0C2B30]/75 transition-colors duration-300 hover:text-[#0C2B30]">
                Modèles de chalets
              </Link>

              <Link to="/options" className="text-sm text-[#0C2B30]/75 transition-colors duration-300 hover:text-[#0C2B30]">
                Options
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#5A6A6C]">
              Contact
            </span>

            <div className="mt-6 flex flex-col gap-3">
              <p className="flex items-center gap-2 text-sm text-[#0C2B30]/75">
                <UserRound size={16} aria-hidden="true" />
                <span>Ceo: Becem Jallouli</span>
              </p>
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-2 text-sm text-[#0C2B30]/75 transition-colors duration-300 hover:text-[#0C2B30]"
              >
                <Mail size={16} aria-hidden="true" />
                bj@ad.com.tn
              </a>

              <a
                href="tel:+21600000000"
                className="flex items-center gap-2 text-sm text-[#0C2B30]/75 transition-colors duration-300 hover:text-[#0C2B30]"
              >
                <Phone size={16} aria-hidden="true" />
                +216 98 306 360
              </a>

              <span className="flex items-start gap-2 text-sm text-[#5A6A6C]">
                <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  Centre Urbain Nord 1082
                  <br />
                  Tunis, Tunisie
                </span>
              </span>
            </div>
          </div>

        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#0C2B30]/15 pt-6 text-xs text-[#5A6A6C] md:flex-row md:items-center md:justify-between">
          <span>
            © 2026 Maison Havre. Tous droits réservés.
          </span>
          {/* Social Links 
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Instagram
            </a>

            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
          </div>
          */}
        </div>
        

      </div>
    </footer>
  )
}

export default Footer