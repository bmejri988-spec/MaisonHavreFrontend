import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Container from '../../components/common/Container'
import SectionTitle from '../../components/common/SectionTitle'
import Reveal from '../../components/common/Reveal'

function About() {
  return (
    <main className="bg-[#F7F5F0]">
      <Navbar contained />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#1D2923]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://jfoprtlfgdwaslsqizut.supabase.co/storage/v1/object/sign/images/hero-about.jpg?token=eyJraWQiOiIyNmMxNTNhMy03ZWFhLTQ2YjktYmUwMS1hY2ZjYjllOTYwZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaGVyby1hYm91dC5qcGciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzkyNTgxMjEzLCJleHAiOjE5MTg3MjUyMTN9.dM1VLhQQgh57GZVWuosXcTkCD-XgASR-C8xsbX5MkPE"
            alt="Architecture méditerranéenne en Tunisie"
            className="h-full w-full object-cover"
          />

          {/* Dark architectural overlay */}
          <div className="absolute inset-0 bg-[#1D2923]/70" />
          <div className="absolute inset-0 bg-linear-to-t from-[#1D2923] via-[#1D2923]/45 to-transparent" />

          {/* Existing decorative grid */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(180,154,112,0.18),transparent_35%)]" />
          <div className="absolute bottom-0 left-1/2 h-[70%] w-px -translate-x-1/2 bg-white/10" />
          <div className="absolute left-[20%] top-0 h-full w-px bg-white/5" />
          <div className="absolute right-[20%] top-0 h-full w-px bg-white/5" />
        </div>

        <Container className="relative z-10 pb-16 pt-40 md:pb-24 lg:pb-28">
          <Reveal>
            <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.3em] text-[#B49A70]">
              À propos de Maison Havre
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="max-w-5xl font-serif text-6xl font-medium leading-[0.88] tracking-[-0.02em] text-white sm:text-7xl md:text-8xl lg:text-[9rem]">
              Architecture
              <span className="block text-[#B49A70]">avec intention.</span>
            </h1>
          </Reveal>

          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal delay={0.2}>
              <p className="max-w-xl text-base leading-7 text-white/65 md:text-lg">
                Maison Havre imagine des chalets contemporains en dialogue avec leur
                terrain, leurs habitants et leur manière de vivre.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="#story"
                className="flex w-fit items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#B49A70]"
              >
                Découvrir notre approche
                <ArrowDown size={17} strokeWidth={1.5} />
              </a>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* =========================================================
          INTRODUCTION / PHILOSOPHY
      ========================================================= */}
      <section id="story" className="py-24 md:py-32 lg:py-40">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            {/* Image */}
            <Reveal className="order-2 lg:order-1">
              <div className="group relative h-105 overflow-hidden md:h-140 lg:h-162">
                <img
                  src="https://jfoprtlfgdwaslsqizut.supabase.co/storage/v1/object/sign/images/hero-models.png?token=eyJraWQiOiIyNmMxNTNhMy03ZWFhLTQ2YjktYmUwMS1hY2ZjYjllOTYwZmYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvaGVyby1tb2RlbHMucG5nIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc5MjU4MTMyMCwiZXhwIjoxOTE4NzI1MzIwfQ.j29mWKUZnOpU5ZF1s7Li-zXCcT--OMn31YDNiOZIXfM"
                  alt="Paysage forestier du nord-ouest tunisien"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#1D2923]/25 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80">
                    Pensé pour son environnement
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Text */}
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                  Notre philosophie
                </span>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="mt-5 font-serif text-4xl font-medium leading-[0.95] text-[#1D2923] md:text-6xl lg:text-7xl">
                  Un chalet doit sembler avoir toujours appartenu à son lieu.
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 max-w-2xl space-y-6 text-base leading-8 text-[#77766F]">
                  <p>
                    Nous croyons qu’une maison commence par sa relation avec
                    son environnement. Le terrain, le paysage, la lumière et
                    les usages façonnent chaque décision architecturale.
                  </p>

                  <p>
                    Maison Havre réunit ces éléments dans une approche attentive du
                    chalet. Plutôt qu’un produit figé, nous créons un cadre
                    capable de s’adapter à chaque terrain et à chaque projet de vie.
                  </p>

                  <p>
                    Le résultat est une architecture raffinée sans ostentation,
                    contemporaine sans jamais perdre son identité.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          APPROACH
      ========================================================= */}
      <section className="bg-[#EFEBE2] py-24 md:py-32 lg:py-40">
        <Container>
          <Reveal>
            <SectionTitle
              eyebrow="L’approche Maison Havre"
              title="Trois éléments. Une vision cohérente."
              description="Chaque projet réunit le terrain, l’architecture et les détails qui rendent un lieu personnel."
            />
          </Reveal>

          {/* Image strip */}
          <Reveal delay={0.1}>
            <div className="mt-16 h-75 overflow-hidden md:h-105 lg:h-125">
              <img
                src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=90"
                alt="Paysage côtier tunisien"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Three principles */}
          <div className="mt-16 grid border-t border-[#DDD8CD] md:grid-cols-3">
            <Reveal delay={0.1} className="h-full">
              <article className="border-b border-[#DDD8CD] py-10 md:border-b-0 md:border-r md:pr-10">
                <span className="text-sm text-[#B49A70]">01</span>

                <h3 className="mt-8 font-serif text-4xl text-[#1D2923]">
                  Le terrain
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#77766F]">
                  Comprendre le terrain est la première étape. Son orientation,
                  son paysage et son contexte guident la relation entre le
                  chalet et son environnement.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.2} className="h-full">
              <article className="border-b border-[#DDD8CD] py-10 md:border-b-0 md:border-r md:px-10">
                <span className="text-sm text-[#B49A70]">02</span>

                <h3 className="mt-8 font-serif text-4xl text-[#1D2923]">
                  L’architecture
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#77766F]">
                  Nos modèles offrent une base architecturale forte et cohérente.
                  tout en laissant au projet la liberté de répondre à son
                  contexte particulier.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.3} className="h-full">
              <article className="py-10 md:pl-10">
                <span className="text-sm text-[#B49A70]">03</span>

                <h3 className="mt-8 font-serif text-4xl text-[#1D2923]">
                  Les détails
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#77766F]">
                  Les matières, les options et les finitions complètent
                  l’expérience, afin que chaque projet reflète ceux qui
                  y vivront.
                </p>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* =========================================================
          STATEMENT
      ========================================================= */}
      <section className="bg-[#1D2923] py-28 md:py-40">
        <Container>
          <Reveal>
            <div className="max-w-6xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                Notre regard
              </span>

              <blockquote className="mt-8 font-serif text-5xl font-medium leading-[0.95] text-white md:text-7xl lg:text-8xl">
                « Une architecture réussie ne rivalise pas avec son environnement.
                <span className="text-[#B49A70]">
                  {' '}
                  Elle lui donne du sens.
                </span>
                ”
              </blockquote>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="py-24 md:py-32 lg:py-40">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <Reveal>
              <SectionTitle
                eyebrow="De l’idée à la maison"
                title="Une manière plus simple de construire."
                description="Maison Havre réunit les décisions essentielles dans une expérience accompagnée."
              />
            </Reveal>

            <div className="border-t border-[#DDD8CD]">
              {[
                {
                  number: '01',
                  title: 'Choisissez votre terrain',
                  text: 'Commencez par le lieu qui accueillera votre chalet.',
                },
                {
                  number: '02',
                  title: 'Découvrez votre modèle',
                  text: 'Choisissez une base architecturale qui correspond à votre vision.',
                },
                {
                  number: '03',
                  title: 'Personnalisez votre chalet',
                  text: 'Ajoutez les options et les détails qui rendent le projet unique.',
                },
                {
                  number: '04',
                  title: 'Réunissez tous les éléments',
                  text: 'Vérifiez votre configuration et passez du concept à la réalisation.',
                },
              ].map((step, index) => (
                <Reveal key={step.number} delay={index * 0.08}>
                  <div className="grid gap-4 border-b border-[#DDD8CD] py-7 md:grid-cols-[80px_1fr_1.2fr] md:items-center">
                    <span className="text-sm text-[#B49A70]">
                      {step.number}
                    </span>

                    <h3 className="font-serif text-3xl text-[#1D2923]">
                      {step.title}
                    </h3>

                    <p className="max-w-md text-sm leading-6 text-[#77766F]">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          INTERIOR / LIFESTYLE IMAGE
      ========================================================= */}
      <section className="pb-24 md:pb-32 lg:pb-40">
        <Container>
          <Reveal>
            <div className="relative h-105 overflow-hidden md:h-150 lg:h-180">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=90"
                alt="Intérieur chaleureux d’un chalet contemporain"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#1D2923]/60 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-6 max-w-xl md:bottom-12 md:left-12">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                  Les détails comptent
                </span>

                <p className="mt-4 font-serif text-3xl leading-tight text-white md:text-5xl">
                  Des espaces façonnés selon votre manière de vivre.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="pb-24 md:pb-32">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden bg-[#EFEBE2] px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#B49A70]/10 blur-3xl" />

              <div className="relative z-10 max-w-3xl">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B49A70]">
                  Votre projet
                </span>

                <h2 className="mt-5 font-serif text-5xl font-medium leading-[0.95] text-[#1D2923] md:text-7xl">
                  Imaginez un chalet qui vous ressemble.
                </h2>

                <p className="mt-7 max-w-xl text-base leading-7 text-[#77766F]">
                  Découvrez les terrains disponibles et nos modèles,
                  puis composez un projet à la mesure de votre vision.
                </p>

                <Link
                  to="/build-your-own"
                  className="mt-9 inline-flex items-center gap-3 bg-[#1D2923] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#2D3C34]"
                >
                  Composer votre chalet
                  <ArrowUpRight size={17} strokeWidth={1.7} />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  )
}

export default About