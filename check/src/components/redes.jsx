import React from "react";
import ig from "../assets/instagram.png";
import mail from "../assets/email.png";
import web from "../assets/web.png"

const Redes = ({socialMedia, email}) => {
    return (
        <div className= "redes">
          {socialMedia.instagram &&(
          <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="redes-icono">
            <img src={ig} alt="Instagram" />
          </a>)}
          {socialMedia.paginaWeb &&(
          <a href={socialMedia.paginaWeb} target="_blank" rel="noopener noreferrer" className="redes-icono">
            <img src={web} alt="Sitio Web" />
          </a>)}
          {email &&(
          <a href={`mailto:${email}`}className="redes-icono">
            <img src={mail} alt="Email" />
          </a>)}
        </div>
      );

};
export default Redes; 