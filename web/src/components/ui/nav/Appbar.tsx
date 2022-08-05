import { ReactElement } from 'react'

import { NavLink, routes } from '@redwoodjs/router'

export const Appbar = (): ReactElement => {
  return (
    <div className="btm-nav" style={{ boxShadow: '15px 15px 20px 1px' }}>
      <NavLink
        to={routes.home()}
        className="text-primary"
        activeClassName="active"
      >
        <i className="emoji-house block w-9 h-9 p-0 translate-y-0" />
      </NavLink>
      <NavLink
        to={routes.transactions()}
        className="text-primary"
        activeClassName="active"
      >
        <i className="emoji-money-mouth-face-bitcoin block w-9 h-9 p-0 translate-y-0" />
      </NavLink>
      <NavLink
        to={routes.stats()}
        className="text-primary"
        activeClassName="active"
      >
        <i className="emoji-face-with-monocle block w-9 h-9 p-0 translate-y-0" />
      </NavLink>
      <NavLink
        to={routes.profile()}
        className="text-primary"
        activeClassName="active"
      >
        <i className="emoji-slightly-smiling-face block w-9 h-9 p-0 translate-y-0" />
      </NavLink>
    </div>
  )
}
