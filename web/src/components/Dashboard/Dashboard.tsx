import AuthenticatedLayout from 'src/layouts/AuthenticatedLayout/AuthenticatedLayout'

const Dashboard = () => {
  return (
    <AuthenticatedLayout>
      <div>
        <h2>{'Dashboard'}</h2>
        <p>{'Find me in ./web/src/components/Dashboard/Dashboard.tsx'}</p>
      </div>
    </AuthenticatedLayout>
  )
}

export default Dashboard
