import {React, useState} from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import almuerzo1 from "../../assets/almuerzo1.jpg";
import picnic from "../../assets/picnic.jpg";
import cena from "../../assets/cena.jpg";
import bodega from "../../components/dato-bodega";




const Comidas = () => {
    const [tipoComida, setTipoComida] = useState(null)
    const comidas = [
        {
            nombre: "Almuerzo",
            imagen: almuerzo1,  
            tipo: "almuerzo"
        },
        {
            nombre: "Pincnic",
            imagen: picnic, 
            tipo: "picnic"
        },
        {
            nombre: "Cena",
            imagen: cena, 
            tipo: "cena"
        }
    ];

        const location = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [location]);
    
        const bodegaComida = tipoComida
        ? bodega.filter(bodega => bodega.actividades.includes(tipoComida.charAt(0).toUpperCase() + tipoComida.slice(1)))
        : [];
    return (
        <div className="body-comidas">
            <h1>Comidas en Bodega</h1>
            <div className="contenedor-tarjeta">
            {comidas.map((comida, index) => (
                 <div
                 key={index}
                 className={`tarjeta-comidas ${tipoComida === comida.tipo ? 'tarjeta-comida-seleccionada' : ''}`}
                 onClick={() => setTipoComida(comida.tipo)}
                >
                    <img src={comida.imagen} alt={comida.nombre} />
                    <h2>{comida.nombre}</h2>
                </div>
            ))}
        </div>
        {tipoComida && bodegaComida.length > 0 && (
                <div className="resultados-comidas">
                    <h2 className="titulo-comida">Resultados {tipoComida.charAt(0).toUpperCase() + tipoComida.slice(1)}</h2>
                    <div className="contenedor-tarjeta">
                        {bodegaComida.map(bodegaItem => (
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
    );
};
export default Comidas; 