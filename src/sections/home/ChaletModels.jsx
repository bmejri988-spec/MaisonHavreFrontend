import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../../components/common/Container'
import { formatSurface } from '../../data/repository'
import { useCatalog } from '../../context/useCatalog'



function ChaletModels() {
  const { models } = useCatalog()
  return (
    <section className="bg-[#F7F5F0] py-28 md:py-36">
      <Container>

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Intro */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
              La collection
            </span>

            <h2 className="mt-4 max-w-md font-serif text-5xl font-medium leading-[0.95] text-[#1D2923] md:text-6xl">
              Une architecture ancrée dans son lieu.
            </h2>

            <p className="mt-7 max-w-md text-base leading-7 text-[#77766F]">
              Chaque chalet est conçu pour dialoguer avec son environnement,
              en réunissant matériaux naturels, espaces généreux et vues dégagées.
            </p>

            <a
              href="/chalet-models"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#1D2923]"
            >
              Découvrir la collection
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Models */}
          <div className="space-y-6">
            {models.slice(0, 2).map((model, index) => (
              <motion.a
                href="/chalet-models"
                key={model.name}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                className="group grid overflow-hidden border border-[#DDD8CD] bg-white transition-shadow duration-500 hover:shadow-xl md:grid-cols-2"
              >
                <div className="h-70 overflow-hidden md:h-90">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-between p-7 md:p-9">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#B49A70]">
                      {formatSurface(model)}
                    </span>

                    <h3 className="mt-3 font-serif text-4xl text-[#1D2923]">
                      {model.name}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-[#77766F]">
                      {model.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.15em] text-[#77766F]">
                      Voir le modèle
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1D2923] text-white transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}

export default ChaletModels