// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

// import Badge from './components/Badge';
import App from './components/App';


const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
//ReactDOM.render(<Badge firstName="Juan" lastName="Jorgito" jobTitle="Frontend Developer" twitter="JuanJose94" />, container);

ReactDOM.render(<App />, container);
