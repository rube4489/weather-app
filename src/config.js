export const getApiUrl = (lat, long) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&lang=es&appid=${apiKey}`;
};
