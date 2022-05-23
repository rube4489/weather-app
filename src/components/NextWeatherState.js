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
      <Container mt="10px" flexD="column">
        {data?.daily?.map(
          (item, i) =>
            i > 0 &&
            i < 6 && (
              <Card
                key={i}
                width="100%"
                padding="0.8em 0"
                align="center"
                justify="space-around"
                mb="0.3em"
              >
                <Container flexD="column">
                  <Label>{getDayName(converDate(item?.dt))}</Label>
                  <Label
                    color="rgba(255,255,255,0.6)"
                    fontS="1.1em"
                  >{`${converDate(item?.dt).getDate()}/${
                    converDate(item?.dt).getMonth() + 1
                  }`}</Label>
                </Container>
                <Container flexD="column">
                  {item?.weather.map(
                    (value, idx) =>
                      idx === 0 && (
                        <WrapperImg
                          key={idx}
                          width="45px"
                          src={`http://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
                          height="45px"
                          alt="icono clima"
                        />
                      )
                  )}
                </Container>
                <Container flexD="column">
                  <Label>{getTemp(item.temp.min).toFixed(0)} </Label>
                  <Label>Min</Label>
                </Container>
                <Container flexD="column">
                  <Label>{getTemp(item.temp.max).toFixed(0)}</Label>
                  <Label>Max</Label>
                </Container>
                <Container flexD="column">
                  <Label>{item.humidity}%</Label>
                  <Label>Humedad</Label>
                </Container>
                <Container flexD="column">
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
