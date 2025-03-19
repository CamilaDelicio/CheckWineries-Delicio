import {React} from 'react';
import Inicio from './pages/inicio';
import Bodegas from './pages/bodegas';
import Header from './components/header';
import Footer from './components/footer';
import Comidas from './pages/clasificaciones/comidas';
import Actividades from './pages/clasificaciones/actividades';
import ListaBodega from './pages/clasificaciones/todas';
import DetalleBodega from './pages/clasificaciones/detalles';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Olivicola from './pages/clasificaciones/olivicultura';
import Museo from './pages/clasificaciones/museos';
import PregFrecuentes from './pages/preguntas';
import PolPrivacidad from './pages/politicas';
import Terminos from './pages/terminos';
import Evento from './pages/eventos';
import Register from "./pages/register";
import Login from './pages/login';
import RutaPrivada from './components/rutaprivada';
import Consulta from './pages/consultas';


function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

          <Route element={<RutaPrivada/>}>
                <Route path="/inicio" element={<><Header /><Inicio /><Footer /></>} />
                <Route path="/bodegas" element={<><Header /><Bodegas /><Footer /></>} />
                <Route path="/comidas" element={<><Header /><Comidas /><Footer /></>} />
                <Route path="/actividades" element={<><Header /><Actividades /><Footer /></>} />
                <Route path="/todas" element={<><Header /><ListaBodega /><Footer /></>} />
                <Route path="/detalles/:id" element={<><Header /><DetalleBodega /><Footer /></>} />
                <Route path="/olivicultura" element={<><Header /><Olivicola /><Footer /></>} />
                <Route path="/museos" element={<><Header /><Museo /><Footer /></>} />
                <Route path="/preguntas" element={<><Header /><PregFrecuentes /><Footer /></>} />
                <Route path="/politicas" element={<><Header /><PolPrivacidad /><Footer /></>} />
                <Route path="/terminos" element={<><Header /><Terminos /><Footer /></>} />
                <Route path="/eventos" element={<><Header /><Evento /><Footer /></>} />
                <Route path="/consultas" element={<><Header /><Consulta /><Footer /></>} />
                </Route>
                <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
