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
      className={`group relative w-full overflow-hidden text-left ${
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
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden">

        <img
          src={option.image}
          alt={option.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

        {/* Popular */}
        {option.popular && (
          <span className="absolute left-4 top-4 bg-[#B49A70] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#1D2923]">
            Populaire
          </span>
        )}

        {/* Selection */}
        <motion.div
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full ${
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

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">

          <h3 className="font-serif text-3xl leading-none">
            {localizedName(option)}
          </h3>

          <p className="mt-2 max-w-sm text-xs leading-5 text-white/65">
            {localizedDescription(option)}
          </p>

          <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-3">

            <span className="text-[10px] uppercase tracking-[0.15em] text-white/55">
              {selected               ? 'Ajoutée au chalet' : 'Ajouter au chalet'}
            </span>

            <span className="text-xs font-medium">
              {formatPrice(option.price, '+')}
            </span>

          </div>

        </div>

      </div>
    </motion.button>
  )
}

export default OptionCard