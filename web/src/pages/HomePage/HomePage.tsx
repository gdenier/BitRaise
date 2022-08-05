import { useAuth } from '@redwoodjs/auth'

import Dashboard from 'src/components/Dashboard/Dashboard'
import LandingPage from 'src/components/LandingPage/LandingPage'

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) return <Dashboard />

  return <LandingPage />
}

export default HomePage
