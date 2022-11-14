import React from "react";
import Menu from "../recursos/menuFinanzas";
import {BrowserRouter, Route, Routes} from 'react-router-dom' 

//Componentes Ganancias 
/** 
import Show from './Show';
import Create from './Create';
import Edit from './Edit';
        
        <Route path='/' element={ <Show /> } />
        <Route path='/create' element={ <Create /> } />
        <Route path='/edit/:id' element={ <Edit /> } />

*/

//Componentes Gastos
import ViewGastos from './viewGastos';
import RegistrarGastos from './registrarGastos';
import EditarGastos from './editarGastos';

function FinanzasView() {
  return(     
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path='/' element={ <ViewGastos /> } />
        <Route path='/RegistrarGastos' element={ <RegistrarGastos /> } />
        <Route path='/EditarGastos/:id' element={ <EditarGastos /> } />

      </Routes>
     </BrowserRouter> 
  );
}

export default FinanzasView;