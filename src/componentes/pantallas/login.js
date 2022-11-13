import React, { useState } from "react";

/*Importar las etiquetas html a usar */
import { Stack, Container, Form, Button,Alert } from "react-bootstrap";

/**credenciales para entrar a firebase */
import app from "../../firebaseConfig/credenciales";

/**metodos de firebase para la utenticacion */
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";

/**obtiene el estado de la autenticacion 
 * 
*/
const auth = getAuth(app);

//crear componente
const Login = () => {
  /** Guardad los errores*/
  const [Error, setError] = useState('');

  /**Analiza lo recibido del formulario */
  async function submitHandler(e) {
    e.preventDefault();

    /**Obtiene los datos del formulario y los guarda en variables */
    const correo = e.target.formBasicEmail.value;
    const contra = e.target.formBasicPassword.value;

    /**Analizar y modificar para solo poder iniciar sesion */
    
      // //si se registra
      // try{
      //   await createUserWithEmailAndPassword(
      //     auth,
      //     correo,
      //     contra
      //   );
      // }catch (error){
      //   setError(error.message)
      //   console.log(error.message)
      // }
      
    
      // si está iniciando sesión
      try {
        await signInWithEmailAndPassword(auth, correo, contra);  
      } catch (error) {
        setError(error.message)
        console.log(error.message)
      }
      
    
  }

  return (
    <Container>
      <Stack gap={3}>
        {Error&&<Alert variant="danger">{Error}</Alert>}
        <h1>"inicia sesión"</h1>
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
            "inicia sesión"
          </Button>
        </Form>

      </Stack>
    </Container>
  );
}

export default Login;