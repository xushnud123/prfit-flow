"use client";
import { FC, useEffect, useState } from "react";
import { Profit, Up } from "./icons";
import { useTransactionStore } from "@/store/transactionStore";
import { motion } from "framer-motion";
import useConversions from "@/modules/hooks/use-conversions";

interface OverviewProps {}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const Overview: FC<OverviewProps> = ({}) => {
  const { data, isLoading } = useConversions();
  const { transactions } = useTransactionStore();
  const [financialData, setFinancialData] = useState(
    {} as {
      balanceExpense: number;
      balanceIncome: number;
      expenses: number;
      revenues: number;
    }
  );

  const convertToUSD = (
    amount: number,
    currency: string,
    EUR: number,
    UZS: number
  ): number => {
    if (currency === "EUR") {
      return amount / EUR;
    } else if (currency === "UZS") {
      return amount / UZS;
    } else {
      return amount;
    }
  };

  useEffect(() => {
    if (data.conversion_rates?.EUR && transactions) {
      let balanceIncome = 0;
      let balanceExpense = 0;
      transactions.forEach((item) => {
        if (item.type === "Income") {
          balanceIncome += convertToUSD(
            item.amount,
            item.currency,
            data.conversion_rates?.EUR || 1,
            data.conversion_rates?.UZS || 1
          );
        } else {
          balanceExpense += convertToUSD(
            item.amount,
            item.currency,
            data.conversion_rates?.EUR,
            data.conversion_rates?.UZS
          );
        }
      });
      setFinancialData({
        balanceExpense: Number(balanceExpense.toFixed(2)),
        balanceIncome: Number(balanceIncome.toFixed(2)),
        expenses: transactions.filter((item) => item.type !== "Income").length,
        revenues: transactions.filter((item) => item.type === "Income").length,
      });
    }
  }, [isLoading, transactions]);

  return (
    <div className='block'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='flex gap-3 w-full overflow-x-auto'
      >
        <motion.div
          variants={childVariants}
          className='rounded-2xl min-w-[200px] transition-all duration-150 w-full h-[169px] bg-[#e4ffe0] hover:bg-[#c8f8b7] p-4'
        >
          <div className=' w-9 h-9 bg-[#252424] rounded-full flex justify-center items-center'>
            <Up />
          </div>
          <div className='text-[#696969] my-3 text-sm font-medium leading-[17.50px]'>
            Revenue
          </div>
          <div className=' text-[#252424] text-2xl font-bold leading-[30px]'>
            {financialData.balanceIncome} USD
          </div>
          <div className='mt-3'>
            <span className='text-[#3e3e3e] text-[10px] font-normal leading-3'>
              Unit Number:
            </span>
            &nbsp;
            <span className='text-[#3e3e3e] text-[10px] font-semibold leading-3'>
              {financialData.revenues}
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={childVariants}
          className='rounded-2xl min-w-[200px] transition-all duration-150 w-full h-[169px] bg-[#ffe0e0] p-4 hover:bg-[#ffb3b3]'
        >
          <div className=' w-9 h-9 bg-[#252424] rounded-full flex justify-center items-center'>
            <Up className='rotate-180' />
          </div>
          <div className='text-[#696969] my-3 text-sm font-medium leading-[17.50px]'>
            Expense
          </div>
          <div className=' text-[#252424] text-2xl font-bold leading-[30px]'>
            {financialData.balanceExpense} USD
          </div>
          <div className='mt-3'>
            <span className='text-[#3e3e3e] text-[10px] font-normal leading-3'>
              Unit Number:
            </span>
            &nbsp;
            <span className='text-[#3e3e3e] text-[10px] font-semibold leading-3'>
              {financialData.expenses}
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={childVariants}
          className='rounded-2xl min-w-[200px] w-full h-[169px] transition-all duration-150 hover:bg-[#c3d5ff] bg-[#e0e9ff] p-4'
        >
          <div className=' w-9 h-9 bg-[#252424] rounded-full flex justify-center items-center'>
            <Profit />
          </div>
          <div className='text-[#696969] my-3 text-sm font-medium leading-[17.50px]'>
            Profit
          </div>
          <div className=' text-[#252424] text-2xl font-bold leading-[30px]'>
            {financialData.balanceIncome - financialData.balanceExpense} USD
          </div>
          <div className='mt-3'>
            <span className='text-[#3e3e3e] text-[10px] font-normal leading-3'>
              Unit Number:
            </span>
            &nbsp;
            <span className='text-[#3e3e3e] text-[10px] font-semibold leading-3'>
              {transactions.length}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Overview;
