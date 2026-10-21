import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCatalog } from '../../context/useCatalog'
import {
  localizedDescription,
  localizedName,
  localizedRegion,
} from '../../data/localization'

function CatalogSlider({ label, title, items, getDescription, getPath }) {
  const [activeIndex, setActiveIndex] = useState(0)
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
      preload.onerror = () => {
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
    setActiveIndex((index) => (
      (index + direction + items.length) % items.length
    ))
  }

  return (
    <section className="aurea-catalog-section">
      <div className="aurea-catalog-heading">
        <div>
          <span>{label}</span>
          <h3>{title}</h3>
        </div>
        <div className="aurea-catalog-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Élément précédent">
            <ArrowLeft size={15} />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Élément suivant">
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      <Link className="aurea-catalog-card" to={getPath(currentItem)}>
        <div className="aurea-catalog-image">
          {imageLoaded ? (
            <img src={image} alt={currentItem.name} />
          ) : (
            <div className="aurea-catalog-image-loading" aria-label="Chargement de l'image" />
          )}
          <span className="aurea-catalog-count">
            {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
          <span className="aurea-catalog-arrow">
            <ArrowUpRight size={17} />
          </span>
        </div>
        <div className="aurea-catalog-copy">
          <h4>{localizedName(currentItem)}</h4>
          <p>{getDescription(currentItem)}</p>
        </div>
      </Link>

      <div className="aurea-catalog-dots" aria-label={`Choisir ${title.toLowerCase()}`}>
        {items.map((item, index) => (
          <button
            key={item.id ?? item.name}
            type="button"
            aria-label={`Afficher ${localizedName(item)}`}
            aria-current={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}

function CatalogRail() {
  const { terrains, models, options } = useCatalog()

  return (
    <div className="aurea-catalog-rail">
      <CatalogSlider
        label="01 · Le terrain"
        title="Des lieux sélectionnés"
        items={terrains}
        getDescription={(terrain) => localizedRegion(terrain.region)}
        getPath={() => '/terrains'}
      />
      <CatalogSlider
        label="02 · Le modèle"
        title="Une architecture sur mesure"
        items={models}
        getDescription={(model) => localizedDescription(model)}
        getPath={() => '/chalet-models'}
      />
      <CatalogSlider
        label="03 · Les options"
        title="Les détails qui vous ressemblent"
        items={options}
        getDescription={(option) => localizedDescription(option)}
        getPath={() => '/options'}
      />
    </div>
  )
}

export default CatalogRail
