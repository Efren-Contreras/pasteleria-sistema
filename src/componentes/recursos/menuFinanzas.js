
import { Button } from "react-bootstrap";

import { getAuth, signOut } from "firebase/auth";
import app from "../../firebaseConfig/credenciales";

import {Link} from "react-router-dom";

const auth = getAuth(app);

function MenuFinanzas() {
  return (
    <>
    <Link to={"/createFinanzas"}>Crear Finanzas</Link>
    <Link to={"/verFinanzas"}>Ver Finanzas</Link>
    <Link to={"/perfil"}>perfil</Link>

    <Button onClick={() => signOut(auth)}>Cerrar sesión </Button>
    </>
    );
}

export default MenuFinanzas;