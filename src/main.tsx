import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootswatch/dist/darkly/bootstrap.min.css";

import { Menu } from './shared/Menu.tsx'
import App from './App.tsx';
import { InicioPage } from './pages/Inicio.tsx'
import { ProductosPage } from './pages/Productos.tsx'
import { ContactoPage } from './pages/Contacto.tsx'
import { AcercaDePage } from './pages/AcercaDe.tsx';
import { PieDePagina } from './shared/PieDePagina.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Menu />

    <App />
    {/* <InicioPage /> */}
    {/* <ProductosPage /> */}
    {/* <ContactoPage /> */}
    {/* <AcercaDePage /> */}
    

    <PieDePagina />
  </React.StrictMode>
)
