import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { formatPrice, formatSurface } from '../../data/repository'
import { localizedRegion } from '../../data/localization'

function TerrainCard({ terrain, index = 0 }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to="/terrains"
        className="group block"
      >
        {/* Image */}
        <div className="relative aspect-4/5 overflow-hidden bg-[#EFEBE2]">

          <img
            src={terrain.image}
            alt={terrain.name}
            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-black/5" />

          {/* Arrow */}
          <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1D2923] transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight size={18} strokeWidth={1.6} />
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-7">

            <div className="flex items-center gap-1.5 text-xs text-white/70">
              <MapPin size={13} strokeWidth={1.5} />
              {localizedRegion(terrain.region)}
            </div>

            <h3 className="mt-2 font-serif text-4xl leading-none md:text-5xl">
              {terrain.name}
            </h3>

            <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4">
              <span className="text-xs text-white/70">
                {formatSurface(terrain)}
              </span>

              <span className="text-xs font-medium">
                {formatPrice(terrain.basePrice, 'À partir de ')}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default TerrainCard