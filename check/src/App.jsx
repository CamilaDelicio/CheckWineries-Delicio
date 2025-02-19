import React from 'react';
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


function App() {
  return(
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element= {<Inicio/>}></Route>
          <Route path='/bodegas' element= {<Bodegas/>}></Route>
          <Route path='/comidas' element= {<Comidas/>}></Route>
          <Route path='/actividades' element= {<Actividades/>}></Route>
          <Route path='/todas' element= {<ListaBodega/>}></Route>
          <Route path='/detalles/:id' element= {<DetalleBodega/>}></Route>
          <Route path='/olivicultura' element= {<Olivicola/>}></Route>
          <Route path='/museos' element= {<Museo/>}></Route>
          <Route path='/preguntas' element= {<PregFrecuentes/>}></Route>
          <Route path='/politicas' element= {<PolPrivacidad/>}></Route>
          <Route path='/terminos' element= {<Terminos/>}></Route>
          <Route path='/eventos' element= {<Evento/>}></Route>

          <Route path='/eventos/:nombre' element= {<Evento/>}></Route>
          

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
