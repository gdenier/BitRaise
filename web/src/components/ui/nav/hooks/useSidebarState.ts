import { useCallback, useEffect } from 'react'

import {
  useDisclosure,
  useDisclosureReturnValue,
} from 'src/hooks/ui/useDisclosure'

interface SideBarState {
  isOpen: boolean
}

export const useSidebarState = (): useDisclosureReturnValue => {
  const state = JSON.parse(
    localStorage.getItem('sidebar-state')
  ) as SideBarState

  const { isOpen, toggle } = useDisclosure(state?.isOpen)

  const save = useCallback(
    async (value) => {
      if (state?.isOpen !== value)
        localStorage.setItem(
          'sidebar-state',
          JSON.stringify({ ...state, isOpen: value })
        )
    },
    [state]
  )

  useEffect(() => {
    save(isOpen)
  }, [isOpen, save])

  return { isOpen, toggle }
}
