import { useState } from 'react'

import { SupabaseClient } from '@supabase/supabase-js'

import { useAuth } from '@redwoodjs/auth'
import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'

const SignupPage = () => {
  const { client } = useAuth() as { client: SupabaseClient }
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState<boolean>(false)

  const onSubmit = async (data) => {
    setLoading(true)
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
    setLoading(false)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-8 w-full max-w-xs">
        <i className="emoji-hugging-face block w-24 h-24" />
        <h1 className="text-4xl font-medium">Sign up</h1>
        <Form onSubmit={onSubmit} className="flex flex-col w-full  gap-4">
          <div className="flex flex-col w-full">
            <div className="form-control w-full">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <TextField
                name="email"
                placeholder="email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full">
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <PasswordField
                name="password"
                placeholder="password"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          {error && (
            <div className="alert alert-error">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}
          <Submit className={'btn btn-primary ' + (isLoading ? 'loading' : '')}>
            {isLoading ? 'Signing Up' : 'Sign Up'}
          </Submit>
        </Form>
        <div className="flex gap-2">
          <p>Already have an account ?</p>
          <Link to={routes.signin()} className="text-primary font-medium">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
