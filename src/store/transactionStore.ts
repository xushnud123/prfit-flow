import { create } from "zustand";
import { persist } from "zustand/middleware";
import { transactionsInitialValue } from "@/lib/constants";

export type Transaction = {
  transactionId: string;
  date: string;
  type: string;
  amount: number;
  currency: string;
  category: string;
  description: string;
  status: string;
};

type TransactionState = {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  removeTransaction: (transactionId: string) => void;
  getTransactions: () => Transaction[];
};

export const useTransactionStore = create<TransactionState>()(
  persist(
    (set, get) => ({
      transactions: transactionsInitialValue,
      addTransaction: (transaction) => {
        set((state) => ({
          transactions: [...state.transactions, transaction],
        }));
      },
      removeTransaction: (transactionId) => {
        set((state) => ({
          transactions: state.transactions.filter(
            (t) => t.transactionId !== transactionId
          ),
        }));
      },
      getTransactions: () => get().transactions,
    }),
    {
      name: "transactions-storage", // localStorage key
    }
  )
);
