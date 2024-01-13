import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    
    // test('Debe de hacer match con el snapshot', () => { 

    //     const title = 'Hola, Manuel';
    //     const { container } = render( <FirstApp title={ title } /> )

    //     expect( container ).toMatchSnapshot();

    // });

    test('Debe de mostrar el titulo en un h1', () => {

        const title = 'Hola, Manuel';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />)
        expect( getByText( title ) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toContain( title );
        expect( getByTestId('test-title').innerHTML ).toContain( title );

    });

    test('Debe de mostrar el subtitulo enviado por props', () => {

        const title = 'Hola, Manuel';
        const subtitle = 'Te saluda:';
        const { getAllByText } = render(
            <FirstApp 
                title={ title }
                subtitle={ subtitle }
            />
        );
        
        expect( getAllByText(subtitle).length ).toBe( 2 );

    });

});