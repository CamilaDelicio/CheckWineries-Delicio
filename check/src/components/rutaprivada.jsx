import { Navigate, Outlet } from "react-router-dom";

const RutaPrivada = () => {
    const token = sessionStorage.getItem("token");
    console.log('Token en RutaPrivada:', token); // Para depuración
    return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RutaPrivada;
