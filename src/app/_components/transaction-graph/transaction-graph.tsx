import { useTransactionStore } from "@/store/transactionStore";
import dayjs from "dayjs";
import { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface TransactionGraphProps {}

const CustomTooltip = ({ active, payload, label }: any) => {
  console.log(active, payload);

  if (active && payload && payload.length) {
    return (
      <div className='bg-gray-900 p-2 border border-gray-400 rounded-lg'>
        <div className='label text-sm'>{`${label}`}</div>
        <div className='text-primary-400 mt-1 text-sm'>
          uv: {payload[0].value} {payload[0].payload["currency"]}
        </div>
      </div>
    );
  }

  return null;
};

const TransactionGraph: FC<TransactionGraphProps> = ({}) => {
  const { transactions } = useTransactionStore();
  return (
    <div className='mt-10 flex flex-col gap-10'>
      <div className='h-[320px]'>
        <h1 className='text-xl text-gray-300'>Visualizing Income on a Chart</h1>
        <ResponsiveContainer width='100%' height='100%' className={"mt-4"}>
          <LineChart
            width={500}
            height={300}
            data={transactions
              .filter((item) => item.type === "Income")
              .map((item) => ({
                name: dayjs(item.date).format("MMM D, YYYY"),
                uv: item.amount,
                currency: item.currency,
              }))}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='2 2' />
            <XAxis dataKey='name' dy={10} className='text-gray-300' />
            <YAxis dx={-10} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type='monotone'
              activeDot={{ r: 8 }}
              dataKey='uv'
              stroke='#82ca9d'
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className='h-[320px]'>
        <h1 className='text-xl text-gray-300'>
          Visualizing Expenses on a Chart
        </h1>
        <ResponsiveContainer width='100%' height='100%' className={"mt-4"}>
          <LineChart
            width={500}
            height={300}
            data={transactions
              .filter((item) => item.type === "Expense")
              .map((item) => ({
                name: dayjs(item.date).format("MMM D, YYYY"),
                uv: item.amount,
                currency: item.currency,
              }))}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='2 2' />
            <XAxis dataKey='name' dy={10} />
            <YAxis dx={-10} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type='monotone'
              dataKey='uv'
              stroke='#8884d8'
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionGraph;
