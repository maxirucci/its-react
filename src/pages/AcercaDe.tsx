import { TarjetaAcercaDe } from "../components/acercaDe/tarjetaAcercaDe"

export const AcercaDePage = () => {

  const texto = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ratione quae, numquam perferendis totam sit pariatur quos accusamus velit nobis repellat, incidunt officiis dolor unde similique, quia error hic iusto?\n'

  return (
    <>
      <img className="img-fluid" src="src\assets\acerca-de-nosotros.png" alt="Banner acerca de nosotros" />
      
      <div className="container mt-3">
        <div className="row">

          <TarjetaAcercaDe titulo='Titulo 1' informacion={ texto + texto + texto } />
          <TarjetaAcercaDe titulo='Titulo 2' informacion={ texto }/>
          <TarjetaAcercaDe titulo='Titulo 3' informacion={ texto + texto }/>
          <TarjetaAcercaDe titulo='Titulo 4' informacion={ texto }/>

        </div>

      </div>
    </>
  )
}