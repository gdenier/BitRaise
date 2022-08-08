import { MetaTags } from '@redwoodjs/web'

import { SignoutButton } from 'src/components/auth/SignoutButton'

const EarlyPage = () => {
  return (
    <>
      <MetaTags title="Early" description="Early page" />

      <div className="flex h-screen flex-col items-center justify-center gap-8 px-2">
        <i className="emoji-clock h-24 w-24" />
        <h1 className="text-2xl font-medium">A little more time</h1>
        <p>
          BitRaise is not yet available, we will inform you when the application
          becomes available for you.
        </p>
        {/* <p>
          To wait you can follow the developments on{' '}
          <a href="#" className="text-primary">
            Twitter
          </a>
        </p> */}
        <SignoutButton />
      </div>
    </>
  )
}

export default EarlyPage
