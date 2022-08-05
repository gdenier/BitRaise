import { useAuth } from '@redwoodjs/auth'

import Dashboard from 'src/components/Dashboard/Dashboard'
import LandingPage from 'src/components/LandingPage/LandingPage'
import AuthenticatedLayout from 'src/layouts/AuthenticatedLayout/AuthenticatedLayout'
import PreviewLayout from 'src/layouts/PreviewLayout/PreviewLayout'

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated)
    return (
      <PreviewLayout>
        <AuthenticatedLayout>
          <Dashboard />
        </AuthenticatedLayout>
      </PreviewLayout>
    )

  return <LandingPage />
}

export default HomePage
