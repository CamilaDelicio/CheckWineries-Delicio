import React from "react";
import "../../src/index.css";
import menu from "../assets/menu.png";


const Header = () => {
    return(
        <header>
            <div className="menu">
                <img src= {menu} alt= "menu desplegable"></img>
            </div>
            <div className="isotipo">
                <h1>CW</h1>
            </div>
            
             
        </header>
       
    )
}


export default Header; 