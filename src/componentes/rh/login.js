import React, { useState } from "react";

/*Importar las etiquetas html a usar */
import { Stack, Container, Form, Button } from "react-bootstrap";

/**credenciales para entrar a firebase */
import app from "../../credenciales";

/**metodos de firebase para la utenticacion */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

/**obtiene el estado de la autenticacion 
 * 
*/
const auth = getAuth(app);

/**eliminar */
const googleProvider = new GoogleAuthProvider();


//crear componente
const Login = () => {

  /**estado del login, creo no es necesario
   * analizar
   */
  const [estaRegistrandose, setEstaRegistrandose] = useState(false);

  /**Analiza lo recibido del formulario */
  async function submitHandler(e) {
    e.preventDefault();

    /**Obtiene los datos del formulario y los guarda en variables */
    const correo = e.target.formBasicEmail.value;
    const contra = e.target.formBasicPassword.value;

    /**Analizar y modificar para solo poder iniciar sesion */
    if (estaRegistrandose) {
      //si se registra
      const usuario = await createUserWithEmailAndPassword(
        auth,
        correo,
        contra
      );
    } else {
      // si está iniciando sesión
      signInWithEmailAndPassword(auth, correo, contra);
    }
  }

  return (
    <Container>
      <Stack gap={3}>
        <h1>{estaRegistrandose ? "Regístrate" : "inicia sesión"}</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="dark" type="submit">
            {estaRegistrandose ? "Regístrate" : "inicia sesión"}
          </Button>
        </Form>

        <Button
          variant="primary"
          type="submit"
          style={{ width: "300px" }}
          onClick={() => signInWithRedirect(auth, googleProvider)}
        >
          Acceder con Google
        </Button>

        <Button
          style={{ width: "300px" }}
          variant="secondary"
          onClick={() => setEstaRegistrandose(!estaRegistrandose)}
        >
          {estaRegistrandose
            ? "¿Ya tienes cuenta? Inicia sesión"
            : "¿No tienes cuenta? Regístrate"}
        </Button>
      </Stack>
    </Container>
  );
}

export default Login;