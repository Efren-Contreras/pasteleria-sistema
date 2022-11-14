import React from "react";
import Menu from "../recursos/menuFinanzas";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Perfil from "../recursos/perfil";

//Componentes
import Show from './Show';
import Create from './Create';
import Edit from './Edit';
function FinanzasView(user) {
  const uid = user.user.user;
  return( 
    
    <BrowserRouter>
      <Menu></Menu>
      <Perfil user={{uid}}/>
      <Routes>
        <Route path='/' element={ <Show /> } />
        <Route path='/create' element={ <Create /> } />
        <Route path='/edit/:id' element={ <Edit /> } />
      </Routes>
     </BrowserRouter> 
  );
}

export default FinanzasView;