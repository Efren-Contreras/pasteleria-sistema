import React from "react";
import Menu from "../recursos/menuFinanzas";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

//Componentes
import Show from './Show';
import Create from './Create';
import Edit from './Edit';
function FinanzasView() {
  return( 
    
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path='/' element={ <Show /> } />
        <Route path='/create' element={ <Create /> } />
        <Route path='/edit/:id' element={ <Edit /> } />
      </Routes>
     </BrowserRouter> 
  );
}

export default FinanzasView;