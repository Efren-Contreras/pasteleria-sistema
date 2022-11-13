
import { Button } from "react-bootstrap";

import { getAuth, signOut } from "firebase/auth";
import app from "../../credenciales";

const auth = getAuth(app);

function MenuFinanzas() {
  return (
    <Button onClick={() => signOut(auth)}>Cerrar sesión </Button>
    );
}

export default MenuFinanzas;