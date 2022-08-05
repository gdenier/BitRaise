import { ReactElement } from "react";
import { WithClassName } from "~/domain/WithClassName";

export const Setting2BrokenIcon = ({
  className,
}: WithClassName): ReactElement => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? "w-7 h-7"}
    >
      <path
        d="M15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C12.41 15 12.81 14.92 13.17 14.76"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.87988 20.58L7.96988 21.21C8.75988 21.68 9.77988 21.4 10.2499 20.61L10.3599 20.42C11.2599 18.85 12.7399 18.85 13.6499 20.42L13.7599 20.61C14.2299 21.4 15.2499 21.68 16.0399 21.21L17.7699 20.22C18.6799 19.7 18.9899 18.53 18.4699 17.63C17.5599 16.06 18.2999 14.78 20.1099 14.78C21.1499 14.78 22.0099 13.93 22.0099 12.88V11.12C22.0099 10.08 21.1599 9.22001 20.1099 9.22001C19.0999 9.22001 18.4199 8.82001 18.1799 8.19001C17.9899 7.70001 18.0699 7.06001 18.4699 6.37001C18.9899 5.46001 18.6799 4.30001 17.7699 3.78001L16.9599 3.32001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.64 3.58C12.74 5.15 11.26 5.15 10.35 3.58L10.24 3.39C9.78 2.6 8.76 2.32 7.97 2.79L6.24 3.78C5.33 4.3 5.02 5.47 5.54 6.38C6.45 7.94 5.71 9.22 3.9 9.22C2.86 9.22 2 10.07 2 11.12V12.88C2 13.92 2.85 14.78 3.9 14.78C5.71 14.78 6.45 16.06 5.54 17.63"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
