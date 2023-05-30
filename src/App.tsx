import { Route, Routes } from "react-router-dom";
import { InicioPage } from "./pages/Inicio";
import { ProductosPage } from "./pages/Productos";
import { ContactoPage } from "./pages/Contacto";
import { AcercaDePage } from "./pages/AcercaDe";
import { ContadorPage } from "./pages/Contador";

function App() {
  return (
    <>
      <Routes>
        <Route path="/inicio" Component={InicioPage} />
        <Route path="/productos" Component={ProductosPage} />
        <Route path="/contacto" Component={ContactoPage} />
        <Route path="/contador" Component={ContadorPage} />
        <Route path="/acerca-de" Component={AcercaDePage} />
      </Routes>
    </>
  )
}

export default App
