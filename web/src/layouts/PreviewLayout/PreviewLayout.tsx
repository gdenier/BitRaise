import { navigate, routes } from '@redwoodjs/router'

import { useUserProfile } from 'src/hooks/profile/useUserProfile'

type PreviewLayoutProps = {
  children?: React.ReactNode
}

const PreviewLayout = ({ children }: PreviewLayoutProps) => {
  const { profile, isLoading } = useUserProfile()

  if (isLoading) return <>Loading...</>

  if (profile == null) {
    navigate(routes.createProfile())
  }

  if (!profile?.isEarly) navigate(routes.early())

  return <>{children}</>
}

export default PreviewLayout
