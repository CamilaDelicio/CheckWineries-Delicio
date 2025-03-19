import {React, useEffect} from "react";
import { useParams } from "react-router-dom";
import bodega from "../../components/dato-bodega";
import Redes from "../../components/redes";
import CarruselBodega from "../../components/carrusel";
import Transporte from "../../components/transporte";
import Mapa from "../../components/mapa";
import Idioma from "../../components/idioma";
import {  useLocation } from "react-router-dom";
import Whatsapp from "../../components/whatsapp";


const DetalleBodega = () => {
    const {id} = useParams();
    const bodegaEncontrada = bodega.find(bodegaItem => bodegaItem.id === parseInt(id) )
    if (!bodegaEncontrada) {
        return <h1>Bodega no encontrada</h1>;
    }
    
    const location = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [location]);
return (
    <div className="detalle-bodega">
        <div className="nombre-bodega">
            <h1>{bodegaEncontrada.nombre}</h1>
        </div>
        <div>
            <CarruselBodega images={bodegaEncontrada.images}></CarruselBodega>
        </div>
        <div className="historia">
            <h2>Historia</h2>
            <Redes  socialMedia= {bodegaEncontrada.socialMedia} email ={bodegaEncontrada.email}></Redes>
        </div>
        <div className="historiaExplicada">
            <p>{bodegaEncontrada.historia}</p>
        </div>
        
        <div className="detalles">
            <div className="horarios">
                <h2>Horarios:</h2>
                <p>{bodegaEncontrada.horarios}</p>
            </div>
            <div className="actividades ">
                <h2>Actividades:</h2>
                <ul>
                        {bodegaEncontrada.actividades.map((actividad, index) => (
                            <li key={index}>{actividad}</li>
                        ))}
                    </ul>
            </div>
            <div className="transporte">
                <h2>Transporte:</h2>
                <Transporte  transporte={bodegaEncontrada.transporte}></Transporte>
            <div className="idiomas"> 
                    <h2>Idiomas disponibles:</h2>
                    <div className="iconos-idiomas">
                        <Idioma idiomas={bodegaEncontrada.idiomas} />
                    </div>
            </div>
            </div>
            <div className="maps">
                <h2>Ubicación:</h2>
                <Mapa lat= {bodegaEncontrada.location.lat} long={bodegaEncontrada.location.long} direccion={bodegaEncontrada.direccion}></Mapa>
            </div>

        </div>
        <div className="wsp-contacto">
            <Whatsapp whatsapp={bodegaEncontrada.whatsapp}></Whatsapp>
        </div>
    </div>
)
}

export default DetalleBodega;