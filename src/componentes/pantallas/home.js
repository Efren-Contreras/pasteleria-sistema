import React from "react";

/*Importar las etiquetas html a usar */
import { Stack, Container, Form, Button } from "react-bootstrap";

/*firebase*/ 
import app from "../../credenciales";
import { getAuth, signOut } from "firebase/auth";

/**Importar vistas de cada rol */
import RhView from "../rh/rhView";
import AdminView from "../admin/adminView";
import FinanzasView from "../finanzas/finanzasView";

/**constantes, la primera obtiene el estado de la autenticacion
 * el segundo hace conecxion con la base de datos firebase
 */
const auth = getAuth(app);

//crear componente
function Home ({user}) {
  return (
    /**html */
    <Container>
      <Stack gap={3}>
        
        {user.rol === "admin" ? <AdminView/> :
        user.rol === "finanzas" ? <FinanzasView/> : 
        user.rol === "rh" ? <RhView/> : "error"}

      </Stack>
    </Container>    
  );
}

export default Home;