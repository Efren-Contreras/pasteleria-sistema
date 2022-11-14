import React from "react";
import Menu from "../recursos/menuRh.js";

import Perfil from "../recursos/perfil";

function RhView(user) {
  const uid = user.user.user;
  return( 
    <>
      <Menu/>
      <Perfil user={{uid}}/>
    </>
  );
}

export default RhView;
