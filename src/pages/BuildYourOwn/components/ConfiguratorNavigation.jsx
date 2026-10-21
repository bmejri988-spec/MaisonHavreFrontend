import { ArrowLeft, ArrowRight } from 'lucide-react'

function ConfiguratorNavigation({
  currentStep,
  onPrevious,
  onNext,
  canContinue,
  isLastStep,
}) {
  return (
    <div className="mt-10 flex items-center justify-between border-t border-[#DDD8CD] pt-6">

      <button
        type="button"
        onClick={onPrevious}
        disabled={currentStep === 1}
        className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] transition-opacity ${
          currentStep === 1
            ? 'pointer-events-none opacity-20'
            : 'opacity-70 hover:opacity-100'
        }`}
      >
        <ArrowLeft size={15} />

        Retour
      </button>

      {!isLastStep && (
        <button
          type="button"
          onClick={onNext}
          disabled={!canContinue}
          className={`group inline-flex items-center gap-4 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all ${
            canContinue
              ? 'bg-[#1D2923] text-white'
              : 'cursor-not-allowed bg-[#DDD8CD] text-[#99958C]'
          }`}
        >
          Continuer

          <ArrowRight
            size={15}
            className={`transition-transform ${
              canContinue
                ? 'group-hover:translate-x-1'
                : ''
            }`}
          />

        </button>
      )}

    </div>
  )
}

export default ConfiguratorNavigation