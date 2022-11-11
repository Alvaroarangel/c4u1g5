import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CrearCuenta from './paginas/auth/CrearCuenta';
import Login from './paginas/auth/Login';
import Home from './paginas/Home';
import Cuenta from './paginas/cuenta/Cuenta';
import Contacto from './paginas/cuenta/Contacto';

// import TareasAdmin from './paginas/proyectos/TareasAdmin';
// import TareasCrear from './paginas/proyectos/TareasCrear';
// import TareasEditar from './paginas/proyectos/TareasEditar';



function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/CrearCuenta" exact element={<CrearCuenta/>}/>
          <Route path="/Home" exact element={<Home/>}/>
          <Route path="/Cuenta" exact element={<Cuenta/>}/>
          <Route path="/Contacto" exact element={<Contacto/>}/>
     

          {/* // <Route path="/tareas-admin/:idproyecto" exact element={<TareasAdmin/>}/>
          // <Route path="/tareas-crear/:idproyecto" exact element={<TareasCrear/>}/>
          // <Route path="/tareas-editar/:idproyecto" exact element={<TareasEditar/>}/>  */}

        </Routes>
      </Router>
    </Fragment>
    
  );
}

export default App;
