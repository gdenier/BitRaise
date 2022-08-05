import { UserProfile } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import { useQuery } from '@redwoodjs/web'

const QUERY_USER_PROFILE = gql`
  {
    userProfile {
      id
      firstName
      lastName
      nickName
      isEarly
      supabaseUid
    }
  }
`

interface useUserProfileReturnValue {
  profile: UserProfile
  isLoading: boolean
}

export const useUserProfile = (): useUserProfileReturnValue => {
  const { currentUser } = useAuth()

  if (currentUser === undefined)
    throw new Error('This user is not authenticated')

  const response = useQuery(QUERY_USER_PROFILE)

  return { profile: response.data?.userProfile, isLoading: response.loading }
}
