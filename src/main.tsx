import React from 'react'
import ReactDOM from 'react-dom/client'

import Menu from './shared/Menu.tsx'
import "bootswatch/dist/darkly/bootstrap.min.css";

import { PieDePagina } from './shared/PieDePagina.tsx'
import { InicioPage } from './pages/inicio/Inicio-page.tsx'
import { ProductosPage } from './pages/productos/Productos-page.tsx'
import { ContactoPage } from './pages/contacto/Contacto-page.tsx'
import { AcercaDePage } from './pages/acercaDe/AcercaDe-page.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Menu />

    {/* <App /> */}
    {/* <InicioPage /> */}
    {/* <ProductosPage /> */}
    {/* <ContactoPage /> */}
    <AcercaDePage />
    

    <PieDePagina />
  </React.StrictMode>
)
