import cn from "@/lib/cn";
import { FC } from "react";

interface UpProps {
  className?: string;
}

const Up: FC<UpProps> = ({ className }) => {
  return (
    <svg
      className={cn("size-6", className)}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.15978 14.1336C5.36213 13.9457 5.6785 13.9574 5.8664 14.1598L12 20.7652L18.1336 14.1598C18.3215 13.9574 18.6379 13.9457 18.8402 14.1336C19.0426 14.3215 19.0543 14.6379 18.8664 14.8402L12.3664 21.8402C12.2718 21.9421 12.139 22 12 22C11.861 22 11.7282 21.9421 11.6336 21.8402L5.13361 14.8402C4.9457 14.6379 4.95742 14.3215 5.15978 14.1336Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 21C11.7239 21 11.5 20.7761 11.5 20.5L11.5 2.5C11.5 2.22386 11.7239 2 12 2C12.2761 2 12.5 2.22386 12.5 2.5L12.5 20.5C12.5 20.7761 12.2761 21 12 21Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default Up;
