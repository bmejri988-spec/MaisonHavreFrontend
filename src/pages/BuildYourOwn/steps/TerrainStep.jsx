import { Check, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

import { formatSurface } from '../../../data/repository'
import { useConfigurator } from '../../../context/useConfigurator'
import { useCatalog } from '../../../context/useCatalog'

function TerrainStep() {
  const { terrains } = useCatalog()
  const {
    selectedTerrain,
    setSelectedTerrain,
  } = useConfigurator()

  return (
    <div>

      <div className="max-w-2xl">

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
          Étape 01
        </span>

        <h1 className="mt-4 font-serif text-5xl leading-[0.95] text-[#1D2923] md:text-6xl">
          Où souhaitez-vous
          <br />
          <span className="italic">
            vous évader ?
          </span>
        </h1>

        <p className="mt-6 text-sm leading-6 text-[#77766F]">
          Choisissez le paysage qui accueillera
          votre second chez-vous.
        </p>

      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

        {terrains.map((terrain) => {

          const selected =
            selectedTerrain?.id === terrain.id

          return (
            <motion.button
              key={terrain.id}
              type="button"
              onClick={() => setSelectedTerrain(terrain)}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden text-left ${
                selected
                  ? 'ring-2 ring-[#B49A70] ring-offset-2'
                  : ''
              }`}
            >

              <div className="relative aspect-4/5 overflow-hidden">

                <img
                  src={terrain.image}
                  alt={terrain.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

                {/* Selected */}
                <div
                  className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full transition-all ${
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

                  <div className="flex items-center gap-2 text-white/55">

                    <MapPin size={12} />

                    <span className="text-[10px] uppercase tracking-[0.18em]">
                      {terrain.region}
                    </span>

                  </div>

                  <h2 className="mt-3 font-serif text-4xl">
                    {terrain.name}
                  </h2>

                  <p className="mt-2 text-xs text-white/60">
                    {formatSurface(terrain)} · {terrain.country}
                  </p>

                </div>

              </div>

            </motion.button>
          )
        })}

      </div>

    </div>
  )
}

export default TerrainStep