import cn from "@/lib/cn";
import { tableHeaders } from "@/lib/constants";
import { Transaction } from "@/store/transactionStore";
import dayjs from "dayjs";
import { FC, useState } from "react";
import { Delete, Up } from "../icons";
import StatusBadge from "../status";
import { delay, motion } from "framer-motion";
import Toast from "../toast";

interface TransactionsTableBodyProps {
  transactions: Transaction[];
  removeTransaction: (transactionId: string) => void;
}

export const containerVariants = {
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

export const childVariants = {
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

const TransactionsTableBody: FC<TransactionsTableBodyProps> = ({
  transactions,
  removeTransaction,
}) => {
  const [toasts, setToasts] = useState<{ id: string; message: string }[]>([]);
  const addToast = (message: string) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message }]);
  };
  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };
  return (
    <>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          onClose={removeToast}
        />
      ))}
      <div className='justify-between items-center w-full overflow-x-auto whitespace-nowrap'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
          className='w-full flex'
        >
          {tableHeaders.map((item) => (
            <div
              key={item}
              className={cn(
                "text-sm min-w-[120px] w-full  text-white border-gray-700 border-b-[2px]  px-3  py-3",
                item === "Category" && "min-w-[130px]"
              )}
            >
              {item}
            </div>
          ))}
          <div
            className={cn(
              "text-sm min-w-[120px] w-full  text-white border-gray-700 border-b-[2px]  px-3  py-3"
            )}
          >
            Remove
          </div>
        </motion.div>
        <motion.div
          className='mt-3'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {transactions?.map((item: any) => (
            <motion.div variants={childVariants} key={item.transactionId}>
              <div className='flex transition-all duration-150  group rounded-lg '>
                <div className='text-base w-full py-2 border-b border-gray-800 transition-all duration-150 px-2 group-hover:bg-gray-800 flex items-center min-w-[120px] text-gray-300'>
                  {dayjs(item.date).format("MMM D, YYYY")}
                </div>
                <div className='text-base w-full py-2 border-b border-gray-800 transition-all duration-150 px-2 group-hover:bg-gray-800  min-w-[120px] text-gray-300 flex items-center gap-2'>
                  <div
                    className={cn(
                      "w-9 h-9 bg-[#e0ffe0] group-hover:bg-[#c8f8b7] rounded-full flex justify-center items-center text-black",
                      item.type === "Expense" &&
                        "bg-[#ffe0e0] group-hover:bg-[#ffb3b3]"
                    )}
                  >
                    <Up
                      className={cn(
                        "rotate-[45deg]",
                        item.type === "Expense" && "rotate-[-135deg]"
                      )}
                    />
                  </div>
                  <div>{item.type}</div>
                </div>
                <div className='text-base w-full py-2 border-b border-gray-800 transition-all duration-150 px-2 group-hover:bg-gray-800 items-center min-w-[120px] flex gap-2 text-gray-300'>
                  {item.amount}
                </div>
                <div className='text-base w-full py-2 border-b border-gray-800 transition-all duration-150 px-2 group-hover:bg-gray-800 flex items-center min-w-[120px] text-gray-300'>
                  {item.currency}
                </div>
                <div className='text-base w-full py-2 border-b border-gray-800 transition-all duration-150 px-2 group-hover:bg-gray-800 flex items-center min-w-[130px] text-gray-300'>
                  {item.category}
                </div>
                <div className='text-base w-full py-2 border-b border-gray-800 transition-all duration-150 px-2 group-hover:bg-gray-800 flex items-center min-w-[120px] text-gray-300'>
                  <StatusBadge status={item.status} />
                </div>
                <div className='text-base w-full py-2 border-b border-gray-800 transition-all duration-150 px-2 group-hover:bg-gray-800 flex items-center min-w-[120px] text-gray-300'>
                  <div
                    className='h-[34px] w-full cursor-pointer px-2.5 py-1.5 bg-red-500 rounded-md transition-all duration-150 hover:bg-[rgba(239,68,68,0.75)]  items-center gap-1.5 inline-flex justify-center'
                    onClick={() => {
                      removeTransaction(item.transactionId);
                      addToast("Transaction deleted successfully.");
                    }}
                  >
                    <Delete className='size-5 text-white' />
                    <div className="text-white text-xs font-medium font-['DM Sans'] leading-none text-center">
                      Remove
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default TransactionsTableBody;
