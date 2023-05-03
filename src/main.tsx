import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootswatch/dist/darkly/bootstrap.min.css";
import './style.scss'

import { Menu } from './shared/Menu.tsx'
import App from './App.tsx';
import { PieDePagina } from './shared/PieDePagina.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Menu />

    <App />

    <PieDePagina />
  </React.StrictMode>
)
