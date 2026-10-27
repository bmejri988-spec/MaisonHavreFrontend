import { Check } from 'lucide-react'
import { useState } from 'react'  
import Container from '../../components/common/Container'
import Reveal from '../../components/common/Reveal'
import videoSource from '../../../video1.mp4'
import videoSource2 from '../../../video2.mp4'

const heroImage =
  'https://jfoprtlfgdwaslsqizut.supabase.co/storage/v1/object/public/images/acceuil.jpg'

const highlights = [
  'Solution complète : terrain + maison',
  'Projet sur mesure : besoin + budget',
  'À moins d’une heure de Tunis',
  'Maisons autonomes',
  'Maisons écologiques',
]

const offerHighlights = [
  'Emplacements stratégiques',
  'Solution clé en main',
  'Maisons écologiques',
]

const productHighlights = [
  'Maisons écologiques',
  'Autonomes',
  'Confortables',
]

const expertiseHighlights = [
  'Compétences métier',
  '30 ans d’expérience',
  'Étude personnalisée',
  'Suivi de chantier',
]

const equipmentItems = [
  { number: '01', title: 'Choix et installations des piscines ' },
  {
    number: '02',
    title: 'Alimentation en stockage de l\'électricité par la technologie de photovoltaïque',
  },
  {
    number: '03',
    title: 'Alimentation en stockage de l\'eau par des réservoirs adaptés',
  },
  { number: '04', title: 'Sécurité et contrôle a distance' },
]

function FeatureList({ items, className = '' }) {
  return (
    <ul className={`aurea-pdf-features ${className}`.trim()}>
      {items.map((item) => (
        <li key={item}>
          <span>
            <Check size={12} strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function ReadMore({ children, initialLength = 180 }) {
  const [expanded, setExpanded] = useState(false)
  const text = String(children)
  const needsToggle = text.length > initialLength
  const visibleText =
    expanded || !needsToggle ? text : `${text.slice(0, initialLength).trimEnd()}…`

  return (
    <div className="aurea-pdf-readmore">
      <p>{visibleText}</p>
      {needsToggle && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
        >
          {expanded ? 'Lire moins' : 'Lire la suite'}
        </button>
      )}
    </div>
  )
}

function VideoCard({ src }) {
  return (
    <div>
      <video controls playsInline preload="metadata" src={src}>
        Votre navigateur ne prend pas en charge la lecture vidéo.
      </video>
    </div>
  )
}

function PdfHome() {

  return (
    <div className="aurea-pdf-home">
      {/* 1. L’accueil */}
      <section id="accueil" className="aurea-pdf-hero">
        <Container>
          <Reveal className="aurea-pdf-hero-frame">
            <img src={heroImage} alt="Chalet Maison Havre dans un paysage tunisien" />
            <div className="aurea-pdf-hero-content">
              <div className="aurea-pdf-hero-heading">
                <h1>
                  <span>Havre de paix,</span>
                  <span>devenez propriétaire</span>
                </h1>
              </div>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.5rem', marginTop: '1rem' }}>
                Solution pour maisons et chalets en bois,
                <span className="aurea-pdf-hero-description-line">
                  Écologiques, autonomes en eau et en électricité
                </span>
              </p>
            </div>
          </Reveal>
          <Reveal>
            <FeatureList items={highlights} className="aurea-pdf-features--hero" />
          </Reveal>
        </Container>
      </section>

      {/* 2. Notre offre — 2.1 Notre solution */}
      <section id="notre-offre" className="aurea-pdf-section is-paper">
        <Container>
          <h2>Notre Offre</h2>
          <div>
            <Reveal>
             
              <h3>Du choix du terrain jusqu’à la maison finie, clé en main.</h3>
            </Reveal>
          </div>
          <div>
            <Reveal className="aurea-pdf-media">
              <VideoCard src={videoSource} />
            </Reveal>

            <Reveal delay={0.1}>
              <span className="aurea-pdf-kicker">L’offre, sur mesure</span>
              <ReadMore initialLength={210}>
                {`Avec Maison Havre, bénéficiez d'une prise en charge complète. Composez votre projet en trois étapes simples :

                  1. Sélectionnez l’emplacement de votre future maison parmi une sélection de terrains rigoureusement validés pour leur accès et leur potentiel.
                  2. Personnalisez votre modèle en bois à partir de notre catalogue conçu avec nos fabricants partenaires.
                  3. Ajoutez vos finitions et équipements selon vos besoins : piscine, installations solaires, ameublement et aménagement paysager.

                  Nous nous occupons du reste : négociations, démarches administratives et juridiques, suivi de chantier, jusqu’à la remise des clés.`
                }
              </ReadMore>
            </Reveal>
          </div>
          <FeatureList items={offerHighlights} className="aurea-pdf-features--hero" />
        </Container>
      </section>

      {/* 2.2 Notre produit */}
      <section id="notre-produit" className="aurea-pdf-section is-sand">
        <Container>
          <h2>Notre produit</h2>
          <Reveal className="aurea-pdf-feature-title">
          </Reveal>
          <Reveal className="aurea-pdf-feature-hero aurea-pdf-feature-hero--original">
            <img
              src="https://jfoprtlfgdwaslsqizut.supabase.co/storage/v1/object/public/images/produit.png"
              alt="Chalet en bois Maison Havre"
            />
       
          </Reveal>
          <Reveal delay={0.1} className="aurea-pdf-feature-copy">
            <ReadMore initialLength={220}>
              Nous proposons des chalets en bois implantés
              sur des sites d’exception : vue panoramique sur
              la mer, nichés sur les hauteurs ou immergés en
              pleine nature, toujours à moins d’une heure de
              Tunis.
              Écologiques, confortables et totalement
              autonomes, nos logements sont équipés de
              panneaux photovoltaïques avec stockage
              d'énergie et de réservoirs/bâches de
              récupération d'eau. Libéré des contraintes de la
              STEG et de la SONEDE, vous ne subissez plus
              les coupures d’été : votre havre de paix
              fonctionne en toute indépendance, où qu’il soit.
            </ReadMore>
            <FeatureList items={productHighlights} />
          </Reveal>
        </Container>
      </section>

      {/* 2.3 Solution de bout en bout */}
      <section id="solution-bout-en-bout" className="aurea-pdf-section is-paper">
        <Container>
          <div className="aurea-pdf-solution aurea-pdf-solution--end">
            <h2>Notre solution de bout en bout</h2>
            <Reveal>
              <h3>Un accompagnement de la conception à la réalisation.</h3>
            </Reveal>
            <Reveal delay={0.1} className="aurea-pdf-solution-end-video">
              <VideoCard src={videoSource2} label="Découvrez notre solution" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. Notre expertise */}
      <section
        id="notre-expertise"
        className="aurea-pdf-section is-night aurea-pdf-section--expertise"
      >
        <div className="aurea-pdf-expertise-background" aria-hidden="true">
          <img
            src="https://jfoprtlfgdwaslsqizut.supabase.co/storage/v1/object/public/images/planning.jpg"
            alt=""
          />
        </div>
        <Container>
          <h2>Notre expertise</h2>
          <Reveal
            delay={0.1}
            className="aurea-pdf-feature-copy aurea-pdf-feature-copy--expertise"
          >
            <h3>Conseil, étude, offre, réalisation, suivi</h3>
            <ReadMore initialLength={190}>
              Ce projet, c’est 30 ans d’expérience en gestion de projet,
              l’exigence d’un ingénieur et la passion sincère d’un homme pour
              la nature et le tourisme local. Maison Havre n’est pas une
              promesse abstraite — c’est une méthode éprouvée, au service
              d’un rêve très concret.
            </ReadMore>
            <FeatureList items={expertiseHighlights} />
          </Reveal>
        </Container>
      </section>

      {/* 6. Offre finitions et équipements */}
      <section className="aurea-pdf-section is-paper">
        <Container>
          <div className="aurea-pdf-process-grid aurea-pdf-process-grid--equipment">
            <h2>Finitions et équipements</h2>
            <Reveal>
              <h3>Choisissez le standing et qui vous ressemble et composez les équipements qui vous conviennent.</h3>
            </Reveal>
            <div className="aurea-pdf-process-list">
              {equipmentItems.map((item, index) => (
                <Reveal key={item.number} delay={index * 0.08}>
                  <div className="aurea-pdf-process-row">
                    <span>{item.number}</span>
                    <h3>{item.title}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

    </div>
  )
}

export default PdfHome
