import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

import LandingContent from 'src/components/LandingPage/LandingContent'

const LandingPage = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) navigate(routes.dashboard())

  return <LandingContent />
}

export default LandingPage
