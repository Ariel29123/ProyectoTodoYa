import React, { Component } from "react";
import Barra from './Barra';
import Barra from './Buscador';
function Header(props) {
    
      return (
        <header>
           <div>
             <h1>TodoYa</h1>
             <Carrito />
             <Barra />
           </div>
        </header>
    )
  }

  export default Header;