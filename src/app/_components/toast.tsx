import { motion } from "framer-motion";
import { useEffect } from "react";
import { Close } from "./icons";

type ToastProps = {
  message: string;
  id: string;
  onClose: (id: string) => void;
};

const Toast = ({ message, id, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 3000);

    return () => clearTimeout(timer);
  }, [id, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className='bg-[#e4ffe0] fixed z-50 top-10 right-10 text-gray-800 px-4 py-2 rounded shadow-lg mb-2'
    >
      <div className='flex justify-between items-center'>
        <span>{message}</span>
        <button onClick={() => onClose(id)} className='ml-4 text-gray-800'>
          <Close />
        </button>
      </div>
    </motion.div>
  );
};

export default Toast;
