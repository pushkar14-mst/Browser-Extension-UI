import Extensions from "@/components/Extensions";
import NavBar from "@/components/ui/NavBar";

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-light-gradient p-[3rem] dark:bg-dark-gradient">
      <div className="flex">
        <NavBar />
      </div>
      <Extensions />
    </div>
  );
};
export default Home;
