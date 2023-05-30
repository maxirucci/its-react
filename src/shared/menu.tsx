import { Link } from "react-router-dom"

export const Menu = () => {
  return (
    <>
      {/* <BrowserRouter> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link className="navbar-brand" to='/inicio' >TP N° 1</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                {/* <Link className="nav-link" to='/inicio'>Inicio</Link> */}
                <Link className="nav-link" to='/inicio'>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/productos'>Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/contacto'>Contacto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/contador'>Contador</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/acerca-de'>Acerca de...</Link>
              </li>
            </ul>
          </div>

        </nav>
      {/* </BrowserRouter> */}
    </>
  )
}