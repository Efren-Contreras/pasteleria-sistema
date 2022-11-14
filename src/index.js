import React from 'react';
/**resolver problema del router */
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/**Necesario pára llamar estilos de bootstrap**/ 
import "bootstrap/dist/css/bootstrap.min.css";


//ANDY
import 'bootstrap/dist/css/bootstrap.min.css'

/**resolver problema del router */
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
