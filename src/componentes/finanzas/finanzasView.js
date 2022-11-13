import React from "react";
import Menu from "../recursos/menuFinanzas";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

//Componentes
import Show from '../../components/Show';
import Create from '../../components/Create';
import Edit from '../../components/Edit';
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