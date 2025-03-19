import React from 'react';
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import '../index.css';

const Terminos = () => {
  
  const location = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [location]);
  return (
    <div className="terminos">
      <h2>Términos y Condiciones</h2>

      <h3>1. Introducción</h3>
      <p>
        Estos Términos y Condiciones rigen el uso de nuestro sitio web. Al acceder y utilizar nuestro sitio, aceptas cumplir con estos términos en su totalidad.
      </p>

      <h3>2. Aceptación de los Términos</h3>
      <p>
        Al utilizar este sitio web, aceptas estos Términos y Condiciones. Si no estás de acuerdo con alguno de los términos, por favor no utilices este sitio.
      </p>

      <h3>3. Uso del Sitio Web</h3>
      <p>
        Este sitio web está diseñado para proporcionar información a turistas de todo el mundo. Se espera que los usuarios utilicen el sitio de manera responsable y respetuosa.
      </p>

      <h3>4. Registro de Usuarios</h3>
      <p>
        Para acceder a ciertas funciones, se te puede solicitar que proporciones tu correo electrónico y contraseña. Esta información se utiliza únicamente para:
      </p>
      <ul>
        <li>Verificar tu identidad.</li>
        <li>Permitir el acceso al sitio web.</li>
        <li>Valorar la utilidad de la información.</li>
      </ul>
      <p>No compartimos tus datos personales con terceros.</p>

      <h3>5. Propiedad Intelectual</h3>
      <p>
        Todo el contenido de este sitio web, incluidos textos, imágenes y gráficos, es propiedad exclusiva del titular del sitio, salvo que se indique lo contrario. No está permitido copiar, distribuir o modificar el contenido sin autorización previa.
      </p>

      <h3>6. Limitación de Responsabilidad</h3>
      <p>
        No nos hacemos responsables de posibles errores en la información ni de interrupciones en el servicio. El uso del sitio web es bajo tu propio riesgo.
      </p>

      <h3>7. Modificaciones a los Términos</h3>
      <p>
        Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Se notificará a los usuarios sobre cambios importantes mediante un aviso en el sitio web.
      </p>

      <h3>8. Contacto</h3>
      <p>
        Si tienes dudas o sugerencias sobre estos Términos y Condiciones, puedes contactarnos a través del formulario de contacto disponible en el sitio web.
      </p>
    </div>
  );
};

export default Terminos;
