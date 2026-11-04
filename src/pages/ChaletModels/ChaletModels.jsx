import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Container from '../../components/common/Container'
import MobileCatalogCarousel from '../../components/common/MobileCatalogCarousel'
import Reveal from '../../components/common/Reveal'
import ChaletModelCard from '../../components/common/ChaletModelCard'
import { useCatalog } from '../../context/useCatalog'

function ChaletModels() {
  const { models } = useCatalog()
  return (
    <main className="bg-[#E6DECC]">

      <Navbar contained imageBackdrop />
      {/* COLLECTION */}
      <section className="bg-[#E6DECC] py-24 md:py-32">

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

          <MobileCatalogCarousel
            label="Catalogue des modèles de chalet"
            className="mt-16 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {models.map((model, index) => (
              <ChaletModelCard
                key={model.id}
                model={model}
                index={index}
              />
            ))}
          </MobileCatalogCarousel>

        </Container>

      </section>



      <Footer />

    </main>
  )
}

export default ChaletModels