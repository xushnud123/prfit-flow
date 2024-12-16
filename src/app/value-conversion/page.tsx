import { FC } from "react";
import Conversion from "./_components/conversion";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className='block'>
      <Conversion />
    </div>
  );
};

export default Page;
