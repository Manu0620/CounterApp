const persona = {
  nombre: "Manuel",
  apellido: "Madera",
  edad: 23,
  direccion: {
    ciudad: "Santiago de los Caballeros",
    zip: 51000,
    lat: 18.472,
    lng: 69.873,
  },
};

//console.table({ persona });

const persona2 = { ...persona };
persona2.nombre = "Ariel";

console.log({ persona });
console.log({ persona2 });
