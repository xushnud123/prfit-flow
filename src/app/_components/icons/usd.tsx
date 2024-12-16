import cn from "@/lib/cn";
import { FC } from "react";

interface UsdProps {
  className?: string;
}

const Usd: FC<UsdProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 48 48'
      className={cn("w-12", className)}
    >
      <rect width='48' height='48' fill='#ffffff' />
      <rect width='48' height='16' fill='#b22234' />
      <rect y='16' width='48' height='16' fill='#ffffff' />
      <rect y='32' width='48' height='16' fill='#b22234' />
      <rect width='20' height='24' fill='#3c3b6e' />
      <g fill='#ffffff'>
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={3 + col * 4}
              cy={3 + row * 4}
              r='1'
            />
          ))
        )}
      </g>
    </svg>
  );
};

export default Usd;
