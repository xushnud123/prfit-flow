"use client";
import { FC, useEffect, useState } from "react";
import { Add, Empty } from "../icons";
import { Transaction, useTransactionStore } from "@/store/transactionStore";
import { StringParam, useQueryParams, withDefault } from "use-query-params";
import TransactionsTableBody from "./transactions-table-body";
import AddTransactions from "../../add-transaction/_components/add-transactions";
import { motion } from "framer-motion";
import Link from "next/link";
import cn from "@/lib/cn";

interface TransactionsTableProps {}

const TransactionsTable: FC<TransactionsTableProps> = ({}) => {
  const { transactions, removeTransaction } = useTransactionStore();
  const [filterData, setFilterData] = useState<any>([]);
  const [query, setQuery] = useQueryParams({
    category: withDefault(StringParam, "All", true),
    type: withDefault(StringParam, "All", true),
  });

  const filters = (transactionsData: Transaction[]) => {
    let data = transactionsData;
    if (
      query.category === "All" ||
      query.type === "All" ||
      transactionsData.length === 0
    ) {
      data = transactions;
    }
    if (query.category && query.category !== "All") {
      data = data.filter((item) => query.category === item.category);
    }

    if (query.type && query.type !== "All") {
      data = data.filter((item) => query.type === item.type);
    }

    setFilterData(data);
  };

  useEffect(() => {
    if (!query.category && !query.type) {
      setFilterData(transactions);
    } else if (filterData && filterData.length > 0) {
      filters(transactions);
    } else {
      filters(transactions);
    }
  }, [query, transactions]);

  useEffect(() => {
    if (!query.category && !query.type) {
      setFilterData(transactions);
    }
  }, []);

  return (
    <div className='block mt-10'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl text-white'>Transactions</h1>
        <Link
          href='/add-transaction'
          className={cn(
            "w-9 cursor-pointer h-9 bg-[#e0e9ff] transition-all duration-150 hover:bg-[#c3d5ff] rounded-full flex justify-center items-center text-black"
          )}
        >
          <Add />
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
        className='flex items-center gap-6'
      >
        <div className='mt-2 flex gap-4 items-center'>
          <div>
            <h2 className='text-base'>Category</h2>
            <select
              name='category'
              value={query.category}
              onChange={(e) => setQuery({ category: e.target.value })}
              className='bg-gray-800 mt-2 w-max rounded-lg h-11 px-2 text-base outline-none text-gray-300'
              id=''
            >
              <option value='All'>All</option>
              <option value='Salary'>Salary</option>
              <option value='Office Expenses'>Office Expenses</option>
              <option value='Consulting'>Consulting</option>
              <option value='Entertainment'>Entertainment</option>
              <option value='Travel'>Travel</option>
              <option value='Commission'>Commission</option>
              <option value='Taxes'>Taxes</option>
              <option value='Sales'>Sales</option>
            </select>
          </div>
          <div>
            <h2 className='text-base'>Type</h2>
            <select
              name='type'
              value={query.type}
              onChange={(e) => setQuery({ type: e.target.value })}
              className='bg-gray-800 mt-2 w-max rounded-lg h-11 px-2 text-base outline-none text-gray-300'
              id=''
            >
              <option value='All'>All</option>
              <option value='Income'>Income</option>
              <option value='Expense'>Expense</option>
            </select>
          </div>
        </div>
      </motion.div>
      {filterData.length === 0 ? (
        <div className='flex flex-col  items-center mt-10'>
          <Empty className='size-16 text-gray-500' />
          <h2 className='text-xl text-gray-300 mt-6'>No documents</h2>
          <p className='text-base text-gray-400 mt-3'>
            Start creating your documents
          </p>
        </div>
      ) : (
        <TransactionsTableBody
          removeTransaction={removeTransaction}
          transactions={filterData}
        />
      )}
    </div>
  );
};

export default TransactionsTable;
