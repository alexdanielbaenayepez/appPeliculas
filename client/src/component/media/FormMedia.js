import React, {useState} from 'react'

export const FormMedia = ()=> {

  const [nombre , setPNombre] = useState('')
  const [estado, setEstado] = useState('')
  const [fechaCreacion, setFechaCreacion] = useState('')
  const [fechaActualizacion, setFechaActualizacion] = useState('')
  /*
  *   "nombre" : "cmlo",
"estado" : "activo",
"fechaCreacion" : "2010-01-17T16:45:30Z",
"fechaActualizacion" : "2022-04-26T07:46:36.611Z"*/


  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonBody = {
      nombre, estado, fechaCreacion, fechaActualizacion
    }

    fetch('http://localhost:3001/creardirector', {
      method: "post",
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(jsonBody)})
        .then(jsonBody => console.log(jsonBody))
  };

  return (
      <div>
        <h1>Formulario de Creacion de Media</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor=" " className="form-label"></label>
            <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                aria-describedby="nombre"
                onChange={(e) => setPNombre(e.target.value)}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor=" " className="form-label"></label>
            <input
                type="text"
                className="form-control"
                aria-describedby="estado"
                placeholder="estado"
                onChange={(e) => setEstado(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor=" " className="form-label"></label>
            <input
                type="date"
                className="form-control"
                aria-describedby="FechaCreacion"
                placeholder="Fecha Creacion"
                onChange={(e) => setFechaCreacion(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor=" " className="form-label"></label>
            <input
                type="date"
                className="form-control"
                aria-describedby="FechaActualizacion"
                placeholder="Fecha Actualizacion"
                onChange={(e) => setFechaActualizacion(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
  );
}