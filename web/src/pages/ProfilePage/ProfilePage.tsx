import { MetaTags } from '@redwoodjs/web'

import SignoutButton from 'src/components/auth/SignoutButton/SignoutButton'

const ProfilePage = () => {
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <h1>ProfilePage</h1>
      <SignoutButton />
    </>
  )
}

export default ProfilePage
