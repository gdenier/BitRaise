import { ReactElement } from 'react'

import { Link, routes } from '@redwoodjs/router'

const LandingNav = (): ReactElement => {
  return (
    <header className="navbar absolute pr-6">
      <div className="flex-1">
        <Link
          to={routes.home()}
          className="btn btn-ghost normal-case text-4xl group hover:bg-transparent"
        >
          <span className="group-hover:text-gray-900">Bit</span>
          <span className="text-primary group-hover:text-primary-focus">
            Raise
          </span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 gap-2">
          <li>
            <Link to={routes.signin()}>SignIn</Link>
          </li>
          <li>
            <Link
              to={routes.signup()}
              className="btn btn-primary text-primary-content"
            >
              SignUp
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default LandingNav
