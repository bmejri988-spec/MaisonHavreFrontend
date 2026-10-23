import { ArrowUpRight, BedDouble, Maximize2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { formatSurface } from '../../data/repository'
import { localizedCategory } from '../../data/localization'
import ImageLightbox from './ImageLightbox'

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
      <div className="aurea-catalog-card aurea-catalog-card--grid group">
        <ImageLightbox
          src={model.image}
          alt={model.name}
          className="aurea-catalog-image"
        >
          <img
            src={model.image}
            alt={model.name}
            className="transition-transform duration-700 group-hover:scale-105"
          />

          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1D2923] backdrop-blur-sm">
              {localizedCategory(model.category)}
          </span>
          <span className="aurea-catalog-arrow transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight size={18} strokeWidth={1.6} />
          </span>
        </ImageLightbox>

        <Link to="/chalet-models" className="aurea-catalog-copy block">
          <h4>{model.name}</h4>
          <p>{model.subtitle}</p>

          <div className="mt-3 flex items-center gap-5 border-t border-[#DDD8CD] pt-3 text-xs text-[#5A6A6C]">
            <span className="flex items-center gap-2">
              <Maximize2 size={13} />
              {formatSurface(model)}
            </span>

            <span className="flex items-center gap-2">
              <BedDouble size={13} />
              {model.bedrooms} chambres
            </span>

          </div>
        </Link>
      </div>
    </motion.div>
  )
}

export default ChaletModelCard