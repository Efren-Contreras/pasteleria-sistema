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

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

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

serviceWorkerRegistration.register({
  onUpdate: async (registration) => {
    // Corremos este código si hay una nueva versión de nuestra app
    // Detalles en: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
    if (registration && registration.waiting) {
      await registration.unregister();
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
      // Des-registramos el SW para recargar la página y obtener la nueva versión. Lo cual permite que el navegador descargue lo nuevo y que invalida la cache que tenía previamente.
      window.location.reload();
    }
  },
});
