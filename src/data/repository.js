const normalizeId = (id) => (id == null ? null : String(id))

export const formatSurface = (record) =>
  `${record.surfaceArea.toLocaleString()} ${record.surfaceUnit}`

export const formatPrice = (price, prefix = '') =>
  `${prefix}${price.toLocaleString()} TND`

export const findChaletModelById = (models, id) =>
  models.find((model) => model.id === normalizeId(id))

export const findTerrainById = (terrains, id) =>
  terrains.find((terrain) => terrain.id === normalizeId(id))

export const findOptionById = (options, id) =>
  options.find((option) => option.id === normalizeId(id))
