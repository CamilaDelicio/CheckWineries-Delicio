import "../index.css";
import React from "react";
import { Link } from "react-router-dom";
import logofooter from "../assets/logofooter.png";


const Footer = () => {
    return(
        <footer>
        <div className="contenedor-footer">
            <div className="enlace">
                <p>Secciones</p>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link><br></br>
                        <Link to="/bodegas">Lista Bodegas</Link><br></br>
                        <Link to="/eventos">Eventos</Link><br></br>
                    </li>
                </ul>
            </div>
            <div className="logo-footer">
                <img src={logofooter} alt="logofooter"></img>
            </div>
            <div className="formulario">
                <p>¿Tenés alguna duda o sugerencia?</p>
                <button>Contáctanos</button>
            </div>

        </div>
        <div className="derechos">
            <p>© 2024 CheckWineries. Todos los derechos reservados.</p>
        </div>
        </footer>
    )
}

export default Footer;