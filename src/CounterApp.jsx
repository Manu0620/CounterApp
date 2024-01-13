import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {
   
    const [ count, setCount ] = useState( value ); 

    const handleAdd = () => setCount( count + 2 );

    const handleSubtract = () => {
        if( count === 0 )
            return;
        setCount( count - 2);
    }

    const handleReset = () => setCount( value );

    return(
        <>
            <h1>Counter App</h1>
            <h3>Count: { count }</h3>

            <button onClick={ handleSubtract }> -2 </button>
            <button onClick={ handleAdd }> +2 </button>
            <button aria-label="btn-reset" onClick={ handleReset }> ←Reset </button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 'No hay valor!'
}