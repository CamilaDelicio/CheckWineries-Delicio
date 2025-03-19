import React from "react";
import "../index.css"
import en from "../assets/ingles(2).png";
import pt from "../assets/portugues(4).png";
import "./dato-bodega";



const Idioma = ({idiomas}) => {
    const bandera = [
        {nombre: "ingles", iconoidioma: en},
        {nombre: "portugues", iconoidioma: pt}
    ]
    return(
        <div className="idiomas">
            {bandera.map(({nombre, iconoidioma}) => {
            return(
                idiomas[nombre] && (
                    <img
                      key={nombre}
                      src={iconoidioma} 
                      alt={`Bandera de ${nombre}`}
                      className="bandera"
                      />
        )
      );
    })}
        </div>
    )
    }


    export default Idioma; 