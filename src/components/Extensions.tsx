import ExtensionCard from "./ui/ExtensionCard";
import ExtensionFilters from "./ui/ExtensionFilters";

import { data } from "@/utilities/data";
const Extensions: React.FC = () => {
  return (
    <div className="mt-4 flex w-full flex-col">
      <div className="flex w-full">
        <h2 className="h-3/4 w-full text-[1.7rem] font-bold text-white">
          Extensions List
        </h2>
        <div className="ml-auto flex max-h-[40px] w-full">
          <ExtensionFilters />
        </div>
      </div>
      <div className="mt-4 flex w-full flex-wrap gap-4">
        {data.map((extension) => (
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
