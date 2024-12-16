import { Transaction, useTransactionStore } from "@/store/transactionStore";
import { FC, useState } from "react";
import { Delete } from "../icons";
import Toast from "../toast";

interface RemoveButtonProps {
  transaction: Transaction;
}

const RemoveButton: FC<RemoveButtonProps> = ({
  transaction: { transactionId },
}) => {
  const { removeTransaction } = useTransactionStore();
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
      <div
        className='h-[34px] w-full cursor-pointer px-2.5 py-1.5 bg-red-500 rounded-md transition-all duration-150 hover:bg-[rgba(239,68,68,0.75)]  items-center gap-1.5 inline-flex justify-center'
        onClick={() => {
          removeTransaction(transactionId);
          addToast("Transaction deleted successfully.");
        }}
      >
        <Delete className='size-5 text-white' />
        <div className="text-white text-xs font-medium font-['DM Sans'] leading-none text-center">
          Remove
        </div>
      </div>
    </>
  );
};

export default RemoveButton;
