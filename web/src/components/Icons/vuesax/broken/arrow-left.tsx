import { ReactElement } from "react";
import { WithClassName } from "~/domain/WithClassName";

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
      className={className ?? "w-7 h-7"}
    >
      <path
        d="M11.1899 7.94L8.56993 10.56C7.79993 11.33 7.79993 12.59 8.56993 13.36L15.0899 19.88"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.09 4.04001L14.05 5.08001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
