import { ReactElement } from 'react'

import { WithClassName } from 'src/domain/WithClassName'

export const ArrowLeftBrokenIcon = ({
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
        d="M12.7801 6.31005C15.6501 4.66005 18.0001 6.01005 18.0001 9.33005V12V14.67C18.0001 17.98 15.6501 19.34 12.7801 17.68L10.4701 16.34L8.16007 15C5.29007 13.34 5.29007 10.63 8.16007 8.97005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
