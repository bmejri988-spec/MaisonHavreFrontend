import { Mail, MapPin, Phone, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#EFEBE2] text-[#0C2B30]">

      <div className="mx-auto max-w-375 px-6 py-16 md:px-10 md:py-20 lg:px-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">

          {/* Brand */}
          <div>
            <Link
              to="/"
              aria-label="Accueil Terre & Toit"
              className="inline-flex items-center gap-3 whitespace-nowrap font-serif text-[clamp(1.2rem,2vw,2.5rem)] text-[#0C2B30]"
            >
              <img
                src="/terre-toit-mark.png"
                alt=""
                aria-hidden="true"
                className="h-10 w-10 shrink-0 md:h-12 md:w-12"
              />
              <span className="whitespace-nowrap leading-none">Terre &amp; Toit</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#5A6A6C]">
              Solution pour Maisons Écologiques et Autonomes
            </p>
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
            © 2026 Terre &amp; Toit. Tous droits réservés.
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