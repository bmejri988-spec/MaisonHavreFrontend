import Container from '../../components/common/Container'
import SectionTitle from '../../components/common/SectionTitle'
import Reveal from '../../components/common/Reveal'
function Concept() {
  return (
    <section className="bg-[#F7F5F0] py-28 md:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-end">

          <SectionTitle
            eyebrow="Le concept"
            title="Un second chez-vous, pensé autour de vous."
            description="Un chalet doit être plus qu’un bien immobilier : un lieu qui vous ressemble complètement."
          />

          <Reveal>
            <p className="max-w-lg text-lg leading-8 text-[#77766F]">
              Du terrain sous vos pieds à l’architecture qui vous entoure,
              chaque élément est choisi avec soin pour créer un lieu où
              vous évader, vous retrouver et simplement profiter de la vie.
            </p>

            <div className="mt-10 h-px w-full bg-[#DDD8CD]" />

            <div className="mt-6 flex justify-between text-xs uppercase tracking-[0.2em] text-[#77766F]">
              <span>Terrain</span>
              <span>Architecture</span>
              <span>Expérience</span>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  )
}

export default Concept