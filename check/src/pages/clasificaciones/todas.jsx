import React from 'react';
import { Link } from 'react-router-dom';
import bodega from '../../components/dato-bodega';
import "../../index.css";
import { useState } from 'react';

const ListaBodega = () => {
  const [busqueda, setBusqueda]= useState("")
  const busquedaBodega = bodega.filter(bodegaItem => {
    const palabrasBodega = bodegaItem.nombre.toLowerCase().split(" "); 
    const palabrasBusqueda = busqueda.toLowerCase().split(" "); 
    
    return palabrasBusqueda.some(busquedaPalabra => 
      palabrasBodega.some(bodegaPalabra => bodegaPalabra.includes(busquedaPalabra))
    );
  });
  
    return (
      <div className="body-comidas">
        <h1> Todas las Bodegas</h1>
        <div className='busqueda' >
          <input
            type="text"
            placeholder="Buscar bodega..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          className="input-busqueda"
        />
        </div>
        <div className="contenedor-tarjeta">
          {busquedaBodega.map(bodegaItem => (
            <div key={bodegaItem.id} className='tarjeta-comidas'>
              <Link to={`/detalles/${bodegaItem.id}`}>
                <img src={bodegaItem.images[0]} alt={bodegaItem.nombre} />
                <h2>{bodegaItem.nombre}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
};


export default ListaBodega;
