import './App.css';
import { Route, Routes, BrowserRouter,  } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Inicio from './vistas/Inicio'; import Noticias from './vistas/Noticias';
import Equipos from './vistas/Equipos'; import Torneos from './vistas/Torneos';

import EquipoDetalle from './vistas/EquipoDetalle';
import ModalJugador from './componentes/ModalJugador';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/equipos' element={<Equipos />} />
          <Route path='/noticias' element={<Noticias />} />
          <Route path='/torneos' element={<Torneos />} />          
          <Route path='/equipos/:id' element={<EquipoDetalle />} />         
                          
        </Routes>
      </BrowserRouter>
     <ModalJugador/>
    </div>
  );
}

export default App;
