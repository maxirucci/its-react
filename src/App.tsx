import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import { InicioPage } from "./pages/inicio/Inicio-page.tsx";
import { ContactoPage } from "./pages/contacto/Contacto-page.tsx";
import { ProductosPage } from "./pages/productos/Productos-page.tsx";
import { AcercaDePage } from "./pages/acercaDe/AcercaDe-page.tsx";

function App() {
  return (
    <>
      <p>App working!</p>
      
      <Router>
        <Link to='/inicioPage'>Inicio</Link> <br />
        <Link to='/productosPage'>Productos</Link> <br />
        <Link to='/contactoPage'>Contacto</Link> <br />
        <Link to='/acercaDePage'>Acerca</Link> <br />

        <Routes>
          <Route path="/inicioPage" Component={InicioPage} />
          <Route path="/productosPage" Component={ProductosPage} />
          <Route path="/contactoPage" Component={ContactoPage} />
          <Route path="/acercaDePage" Component={AcercaDePage} />
        </Routes>
      </Router>

    </>
  )
}

export default App
