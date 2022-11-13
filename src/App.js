import React, { useState } from "react";

/**Vistas principales */
import Login from "./componentes/pantallas/login";
import Home from "./componentes/pantallas/home";

/*importar credenciales para firebase*/
import app from "./firebaseConfig/credenciales";
/*para hacer uso de modulos de firebase autenticacion */
import { getAuth, onAuthStateChanged } from "firebase/auth";

/*para hacer uso de modulos de firebase firestore*/
import { getFirestore, doc, getDoc } from "firebase/firestore";

const auth = getAuth(app);

const firestore = getFirestore(app);

function App() {
  /**Verifica si hay sesion iniciada */
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  /** obtiene rol*/
  async function getRol(uid) {
    /**hace busquerda de documento segun el id recibido*/
    const docuRef = doc(firestore, `usuarios/${uid}`);
    /**obtiene la informacion encriptada */
    const docuCifrada = await getDoc(docuRef);
    /**de la informacion ya sifrada se obtiene el campo rol */
    const infoFinal = docuCifrada.data().rol;
    return infoFinal;
  }

  /**hace busqueda de la informacion de la cuenta  */
  function setUserWithFirebaseAndRol(usuarioFirebase) {
    
    /**obtiene el rol mandando el uid de la cuenta que inicio sesion
     * y concadena el rol
     */
    getRol(usuarioFirebase.uid).then((rol) => {
      /**obtiene los datos de la base de datos */
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol,
      };
      /**usa el constructos para mandar el array al metodo 
       * guarda en la constante de usurioGlobal
       */
      setUsuarioGlobal(userData);
      console.log("userData fianl", userData);
    });
  }

  /**verifica si hay sesion iniciada */
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //código en caso de que haya sesión inciiada
      if (!usuarioGlobal) {
        /** hace busqueda de los datos de la cuenta que inicio sesion 
         * manda el uid de la sesion o algo asi
        */
        setUserWithFirebaseAndRol(usuarioFirebase);
      }
    } else {
      //código en caso de que no haya sesión iniciada
      setUsuarioGlobal(null);
    }
  });



  return (
    /**dependiendo si hay sesion iniciada o no redirige al inicio o login */
    
    <>
      {usuarioGlobal ? (
        <Home user={usuarioGlobal} />
      ) : (
        <Login></Login>
      )}
    </>
  );
}

export default App;
