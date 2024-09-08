import React from 'react';
import Inicio from './pages/inicio';
import Bodegas from './pages/bodegas';
import Header from './components/header';
import Footer from './components/footer';
import Comidas from './pages/clasificaciones/comidas';
import Actividades from './pages/clasificaciones/actividades';
import {BrowserRouter, Route, Routes} from "react-router-dom";


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
          
          

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
