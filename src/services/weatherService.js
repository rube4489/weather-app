import { getApiUrl } from "../config";

export const getWeatherData = async (lat, long) => {
  const apiUrl = getApiUrl(lat, long);
  const response = await fetch(apiUrl);
  const data = await response.json();

  return data;
};
