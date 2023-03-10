import { Header } from "@/components/header";
import Portafolio from "../components/sectionPortafolio";

const PortafolioPage = () => {
  return (
    <div className="bg-white flex dark:bg-gray-800 justify-center">
      <Header />
      <div className="min-h-screen md:flex self-center w-full">
        <Portafolio />
      </div>
    </div>
  );
};

export default PortafolioPage;
