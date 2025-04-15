import ExtensionFilters from "./ui/ExtensionFilters";

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
    </div>
  );
};
export default Extensions;
