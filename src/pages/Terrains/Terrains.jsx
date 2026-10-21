import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

import Container from '../../components/common/Container'
import TerrainCard from '../../components/common/TerrainCard'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import { useCatalog } from '../../context/useCatalog'

function Terrains() {
  const { terrains } = useCatalog()

  return (
    <main className="bg-[#F7F5F0]">

      <Navbar contained />

      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#1D2923]">

        <img
          src="https://jfoprtlfgdwaslsqizut.supabase.co/storage/v1/object/sign/images/hero-terrains.jpg?token=eyJraWQiOiIyNmMxNTNhMy03ZWFhLTQ2YjktYmUwMS1hY2ZjYjllOTYwZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaGVyby10ZXJyYWlucy5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkyNTgxMzc3LCJleHAiOjE5MTg3MjUzNzd9.q6EpFy7sdz9IE975XIPIzP4xfGyfVnCS_pt8TRqVztM"
          alt="Montagnes tunisiennes"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

        <Container className="relative z-10 pb-20 md:pb-28">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Les lieux
            </span>

            <h1 className="mt-5 font-serif text-7xl font-medium leading-[0.85] tracking-tight text-white md:text-8xl lg:text-[110px]">
              Trouvez votre
              <br />
              <span className="italic">adresse idéale.</span>
            </h1>

            <p className="mt-8 max-w-lg text-sm leading-6 text-white/70 md:text-base">
              Découvrez des emplacements soigneusement sélectionnés, où la
              nature, l’architecture et la liberté d’une résidence secondaire
              s’accordent naturellement.
            </p>
          </motion.div>

        </Container>

        <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-white/60 md:flex">
          <span className="text-[10px] uppercase tracking-[0.25em]">
            Découvrir
          </span>

          <ArrowDown size={15} />
        </div>

      </section>

      {/* Main content */}
      <section className="py-24 md:py-32">

        <Container>

          {/* Intro */}
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                Nos emplacements
              </span>

              <h2 className="mt-4 font-serif text-5xl font-medium leading-[0.95] text-[#1D2923] md:text-6xl">
                Choisissez l’environnement
                <br />
                qui vous ressemble.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#77766F]">
              Que vous rêviez de vous réveiller face à la mer ou de vous
              ressourcer dans les montagnes, explorez les lieux disponibles
              pour votre futur chalet.
            </p>

          </div>

          {/* Results */}
          <motion.div
            layout
            className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
          >
            {terrains.map((terrain, index) => (
              <TerrainCard
                key={terrain.id}
                terrain={terrain}
                index={index}
              />
            ))}
          </motion.div>

          {/* Empty state */}
          {terrains.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-serif text-3xl text-[#1D2923]">
                De nouveaux lieux arrivent bientôt.
              </p>

              <p className="mt-3 text-sm text-[#77766F]">
                Nous recherchons en permanence de nouvelles adresses d’exception.
              </p>
            </div>
          )}

        </Container>

      </section>

      <Footer />

    </main>
  )
}

export default Terrains