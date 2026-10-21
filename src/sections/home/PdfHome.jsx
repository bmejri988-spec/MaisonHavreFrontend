import { ArrowUpRight, Check, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCatalog } from '../../context/useCatalog'
import { formatSurface } from '../../data/repository'
import {
  localizedName,
  localizedRegion,
} from '../../data/localization'
import Container from '../../components/common/Container'
import Reveal from '../../components/common/Reveal'
import videoSource from '../../../../vid.mp4'

const highlights = [
  'Solution complète : terrain + maison',
  'Projet sur mesure selon vos besoins',
  'À moins d’une heure de Tunis',
  'Maisons autonomes en énergie et en eau',
  'Conception écologique et durable',
]

const offerSteps = [
  {
    number: '01',
    title: 'Choisissez votre terrain',
    text: 'Parmi une sélection d’emplacements validés pour leur accès, leur cadre et leur potentiel.',
  },
  {
    number: '02',
    title: 'Sélectionnez votre maison',
    text: 'Dans un catalogue de modèles en bois conçus avec nos fabricants partenaires.',
  },
  {
    number: '03',
    title: 'Composez vos finitions',
    text: 'Piscine, solaire, ameublement et aménagement paysager selon votre projet.',
  },
]

const expertise = [
  'Compétences métier',
  '30 ans d’expérience',
  'Étude personnalisée',
  'Suivi de chantier',
]

function FeatureList({ items }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#77766F]">
          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B49A70] text-white">
            <Check size={12} strokeWidth={2.5} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function PdfHome() {
  const { terrains, models } = useCatalog()

  return (
    <div className="aurea-pdf-home">
      <section className="aurea-pdf-hero">
        <img 
          src="https://jfoprtlfgdwaslsqizut.supabase.co/storage/v1/object/sign/images/Mediterranean.png?token=eyJraWQiOiIyNmMxNTNhMy03ZWFhLTQ2YjktYmUwMS1hY2ZjYjllOTYwZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvTWVkaXRlcnJhbmVhbi5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkyNTgxNDQ0LCJleHAiOjE5MTg3MjU0NDR9.1L06bQfzwa4CVoJBQoehh5AG80LNIebxW2CMhdAYWJg" 
          alt="Chalet Maison Havre dans un paysage tunisien" 
        />
        <div className="aurea-pdf-hero-overlay" />
        <Container className="relative z-10 pb-20 pt-48 md:pb-28">
          <Reveal>
            <span className="aurea-pdf-eyebrow">Havren Havre</span>
            <h1>
              Havre de paix,
              <br />
              <em>devenez propriétaire.</em>
            </h1>
            <p>
              Des maisons et chalets écologiques, autonomes en énergie et en
              eau, clé en main — pensés pour celles et ceux qui ont mérité
              leur vue sur l’horizon.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="aurea-pdf-section aurea-pdf-intro">
        <Container>
          <Reveal>
            <span className="aurea-pdf-eyebrow aurea-pdf-eyebrow-dark">L’accueil</span>
            <h2>Une solution complète pour habiter autrement.</h2>
            <p className="aurea-pdf-lead">
              Maison Havre imagine des havres de paix sur des emplacements de caractère,
              à moins d’une heure de Tunis, avec une prise en charge claire et
              personnalisée.
            </p>
            <FeatureList items={highlights} />
          </Reveal>
        </Container>
      </section>

      <section className="aurea-pdf-section aurea-pdf-offer">
        <Container>
          <div className="aurea-pdf-section-heading">
            <Reveal>
              <span className="aurea-pdf-eyebrow aurea-pdf-eyebrow-dark">Notre offre</span>
              <h2>Du choix du terrain à la maison finie, clé en main.</h2>
            </Reveal>
          </div>

          <div className="aurea-pdf-video-layout">
            <Reveal>
              <div className="aurea-pdf-video-card">
                <video controls playsInline preload="metadata" src={videoSource}>
                  Votre navigateur ne prend pas en charge la lecture vidéo.
                </video>
                <span className="aurea-pdf-video-label">
                  <Play size={13} fill="currentColor" /> Comprendre notre méthode
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="aurea-pdf-kicker">L’offre, sur mesure</span>
              <h3>Vous composez. Nous réalisons.</h3>
              <p>
                Notre force, c’est la prise en charge complète. Vous composez
                votre projet en trois étapes simples, puis nous nous occupons
                des négociations, des formalités administratives et juridiques,
                du suivi de chantier jusqu’à la remise des clés.
              </p>
            </Reveal>
          </div>

          <div className="aurea-pdf-step-grid">
            {offerSteps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="aurea-pdf-section aurea-pdf-product">
        <Container>
          <div className="aurea-pdf-split">
            <Reveal>
              <img 
                src="https://jfoprtlfgdwaslsqizut.supabase.co/storage/v1/object/sign/images/Mediterranean.png?token=eyJraWQiOiIyNmMxNTNhMy03ZWFhLTQ2YjktYmUwMS1hY2ZjYjllOTYwZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvTWVkaXRlcnJhbmVhbi5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkyNTgxNDQ0LCJleHAiOjE5MTg3MjU0NDR9.1L06bQfzwa4CVoJBQoehh5AG80LNIebxW2CMhdAYWJg" 
                alt="Chalet en bois Maison Havre" 
              />
            </Reveal>
            <Reveal delay={0.1}>
              <span className="aurea-pdf-eyebrow aurea-pdf-eyebrow-dark">Notre produit</span>
              <h2>L’habitat qui vous ressemble.</h2>
              <p>
                Nous proposons des chalets en bois installés sur des
                emplacements choisis pour leur caractère exceptionnel : vue sur
                la mer, hauteurs ou pleine nature.
              </p>
              <p>
                Des maisons confortables, écologiques et autonomes grâce au
                photovoltaïque avec stockage et à la récupération de l’eau.
                Votre havre fonctionne, où qu’il soit.
              </p>
              <Link className="aurea-pdf-link" to="/chalet-models">
                Découvrir les modèles <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="aurea-pdf-section aurea-pdf-expertise">
        <Container>
          <div className="aurea-pdf-split aurea-pdf-split-reverse">
            <Reveal>
              <span className="aurea-pdf-eyebrow">Notre expertise</span>
              <h2>Une méthode éprouvée au service d’un rêve concret.</h2>
              <p>
                Ce projet, c’est 30 ans d’expérience en gestion de projet,
                l’exigence d’un ingénieur et la passion sincère d’un homme pour
                la nature et le tourisme local.
              </p>
              <FeatureList items={expertise} />
            </Reveal>
            <Reveal delay={0.1}>
              <img 
                src="https://jfoprtlfgdwaslsqizut.supabase.co/storage/v1/object/sign/images/hero-terrains.jpg?token=eyJraWQiOiIyNmMxNTNhMy03ZWFhLTQ2YjktYmUwMS1hY2ZjYjllOTYwZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaGVyby10ZXJyYWlucy5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkyNTgxMzc3LCJleHAiOjE5MTg3MjUzNzd9.q6EpFy7sdz9IE975XIPIzP4xfGyfVnCS_pt8TRqVztM" 
                alt="Paysage naturel tunisien" 
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="aurea-pdf-section aurea-pdf-catalog">
        <Container>
          <Reveal>
            <span className="aurea-pdf-eyebrow aurea-pdf-eyebrow-dark">Nos offres</span>
            <h2>Composez votre futur havre.</h2>
            <p className="aurea-pdf-lead">
              Choisissez le terrain, la maison et le niveau de finition qui vous
              ressemblent. Maison Havre coordonne chaque étape avec ses partenaires de
              confiance.
            </p>
          </Reveal>

          <div className="aurea-pdf-catalog-grid">
            <Link to="/terrains" className="aurea-pdf-catalog-card">
              <span>Offre terrain</span>
              <h3>Votre havre existe quelque part.</h3>
              <p>Des emplacements de caractère à moins d’une heure de Tunis.</p>
              {terrains[0] && (
                <small>{localizedRegion(terrains[0].region)} · {terrains.length} emplacements</small>
              )}
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/chalet-models" className="aurea-pdf-catalog-card aurea-pdf-catalog-card-gold">
              <span>Offre maisons</span>
              <h3>L’habitat qui vous ressemble.</h3>
              <p>Composez votre future maison selon le terrain et votre budget.</p>
              {models[0] && (
                <small>{localizedName(models[0])} · {formatSurface(models[0])}</small>
              )}
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/options" className="aurea-pdf-catalog-card aurea-pdf-catalog-card-dark">
              <span>Finitions & équipements</span>
              <h3>Le standing qui vous ressemble.</h3>
              <p>Piscine, énergie solaire, eau, sécurité et contrôle à distance.</p>
              <small>Des solutions sélectionnées avec nos partenaires</small>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default PdfHome
