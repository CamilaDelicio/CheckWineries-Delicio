import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PregFrecuentes = () => {
    const [pregOpen, setPregOpen] = useState(null);

    const clicPreg = (index) => {
        setPregOpen(pregOpen === index ? null : index); 
    };
    const location = useLocation();
          
              useEffect(() => {
              window.scrollTo(0, 0);
              }, [location]);
    return (
        <div className="preguntas">
            <h1>Preguntas Frecuentes</h1>

            <div className="recuadro">

            <div className="pregunta">
                <h2 onClick={() => clicPreg(1)}
                    className={pregOpen === 1 ? "pregunta-activa" : ""}>
                    ¿Qué es Check Wineries?
                </h2>
                {pregOpen === 1 && (
                    <p>
                         Check Wineries es una aplicación diseñada para que encuentres fácilmente toda la información sobre las bodegas que deseas visitar.
                         Actúa como un nexo directo con cada una de las bodegas de Maipú, ayudándote a planificar tu visita y asegurando que vivas una experiencia única.
                    </p>
                )}
                <h2 onClick={() => clicPreg(2)} className={pregOpen === 2 ? "pregunta-activa" : ""}>
                    ¿Cómo reservar en tu bodega favorita?
                </h2>
                {pregOpen === 2 && (
                    <p>
                        Selecciona la bodega que deseas visitar. Al hacer clic, verás toda la información relevante, como horarios, ubicación, opciones de transporte y un ícono de "WhatsApp".
                         Al presionar este ícono, serás redirigido al contacto de la bodega elegida, donde podrás reservar tu actividad favorita de manera directa.
                    </p>
                )}
                <h2 onClick={() => clicPreg(3)} className={pregOpen === 3 ? "pregunta-activa" : ""}>
                    ¿Se puede buscar por filtros?
                </h2>
                {pregOpen === 3 && (
                    <p>
                        No, Check Wineries no cuenta con filtros de búsqueda. Sin embargo, puedes explorar las diferentes clasificaciones disponibles, como comidas, actividades, museos y olivicultura. 
                        Estas categorías se encuentran en la sección "Lista de Bodegas", lo que te permite seleccionar la opción que mejor se ajuste a tus preferencias.
                    </p>
                )}
                <h2 onClick={() => clicPreg(4)} className={pregOpen === 4 ? "pregunta-activa" : ""}>
                ¿Check Wineries está disponible en otros idiomas?
                </h2>
                {pregOpen === 4 && (
                    <p>
                        Sí, puedes seleccionar el idioma en la parte superior derecha de la pantalla. Los idiomas disponibles son inglés, español y portugués.
                    </p>
                )}
                <h2 onClick={() => clicPreg(5)} className={pregOpen === 5 ? "pregunta-activa" : ""}>
                ¿Qué opciones de transporte están disponibles para visitar las bodegas?
                </h2>
                {pregOpen === 5 && (
                    <p>
                        Las opciones disponibles son automóvil particular, bicicleta y bus.
                        Al ingresar a la información de cada bodega, en la sección de transporte, podrás ver cuáles de estas opciones están disponibles para tu visita.
                    </p>
                )}
            </div>
            </div>

        </div>
    );
};

export default PregFrecuentes;
