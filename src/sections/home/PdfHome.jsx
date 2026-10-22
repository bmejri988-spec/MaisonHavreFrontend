import { Check, Play } from 'lucide-react'
import { useState } from 'react'

import { useCatalog } from '../../context/useCatalog'
import { formatSurface } from '../../data/repository'
import {
  localizedName,
  localizedRegion,
} from '../../data/localization'
import Container from '../../components/common/Container'
import Reveal from '../../components/common/Reveal'
import { CatalogSlider } from '../../components/home/CatalogRail'
import videoSource from '../../../vid.mp4'
import videoSource2 from '../../../vid2.mp4'
import SectionTitle from '../../components/common/SectionTitle'

const heroImage =
  'https://jfoprtlfgdwaslsqizut.supabase.co/storage/v1/object/sign/images/Mediterranean.png?token=eyJraWQiOiIyNmMxNTNhMy03ZWFhLTQ2YjktYmUwMS1hY2ZjYjllOTYwZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvTWVkaXRlcnJhbmVhbi5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkyNTgxNDQ0LCJleHAiOjE5MTg3MjU0NDR9.1L06bQfzwa4CVoJBQoehh5AG80LNIebxW2CMhdAYWJg'

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

function VideoCard({ src, label }) {
  return (
    <div className="aurea-pdf-video">
      <video controls playsInline preload="metadata" src={src}>
        Votre navigateur ne prend pas en charge la lecture vidéo.
      </video>
      <span className="aurea-pdf-video-label">
        <Play size={13} fill="currentColor" /> {label}
      </span>
    </div>
  )
}

function PdfHome() {
  const { terrains, models } = useCatalog()

  return (
    <div className="aurea-pdf-home">
      {/* 1. L’accueil */}
      <section id="accueil" className="aurea-pdf-hero">
        <img src={heroImage} alt="Chalet Maison Havre dans un paysage tunisien" />
        <div className="aurea-pdf-hero-overlay" />
        <Container className="relative z-10 pb-14 pt-48 md:pb-16">
          <Reveal>
            <span className="aurea-pdf-eyebrow">Maison Havre</span>
            <h1>
              Havre de paix, vous pouvez aussi
              <br />
              <em>devenir propriétaire.</em>
            </h1>
            <p>
              Maisons et chalets écologiques, autonomes en énergie et en eau,
              clé en main — pensés pour celles et ceux qui ont mérité leur vue
              sur l’horizon.
            </p>
            <FeatureList items={highlights} className="aurea-pdf-features--hero" />
          </Reveal>
        </Container>
      </section>

      {/* 2. Notre offre — 2.1 Notre solution */}
      <section id="notre-offre" className="aurea-pdf-section is-paper">
        <Container>
          <div className="aurea-pdf-heading">
            <Reveal>
              <span className="aurea-pdf-eyebrow aurea-pdf-eyebrow-dark">
                2.1 — Notre solution
              </span>
              <h2>Du choix du terrain jusqu’à la maison finie, clé en main.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Nous proposons une composition sur mesure en trois étapes :
                vous choisissez un terrain, vous sélectionnez le modèle de
                maison, puis vous composez les finitions et les équipements.
                Nous nous occupons de la réalisation.
              </p>
            </Reveal>
          </div>

          <div className="aurea-pdf-solution">
            <Reveal>
              <VideoCard src={videoSource} label="Comprendre notre méthode" />
            </Reveal>

            <Reveal delay={0.1}>
              <span className="aurea-pdf-kicker">L’offre, sur mesure</span>
              <h3>Vous composez. Nous réalisons.</h3>
              <ReadMore initialLength={210}>
                Notre force, c’est la prise en charge complète. Vous composez
                votre projet en trois étapes simples : vous choisissez
                l’emplacement parmi une sélection de terrains validés pour
                leur accès et leur potentiel. Vous choisissez votre maison dans
                un catalogue de modèles en bois conçus avec nos fabricants
                partenaires. Vous choisissez vos finitions — piscine,
                équipements solaires, ameublement et aménagement paysager —
                avec nos prestataires de confiance. Nous nous occupons du
                reste : négociations, formalités administratives et juridiques,
                suivi de chantier, jusqu’à la remise des clés.
              </ReadMore>
            </Reveal>
          </div>
          <FeatureList items={offerHighlights} />
        </Container>
      </section>

      {/* 2.2 Notre produit */}
      <section id="notre-produit" className="aurea-pdf-section is-sand">
        <Container>
          <div className="aurea-pdf-split">
            <Reveal>
              <img
                className="aurea-pdf-photo aurea-pdf-photo--gable"
                src="/images/image.png"
                alt="Chalet en bois Maison Havre"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <span className="aurea-pdf-eyebrow aurea-pdf-eyebrow-dark">
                2.2 — Notre produit
              </span>
              <h2>Maison Havre — L’habitat qui vous ressemble</h2>
              <p>
                Des chalets en bois sur des emplacements à fort caractère
                (mer, hauteurs, campagne), à moins d’une heure de Tunis,
                écologiques et 100 % autonomes : électricité photovoltaïque
                avec stockage et eau via des bâches.
              </p>
              <ReadMore initialLength={220}>
                Nous proposons des chalets en bois, installés sur des
                emplacements choisis pour leur caractère exceptionnel — vue
                imprenable sur la mer, sur les hauteurs ou en pleine nature —
                toujours à moins d’une heure de Tunis. Des maisons écologiques,
                confortables et surtout totalement autonomes : panneaux
                photovoltaïques avec stockage pour l’électricité, bâches de
                récupération pour l’eau. Plus de dépendance à la STEG ou à la
                SONEDE, plus de coupures d’été à subir — votre havre fonctionne,
                où qu’il soit.
              </ReadMore>
              <FeatureList items={productHighlights} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2.3 Solution de bout en bout */}
      <section id="solution-bout-en-bout" className="aurea-pdf-section is-paper">
        <Container>
          <div className="aurea-pdf-solution aurea-pdf-solution--end">
            <Reveal>
              <span className="aurea-pdf-eyebrow aurea-pdf-eyebrow-dark">
                2.3 — Solution de bout en bout
              </span>
              <h2>Un accompagnement de la conception à la réalisation.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <VideoCard src={videoSource2} label="Découvrez notre solution" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. Notre expertise */}
      <section id="notre-expertise" className="aurea-pdf-section is-night">
        <Container>
          <div className="aurea-pdf-split aurea-pdf-split-reverse">
            <Reveal>
              <span className="aurea-pdf-eyebrow aurea-pdf-eyebrow-dark">
                3 — Notre expertise
              </span>
              <h2>Conseil, étude, offre, réalisation, suivi</h2>
              <ReadMore initialLength={190}>
                Ce projet, c’est 30 ans d’expérience en gestion de projet,
                l’exigence d’un ingénieur et la passion sincère d’un homme pour
                la nature et le tourisme local. Maison Havre n’est pas une
                promesse abstraite — c’est une méthode éprouvée, au service
                d’un rêve très concret.
              </ReadMore>
              <FeatureList items={expertiseHighlights} />
            </Reveal>
            <Reveal delay={0.1}>
              <img
                className="aurea-pdf-photo aurea-pdf-photo--gable"
                src="/images/planning.jpg"
                alt="Paysage naturel tunisien"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4. Offre terrain */}
      <section id="offre-terrain" className="aurea-pdf-section is-paper">
        <Container>
          <div className="aurea-pdf-heading">
            <Reveal>
              <span className="aurea-pdf-eyebrow aurea-pdf-eyebrow-dark">
                Offre terrain
              </span>
              <h2>Votre havre existe quelque part, à moins d’une heure de Tunis.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p>Nous allons le trouver, le construire et vous le remettre clé en main.</p>
            </Reveal>
          </div>

          <div className="aurea-pdf-catalog-layout">
            <CatalogSlider
              label="Catalogue des terrains"
              title="Choisissez votre emplacement."
              items={terrains}
              getDescription={(terrain) => localizedRegion(terrain.region)}
              getPath={() => '/terrains'}
            />
          </div>
        </Container>
      </section>

      {/* 5. Offre maisons */}
      <section id="offre-maisons" className="aurea-pdf-section is-sand">
        <Container>
          <div className="aurea-pdf-heading">
            <Reveal>
              <span className="aurea-pdf-eyebrow aurea-pdf-eyebrow-dark">
                Offre maisons
              </span>
              <h2>Maison Havre — L’habitat qui vous ressemble.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p>Composez votre future maison en fonction du terrain et selon votre budget.</p>
            </Reveal>
          </div>

          <div className="aurea-pdf-catalog-layout">
            <CatalogSlider
              label="Catalogue des maisons"
              title="Choisissez votre modèle de maison."
              items={models}
              getDescription={(model) => `${localizedName(model)} · ${formatSurface(model)}`}
              getPath={() => '/chalet-models'}
            />
          </div>
        </Container>
      </section>

      {/* 6. Offre finitions et équipements */}
      <section className="aurea-pdf-section is-paper">
        <Container>
          <div className="aurea-pdf-process-grid">
            <Reveal>
              <div className="aurea-pdf-process-intro">
                <SectionTitle
                  eyebrow="De l’idée à la maison"
                  title="Choisissez le standing et qui vous ressemble et composez les équipements qui vous conviennent."
                  description="Avec nos partenaires, nous offrons des solutions pour :"
                />
              </div>
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
      {/* 
      <section id="offre-finitions" className="aurea-pdf-section is-sand">
        <Container>
          <Reveal>
            <span className="aurea-pdf-eyebrow aurea-pdf-eyebrow-dark">
              Offre finitions et équipements
            </span>
            <h2>Ajoutez les détails qui rendent votre havre personnel.</h2>
          </Reveal>
          <div className="aurea-pdf-catalog-layout">
            <CatalogSlider
              label="Catalogue des options"
              title="Composez vos finitions."
              items={options}
              getDescription={(option) => localizedDescription(option)}
              getPath={() => '/options'}
            />
          </div>
        </Container>
      </section>
      */}

    </div>
  )
}

export default PdfHome
