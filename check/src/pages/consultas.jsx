import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";



const Consulta = () => {
  
  const location = useLocation();
      useEffect(() => {
      window.scrollTo(0, 0);
      }, [location]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Verifica que todos los campos estén llenos
        if (!name || !email || !message) {
          setError('Todos los campos son requeridos');
          return;
        }
      
        // Verifica que el token esté presente
        const token = sessionStorage.getItem('token');
        if (!token) {
          setError('No se ha encontrado un token de autenticación');
          return;
        }
  
      try {
        const response = await axios.post(
          'http://localhost:4000/consulta',
          { name, email, message },
          { headers: { Authorization: `Bearer ${token}` } }
          
        );
        console.log('Respuesta del servidor:', response);
        setSuccess('Consulta enviada exitosamente');
        setName('');
        setEmail('');
        setMessage('');
        setError('');
      } catch (error) {
        if (error.response) {
          setError(error.response.data.error);
        } else {
          setError('Hubo un error al enviar la consulta');
        }
      }
    };
  
    return (
      <div className="consultas-conteiner">
        <h1>Contáctanos</h1>
        <div className="formulario-consulta">
          <form onSubmit={handleSubmit}>
          <h2>Consulta</h2>
            <div className="campos-consulta">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
          
              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="message">Mensaje:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
    
            <button className="boton-consulta" type="submit">Enviar Consulta</button>
          </form>
          
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    );
}


export default Consulta;


