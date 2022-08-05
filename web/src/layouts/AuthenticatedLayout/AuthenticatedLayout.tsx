import { NavLink, routes } from '@redwoodjs/router'

import { ActivityBrokenIcon } from 'src/components/Icons/vuesax/broken/activity'
import { House2BrokenIcon } from 'src/components/Icons/vuesax/broken/house-2'
import { ReceiptItemBrokenIcon } from 'src/components/Icons/vuesax/broken/receipt-item'
import { Setting2BrokenIcon } from 'src/components/Icons/vuesax/broken/setting-2'
import { useIsIos } from 'src/hooks/useIsIos'
import { classNames } from 'src/utils/style/classNames'

type AuthenticatedLayoutProps = {
  children?: React.ReactNode
}

const AuthenticatedLayout = ({ children }: AuthenticatedLayoutProps) => {
  const isIos = useIsIos()

  return (
    <div className="grid grid-rows-[1fr_auto] h-screen">
      <main className="h-full overflow-x-hidden overflow-y-auto">
        {children}
      </main>
      <nav
        className={classNames(
          'flex w-full gap-2 justify-center p-2 shadow-[0px_15px_20px_1px]',
          isIos && 'pb-6'
        )}
      >
        <NavLink
          to={routes.home()}
          className="p-3 rounded-xl bg-gray-100"
          activeClassName="!bg-primary text-white px-12"
        >
          <House2BrokenIcon />
        </NavLink>
        <NavLink
          to={routes.transactions()}
          className="p-3 rounded-xl bg-gray-100"
          activeClassName="!bg-primary text-white px-12"
        >
          <ReceiptItemBrokenIcon />
        </NavLink>
        <NavLink
          to={routes.stats()}
          className="p-3 rounded-xl bg-gray-100"
          activeClassName="!bg-primary text-white px-12"
        >
          <ActivityBrokenIcon />
        </NavLink>
        <NavLink
          to={routes.profile()}
          className="p-3 rounded-xl bg-gray-100"
          activeClassName="!bg-primary text-white px-12"
        >
          <Setting2BrokenIcon />
        </NavLink>
      </nav>
    </div>
  )
}

export default AuthenticatedLayout
