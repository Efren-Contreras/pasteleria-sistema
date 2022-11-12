import React, { useState, useEffect } from "react";
import  Login  from "./componentes/rh/login";
import Home from "./componentes/rh/home";

/*importar credenciales para firebase*/
import app from "./credenciales";
/*para hacer uso de modulos de firebase */
import { getAuth, onAuthStateChanged } from "firebase/auth";

/**obtiene el estado de la autenticacion */
const auth = getAuth(app);

function App() {
  /**Verifica si hay sesion iniciada */
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //código en caso de que haya sesión inciiada
      setUsuarioGlobal(usuarioFirebase);
    } else {
      //código en caso de que no haya sesión iniciada
      setUsuarioGlobal(null);
    }
  });



  return (
    /**dependiendo si hay sesion iniciada o no redirige al inicio o login */
    <>
      {usuarioGlobal ? (
        <Home correoUsuario={usuarioGlobal.email} />
      ) : (
        <Login></Login>
      )}
    </>
  );
}

export default App;
