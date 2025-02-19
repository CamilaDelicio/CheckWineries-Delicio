import React from "react";
import "../../components/dato-bodega"
import { Link, useLocation } from "react-router-dom";
import "../../index.css"
import bodega from "../../components/dato-bodega";
import { useEffect } from "react";

const Museo = () => {
    const location = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [location]);
    const bodegaMuseo = bodega.filter((bodega) =>
        bodega.actividades.includes("Tour guiado por el museo del vino")
);
return(
    <div className="body-comidas">
        <h1>Museos</h1>
        <div className="contenedor-tarjeta">
            {bodegaMuseo.length > 0 ? (
                bodegaMuseo.map((bodegaItem) => (
                    <div key={bodegaItem.id} className="tarjeta-comidas">
                        <Link to={`/detalles/${bodegaItem.id}`}>
                            <img src={bodegaItem.images[0]} alt={bodegaItem.nombre} />
                            <h2>{bodegaItem.nombre}</h2>
                        </Link>
                    </div>
                ))
            ) : (
                <p>No se encontraron bodegas con Museo.</p>
            )}
        </div>
    </div>
)



}
export default Museo;