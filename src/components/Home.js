import React, { useEffect, useState } from "react";
import { getLocation } from "../helpers/helpers";

import WeatherInformation from "./WeatherInformation";

const Home = () => {
  const [location, setLocation] = useState({
    lat: sessionStorage.getItem("lat") || "-34.61315",
    long: sessionStorage.getItem("long") || "-58.37723",
  });

  const [nameCity, setNameCity] = useState("");

  useEffect(() => {
    getLocation(setLocation, setNameCity);
  }, []);

  return (
    <>
      <WeatherInformation
        location={location}
        nameCity={nameCity}
        setNameCity={setNameCity}
        setLocation={setLocation}
      />
    </>
  );
};

export default Home;
