import React from "react";
import { BeatLoader } from "react-spinners";
import { Container } from "../styled/Container";
import PropTypes from "prop-types";

const Loader = ({ color, size }) => {
  return (
    <Container justify="center" align="center" height="100vh">
      <BeatLoader margin={5} color={color} size={size} />
    </Container>
  );
};

Loader.prototypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Loader;
