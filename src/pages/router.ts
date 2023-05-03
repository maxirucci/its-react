import { InicioPage } from "../pages/Inicio.tsx";
import { ProductosPage } from "../pages/Productos.tsx";
import { ContactoPage } from "../pages/Contacto.tsx";
import { AcercaDePage } from "../pages/AcercaDe.tsx";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/inicio", Component: InicioPage },
  { path: '/productos', Component: ProductosPage },
  { path: '/contacto', Component: ContactoPage },
  { path: 'acerca-de', Component: AcercaDePage },
  { path: '/', Component: InicioPage },
]);