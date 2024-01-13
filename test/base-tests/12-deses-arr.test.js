import { retornarArreglo } from "../../src/base-test/12-deses-arr";


describe('Pruebas en 12-deses-arr', () => {

    test('debe de retornar un string y un numero', () => {
        
        const [ letters, numbers ] = retornarArreglo();
        
        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        expect( typeof letters ).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' );

        expect( letters ).toEqual( expect.any(String) );

        
    })

})