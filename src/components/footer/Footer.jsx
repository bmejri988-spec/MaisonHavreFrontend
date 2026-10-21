import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#151D19] text-white">

      <div className="mx-auto max-w-375 px-6 py-16 md:px-10 md:py-20 lg:px-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-serif text-4xl"
            >
              MAISON HAVRE
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
              Des lieux d’exception et une architecture attentive.
              Un second chez-vous pensé autour de vous.
            </p>
          </div>

          {/* Explore */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/35">
              Découvrir
            </span>

            <div className="mt-6 flex flex-col gap-3">
              <Link to="/about" className="text-sm text-white/65 transition-colors duration-300 hover:text-white">
                À propos
              </Link>

              <Link to="/terrains" className="text-sm text-white/65 transition-colors duration-300 hover:text-white">
                Terrains
              </Link>

              <Link to="/chalet-models" className="text-sm text-white/65 transition-colors duration-300 hover:text-white">
                Modèles de chalets
              </Link>

              <Link to="/options" className="text-sm text-white/65 transition-colors duration-300 hover:text-white">
                Options
              </Link>

              <Link to="/build-your-own" className="text-sm text-white/65 transition-colors duration-300 hover:text-white">
                Composer votre chalet
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/35">
              Contact
            </span>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:hello@example.com"
                className="text-sm text-white/65 transition-colors duration-300 hover:text-white"
              >
                hello@example.com
              </a>

              <a
                href="tel:+21600000000"
                className="text-sm text-white/65 transition-colors duration-300 hover:text-white"
              >
                +216 00 000 000
              </a>

              <span className="text-sm text-white/45">
                Tunis, Tunisie
              </span>
            </div>
          </div>

        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
          <span>
            © 2026 MAISON HAVRE. Tous droits réservés.
          </span>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Instagram
            </a>

            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer