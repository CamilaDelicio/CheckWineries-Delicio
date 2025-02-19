import React from "react";
import "../index.css";
import bici from "../assets/bicicleta.png";
import bus from "../assets/bus.png";
import taxi from "../assets/taxi.png";
import "./dato-bodega";

const Transporte = ({transporte}) => {
    const iconos= [
        {nombre: "bus" , icono: bus, link: "https://play.google.com/store/apps/details?id=com.wara.mendotran&hl=es_AR&pli=1"},
        {nombre: "taxi" , icono: taxi , link: "https://www.uber.com/ar/es/ride/"},
        {nombre: "bicicleta" ,  icono: bici, link: "#"}
    ]
    return(
        <div className="iconos-conteiner-transporte"> 
            {iconos.map(({nombre, icono, link }) => {
                const isVerdadero = transporte[nombre];
                return(
                    <div key = {nombre} className={`icono-Transporte ${isVerdadero ? 'verdadero' : 'noVerdadero'}`}>
                         <a
                            href={link}  
                            target="_blank" 
                            rel="noopener noreferrer" 
                        >
                        <img src={icono} alt="" className="transporte-icon"></img>
                        </a>
                    </div>
                );
            })}
        </div>
    )
}

export default Transporte;

