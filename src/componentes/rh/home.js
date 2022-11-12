import React from "react";

/*Importar las etiquetas html a usar */
import { Stack, Container, Form, Button } from "react-bootstrap";

/*firebase*/ 
import app from "../../credenciales";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

/**constantes, la primera obtiene el estado de la autenticacion
 * el segundo hace conecxion con la base de datos firebase
 */
const auth = getAuth(app);
const firestore = getFirestore(app);

//crear componente
const Home = () => {
  return (
    /**boton para cerrar sesion */
    <Button onClick={() => signOut(auth)}>Cerrar sesión </Button>
  );
}

export default Home;