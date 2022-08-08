import { ReactElement } from 'react'

import { NavLink, routes } from '@redwoodjs/router'

import { ActivityBrokenIcon } from 'src/components/Icons/vuesax/broken/activity'
import { House2BrokenIcon } from 'src/components/Icons/vuesax/broken/house-2'
import { ReceiptItemBrokenIcon } from 'src/components/Icons/vuesax/broken/receipt-item'
import { Setting2BrokenIcon } from 'src/components/Icons/vuesax/broken/setting-2'
import { useIsIos } from 'src/hooks/useIsIos'
import { classNames } from 'src/utils/style/classNames'

export const Appbar = (): ReactElement => {
  const isIos = useIsIos()

  return (
    <nav
      className={classNames(
        'flex w-full justify-center gap-2 p-2 shadow-[0px_15px_20px_1px] md:hidden',
        isIos && 'pb-6'
      )}
    >
      <NavLink
        to={routes.dashboard()}
        className="rounded-xl bg-gray-100 p-3"
        activeClassName="!bg-primary text-white px-12"
      >
        <House2BrokenIcon />
      </NavLink>
      <NavLink
        to={routes.transactions()}
        className="rounded-xl bg-gray-100 p-3"
        activeClassName="!bg-primary text-white px-12"
      >
        <ReceiptItemBrokenIcon />
      </NavLink>
      <NavLink
        to={routes.stats()}
        className="rounded-xl bg-gray-100 p-3"
        activeClassName="!bg-primary text-white px-12"
      >
        <ActivityBrokenIcon />
      </NavLink>
      <NavLink
        to={routes.profile()}
        className="rounded-xl bg-gray-100 p-3"
        activeClassName="!bg-primary text-white px-12"
      >
        <Setting2BrokenIcon />
      </NavLink>
    </nav>
  )
}
