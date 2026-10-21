import { ArrowUpRight, MapPin, X } from 'lucide-react'
import { useConfigurator } from '../../../context/useConfigurator'
import { formatPrice, formatSurface } from '../../../data/repository'

function ConfiguratorSummary() {
  const {
    selectedTerrain,
    selectedModel,
    selectedOptions,
    modelPrice,
    totalPrice,
    toggleOption,
  } = useConfigurator()

  return (
    <aside className="bg-[#1D2923] p-6 text-white md:p-8">

      <div className="flex items-center justify-between">

        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/45">
            Votre configuration
          </span>

          <h2 className="mt-2 font-serif text-3xl">
            Votre chalet
          </h2>
        </div>

        <ArrowUpRight size={18} className="text-[#B49A70]" />

      </div>

      {/* Terrain */}
      <div className="mt-10 border-t border-white/10 pt-6">

        <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
          Terrain
        </span>

        {selectedTerrain ? (
          <div className="mt-3 flex items-center gap-3">

            <MapPin
              size={15}
              className="text-[#B49A70]"
            />

            <div>
              <p className="text-sm">
                {selectedTerrain.name}
              </p>

              <p className="mt-1 text-xs text-white/45">
                {formatSurface(selectedTerrain)}
              </p>
            </div>

          </div>
        ) : (
          <p className="mt-3 text-sm text-white/35">
            Non sélectionné
          </p>
        )}

      </div>

      {/* Model */}
      <div className="mt-7 border-t border-white/10 pt-6">

        <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
          Modèle de chalet
        </span>

        {selectedModel ? (
          <div className="mt-3 flex items-center justify-between">

            <div>
              <p className="font-serif text-2xl">
                {selectedModel.name}
              </p>

              <p className="mt-1 text-xs text-white/45">
                {formatSurface(selectedModel)}
              </p>
            </div>

            <p className="text-sm">
              {modelPrice.toLocaleString()} TND
            </p>

          </div>
        ) : (
          <p className="mt-3 text-sm text-white/35">
            Non sélectionné
          </p>
        )}

      </div>

      {/* Options */}
      <div className="mt-7 border-t border-white/10 pt-6">

        <div className="flex items-center justify-between">

          <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
            Options
          </span>

          <span className="text-xs text-white/40">
            {selectedOptions.length}
          </span>

        </div>

        {selectedOptions.length > 0 ? (
          <div className="mt-4 space-y-3">

            {selectedOptions.map((option) => (
              <div
                key={option.id}
                className="flex items-center justify-between gap-3"
              >

                <div className="flex min-w-0 items-center gap-3">

                  <button
                    type="button"
                    onClick={() => toggleOption(option)}
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/50 transition-colors hover:border-white/40 hover:text-white"
                  >
                    <X size={11} />
                  </button>

                  <span className="truncate text-sm text-white/75">
                    {option.name}
                  </span>

                </div>

                <span className="shrink-0 text-xs text-white/50">
                  {formatPrice(option.price, '+')}
                </span>

              </div>
            ))}

          </div>
        ) : (
          <p className="mt-3 text-sm text-white/35">
            Aucune option sélectionnée
          </p>
        )}

      </div>

      {/* Total */}
      <div className="mt-8 border-t border-white/10 pt-6">

        <div className="flex items-end justify-between">

          <div>
            <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
              Total estimé
            </span>

            <p className="mt-2 font-serif text-3xl">
              {totalPrice.toLocaleString()}
              <span className="ml-2 font-sans text-xs text-white/45">
                TND
              </span>
            </p>
          </div>

        </div>

        <p className="mt-3 text-[10px] leading-4 text-white/30">
          Estimation fondée sur vos choix actuels.
          Le prix définitif sera confirmé après consultation.
        </p>

      </div>

    </aside>
  )
}

export default ConfiguratorSummary