import cn from "@/lib/cn";
import { FC } from "react";

interface TransactionProps {
  className?: string;
}

const Transaction: FC<TransactionProps> = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      className={cn("w-6", className)}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2 7C2 6.72386 2.22386 6.5 2.5 6.5H20.5C20.7761 6.5 21 6.72386 21 7C21 7.27614 20.7761 7.5 20.5 7.5H2.5C2.22386 7.5 2 7.27614 2 7Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.1283 2.16552C16.3131 1.96027 16.6292 1.94363 16.8345 2.12836L21.8345 6.62836C21.9398 6.72318 22 6.85826 22 7C22 7.14175 21.9398 7.27683 21.8345 7.37165L16.8345 11.8717C16.6292 12.0564 16.3131 12.0397 16.1283 11.8345C15.9436 11.6292 15.9603 11.3131 16.1655 11.1284L20.7526 7L16.1655 2.87165C15.9603 2.68692 15.9436 2.37078 16.1283 2.16552Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3 17C3 16.7239 3.22386 16.5 3.5 16.5H21.5C21.7761 16.5 22 16.7239 22 17C22 17.2761 21.7761 17.5 21.5 17.5H3.5C3.22386 17.5 3 17.2761 3 17Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.87165 12.1655C8.05638 12.3708 8.03974 12.6869 7.83448 12.8717L3.24742 17L7.83448 21.1284C8.03974 21.3131 8.05638 21.6292 7.87165 21.8345C7.68692 22.0397 7.37077 22.0564 7.16552 21.8717L2.16552 17.3717C2.06016 17.2768 2 17.1417 2 17C2 16.8583 2.06016 16.7232 2.16552 16.6284L7.16552 12.1284C7.37077 11.9436 7.68692 11.9603 7.87165 12.1655Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default Transaction;
