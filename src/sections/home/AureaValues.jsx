import { motion } from 'framer-motion'

const values = [
  'Sur mesure',
  'Artisanat',
  'Durable',
  'Transparence',
  'Nature',
  'Sérénité',
  'Écologique',
  'Confiance',
]

function AureaValues() {
  return (
    <section className="aurea-values" aria-label="Les engagements Maison Havre">
      <div className="aurea-values-track">
        {[...values, ...values].map((value, index) => (
          <motion.div
            key={`${value}-${index}`}
            className="aurea-value"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              delay: (index % values.length) * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span>{value}</span>
            <motion.i
              aria-hidden="true"
              animate={{ rotate: [0, 90, 180], scale: [1, 1.2, 1] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                delay: (index % values.length) * 0.18,
                ease: 'easeInOut',
              }}
            >
              ✦
            </motion.i>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default AureaValues
