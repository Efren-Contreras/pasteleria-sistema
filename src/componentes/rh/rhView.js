import React from "react";
import Menu from "../recursos/menuRh.js";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Perfil from "../recursos/perfil";
import RecuperarContr from "../recursos/recuperarCont";

function RhView(user) {
  const uid = user.user.user;
  return( 
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path='/perfil' element={ <Perfil user={{uid}}/>} />
        <Route path='/recContr' element={ <RecuperarContr></RecuperarContr>} />
      </Routes>
     </BrowserRouter> 
  );
}

export default RhView;
