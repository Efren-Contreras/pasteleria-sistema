import React, { useState, useEffect } from "react";
import  Login  from "./componentes/rh/login";
import Home from "./componentes/rh/home";

/*importar credenciales para firebase*/
import app from "./credenciales";
/*para hacer uso de modulos de firebase */
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);

function App() {
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
