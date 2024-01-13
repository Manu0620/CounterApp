import { getSaludo } from "../../src/base-test/02-template-strings";

describe('Pruebas en 02-template-string', () => { 
    
    test('getSaludo debe retornar "Hola Manuel"', () => { 
        const name = 'Manuel';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola, ${ name }`);
    })  

})