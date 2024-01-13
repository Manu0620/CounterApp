
const usContext = ({ clave, nombre, edad, rango = "Capitan" }) => {
  //console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latIng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

console.log(nombreClave, anios);

console.log(lat, lng);
