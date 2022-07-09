import React, { useEffect, useState } from "react";
import { Container } from "../styled/Container";
import Loader from "./Loader";
import CurrentlyWeatherHours from "./CurrentlyWeatherHours";
import CurretlyInfoWeather from "./CurretlyInfoWeather";
import NextWeatherState from "./NextWeatherState";
import { getWeatherData } from "../services/weatherService";
import { useNavigate } from "react-router-dom";

const WeatherInformation = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({
    lat: "-34.61315",
    long: "-58.37723",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await getWeatherData(location.lat, location.long);

        //Caso de consumir capacidad de consultas de la api gratuita
        if (response?.cod) {
          setLoading(true);
          navigate("/error");
          console.error(response?.message);
        } else if (response === "Failed to fetch") {
          setLoading(true);
          navigate("/error", { state: "Sin conexión a internet" });
          console.error(response?.message);
        } else {
          setData(response);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getWeather();
  }, [location]);

  return (
    <Container pb="20px" column width="800px">
      {loading && <Loader color={"#fff"} size={30} />}
      {!loading && (
        <>
          <CurretlyInfoWeather
            setLoading={setLoading}
            data={[data]}
            setLocation={setLocation}
          />
          <CurrentlyWeatherHours data={data} />
          <NextWeatherState data={data} />
        </>
      )}
    </Container>
  );
};

export default WeatherInformation;
