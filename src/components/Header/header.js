import React from "react";
import "./header.css";

function Header(props){
    return <div>
              <header className = "header">CLICKY BIRDS</header>
              <h3 className = "gameTip">Click on an image to earn points, but don't click on any more than once!</h3>
           </div>
    
}

export default Header;