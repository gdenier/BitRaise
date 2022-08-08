import { useCallback } from 'react'

import { ApolloError } from '@apollo/client'
import { CreateUserProfileInput, UserProfile } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const CREATE_PROFILE = gql`
  mutation CreateUserProfile($input: CreateUserProfileInput!) {
    createUserProfile(input: $input) {
      id
    }
  }
`

export type FormCreateUserProfileInput = Omit<
  CreateUserProfileInput,
  'supabaseUid'
>

interface useProfileCrudReturnValue {
  create: {
    callback: (input: FormCreateUserProfileInput) => Promise<UserProfile>
    isLoading: boolean
    error: ApolloError
  }
}

export const useProfileCrud = (): useProfileCrudReturnValue => {
  const { currentUser } = useAuth()

  const [createProfile, { loading, error }] = useMutation<
    UserProfile,
    { input: CreateUserProfileInput }
  >(CREATE_PROFILE, {
    onCompleted: () => {
      toast.success('Votre compte est pret')
      navigate(routes.dashboard())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  return {
    create: {
      callback: useCallback(
        async (input) => {
          if (!currentUser?.sub) throw new Error('the user must be connected')
          return (
            await createProfile({
              variables: {
                input: {
                  ...input,
                  supabaseUid: currentUser?.sub,
                },
              },
            })
          ).data
        },
        [createProfile, currentUser?.sub]
      ),
      isLoading: loading,
      error,
    },
  }
}
