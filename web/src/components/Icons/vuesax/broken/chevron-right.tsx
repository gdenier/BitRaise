import { ReactElement } from 'react'

import { WithClassName } from 'src/domain/WithClassName'

export const ChevronRightBrokenIcon = ({
  className,
}: WithClassName): ReactElement => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? 'h-7 w-7'}
    >
      <path
        d="M12.9 7.94L15.52 10.56C16.29 11.33 16.29 12.59 15.52 13.36L9 19.87"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 4.04001L10.04 5.08001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
