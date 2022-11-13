import React from "react";

/*Importar las etiquetas html a usar */
import { Stack, Container, Form, Button } from "react-bootstrap";

/*firebase*/ 
import app from "../../credenciales";
import { getAuth, signOut } from "firebase/auth";

/**Importar vistas de cada rol */
import UserView from "./userView";
import AdminView from "./adminView";

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
        <Button onClick={() => signOut(auth)}>Cerrar sesión </Button>
        {user.rol === "admin" ? <AdminView/> : <UserView/>}
      </Stack>
    </Container>
  );
}

export default Home;