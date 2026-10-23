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

      {/* Main content */}
      <section className="py-24 md:py-32">

        <Container>

          {/* Intro */}
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                Nos emplacements
              </span>
              <h2 style={{ fontFamily: 'serif', fontSize: '2.5rem', fontWeight: 'medium', lineHeight: '0.95', color: '#1D2923' }}>
                  Choisissez l’environnement qui vous ressemble.
                </h2>
            </div>

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