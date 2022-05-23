import React from "react";
import { Select } from "../styled/Input";
import PropTypes from "prop-types";

const SelectCity = ({ setLoading, setLocation, setNameCity }) => {
  const listOptions = [
    { name: "Buenos Aires", id: 1 },
    { name: "Cordoba", id: 2 },
    { name: "Ushuaia", id: 3 },
    { name: "Jujuy", id: 4 },
    { name: "Mendoza", id: 5 },
  ];

  const handleChange = (e) => {
    setLoading(true);
    setNameCity();
    switch (e.target.value) {
      case "1":
        setLocation({ lat: "-34.61315", long: "-58.37723" });
        break;
      case "2":
        setLocation({ lat: "-31.4135", long: "-64.18105" });

        break;
      case "3":
        setLocation({ lat: "-54.81084", long: "-68.31591" });
        break;
      case "4":
        setLocation({ lat: "-24.19457", long: "-65.29712" });
        break;
      case "5":
        setLocation({ lat: "-32.89084", long: "-68.82717" });
        break;
      default:
        setLocation({ lat: "-34.61315", long: "-58.37723" });
        break;
    }
  };
  return (
    <Select onChange={(e) => handleChange(e)}>
      <option>Selecciona una ciudad</option>
      {listOptions.map((city) => (
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
  setNameCity: PropTypes.func.isRequired,
};

export default SelectCity;
