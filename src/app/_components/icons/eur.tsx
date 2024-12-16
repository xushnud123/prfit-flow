import cn from "@/lib/cn";
import { FC } from "react";

interface EurProps {
  className?: string;
}

const Eur: FC<EurProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 48 48'
      className={cn("w-12", className)}
    >
      <rect width='48' height='48' fill='#003399' />
      <g fill='#ffd700'>
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          return (
            <circle
              key={i}
              cx={24 + 12 * Math.cos(angle)}
              cy={24 + 12 * Math.sin(angle)}
              r='2'
            />
          );
        })}
      </g>
    </svg>
  );
};

export default Eur;
