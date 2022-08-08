import { Form, Submit, TextField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import {
  FormCreateUserProfileInput,
  useProfileCrud,
} from 'src/hooks/profile/useProfileCrud'

const CreateProfilePage = () => {
  const {
    create: { isLoading, error, callback: create },
  } = useProfileCrud()

  const onSubmit = async (input: FormCreateUserProfileInput) => {
    await create(input)
    navigate(routes.dashboard())
  }

  return (
    <>
      <MetaTags title="Create Profile" description="CreateProfile page" />

      <div className="flex h-screen items-center justify-center">
        <div className="flex w-full max-w-xs flex-col items-center gap-8">
          <i className="emoji-hugging-face block h-24 w-24" />
          <h1 className="text-4xl font-medium">One more step</h1>
          <Form onSubmit={onSubmit} className="flex w-full flex-col  gap-4">
            <div className="flex w-full flex-col">
              <div className="form-control w-full">
                <label htmlFor="firstName" className="label">
                  <span className="label-text">Firstname</span>
                </label>
                <TextField
                  name="firstName"
                  placeholder="firstName"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="lastName" className="label">
                  <span className="label-text">Lastname</span>
                </label>
                <TextField
                  name="lastName"
                  placeholder="lastName"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="nickName" className="label">
                  <span className="label-text">Nickname</span>
                </label>
                <TextField
                  name="nickName"
                  placeholder="nickName"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            {error && (
              <div className="alert alert-error">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-shrink-0 stroke-current"
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
            <Submit
              className={'btn btn-primary ' + (isLoading ? 'loading' : '')}
            >
              {isLoading ? 'Creation' : 'Create'}
            </Submit>
          </Form>
          <button disabled={isLoading} onClick={() => onSubmit({})}>
            Skip
          </button>
        </div>
      </div>
    </>
  )
}

export default CreateProfilePage
