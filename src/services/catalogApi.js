//const API_BASE_URL ='http://localhost:8000/api/catalog'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const CACHE_KEY = 'aurea:catalog:v1'
const CACHE_TTL_MS = 5 * 60 * 1000
const resources = ['models', 'terrains', 'options']

let requestPromise

async function getCollection(resource) {
  const response = await fetch(`${API_BASE_URL}/${resource}/`)

  if (!response.ok) {
    throw new Error(`Catalog request failed: ${response.status}`)
  }

  const payload = await response.json()
  return payload.results ?? payload
}

export function getCachedCatalog() {
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY))

    if (!cached?.data) {
      return null
    }

    return cached.data
  } catch {
    return null
  }
}

function saveCachedCatalog(catalog) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data: catalog,
      savedAt: Date.now(),
    }))
  } catch {
    // Caching is an optimization; a storage failure should not block the API.
  }
}

export function isCatalogCacheFresh() {
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY))
    return Boolean(cached?.savedAt && Date.now() - cached.savedAt < CACHE_TTL_MS)
  } catch {
    return false
  }
}

export function fetchCatalog(onUpdate) {
  if (requestPromise) {
    return requestPromise
  }

  const catalog = getCachedCatalog() || {}
  requestPromise = Promise.all(
    resources.map(async (resource) => {
      const values = await getCollection(resource)
      const nextCatalog = { ...catalog, [resource]: values }
      Object.assign(catalog, nextCatalog)
      saveCachedCatalog(catalog)
      onUpdate?.(nextCatalog)
      return values
    })
  )
    .then(() => catalog)
    .finally(() => {
      requestPromise = undefined
    })

  return requestPromise
}
