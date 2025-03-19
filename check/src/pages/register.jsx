import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"; 
import logo from "../assets/logocheck1.png"

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {  
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await axios.post('http://localhost:4000/register', {
                email,
                password
            });
            console.log('Respuesta del servidor:', response);
            alert('El usuario ha sido registrado con éxito.');

            navigate('/login');  
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert('El usuario ya existe');
                navigate('/login');
            } else {
                alert('Error al registrar usuario');
            }
        }
    };
    return (
        <div className="login-conteiner">
            <img src={logo} alt="logotipo"></img>
        <div className="login">
            <h2>Registrate</h2>
        <form onSubmit={handleRegister}>
            
            <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
         
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
           
                <input 
                    type="password" 
                    name="confirmPassword" 
                    id="confirmPassword" 
                    placeholder="Confirme Su Contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button type="submit">Registrarse</button>
            <p>¿Ya tenes cuenta? <Link to = "/login"> Inicia Sesión</Link></p>
        </form>
        </div>
        </div>
    );
};

export default Register;
