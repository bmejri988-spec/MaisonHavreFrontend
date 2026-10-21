import { createContext, useMemo, useState } from 'react'
import {
  findChaletModelById,
  findTerrainById,
  findOptionById,
} from '../data/repository'
import { useCatalog } from './useCatalog'

const ConfiguratorContext = createContext(null)

export function ConfiguratorProvider({ children }) {
  const { models, terrains, options } = useCatalog()
  const [selectedTerrainId, setSelectedTerrainId] = useState(null)
  const [selectedModelId, setSelectedModelId] = useState(null)
  const [selectedOptionIds, setSelectedOptionIds] = useState([])

  const selectedTerrain = findTerrainById(terrains, selectedTerrainId)
  const selectedModel = findChaletModelById(models, selectedModelId)
  const selectedOptions = selectedOptionIds
    .map((id) => findOptionById(options, id))
    .filter(Boolean)

  const setSelectedTerrain = (terrain) =>
    setSelectedTerrainId(terrain?.id ?? terrain ?? null)

  const setSelectedModel = (model) =>
    setSelectedModelId(model?.id ?? model ?? null)

  const toggleOption = (option) => {
    const optionId = option?.id ?? option

    setSelectedOptionIds((current) => {
      const alreadySelected = current.includes(optionId)

      if (alreadySelected) {
        return current.filter((id) => id !== optionId)
      }

      return [...current, optionId]
    })
  }

  const clearConfiguration = () => {
    setSelectedTerrainId(null)
    setSelectedModelId(null)
    setSelectedOptionIds([])
  }

  const optionsTotal = useMemo(() => {
    return selectedOptions.reduce(
      (total, option) => total + option.price,
      0
    )
  }, [selectedOptions])

  const modelPrice = selectedModel?.basePrice ?? 0
  const terrainPrice = selectedTerrain?.basePrice ?? 0

  const totalPrice = terrainPrice + modelPrice + optionsTotal

  const value = {
    selectedTerrain,
    selectedTerrainId,
    setSelectedTerrain,

    selectedModel,
    selectedModelId,
    setSelectedModel,

    selectedOptions,
    selectedOptionIds,
    toggleOption,

    modelPrice,
    terrainPrice,
    optionsTotal,
    totalPrice,

    clearConfiguration,
  }

  return (
    <ConfiguratorContext.Provider value={value}>
      {children}
    </ConfiguratorContext.Provider>
  )
}

export { ConfiguratorContext }