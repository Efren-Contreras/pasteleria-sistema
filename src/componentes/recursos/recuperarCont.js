import React, { useState } from "react";

/*Importar las etiquetas html a usar */
import { Stack, Container, Form, Button,Alert } from "react-bootstrap";

/**credenciales para entrar a firebase */
import app from "../../firebaseConfig/credenciales";

/**metodos de firebase para la utenticacion */
import {
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";

/**obtiene el estado de la autenticacion 
 * 
*/
const auth = getAuth(app);

//crear componente
const RecuperarCont = () => {
  /** Guardad los errores*/
  const [Error, setError] = useState('');

  /**Analiza lo recibido del formulario */
  async function submitHandler(e) {
    e.preventDefault();

    /**Obtiene los datos del formulario y los guarda en variables */
    const correo = e.target.formBasicEmail.value;

      try {
        await sendPasswordResetEmail(auth, correo);  
      } catch (error) {
        setError(error.message)
      }
      
    
  }

  return (
    <Container>
      <Stack gap={3}>
        {Error&&<Alert variant="danger">{Error}</Alert>}
        <h1>Recuperar Contraseña </h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button variant="dark" type="submit">
            "inicia sesión"
          </Button>
        </Form>

      </Stack>
    </Container>
  );
}

export default RecuperarCont;