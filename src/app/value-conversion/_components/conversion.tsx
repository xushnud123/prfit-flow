"use client";
import useConversions from "@/modules/hooks/use-conversions";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion";

interface ConversionProps {}

type ConvertValuta = "USD" | "EUR" | "UZS";
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
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const Conversion: FC<ConversionProps> = ({}) => {
  const { data, isLoading } = useConversions();
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState<ConvertValuta | any>("USD");
  const [to, setTo] = useState<ConvertValuta | any>("USD");
  const [result, setResult] = useState(0);

  const convertCurrency = () => {
    console.log(from, to);
    if (from === to) {
      setResult(Number(amount));
    } else {
      const fromRate = data.conversion_rates[from as ConvertValuta];
      const toRate = data.conversion_rates[to as ConvertValuta];
      const convertedAmount = (Number(amount) / fromRate) * toRate;
      setResult(convertedAmount);
    }
  };

  useEffect(() => {
    convertCurrency();
  }, [amount, from, to]);

  return (
    <motion.div
      className='block'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div variants={childVariants}>
        <h1 className='text-2xl text-white'>Exchange rates</h1>
        <p className='text-base text-gray-400 mt-2'>
          Against the dollar{" "}
          <span className='text-primary-500 font-semibold'>(1 USD)</span>
        </p>

        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center  border-b-[2px] py-2 px-3  border-gray-700'>
            <div>Flag</div>
            <div className='flex gap-3 items-center'>
              <div>Value</div>
              <div>Symbol</div>
            </div>
          </div>
          {isLoading ? (
            <div>
              <div className='flex items-center transition-all justify-between duration-150 hover:bg-gray-800 py-2 px-3 rounded-lg '>
                <div>
                  <Skeleton
                    width={32}
                    height={28}
                    baseColor=' rgb(51, 65, 85)'
                    highlightColor='rgb(100, 116, 139)'
                    borderRadius={12}
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <Skeleton
                    width={80}
                    baseColor=' rgb(51, 65, 85)'
                    highlightColor='rgb(100, 116, 139)'
                    height={28}
                    borderRadius={12}
                  />
                  <Skeleton
                    width={32}
                    baseColor=' rgb(51, 65, 85)'
                    highlightColor='rgb(100, 116, 139)'
                    height={28}
                    borderRadius={12}
                  />
                </div>
              </div>
              <hr className='bg-gray-800 my-1 text-gray-800 border-gray-800' />
              <div className='flex items-center transition-all justify-between duration-150 hover:bg-gray-800 py-2 px-3 rounded-lg '>
                <div>
                  <Skeleton
                    width={32}
                    baseColor=' rgb(51, 65, 85)'
                    highlightColor='rgb(100, 116, 139)'
                    height={28}
                    borderRadius={12}
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <Skeleton
                    width={80}
                    baseColor=' rgb(51, 65, 85)'
                    highlightColor='rgb(100, 116, 139)'
                    height={28}
                    borderRadius={12}
                  />
                  <Skeleton
                    width={32}
                    baseColor=' rgb(51, 65, 85)'
                    highlightColor='rgb(100, 116, 139)'
                    height={28}
                    borderRadius={12}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className='flex items-center transition-all justify-between duration-150 hover:bg-gray-800 py-2 px-3 rounded-md '>
                <div>
                  <Image
                    src='/img/european-union.png'
                    alt='uzs'
                    width={32}
                    height={28}
                    className='size-auto'
                  />
                </div>
                <div>{data.conversion_rates.EUR} EUR</div>
              </div>
              <hr className='bg-gray-800 my-1 text-gray-800 border-gray-800' />
              <div className='flex items-center transition-all justify-between duration-150 hover:bg-gray-800 py-2 px-3 rounded-md'>
                <div>
                  <Image
                    src='/img/UZ - Uzbekistan.png'
                    alt='uzs'
                    width={32}
                    height={28}
                    className='size-auto'
                  />
                </div>
                <div>{data.conversion_rates.UZS} UZS</div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
      <motion.div variants={childVariants} className='mt-4'>
        <h1 className='text-2xl text-white'>Convert</h1>
        <div className='w-full flex items-center gap-2 mt-3'>
          <div className='w-full'>
            <label htmlFor='amount' className='text-base text-gray-300'>
              Amount
            </label>
            <input
              type='number'
              id='amount'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder='Value entry'
              className='bg-gray-800 mt-2 w-full rounded-lg h-11 px-2 text-base outline-none text-gray-300'
            />
          </div>
        </div>
        <div className='w-full items-center gap-2 mt-3 flex'>
          <div className='w-full'>
            <label htmlFor='from' className='text-base text-gray-300'>
              From
            </label>
            <select
              name='from'
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className='bg-gray-800 mt-2 w-full rounded-lg h-11 px-2 text-base outline-none text-gray-300'
              id=''
            >
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
              <option value='UZS'>UZS</option>
            </select>
          </div>
          <div className='w-full'>
            <label htmlFor='to' className='text-base text-gray-300'>
              To
            </label>
            <select
              name='to'
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className='bg-gray-800 mt-2 w-full rounded-lg h-11 px-2 text-base outline-none text-gray-300'
              id='to'
            >
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
              <option value='UZS'>UZS</option>
            </select>
          </div>
        </div>
      </motion.div>
      <motion.div variants={childVariants}>
        <div className='text-base text-gray-400 mt-3'>
          Calculated Value {amount}
          {!amount && "0"} USD = &nbsp;
          {!to && (
            <span className='text-sm text-red-300'>No value entered yet</span>
          )}
          {result} &nbsp;
          {to}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Conversion;
