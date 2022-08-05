import SignoutButton from 'src/components/auth/SignoutButton/SignoutButton'

type AuthenticatedLayoutProps = {
  children?: React.ReactNode
}

const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  return (
    <>
      <header>
        <SignoutButton />
      </header>
      <main>{children}</main>
    </>
  )
}

export default AuthenticatedLayout
