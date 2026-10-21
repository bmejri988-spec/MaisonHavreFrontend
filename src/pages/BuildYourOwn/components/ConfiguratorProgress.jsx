import { Check } from 'lucide-react'

const steps = [
  {
    id: 1,
    label: 'Terrain',
  },
  {
    id: 2,
    label: 'Modèle',
  },
  {
    id: 3,
    label: 'Options',
  },
  {
    id: 4,
    label: 'Récapitulatif',
  },
]

function ConfiguratorProgress({ currentStep }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex min-w-125 items-center">

        {steps.map((step, index) => {
          const completed = currentStep > step.id
          const active = currentStep === step.id

          return (
            <div
              key={step.id}
              className="flex flex-1 items-center"
            >

              <div className="flex items-center gap-3">

                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs transition-all duration-300 ${
                    completed
                      ? 'border-[#1D2923] bg-[#1D2923] text-white'
                      : active
                        ? 'border-[#B49A70] bg-[#B49A70] text-[#1D2923] shadow-[0_0_0_5px_rgba(180,154,112,0.12)]'
                        : 'border-[#D8D2C6] text-[#99958C]'
                  }`}
                >
                  {completed ? (
                    <Check size={14} />
                  ) : (
                    `0${step.id}`
                  )}
                </div>

                <span
                  className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                    active || completed
                      ? 'text-[#1D2923]'
                      : 'text-[#99958C]'
                  }`}
                >
                  {step.label}
                </span>

              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`mx-4 h-px flex-1 transition-colors duration-500 ${
                    completed
                      ? 'bg-[#1D2923]'
                      : 'bg-[#D8D2C6]'
                  }`}
                />
              )}

            </div>
          )
        })}

      </div>
    </div>
  )
}

export default ConfiguratorProgress