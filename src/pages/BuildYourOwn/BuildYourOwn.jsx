import { useEffect, useState } from 'react'
import { ArrowLeft, RotateCcw } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import ConfiguratorProgress
  from './components/ConfiguratorProgress'

import ConfiguratorSummary
  from './components/ConfiguratorSummary'

import ConfiguratorNavigation
  from './components/ConfiguratorNavigation'

import TerrainStep
  from './steps/TerrainStep'

import ModelStep
  from './steps/ModelStep'

import OptionsStep
  from './steps/OptionsStep'

import SummaryStep
  from './steps/SummaryStep'

import { useConfigurator }
  from '../../context/useConfigurator'
import { findTerrainById } from '../../data/repository'
import { useCatalog } from '../../context/useCatalog'

function BuildYourOwn() {

  const [currentStep, setCurrentStep] = useState(1)
  const [searchParams] = useSearchParams()
  const { terrains } = useCatalog()

  const {
    selectedTerrain,
    selectedModel,
    clearConfiguration,
    setSelectedTerrain,
  } = useConfigurator()

  useEffect(() => {
    const terrain = findTerrainById(terrains, searchParams.get('terrain'))

    if (terrain) {
      setSelectedTerrain(terrain.id)
    }
  }, [searchParams, setSelectedTerrain, terrains])

  const canContinue =
    currentStep === 1
      ? Boolean(selectedTerrain)
      : currentStep === 2
        ? Boolean(selectedModel)
        : true

  const nextStep = () => {

    if (!canContinue) {
      return
    }

    setCurrentStep((current) =>
      Math.min(current + 1, 4)
    )

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const previousStep = () => {

    setCurrentStep((current) =>
      Math.max(current - 1, 1)
    )

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const reset = () => {

    clearConfiguration()
    setCurrentStep(1)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const generatePreview = () => {

    /*
      Pour le moment, ceci n’est qu’un aperçu temporaire.

      Plus tard :

      React
        ↓
      Django
        ↓
      API de génération d’images par intelligence artificielle
        ↓
      images générées de votre chalet
    */

    alert(
      'La génération de l’aperçu sera bientôt disponible.'
    )
  }

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#1D2923]">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#DDD8CD]/80 bg-[#F7F5F0]/90 backdrop-blur-xl">

        <div className="mx-auto flex h-18 max-w-[1600px] items-center justify-between px-5 sm:px-6 md:px-10 lg:px-14">

          <Link
            to="/"
            className="font-serif text-2xl tracking-wide"
          >
            MAISON HAVRE
          </Link>

          <div className="flex items-center gap-5">

            <button
              type="button"
              onClick={reset}
              className="hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#77766F] transition-colors hover:text-[#1D2923] md:flex"
            >
              <RotateCcw size={13} />

              Réinitialiser
            </button>

            <Link
              to="/"
              className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#77766F]"
            >
              <ArrowLeft size={13} />

              Quitter
            </Link>

          </div>

        </div>

      </header>

      {/* PROGRESS */}
      <div className="border-b border-[#DDD8CD] bg-white px-6 py-6 md:px-10 lg:px-14">

        <div className="mx-auto max-w-[1600px]">

          <ConfiguratorProgress
            currentStep={currentStep}
          />

        </div>

      </div>
      
      {/* CONTENT */}
      <div className="mx-auto max-w-[1600px] px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20">

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_400px]">

          {/* STEP CONTENT */}
          <div className="min-w-0">

            <AnimatePresence mode="wait">

              <motion.div
                key={currentStep}
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -25,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {currentStep === 1 && (
                  <TerrainStep />
                )}

                {currentStep === 2 && (
                  <ModelStep />
                )}

                {currentStep === 3 && (
                  <OptionsStep />
                )}

                {currentStep === 4 && (
                  <SummaryStep
                    onGeneratePreview={generatePreview}
                  />
                )}

              </motion.div>

            </AnimatePresence>

            {/* NAVIGATION */}

            {currentStep < 4 && (
              <ConfiguratorNavigation
                currentStep={currentStep}
                onPrevious={previousStep}
                onNext={nextStep}
                canContinue={canContinue}
                isLastStep={false}
              />
            )}

            {currentStep === 4 && (
              <ConfiguratorNavigation
                currentStep={currentStep}
                onPrevious={previousStep}
                onNext={nextStep}
                canContinue
                isLastStep
              />
            )}

          </div>

          {/* SUMMARY */}
        <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)]">
            <div className="h-full overflow-y-auto">
                <ConfiguratorSummary />
            </div>
          </div>

        </div>

      </div>

    </main>
  )
}

export default BuildYourOwn