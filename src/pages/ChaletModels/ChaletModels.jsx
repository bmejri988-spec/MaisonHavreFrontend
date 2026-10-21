import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Container from '../../components/common/Container'
import Reveal from '../../components/common/Reveal'
import ChaletModelCard from '../../components/common/ChaletModelCard'
import { useCatalog } from '../../context/useCatalog'

function ChaletModels() {
  const { models } = useCatalog()
  return (
    <main className="bg-[#F7F5F0]">

      <Navbar contained />

      {/* HERO */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#1D2923]">

        <img
          src="https://jfoprtlfgdwaslsqizut.supabase.co/storage/v1/object/sign/images/hero-models.png?token=eyJraWQiOiIyNmMxNTNhMy03ZWFhLTQ2YjktYmUwMS1hY2ZjYjllOTYwZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaGVyby1tb2RlbHMucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MjU4MTMyMCwiZXhwIjoxOTE4NzI1MzIwfQ.j29mWKUZnOpU5ZF1s7Li-zXCcT--OMn31YDNiOZIXfM"
          alt="Chalet contemporain"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

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
              La collection
            </span>

            <h1 className="mt-5 font-serif text-7xl font-medium leading-[0.83] text-white md:text-8xl lg:text-[110px]">
              Architecture
              <br />
              <span className="italic">pour vivre.</span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-6 text-white/70 md:text-base">
              Découvrez des modèles de chalets pensés pour s’adapter aux
              paysages, aux styles de vie et aux envies d’évasion de chacun.
            </p>
          </motion.div>

        </Container>

        <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-white/60 md:flex">
          <span className="text-[10px] uppercase tracking-[0.25em]">
            Explorer les modèles
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
                  Notre approche
                </span>

                <h2 className="mt-4 max-w-lg font-serif text-5xl font-medium leading-[0.95] text-[#1D2923] md:text-6xl">
                  Pensés pour appartenir
                  <br />
                  au paysage.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="max-w-2xl text-base leading-8 text-[#77766F] md:text-lg">
                Nos chalets ne sont pas des objets isolés. Chaque modèle
                dialogue avec son environnement pour faire entrer la lumière,
                les vues, les matières et la nature dans le quotidien.
              </p>

              <div className="mt-10 h-px w-full bg-[#DDD8CD]" />

              <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4 text-xs uppercase tracking-[0.18em] text-[#77766F]">
                <span>Matières naturelles</span>
                <span>Plans réfléchis</span>
                <span>Configurations flexibles</span>
              </div>
            </Reveal>

          </div>

        </Container>

      </section>

      {/* COLLECTION */}
      <section className="bg-[#EFEBE2] py-24 md:py-32">

        <Container>

          <Reveal>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                  Les modèles
                </span>

                <h2 className="mt-4 font-serif text-5xl font-medium leading-[0.95] text-[#1D2923] md:text-6xl">
                  Choisissez votre
                  <br />
                  point de départ.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-[#77766F]">
                Chaque modèle peut être adapté avec différentes options
                et finitions. Ils constituent la base de votre
                propre refuge.
              </p>

            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {models.map((model, index) => (
              <ChaletModelCard
                key={model.id}
                model={model}
                index={index}
              />
            ))}

          </div>

        </Container>

      </section>


      {/* CTA */}
      <section className="bg-[#1D2923] py-28 text-white md:py-40">

        <Container>

          <div className="mx-auto max-w-4xl text-center">

            <Reveal>

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B49A70]">
                Votre choix
              </span>

              <h2 className="mt-5 font-serif text-6xl font-medium leading-[0.88] md:text-8xl">
                Trouvez votre modèle.
                <br />
                <span className="italic text-white/60">
                  Faites-le vôtre.
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-xl text-sm leading-6 text-white/55 md:text-base">
                Sélectionnez un modèle et personnalisez-le avec les détails
                qui rendront votre chalet unique.
              </p>

              <Link
                to="/build-your-own"
                className="group mt-10 inline-flex items-center gap-4 bg-white px-7 py-4 text-sm font-semibold text-[#1D2923]"
              >
                Commencer la configuration

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1D2923] text-white transition-transform duration-300 group-hover:rotate-45">
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

export default ChaletModels