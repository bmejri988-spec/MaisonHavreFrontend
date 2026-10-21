import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../../components/common/Container'
import { useCatalog } from '../../context/useCatalog'

function FeaturedTerrains() {
  const { terrains } = useCatalog()
  return (
    <section className="bg-[#EFEBE2] py-28 md:py-36">
      <Container>

        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
              À découvrir
            </span>

            <h2 className="mt-4 max-w-xl font-serif text-5xl font-medium leading-[0.95] text-[#1D2923] md:text-6xl">
              Trouvez votre lieu.
            </h2>
          </div>

          <a
            href="/terrains"
            className="group flex w-fit items-center gap-3 text-sm font-semibold text-[#1D2923]"
          >
            Voir tous les terrains

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B49A70] transition-all duration-300 group-hover:bg-[#B49A70] group-hover:text-white">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {terrains.slice(0, 3).map((terrain, index) => (
            <motion.a
              href="/terrains"
              key={terrain.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="group relative block h-125 overflow-hidden md:h-140"
            >
              <img
                src={terrain.image}
                alt={terrain.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent transition-opacity duration-500 group-hover:from-black/80" />

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <h3 className="mt-2 font-serif text-4xl">
                  {terrain.name}
                </h3>

                <p className="mt-1 text-sm text-white/70">
                  {terrain.region}
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/0 transition-all duration-500 group-hover:text-white/80">
                  Découvrir le terrain

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default FeaturedTerrains