import { ComponentProps } from "react";

interface DiamondsProps extends ComponentProps<"svg"> {}

export function Diamonds(props: DiamondsProps) {
  return (
    <svg
      viewBox="0 0 55 55"
      {...props}
    >
      <path d="M26.6596 0C29.2151 4.33551 32.3522 8.97944 36.0796 13.9406C40.3799 19.6772 43.8518 24.0215 46.4954 26.9736C44.3717 29.2118 40.8998 33.5385 36.0796 39.9713C32.1759 45.188 29.0477 49.8672 26.7037 54C25.9282 52.5108 24.8708 50.7748 23.5225 48.7921C21.1961 45.3466 18.3146 41.346 14.8779 36.7901C14.1289 35.7856 11.5029 32.5163 7 26.9824C9.89915 23.6867 13.6266 18.9811 18.1913 12.8655C21.5751 8.33616 24.4037 4.04471 26.6684 0L26.6596 0Z" />
    </svg>
  );
}
