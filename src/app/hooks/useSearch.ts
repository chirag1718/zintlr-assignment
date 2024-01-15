import { useState } from "react";
import { useData } from "./useData";

/**
 * useSearch hook is used for implementing search functionality
 * @returns Custom search hook
 */
export const useSearch = () => {
  const { data, setData } = useData();
  //! state for search functionality
  const [searchQuery, setSearchQuery] = useState("");

  //! search logic
  const handleSearch = (e: any) => {
    const filteredData = data.filter(
      (el) => el.consumerName.toLowerCase().includes(searchQuery)
      // || // filtering on the basis of consumer name
      // el.facilitator.b2bFieldExecutiveName
      //   .toLowerCase()
      //   .includes(searchQuery.toLowerCase()) || // filtering on the basis of b2b executive name
      // el.facilitator.associateName
      //   .toLowerCase()
      //   .includes(searchQuery.toLowerCase()) || // filtering on the basis of associate name
      // el.zone.toLowerCase().includes(searchQuery.toLowerCase()) // filtering on the basis of zone
    );
    setData(filteredData);
    console.log(filteredData, "filter data");
  };
  return {
    searchQuery,
    setSearchQuery,
    handleSearch,
  };
};
