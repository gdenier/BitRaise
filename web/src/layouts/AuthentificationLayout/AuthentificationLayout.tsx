import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, routes } from '@redwoodjs/router'

type AuthentificationLayoutProps = {
  children?: React.ReactNode
}

const AuthentificationLayout = ({ children }: AuthentificationLayoutProps) => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    navigate(routes.dashboard())
  }

  return (
    <>
      <Link
        to={routes.landing()}
        className="btn btn-ghost absolute left-6 top-6 gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        home
      </Link>
      {children}
    </>
  )
}

export default AuthentificationLayout
