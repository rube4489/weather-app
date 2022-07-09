# Weather App

Aplicación web para consulta de clima.

## Acerca del proyecto

- Aplicación realizada en react js y styled components para los estilos.
- Optimizada para dispositivos móviles(iPhone xr,12pro, se, Ipad Air, Pixel5, Samsung A52, etc.).
- Optimizada para resolución 1280 x 768, 1366 x 768. 1920 \* 1080.
- Se utilizó openweathermap como API de consulta.
- Posee selector de 5 ciudades ya establecidas.
- Muestra tiempo actual y de los próximos 5 días.

### Desktop

![](https://i.ibb.co/SmV05kZ/desktop.png)

### Mobile

![](https://i.ibb.co/9NY72Fs/mobile.png)

## Demo

En el siguiente link podrá visualizar la demo [weather app](https://weatherconsultapp.netlify.app/ "weather app")

## Instalación en ambiente local

Descargar el repositorio

$ git clone https://github.com/rube4489/weather-app.git

## Instalar las dependencias

En el directorio del proyecto, ejecutar:

#### NPM

$ npm install

#### YARN

$ yarn install

## Configuración

Copiar el archivo .env-example y renombrarlo por .env

Ingresar variable de entorno

REACT_APP_API_KEY=AQUI_TU_KEY_DE_OPENWEATHERMAP

Nota.- En caso de no contar con una apikey, podrá generarla de manera gratuita en https://openweathermap.org/

#### NPM

$ npm run start

#### YARN

$ yarn start
