import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, WrapperImg } from "../styled/Container";
import { Button, Label } from "../styled/Text";
import Gif from "../assets/images/image_processing20200511-15721-1dqznew.png";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Container
      width="800px"
      justify="center"
      align="center"
      height="100vh"
      column
    >
      {!location?.state && (
        <WrapperImg width="60px" height="60px" src={Gif} alt="Emoji" />
      )}
      <Label mb="30px" mt="10px" fontS="2em">
        {location?.state ? location.state : "Ups! algo salio mal!"}
      </Label>
      <Button onClick={() => navigate("/")}>Reintentar</Button>
    </Container>
  );
};

export default NotFound;
