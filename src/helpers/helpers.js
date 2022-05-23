import { getWeatherData } from "../services/weatherService";

//Convierto tiempo unix a Date
export const converDate = (date) => new Date(date * 1000);

//Obtengo horas del día actual y determino rango horario
export const getHour = (date) => {
  const dateAux = converDate(date);
  if (dateAux.getHours() < 12) {
    return `${dateAux.getHours()}am`;
  } else {
    return `${dateAux.getHours()}pm`;
  }
};

//Convierto temperatura de Kelvin a Celsius
export const getTemp = (temp) => {
  return temp - 273.15;
};

//Convierto millas en km/h
export const getKm = (speed) => {
  return speed * 1.6;
};

export const getNumberMonth = (date) => date.getMonth() + 1;

//Obtengo horas y minutos del dia actual
export const getHourAndMinutes = (date) => {
  let hour = converDate(date).getHours();
  let minutes = converDate(date).getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hour}:${minutes}`;
};

//Convierto primer letra en mayuscula
export const upperCaseFirtsLetter = (str) => {
  return `${str?.charAt(0)?.toUpperCase()}${str?.slice(1)}`;
};

//Reformo formato de titulo
export const reformTitle = (str) => {
  let titleAux = str;
  str = titleAux?.replace("/", "");
  let strAux = str?.replace("/", ", ");
  let strContinent = strAux?.replace("America", "");
  let strFinal = strContinent?.replace("_", " ");

  return strFinal;
};

//Obtengo nombre del día
export const getDayName = (fecha, shortForm = true) => {
  if (shortForm) {
    return ["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab", "Dom"][
      new Date(fecha).getDay()
    ];
  } else {
    return [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
      "Domingo",
    ][new Date(fecha).getDay()];
  }
};

//Obtengo nombre del mes
export const getMonthName = (date) => {
  return [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ][new Date(date).getMonth()];
};

//Obtengo formato de día actual
export const getCurrentlyDate = (date) => {
  const dataAux = converDate(date);
  const numberDay = dataAux.getDate();
  const month = getMonthName(dataAux);
  const dayName = getDayName(dataAux, false);

  return `${dayName}, ${numberDay} de ${month}`;
};

//obtengo ubicación del usuario
export const getLocation = (setLocation, setNameCity) => {
  if ("geolocation" in navigator) {
    function getPosition(position) {
      if (
        position?.coords?.latitude === -32.9515008 &&
        position?.coords?.longitude === -60.6404608
      ) {
        setLocation({
          lat: "-32.9468",
          long: "-60.6393",
        });
        sessionStorage.setItem("lat", "-32.9468");
        sessionStorage.setItem("long", "-60.6393");
        setNameCity("Argentina, Rosario");
      } else {
        setLocation({
          lat: position?.coords?.latitude,
          long: position?.coords?.longitude,
        });
        sessionStorage.setItem("lat", position?.coords?.latitude);
        sessionStorage.setItem("long", position?.coords?.longitude);
      }
    }
    function getError(err) {
      sessionStorage.clear();
      setLocation({
        lat: "-32.9468",
        long: "-60.6393",
      });
      console.log(err.message);
    }
    navigator.geolocation.getCurrentPosition(getPosition, getError);
  }
};
