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
        <li>Nombre</li>
        <li>Contraseña</li>
      </ul>
      <p>
        Esta información se utiliza únicamente para permitir el acceso al sitio web y permitir a los usuarios valorar la utilidad de la información.
      </p>

      <h3>2. Uso de la Información</h3>
      <p>
        Utilizamos los datos personales recopilados para:
      </p>
      <ul>
        <li>Verificar la identidad del usuario.</li>
        <li>Permitir el acceso al sitio web.</li>
        <li>Recibir y gestionar valoraciones sobre la utilidad de la información.</li>
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

      <h3>5. Derechos del Usuario</h3>
      <p>
        Como usuario, usted tiene derecho a:
      </p>
      <ul>
        <li>Acceder a sus datos personales.</li>
        <li>Actualizar o corregir su información personal.</li>
        <li>Eliminar su cuenta y datos asociados en cualquier momento.</li>
      </ul>
      <p>
        Para ejercer estos derechos, contáctenos a través del formulario de contacto disponible en el sitio web.
      </p>

      <h3>6. Uso de Cookies</h3>
      <p>
        Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario. Las cookies se utilizan únicamente para:
      </p>
      <ul>
        <li>Mantener la sesión iniciada.</li>
        <li>Analizar el uso del sitio web de manera anónima para mejorar el contenido.</li>
      </ul>
      <p>
        Usted puede gestionar o desactivar las cookies desde la configuración de su navegador.
      </p>

      <h3>7. Actualizaciones de la Política de Privacidad</h3>
      <p>
        Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Se notificará a los usuarios sobre cambios importantes mediante un aviso en el sitio web. La última actualización de esta política fue el [fecha].
      </p>

      <h3>8. Contacto</h3>
      <p>
        Si tiene dudas o consultas sobre nuestra política de privacidad, puede ponerse en contacto a través del formulario de contacto disponible en el sitio web.
      </p>
    </div>
  );
};


export default PolPrivacidad;