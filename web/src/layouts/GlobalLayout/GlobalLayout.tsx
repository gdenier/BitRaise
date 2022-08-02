import AuthNavigation from 'src/components/auth/AuthNavigation/AuthNavigation'

type GlobalLayoutProps = {
  children?: React.ReactNode
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <>
      <header>
        <AuthNavigation />
      </header>
      <main>{children}</main>
    </>
  )
}

export default GlobalLayout
