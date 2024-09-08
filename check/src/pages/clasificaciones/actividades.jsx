import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import visitas from "../../assets/visitas.jpg";
import degustacion from "../../assets/degustacion.jpg";
import curso from "../../assets/cursos.jpg";
import maridaje from "../../assets/maridaje.jpg";


const Actividades = () => {
    const actividades = [
        {
            nombre: "Visita Guiada",
            imagen: visitas, 
            ruta: "/visitas"
        },
        {
            nombre: "Degustaciones",
            imagen: degustacion, 
            ruta: "/degustacion"
        },
        {
            nombre: "Cursos",
            imagen: curso, 
            ruta: "/cursos"
        },
        {
            nombre: "Maridaje",
            imagen: maridaje, 
            ruta: "/maridaje"
        }
    ];

        const location = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [location]);
    
    return (
        <div className="body-comidas">
            <h1>Actividades en Bodega</h1>
            <div className="contenedor-tarjeta">
            {actividades.map((actividad , index) => (
                <div className="tarjeta-comidas">
                    <Link to= {actividad.ruta} key={index}>
                    <img src={actividad.imagen} alt="clasificacion imagen"></img>
                    <h2>{actividad.nombre}</h2>
                    </Link>
                </div>
                
            ))}
            </div>
        </div>
    )




}
export default Actividades; 