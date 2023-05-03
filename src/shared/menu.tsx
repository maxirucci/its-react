export const Menu = () => {
  return (
    <>
      {/* <BrowserRouter> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href='/inicio'>TP N° 1</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                {/* <Link className="nav-link" to='/inicio'>Inicio</Link> */}
                <a className="nav-link" href='/inicio'>Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/productos'>Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/contacto'>Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/acerca-de'>Acerca de...</a>
              </li>
            </ul>
          </div>

        </nav>
      {/* </BrowserRouter> */}
    </>
  )
}