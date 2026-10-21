import { ArrowUpRight, BedDouble, Maximize2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { formatSurface } from '../../data/repository'
import { localizedCategory } from '../../data/localization'

function ChaletModelCard({ model, index = 0 }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to="/chalet-models"
        className="group block"
      >
        {/* Image */}
        <div className="relative aspect-4/5 overflow-hidden bg-[#EFEBE2]">

          <img
            src={model.image}
            alt={model.name}
            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/5" />

          {/* Category */}
          <div className="absolute left-5 top-5">
            <span className="bg-white/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1D2923] backdrop-blur-sm">
              {localizedCategory(model.category)}
            </span>
          </div>

          {/* Arrow */}
          <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1D2923] transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight size={18} strokeWidth={1.6} />
          </div>

          {/* Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-7">

            <p className="max-w-sm text-xs leading-5 text-white/65">
              {model.subtitle}
            </p>

            <h3 className="mt-3 font-serif text-5xl leading-none">
              {model.name}
            </h3>

            <div className="mt-6 flex items-center gap-5 border-t border-white/20 pt-4 text-xs text-white/75">

              <span className="flex items-center gap-2">
                <Maximize2 size={13} />
                {formatSurface(model)}
              </span>

              <span className="flex items-center gap-2">
                <BedDouble size={13} />
                {model.bedrooms} chambres
              </span>

            </div>

          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ChaletModelCard