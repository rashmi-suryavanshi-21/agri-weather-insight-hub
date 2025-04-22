import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-green-50">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-[#1c651b]">
              AgriWeather Insight Hub
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Get accurate weather forecasts and agricultural insights tailored for your crops
            </p>
            <Button className="bg-[#efd101] hover:bg-[#efd101]/90 text-[#1c651b] font-semibold text-lg px-8 py-6 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105">
              <Link to="/weather">Get Weather Forecast</Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#1c651b]">
              <div className="text-3xl mb-4">🌦️</div>
              <h3 className="text-xl font-semibold mb-2 text-[#1c651b]">Location-Based Forecasts</h3>
              <p className="text-gray-600">Get hyper-local weather data specific to your farming location</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#efd101]">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2 text-[#1c651b]">Crop-Specific Insights</h3>
              <p className="text-gray-600">Receive farming recommendations tailored to your specific crops</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#1c651b]">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-[#1c651b]">Weather Alerts</h3>
              <p className="text-gray-600">Stay ahead with timely warnings about severe weather conditions</p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-[#1c651b] text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 AgriWeather Insight Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
