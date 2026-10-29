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
  'Projet sur mesure : besoins + budget',
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

const productImageHighlights = [
  'Cadre unique',
  'Écologique',
  'Autonomes',
  'À moins de 1h de Tunis',
]

const expertiseHighlights = [
  'Compétences métier',
  '30 ans d’expérience',
  'Étude personnalisée',
  'Suivi de chantier',
]

const equipmentItems = [
  {
    number: '01',
    title: 'Choix et installation des piscines',
  },
  {
    number: '02',
    title:
      'Production et stockage de l’électricité grâce à la technologie photovoltaïque',
  },
  {
    number: '03',
    title: 'Alimentation en eau et stockage dans des réservoirs adaptés',
  },
  {
    number: '04',
    title: 'Sécurité et contrôle à distance',
  },
]

function FeatureList({ items, className = '', ariaHidden }) {
  return (
    <ul
      className={`aurea-pdf-features ${className}`.trim()}
      aria-hidden={ariaHidden}
    >
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

  const text = String(children).trim()
  const needsToggle = text.length > initialLength

  const visibleText =
    expanded || !needsToggle
      ? text
      : `${text.slice(0, initialLength).trimEnd()}…`

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

function VideoCard({ src, label }) {
  return (
    <div>
      <video
        controls
        playsInline
        preload="metadata"
        src={src}
        aria-label={label || 'Vidéo de présentation Maison Havre'}
      >
        Votre navigateur ne prend pas en charge la lecture vidéo.
      </video>
    </div>
  )
}

function PdfHome() {
  return (
    <div className="aurea-pdf-home">
      {/* 1. Accueil */}
      <section
        id="accueil"
        className="aurea-pdf-hero aurea-pdf-hero--revised"
        style={{ '--hero-image': `url("${heroImage}")` }}
      >
        <Container>
          <div className="aurea-pdf-hero-stage">
            <Reveal className="aurea-pdf-hero-frame">
              <img
                src={heroImage}
                alt="Chalet Maison Havre dans un paysage tunisien"
              />

              <div className="aurea-pdf-hero-content">
                <div className="aurea-pdf-hero-heading">
                  <h1>
                    <span>Havre de paix,</span>
                    <span>devenez propriétaire</span>
                  </h1>
                </div>

                <p className="aurea-pdf-hero-lead">
                  Des maisons et chalets en bois,
                  <span className="aurea-pdf-hero-description-line">
                    écologiques et autonomes en eau et en électricité
                  </span>
                </p>
              </div>
            </Reveal>

            <div className="aurea-pdf-hero-bar">
              <div className="aurea-pdf-hero-marquee">
                <div className="aurea-pdf-hero-marquee-track">
                  <FeatureList
                    items={highlights}
                    className="aurea-pdf-features--hero"
                  />
                  <FeatureList
                    items={highlights}
                    className="aurea-pdf-features--hero"
                    ariaHidden
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Notre offre */}
      <section
        id="notre-offre"
        className="aurea-pdf-section is-paper"
      >
        <Container>
          <h2>Notre offre</h2>

          <div>
            <Reveal>
              <h3>
                Du choix du terrain jusqu’à la maison finie, clé en main.
              </h3>
            </Reveal>
          </div>

          <div>
            <Reveal className="aurea-pdf-media">
              <VideoCard src={videoSource} />
            </Reveal>

            <Reveal delay={0.1}>
              <span className="aurea-pdf-kicker">
                Une offre sur mesure
              </span>

              <ReadMore initialLength={210}>
                Avec Maison Havre, bénéficiez d'une prise en charge complète.
                Composez votre projet en trois étapes simples : 1. Sélectionnez
                l’emplacement de votre future maison parmi une sélection de
                terrains rigoureusement étudiés pour leur accessibilité et leur
                potentiel. 2. Personnalisez votre modèle en bois à partir de
                notre catalogue, conçu avec nos fabricants partenaires. 3.
                Choisissez vos finitions et équipements selon vos besoins :
                piscine, installations solaires, ameublement et aménagement
                paysager. Nous vous accompagnons à chaque étape, des démarches
                administratives et juridiques au suivi du chantier, jusqu’à la
                remise des clés.
              </ReadMore>
            </Reveal>
          </div>

          <FeatureList items={offerHighlights} />
        </Container>
      </section>

      {/* 3. Notre produit */}
      <section
        id="notre-produit"
        className="aurea-pdf-section is-sand"
      >
        <Container>
          <div className="aurea-pdf-product-hero">
            <img
              src="https://jfoprtlfgdwaslsqizut.supabase.co/storage/v1/object/public/images/notre_prod.jpg"
              alt="Chalet en bois Maison Havre"
            />
            <div className="aurea-pdf-product-overlay">
              <h2>Notre produit</h2>
              <h3>
                Maison Havre,
                <br />
                L’habitat qui vous ressemble
              </h3>
              <FeatureList
                items={productImageHighlights}
                className="aurea-pdf-product-highlights"
              />
            </div>
          </div>

          <Reveal
            delay={0.1}
            className="aurea-pdf-feature-copy"
          >
            <ReadMore initialLength={220}>
              {`Nous proposons des chalets en bois implantés sur des sites d’exception : avec vue panoramique sur la mer, sur les hauteurs ou au cœur de la nature, à moins d’une heure de Tunis.
                Écologiques et confortables, nos logements sont conçus pour favoriser l’autonomie en énergie et en eau. Ils peuvent être équipés de panneaux photovoltaïques avec stockage de l’énergie et de réservoirs adaptés à la gestion de l’eau.
                L’objectif : vous offrir un lieu de détente confortable et indépendant, adapté à vos besoins et à son environnement.
              `}
            </ReadMore>

            <FeatureList items={productHighlights} />
            
            
          </Reveal>
        </Container>
      </section>

      {/* 4. Notre solution de bout en bout */}
      <section
        id="solution-bout-en-bout"
        className="aurea-pdf-section is-paper"
      >
        <Container>
          <div className="aurea-pdf-solution aurea-pdf-solution--end">
            <h2>Notre solution de bout en bout</h2>

            <Reveal>
              <h3>
                Un accompagnement de la conception à la réalisation.
              </h3>
            </Reveal>

            <Reveal
              delay={0.1}
              className="aurea-pdf-solution-end-video"
            >
              <VideoCard
                src={videoSource2}
                label="Découvrez notre solution Maison Havre"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 5. Notre expertise */}
      <section
        id="notre-expertise"
        className="aurea-pdf-section is-night aurea-pdf-section--expertise"
      >
        <div
          className="aurea-pdf-expertise-background"
          aria-hidden="true"
        >
          <img
            src="https://jfoprtlfgdwaslsqizut.supabase.co/storage/v1/object/public/images/planning1.jpg"
            alt=""
          />
        </div>

        <Container>
          <h2>Notre expertise</h2>

          <Reveal
            delay={0.1}
            className="aurea-pdf-feature-copy aurea-pdf-feature-copy--expertise"
          >
            <h3>
              Conseil, étude, offre, réalisation et suivi
            </h3>
              <Reveal
              delay={0.1}
              className="aurea-pdf-feature-copy aurea-pdf-feature-copy--expertise"
              >
                <p>
                  {`
                    Ce projet s’appuie sur 30 ans d’expérience en gestion de projet, l’exigence d’un ingénieur et une passion sincère pour la nature et le tourisme local.
                    Maison Havre, c’est une approche structurée pour transformer votre projet en réalité, avec un accompagnement adapté à vos besoins.
                  `}
                </p>
            </Reveal>
            

            <FeatureList items={expertiseHighlights} />
          </Reveal>
        </Container>
      </section>

      {/* 6. Finitions et équipements */}
      <section className="aurea-pdf-section is-paper">
        <Container>
          <div className="aurea-pdf-process-grid aurea-pdf-process-grid--equipment">
            <h2>Finitions et équipements</h2>

            <Reveal>
              <h3>
                Choisissez le standing qui vous ressemble et composez les équipements qui vous conviennent.
              </h3>
            </Reveal>

            <div className="aurea-pdf-process-list">
              {equipmentItems.map((item, index) => (
                <Reveal
                  key={item.number}
                  delay={index * 0.08}
                >
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
