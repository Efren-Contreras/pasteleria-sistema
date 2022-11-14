import React, {  useEffect, useState } from "react";

/*importar credenciales para firebase*/
import app, { db } from "../../firebaseConfig/credenciales";
/*para hacer uso de modulos de firebase autenticacion */
import { getAuth, onAuthStateChanged } from "firebase/auth";

/*para hacer uso de modulos de firebase firestore*/
import { getFirestore, doc, getDoc } from "firebase/firestore";

function Perfil(user) {
  const id = user.user.uid.uid;
  const email = user.user.uid.email;

  const [ Nombre, setNombre ] = useState(''); 
  
  const getUsuarioById = async (id) => {
    const usuario = await getDoc( doc(db, "usuarios", id) )
    if(usuario.exists()) {
        //console.log(product.data())
        setNombre(usuario.data().rol)    
      }else{
        console.log('El registro de la ganacia no existe')
    }
}
 
  useEffect( () => {
    getUsuarioById(id)
    // eslint-disable-next-line
}, [])

    return( 
    <>
     perfil
     <h1>{id}</h1>
     <h1>{email}</h1>
     <h1>{Nombre}</h1>
    </>
  );
}

export default Perfil;