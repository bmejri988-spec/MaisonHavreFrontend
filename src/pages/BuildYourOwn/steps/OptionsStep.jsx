import { useConfigurator } from '../../../context/useConfigurator'
import { useCatalog } from '../../../context/useCatalog'
import OptionCard from '../../../components/common/OptionCard'
import Reveal from '../../../components/common/Reveal'

function OptionsStep() {
  const { options } = useCatalog()
  const {
    selectedOptions,
    toggleOption,
  } = useConfigurator()

  return (
    <div>

      <div className="max-w-2xl">

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
          Étape 03
        </span>

        <h1 className="mt-4 font-serif text-5xl leading-[0.95] text-[#1D2923] md:text-6xl">
          Ajoutez les détails
          <br />
          <span className="italic">
            qui comptent.
          </span>
        </h1>

        <p className="mt-6 text-sm leading-6 text-[#77766F]">
          Sélectionnez les équipements et les expériences
          que vous souhaitez ajouter à votre chalet.
        </p>

      </div>

      <div className="mt-12 space-y-20">

        <section>
          <Reveal>
            <div className="mb-8 flex items-end justify-between gap-6 border-b border-[#DDD8CD] pb-5">
              <h2 className="font-serif text-4xl text-[#1D2923]">
                Toutes les options
              </h2>
              <span className="hidden text-xs text-[#99958C] sm:block">
                {options.length} disponibles
              </span>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {options.map((option) => {
              const selected = selectedOptions.some((item) => item.id === option.id)

              return (
                <OptionCard
                  key={option.id}
                  option={option}
                  selected={selected}
                  onSelect={toggleOption}
                />
              )
            })}
          </div>
        </section>

      </div>

    </div>
  )
}

export default OptionsStep