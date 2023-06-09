import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootswatch/dist/darkly/bootstrap.min.css";
import './style.scss'

import { Menu } from './shared/menu.tsx'
import App from './App.tsx';
import { PieDePagina } from './shared/pieDePagina.tsx'
import { BrowserRouter, Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
  
      <App />
    
      <PieDePagina />
    </BrowserRouter>
  </React.StrictMode>
)
