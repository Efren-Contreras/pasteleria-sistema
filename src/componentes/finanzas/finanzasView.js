import React from "react";
import Menu from "../recursos/menuFinanzas";
import registrarGastos from "./componentes/finanzas/registrarGastos";
import viewGastos from "./src/componentes/finanzas/viewGastos";

function FinanzasView() {
  return( 
    <>
    <Menu/>
    hola finanzas
    <registrarGastos />
    <viewGastos />
    </>
  );
}

export default FinanzasView;