import React, { Component } from "react";
import Barra from './Barra';
function Header(props) {
    
      return (
        <header>
           <div>
             <h1>TodoYa</h1>
             <Barra />
           </div>
        </header>
    )
  }

  export default Header;