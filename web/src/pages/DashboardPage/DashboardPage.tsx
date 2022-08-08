import { MetaTags } from '@redwoodjs/web'

import Dashboard from 'src/components/Dashboard/Dashboard'
import TitleLayout from 'src/layouts/TitleLayout/TitleLayout'

const DashboardPage = () => {
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <TitleLayout title="Dashboard">
        <Dashboard />
      </TitleLayout>
    </>
  )
}

export default DashboardPage
