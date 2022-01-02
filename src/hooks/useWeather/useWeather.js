import {useEffect, useState} from 'react';
import axios from 'axios';

export default function useWeather({latitude, longitude}) {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherError, setWeatherError] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);

  async function fetchWeather() {
    try {
      setWeatherLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=13ea7bc900806057f5cb50345c0c69a7`,
      );
      setWeatherData(response.data);
    } catch (error) {
      setWeatherError(error);
    } finally {
      setWeatherLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return {
    weatherData,
    weatherError,
    weatherLoading,
    fetchWeather,
  };
}
