import React from "react";
import { Container } from "../styled/Container";
import { Label } from "../styled/Text";

const NotFound = () => {
  return (
    <Container jutify="center" align="center" height="100vh">
      <Label fontS="2em">Problemas de conexión, intenta más tarde.</Label>
    </Container>
  );
};

export default NotFound;
