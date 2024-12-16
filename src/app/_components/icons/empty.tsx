import cn from "@/lib/cn";
import { FC } from "react";

interface EmptyProps {
  className?: string;
}

const Empty: FC<EmptyProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={cn("w-8", className)}
    >
      <path
        fill='currentColor'
        d='M23 18h-8v2h8M6 2a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h7.81c-.36-.62-.61-1.3-.73-2H6V4h7v5h5v4.08c.33-.05.67-.08 1-.08c.34 0 .67.03 1 .08V8l-6-6M8 12v2h8v-2m-8 4v2h5v-2Z'
      />
    </svg>
  );
};

export default Empty;