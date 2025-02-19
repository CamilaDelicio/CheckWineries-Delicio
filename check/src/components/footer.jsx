import "../index.css";
import React from "react";
import { Link } from "react-router-dom";
import logofooter from "../assets/logofooter.png";


const Footer = () => {
    return(
        <footer>
        <div className="contenedor-footer">
            <div className="enlace">
                <ul>
                    <li>
                        <Link to="/preguntas">Preguntas Frecuentes</Link><br></br>
                        <Link to="/politicas">Política de Privacidad</Link><br></br>
                        <Link to="/terminos">Terminos y Condiciones</Link><br></br>
                        <Link to="/nuevasBodegas">Suma tu Bodega</Link><br />
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
            <p>© 2025 Check Wineries. Todos los derechos reservados.</p>
        </div>
        </footer>
    )
}

export default Footer;