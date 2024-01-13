import { getUser, getUsuarioActivo } from '../../src/base-test/05-funciones';

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {
        
        const testUser = {
            uid: "ABC123",
            username: "mmadera",
        };

        const user = getUser();

        expect ( testUser ).toEqual( user );

    });

    test('getUsuarioActivo debe de retornar un objeto', () => {

        const name = 'Manuel';

        const testUser = {
            uid: "ABC567",
            username: name,
        }

        const user = getUsuarioActivo( name );

        expect( testUser ).toEqual( user );

    });

});