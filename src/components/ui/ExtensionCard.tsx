import { IExtension } from "types/types";
const ExtensionCard: React.FC<IExtension> = (props: IExtension) => {
  return (
    <>
      <div className="border-1 relative flex h-[200px] w-full max-w-[500px] flex-col gap-[2rem] rounded-lg border-white bg-[#212636] p-4">
        <div className="flex">
          <div className="flex h-[80px] w-[80px] items-start justify-center rounded-lg">
            <img src={props.logo} alt="" className="cover m-1" />
          </div>
          <div className="ml-2 flex flex-col items-start">
            <h2 className="ml-2 text-lg font-bold text-white">{props.name}</h2>
            <p className="ml-2 text-sm font-normal text-[#d1d1d1]">
              {props.description}
            </p>
          </div>
        </div>
        <div className="relative mb-[16px] mt-auto flex w-full max-w-[500px] items-center">
          <div className="absolute flex items-center justify-center rounded-2xl bg-[#171b26] px-3 py-2 text-sm text-white hover:cursor-pointer">
            Remove
          </div>
          <div
            className={`absolute right-0 flex h-[20px] w-[40px] justify-center rounded-2xl text-sm text-white hover:cursor-pointer${
              props.isActive ? " bg-[#00b87c]" : " bg-[#171b26]"
            }`}
          >
            {props.isActive ? (
              <div className="absolute right-0 h-[20px] w-[20px] rounded-full bg-slate-300" />
            ) : (
              <div className="absolute left-0 h-[20px] w-[20px] rounded-full bg-[#8d92a4]" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtensionCard;
//
