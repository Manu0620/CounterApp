import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Pruebas en <CounterApp />', () => {

    const value = 10;

    test('debe de hacer match con el snapshot', () => {

        const { container } = render(  
            <CounterApp 
                value={ value }
            />           
        )

        expect( container ).toMatchSnapshot();

    })

    test('debe de mostar el valor inicial en 10', () => {

        render(
            <CounterApp
                value={ value }
            />
        )

        expect( screen.getByRole( 'heading', { level: 3 }).innerHTML ).toBe( `Count: ${ value }` );

    })

    test('debe de incrementar con el boton +2', () => {

        render(     
            <CounterApp 
                value={ value }
            />
        );

        fireEvent.click( screen.getByText('+2') )
        expect( screen.getByText(`Count: 12`) ).toBeTruthy();

    })

    test('debe de decrementar con el boton -2', () => {

        render(
            <CounterApp
                value={value}
            />
        );

        fireEvent.click(screen.getByText('-2'))
        expect(screen.getByText(`Count: 8`)).toBeTruthy();

    })

    test('debe de funcionar el boton de reset', () => {

        render(
            <CounterApp
                value={value}
            />
        );
        fireEvent.click(screen.getByText('+2'))
        fireEvent.click(screen.getByText('+2'))
        fireEvent.click(screen.getByText('+2'))
        //fireEvent.click(screen.getByText('←Reset'))
        fireEvent.click(screen.getByRole( 'button', { name: 'btn-reset' } ));

        expect( screen.getByText(`Count: ${ value }`) ).toBeTruthy();

    })

})