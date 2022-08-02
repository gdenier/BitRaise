import { Toaster } from '@redwoodjs/web/toast'

import AuthNavigation from 'src/components/auth/AuthNavigation/AuthNavigation'

type GlobalLayoutProps = {
  children?: React.ReactNode
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <>
      <Toaster />
      <header>
        <AuthNavigation />
      </header>
      <main>{children}</main>
    </>
  )
}

export default GlobalLayout
