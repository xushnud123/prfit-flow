"use client";
import cn from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";
import { Add, ErrorInfo } from "../../_components/icons";
import { categoryData } from "@/lib/constants";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addTransactions } from "../../_components/transactions/schema";
import { useTransactionStore } from "@/store/transactionStore";
import { v4 as uuidv4 } from "uuid";
import Toast from "../../_components/toast";
import { useRouter } from "next/navigation";

interface AddTransactionsProps {}

const AddTransactions: FC<AddTransactionsProps> = ({}) => {
  const router = useRouter();
  const [toasts, setToasts] = useState<{ id: string; message: string }[]>([]);
  const { addTransaction } = useTransactionStore();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(addTransactions),
    defaultValues: {
      category: "",
      type: "",
      currency: "",
      status: "",
    },
  });

  const addToast = (message: string) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message }]);
  };
  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };
  const onSubmit = (e: any) => {
    addTransaction({ ...e, date: new Date(), transactionId: uuidv4() });
    addToast("Transaction successfully added!");
    // router.push("/");
    reset();
  };

  return (
    <div>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          onClose={removeToast}
        />
      ))}
      <motion.div
        className='max-w-[550px] mx-auto'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 160, damping: 10 }}
      >
        <motion.div
          className=' p-6 rounded-lg shadow-lg'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 160,
            damping: 10,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className='text-gray-300 text-xl'>Add Transactions</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full flex flex-col gap-3 mt-10'
          >
            <Controller
              name='amount'
              control={control}
              render={({ field }) => (
                <div className='w-full'>
                  <label htmlFor='amount' className='text-base text-gray-300'>
                    Amount
                  </label>
                  <input
                    id='amount'
                    {...field}
                    type='number'
                    value={field.value || ""}
                    placeholder='Value entry'
                    className='bg-gray-800 mt-2 w-full rounded-lg h-11 px-2 text-base outline-none text-gray-300'
                  />
                  {errors.amount?.message && (
                    <div className='text-red-300 flex gap-2 items-center mt-2'>
                      <ErrorInfo className='size-4' />
                      <p className='text-sm '>{errors.amount?.message}</p>
                    </div>
                  )}
                </div>
              )}
            />

            <Controller
              name='type'
              control={control}
              render={({ field }) => (
                <div className='w-full'>
                  <label htmlFor='amount' className='text-base text-gray-300'>
                    Type
                  </label>
                  <select
                    {...field}
                    value={field.value}
                    className='bg-gray-800 mt-2 w-full rounded-lg h-11 px-2 text-base outline-none text-gray-300'
                    id=''
                  >
                    <option value='' disabled defaultValue=''>
                      Select a Type
                    </option>
                    <option value='Expense'>Expense</option>
                    <option value='Income'>Income</option>
                  </select>
                  {errors.type?.message && (
                    <div className='text-red-300 flex gap-2 items-center mt-2'>
                      <ErrorInfo className='size-4' />
                      <p className='text-sm '>{errors.type?.message}</p>
                    </div>
                  )}
                </div>
              )}
            />
            <Controller
              name='currency'
              control={control}
              render={({ field }) => (
                <div className='w-full'>
                  <label htmlFor='amount' className='text-base text-gray-300'>
                    Currency
                  </label>
                  <select
                    {...field}
                    value={field.value}
                    className='bg-gray-800 mt-2 w-full rounded-lg h-11 px-2 text-base outline-none text-gray-300'
                    id=''
                  >
                    <option value='' disabled defaultValue=''>
                      Select a Currency
                    </option>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                    <option value='UZS'>UZS</option>
                  </select>
                  {errors.currency?.message && (
                    <div className='text-red-300 flex gap-2 items-center mt-2'>
                      <ErrorInfo className='size-4' />
                      <p className='text-sm '>{errors.currency?.message}</p>
                    </div>
                  )}
                </div>
              )}
            />
            <Controller
              name='category'
              control={control}
              render={({ field }) => (
                <div className='w-full'>
                  <label htmlFor='amount' className='text-base text-gray-300'>
                    Category
                  </label>
                  <select
                    {...field}
                    value={field.value}
                    className='bg-gray-800 mt-2 w-full rounded-lg h-11 px-2 text-base outline-none text-gray-300'
                    id=''
                  >
                    <option value='' disabled defaultValue=''>
                      Select a Category
                    </option>
                    {categoryData.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.category?.message && (
                    <div className='text-red-300 flex gap-2 items-center mt-2'>
                      <ErrorInfo className='size-4' />
                      <p className='text-sm '>{errors.category?.message}</p>
                    </div>
                  )}
                </div>
              )}
            />
            <Controller
              name='status'
              control={control}
              render={({ field }) => (
                <div className='w-full'>
                  <label htmlFor='' className='text-base text-gray-300'>
                    Status
                  </label>
                  <select
                    {...field}
                    value={field.value}
                    className='bg-gray-800 mt-2 w-full rounded-lg h-11 px-2 text-base outline-none text-gray-300'
                    id=''
                  >
                    <option value='' disabled defaultValue=''>
                      Select a status
                    </option>
                    <option value='Completed'>Completed</option>
                    <option value='Pending'>Pending</option>
                  </select>
                  {errors.status?.message && (
                    <div className='text-red-300 flex gap-2 items-center mt-2'>
                      <ErrorInfo className='size-4' />
                      <p className='text-sm'>{errors.status?.message}</p>
                    </div>
                  )}
                </div>
              )}
            />

            <button
              type='submit'
              className='mt-4 px-4 py-2 text-white w-full bg-[#0f172a] transition-all duration-150 hover:bg-[#0F172ACC] rounded-lg'
            >
              Submit
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AddTransactions;
