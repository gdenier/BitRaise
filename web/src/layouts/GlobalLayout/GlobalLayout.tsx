import { Toaster } from '@redwoodjs/web/toast'

type GlobalLayoutProps = {
  children?: React.ReactNode
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <>
      {/* <Toaster /> */}
      {children}
    </>
  )
}

export default GlobalLayout
