import { useState } from "react"

export const ContadorPage = () => {
  const [contador, setContador] = useState(15)

  const sumar = () => {
    setContador(valor => valor + 1)
  }

  const restar = () => {
    setContador(valor => valor - 1)
  }

  return (
    <>
      <h1 className="text-center mt-3">Un sencillo contador</h1>

      <div className="text-center">
        <h2 className="text-big">{contador}</h2>

        <div>
          <button className="btn btn-primary m-2" onClick={restar}>Restar</button>
          <button className="btn btn-primary m-2" onClick={sumar}>Sumar</button>
        </div>
      </div>
    </>
  )
}