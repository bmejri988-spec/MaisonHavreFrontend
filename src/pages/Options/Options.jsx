import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Container from '../../components/common/Container'
import Reveal from '../../components/common/Reveal'
import OptionCard from '../../components/common/OptionCard'

import { useCatalog } from '../../context/useCatalog'

function Options() {
  const { options } = useCatalog()

  return (
    <main className="bg-[#F7F5F0]">

      <Navbar contained />

      {/* OPTIONS */}
      <section className="bg-[#EFEBE2] py-24 md:py-32">

        <Container>

          <Reveal>
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                  Les options
                </span>
                <h2 style={{ fontFamily: 'serif', fontSize: '2.5rem', fontWeight: 'medium', lineHeight: '0.95', color: '#1D2923' }}>
                  Faites-la vôtre.
                </h2>
              </div>

            </div>
          </Reveal>

          <motion.div
            layout
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {options.map((option, index) => (
              <OptionCard key={option.id} option={option} index={index} />
            ))}
          </motion.div>

        </Container>

      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="py-24 md:py-32">

        <Container>

          <Reveal>

            <div className="text-center">

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                La simplicité comme principe
              </span>

              <h2 className="mx-auto mt-4 max-w-3xl font-serif text-5xl font-medium leading-[0.95] text-[#1D2923] md:text-6xl">
                Votre chalet,
                <br />
                vos décisions.
              </h2>

            </div>

          </Reveal>

          <div className="mt-16 grid gap-0 border-y border-[#DDD8CD] md:grid-cols-3">

            {[
              {
                number: '01',
                title: 'Choisir un modèle',
                text: 'Commencez par l’architecture qui correspond le mieux à votre façon de vivre.',
              },
              {
                number: '02',
                title: 'Ajouter vos options',
                text: 'Choisissez piscines, terrasses, aménagements intérieurs et expériences pour le rendre vôtre.',
              },
              {
                number: '03',
                title: 'Donnez vie à votre vision',
                text: 'Composez votre projet et visualisez bientôt votre chalet avant sa construction.',
              },
            ].map((step) => (

              <div
                key={step.number}
                className="border-b border-[#DDD8CD] p-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-10"
              >

                <span className="text-xs tracking-[0.2em] text-[#B49A70]">
                  {step.number}
                </span>

                <h3 className="mt-10 font-serif text-3xl text-[#1D2923]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#77766F]">
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </Container>

      </section>

      

      <Footer />

    </main>
  )
}

export default Options