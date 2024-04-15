import React from "react";

export const CardTipo = (props) => {

  return (

      <div class="card" style={{width: "18rem;"}}>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Tipo: {props.name}</h5>
          <p class="card-text">Detalles: {props.detalles}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  )
}