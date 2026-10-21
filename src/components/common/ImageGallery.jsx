import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function ImageGallery({ images = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const openImage = (index) => {
    setSelectedIndex(index)
  }

  const closeImage = () => {
    setSelectedIndex(null)
  }

  const nextImage = () => {
    setSelectedIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    )
  }

  const previousImage = () => {
    setSelectedIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    )
  }

  return (
    <>
      {/* Gallery */}
      <div className="grid gap-4 md:grid-cols-3">

        {images.map((image, index) => (
          <motion.button
            key={image}
            onClick={() => openImage(index)}
            whileHover={{ scale: 0.99 }}
            className={`group relative overflow-hidden text-left ${
              index === 0
                ? 'md:col-span-2 md:row-span-2'
                : ''
            }`}
          >
            <img
              src={image}
              alt={`Image de la galerie ${index + 1}`}
              className={`w-full object-cover transition-transform duration-1000 group-hover:scale-105 ${
                index === 0
                  ? 'h-125 md:h-162.5'
                  : 'h-60 md:h-79'
              }`}
            />

            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

            <span className="absolute bottom-5 right-5 bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1D2923] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Voir
            </span>
          </motion.button>
        ))}

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-[#101713]/95 p-6 backdrop-blur-sm"
            onClick={closeImage}
          >
            {/* Close */}
            <button
              onClick={closeImage}
              className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1D2923]"
              aria-label="Fermer la galerie"
            >
              <X size={20} />
            </button>

            {/* Previous */}
            <button
              onClick={(event) => {
                event.stopPropagation()
                previousImage()
              }}
              className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md"
              aria-label="Image précédente"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Image */}
            <motion.img
              key={images[selectedIndex]}
              src={images[selectedIndex]}
              alt={`Image de la galerie ${selectedIndex + 1}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(event) => event.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(event) => {
                event.stopPropagation()
                nextImage()
              }}
              className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md"
              aria-label="Image suivante"
            >
              <ChevronRight size={20} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] text-white/60">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ImageGallery