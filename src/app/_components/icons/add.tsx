import cn from "@/lib/cn";
import { FC } from "react";

interface AddProps {
  className?: string;
}

const Add: FC<AddProps> = ({ className }) => {
  return (
    <svg
      className={cn("w-6", className)}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_2_321)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12 0C12.2761 0 12.5 0.223858 12.5 0.5V23.5C12.5 23.7761 12.2761 24 12 24C11.7239 24 11.5 23.7761 11.5 23.5V0.5C11.5 0.223858 11.7239 0 12 0Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0 12C0 11.7239 0.223858 11.5 0.5 11.5H23.5C23.7761 11.5 24 11.7239 24 12C24 12.2761 23.7761 12.5 23.5 12.5H0.5C0.223858 12.5 0 12.2761 0 12Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_2_321'>
          <rect width='24' height='24' fill='currentColor' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Add;
