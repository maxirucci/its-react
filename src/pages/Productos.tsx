import { TarjetaProductos } from "../components/productos/TarjetaProductos"

export const ProductosPage = () => {
  return (
    <>
      <div className="container text-center">
        <h1>Nuestros productos</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, omnis sed molestiae iure autem reiciendis assumenda numquam aperiam vitae voluptatem repellat, soluta explicabo eius deserunt ea consequatur, laudantium odit architecto.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reiciendis, doloremque quisquam dolor aliquid eveniet saepe incidunt laborum itaque, in consequatur eaque aliquam iusto earum eum, facilis illum nostrum vel.
        </p>

        <div className="row">
          <TarjetaProductos />
          <TarjetaProductos />
          <TarjetaProductos />
          <TarjetaProductos />
          <TarjetaProductos />
          <TarjetaProductos />
          <TarjetaProductos />
        </div>

      </div>
    </>
  )
}