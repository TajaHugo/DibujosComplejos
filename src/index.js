import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contador from './components/contador';
import DibujosComplejosArray from './components/DibujosComplejosArray';
import DibujosComplejosRender from './components/DibujosComplejosRender';
import PadreDeporte from './components/PadreDeporte';
import PadreNumero from './components/PadreNumeros';
import Comics from './components/Comics/Comics';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Comics/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
