import cn from "@/lib/cn";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Add, Payment, Transaction } from "../icons";
import { usePathname } from "next/navigation";
import {
  childVariants,
  containerVariants,
} from "../transactions/transactions-table-body";

const routerData = [
  {
    path: "/",
    text: "Transactions",
    icon: <Transaction />,
  },
  {
    path: "/add-transaction",
    text: "Add Transactions",
    icon: <Add />,
  },
  {
    path: "/value-conversion",
    text: "Value Conversion",
    icon: <Payment />,
  },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className='h-full w-full bg-gray-800/60 rounded-2xl overflow-hidden text-white flex flex-col'>
      <div className='flex items-center justify-center h-16 bg-gray-900 text-xl font-bold'>
        Profit Flow
      </div>

      <div className='flex-1 p-4'>
        <motion.ul
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='space-y-4'
        >
          {routerData.map((item) => (
            <motion.li
              variants={childVariants}
              className='list-none'
              key={item.text}
            >
              <Link
                href={item.path}
                className={cn(
                  "px-4 py-2 flex items-center gap-6 text-base transition-all duration-150 rounded-md hover:bg-[#e4ffe0] hover:text-black",
                  pathname === item.path &&
                    "bg-[#c8f8b7] text-[#336633] font-semibold hover:bg-[#c8f8b7]"
                )}
              >
                {item.icon}
                <p className='w-full text-ellipsis whitespace-nowrap overflow-hidden'>
                  {item.text}
                </p>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Sidebar;
