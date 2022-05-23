import React, { useEffect, useState } from "react";
import { Container } from "../styled/Container";
import Loader from "./Loader";
import CurrentlyWeatherHours from "./CurrentlyWeatherHours";
import CurretlyInfoWeather from "./CurretlyInfoWeather";
import NextWeatherState from "./NextWeatherState";
import { getWeatherData } from "../services/weatherService";
import NotFound from "./NotFound";
import PropTypes from "prop-types";

const WeatherInformation = ({
  location,
  setLocation,
  nameCity,
  setNameCity,
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPageError, setShowPageError] = useState(false);

  const getWeather = async () => {
    setLoading(true);
    try {
      const response = await getWeatherData(location.lat, location.long);
      //Caso de consumir la capacidad de la api gratuita
      if (response.cod === 429 || response.cod === 401) {
        setShowPageError(true);
        setLoading(false);
        console.log("error");
        setLoading(false);
      } else {
        setData(response);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getWeather();
  }, [location]);

  return (
    <Container pb="20px" flexD="column" width="800px">
      {!loading && !showPageError && (
        <>
          <CurretlyInfoWeather
            setLoading={setLoading}
            data={[data]}
            setLocation={setLocation}
            nameCity={nameCity}
            setNameCity={setNameCity}
          />
          <CurrentlyWeatherHours data={data} />
          <NextWeatherState data={data} />
        </>
      )}
      {loading && <Loader color={"#fff"} size={30} />}

      {showPageError && <NotFound />}
    </Container>
  );
};

WeatherInformation.propTypes = {
  setLocation: PropTypes.func.isRequired,
  setNameCity: PropTypes.func.isRequired,
  nameCity: PropTypes.string,
};

export default WeatherInformation;
