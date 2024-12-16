import cn from "@/lib/cn";
import { FC } from "react";

interface CloseProps {
  className?: string;
}

const Close: FC<CloseProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={cn("size-8", className)}
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='m12 13.4l-2.9 2.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l2.9-2.9l-2.9-2.875q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l2.9 2.9l2.875-2.9q.275-.275.7-.275t.7.275q.3.3.3.713t-.3.687L13.375 12l2.9 2.9q.275.275.275.7t-.275.7q-.3.3-.712.3t-.688-.3z'
      />
    </svg>
  );
};

export default Close;