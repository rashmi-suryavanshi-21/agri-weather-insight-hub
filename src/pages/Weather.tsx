
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import WeatherDetails from "@/components/WeatherDetails";
import { useNavigate } from "react-router-dom";

interface WeatherData {
  location: string;
  temp: number;
  rain?: number;
  storm?: boolean;
  description: string;
}

const Weather = () => {
  const [location, setLocation] = useState("");
  const [crop, setCrop] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // This would be replaced with actual API call in a real application
  const fetchWeatherData = (location: string) => {
    setIsLoading(true);
    
    // Mock data - in real app this would be from API
    setTimeout(() => {
      const mockWeatherData: WeatherData = {
        location: location,
        temp: Math.floor(Math.random() * 30) + 10, // Random temp between 10-40°C
        description: ["clear sky", "few clouds", "light rain", "heavy rain", "cloudy"][Math.floor(Math.random() * 5)],
      };
      
      // Add random rain data (50% chance)
      if (Math.random() > 0.5) {
        mockWeatherData.rain = Math.floor(Math.random() * 20);
      }
      
      // Add storm warning (20% chance)
      if (Math.random() > 0.8) {
        mockWeatherData.storm = true;
      }
      
      setWeather(mockWeatherData);
      setIsLoading(false);
    }, 1000);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!location || !crop) {
      setMessage("Please enter both location and crop name.");
      return;
    }
    
    setMessage(`Fetching weather data for ${crop} cultivation in ${location}...`);
    fetchWeatherData(location);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center text-[#1c651b] mb-8">
          🌤 Get Weather Details
        </h1>
        
        <Card className="max-w-md mx-auto bg-white shadow-lg border-0">
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border-2 border-[#1c651b]/20 focus:border-[#1c651b] focus:ring-1 focus:ring-[#1c651b] py-6"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="text"
                    placeholder="Enter crop name (e.g., wheat, rice)"
                    value={crop}
                    onChange={(e) => setCrop(e.target.value)}
                    className="border-2 border-[#1c651b]/20 focus:border-[#1c651b] focus:ring-1 focus:ring-[#1c651b] py-6"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-[#1c651b] hover:bg-[#1c651b]/90 text-white py-6 text-lg font-medium transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Get Weather"}
                </Button>
              </div>
            </form>
          </div>
        </Card>
        
        {message && !weather && (
          <p className="text-center mt-4 font-semibold text-[#1c651b]">{message}</p>
        )}
        
        {weather && <WeatherDetails weather={weather} crop={crop} />}
      </div>
    </div>
  );
};

export default Weather;
