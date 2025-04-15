const ExtensionFilters: React.FC = () => {
  return (
    <>
      <div className="ml-auto flex max-w-[500px] gap-2">
        <div className="flex max-w-[100px] items-center justify-center rounded-2xl bg-[#545969] px-4 py-2 text-white">
          All
        </div>
        <div className="flex max-w-[100px] items-center justify-center rounded-2xl bg-[#545969] px-4 py-2 text-white">
          Active
        </div>
        <div className="flex max-w-[100px] items-center justify-center rounded-2xl bg-[#545969] px-4 py-2 text-white">
          Inactive
        </div>
      </div>
    </>
  );
};

export default ExtensionFilters;
