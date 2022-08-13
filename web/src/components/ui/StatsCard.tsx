import { cloneElement, ReactElement, ReactNode, useMemo } from 'react'

import { WithClassName } from 'src/domain/WithClassName'
import { classNames } from 'src/utils/style/classNames'

export interface StatsCardProps extends WithClassName {
  title: string
  value: number
  icon?: ReactNode
}

export const StatsCard = ({
  title,
  value,
  className,
  icon,
}: StatsCardProps): ReactElement => {
  const textColor = useMemo(
    () => (value > 0 ? 'text-success' : value < 0 ? 'text-error' : ''),
    [value]
  )
  return (
    <div
      className={classNames(
        'grid gap-x-4 gap-y-2 rounded-xl bg-gray-100 p-4',
        icon ? 'grid-cols-[auto_1fr]' : 'grid-cols-1',
        className
      )}
    >
      {icon && (
        <div
          className={classNames(
            'row-span-2 h-9 w-9 place-self-center',
            textColor
          )}
        >
          {cloneElement(icon as ReactElement, { className: 'w-full h-full' })}
        </div>
      )}
      <p className="text-lg font-medium">{title}</p>
      <p className={classNames('text-xl font-bold', textColor)}>
        {value?.toLocaleString(navigator.language, {
          style: 'currency',
          currency: 'Eur',
        })}
      </p>
    </div>
  )
}
