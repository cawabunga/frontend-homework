import { useMemo } from 'react'

export const useId = (): string => {
  return useMemo(() => `id-${Math.random()}`, [])
}
