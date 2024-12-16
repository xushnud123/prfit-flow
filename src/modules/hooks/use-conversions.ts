import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ConversionType } from "../types";
import { ConversionMappers } from "../mappers";

const useConversions = () => {
  const initialValue = {} as ConversionType;

  const { data = initialValue, ...args } = useQuery({
    queryKey: ["CONVERSION"],
    queryFn: async () => {
      const res = await axios.get(
        "https://v6.exchangerate-api.com/v6/1b587f9a7f7efaff1efdda84/latest/USD"
      );
      const data = ConversionMappers(res.data);
      return data;
    },
    refetchInterval: 100000,
  });
  return { data, ...args };
};

export default useConversions;
