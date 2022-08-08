import { ReactElement } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, NavLink, routes } from '@redwoodjs/router'

import { ActivityBrokenIcon } from 'src/components/Icons/vuesax/broken/activity'
import { ArrowLeftBrokenIcon } from 'src/components/Icons/vuesax/broken/arrow-left'
import { CategoryBrokenIcon } from 'src/components/Icons/vuesax/broken/category'
import { LogoutBrokenIcon } from 'src/components/Icons/vuesax/broken/logout'
import { ReceiptItemBrokenIcon } from 'src/components/Icons/vuesax/broken/receipt-item'
import { useUserProfile } from 'src/hooks/profile/useUserProfile'
import { classNames } from 'src/utils/style/classNames'

import { useSidebarState } from './hooks/useSidebarState'

export const SideBar = (): ReactElement => {
  const { profile } = useUserProfile()
  const { isOpen, toggle } = useSidebarState()

  const { logOut } = useAuth()

  const signOut = async () => {
    await logOut()
    navigate(routes.signin())
  }

  return (
    <div className="hidden h-screen flex-col items-stretch gap-8 bg-gray-100 px-4 py-8 md:flex">
      {/* Header */}
      <div className="flex items-center justify-between">
        {isOpen && (
          <Link
            to={routes.dashboard()}
            className="group btn btn-ghost text-xl normal-case hover:bg-transparent hover:text-gray-900"
          >
            BitRaise
          </Link>
        )}
        <button
          className={classNames(
            'btn btn-ghost hover:bg-gray-200',
            !isOpen && 'rotate-180'
          )}
          onClick={toggle}
        >
          <ArrowLeftBrokenIcon />
        </button>
      </div>

      {/* Links */}
      <div className="flex h-full flex-col gap-2">
        <NavLink
          to={routes.dashboard()}
          className="btn btn-ghost justify-start gap-3 bg-gray-100 hover:bg-gray-200"
          activeClassName="!btn-primary text-white"
        >
          <CategoryBrokenIcon />
          {isOpen && 'Dashboard'}
        </NavLink>
        <NavLink
          to={routes.transactions()}
          className="btn btn-ghost justify-start gap-3 bg-gray-100 hover:bg-gray-200"
          activeClassName="!btn-primary text-white"
        >
          <ReceiptItemBrokenIcon />
          {isOpen && 'Transactions'}
        </NavLink>
        <NavLink
          to={routes.stats()}
          className="btn btn-ghost justify-start gap-3 bg-gray-100 hover:bg-gray-200"
          activeClassName="!btn-primary text-white"
        >
          <ActivityBrokenIcon />
          {isOpen && 'Analytics'}
        </NavLink>
      </div>

      {/* Footer */}
      <button
        className={classNames(
          'flex items-center gap-2 rounded-xl p-3 hover:bg-gray-200',
          isOpen && 'w-56'
        )}
        onClick={signOut}
      >
        {/* <Thumbnail /> */}
        {isOpen && (
          <img
            src={`https://ui-avatars.com/api/?name=${
              `${profile?.nickName}` ??
              `${profile?.firstName}+${profile?.lastName}`
            }&background=570DF8&color=fff`}
            alt="initial of your name on a blue background"
            className="w-12 rounded-xl"
          />
        )}
        <div className="flex w-full items-center justify-between">
          {isOpen && (
            <p>
              {profile?.nickName ??
                `${profile?.firstName} ${profile?.lastName}`}
            </p>
          )}
          <LogoutBrokenIcon />
        </div>
      </button>
    </div>
  )
}
