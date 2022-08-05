import { MetaTags } from '@redwoodjs/web'

import SignoutButton from 'src/components/auth/SignoutButton/SignoutButton'

const EarlyPage = () => {
  return (
    <>
      <MetaTags title="Early" description="Early page" />

      <div className="flex flex-col gap-8 px-2 justify-center items-center h-screen">
        <i className="emoji-clock w-24 h-24" />
        <h1 className="font-medium text-2xl">A little more time</h1>
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
