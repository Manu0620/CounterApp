import { getImagen } from "../../src/base-test/10-async-await";

describe('Pruebas en 10-async-await', () => { 
    
    test('getImagen debe de retornar un URL de la imagen', async() => {
        
        const url = await getImagen();
        expect( typeof url ).toBe( 'string' );

    })

    test('getImagen debe de obtener un error si no se tiene una imagen', async() => {
        
        const resp = await getImagen();
        expect( resp ).toBe( 'No se encontro la imagen' );
        
    })

})