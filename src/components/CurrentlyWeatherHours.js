import React from "react";
import { converDate, getHour, getTemp } from "../helpers/helpers";
import { Card, Container, WrapperImg } from "../styled/Container";
import { Label } from "../styled/Text";

const CurrentlyWeatherHours = ({ data }) => {
  return (
    <>
      <Label mt="40px" fontS="1.125em" fontW="500">
        El tiempo hoy
      </Label>
      <Container width="800px" style={{ overflow: "auto" }} mt="10px">
        {data?.hourly
          ?.filter(
            (item) => converDate(item.dt).getDate() === new Date().getDate()
          )
          ?.map((item, i) => (
            <Card
              justify="space-around"
              align="center"
              flexD="column"
              width="6.05em"
              mg="5px"
              flexShrink="0"
              key={i}
            >
              <Label mb="0.5em">{getHour(item?.dt)}</Label>
              {item?.weather?.map(
                (icon, idx) =>
                  idx === 0 && (
                    <WrapperImg
                      key={idx}
                      src={`http://openweathermap.org/img/wn/${icon?.icon}@2x.png`}
                      width="54px"
                      height="54px"
                      alt="icono clima"
                    />
                  )
              )}

              <Label mt="0.5em" fontS="1.125em">
                {getTemp(item?.temp).toFixed(0)}
              </Label>
            </Card>
          ))}
      </Container>
    </>
  );
};

export default CurrentlyWeatherHours;
