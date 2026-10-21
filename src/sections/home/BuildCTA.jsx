import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from '../../components/common/Reveal'

function BuildCTA() {
  return (
    <section className="relative overflow-hidden bg-[#B49A70] py-28 md:py-40">

      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/20" />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border border-white/20" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1D2923]/60"
        >
          Votre vision
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 font-serif text-6xl font-medium leading-[0.9] text-[#1D2923] md:text-8xl"
        >
          Donnez forme à un lieu
          <br />
          <span className="italic">qui vous ressemble.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-xl text-sm leading-6 text-[#1D2923]/65 md:text-base"
        >
          Choisissez votre terrain, sélectionnez votre modèle et composez une
          résidence qui traduit votre style de vie. Maison Havre vous accompagne de
          la première inspiration jusqu’à la remise des clés.
        </motion.p>

        <Reveal>
          <Link
            to="/build-your-own"
            className="group inline-flex items-center gap-4 bg-[#1D2923] px-7 py-4 text-sm font-semibold text-white"
          >
            Imaginer mon chalet

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#1D2923] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={15} />
            </span>
          </Link>
        </Reveal>

      </div>
    </section>
  )
}

export default BuildCTA