import { Children, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

function MobileCatalogCarousel({ children, label, className = '' }) {
  const slides = Children.toArray(children)
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateActiveIndex = () => {
    const track = trackRef.current
    if (!track) return

    setActiveIndex(Math.min(
      slides.length - 1,
      Math.round(track.scrollLeft / track.clientWidth)
    ))
  }

  const goToSlide = (index) => {
    const track = trackRef.current
    if (!track) return

    const nextIndex = (index + slides.length) % slides.length
    track.scrollTo({
      left: nextIndex * track.clientWidth,
      behavior: 'smooth',
    })
    setActiveIndex(nextIndex)
  }

  if (!slides.length) return null

  return (
    <div className="mobile-catalog-carousel">
      <div
        ref={trackRef}
        className={`mobile-catalog-carousel__track grid ${className}`.trim()}
        role="region"
        aria-label={label}
        aria-roledescription="carrousel"
        onScroll={updateActiveIndex}
      >
        {slides.map((slide, index) => (
          <div className="mobile-catalog-carousel__slide" key={index}>
            {slide}
          </div>
        ))}
      </div>

      <div className="mobile-catalog-carousel__controls">
        <button
          type="button"
          onClick={() => goToSlide(activeIndex - 1)}
          aria-label="Élément précédent"
        >
          <ArrowLeft size={17} />
        </button>
        <span aria-live="polite">
          {String(activeIndex + 1).padStart(2, '0')}
          <span aria-hidden="true"> / </span>
          {String(slides.length).padStart(2, '0')}
        </span>
        <button
          type="button"
          onClick={() => goToSlide(activeIndex + 1)}
          aria-label="Élément suivant"
        >
          <ArrowRight size={17} />
        </button>
      </div>
      <p className="mobile-catalog-carousel__hint">Glissez pour découvrir</p>
    </div>
  )
}

export default MobileCatalogCarousel
