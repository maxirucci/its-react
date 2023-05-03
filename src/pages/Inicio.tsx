import { Carrucel } from "../components/inicio/carrucel"

export const InicioPage = () => {
  return (
    <>
      <div className="container text-center">
        <h1 className="text-center">Página de inicio</h1>

        <section>
          <h3 className="text-center">Esto es un carrusel. ¡Sí! ¡Un carrusel!</h3>
          <Carrucel />
        </section>

        <div>
          <h3 className="text-center">Un poco de información</h3>
          <div className="row">

            <p className="col-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quia ad obcaecati dolore libero! Sunt quod nesciunt optio voluptatum! Architecto excepturi illum iusto neque officiis maxime dolorem iste laboriosam quis.</p>
            <p className="col-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quibusdam temporibus incidunt ullam sint, non eaque laboriosam asperiores. Magnam officiis tempore mollitia nobis veniam illum nam error excepturi eos unde!</p>
          </div>  
        </div>
      </div>
    </>
  )
}