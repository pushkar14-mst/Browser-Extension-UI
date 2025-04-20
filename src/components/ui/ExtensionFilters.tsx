interface IExtensionFilterProps {
  onChangeFilter: (filter: string) => void;
  currentFilter: string;
}

const ExtensionFilters: React.FC<IExtensionFilterProps> = (
  props: IExtensionFilterProps,
) => {
  return (
    <>
      <div className="ml-auto flex max-w-[500px] gap-2">
        <div
          className={`${
            props.currentFilter === "all" ? "bg-orange-600" : "bg-[#545969]"
          } flex max-w-[100px] items-center justify-center rounded-2xl  px-4 py-2 text-white hover:cursor-pointer`}
          onClick={() => props.onChangeFilter("all")}
        >
          All
        </div>
        <div
          className={`${
            props.currentFilter === "active" ? "bg-orange-600" : "bg-[#545969]"
          } flex max-w-[100px] items-center justify-center rounded-2xl  px-4 py-2 text-white hover:cursor-pointer`}
          onClick={() => props.onChangeFilter("active")}
        >
          Active
        </div>
        <div
          className={`${
            props.currentFilter === "inactive"
              ? "bg-orange-600"
              : "bg-[#545969]"
          } flex max-w-[100px] items-center justify-center rounded-2xl  px-4 py-2 text-white hover:cursor-pointer`}
          onClick={() => props.onChangeFilter("inactive")}
        >
          Inactive
        </div>
      </div>
    </>
  );
};

export default ExtensionFilters;
