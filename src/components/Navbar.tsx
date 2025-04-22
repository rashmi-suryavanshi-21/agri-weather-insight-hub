
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl mr-2">🌱</span>
              <span className="font-bold text-[#1c651b] text-xl">AgriWeather</span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-[#1c651b] px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/weather" className="text-gray-600 hover:text-[#1c651b] px-3 py-2 rounded-md text-sm font-medium">
              Weather
            </Link>
            <Button className="bg-[#1c651b] hover:bg-[#1c651b]/90 text-white">
              <Link to="/weather">Get Weather</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
