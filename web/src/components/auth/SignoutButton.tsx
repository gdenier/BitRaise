import { ReactElement } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

export const SignoutButton = (): ReactElement => {
  const { logOut } = useAuth()

  const signOut = async () => {
    await logOut()
    navigate(routes.signin())
  }

  return (
    <button className="btn btn-primary" onClick={signOut}>
      Sign Out
    </button>
  )
}
