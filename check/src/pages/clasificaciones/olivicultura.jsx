import React from "react"; 
import bodega from "../../components/dato-bodega";
import { Link, useLocation } from "react-router-dom";
import "../../index.css";
import { useEffect } from "react";

const Olivicola = () => {
    const location = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [location]);

    const bodegaOlivicola = bodega.filter((bodega) => 
        bodega.actividades.includes("Olivicultura") ||
        bodega.nombre.includes("Olivícola")
);

return (
    <div className="body-comidas">
        <h1>Olivicultura</h1>
        <div className="contenedor-tarjeta">
            {bodegaOlivicola.length > 0 ? (
                bodegaOlivicola.map((bodegaItem) => (
                    <div key={bodegaItem.id} className="tarjeta-comidas">
                        <Link to={`/detalles/${bodegaItem.id}`}>
                            <img src={bodegaItem.images[0]} alt={bodegaItem.nombre} />
                            <h2>{bodegaItem.nombre}</h2>
                        </Link>
                    </div>
                ))
            ) : (
                <p>No se encontraron bodegas con actividades de olivicultura.</p>
            )}
        </div>
    </div>
);





}

export default Olivicola;