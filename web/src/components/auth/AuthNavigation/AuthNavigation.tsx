import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

import SignoutButton from '../SignoutButton/SignoutButton'

const AuthNavigation = () => {
  const { isAuthenticated } = useAuth()

  return (
    <nav>
      {isAuthenticated ? (
        <SignoutButton />
      ) : (
        <>
          <Link to={routes.signup()}>Sign Up</Link>
          <Link to={routes.signin()}>Sign In</Link>
        </>
      )}
    </nav>
  )
}

export default AuthNavigation
