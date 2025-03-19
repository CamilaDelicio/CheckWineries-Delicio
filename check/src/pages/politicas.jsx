import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../index.css';

const PolPrivacidad = () => {
    const location = useLocation();
        useEffect(() => {
        window.scrollTo(0, 0);
        }, [location]);
        
  return (
    <div className="politicas">
      <h2>Política de Privacidad</h2>

      <h3>1. Información que Recopilamos</h3>
      <p>
        En nuestro sitio web, recopilamos los siguientes datos personales:
      </p>
      <ul>
        <li>Correo electrónico</li>
        <li>Contraseña</li>
      </ul>
      <p>
        Esta información se utiliza únicamente para permitir el acceso al sitio web y consultar dudas o sugerencias.
      </p>

      <h3>2. Uso de la Información</h3>
      <p>
        Utilizamos los datos personales recopilados para:
      </p>
      <ul>
        <li>Verificar la identidad del usuario.</li>
        <li>Permitir el acceso al sitio web.</li>
      </ul>
      <p>No utilizamos los datos personales con fines publicitarios ni para enviar comunicaciones promocionales.</p>

      <h3>3. No Compartimos Información con Terceros</h3>
      <p>
        Nos comprometemos a no compartir sus datos personales con terceros. La información recopilada es utilizada exclusivamente para el funcionamiento de este sitio web.
      </p>

      <h3>4. Seguridad de los Datos</h3>
      <p>
        Implementamos medidas de seguridad para proteger los datos personales, tales como:
      </p>
      <ul>
        <li>Cifrado de contraseñas.</li>
        <li>Acceso restringido a la información personal.</li>
      </ul>
      <p>
        Aunque utilizamos medidas de seguridad adecuadas, ningún sistema es completamente seguro. Por ello, no podemos garantizar la protección absoluta de los datos frente a accesos no autorizados.
      </p>

      <h3>5. Actualizaciones de la Política de Privacidad</h3>
      <p>
        Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Se notificará a los usuarios sobre cambios importantes mediante un aviso en el sitio web. La última actualización de esta política fue el 28/02/2025.
      </p>

      <h3>8. Contacto</h3>
      <p>
        Si tiene dudas o consultas sobre nuestra política de privacidad, puede ponerse en contacto a través del formulario de contacto disponible en el sitio web.
      </p>
    </div>
  );
};


export default PolPrivacidad;