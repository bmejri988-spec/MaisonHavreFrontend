import { motion } from 'framer-motion'
import Container from '../../components/common/Container'

const steps = [
  {
    number: '01',
    title: 'Choisissez votre lieu',
    description:
      'Explorez des terrains d’exception et trouvez l’environnement qui vous correspond.',
  },
  {
    number: '02',
    title: 'Choisissez votre chalet',
    description:
      'Sélectionnez l’architecture, la surface et l’agencement qui correspondent à votre façon de vivre.',
  },
  {
    number: '03',
    title: 'Personnalisez votre projet',
    description:
      'Ajoutez piscine, terrasse, cheminée et autres détails pour créer votre refuge idéal.',
  },
  {
    number: '04',
    title: 'Projetez-vous',
    description:
      'Visualisez votre futur chalet avant de donner vie à votre projet.',
  },
]

function HowItWorks() {
  return (
    <section className="bg-[#1D2923] py-28 text-white md:py-36">
      <Container>

        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
            L’expérience
          </span>

          <h2 className="mt-4 font-serif text-5xl font-medium leading-[0.95] md:text-6xl">
            De la première idée
            <br />
            jusqu’à votre lieu de vie.
          </h2>
        </div>

        <div className="mt-20 grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="relative border-b border-white/10 py-10 md:border-r md:px-8 lg:min-h-75"
            >
              <span className="text-xs tracking-[0.2em] text-white/40">
                {step.number}
              </span>
              <div className="mt-4 h-px w-8 bg-[#B49A70]" />

              <h3 className="mt-12 font-serif text-3xl">
                {step.title}
              </h3>

              <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default HowItWorks