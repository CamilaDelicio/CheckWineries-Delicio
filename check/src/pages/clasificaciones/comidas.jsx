import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import almuerzo1 from "../../assets/almuerzo1.jpg";
import picnic from "../../assets/picnic.jpg";
import cena from "../../assets/cena.jpg"



const Comidas = () => {
    const comidas = [
        {
            nombre: "Almuerzo",
            imagen: almuerzo1, 
            ruta: "/almuerzo"
        },
        {
            nombre: "Pincnic",
            imagen: picnic, 
            ruta: "/picnic"
        },
        {
            nombre: "Cena",
            imagen: cena, 
            ruta: "/cena"
        }
    ];

        const location = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [location]);
    
    return (
        <div className="body-comidas">
            <h1>Comidas en Bodega</h1>
            <div className="contenedor-tarjeta">
            {comidas.map((comida , index) => (
                <div className="tarjeta-comidas">
                    <Link to= {comida.ruta} key={index}>
                    <img src={comida.imagen} alt="clasificacion imagen"></img>
                    <h2>{comida.nombre}</h2>
                    </Link>
                </div>
                
            ))}
            </div>
        </div>
    )




}
export default Comidas; 