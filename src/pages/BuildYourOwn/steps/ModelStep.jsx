import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

import { formatPrice, formatSurface } from '../../../data/repository'
import { useConfigurator } from '../../../context/useConfigurator'
import { useCatalog } from '../../../context/useCatalog'

function ModelStep() {
  const { models } = useCatalog()
  const {
    selectedModel,
    setSelectedModel,
  } = useConfigurator()

  return (
    <div>

      <div className="max-w-2xl">

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
          Étape 02
        </span>

        <h1 className="mt-4 font-serif text-5xl leading-[0.95] text-[#1D2923] md:text-6xl">
          Choisissez
          <br />
          <span className="italic">
            l’architecture.
          </span>
        </h1>

        <p className="mt-6 text-sm leading-6 text-[#77766F]">
          Sélectionnez le modèle de chalet qui deviendra
          la base de votre refuge.
        </p>

      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

        {models.map((model) => {

          const selected =
            selectedModel?.id === model.id

          return (
            <motion.button
              key={model.id}
              type="button"
              onClick={() => setSelectedModel(model)}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden text-left ${
                selected
                  ? 'ring-2 ring-[#B49A70] ring-offset-2'
                  : ''
              }`}
            >

              <div className="relative aspect-4/5 overflow-hidden">

                <img
                  src={model.image}
                  alt={model.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

                <div
                  className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full ${
                    selected
                      ? 'bg-[#B49A70] text-[#1D2923]'
                      : 'bg-white text-[#1D2923]'
                  }`}
                >
                  {selected ? (
                    <Check size={16} />
                  ) : (
                    <span className="text-sm">+</span>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                    {model.category}
                  </span>

                  <h2 className="mt-2 font-serif text-5xl">
                    {model.name}
                  </h2>

                  <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4">

                    <span className="text-xs text-white/55">
                      {formatSurface(model)}
                    </span>

                    <span className="text-xs">
                      {formatPrice(model.basePrice)}
                    </span>

                  </div>

                </div>

              </div>

            </motion.button>
          )
        })}

      </div>

    </div>
  )
}

export default ModelStep