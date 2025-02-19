import React from "react";
import wsp from "../assets/whatsapp.png"

const Whatsapp = ({whatsapp}) => {
    const numeroWsp = whatsapp.replace(/\D/g, '');
    return(
        <div>
            {whatsapp &&(
                <a href={`https://wa.me/${numeroWsp}`} target="_blank" rel="noreferrer">
                    <img src={wsp} alt="whatsapp bodega"></img>
                </a>
            )}
        </div>
    )
}
export default Whatsapp