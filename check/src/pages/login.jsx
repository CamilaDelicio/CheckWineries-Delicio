import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../assets/logocheck1.png"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token"); 
        if (token) {
            navigate("/inicio"); 
        }
    }, [navigate]);
    


    const handleLogin = async (e) => {
        e.preventDefault();
        

        try {
            const response = await axios.post("http://localhost:4000/login", {
                email,
                password,
            });

            sessionStorage.setItem("token", response.data.token); 
            alert("Inicio de sesión exitoso");
            navigate("/inicio"); 
        } catch (error) {
            if (error.response) {
                alert("Error: " + error.response.data.error);
            } else {
                alert("Error al conectarse al servidor");
            }
        }
    };

    return (
        <div className="login-conteiner">
            <img src={logo} alt="logotipo"></img>
            <div className="login">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleLogin}>
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
                    <button type="submit">Iniciar sesión</button>
                    <p>¿No tenés cuenta aún? <Link to="/register"> Regístrate</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
