//uso de template strings 

export function getSaludo( nombre ){
    return `Hola, ` + nombre;
}

const nombre = 'Manuel';

console.log(`Este es un texto: ${ getSaludo( nombre )}`);