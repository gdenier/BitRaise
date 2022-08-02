import { useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'

const SigninPage = () => {
  const { logIn } = useAuth()
  const [error, setError] = useState(null)

  const onSubmit = async (data) => {
    setError(null)
    try {
      const response = await logIn(data)
      if (!response?.error?.message) {
        navigate(routes.home())
        return
      }
      setError(response.error.message)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <h1>Sign In</h1>
      <Form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <TextField name="email" placeholder="email" />
        <PasswordField name="password" placeholder="password" />
        <Submit>Sign In</Submit>
      </Form>
    </>
  )
}

export default SigninPage
