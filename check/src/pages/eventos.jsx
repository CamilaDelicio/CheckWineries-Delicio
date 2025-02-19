import React,  { useEffect} from "react";
import eventos from "../components/dato-evento";
import { format } from 'date-fns'; // Importa la función 'format' de date-fns
import { es } from 'date-fns/locale'; // Para que el formato sea en español


const Evento = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        <div className="lista-eventos">
            <h1>Lista de Eventos</h1>
            {eventos.map((evento, index) => (
                <div key={index} className="card-evento">
                  <img 
                    src={evento.foto} 
                    alt={evento.nombre} 
                    className="evento-imagen"
                  />
                  <h3 className="evento-nombre">{evento.nombre}</h3>
                  
                  <div className="evento-info">
                  <p><strong>Bodega:</strong> {evento.bodega}</p>
                  <p><strong>Tipo:</strong> {evento.tipo}</p>
                  <p><strong>Fecha:</strong> {new Date(evento.fecha).toLocaleDateString('es-ES', { timeZone: 'UTC' })}</p>
                  <p><strong>Horario:</strong> {evento.horario}</p>
                  <p><strong>Precio:</strong> {evento.precio}</p>
                  <p><strong>Ubicación:</strong> {evento.direccion}</p>
                  <p><strong>Incluye:</strong>
                    <ul>
                      {evento.actividades.map((actividad, index) => (
                      <li key={index}>{actividad}</li>
                        ))}
                    </ul>
                    </p>
                  <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(evento.ubicacion)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="link-maps"
                    >
                        Ver en Google Maps
                    </a>
                    
                  </div>
                  
                    <a 
                        href={`https://wa.me/${evento.contacto}?text=Hola, quiero reservar para el evento ${evento.nombre} que se realiza el día ${new Date(evento.fecha).toLocaleDateString('es-ES', { timeZone: 'UTC' })}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                    <button className="boton-reservar">
                        Reservar
                    </button>
                    </a>
                </div>
              ))}
            </div>
          );
        };

export default Evento;