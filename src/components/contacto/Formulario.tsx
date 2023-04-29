export const FormularioContacto = () => {
  return (
    <>
      <form>
        <fieldset>
          <legend>Ingrese sus datos por favor...</legend>

          <div className="form-group">
            <label htmlFor="nombre" className="form-label mt-4">Nombre</label>
            <input type="text" id='nombre' className="form-control" />
            <small className="form-text text-muted">El contacto no puede ser anónimo.</small>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label mt-4">Dirección de correo</label>
            <input type="email" id='email' className="form-control" />
            <small className="form-text text-muted">El mail no puede estar vacío.</small>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label mt-4">Seleccione el motivo de contacto</label>
            <select name="selector" id="motivo" className="form-select">
              <option value="reembolso">Solicitud de reembolso</option>
              <option value="mercaderiaDaniada">Informar mercadería dañada</option>
              <option value="sugerencias">Sugerencias</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="motivoTexto" className="form-label mt-4">Motivo</label>
            <textarea id='motivoTexto' className="form-control" rows={5}></textarea>
          </div>

        </fieldset>
      </form>
    </>
  )
}