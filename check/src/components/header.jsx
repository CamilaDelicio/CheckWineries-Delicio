import React, { useState } from "react";
import "../../src/index.css";
import menu from "../assets/menu.png";
import logotipo from "../assets/logocheck1.png"
import { Link } from "react-router-dom";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [seccionAct, setSeccionAct] = useState(null)

    const clicMenu = () => {
        setMenuOpen(!menuOpen);
      };
      const clicSeccion = (seccion) => {
        setSeccionAct(seccionAct === seccion ? null : seccion);
      };
    const cerrarMenu = ()=> {
      setMenuOpen(false);
    }
    return(
        <header>
            <div className="menu" onClick={clicMenu}>
                <img src= {menu} alt= "menu desplegable"></img>
            </div>
            <div className="logotipo">
                <img src = {logotipo } alt="logotipo Check Wineries"></img>

            </div>
            <nav className={menuOpen ? "menu-desplegable show" : "menu-desplegable"}>
            <ul>
                <li>
                    <Link to="/inicio" onClick={cerrarMenu}> Inicio</Link>
                </li>
                <li onClick={() => clicSeccion("bodegas")}>
                    <Link>Lista Bodegas</Link>
                    {seccionAct === "bodegas" && (
                        <ul className="sub-menu">
                            <li><Link to="/todas"onClick={cerrarMenu}>Todas las bodegas</Link></li>
                            <li><Link to="/comidas" onClick={cerrarMenu}>Según Comidas</Link></li>
                            <li><Link to="/actividades" onClick={cerrarMenu}>Según Actividades</Link></li>
                            <li><Link to="/museos" onClick={cerrarMenu}>Mueseos del vino</Link></li>
                            <li><Link to="/olivicultura" onClick={cerrarMenu}>Olivicultura</Link></li>
                        </ul>
                    )}
                </li>
  
              <li onClick={() => clicSeccion("eventos")}>
                <Link>Eventos</Link>
                {seccionAct === "eventos" && (
                  <ul className="sub-menu">
                    <li><Link to= "/eventos" onClick={cerrarMenu}>Lista de Eventos</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </header>
       
    )
}


export default Header; 