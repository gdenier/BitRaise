import { ReactElement, ReactNode, useMemo } from 'react'

import { WithClassName } from 'src/domain/WithClassName'
import { classNames } from 'src/utils/style/classNames'

export interface WrapperProps {
  children: ReactNode
}

const Wrapper = ({ children }: WrapperProps): ReactElement => {
  return <ul className="flex w-full flex-col gap-[1px]">{children}</ul>
}

export interface HeaderProps {
  headers: (string | string[])[]
}

const Header = ({ headers }: HeaderProps): ReactElement => {
  const uniqueId = useMemo(() => Math.random() * 100, [])

  return (
    <header className="mb-2 flex w-full gap-2 rounded-xl bg-neutral p-1 text-neutral-content">
      {headers.map((header, index) => (
        <Cell key={`list-header-${uniqueId}-${index}`}>
          <p className="text-lg font-bold">{header}</p>
        </Cell>
      ))}
    </header>
  )
}

export interface RowProps extends WithClassName {
  children: ReactNode
}

const Row = ({ children, className }: RowProps): ReactElement => {
  return (
    <li
      className={classNames(
        'list-row flex w-full items-center gap-2 rounded-xl p-2',
        className
      )}
    >
      {children}
    </li>
  )
}

export interface CellProps {
  children: ReactNode
  grow?: number
}

const Cell = ({ children, grow = 1 }: CellProps): ReactElement => {
  return (
    <div style={{ flex: `${grow} ${grow} 0` }} className="flex overflow-hidden">
      {children}
    </div>
  )
}

export const List = { Wrapper, Header, Row, Cell }
