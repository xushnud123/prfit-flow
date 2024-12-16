"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Add, Payment, Transaction } from "../icons";
import Link from "next/link";
import cn from "@/lib/cn";
import { usePathname } from "next/navigation";
import { MenuToggle } from "./toggle";

const routerData = [
  {
    path: "/",
    text: "Transactions",
    icon: <Transaction className='size-8' />,
  },
  {
    path: "/add-transaction",
    text: "Add Transactions",
    icon: <Add className='size-8' />,
  },
  {
    path: "/value-conversion",
    text: "Value Conversion",
    icon: <Payment className='size-10' />,
  },
];
const motionVariants = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut",
      type: "spring",
    },
  },
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0,
      duration: 0,
    },
  },
};

const listItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
};
const Navbar = () => {
  const pathname = usePathname();
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  return (
    <div
      className={`w-full z-[1] fixed top-0 bg-gray-900 transition-all duration-500 ${
        burgerMenuActive ? "h-screen" : "h-[60px]"
      }`}
    >
      <div className='absolute top-0 max-w-7xl w-full px-4 justify-between mx-auto flex items-center h-[60px]'>
        <button className='bg-transparent border-none text-gray-400 text-xl transition-colors duration-500 hover:text-white'>
          Profit Flow
        </button>

        <motion.nav
          initial={false}
          animate={burgerMenuActive ? "open" : "closed"}
          custom='100%'
        >
          {" "}
          <MenuToggle toggle={() => setBurgerMenuActive(!burgerMenuActive)} />
        </motion.nav>
      </div>
      <div
        className={cn(
          "absolute top-[30vh] left-[20vw]",
          burgerMenuActive && "overflow-visible"
        )}
      >
        <motion.ul
          animate={burgerMenuActive ? "open" : "closed"}
          variants={motionVariants}
          className='list-none flex flex-col gap-10'
        >
          {routerData.map((item) => (
            <motion.li
              variants={listItemVariants}
              className='list-none'
              key={item.text}
              onClick={() => setBurgerMenuActive(!burgerMenuActive)}
            >
              <Link
                href={item.path}
                className={cn(
                  "px-4 py-2 flex items-center gap-6 text-2xl transition-all duration-150 rounded-md hover:bg-[#e4ffe0] hover:text-black",
                  pathname === item.path &&
                    "bg-[#c8f8b7] text-[#336633]  font-semibold hover:bg-[#c8f8b7]"
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

export default Navbar;
