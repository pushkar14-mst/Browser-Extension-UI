import NavBar from "@/components/ui/NavBar";

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-light-gradient p-5 dark:bg-dark-gradient">
      <div className="flex">
        <NavBar />
      </div>
    </div>
  );
};
export default Home;
