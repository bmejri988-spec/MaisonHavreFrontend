import { useContext } from 'react'
import { ConfiguratorContext } from './ConfiguratorContext'

export function useConfigurator() {
  const context = useContext(ConfiguratorContext)

  if (!context) {
    throw new Error(
      'useConfigurator must be used inside ConfiguratorProvider'
    )
  }

  return context
}