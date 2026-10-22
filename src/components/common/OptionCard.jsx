import { ArrowUpRight, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { formatPrice } from '../../data/repository'
import { localizedDescription, localizedName } from '../../data/localization'

function OptionCard({
  option,
  selected = false,
  onSelect,
}) {
  return (
    <motion.button
      layout
      type="button"
      onClick={() => onSelect?.(option)}
      className={`aurea-catalog-card aurea-catalog-card--grid group relative w-full text-left ${
        selected
          ? 'ring-2 ring-[#B49A70] ring-offset-2 ring-offset-[#EFEBE2]'
          : ''
      }`}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.985 }}
      animate={{
        scale: selected ? 1.01 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="aurea-catalog-image">

        <img
          src={option.image}
          alt={option.name}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {option.popular && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1D2923] backdrop-blur-sm">
            Populaire
          </span>
        )}

        <motion.div
          className={`aurea-catalog-arrow ${
            selected
              ? 'bg-[#B49A70] text-[#1D2923]'
              : 'bg-white text-[#1D2923]'
          }`}
          animate={{
            scale: selected ? 1 : 1,
            rotate: selected ? 0 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {selected ? (
              <motion.div
                key="check"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  rotate: -20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <Check size={17} />
              </motion.div>
            ) : (
              <motion.div
                key="arrow"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
              >
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="aurea-catalog-copy">
        <h4>{localizedName(option)}</h4>
        <p>{localizedDescription(option)}</p>

        <div className="mt-3 flex items-center justify-between border-t border-[#DDD8CD] pt-3">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#5A6A6C]">
            {selected ? 'Ajoutée au chalet' : 'Ajouter au chalet'}
          </span>
          <span className="text-xs font-medium text-[#1D2923]">
            {formatPrice(option.price, '+')}
          </span>
        </div>
      </div>
    </motion.button>
  )
}

export default OptionCard