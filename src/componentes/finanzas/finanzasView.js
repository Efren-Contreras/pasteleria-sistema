import React from "react";
import Menu from "../recursos/menuFinanzas";
import {BrowserRouter, Route, Routes} from 'react-router-dom' 

import Perfil from "../recursos/perfil";

//Componentes
import Show from './Show';
import Create from './Create';
import Edit from './Edit';

//Componentes Gastos
import ViewGastos from './viewGastos';
import RegistrarGastos from './registrarGastos';
import EditarGastos from './editarGastos';

function FinanzasView(user) {
  const uid = user.user.user;
  return(     
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path='/verFinanzas' element={ <Show /> } />
        <Route path='/createFinanzas' element={ <Create /> } />
        <Route path='/edit/:id' element={ <Edit /> } />
        <Route path='/verGastos' element={ <ViewGastos /> } />
        <Route path='/createGastos' element={ <RegistrarGastos /> } />
        <Route path='/editGastos/:id' element={ <EditarGastos /> } />
        <Route path='/perfil' element={ <Perfil user={{uid}}/>} />
      </Routes>
     </BrowserRouter> 
  );
}

export default FinanzasView;