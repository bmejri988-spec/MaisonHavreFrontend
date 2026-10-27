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
      {/* COLLECTION */}
      <section className="bg-[#EFEBE2] py-24 md:py-32">

        <Container>

          <Reveal>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                  Les modèles
                </span>

                <h2 style={{ fontFamily: 'serif', fontSize: '2.5rem', fontWeight: 'medium', lineHeight: '0.95', color: '#1D2923' }}>
                  Choisissez votre point de départ.
                </h2>
              </div>

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


      

      <Footer />

    </main>
  )
}

export default ChaletModels