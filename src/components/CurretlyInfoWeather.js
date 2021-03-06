import React from "react";
import {
  getCurrentlyDate,
  getHourAndMinutes,
  getKm,
  getTemp,
  reformTitle,
  upperCaseFirtsLetter,
} from "../helpers/helpers";
import { Col, Container, Row, WrapperImg } from "../styled/Container";
import { H1, H2, Label } from "../styled/Text";
import SelectCity from "./SelectCity";
import PropTypes from "prop-types";

const CurretlyInfoWeather = ({ setLocation, data, setLoading }) => {
  return (
    <Container mt="2rem" column>
      {data?.map((item, idx) => (
        <div key={idx}>
          <Row>
            <Col column>
              <H1>{reformTitle(item.timezone)}</H1>
              <H2>{getCurrentlyDate(item?.current?.dt)}</H2>
            </Col>
            <Col justify="flex-end">
              <SelectCity setLocation={setLocation} setLoading={setLoading} />
            </Col>
          </Row>

          <Row>
            <Col justify="space-evenly">
              {item?.current?.weather?.map(
                (icon, idx) =>
                  idx === 0 && (
                    <WrapperImg
                      key={idx}
                      width="10.5em"
                      src={`https://openweathermap.org/img/wn/${icon?.icon}@2x.png`}
                      alt="icono clima"
                    />
                  )
              )}
              <Container column>
                <Label fontS="5.25em" fontW="300">
                  {getTemp(item?.current?.temp).toFixed(0)}°
                </Label>
                <H2>
                  {upperCaseFirtsLetter(item?.current?.weather[0]?.description)}
                </H2>
              </Container>
            </Col>
            <Col borderL="1px solid #FFF" justify="center" column>
              <Container justify="space-around">
                <Container column>
                  {item?.daily?.map(
                    (value, idx) =>
                      idx === 0 && (
                        <Label key={idx} fontS="1.45em">
                          {getTemp(value.temp?.max).toFixed(0)}°
                        </Label>
                      )
                  )}
                  <Label color="rgba(255,255,255,0.6)" fontS="1.1em">
                    Max
                  </Label>
                </Container>

                <Container column>
                  <Label fontS="1.45em">
                    {getKm(item?.current?.wind_speed)?.toFixed(0)} km/h
                  </Label>
                  <Label color="rgba(255,255,255,0.6)" fontS="1.1em">
                    Viento
                  </Label>
                </Container>

                <Container column>
                  <Label fontS="1.45em">
                    {getHourAndMinutes(item?.current?.sunrise)}
                  </Label>
                  <Label color="rgba(255,255,255,0.6)" fontS="1.1em">
                    Amanecer
                  </Label>
                </Container>
              </Container>
              <Container justify="space-around" mt="15px">
                <Container column>
                  {item?.daily?.map(
                    (value, idx) =>
                      idx === 0 && (
                        <Label key={idx} fontS="1.45em">
                          {getTemp(value.temp?.min).toFixed(0)}°
                        </Label>
                      )
                  )}
                  <Label color="rgba(255,255,255,0.6)" fontS="1.1em">
                    Min
                  </Label>
                </Container>
                <Container column>
                  <Label fontS="1.45em">{item?.current?.humidity}%</Label>
                  <Label color="rgba(255,255,255,0.6)" fontS="1.1em">
                    Humedad
                  </Label>
                </Container>
                <Container column>
                  <Label fontS="1.45em">
                    {getHourAndMinutes(item?.current?.sunset)}
                  </Label>
                  <Label color="rgba(255,255,255,0.6)" fontS="1.1em">
                    Atardecer
                  </Label>
                </Container>
              </Container>
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

CurretlyInfoWeather.propTypes = {
  setLocation: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};
export default CurretlyInfoWeather;
