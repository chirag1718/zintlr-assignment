import { useEffect, useState } from "react";
import { ConsumerData, mockData } from "../manageCustomers/data/data";

/**
 * useData hook is used for setting users data
 * @returns Custom data fetching hook
 */
export const useData = () => {
  const [data, setData] = useState<ConsumerData[]>(mockData);

  useEffect(() => {
    setData(mockData);
  }, []);

  return { data, setData };
};
