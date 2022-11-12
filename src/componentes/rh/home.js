import React from "react";

/*Importar las etiquetas html a usar */
import { Stack, Container, Form, Button } from "react-bootstrap";

/*firebase*/ 
import app from "../../credenciales";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const auth = getAuth(app);
const firestore = getFirestore(app);

//crear componente
const Home = () => {
  return (
    <Button onClick={() => signOut(auth)}>Cerrar sesión </Button>
  );
}

export default Home;