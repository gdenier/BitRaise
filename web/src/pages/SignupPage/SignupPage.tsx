import { useState } from 'react'

import { SupabaseClient } from '@supabase/supabase-js'

import { useAuth } from '@redwoodjs/auth'
import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'

// const CREATE_PROFILE = gql`
//   mutation CreateUserProfile($input:  !) {
//     createUserProfile(input: $input) {
//       id
//     }
//   }
// `

const SignupPage = () => {
  const { client } = useAuth() as { client: SupabaseClient }
  const [error, setError] = useState(null)

  const onSubmit = async (data) => {
    setError(null)

    try {
      const response = await client.auth.signUp(data)

      if (!response?.error?.message) {
        window.location.href = routes.createProfile()
        return
      }
      setError(response.error.message)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <h1>Sign Up</h1>
      <Form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <TextField name="email" placeholder="email" />
        <PasswordField name="password" placeholder="password" />
        <Submit>Sign Up</Submit>
      </Form>
    </>
  )
}

export default SignupPage
