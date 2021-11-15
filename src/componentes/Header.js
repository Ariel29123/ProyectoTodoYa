import React, { Component } from "react";
import Carrito from './Carrito';
import Buscador from './Buscador';
import Login from "./Login";


function Header(props) {
    
      return (
        <header>
           <div>
             <h1>TodoYa</h1>
             <Carrito />
             <Buscador />
             <Login />
           </div>
        </header>
    )
  }

  export default Header;