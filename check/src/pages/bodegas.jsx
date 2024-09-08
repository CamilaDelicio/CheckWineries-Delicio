import {React, useEffect} from "react";
import "../../src/index.css";
import todas from "../assets/todas.jpg";
import comidas from "../assets/comidas.jpg";
import actividad from "../assets/actividades.jpg"
import museo from "../assets/museo.jpg";
import oli from "../assets/olivicultura.jpg";
import  {Link, useLocation}  from "react-router-dom";


const Bodegas = () => {
    const clasificaciones = [
        {
            nombre: "Todas las Bodegas",
            imagen: todas, 
            ruta: "/todas"
          },
          {
            nombre: "Comidas",
            imagen: comidas, 
            ruta: "/comidas"
          },
          {
            nombre: "Actividades",
            imagen: actividad, 
            ruta: "/actividades"
          },
          {
            nombre: "Museos",
            imagen: museo,
            ruta: "/museos"
          },
          {
            nombre: "Olivicultura",
            imagen: oli, 
            ruta: "/olivicultura"
          }
    ];
        const location = useLocation();
      
          useEffect(() => {
          window.scrollTo(0, 0);
          }, [location]);
    return(
        <div className="body-clasificaciones">
            <h1>Bodegas</h1>
            {clasificaciones.map((clasificacion , index) => (
                <div className="tarjeta-clasificacion">
                <Link to= {clasificacion.ruta} key={index} >
                    <img src={clasificacion.imagen} alt="imagen de clasificacion"></img>
                    <h2>{clasificacion.nombre}</h2>
                </Link>
                </div>
            ))}
        </div>
    );


}


export default Bodegas;
