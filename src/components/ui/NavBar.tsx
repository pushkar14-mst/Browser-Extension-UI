import logo from "@/assets/logo.svg";
import moon from "@/assets/icon-moon.svg";
const NavBar: React.FC = () => {
  return (
    <>
      <div className="flex w-full rounded-lg bg-[#fbfdfe] px-4 py-3 shadow-md dark:bg-[#2f364b]">
        <img src={logo} className="cover h-auto w-auto" />
        <div className="m-2 ml-auto flex h-[50px] w-[50px] rounded-lg bg-[#545969]">
          <img src={moon} alt="" className="cover m-1 h-auto w-auto" />
        </div>
      </div>
    </>
  );
};
export default NavBar;
