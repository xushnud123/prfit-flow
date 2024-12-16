import { FC } from "react";
import AddTransactions from "./_components/add-transactions";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className='block'>
      <AddTransactions />
    </div>
  );
};

export default Page;
