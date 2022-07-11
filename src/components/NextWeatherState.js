import React from "react";
import { getDayName, getTemp, converDate, getKm } from "../helpers/helpers";
import { Card, Container, WrapperImg } from "../styled/Container";
import { Label } from "../styled/Text";

const NextWeatherState = ({ data }) => {
  return (
    <>
      <Label mt="40px" fontS="1.125em" fontW="500">
        Proximos 5 días
      </Label>
      <Container mt="10px" column>
        {data?.daily?.map(
          (item, i) =>
            i > 0 &&
            i < 6 && (
              <Card tNextW key={i}>
                <Container column>
                  <Label>{getDayName(converDate(item?.dt))}</Label>
                  <Label
                    color="rgba(255,255,255,0.6)"
                    fontS="1.1em"
                  >{`${converDate(item?.dt).getDate()}/${
                    converDate(item?.dt).getMonth() + 1
                  }`}</Label>
                </Container>
                <Container column>
                  {item?.weather.map(
                    (value, idx) =>
                      idx === 0 && (
                        <WrapperImg
                          key={idx}
                          width="45px"
                          src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
                          height="45px"
                          alt="icono clima"
                        />
                      )
                  )}
                </Container>
                <Container column>
                  <Label>{getTemp(item.temp.min).toFixed(0)}° </Label>
                  <Label>Min</Label>
                </Container>
                <Container column>
                  <Label>{getTemp(item.temp.max).toFixed(0)}°</Label>
                  <Label>Max</Label>
                </Container>
                <Container column>
                  <Label>{item.humidity}%</Label>
                  <Label>Humedad</Label>
                </Container>
                <Container column>
                  <Label>{getKm(item.wind_speed).toFixed(0)}</Label>
                  <Label>Km/h</Label>
                </Container>
              </Card>
            )
        )}
      </Container>
    </>
  );
};

export default NextWeatherState;
