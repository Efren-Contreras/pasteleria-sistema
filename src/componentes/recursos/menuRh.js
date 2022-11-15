import { Button } from "react-bootstrap";

import { getAuth, signOut } from "firebase/auth";
import app from "../../firebaseConfig/credenciales";

import {Link} from "react-router-dom";

const auth = getAuth(app);

function MenuRh() {
  return (
    <>
      <Link to={"/perfil"}>perfil</Link>
      <Link to={"/recContr"}>recuperar Contraseña</Link>
      <Button onClick={() => signOut(auth)}>Cerrar sesión </Button>
    </>
    );
}

export default MenuRh;