import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCatalog } from '../../context/useCatalog'
import {
  localizedDescription,
  localizedName,
  localizedRegion,
} from '../../data/localization'

export function CatalogSlider({ label, desc, title, items, getDescription, getPath, cat, stacked = false }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [loadedImages, setLoadedImages] = useState(() => new Set())
  const currentItem = items[activeIndex]
  const image = currentItem?.gallery?.[0] || currentItem?.image

  const batchStart = Math.floor(activeIndex / 3) * 3
  const batchImages = useMemo(
    () => items.slice(batchStart, batchStart + 3)
      .map((item) => item.gallery?.[0] || item.image)
      .filter(Boolean),
    [batchStart, items]
  )
  const imageLoaded = Boolean(image && loadedImages.has(image))

  useEffect(() => {
    let cancelled = false

    batchImages.forEach((source) => {
      if (loadedImages.has(source)) {
        return
      }

      const preload = new Image()
      preload.onload = () => {
        if (!cancelled) {
          setLoadedImages((current) => new Set(current).add(source))
        }
      }
      preload.src = source
    })

    return () => {
      cancelled = true
    }
  }, [batchImages, loadedImages])

  if (!currentItem) {
    return null
  }

  const move = (direction) => {
    setDirection(direction)
    setActiveIndex((index) => (
      (index + direction + items.length) % items.length
    ))
  }

  const selectSlide = (index) => {
    setDirection(index >= activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  return (
    <section className={`aurea-catalog-section${stacked ? ' aurea-catalog-section--stacked' : ''}`}>
      <div className="aurea-catalog-heading">
        <div>
          <span>{label}</span>
          <h3>{title}</h3>
          <h4 className="aurea-catalog-desc">{desc}</h4>
          <span className="aurea-catalog-heading-cat">{cat}</span>
        </div>
      </div>

      <div className="aurea-catalog-slider">
        <div className="aurea-catalog-slide-frame">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={currentItem.id ?? currentItem.name ?? activeIndex}
              className="aurea-catalog-slide"
              custom={direction}
              initial={{ opacity: 0, x: direction * 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -48 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                className="aurea-catalog-slide-link"
                to={getPath(currentItem)}
                aria-label={`${localizedName(currentItem)} — ${getDescription(currentItem)}`}
              >
                {imageLoaded ? (
                  <img src={image} alt={localizedName(currentItem)} />
                ) : (
                  <div className="aurea-catalog-image-loading" aria-label="Chargement de l'image" />
                )}
                <span className="aurea-catalog-count">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </span>
                <span className="aurea-catalog-arrow">
                  <ArrowUpRight size={17} />
                </span>
                <span className="aurea-catalog-slide-copy">
                  <strong>{localizedName(currentItem)}</strong>
                  <span>{getDescription(currentItem)}</span>
                </span>
              </Link>
            </motion.div>
          </AnimatePresence>

          <div className="aurea-catalog-slide-controls">
            <button type="button" onClick={() => move(-1)} aria-label="Élément précédent">
              <ArrowLeft size={17} />
            </button>
            <button type="button" onClick={() => move(1)} aria-label="Élément suivant">
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="aurea-catalog-dots" aria-label={`Choisir un élément : ${title.toLowerCase()}`}>
            {items.map((item, index) => (
              <button
                key={item.id ?? item.name}
                type="button"
                aria-label={`Afficher ${localizedName(item)}`}
                aria-current={index === activeIndex}
                onClick={() => selectSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CatalogRail() {
  const { terrains, models, options } = useCatalog()

  return (
    <div className="aurea-catalog-rail">
      <CatalogSlider
        label="offre . terrain"
        title="Votre havre existe quelque part, à moins d’une heure de Tunis."
        desc="Nous allons le trouver, le construire et vous le remettre clé en main."
        cat="Catalogue des terrains"
        items={terrains}
        getDescription={(terrain) => localizedRegion(terrain.region)}
        getPath={() => '/terrains'}
      />
      <CatalogSlider
        label="Offre maisons"
        title="Maison Havre — L’habitat qui vous ressemble."
        desc="Composez votre future maison en fonction du terrain et selon votre budget."
        cat="Catalogue des maisons"
        items={models}
        getDescription={(model) => localizedDescription(model)}
        getPath={() => '/chalet-models'}
      />
      <CatalogSlider
        label="Offre piscines"
        title="Choisissez le standing et qui vous ressemble et composez les équipements qui vous conviennent."
        items={options}
        getDescription={(option) => localizedDescription(option)}
        getPath={() => '/options'}
      />
    </div>
  )
}

export default CatalogRail
