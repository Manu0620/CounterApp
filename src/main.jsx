import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import './styles.css';

//import { HelloWorldApp } from './HelloWorldApp';
//import { FirstApp } from './FirstApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <FirstApp title='Hola, Manuel' subtitle='Te saluda: ' name='Manuel Madera'/> */}
        <CounterApp value={ 0 } />
    </React.StrictMode>
)