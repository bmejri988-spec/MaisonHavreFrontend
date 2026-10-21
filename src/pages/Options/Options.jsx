import { ArrowDown, ArrowUpRight } from 'lucide-react'
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

      {/* HERO */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#1D2923]">

        <img
          src="https://jfoprtlfgdwaslsqizut.supabase.co/storage/v1/object/sign/images/hero-options.jpg?token=eyJraWQiOiIyNmMxNTNhMy03ZWFhLTQ2YjktYmUwMS1hY2ZjYjllOTYwZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaGVyby1vcHRpb25zLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTI1ODEzNTIsImV4cCI6MTkxODcyNTM1Mn0.RNA-F2l1TEIl8QRE_8px_PCUarjIaDXRZvUQ9JB-atU"
          alt="Intérieur contemporain aux inspirations tunisiennes"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

        <Container className="relative z-10 pb-20 md:pb-28">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl"
          >

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Les détails
            </span>

            <h1 className="mt-5 font-serif text-7xl font-medium leading-[0.83] text-white md:text-8xl lg:text-[110px]">
              Composez
              <br />
              <span className="italic">le vôtre.</span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-6 text-white/70 md:text-base">
              D’un matin paisible au bord de la piscine à une soirée au coin
              du feu, choisissez les détails qui feront de votre chalet un
              refuge véritablement personnel.
            </p>

          </motion.div>

        </Container>

        <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-white/60 md:flex">
          <span className="text-[10px] uppercase tracking-[0.25em]">
            Découvrir les options
          </span>

          <ArrowDown size={15} />
        </div>

      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32">

        <Container>

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <Reveal>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                  Personnalisation
                </span>

                <h2 className="mt-4 max-w-lg font-serif text-5xl font-medium leading-[0.95] text-[#1D2923] md:text-6xl">
                  L’architecture
                  <br />
                  ne fait que commencer.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="max-w-2xl text-base leading-8 text-[#77766F] md:text-lg">
                Commencez par l’un de nos modèles de chalet, puis façonnez
                l’expérience selon votre manière de vivre.
                Ajoutez les équipements qui comptent pour vous, en toute
                liberté.
              </p>
            </Reveal>

          </div>

        </Container>

      </section>

      {/* OPTIONS */}
      <section className="bg-[#EFEBE2] py-24 md:py-32">

        <Container>

          <Reveal>
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                  Les options
                </span>
                <h2 className="mt-3 font-serif text-5xl font-medium leading-none text-[#1D2923] md:text-6xl">
                  Faites-la vôtre.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-[#77766F]">
                Découvrez les équipements disponibles pour personnaliser votre chalet.
              </p>
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

      {/* CTA */}
      <section className="bg-[#B49A70] py-28 md:py-40">

        <Container>

          <div className="mx-auto max-w-4xl text-center">

            <Reveal>

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1D2923]/60">
                Étape suivante
              </span>

              <h2 className="mt-5 font-serif text-6xl font-medium leading-[0.88] text-[#1D2923] md:text-8xl">
                Ne choisissez pas seulement
                <br />
                <span className="italic">
                  votre chalet.
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-xl text-sm leading-6 text-[#1D2923]/65 md:text-base">
                Concevez-le selon votre manière de vivre.
                Choisissez votre terrain, votre modèle et vos détails.
              </p>

              <Link
                to="/build-your-own"
                className="group mt-10 inline-flex items-center gap-4 bg-[#1D2923] px-7 py-4 text-sm font-semibold text-white"
              >
                Composer votre chalet

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#1D2923] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </Link>

            </Reveal>

          </div>

        </Container>

      </section>

      <Footer />

    </main>
  )
}

export default Options