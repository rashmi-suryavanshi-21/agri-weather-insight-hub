
import { Card } from "@/components/ui/card";

interface WeatherData {
  location: string;
  temp: number;
  rain?: number;
  storm?: boolean;
  description: string;
}

interface WeatherDetailsProps {
  weather: WeatherData;
  crop: string;
}

const WeatherDetails = ({ weather, crop }: WeatherDetailsProps) => {
  const isClear = weather.description.includes("clear") || weather.description.includes("sunny");
  const isCloudy = weather.description.includes("cloudy");
  const isRaining = weather.description.includes("rain");
  
  return (
    <Card className="max-w-md mx-auto mt-8 overflow-hidden border-0 shadow-lg">
      <div className="bg-[#1c651b] text-white p-6">
        <h2 className="text-2xl font-bold">Weather in {weather.location}</h2>
        <p className="text-[#efd101] opacity-90">For {crop} cultivation</p>
      </div>
      
      <div className="bg-white p-6">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
          <div>
            <p className="text-3xl font-bold text-gray-800">{weather.temp}°C</p>
            <p className="text-gray-500 capitalize">{weather.description}</p>
          </div>
          <div className="text-4xl">
            {isClear && "🌞"}
            {isCloudy && "☁️"}
            {isRaining && "🌧️"}
            {weather.storm && "⚡"}
            {!isClear && !isCloudy && !isRaining && !weather.storm && "🌤️"}
          </div>
        </div>
        
        <div className="space-y-4">
          {weather.rain !== undefined && weather.rain > 0 && (
            <div className="bg-blue-50 p-3 rounded-lg flex items-start">
              <span className="text-2xl mr-2">🌧️</span>
              <p>Rain: {weather.rain} mm in last 1 hour</p>
            </div>
          )}
          
          {weather.storm && (
            <div className="bg-red-50 p-3 rounded-lg flex items-start">
              <span className="text-2xl mr-2">⚡</span>
              <p className="text-red-600 font-medium">Warning: Stormy weather ahead! Take precautions.</p>
            </div>
          )}
          
          <h3 className="text-xl font-semibold mt-4 border-t border-gray-100 pt-4">Farming Advice:</h3>
          
          {isClear && (
            <div className="bg-yellow-50 p-3 rounded-lg flex items-start">
              <span className="text-2xl mr-2">🌞</span>
              <p>It's a sunny day, perfect for outdoor work!</p>
            </div>
          )}
          
          {isCloudy && (
            <div className="bg-gray-50 p-3 rounded-lg flex items-start">
              <span className="text-2xl mr-2">☁️</span>
              <p>Cloudy conditions, be cautious of sudden changes.</p>
            </div>
          )}
          
          {isRaining && (
            <div className="bg-blue-50 p-3 rounded-lg flex items-start">
              <span className="text-2xl mr-2">🌧️</span>
              <p>It's raining! Be careful with fieldwork and consider irrigation adjustments.</p>
            </div>
          )}
          
          {weather.storm && (
            <div className="bg-red-50 p-3 rounded-lg flex items-start">
              <span className="text-2xl mr-2">⚡</span>
              <p>Stormy weather detected! It's not safe to work outdoors.</p>
            </div>
          )}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-100">
          <button 
            className="w-full py-3 bg-[#efd101] hover:bg-[#efd101]/90 text-[#1c651b] font-medium rounded-lg transition-all duration-200 ease-in-out shadow-sm"
            onClick={() => window.print()}
          >
            Print Forecast
          </button>
        </div>
      </div>
    </Card>
  );
};

export default WeatherDetails;
