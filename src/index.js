import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// function Saudacao(props) {
//   return <h2>Olá,  { props.name }!</h2>;
// }

// const myElement = <Saudacao name="Lindaa" />;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
