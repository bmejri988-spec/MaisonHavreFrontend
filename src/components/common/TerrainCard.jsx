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
        className="aurea-catalog-card aurea-catalog-card--grid group"
      >
        <div className="aurea-catalog-image">

          <img
            src={terrain.image}
            alt={terrain.name}
            className="transition-transform duration-700 group-hover:scale-105"
          />

          <span className="aurea-catalog-count">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="aurea-catalog-arrow transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight size={18} strokeWidth={1.6} />
          </span>
        </div>

        <div className="aurea-catalog-copy">
          <h4>{terrain.name}</h4>
          <p className="flex items-center gap-1.5">
            <MapPin size={12} strokeWidth={1.5} />
            {localizedRegion(terrain.region)}
          </p>

          <div className="mt-3 flex items-center justify-between border-t border-[#DDD8CD] pt-3 text-xs text-[#5A6A6C]">
            <span>{formatSurface(terrain)}</span>

            <span className="font-medium text-[#1D2923]">
              {formatPrice(terrain.basePrice, 'À partir de ')}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default TerrainCard