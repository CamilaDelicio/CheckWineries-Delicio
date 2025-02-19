import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import visitas from "../../assets/visitas.jpg";
import degustacion from "../../assets/degustacion.jpg";
import curso from "../../assets/cursos.jpg";
import maridaje from "../../assets/maridaje.jpg";
import bodega from "../../components/dato-bodega";


const Actividades = () => {
    const [tipoAct, setTipoAct] = useState(null);
    const actividades = [
        {
            nombre: "Visita Guiada",
            imagen: visitas, 
            tipo: "Visitas"
        },
        {
            nombre: "Degustaciones",
            imagen: degustacion, 
            tipo: "Degustación"
        },
        {
            nombre: "Cursos",
            imagen: curso, 
            tipo: "Curso"
        },
        {
            nombre: "Maridaje",
            imagen: maridaje, 
            tipo: "Maridaje"
        }
    ];

        const location = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [location]);

        const bodegaActividad = tipoAct
        ? bodega.filter(bodega =>  bodega.actividades.some(act => act.toLowerCase().includes(tipoAct.toLowerCase()))
    )
        : [];
    
    return (
        <div className="body-comidas">
            <h1>Actividades en Bodega</h1>
            <div className="contenedor-actividades">
            {actividades.map((actividad , index) => (
                <div 
                key= {index}
                className={`tarjeta-comidas ${tipoAct === actividad.tipo ? 'tarjeta-comida-seleccionada' : ''}`}
                onClick={() => setTipoAct(actividad.tipo)}
                >
                    <img src={actividad.imagen} alt="clasificacion imagen"></img>
                    <h2>{actividad.nombre}</h2>

                </div>
            ))}
            </div>
            {tipoAct && bodegaActividad.length > 0 &&(
                <div className="resultados-comidas">
                <h2 className="titulo-comida">Resultados {tipoAct.charAt(0).toUpperCase() + tipoAct.slice(1)}</h2>
                <div className="contenedor-tarjeta">
                    {bodegaActividad.map(bodegaItem => (
                        <div key={bodegaItem.id} className="tarjeta-comidas">
                            <Link to={`/detalles/${bodegaItem.id}`}>
                                <img src={bodegaItem.images[0]} alt={bodegaItem.nombre} />
                                <h2>{bodegaItem.nombre}</h2>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )}
        </div>
    )
}
export default Actividades; 