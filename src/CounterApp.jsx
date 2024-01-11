import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {
    
    const [ count, setCount ] = useState( value ); 

    const handleAdd = () => setCount( count + 1 );

    const handleSubtract = () => {
        if( count === 0 )
            return;
        setCount( count - 1 );
    }

    const handleReset = () => setCount( value );

    return(
        <>
            <h1>Counter App</h1>
            <h3>Count: { count } </h3>

            <button onClick={ handleSubtract }> -1 </button>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleReset }> ←Reset </button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 'No hay valor!'
}