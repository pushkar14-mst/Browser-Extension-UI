import { useState } from "react";
import ExtensionCard from "./ui/ExtensionCard";
import ExtensionFilters from "./ui/ExtensionFilters";

import { data } from "@/utilities/data";
const Extensions: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState<string>("all");
  const [filteredData, setFilteredData] = useState(data);
  const filterData = (filter: string) => {
    if (filter === "all") {
      setFilteredData(data);
    } else if (filter === "active") {
      setFilteredData(data.filter((extension) => extension.isActive));
    } else if (filter === "inactive") {
      setFilteredData(data.filter((extension) => !extension.isActive));
    }
  };

  const handleChangeFilter = (filter: string) => {
    setCurrentFilter(filter);
    filterData(filter);
  };
  return (
    <div className="mt-4 flex w-full flex-col">
      <div className="flex w-full">
        <h2 className="h-3/4 w-full text-[1.7rem] font-bold text-white">
          Extensions List
        </h2>
        <div className="ml-auto flex max-h-[40px] w-full">
          <ExtensionFilters
            onChangeFilter={handleChangeFilter}
            currentFilter={currentFilter}
          />
        </div>
      </div>
      <div className="mt-4 flex w-full flex-wrap gap-5">
        {filteredData.map((extension) => (
          <div key={extension.name} className="flex w-full max-w-[300px]">
            <ExtensionCard
              name={extension.name}
              description={extension.description}
              logo={extension.logo}
              isActive={extension.isActive}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Extensions;
