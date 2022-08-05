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
        <ul>
          <li>
            <Link to={routes.signup()}>Sign Up</Link>
          </li>
          <li>
            <Link to={routes.signin()}>Sign In</Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default AuthNavigation
