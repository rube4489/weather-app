export const getApiUrl = (lat, long) => {
  const apiKey = "f63c54f2a914e1603810552aa7b68794";
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&lang=es&appid=${apiKey}`;
};
