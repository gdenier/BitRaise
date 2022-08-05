import { useMemo } from 'react'

export const useIsIos = (): boolean => {
  return useMemo(() => window.navigator.userAgent.includes('iPhone'), [])
}
