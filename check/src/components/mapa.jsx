import React from "react";
import "../index.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import iconLocation from "../assets/location.png";
import "./dato-bodega"

const iconoLocation = L.icon ({
    iconUrl: iconLocation,
    iconSize: [30, 45], 
    iconAnchor: [15, 45], 
    popupAnchor: [0, -40],
})

const Mapa = ({lat, long, direccion}) => { 
    return(
        <div className="mapa">
        <MapContainer  center= {[lat, long]} zoom= {70} style={{ height: "350px", width: "100%" }} >
        <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        <Marker position={[lat,long]} icon={iconoLocation}> 
            <Popup>{direccion}</Popup>
        </Marker>
        </MapContainer>
        <div className="direccion">
            <p>{direccion}</p>
      </div>
    </div>
    )

}

export default Mapa; 