import { useAuth } from '@redwoodjs/auth'
import { Form, Submit, TextField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import {
  FormCreateUserProfileInput,
  useProfileCrud,
} from 'src/hooks/profile/useProfileCrud'

const CreateProfilePage = () => {
  const {
    create: { isLoading, callback: create },
  } = useProfileCrud()

  const onSubmit = async (input: FormCreateUserProfileInput) => {
    create(input)
  }

  const { isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags title="CreateProfile" description="CreateProfile page" />

      <Form onSubmit={onSubmit}>
        <TextField name="firstName" placeholder="firstname" />
        <TextField name="lastName" placeholder="lastname" />
        <TextField name="nickName" placeholder="nickname" />

        <Submit disabled={isLoading}>Save</Submit>
      </Form>

      <button disabled={isLoading} onClick={() => onSubmit({})}>
        Skip
      </button>
    </>
  )
}

export default CreateProfilePage
