import {React, useEffect} from "react"; 
import "../../src/index.css";
import inicio from "../assets/inicio.jpg";
import listabodegas from "../assets/listabodega.jpg";
import eventos from "../assets/eventos.jpg"
import { Link, useLocation } from "react-router-dom";

const Inicio = () =>{
    const location = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [location]);
    return(
    <div className="body-inicio">
        <div className="portada-inicio">
            <img src={inicio} alt="fotobienvenida"></img>
            <div className="texto-portada">
                <h1>Check Wineries</h1>
            </div>
        </div>

        <div className="secciones">
            <div className="seccion">
                <Link to="/bodegas">
                    <img src= {listabodegas} alt="seccion Lista de Bodegas"></img>
            
                    <div className="texto-seccion">
                        <h1>Lista Bodegas</h1>

                    </div>
            </Link>
            </div>
            <div className="seccion">
                <Link to="/eventos">
                    <img src= {eventos} alt="seccion Lista de Bodegas"></img>
            
                    <div className="texto-seccion">
                        <h1>Eventos</h1>

                    </div>
                </Link>
            </div>
        </div>

    </div>
    )
}

export default Inicio;