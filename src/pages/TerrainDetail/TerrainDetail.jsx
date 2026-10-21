import { useMemo } from 'react'
import { ArrowLeft, ArrowUpRight, MapPin } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Container from '../../components/common/Container'
import ImageGallery from '../../components/common/ImageGallery'
import Reveal from '../../components/common/Reveal'
import { formatPrice, formatSurface, findTerrainById } from '../../data/repository'
import { useCatalog } from '../../context/useCatalog'

function TerrainDetail() {
  const { terrains } = useCatalog()
  const { id } = useParams()

  const terrain = useMemo(() => findTerrainById(terrains, id), [terrains, id])

  if (!terrain) {
    return (
      <main className="min-h-screen bg-[#F7F5F0]">
        <Navbar contained />

        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-serif text-6xl text-[#1D2923]">
              Terrain not found
            </h1>

            <Link
              to="/terrains"
              className="mt-8 inline-flex items-center gap-2 bg-[#1D2923] px-6 py-4 text-sm font-semibold text-white"
            >
              <ArrowLeft size={16} />
              Retour aux terrains
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-[#F7F5F0]">
      <Navbar contained />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">

        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          src={terrain.image}
          alt={terrain.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

        <Container className="relative z-10 flex h-full items-end pb-16 md:pb-24">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full"
          >

            <Link
              to="/terrains"
              className="mb-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} />
              Tous les terrains
            </Link>

            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

              <div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <MapPin size={15} />
                  {terrain.region}
                </div>

                <h1 className="mt-4 font-serif text-7xl font-medium leading-[0.82] text-white md:text-8xl lg:text-[110px]">
                  {terrain.name}
                </h1>
              </div>

              <div className="max-w-sm">
                <p className="text-sm leading-6 text-white/70 md:text-base">
                  {terrain.description}
                </p>
              </div>

            </div>

          </motion.div>

        </Container>
      </section>

      {/* INFORMATION */}
      <section className="py-24 md:py-32">
        <Container>

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Intro */}
            <Reveal>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                  L’emplacement
                </span>

                <h2 className="mt-4 max-w-md font-serif text-5xl font-medium leading-[0.95] text-[#1D2923] md:text-6xl">
                  A place worth
                  <br />
                  coming home to.
                </h2>
              </div>
            </Reveal>

            {/* Text */}
            <Reveal delay={0.15}>
              <p className="max-w-2xl text-base leading-8 text-[#77766F] md:text-lg">
                {terrain.description}
              </p>

              <div className="mt-12 grid grid-cols-2 border-y border-[#DDD8CD] md:grid-cols-4">

                <div className="border-r border-[#DDD8CD] py-6 pr-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#99958C]">
                    Surface
                  </span>

                  <p className="mt-3 font-serif text-3xl text-[#1D2923]">
                    {formatSurface(terrain)}
                  </p>
                </div>

                <div className="border-r border-[#DDD8CD] px-5 py-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#99958C]">
                    Location
                  </span>

                  <p className="mt-3 font-serif text-3xl text-[#1D2923]">
                    {terrain.country}
                  </p>
                </div>

                <div className="py-6 pl-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#99958C]">
                    À partir de
                  </span>

                  <p className="mt-3 font-serif text-2xl text-[#1D2923]">
                    {formatPrice(terrain.basePrice, 'À partir de ')}
                  </p>
                </div>

              </div>
            </Reveal>

          </div>

        </Container>
      </section>

      {/* FEATURES */}
      <section className="bg-[#1D2923] py-24 text-white md:py-28">
        <Container>

          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                  Pourquoi ici
                </span>

                <h2 className="mt-4 font-serif text-5xl leading-[0.95] md:text-6xl">
                  Pensé autour de
                  <br />
                  le paysage.
                </h2>
              </div>

              <div className="grid gap-0 border-t border-white/10 md:grid-cols-3 md:border-t-0">

                {terrain.features.map((feature, index) => (
                  <div
                    key={feature}
                    className="border-b border-white/10 py-8 md:border-l md:border-b-0 md:px-8"
                  >
                    <span className="text-xs tracking-[0.2em] text-white/30">
                      0{index + 1}
                    </span>

                    <h3 className="mt-10 font-serif text-3xl">
                      {feature}
                    </h3>
                  </div>
                ))}

              </div>

            </div>
          </Reveal>

        </Container>
      </section>

      {/* GALLERY */}
      <section className="py-24 md:py-32">
        <Container>

          <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                  Explorer
                </span>

                <h2 className="mt-4 font-serif text-5xl text-[#1D2923] md:text-6xl">
                  Découvrez les alentours.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-6 text-[#77766F]">
                Chaque terrain est choisi pour son caractère, son
                environnement et le potentiel qu’il offre.
              </p>
            </div>
          </Reveal>

          <ImageGallery images={terrain.gallery} />

        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#B49A70] py-28 md:py-40">

        <Container>

          <div className="mx-auto max-w-4xl text-center">

            <Reveal>

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1D2923]/60">
                Votre prochaine étape
              </span>

              <h2 className="mt-5 font-serif text-6xl font-medium leading-[0.88] text-[#1D2923] md:text-8xl">
                Imaginez maintenant
                <br />
                <span className="italic">votre chalet ici.</span>
              </h2>

              <p className="mx-auto mt-8 max-w-xl text-sm leading-6 text-[#1D2923]/65 md:text-base">
                Choisissez votre architecture, sélectionnez vos options,
                et commencez à créer la résidence secondaire dont vous rêvez.
              </p>

              <Link
                to={`/build-your-own?terrain=${terrain.id}`}
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

export default TerrainDetail