import { useState } from "react"

export const FormularioContacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    mail: '',
    motivo: '',
    motivoTexto: ''
  })

  const onInputChange = ({ target }) => {
    const campo = target.id
    const valor = target.value

    setFormulario({
      ...formulario,
      [campo]: valor
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formulario);

    onReset()
  }

  const onReset = () => {
    setFormulario({nombre: '', mail: '', motivo: '', motivoTexto: ''})
  }
  
  return (
    <>
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Ingrese sus datos por favor...</legend>

          <div className="form-group">
            <label htmlFor="nombre" className="form-label mt-4">Nombre</label>
            <input type="text" id='nombre' className="form-control" onChange={onInputChange} value={formulario.nombre} />
            <small className="form-text text-muted">El contacto no puede ser anónimo.</small>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label mt-4">Dirección de correo</label>
            <input type="email" id='mail' className="form-control" onChange={onInputChange} value={formulario.mail}/>
            <small className="form-text text-muted">El mail no puede estar vacío.</small>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label mt-4">Seleccione el motivo de contacto</label>
            <select name="selector" id="motivo" className="form-select" onChange={onInputChange} value={formulario.motivo}>
              <option value="reembolso">Solicitud de reembolso</option>
              <option value="mercaderia dañada">Informar mercadería dañada</option>
              <option value="sugerencias">Sugerencias</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="motivoTexto" className="form-label mt-4">Motivo</label>
            <textarea id='motivoTexto' className="form-control" rows={5} onChange={onInputChange} value={formulario.motivoTexto}></textarea>
          </div>

          <button className="btn btn-primary mt-4">Enviar formulario</button>

        </fieldset>
      </form>
    </>
  )
}