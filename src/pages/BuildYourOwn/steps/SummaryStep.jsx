import {
  ArrowRight,
  Check,
  MapPin,
} from 'lucide-react'

import { useConfigurator } from '../../../context/useConfigurator'
import { formatPrice, formatSurface } from '../../../data/repository'

function SummaryStep({ onGeneratePreview }) {
  const {
    selectedTerrain,
    selectedModel,
    selectedOptions,
    totalPrice,
  } = useConfigurator()

  return (
    <div>

      <div className="max-w-2xl">

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
          Étape 04
        </span>

        <h1 className="mt-4 font-serif text-5xl leading-[0.95] text-[#1D2923] md:text-6xl">
          Votre chalet,
          <br />
          <span className="italic">
            prend forme.
          </span>
        </h1>

        <p className="mt-6 text-sm leading-6 text-[#77766F]">
          Vérifiez vos choix avant de créer votre
          aperçu visuel.
        </p>

      </div>

      <div className="mt-12 overflow-hidden border border-[#DDD8CD] bg-white">

        {/* Terrain */}
        <div className="border-b border-[#DDD8CD] p-7 md:p-9">

          <div className="flex items-start justify-between gap-6">

            <div>

              <span className="text-[10px] uppercase tracking-[0.2em] text-[#99958C]">
                Terrain
              </span>

              <h2 className="mt-3 font-serif text-3xl text-[#1D2923]">
                {selectedTerrain?.name}
              </h2>

              <div className="mt-2 flex items-center gap-2 text-xs text-[#77766F]">

                <MapPin size={13} />

                {selectedTerrain?.region}

              </div>

            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1D2923] text-white">
              <Check size={14} />
            </div>

          </div>

        </div>

        {/* Model */}
        <div className="grid gap-8 border-b border-[#DDD8CD] p-7 md:grid-cols-[220px_1fr] md:p-9">

          <div className="aspect-4/3 overflow-hidden">

            <img
              src={selectedModel?.image}
              alt={selectedModel?.name}
              className="h-full w-full object-cover"
            />

          </div>

          <div>

            <span className="text-[10px] uppercase tracking-[0.2em] text-[#99958C]">
              Modèle de chalet
            </span>

            <h2 className="mt-3 font-serif text-4xl text-[#1D2923]">
              {selectedModel?.name}
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-[#77766F]">
              {selectedModel?.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-xs text-[#77766F]">

              <span>
                {selectedModel && formatSurface(selectedModel)}
              </span>

              <span>
                {selectedModel?.bedrooms} chambres
              </span>

              <span>
                {selectedModel?.bathrooms} salles de bains
              </span>

            </div>

          </div>

        </div>

        {/* Options */}
        <div className="border-b border-[#DDD8CD] p-7 md:p-9">

          <div className="flex items-center justify-between">

            <div>

              <span className="text-[10px] uppercase tracking-[0.2em] text-[#99958C]">
                Options sélectionnées
              </span>

              <h2 className="mt-3 font-serif text-3xl text-[#1D2923]">
                Les détails qui vous ressemblent
              </h2>

            </div>

            <span className="text-xs text-[#99958C]">
              {selectedOptions.length} selected
            </span>

          </div>

          {selectedOptions.length > 0 ? (

            <div className="mt-8 divide-y divide-[#DDD8CD]">

              {selectedOptions.map((option) => (

                <div
                  key={option.id}
                  className="flex items-center justify-between gap-6 py-4 first:pt-0 last:pb-0"
                >

                  <div>

                    <p className="text-sm text-[#1D2923]">
                      {option.name}
                    </p>

                    <p className="mt-1 text-xs text-[#99958C]">
                      {option.shortDescription}
                    </p>

                  </div>

                  <span className="text-sm text-[#77766F]">
                    {formatPrice(option.price, '+')}
                  </span>

                </div>

              ))}

            </div>

          ) : (

            <p className="mt-8 text-sm text-[#99958C]">
              Aucune option supplémentaire sélectionnée.
            </p>

          )}

        </div>

        {/* Price */}
        <div className="bg-[#1D2923] p-7 text-white md:p-9">

          <div className="grid gap-8 md:grid-cols-2">

            <div>

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Investissement estimé
              </span>

              <p className="mt-3 font-serif text-5xl">
                {totalPrice.toLocaleString()}
                <span className="ml-2 font-sans text-sm text-white/45">
                  TND
                </span>
              </p>

              <p className="mt-3 max-w-md text-xs leading-5 text-white/40">
                Cette première estimation repose sur votre
                configuration actuelle. Le prix définitif dépendra
                du terrain, des finitions, des études techniques
                et des spécifications finales.
              </p>

            </div>

            <div className="flex items-end justify-start md:justify-end">

              <button
                type="button"
                onClick={onGeneratePreview}
                className="group inline-flex items-center gap-4 bg-white px-7 py-4 text-sm font-semibold text-[#1D2923]"
              >
                Créer l’aperçu visuel

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B49A70] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={15} />
                </span>

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default SummaryStep