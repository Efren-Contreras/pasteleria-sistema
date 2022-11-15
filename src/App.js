import React, { useState, useEffect } from "react";

/**Vistas principales */
import Login from "./componentes/pantallas/login";
import Home from "./componentes/pantallas/home";

/*importar credenciales para firebase*/
import app from "./firebaseConfig/credenciales";
/*para hacer uso de modulos de firebase autenticacion */
import { getAuth, onAuthStateChanged } from "firebase/auth";

/*para hacer uso de modulos de firebase firestore*/
import { getFirestore, doc, getDoc } from "firebase/firestore";

/**conexion con servicio de autenticacion y base de datos */
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

  const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  useEffect(() => {
  window.addEventListener("beforeinstallprompt", (event) => {
    // Prevent the mini-infobar from appearing on mobile.
    event.preventDefault();
    console.log("👍", "beforeinstallprompt", event);
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install button container.
    setIsReadyForInstall(true);
  });
}, []);

  return (
    /**dependiendo si hay sesion iniciada o no redirige al inicio o login */
    
    <>
    {isReadyForInstall && <button onClick={downloadApp}>DESCARGAR</button>}
      {usuarioGlobal ? (
        <Home user={usuarioGlobal} />
      ) : (
        <Login></Login>
      )}
    </>
  );
}

export default App;
