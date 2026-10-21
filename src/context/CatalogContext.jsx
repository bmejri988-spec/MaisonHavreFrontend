import { useEffect, useState } from 'react'
import {
  fetchCatalog,
  getCachedCatalog,
  isCatalogCacheFresh,
} from '../services/catalogApi'
import { CatalogContext } from './useCatalog'

const emptyCatalog = {
  models: [],
  terrains: [],
  options: [],
}

export function CatalogProvider({ children }) {
  const [catalog, setCatalog] = useState(() => ({
    ...emptyCatalog,
    ...getCachedCatalog(),
  }))
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(() => !isCatalogCacheFresh())

  useEffect(() => {
    let active = true

    fetchCatalog((nextCatalog) => {
      if (active) {
        setCatalog((current) => ({ ...current, ...nextCatalog }))
        setLoading(false)
        setError(null)
      }
    })
      .then((data) => {
        if (active) {
          setCatalog((current) => ({ ...current, ...data }))
          setLoading(false)
        }
      })
      .catch((requestError) => {
        if (active) {
          setError(requestError)
          setLoading(false)
        }
      })

    return () => {
      active = false
    }
  }, [])

  return (
    <CatalogContext.Provider value={{ ...catalog, loading, error }}>
      {children}
    </CatalogContext.Provider>
  )
}
