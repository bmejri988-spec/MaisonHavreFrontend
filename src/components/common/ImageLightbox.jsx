import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

function ImageLightbox({ src, alt, className = '', children }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        className={`aurea-image-preview ${className}`.trim()}
        aria-label={`Agrandir l’image : ${alt}`}
        onClick={() => setIsOpen(true)}
      >
        {children || <img src={src} alt={alt} />}
      </button>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="aurea-image-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24 }}
              onClick={() => setIsOpen(false)}
            >
              <button
                type="button"
                className="aurea-image-lightbox__close"
                aria-label="Fermer l’image"
                onClick={() => setIsOpen(false)}
              >
                <X size={22} />
              </button>
              <motion.img
                src={src}
                alt={alt}
                className="aurea-image-lightbox__image"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                onClick={(event) => event.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}

export default ImageLightbox
