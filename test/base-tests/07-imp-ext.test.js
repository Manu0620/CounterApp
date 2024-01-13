import { getHeroeById, getHeroeByOwner } from "../../src/base-test/07-imp-exp";

describe('Pruebas en 07-imp-ext', () => {

    test('getHeroeById debe de retornar un heroe por id', () => {

        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    })

    test('getHeroeById debe de retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();

    })

    test('getHeroeByOwner DC debe de retornar un arreglo de 3 elementos y heroes de DC', () => {

        const owner = 'DC';
        const arr = getHeroeByOwner( owner );

        expect( arr ).toHaveLength( 3 );

        const [ heroe1, heroe2, heroe3 ] = arr; 

        expect( heroe1 ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        expect( heroe2 ).toEqual({ id: 3, name: 'Superman', owner: 'DC' });
        expect( heroe3 ).toEqual({ id: 4, name: 'Flash', owner: 'DC' });
    })

    test('getHeroeByOwner Marvel debe de retornar un arreglo de 2 elementos', () => {

        const owner = 'Marvel';
        const arr = getHeroeByOwner( owner );

        expect( arr ).toHaveLength( 2 );

        const [ heroe1, heroe2 ] = arr; 

        expect( heroe1 ).toEqual({ id: 2, name: 'Spiderman', owner: 'Marvel' });
        expect( heroe2 ).toEqual({ id: 5, name: 'Wolverine', owner: 'Marvel' });
    })
})