import logo from "@/assets/logo.svg";
import moon from "@/assets/icon-moon.svg";
const NavBar: React.FC = () => {
  return (
    <>
      <div className="flex w-full rounded-lg bg-[#fbfdfe] px-4 py-3 shadow-md dark:bg-[#2f364b]">
        <div className="flex h-[60px] w-[200px]">
          <img src={logo} className="cover h-auto w-auto" />
        </div>
        <div className="m-2 ml-auto flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-[#545969]">
          <img src={moon} alt="" className="cover m-1 h-1/2 w-1/2" />
        </div>
      </div>
    </>
  );
};
export default NavBar;
