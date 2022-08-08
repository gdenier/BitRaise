import { Appbar } from 'src/components/ui/nav/Appbar'
import { SideBar } from 'src/components/ui/nav/SideBar'

type AuthenticatedLayoutProps = {
  children?: React.ReactNode
}

const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  return (
    <div className="grid h-screen grid-rows-[1fr_auto] md:grid-cols-[auto_1fr] md:grid-rows-1">
      <SideBar />
      <main className="h-full overflow-y-auto overflow-x-hidden">
        {children}
      </main>
      <Appbar />
    </div>
  )
}

export default AuthenticatedLayout
