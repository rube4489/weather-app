import React from "react";
import { Select } from "../styled/Input";
import PropTypes from "prop-types";

const SelectCity = ({ setLoading, setLocation }) => {
  const listOptionsCities = [
    { name: "Buenos Aires", id: 1 },
    { name: "Cordoba", id: 2 },
    { name: "Ushuaia", id: 3 },
    { name: "Jujuy", id: 4 },
    { name: "Mendoza", id: 5 },
  ];

  const handleChange = (e) => {
    setLoading(true);
    const lat1 = "-34.61315";
    const long1 = "-58.37723";
    const lat2 = "-31.4135";
    const long2 = "-64.18105";
    const lat3 = "-54.81084";
    const long3 = "-68.31591";
    const lat4 = "-24.19457";
    const long4 = "-65.29712";
    const lat5 = "-32.89084";
    const long5 = "-68.82717";

    switch (e.target.value) {
      case "1":
        setLocation({ lat: lat1, long: long1 });
        break;
      case "2":
        setLocation({ lat: lat2, long: long2 });
        break;
      case "3":
        setLocation({ lat: lat3, long: long3 });
        break;
      case "4":
        setLocation({ lat: lat4, long: long4 });
        break;
      case "5":
        setLocation({ lat: lat5, long: long5 });
        break;
      default:
        setLocation({ lat: lat1, long: long1 });
        break;
    }
  };
  return (
    <Select onChange={(e) => handleChange(e)}>
      <option>Selecciona una ciudad</option>
      {listOptionsCities.map((city) => (
        <option key={city?.id} value={city?.id}>
          {city?.name}
        </option>
      ))}
    </Select>
  );
};

SelectCity.propTypes = {
  setLocation: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default SelectCity;
